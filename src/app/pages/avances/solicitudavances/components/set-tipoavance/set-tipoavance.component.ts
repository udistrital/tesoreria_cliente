import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CONFIGURACION_REQUISITOSTIPO, CONFIGURACION_ESPECIFICACIONTIPO } from '../../interfaces/interfaces';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { getAccionTabla, getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { obtenerEspecificaciones, obtenerRequisitos, obtenerRequisitoTipoAvances, obtenerTiposAvances } from '../../../../../shared/actions/avances.actions';
import { seleccionarEspecificaciones, seleccionarRequisitos, seleccionarRequisitoTipoAvances, seleccionarTiposAvances } from '../../../../../shared/selectors/avances.selectors';
import { combineLatest } from 'rxjs';
import { cargarTiposdeAvances } from '../../actions/solicitudavances.actions';

@Component({
  selector: 'ngx-set-tipoavance',
  templateUrl: './set-tipoavance.component.html',
  styleUrls: ['./set-tipoavance.component.scss']
})
export class SetTipoavanceComponent implements OnInit, OnDestroy {
  @ViewChild('adjuntarArchivoModal', { static: false }) adjuntarArchivoModal: ElementRef;
  @ViewChild('eliminarTipoModal', { static: false }) eliminarTipoModal: ElementRef;
  @ViewChild('agregarRegistroModal', { static: false }) agregarRegistroModal: ElementRef;


  tipoAvanceGroup: FormGroup;
  modalEspecificacionGroup: FormGroup;
  agregarRegistroModalRef: any;
  // Modals
  closeResult = '';

  // Configuracion de las tablas
  tiposAvances: any;
  archivo: any;

  subscription$: any;
  subscriptionAccion$: any;
  subTiposAvance$: any;
  listaTiposAvances: any;
  agregando: any;
  tipoAvanceActual: any;
  subscriptionRequisitos$: any;
  subEspecificaciones$: any;
  especificaciones: any;


  constructor(private fb: FormBuilder, private modalService: NgbModal, private store: Store<any>) {
    this.tipoAvanceActual = null;
    this.agregando = false;
    this.tiposAvances = [];
    this.listaTiposAvances = [];
    this.especificaciones = [];
    this.store.dispatch(obtenerTiposAvances({}));
    this.store.dispatch(obtenerRequisitos({ query: { Activo: true } }));
    this.store.dispatch(obtenerEspecificaciones({ query: { Activo: true } }));
    this.store.dispatch(cargarTiposdeAvances({ tiposAvances: this.tiposAvances }));
  }

  ngOnInit() {
    this.createForm();

    // Tipos de avance
    this.subTiposAvance$ = this.store.select(seleccionarTiposAvances).subscribe((accion) => {
      if (accion && accion.tiposAvances && accion.tiposAvances[0]) this.listaTiposAvances = accion.tiposAvances;
    });

    this.subscriptionAccion$ = this.store.select(getAccionTabla).subscribe((accion) => {
      if (accion && accion.titulo && accion.titulo.tabla !== undefined) {
        this.modalEspecificacion(accion);
      }
    });

    // Acciones de tablas
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe((accion) => {
      if (accion && accion.accion && accion.fila && accion.accion.name && accion.titulo && accion.titulo.tabla !== undefined) {
        switch (accion.accion.name) {
          case 'borrarEspecificacion':
            this.modalEliminar(accion);
            break;
          case 'modificarEspecificacion':
            this.modalEspecificacion(accion);
            break;
          case 'adjuntarArchivo':
            this.modalAdjuntar(accion);
            break;
        }
      }
    });

    // Especificaciones
    this.subEspecificaciones$ = this.store.select(seleccionarEspecificaciones).subscribe((acc) => {
      if (acc && acc.especificaciones && acc.especificaciones[0])
        this.especificaciones = acc.especificaciones;
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
    this.subscriptionAccion$.unsubscribe();
    this.subTiposAvance$.unsubscribe();
    if (this.subscriptionRequisitos$)
      this.subscriptionRequisitos$.unsubscribe();
    this.subEspecificaciones$.unsubscribe();
    this.store.dispatch(LoadFilaSeleccionada(null));
  }

  // Validacion del Formulario
  get seleccionAvanceInvalid() {
    return this.tipoAvanceGroup.get('seleccionAvance').invalid && this.tipoAvanceGroup.get('seleccionAvance').touched;
  }

  createForm() {
    this.tipoAvanceGroup = this.fb.group({
      seleccionAvance: [''],
      total: [''],
    });
    this.modalEspecificacionGroup = this.fb.group({
      tipoId: ['', Validators.required],
      descripcion: ['', Validators.required],
      valorSolicitado: ['', Validators.required],
    });
  }

  // Guardar información de formulario
  saveForm() {
    if (this.tipoAvanceGroup.invalid) {
      return Object.values(this.tipoAvanceGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  get tipoAvance() {
    if (this.tipoAvanceGroup) {
      const field = this.tipoAvanceGroup.get('seleccionAvance');
      if (field)
        return field.value;
    }
    return null;
  }

  esInvalido(nombre: string) {
    const input = this.modalEspecificacionGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  // Guardar información de formulario en modal
  saveModalForm() {
    if (this.modalEspecificacionGroup.invalid) {
      return Object.values(this.modalEspecificacionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    } else {
      this.agregarRegistroModalRef.close();
    }
  }

  // Configuracion de Icono en lista documentos
  mostrarOcultarTiposAvances(state: string, index: number) {
    if (state === 'false') {
      this.tiposAvances[index].mostrarOcultarIcono = 'fa-minus-square';
    } else {
      this.tiposAvances[index].mostrarOcultarIcono = 'fa-plus-square';
    }
  }

  // Modal acciones sobre la tabla: eliminar registros
  modalEliminar(accion: any) {
    this.modalService.open(this.eliminarTipoModal).result.then((result) => {
      if (`${result}`) {
        this.tiposAvances[accion.titulo.tabla].especificaciones.splice(this.tiposAvances[accion.titulo.tabla].especificaciones.findIndex(
          (element: any) => element.tipoEspecificacion === accion.fila.tipoEspecificacion
            && element.descripcion === accion.fila.descripcion && element.valor === accion.fila.valor
        ), 1);
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // Modal acciones sobre la tabla: agregar registros
  modalEspecificacion(accion: any) {
    if (accion.fila) {
      this.modalEspecificacionGroup.setValue({
        tipoId: accion.fila.tipoEspec,
        descripcion: accion.fila.descripcion,
        valorSolicitado: accion.fila.valor,
      });
    } else {
      this.modalEspecificacionGroup.setValue({
        tipoId: '',
        descripcion: '',
        valorSolicitado: '',
      });
    }
    this.agregarRegistroModalRef = this.modalService.open(this.agregarRegistroModal);
    this.agregarRegistroModalRef.result.then((result) => {
      if (`${result}`) {
        if (accion.fila) {
          accion.fila.tipoEspec = this.modalEspecificacionGroup.get('tipoId').value;
          accion.fila.tipoEspecificacion = this.modalEspecificacionGroup.get('tipoId').value.Nombre;
          accion.fila.descripcion = this.modalEspecificacionGroup.get('descripcion').value;
          accion.fila.valor = this.modalEspecificacionGroup.get('valorSolicitado').value;
        } else {
          this.tiposAvances[accion.titulo.tabla].especificaciones.push(
            {
              tipoEspec: this.modalEspecificacionGroup.get('tipoId').value,
              tipoEspecificacion: this.modalEspecificacionGroup.get('tipoId').value.Nombre,
              descripcion: this.modalEspecificacionGroup.get('descripcion').value,
              valor: this.modalEspecificacionGroup.get('valorSolicitado').value,
            },
          );
        }
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // Modal acciones sobre la tabla: adjuntar archivos
  modalAdjuntar(accion: any) {
    this.modalService.open(this.adjuntarArchivoModal).result.then((result) => {
      if (`${result}`) {
        accion.fila.adjunto = this.archivo.name;
        accion.fila.archivo = this.archivo;
        this.archivo = null;
      }
    }, (reason) => {
      this.archivo = null;
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  prepareFileList(files: Array<any>) {
    this.archivo = files[0];
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

  agregarTipo() {
    if (this.tipoAvanceGroup.get('seleccionAvance').invalid) return;
    this.agregando = true;
    this.tipoAvanceActual = this.tipoAvance;
    this.tipoAvanceActual.configrequisitos = Object.assign({}, CONFIGURACION_REQUISITOSTIPO);
    this.tipoAvanceActual.configespecificaciones = Object.assign({}, CONFIGURACION_ESPECIFICACIONTIPO);
    this.tipoAvanceActual.configespecificaciones.title = Object.assign({}, CONFIGURACION_ESPECIFICACIONTIPO.title);
    this.tipoAvanceActual.configrequisitos.title = Object.assign({}, CONFIGURACION_REQUISITOSTIPO.title);
    this.tipoAvanceActual.mostrarOcultar = 'Mostrar';
    this.tipoAvanceActual.mostrarOcultarIcono = 'fa-plus-square';
    this.tipoAvanceActual.especificaciones = [];
    this.tipoAvanceActual.requisitos = [];
    this.tiposAvances.push(this.tipoAvanceActual);
    this.store.dispatch(cargarTiposdeAvances({ tiposAvances: this.tiposAvances }));
    this.tiposAvances.forEach((tipoindex, index) => {
      tipoindex.configespecificaciones.title.tabla = index;
      tipoindex.configrequisitos.title.tabla = index;
    });
    this.store.dispatch(obtenerRequisitoTipoAvances({
      idTipoAvance: this.tipoAvanceActual.Id, query: { Activo: true }
    }));
    this.subscriptionRequisitos$ = combineLatest([
      this.store.select(seleccionarRequisitos),
      this.store.select(seleccionarRequisitoTipoAvances)
    ]).subscribe(([accionRequisitos, accionAsociaciones]) => {
      if (accionRequisitos && accionRequisitos.requisitos &&
        accionAsociaciones && accionAsociaciones.datos &&
        accionRequisitos.requisitos.length && accionRequisitos.requisitos[0].Id
      ) {
        this.tipoAvanceActual.requisitos = accionRequisitos.requisitos.filter((requisito: any) =>
          accionAsociaciones.datos.some((asociacion: any) =>
            requisito.Id === asociacion.RequisitoAvanceId));
        this.subscriptionRequisitos$.unsubscribe();
        this.store.dispatch(cargarTiposdeAvances({ tiposAvances: this.tiposAvances }));
        this.agregando = false;
      }
    });
  }

  borrarTipo(index) {
    this.tiposAvances.splice(index, 1);
  }

  get totalAvance() {
    return this.tiposAvances.reduce((a: any, b) => a + b.especificaciones.reduce((c: any, d: { valor: number; }) => c + d.valor, 0), 0);
  }

}
