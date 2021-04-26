import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CONFIGURACION_DETALLECUENTAS, DATOS_DETALLECUENTAS } from '../../interfaces/interfaces';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-set-resumendeclaracion',
  templateUrl: './set-resumendeclaracion.component.html',
  styleUrls: ['./set-resumendeclaracion.component.scss']
})
export class SetResumendeclaracionComponent implements OnInit {

  resumenDeclaracionGroup: FormGroup;

  configDetalleCuentas: any;
  datosDetalleCuentas: any;

  // Icono en la Lista de documentos
  mostrarOcultar: string;
  mostrarOcultarIcono: string;

  closeResult = '';

  constructor(private _formBuilder: FormBuilder, private modalService: NgbModal) {

    this.configDetalleCuentas = CONFIGURACION_DETALLECUENTAS;
    this.datosDetalleCuentas = DATOS_DETALLECUENTAS;

    // Icono en la Lista de documentos
    this.mostrarOcultar = 'Mostrar';
    this.mostrarOcultarIcono = 'fa-plus-square';
   }

  ngOnInit() {

    this.resumenDeclaracionGroup = this._formBuilder.group({
    });
  }
  // Configuracion de Icono en lista documentos
  mostrarOcultarCuentas(state: string, index: number) {
    if (state === 'false') {
      this.mostrarOcultarIcono = 'fa-minus-square';
    } else {
      this.mostrarOcultarIcono = 'fa-plus-square';
    }
  }

  open(modalGuardar) {
    this.modalService.open(modalGuardar, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
