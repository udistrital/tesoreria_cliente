import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SelectService } from '../../../../../shared/services/select.service';
import { SharedService } from '../../../../../shared/services/shared.service';
import { Store } from '@ngrx/store';
@Component({
  selector: 'ngx-set-resumen',
  templateUrl: './set-resumen.component.html',
  styleUrls: ['./set-resumen.component.scss']
})
export class SetResumenComponent implements OnInit {

  @ViewChild('modalCancelar', { static: false }) modalCancelar: any;

  subscription$: any;
  subscriptionInformacion$: any;
  subscriptionBanco$: any;
  datosBeneficiarios: any;

  configuration: any;

  areaFuncional: any;
  fecha: any;
  tipoGiro: any;
  centroGestor: any;
  tipoDocumento: any;
  consecutivo: any;
  vigencia: any;
  giroTramite: any;
  banco: any;
  nombreCuenta: any;
  numeroCuenta: any;
  tipoCuenta: any;

  modal: NgbModalRef;

  constructor(private store: Store<any>,
    private sharedService: SharedService,
    private route: Router,
    private modalService: NgbModal,
    public modalProveedor: SelectService ) { }

  ngOnInit() {
  }

  cancelar() {
    this.modal = this.modalService.open(this.modalCancelar);
  }

  cerrar() {
    this.modal.close();
  }

  aceptar () {
    this.route.navigateByUrl('/pages/giros/nomina/lista');
    this.modal.close();
  }

  guardar() {}

  contabilizacion() {
    
  }

  girar() { }

}
