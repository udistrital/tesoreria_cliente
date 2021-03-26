import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SelectService } from '../../../../../shared/services/select.service';

@Component({
  selector: 'ngx-set-resumen',
  templateUrl: './set-resumen.component.html',
  styleUrls: ['./set-resumen.component.scss']
})
export class SetResumenComponent implements OnInit {

  @ViewChild('modalCancelar', { static: false }) modalCancelar: any;

  areaFuncional: any;
  fecha: any;
  tipoGiro: any;
  centroGestor: any;
  tipoDocumento: any;
  consecutivo: any;
  vigencia: any;
  banco: any;
  nombreCuenta: any;
  numeroCuenta: any;
  tipoCuenta: any;
  concepto: any;

  configurationEntidades: any;
  configurationBeneficiarios: any;

  datosEntidades: any;
  datosBeneficiarios: any;

  modal: NgbModalRef;

  constructor(
    private modalService: NgbModal,
    private route: Router,
    public modalSeguridad: SelectService
  ) { }

  ngOnInit() {
  }

  cerrar() {
    this.modal.close();
  }

  aceptar () {
    this.route.navigateByUrl('/pages/giros/seguridad/lista');
    this.modal.close();
  }

  guardar() {
    Swal.fire({
      type: 'success',
      title: '¡Guardado!',
      html: 'Se ha creado el giro con consecutivo: ' + this.consecutivo + '<br> Estado: Pendiente',
      confirmButtonText: 'Aceptar',
    });
    this.route.navigateByUrl('/pages/giros/seguridad/lista');
  }

  cancelar() {
    this.modal = this.modalService.open(this.modalCancelar);
  }

  contabilizacion() {
    this.modalSeguridad.modalSeguridad = true;
  }

  girar() { }

}
