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
  modalRegistroGroup: FormGroup;

  configLegalizacion: any;
  datosLegalizacion: any;
  configReintegro: any;
  datosReintegro: any;

  // Modales
  closeResult = '';

  subscription$: any;

  constructor(private fb: FormBuilder, private store: Store<any>, private modalService: NgbModal) {
    this.createForm();

    this.configLegalizacion = CONFIGURACION_LEGALIZACION;
    this.datosLegalizacion = DATOS_LEGALIZACION;
    this.configReintegro = CONFIGURACION_REINTEGRO;
    this.datosReintegro = DATOS_REINTEGRO;
  }

  ngOnInit() {

    // tabla
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe((accion) => {
      if (accion && accion.accion) {
        switch (accion.accion.name) {
          case 'borrarLegalizacion':
            this.modalEliminarLegalizacion(accion);
            break;
          case 'borrarReintegro':
            this.modalEliminarReintegro(accion);
            break;
        }
      }
    });
  }

  createForm() {
    this.contabilizacionGroup = this.fb.group({
      // Campos para comprobante de legalizacion
      tipoComprobanteL: ['', Validators.required],
      numeroComprobanteL: ['', Validators.required],
      consecutivoL: ['', Validators.required],
      conceptoL: ['', Validators.required],
      // Campos para comprobante de reintegro
      tipoComprobanteR: ['', Validators.required],
      numeroComprobanteR: ['', Validators.required],
      consecutivoR: ['', Validators.required],
      conceptoR: ['', Validators.required],
    });
  }

  isInvalid(nombre: string) {
    const input = this.contabilizacionGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveFormLegalizacion(touch = true) {
    let valid = true;
    const camposL = ['tipoComprobanteL', 'numeroComprobanteL', 'consecutivoL', 'conceptoL'];
    for (const campo of camposL) {
      const control = this.contabilizacionGroup.get(campo);
      if (touch)
        control.markAsTouched();
      valid = valid && control.valid;
    }
    return valid;
  }

  saveForm() {
    if (this.contabilizacionGroup.invalid) {
      if (!this.saveFormLegalizacion())
        this.legalizacionTab.nativeElement.click();
      return Object.values(this.contabilizacionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  changeLegalizacion() {
      this.legalizacionTab.nativeElement.click();
  }

  changeReintegro() {
    if (this.saveFormLegalizacion()) {
      this.reintegroTab.nativeElement.click();
    }
  }

  // Modal acciones sobre la tabla: eliminar registros
  modalEliminarLegalizacion(fila: any) {
    this.modalService.open(this.eliminarRegistroModal).result.then((result) => {
      if (`${result}`) {
        this.datosLegalizacion.splice(this.datosLegalizacion.findIndex(
          (element: any) => element.secuencia === fila.secuencia
            && element.tercero === fila.tercero
            && element.numeroCuenta === fila.numeroCuenta
            && element.debito === fila.debito
            && element.credito === fila.credito
        ), 1);
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // Modal acciones sobre la tabla: eliminar registros
  modalEliminarReintegro(fila: any) {
    this.modalService.open(this.eliminarRegistroModal).result.then((result) => {
      if (`${result}`) {
        this.datosReintegro.splice(this.datosReintegro.findIndex(
          (element: any) => element.secuencia === fila.secuencia
            && element.tercero === fila.tercero
            && element.numeroCuenta === fila.numeroCuenta
            && element.debito === fila.debito
            && element.credito === fila.credito
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

  modalComprobanteLegalizacion(legalizacionModal) {
    this.modalService.open(legalizacionModal, { size: 'xl' });
  }

  modalComprobanteReintegro(reintegroModal) {
    this.modalService.open(reintegroModal, { size: 'xl' });
  }

}
