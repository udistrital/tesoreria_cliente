import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DATOS_REQUISITOSTIPO, CONFIGURACION_REQUISITOSTIPO, DATOS_ESPECIFICACIONTIPO, CONFIGURACION_ESPECIFICACIONTIPO } from '../../interfaces/interfaces';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { getAccionTabla } from '../../../../../../../../../CentralCuentas/central_cuentas_cliente/src/app/shared/selectors/shared.selectors';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';

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
  // Icono en la Lista de documentos
  mostrarOcultar: string;
  mostrarOcultarIcono: string;

  // Configuracion de la tabla
  tiposAvances: any;

  // subscriptionAdjuntarArchivos$: any;
  subscription$: any;
  subscriptionAccion$: any;


  constructor(private fb: FormBuilder, private modalService: NgbModal, private store: Store<any>) {

    // Icono en la Lista de documentos
    this.mostrarOcultar = 'Mostrar';
    this.mostrarOcultarIcono = 'fa-plus-square';
    this.tiposAvances = [];

  }

  ngOnInit() {
    this.createForm();

    this.subscriptionAccion$ = this.store.select(getAccionTabla).subscribe((accion) => {
      // console.log('accion');
      // console.log(accion);

      if (accion && accion.titulo && accion.titulo.tabla !== undefined) {
        this.modalEspecificacion(accion);
      }
    });

    // Acciones de especificaciones para requisitos
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe((accion) => {
      // console.log(accion);
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
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
    this.subscriptionAccion$.unsubscribe();
    this.store.dispatch(LoadFilaSeleccionada(null));

  }

  // Validacion del Formulario
  get seleccionAvanceInvalid() {
    return this.tipoAvanceGroup.get('seleccionAvance').invalid && this.tipoAvanceGroup.get('seleccionAvance').touched;
  }

  createForm() {
    this.tipoAvanceGroup = this.fb.group({
      seleccionAvance: ['', Validators.required],
    });
    this.modalEspecificacionGroup = this.fb.group({
      tipoId: ['', Validators.required],
      descripcion: ['', Validators.required],
      valorSolicitado: ['', Validators.required],
    });
  }

  saveForm() {
    if (this.tipoAvanceGroup.invalid) {
      return Object.values(this.tipoAvanceGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  esInvalido(nombre: string) {
    const input = this.modalEspecificacionGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

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
  mostrarOcultarTiposAvances(state: string) {
    if (state === 'false') {
      this.mostrarOcultarIcono = 'fa-minus-square';
    } else {
      this.mostrarOcultarIcono = 'fa-plus-square';
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
        // this.store.dispatch(load({ datosEspecificacion: this.datosEspecificacion }));
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // Modal acciones sobre la tabla: agregar registros
  modalEspecificacion(accion: any) {
    if (accion.fila) {
      this.modalEspecificacionGroup.setValue({
        tipoId: accion.fila.tipoEspecificacion,
        descripcion: accion.fila.descripcion,
        valorSolicitado: accion.fila.valor,      });
    } else {
      this.modalEspecificacionGroup.setValue({
        tipoId: '',
        descripcion: '',
        valorSolicitado: '',      });
    }
    this.agregarRegistroModalRef = this.modalService.open(this.agregarRegistroModal);
    this.agregarRegistroModalRef.result.then((result) => {
      if (`${result}`) {

      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // Modal acciones sobre la tabla: eliminar registros
  modalAdjuntar(accion: any) {
    this.modalService.open(this.adjuntarArchivoModal).result.then((result) => {
      if (`${result}`) {
        // this.tiposAvances[accion.titulo.tabla].especificaciones.splice(this.tiposAvances[accion.titulo.tabla].especificaciones.findIndex(
        //   (element: any) => element.tipoEspecificacion === accion.fila.tipoEspecificacion
        //     && element.descripcion === accion.fila.descripcion && element.valor === accion.fila.valor
        // ), 1);
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
    const tipo = {
      requisitos: Object.assign([], DATOS_REQUISITOSTIPO),
      configrequisitos: Object.assign({}, CONFIGURACION_REQUISITOSTIPO),
      especificaciones: Object.assign([], DATOS_ESPECIFICACIONTIPO),
      configespecificaciones: Object.assign({}, CONFIGURACION_ESPECIFICACIONTIPO)
    };
    tipo.configespecificaciones.title = Object.assign({}, CONFIGURACION_ESPECIFICACIONTIPO.title);
    tipo.configrequisitos.title =  Object.assign({}, CONFIGURACION_REQUISITOSTIPO.title);
    this.tiposAvances.push(tipo);
    this.tiposAvances.forEach(( tipo, index ) => {
      tipo.configespecificaciones.title.tabla = index;
      tipo.configrequisitos.title.tabla = index;
    });

  }

  borrarTipo(index) {
    this.tiposAvances.splice(index, 1);
  }

}
