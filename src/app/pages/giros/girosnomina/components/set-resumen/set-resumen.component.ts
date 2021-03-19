import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SelectService } from '../../../../../shared/services/select.service';
import { SharedService } from '../../../../../shared/services/shared.service';
import { Store } from '@ngrx/store';
import { getDatosBanco, getDatosInformacion, getDatosBeneficiarios } from '../../selectors/girosnomina.selectors';
import { CONF_BENEFICIARIO } from '../../interfaces/interfaces';
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
  banco: any;
  nombreCuenta: any;
  numeroCuenta: any;
  tipoCuenta: any;
  concepto: any;

  modal: NgbModalRef;

  ngOnDestroy() {
    this.subscription$.unsubscribe();
    this.subscriptionInformacion$.unsubscribe();
    this.subscriptionBanco$.unsubscribe();
  }

  constructor(private store: Store<any>,
    private sharedService: SharedService,
    private route: Router,
    private modalService: NgbModal,
    public modalNomina: SelectService ) {
      this.configuration = CONF_BENEFICIARIO;
      this.tipoDocumento = 'Relación de autorización';
      this.centroGestor = 230;
      this.numeroCuenta = '230-981-23';
      this.tipoCuenta = 'Ahorros';
      this.datosBeneficiarios = [];
      this.consecutivo = [];
     }

  ngOnInit() {
    this.subscriptionBanco$ = this.store.select(getDatosBanco).subscribe(
      (data: any) => {
        if(this.sharedService.IfStore(data)) {
          this.banco = data.banco;
          this.nombreCuenta = data.nombreCuenta;
          this.concepto = data.concepto;
        }
      }
    );
    this.subscriptionInformacion$ = this.store.select(getDatosInformacion).subscribe(
      (data: any) => {
        if(this.sharedService.IfStore(data)) {
          this.areaFuncional = data.areaFuncional;
          this.tipoGiro = data.tipoGiro;
          this.fecha = data.fecha;
          this.vigencia = data.vigencia;
        }
      }
    );
    this.subscription$ = this.store.select(getDatosBeneficiarios).subscribe(
      (data: any) => {
        if(this.sharedService.IfStore(data)) {
          let i = 0;
          while (data[i] !== undefined) {
            this.datosBeneficiarios.push(data[i]);
            this.consecutivo.push(data[i].consecutivo);
            i++;
          }
        }
      }
    );

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

  guardar() {
    Swal.fire({
      type: 'success',
      title: '¡Guardado!',
      html: 'Se ha creado el giro con consecutivo: ' + this.consecutivo + '<br> Estado: Pendiente',
      confirmButtonText: 'Aceptar',
    });
    this.route.navigateByUrl('/pages/giros/nomina/lista');
  }

  contabilizacion() {
    this.modalNomina.modalNomina = true;
  }

  girar() { }

}
