import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { cargarDatosProvedor, getDatosID, getTiposID, getVigencias, obtenerDatosProvedor, obtenerTelefonosProvedores } from '../../../../../shared/actions/shared.actions';
import { OPCIONES_AREA_FUNCIONAL } from '../../../../../shared/interfaces/interfaces';
import { seleccionarProveedores, seleccionarTelefonosProveedores, selectDatosID, selectTiposID, selectVigencias } from '../../../../../shared/selectors/shared.selectors';
import { cargarInfoFuncionario } from '../../actions/solicitudavances.actions';

@Component({
  selector: 'ngx-set-infofuncionario',
  templateUrl: './set-infofuncionario.component.html',
  styleUrls: ['./set-infofuncionario.component.scss']
})
export class SetInfofuncionarioComponent implements OnInit, OnDestroy {
  infoFuncionarioGroup: FormGroup;
  areasFuncionales: any;
  vigencias: any;
  susVigencias$: any;
  tiposId: any;
  subscriptionTipoId$: any;
  subscriptionDatosId$: any;
  subscriptionfilter$: any;
  subscriptionTel$: any;
  subInfoFuncionario$: any;

  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
  ) {
    this.areasFuncionales = OPCIONES_AREA_FUNCIONAL;
    this.vigencias = [];
    this.tiposId = [];
    this.store.dispatch(getVigencias());
  }

  ngOnInit() {
    this.createForm();
    // Areas funcionales
    this.susVigencias$ = combineLatest([
      this.store.select(selectVigencias),
      this.infoFuncionarioGroup.get('areaFuncional').valueChanges
    ]).subscribe(([accVigencias, areaFuncional]) => {
      if (accVigencias && accVigencias[0] && areaFuncional) {
        this.vigencias = accVigencias[0]
          .filter(vigencia => vigencia.areaFuncional === String(areaFuncional.Id));
      }
    });
    // Tipos de identificación
    this.subscriptionTipoId$ = this.store.select(selectTiposID).subscribe((action) => {
      if (action && action[0]) this.tiposId = action[0];
    });
    // Teléfonos del proveedor
    this.subscriptionTel$ = this.store.select(seleccionarTelefonosProveedores).subscribe((accTel) => {
      if (accTel && accTel.TelefonosProveedores && accTel.TelefonosProveedores[0]) {
        let movil = accTel.TelefonosProveedores.find(tel => tel.IdTelefono.NumeroTel.toString().lenght === 7);
        let fijo = accTel.TelefonosProveedores.find(tel => tel.IdTelefono.NumeroTel.toString().lenght === 7);
        if (!movil)
          movil = accTel.TelefonosProveedores[0];
        if (!fijo) {
          if (accTel.TelefonosProveedores.lenght >= 2)
            fijo = accTel.TelefonosProveedores[1];
          else
            fijo = accTel.TelefonosProveedores[0];
        }
        const obj = this.infoFuncionarioGroup.get('tercero').value;
        obj.Movil = movil.IdTelefono.NumeroTel;
        obj.Fijo = movil.IdTelefono.NumeroTel;
        this.infoFuncionarioGroup.get('tercero').setValue(obj);
      }
    });
    // Datos del funcionario
    this.subscriptionDatosId$ = combineLatest([
      this.store.select(selectDatosID, 'beneficiario'),
      this.store.select(seleccionarProveedores)
    ]).subscribe(([action, accProv]) => {
      this.infoFuncionarioGroup.get('tercero').setValue(null);
      // Api de terceros
      if (action && action.datosId && action.datosId[0] && action.datosId[0].TerceroId) {
        this.infoFuncionarioGroup.get('tercero').setValue(action.datosId[0].TerceroId);
        const obj = this.infoFuncionarioGroup.get('tercero').value;
        obj.Nombres = obj.PrimerNombre + obj.SegundoNombre;
        obj.Apellidos = obj.PrimerApellido + obj.SegundoApellido;
      }
      // Api de proveedores
      if (accProv && accProv.Proveedores && accProv.Proveedores[0]) {
        if (!this.infoFuncionarioGroup.get('tercero').valid)
          this.infoFuncionarioGroup.get('tercero').setValue(accProv.Proveedores[0]);
        const obj = this.infoFuncionarioGroup.get('tercero').value;
        const noms = obj.NomProveedor.split(' ');
        if (noms.length > 0)
          obj.Nombres = noms[0];
        if (noms.length === 2)
          obj.Apellidos = noms[1];
        if (noms.length >= 3) {
          obj.Nombres = noms.slice(0, noms.length - 2).join(' ');
          obj.Apellidos = noms.slice(noms.length - 2).join(' ');
        }
        // Teléfonos
        this.store.dispatch(obtenerTelefonosProvedores({
          query: { NumDocumento: accProv.Proveedores[0].NumDocumento }
        }));
      }
    });
    // Cambios en número y tipo de identificación
    this.subscriptionfilter$ = combineLatest([
      this.infoFuncionarioGroup.get('numeroId').valueChanges,
      this.infoFuncionarioGroup.get('tipoId').valueChanges,
    ]).subscribe(([numeroId, tipoId]) => {
      if (numeroId && tipoId) {
        this.store.dispatch(cargarDatosProvedor(null));
        this.store.dispatch(getDatosID({ clave: 'beneficiario', numero: numeroId, tipo: tipoId.Id }));
        this.store.dispatch(obtenerDatosProvedor({ query: { NumDocumento: numeroId } }));
      }
    });
    // Cambios generales
    this.subInfoFuncionario$ = this.infoFuncionarioGroup.valueChanges.subscribe((value) => {
      this.store.dispatch(cargarInfoFuncionario({ infoFuncionario: value }));
    });
  }

  ngOnDestroy() {
    this.susVigencias$.unsubscribe();
    this.subscriptionTipoId$.unsubscribe();
    this.subscriptionDatosId$.unsubscribe();
    this.subscriptionfilter$.unsubscribe();
    this.subscriptionTel$.unsubscribe();
    this.subInfoFuncionario$.unsubscribe();
  }

  get tercero() {
    if (this.infoFuncionarioGroup) {
      const tercero = this.infoFuncionarioGroup.get('tercero');
      if (tercero)
        return tercero.value;
    }
    return null;
  }

  // Validacion del Formulario
  get vigenciaInvalid() {
    return this.infoFuncionarioGroup.get('vigencia').invalid && this.infoFuncionarioGroup.get('vigencia').touched;
  }
  get tipoIdInvalid() {
    return this.infoFuncionarioGroup.get('tipoId').invalid && this.infoFuncionarioGroup.get('tipoId').touched;
  }
  get numeroIdInvalid() {
    return this.infoFuncionarioGroup.get('numeroId').invalid && this.infoFuncionarioGroup.get('numeroId').touched;
  }
  get areaInvalid() {
    return this.infoFuncionarioGroup.get('areaFuncional').invalid && this.infoFuncionarioGroup.get('areaFuncional').touched;
  }

  createForm() {
    this.infoFuncionarioGroup = this.fb.group({
      vigencia: ['', Validators.required],
      tipoId: ['', Validators.required],
      numeroId: ['',
        [Validators.required,
        Validators.pattern('^[0-9]*$')]],
      areaFuncional: ['', Validators.required],
      tercero: ['', Validators.required]
    });
  }

  saveForm() {
    if (this.infoFuncionarioGroup.invalid) {
      return Object.values(this.infoFuncionarioGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
