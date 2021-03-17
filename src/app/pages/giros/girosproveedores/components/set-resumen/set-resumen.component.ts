import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { getDatosBeneficiarios, getDatosInformacion, getDatosBancoProveedores } from '../../selectors/giros-proveedores.selectors';
import { SharedService } from '../../../../../shared/services/shared.service';
import { CONF_BENEFICIARIORESUMEN, DATOS_GIROPROVEEDORES } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-set-resumen',
  templateUrl: './set-resumen.component.html',
  styleUrls: ['./set-resumen.component.scss']
})
export class SetResumenComponent implements OnInit, OnDestroy {

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
    private modalService: NgbModal, ) {
    this.datosBeneficiarios = [];
    this.consecutivo = [];
    this.configuration = CONF_BENEFICIARIORESUMEN;
    this.tipoDocumento = 'Orden de pago a proveedores';
    this.centroGestor = 230;
    this.numeroCuenta = '230-981-23';
    this.tipoCuenta = 'Ahorros';
  }

  ngOnDestroy() {
    this.subscriptionInformacion$.unsubscribe();
    this.subscription$.unsubscribe();
    if (this.modal !== undefined) {
      this.modal.close();
    }
  }

  ngOnInit() {
    this.subscription$ = this.store.select(getDatosBeneficiarios).subscribe(
      data => {
        this.datosBeneficiarios = [];
        this.consecutivo = [];
        if (this.sharedService.IfStore(data)) {
          let i = 0;
          while (data[i] !== undefined) {
            this.datosBeneficiarios.push(data[i]);
            this.consecutivo.push(data[i].consecutivo);
            i++;
          }
        }
      }
    );
    this.subscriptionInformacion$ = this.store.select(getDatosInformacion).subscribe(
      data => {
        if (this.sharedService.IfStore(data)) {
          this.areaFuncional = data.areaFuncional;
          this.fecha = data.fecha;
          this.tipoGiro = data.tipoGiro;
          this.vigencia = data.vigencia;
          this.giroTramite = data.giroTramite;
        }

      }
    );
    this.subscriptionBanco$ = this.store.select(getDatosBancoProveedores).subscribe(
      data => {
        if (this.sharedService.IfStore(data)) {
          this.banco = data.banco;
          this.nombreCuenta = data.nombreCuenta;
        }
      }
    );
  }

  guardar() {
    Swal.fire({
      type: 'success',
      title: '¡Guardado!',
      html: 'Se ha creado el giro con consecutivo: ' + this.consecutivo + '<br> Estado: Pendiente',
      confirmButtonText: 'Aceptar',
    });
    DATOS_GIROPROVEEDORES.push();
    this.route.navigateByUrl('/pages/giros/proveedores/lista');
  }

  cancelar() {
    this.modal = this.modalService.open(this.modalCancelar);
  }

  cerrar() {
    this.modal.close();
  }

  aceptar () {
    this.route.navigateByUrl('/pages/giros/proveedores/lista');
    this.modal.close();
  }

  contabilizacion() { }

  girar() { }

}
