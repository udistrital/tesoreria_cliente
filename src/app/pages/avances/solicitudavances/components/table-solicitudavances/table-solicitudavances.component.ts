import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DATOS_TABLASOLICITUD, CONFIGURACION_TABLASOLICITUD } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-table-solicitudavances',
  templateUrl: './table-solicitudavances.component.html',
  styleUrls: ['./table-solicitudavances.component.scss']
})
export class TableSolicitudavancesComponent implements OnInit {

  configSolicitudes: any;
  datosSolicitudes: any;
  subscription$: any;

  // Modales
  closeResult = '';

  constructor(
    private store: Store<any>,
    private modalService: NgbModal
  ) {
    this.datosSolicitudes = DATOS_TABLASOLICITUD;
    this.configSolicitudes = CONFIGURACION_TABLASOLICITUD;

   }

  ngOnInit() {
  }

}
