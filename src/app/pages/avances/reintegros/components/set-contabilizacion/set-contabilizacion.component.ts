import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONFIGURACION_LEGALIZACION, DATOS_LEGALIZACION, CONFIGURACION_REINTEGRO, DATOS_REINTEGRO } from '../../interfaces/interfaces';
import { Store } from '@ngrx/store';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-set-contabilizacion',
  templateUrl: './set-contabilizacion.component.html',
  styleUrls: ['./set-contabilizacion.component.scss']
})
export class SetContabilizacionComponent implements OnInit {
  @ViewChild('agregarRegistroModal', { static: false }) agregarRegistroModal: ElementRef;
  @ViewChild('eliminarRegistroModal', { static: false }) eliminarRegistroModal: ElementRef;
  @ViewChild('legalizacionTab', { static: true }) legalizacionTab: ElementRef;
  @ViewChild('reintegroTab', { static: false }) reintegroTab: ElementRef;

  contabilizacionGroup: FormGroup;
  reintegroGroup: FormGroup;
  // modalRegistroGroup: FormGroup;

  configLegalizacion: any;
  datosLegalizacion: any;
  configReintegro: any;
  datosReintegro: any;

  sumaCuentas: any;
  // Modales
  closeResult = '';

  subscription$: any;

  constructor(private fb: FormBuilder, private store: Store<any>, private modalService: NgbModal) {
    this.createForm();

    this.configLegalizacion = CONFIGURACION_LEGALIZACION;
    this.datosLegalizacion = DATOS_LEGALIZACION;
    this.configReintegro = CONFIGURACION_REINTEGRO;
    this.datosReintegro = DATOS_REINTEGRO;

    this.sumaCuentas = [];
  }

  ngOnInit() {

    // tabla
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe((accion) => {
      if (accion && accion.accion) {
        if (accion.accion.name === 'borrarLegalizacion') {
          //  this.agregarRegistroModal(accion.fila);
        }

      }
    });

  }

  createForm() {
    this.contabilizacionGroup = this.fb.group({
      tipoComprobante: ['', Validators.required],
      numeroComprobante: ['', Validators.required],
      consecutivo: ['', Validators.required],
      concepto: ['', Validators.required],
    });
    this.reintegroGroup = this.fb.group({
      tipoComprobante: ['', Validators.required],
      numeroComprobante: ['', Validators.required],
      consecutivo: ['', Validators.required],
      concepto: ['', Validators.required],
    });
    // this.modalRegistroGroup = this.fb.group({
    //   idTercero: ['', Validators.required],
    //   numeroComprobante: ['', Validators.required],
    //   numeroCuenta: ['', Validators.required],
    //   concepto: ['', Validators.required],
    // });
  }

  invalidLegalizacion(nombre: string) {
    const input = this.contabilizacionGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  invalidReintegro(nombre: string) {
    const input = this.reintegroGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  // invalidRegistro(nombre: string) {
  //   const input = this.modalRegistroGroup.get(nombre);
  //   if (input)
  //     return input.invalid && (input.touched || input.dirty);
  //   else
  //     return true;
  // }

  saveFormLegalizacion() {
    if (this.contabilizacionGroup.invalid) {
      return Object.values(this.contabilizacionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  saveFormReintegro() {
    if (this.reintegroGroup.invalid) {
      return Object.values(this.reintegroGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  get sumasIguales() {
    return this.sumaCuentas.reduce((a: any, b) => a + b.valor, 0);
  }

  // Modal acciones sobre la tabla: eliminar registros
  modalEliminarRegistro(fila: any) {
    this.modalService.open(this.eliminarRegistroModal).result.then((result) => {
      if (`${result}`) {
        this.datosLegalizacion.splice(this.datosLegalizacion.findIndex(
          (element: any) => element.codigoAbreviado === fila.codigoAbreviado
            && element.nombreRequisito === fila.nombreRequisito
            && element.descripcion === fila.descripcion
            && element.fecha === fila.fecha
        ), 1);
      }
      if (`${result}`) {
        this.datosReintegro.splice(this.datosReintegro.findIndex(
          (element: any) => element.codigoAbreviado === fila.codigoAbreviado
            && element.nombreRequisito === fila.nombreRequisito
            && element.descripcion === fila.descripcion
            && element.fecha === fila.fecha
        ), 1);
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

  changeLegalizacion() {
      this.legalizacionTab.nativeElement.click();
  }

  changeReintegro() {
    this.saveFormLegalizacion();
    if (this.contabilizacionGroup.valid) {
      this.reintegroTab.nativeElement.click();
    }
  }
}
