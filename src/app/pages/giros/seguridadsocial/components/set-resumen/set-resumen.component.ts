import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SelectService } from '../../../../../shared/services/select.service';
import { Store } from '@ngrx/store';
import { getDatosInformacion, getDatosBanco, getDatosBeneficiarios } from '../../selectors/seguridad-social.selectors';
import { SharedService } from '../../../../../shared/services/shared.service';
import { CONF_ENTIDADES_ELEGIDAS } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-set-resumen',
  templateUrl: './set-resumen.component.html',
  styleUrls: ['./set-resumen.component.scss']
})
export class SetResumenComponent implements OnInit, OnDestroy {

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

  subscriptionInformacion$: any;
  subscriptionBanco$: any;

  subscriptionBeneficiarios$: any;

  constructor(
    private modalService: NgbModal,
    private route: Router,
    public modalSeguridad: SelectService,
    private store: Store<any>,
    private shareService: SharedService
  ) {
    this.centroGestor = 230;
    this.tipoDocumento = 'Relación de autorización seguridad social';
    this.numeroCuenta = '230-981-23';
    this.tipoCuenta = 'Ahorros';
    this.consecutivo = 383;
    this.datosEntidades = [];
    this.configurationEntidades = CONF_ENTIDADES_ELEGIDAS;
   }

  ngOnDestroy() {
    this.subscriptionInformacion$.unsubscribe();
    this.subscriptionBanco$.unsubscribe();
    this.subscriptionBeneficiarios$.unsubscribe();
  }

  ngOnInit() {
    this.subscriptionInformacion$ = this.store.select(getDatosInformacion).subscribe(
      data => {
        if (this.shareService.IfStore(data)) {
          this.areaFuncional = data.areaFuncional;
          this.fecha = data.fecha;
          this.tipoGiro = data.tipoGiro;
          this.vigencia = data.vigencia;
        }
      }
    );
    this.subscriptionBanco$ = this.store.select(getDatosBanco).subscribe(
      data => {
        if (this.shareService.IfStore(data)) {
          this.banco = data.banco;
          this.nombreCuenta = data.nombreCuenta;
        }
      }
    );
    this.subscriptionBeneficiarios$ = this.store.select(getDatosBeneficiarios).subscribe(
      data => {
        this.datosEntidades = [];
        if (this.shareService.IfStore(data)) {
          let i = 0;
          while (data[i] !== undefined) {
            this.datosEntidades.push(data[i]);
            i++;
          }
        }
      }
    );
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
