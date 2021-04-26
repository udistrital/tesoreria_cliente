import { Component, OnInit } from '@angular/core';
import { CONFIGURACION_CONCILIACION, DATOS_CONCILIACION, DATOS_OTROSPAGOS } from '../../interfaces/interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ngx-set-conciliaciondeclaracion',
  templateUrl: './set-conciliaciondeclaracion.component.html',
  styleUrls: ['./set-conciliaciondeclaracion.component.scss']
})
export class SetConciliaciondeclaracionComponent implements OnInit {

  conciliacionGroup: FormGroup;

  configConciliacion: any;
  datosConciliacion: any;
  datosOtrosPagos: any;

  // Icono en la Lista de documentos
  mostrarOcultar: string;
  mostrarOcultarIcono: string;

  diferencia: boolean;

  closeResult = '';

  constructor(private fb: FormBuilder, private modalService: NgbModal) {

    this.configConciliacion = CONFIGURACION_CONCILIACION;
    this.datosConciliacion = DATOS_CONCILIACION;
    this.datosOtrosPagos = DATOS_OTROSPAGOS;

    // Icono en la Lista de documentos
    this.mostrarOcultar = 'Mostrar';
    this.mostrarOcultarIcono = 'fa-plus-square';

    // Existe diferencia en los valores
    this.diferencia = true;
  }

  ngOnInit() {
    this.createForm();
  }

  agregarCuenta() {

  }
  // Configuracion de Icono en lista documentos
  mostrarOcultarCuentas(state: string, index: number) {
    if (state === 'false') {
      this.mostrarOcultarIcono = 'fa-minus-square';
    } else {
      this.mostrarOcultarIcono = 'fa-plus-square';
    }
  }

  createForm() {
    this.conciliacionGroup = this.fb.group({
      codigoCuenta: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]],
      valorCuenta: ['', [
        Validators.required,
        RxwebValidators.numeric({allowDecimal: true})
      ]]
    });
  }

  isInvalid(nombre: string) {
    const input = this.conciliacionGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.conciliacionGroup.invalid) {
      return Object.values(this.conciliacionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  compararValores(corregirDefinitivo) {
    if (this.conciliacionGroup.valid) {
    this.modalService.open(corregirDefinitivo, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  } else {
    this.saveForm();
  }
  }

  guardar(guardarDefinitivo) {
    if (this.conciliacionGroup.valid) {
    this.modalService.open(guardarDefinitivo, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  } else {
    this.saveForm();
  }
  }

  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
