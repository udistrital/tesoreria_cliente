import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DATOS_REQUISITOS, CONFIGURACION_REQUISITOS } from '../../interfaces/interfaces';
import { Store } from '@ngrx/store';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { getFilaSeleccionada, getAccionTabla } from '../../../../../shared/selectors/shared.selectors';
import { loadTiposAvancesSeleccionado } from '../../actions/tiposavances.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-set-asociarrequisito',
  templateUrl: './set-asociarrequisito.component.html',
  styleUrls: ['./set-asociarrequisito.component.scss']
})
export class SetAsociarrequisitoComponent implements OnInit {
  @ViewChild('eliminarTipoModal', { static: false }) eliminarTipoModal: ElementRef;
  @ViewChild('asociarModal', { static: false }) asociarModal: ElementRef;


  configRequisitos: any;
  datosRequisitos: any;
  subscription$: any;
  subscriptionEliminarDato$: any;

  // Modales
  closeResult = '';

  // Formulario
  asociarRequisitoGroup: FormGroup;
  codigoTipo = 'CINV';
  estadoTipo = 'Activo';

  constructor(private fb: FormBuilder,
    private store: Store<any>,
    private router: Router,
    private modalService: NgbModal
    ) {

    this.datosRequisitos = DATOS_REQUISITOS;
    this.configRequisitos = CONFIGURACION_REQUISITOS;
    this.createForm();
  }

  ngOnInit() {
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe((fila: any) => {
      if (fila) {
        this.store.dispatch(loadTiposAvancesSeleccionado(fila.fila));
      }
    });

    this.subscription$ = this.store.select(getAccionTabla).subscribe((accion: any) => {
      this.store.dispatch(loadTiposAvancesSeleccionado(null));
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
      if (`${result}`) {
        this.datosRequisitos.splice(this.datosRequisitos.findIndex(
           (element: any) => element.codigoAbreviado === fila.codigoAbreviado
             && element.nombreRequisito === fila.nombreRequisito
             && element.descripcion === fila.descripcion
             && element.fecha === fila.fecha
         ), 1);
         // this.store.dispatch(loadRequisitos({ datosRequisitos: this.datosRequisitos }));
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

    // Modal acciones sobre la tabla: asociar registros
    modalGuardar() {
      if (this.asociarRequisitoGroup.valid) {
        this.modalService.open(this.asociarModal).result.then((result) => {
          if (`${result}`) {
          this.router.navigate(['pages/avances/tiposavances/list']);
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

}
