import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import {
  actualizarNorma, actualizarTipoAvance, cargarRequisitos,
  cargarRequisitoTipoAvances, cargarTiposAvances, crearNorma,
  crearTipoAvance, obtenerNormas, obtenerRequisitos,
  obtenerRequisitoTipoAvances, obtenerTiposAvances
} from '../../../../../shared/actions/avances.actions';
import { GetVigenciaActual, getVigencias } from '../../../../../shared/actions/shared.actions';
import { OPCIONES_AREA_FUNCIONAL } from '../../../../../shared/interfaces/interfaces';
import {
  seleccionarNormas, seleccionarRequisitos,
  seleccionarRequisitoTipoAvances, seleccionarTiposAvances
} from '../../../../../shared/selectors/avances.selectors';
import { getVigenciaActual, selectVigencias } from '../../../../../shared/selectors/shared.selectors';
import { CONFIGURACION_REQUISITOSDETALLE, CONFIGURACION_TABLA_NORMA } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-set-tipodeavance',
  templateUrl: './set-tipodeavance.component.html',
  styleUrls: ['./set-tipodeavance.component.scss']
})
export class SetTipodeavanceComponent implements OnInit, OnDestroy {
  @ViewChild('guardarModal', { static: false }) guardarModal: ElementRef;

  tituloAccion: string;
  opcionesAreaFuncional: any;
  vigencias: any;
  vigenciaActual: any;
  id: any;
  idNorma: any;

  // Formulario
  tipoavanceGroup: FormGroup;
  codigoTipo: string;
  estadoTipo: string;

  // Modales
  closeResult = '';

  // Configuracion de tablas
  configRequisitos: any;
  datosRequisitos: any;
  configTableNorma: any;
  datosTableNorma: any;

  // Icono en la Lista de documentos
  mostrarOcultar: string;
  mostrarOcultarIcono: string;

  // Suscripciones
  subTiposAvances$: any;
  susVigencias$: any;
  susNormas$: any;
  susVigencia$: any;
  vigenciaActual$: any;
  subscriptionRequisitos$: any;

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private store: Store<any>,
  ) {
    this.vigencias = [];
    this.configRequisitos = CONFIGURACION_REQUISITOSDETALLE;
    this.datosRequisitos = [];
    this.configTableNorma = CONFIGURACION_TABLA_NORMA;
    this.datosTableNorma = [];
    this.opcionesAreaFuncional = OPCIONES_AREA_FUNCIONAL;
    // Título, editar o crear
    this.tituloAccion = this.activatedRoute.snapshot.url[0].path;
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.limpiarStore();
    if (this.id) {
      this.store.dispatch(obtenerTiposAvances({ id: this.id }));
      this.store.dispatch(obtenerRequisitoTipoAvances({ idTipoAvance: this.id }));
    }
    this.store.dispatch(obtenerRequisitos({}));
    this.createForm();
    // Icono en la Lista de documentos
    this.mostrarOcultar = 'Mostrar';
    this.mostrarOcultarIcono = 'fa-eye';
    // Solicitud de datos
    this.store.dispatch(GetVigenciaActual({ offset: 0 }));
    this.store.dispatch(getVigencias());
  }

  ngOnInit() {
    this.subTiposAvances$ = this.store.select(seleccionarTiposAvances).subscribe((accion) => {
      if (accion && accion.tiposAvances)
        if (accion.tiposAvances.Id) {
          this.tipoavanceGroup.setValue({
            areaFuncional: this.opcionesAreaFuncional[
              this.opcionesAreaFuncional
                .findIndex((element: any) => element.Id === accion.tiposAvances.AreaFuncional)],
            fecha: accion.tiposAvances.FechaModificacion.split(' ', 1),
            codigoTipo: accion.tiposAvances.CodigoAbreviacion,
            nombreTipo: accion.tiposAvances.Nombre,
            descripcion: accion.tiposAvances.Descripcion,
            estadoTipo: accion.tiposAvances.Activo,
            normaTipo: '',
            vigencia: ''
          });
          if (this.tituloAccion === 'detalle')
            this.store.dispatch(obtenerNormas({ query: { TipoAvanceId: accion.tiposAvances.Id, Activo: true } }));
        } else if (accion.tiposAvances.idCreado || accion.tiposAvances.idActualizado) {
          const norma = {
            'Vigencia': this.tipoavanceGroup.get('vigencia').value.valor,
            'LinkNorma': this.tipoavanceGroup.get('normaTipo').value,
            'Activo': true,
            'TipoAvanceId': { 'Id': Number(accion.tiposAvances.idCreado ? accion.tiposAvances.idCreado : accion.tiposAvances.idActualizado) }
          };
          if (this.idNorma)
            this.store.dispatch(actualizarNorma({ id: this.idNorma, element: norma }));
          else
            this.store.dispatch(crearNorma({ element: norma }));
          this.router.navigate(['pages/avances/tiposavances/lista']);
        }
    });

    this.susVigencias$ = combineLatest([
      this.store.select(selectVigencias),
      this.tipoavanceGroup.get('areaFuncional').valueChanges
    ]).subscribe(([accVigencias, areaFuncional]) => {
      if (accVigencias && accVigencias[0] && areaFuncional) {
        this.vigencias = accVigencias[0]
          .filter(vigencia => vigencia.areaFuncional === String(areaFuncional.Id));
        if (this.vigenciaActual && this.tituloAccion === 'editar')
          this.tipoavanceGroup.get('vigencia').setValue(this.vigencias[this.vigencias
            .findIndex((element: any) => element.valor === this.vigenciaActual.valor)]);
      }
    });

    this.vigenciaActual$ = this.store.select(getVigenciaActual).subscribe((vigencia) => {
      if (vigencia) this.vigenciaActual = vigencia[0];
      if (this.vigencias && this.vigencias.length && this.tituloAccion === 'editar')
        this.tipoavanceGroup.get('vigencia').setValue(this.vigencias[this.vigencias
          .findIndex((element: any) => element.valor === this.vigenciaActual.valor)]);
    });

    this.susVigencia$ = this.tipoavanceGroup.get('vigencia').valueChanges.subscribe((vigencia) => {
      if (vigencia && this.tipoavanceGroup.get('vigencia').valid && this.id)
        this.store.dispatch(obtenerNormas({ query: { Vigencia: vigencia.valor, Activo: true, TipoAvanceId: this.id } }));
    });

    this.susNormas$ = this.store.select(seleccionarNormas)
      .subscribe((accion) => {
        if (accion && accion.normas && accion.normas.length) {
          this.datosTableNorma = accion.normas;
          if (this.tipoavanceGroup.get('vigencia').valid && accion.normas[0].LinkNorma) {
            this.idNorma = accion.normas[0].Id;
            this.tipoavanceGroup.get('normaTipo').setValue(accion.normas[0].LinkNorma);
          } else {
            this.tipoavanceGroup.get('normaTipo').setValue('');
            this.idNorma = null;
          }
        }
      });

    // Suscripción para requisitos
    this.subscriptionRequisitos$ = combineLatest([
      this.store.select(seleccionarRequisitos),
      this.store.select(seleccionarRequisitoTipoAvances)
    ]).subscribe(([accionRequisitos, accionAsociaciones]) => {
      if (accionRequisitos && accionRequisitos.requisitos &&
        accionAsociaciones && accionAsociaciones.datos &&
        accionRequisitos.requisitos.length && accionRequisitos.requisitos[0].Id &&
        accionAsociaciones.datos.length && accionAsociaciones.datos[0].Id
      )
        this.datosRequisitos = accionRequisitos.requisitos.filter((requisito: any) =>
          accionAsociaciones.datos.some((asociacion: any) =>
            requisito.Id === asociacion.RequisitoAvanceId));
    });

  }

  ngOnDestroy() {
    this.subTiposAvances$.unsubscribe();
    this.susVigencias$.unsubscribe();
    this.susVigencia$.unsubscribe();
    this.susNormas$.unsubscribe();
    this.vigenciaActual$.unsubscribe();
    this.subscriptionRequisitos$.unsubscribe();
    this.limpiarStore();
  }

  limpiarStore() {
    this.store.dispatch(cargarTiposAvances(null));
    this.store.dispatch(cargarRequisitos(null));
    this.store.dispatch(cargarRequisitoTipoAvances(null));
  }

  // Validacion del Formulario
  get areaInvalid() {
    return this.tipoavanceGroup.get('areaFuncional').invalid && this.tipoavanceGroup.get('areaFuncional').touched;
  }
  get fechaInvalid() {
    return this.tipoavanceGroup.get('fecha').invalid && this.tipoavanceGroup.get('fecha').touched;
  }
  get codigoTipoInvalid() {
    return this.tipoavanceGroup.get('codigoTipo').invalid && this.tipoavanceGroup.get('codigoTipo').touched;
  }
  get nombreTipoInvalid() {
    return this.tipoavanceGroup.get('nombreTipo').invalid && this.tipoavanceGroup.get('nombreTipo').touched;
  }
  get descripcionInvalid() {
    return this.tipoavanceGroup.get('descripcion').invalid && this.tipoavanceGroup.get('descripcion').touched;
  }
  get estadoTipoInvalid() {
    return this.tipoavanceGroup.get('estadoTipo').invalid && this.tipoavanceGroup.get('estadoTipo').touched;
  }
  get normaTipoInvalid() {
    return this.tipoavanceGroup.get('normaTipo').invalid && this.tipoavanceGroup.get('normaTipo').touched;
  }
  get vigenciaInvalid() {
    return this.tipoavanceGroup.get('vigencia').invalid && this.tipoavanceGroup.get('vigencia').touched;
  }

  createForm() {
    this.tipoavanceGroup = this.fb.group({
      areaFuncional: ['', Validators.required],
      fecha: [''],
      codigoTipo: ['', Validators.required],
      nombreTipo: ['', Validators.required],
      descripcion: ['', Validators.required],
      estadoTipo: ['', Validators.required],
      normaTipo: ['', Validators.required],
      vigencia: ['', Validators.required]
    });
  }

  saveForm() {
    if (this.tipoavanceGroup.invalid) {
      return Object.values(this.tipoavanceGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  // Modal acciones sobre la tabla: asociar registros
  modalGuardar() {
    if (this.tipoavanceGroup.valid) {
      this.codigoTipo = this.tipoavanceGroup.get('codigoTipo').value;
      this.estadoTipo = String(this.tipoavanceGroup.get('estadoTipo').value) === 'true' ? 'Activo' : 'Inactivo';
      this.modalService.open(this.guardarModal).result.then((result) => {
        if (`${result}`) {
          const tipo = {
            'CodigoAbreviacion': this.tipoavanceGroup.get('codigoTipo').value,
            'AreaFuncional': this.tipoavanceGroup.get('areaFuncional').value.Id,
            'Nombre': this.tipoavanceGroup.get('nombreTipo').value,
            'Descripcion': this.tipoavanceGroup.get('descripcion').value,
            'Activo': String(this.tipoavanceGroup.get('estadoTipo').value) === 'true'
          };
          if (this.id)
            this.store.dispatch(actualizarTipoAvance({ id: this.id, element: tipo }));
          else
            this.store.dispatch(crearTipoAvance({ element: tipo }));
        }
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else { this.saveForm(); }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // Configuracion de Icono en lista documentos
  mostrarOcultarDocumentos(state: string) {
    if (state === 'false') {
      this.mostrarOcultarIcono = 'fa-eye-slash';
    } else {
      this.mostrarOcultarIcono = 'fa-eye';
    }
  }

}
