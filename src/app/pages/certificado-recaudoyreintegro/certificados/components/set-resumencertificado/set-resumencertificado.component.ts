import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DATOS_COMPROBANTES, CONFIGURACION_COMPROBANTESFINAL } from '../../interfaces/interfaces';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-set-resumencertificado',
  templateUrl: './set-resumencertificado.component.html',
  styleUrls: ['./set-resumencertificado.component.scss']
})
export class SetResumencertificadoComponent implements OnInit {

  resumenCertificadoGroup: FormGroup;

  // Configuracion de la tabla
  configComprobantes: any;
  datosComprobantes: any;

  // Icono en la Lista de documentos
  mostrarOcultar: string;
  mostrarOcultarIcono: string;
  closeResult: any;


  constructor(private fb: FormBuilder, private modalService: NgbModal) {

    // Datos y configuracion de Tabla
    this.datosComprobantes = DATOS_COMPROBANTES;
    this.configComprobantes = CONFIGURACION_COMPROBANTESFINAL;

    // Icono en la Lista de documentos
    this.mostrarOcultar = 'Mostrar';
    this.mostrarOcultarIcono = 'fa-plus-square';
  }

  ngOnInit() {
    this.resumenCertificadoGroup = this.fb.group({
    });
  }

  // Configuracion de Icono en lista documentos
  mostrarOcultarDocs(state: string) {
    if (state === 'false') {
      this.mostrarOcultarIcono = 'fa-minus-square';
    } else {
      this.mostrarOcultarIcono = 'fa-plus-square';
    }
  }

  // Funciones para descargar comprobantes contables
  create(modalCertificado) {
    this.modalService.open(modalCertificado, { size: 'xl' }).result.then((result) => {
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
