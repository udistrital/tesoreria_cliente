import { Component, OnInit } from '@angular/core';
import { CONFIGURACION_ANEXOS, DATOS_ANEXOS } from '../../interfaces/interfaces';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-set-consultayaprobacion',
  templateUrl: './set-consultayaprobacion.component.html',
  styleUrls: ['./set-consultayaprobacion.component.scss']
})
export class SetConsultayaprobacionComponent implements OnInit {

  justificacionGroup: FormGroup;

  // Datos de las tablas
  configAnexos: any;
  datosAnexos: any;
  closeResult: any;

  constructor(private fb: FormBuilder, private modalService: NgbModal) {

    this.configAnexos = CONFIGURACION_ANEXOS;
    this.datosAnexos = DATOS_ANEXOS;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.justificacionGroup = this.fb.group({
      justificacion: ['', Validators.required],
    });
  }

  isInvalid(nombre: string) {
    const input = this.justificacionGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.justificacionGroup.invalid) {
      return Object.values(this.justificacionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  denegar(corregirDefinitivo) {
    this.modalService.open(corregirDefinitivo, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  generar(guardarDefinitivo) {
      this.modalService.open(guardarDefinitivo, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
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
