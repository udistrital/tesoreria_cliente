import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DATOS_CONSULTAINFORMACION, CONFIGURACION_CONSULTAINFORMACION } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-set-consultasolicitante',
  templateUrl: './set-consultasolicitante.component.html',
  styleUrls: ['./set-consultasolicitante.component.scss']
})
export class SetConsultasolicitanteComponent implements OnInit {

  justificacionGroup: FormGroup;

  // Datos de las tablas
  configInformacion: any;
  datosInformacion: any;
  closeResult: any;

  constructor(private fb: FormBuilder, private modalService: NgbModal) {

    this.configInformacion = CONFIGURACION_CONSULTAINFORMACION;
    this.datosInformacion = DATOS_CONSULTAINFORMACION;
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

  cancelar(cancelarModal) {
    this.modalService.open(cancelarModal, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  generar(generarModal) {
      this.modalService.open(generarModal, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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
