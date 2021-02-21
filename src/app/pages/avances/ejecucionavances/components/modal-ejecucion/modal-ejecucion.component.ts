import { Component, OnInit } from '@angular/core';
import {ViewChild, AfterViewInit} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DATOS_MODAL, CONFIGURACION_EJECUCION, DATOS_PRACTICAS} from '../../interfaces/interfaces';
import { SelectService } from '../../../../../shared/services/select.service';

@Component({
  selector: 'ngx-modal-ejecucion',
  templateUrl: './modal-ejecucion.component.html',
  styleUrls: ['./modal-ejecucion.component.scss']
})
export class ModalEjecucionComponent implements OnInit, AfterViewInit {
  modal: NgbModalRef;
  @ViewChild('modalEjecucion', {static: false}) modalContenido: any;

  datosEjecucion: any;
  configuracionEjecucion: any;

  datosPracticas: any;

  titlesPracticas: String[] = [ 'Código', 'Nombre', 'Valor asignado'];
  attributesPracticas: any [] = [['codigo'], ['nombre'], ['valorAsignado']];
  constructor(
    private modalService: NgbModal,
    public modalEjecucion: SelectService
  ) {
    this.datosEjecucion = DATOS_MODAL;
    this.configuracionEjecucion = CONFIGURACION_EJECUCION;
    this.datosPracticas = DATOS_PRACTICAS;
   }

  ngAfterViewInit() {
    this.abrir();
  }

  ngOnInit() {}

  abrir() {
    this.modal = this.modalService.open(this.modalContenido);
  }

  cerrar () {
    this.modal.close();
    this.modalEjecucion.modalEjecucion = false;
  }

}
