import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { OPCIONES_AREA_FUNCIONAL } from '../../../../../shared/interfaces/interfaces';
import { loadTipoLegalizacion } from '../../actions/legalizacionavance.actions';

@Component({
  selector: 'ngx-set-inforesponsable',
  templateUrl: './set-inforesponsable.component.html',
  styleUrls: ['./set-inforesponsable.component.scss']
})
export class SetInforesponsableComponent implements OnInit, OnDestroy {
  datosResponsable: FormGroup;
  opcionesAreaFuncional: any;
  subTipoInforme$: any;

  constructor(private fb: FormBuilder, private store: Store<any>) {
    this.opcionesAreaFuncional = OPCIONES_AREA_FUNCIONAL;
    this.crearFormulario();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subTipoInforme$.unsubscribe();
  }

  crearFormulario() {
    this.datosResponsable = this.fb.group({
      tipoId: ['', Validators.required],
      numeroId: ['', Validators.required],
      areaFuncional: ['', Validators.required],
      tipoInforme: ['', Validators.required]
    });
    this.subTipoInforme$ = this.datosResponsable.get('tipoInforme').valueChanges.subscribe(valor => {
      if (this.datosResponsable.get('tipoInforme').valid)
        this.store.dispatch(loadTipoLegalizacion({ tipoInforme: valor }));
    });
  }

  validarFormulario() {
    if (this.datosResponsable.invalid) {
      return Object.values(this.datosResponsable.controls).forEach(control => {
        control.markAsDirty();
      });
    }
  }

  esInvalido(nombre: string) {
    const input = this.datosResponsable.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

}
