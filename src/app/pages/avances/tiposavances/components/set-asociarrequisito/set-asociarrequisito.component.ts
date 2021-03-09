import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CONFIGURACION_REQUISITOS } from '../../interfaces/interfaces';
import { Store } from '@ngrx/store';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { ActivatedRoute } from '@angular/router';
import {
  asociarRequisitoTipoAvance, cargarRequisitos, cargarRequisitoTipoAvances,
  cargarTiposAvances, desasociarRequisitoTipoAvance,
  obtenerRequisitos, obtenerRequisitoTipoAvances, obtenerTiposAvances
} from '../../../../../shared/actions/avances.actions';
import { seleccionarRequisitos, seleccionarRequisitoTipoAvances, seleccionarTiposAvances } from '../../../../../shared/selectors/avances.selectors';
import { combineLatest } from 'rxjs';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';

@Component({
  selector: 'ngx-set-asociarrequisito',
  templateUrl: './set-asociarrequisito.component.html',
  styleUrls: ['./set-asociarrequisito.component.scss']
})
export class SetAsociarrequisitoComponent implements OnInit, OnDestroy {
  @ViewChild('eliminarTipoModal', { static: false }) eliminarTipoModal: ElementRef;


  configRequisitos: any;
  datosRequisitos: any;
  subscriptionRequisitos$: any;
  subscriptionEliminarDato$: any;
  subscriptionTipoAvance$: any;
  requisitos: any;
  requisitosCompletos: any;

  // Modales
  closeResult = '';

  // Formulario
  asociarRequisitoGroup: FormGroup;
  codigoTipo: string;
  nombreTipo: string;
  id: any;

  constructor(private fb: FormBuilder,
    private store: Store<any>,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
  ) {

    this.datosRequisitos = [];
    this.requisitos = [];
    this.requisitosCompletos = [];
    this.configRequisitos = CONFIGURACION_REQUISITOS;
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.createForm();
    this.limpiarStore();
    if (this.id) {
      this.store.dispatch(obtenerTiposAvances({ id: this.id }));
      this.store.dispatch(obtenerRequisitoTipoAvances({ idTipoAvance: this.id }));
    }
    this.store.dispatch(obtenerRequisitos({}));
  }

  ngOnInit() {
    // Carga tipo de avance seleccionado
    this.subscriptionTipoAvance$ = this.store.select(seleccionarTiposAvances).subscribe((accion: any) => {
      if (accion && accion.tiposAvances && accion.tiposAvances.Id) {
        this.codigoTipo = accion.tiposAvances.CodigoAbreviacion;
        this.nombreTipo = accion.tiposAvances.Nombre;
      }
    });

    // Carga requisitos
    this.subscriptionRequisitos$ = combineLatest([
      this.store.select(seleccionarRequisitos),
      this.store.select(seleccionarRequisitoTipoAvances)
    ]).subscribe(([accionRequisitos, accionAsociaciones]) => {
      if (accionRequisitos && accionRequisitos.requisitos &&
        accionAsociaciones && accionAsociaciones.datos) {
        if (accionRequisitos.requisitos.length && accionRequisitos.requisitos[0].Id)
          this.requisitosCompletos = accionRequisitos.requisitos;
        if (accionAsociaciones.datos.length && accionAsociaciones.datos[0].Id) {
          // Carga requisitos completos y asigna idAsociacion a los que se asocian con el tipo de avance
          this.requisitosCompletos.forEach((requisito: any) => {
            const asociacion = accionAsociaciones.datos.find((aso: any) =>
              requisito.Id === aso.RequisitoAvanceId);
            requisito.idAsociacion = asociacion ? asociacion.Id : null;
          });
        } else if (accionAsociaciones.datos.idEliminado) {
          const requisito = this.requisitosCompletos.find((element: any) =>
            element.idAsociacion === accionAsociaciones.datos.idEliminado);
          delete requisito.idAsociacion;
        } else if (accionAsociaciones.datos.elementoCreado) {
          const control = this.asociarRequisitoGroup.get('requisitos');
          control.setValue('');
          control.markAsUntouched();
          const requisito = this.requisitosCompletos.find((element: any) =>
            element.Id === accionAsociaciones.datos.elementoCreado.RequisitoAvanceId);
          requisito.idAsociacion = accionAsociaciones.datos.elementoCreado.Id;
        }
        this.ajustarRequisitos();
      }
    });

    // Eliminar datos que se encuentran en la tabla
    this.subscriptionEliminarDato$ = this.store.select(getFilaSeleccionada).subscribe((accion) => {
      if (accion && accion.accion) {
        if (accion.accion.name === 'borrarRequisito') {
          this.modalEliminar(accion.fila);
        }
      }
    });

  }

  private ajustarRequisitos() {
    // Se define la lista de requisitos y la tabla de requisitos
    this.requisitos = this.requisitosCompletos
      .filter((requisito: any) => !requisito.idAsociacion);
    this.datosRequisitos = this.requisitosCompletos
      .filter((requisito: any) => requisito.idAsociacion);
  }

  ngOnDestroy() {
    this.subscriptionTipoAvance$.unsubscribe();
    this.subscriptionEliminarDato$.unsubscribe();
    this.subscriptionRequisitos$.unsubscribe();
    this.limpiarStore();
  }

  limpiarStore() {
    this.store.dispatch(cargarTiposAvances(null));
    this.store.dispatch(cargarRequisitos(null));
    this.store.dispatch(cargarRequisitoTipoAvances(null));
    this.store.dispatch(LoadFilaSeleccionada(null));
  }

  // Validacion del Formulario
  get requisitosInvalid() {
    return this.asociarRequisitoGroup.get('requisitos').invalid && this.asociarRequisitoGroup.get('requisitos').touched;
  }

  createForm() {
    this.asociarRequisitoGroup = this.fb.group({
      requisitos: ['', Validators.required],

    });
  }

  saveForm() {
    if (this.asociarRequisitoGroup.invalid) {
      return Object.values(this.asociarRequisitoGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  // Modal acciones sobre la tabla: eliminar registros
  modalEliminar(fila: any) {
    this.modalService.open(this.eliminarTipoModal).result.then((result) => {
      if (`${result}`)
        this.store.dispatch(desasociarRequisitoTipoAvance({ id: fila.idAsociacion }));
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  asociarRequisito() {
    if (this.asociarRequisitoGroup.get('requisitos').valid)
      this.store.dispatch(asociarRequisitoTipoAvance({
        element: {
          'TipoAvanceId': { 'Id': Number(this.id) },
          'RequisitoAvanceId': Number(this.asociarRequisitoGroup.get('requisitos').value.Id),
          'Activo': true
        }
      }));
    else
      this.saveForm();
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

}
