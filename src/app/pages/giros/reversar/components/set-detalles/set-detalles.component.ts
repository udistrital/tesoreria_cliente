import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { CONF_BENEFICIARIO, CONF_DETALLES, DATOS_BENEFICIARIOS } from '../../interfaces/interfaces';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { Store } from '@ngrx/store';
import { SharedService } from '../../../../../shared/services/shared.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'ngx-set-detalles',
  templateUrl: './set-detalles.component.html',
  styleUrls: ['./set-detalles.component.scss']
})
export class SetDetallesComponent implements OnInit, OnDestroy {

  @ViewChild('modalJustificacion', { static: false }) modalJustificacion: any;
  @ViewChild('modalDetalles', { static: false }) modalContenido: any;

  configurationBeneficiarios: any;
  configurationDetalles: any;
  datosDetalles: any;
  datosBeneficiarios: any;
  justificacionRemover: FormGroup;
  validarJustificacion: boolean = false;
  modalReversar: NgbModalRef;
  modal: NgbModalRef;
  valorTotal: any;
  subscriptionDetalles$: any;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private route: Router,
    private store: Store<any>,
    private sharedService: SharedService
  ) {
    this.justificacionRemover = this.formBuilder.group({
      justificacion: ['', [Validators.required, Validators.minLength(10)]],
    });
    this.configurationBeneficiarios = CONF_BENEFICIARIO;
    this.configurationDetalles = CONF_DETALLES;
    this.datosBeneficiarios = DATOS_BENEFICIARIOS;
   }

  ngOnDestroy() {
    this.subscriptionDetalles$.unsubscribe();
  }

  ngOnInit() {
    this.subscriptionDetalles$ = this.store.select(getFilaSeleccionada).subscribe(
      (action: any) => {
        if (this.sharedService.IfStore(action)) {
          if (action.accion.name === 'remover') {
            this.datosBeneficiarios.splice(this.datosBeneficiarios.findIndex(
              (element: any) => {
                element.consecutivo ===  action.fila.consecutivo;
              }
            ), 1);
          }
          if (action.accion.name === 'verDetalles') {
            this.abrir(action.fila);
          }
          this.store.dispatch(LoadFilaSeleccionada(null));
        }
      });
  }

  reversar() {
    if (this.datosBeneficiarios.length !== 0) {
      this.abrirJustificacion();
    } else {
      Swal.fire({
        type: 'error',
        title: '¡Error!',
        text: 'Debe existir al menos un beneficiario',
        confirmButtonText: 'Aceptar',
      });
    }
  }

  cerrarJustificacion() {
    this.modalReversar.close();
  }

  abrir(datos: any) {
    this.datosDetalles = [];
    this.datosDetalles.push(datos);
    this.modal = this.modalService.open(this.modalContenido);
  }

  abrirJustificacion() {
    this.modalReversar = this.modalService.open(this.modalJustificacion);
  }

  total() {
    return this.valorTotal = this.datosBeneficiarios.reduce((a: any, b: { valor: number; }) => a + b.valor, 0);
  }

  cerrar() {
    this.modal.close();
  }

  guardar() {
    if (this.justificacionRemover.valid) {
      this.validarJustificacion = false;
      this.cerrarJustificacion();
      Swal.fire({
        type: 'success',
        title: '¡Giro reversado con éxito!',
        text: 'Se reversó el giro radicado',
        confirmButtonText: 'Aceptar',
      });
      this.route.navigateByUrl('pages/giros/reversar/lista');
    } else {
      this.validarJustificacion = true;
    }
  }

}
