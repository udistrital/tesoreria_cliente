import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { getDatosBeneficiarios, getDatosTercero } from '../../selectors/girosnomina.selectors';
import { SharedService } from '../../../../../shared/services/shared.service';
import { DATOS_CONTABILIDAD_TERCERO,
  DATOS_ACREEDOR,
  CONF_ACREEDOR,
  CONF_CONT } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-set-resumen-contabilizacion',
  templateUrl: './set-resumen-contabilizacion.component.html',
  styleUrls: ['./set-resumen-contabilizacion.component.scss']
})
export class SetResumenContabilizacionComponent implements OnInit, OnDestroy {

  @Output() informacionResumen: EventEmitter<any>;

  concepto: any;
  codigo: any;
  tipoComprobante: any;
  consecutivo: any;

  configurationContabilidad: any;
  datosContabilidad: any;
  datosBeneficiarios: any;
  subscriptionBeneficiarios: any;
  subscriptionTercero: any;

  configurationAcreedor: any;
  datosAcreedor: any;

  debito: any;
  credito: any;
  indice: any;

  total: any;

  constructor(
    private store: Store<any>,
    private sharedService: SharedService
  ) {
    this.configurationAcreedor = CONF_ACREEDOR;
    this.configurationContabilidad = CONF_CONT;
    this.datosContabilidad = DATOS_CONTABILIDAD_TERCERO;
    this.datosAcreedor = DATOS_ACREEDOR;
    this.informacionResumen = new EventEmitter;
   }
  ngOnDestroy() {
    this.subscriptionBeneficiarios.unsubscribe();
    this.subscriptionTercero.unsubscribe();
  }

  ngOnInit() {
    this.subscriptionBeneficiarios = this.store.select(getDatosBeneficiarios).subscribe(
      data => {
        if (this.sharedService.IfStore(data)) {
          this.datosBeneficiarios = [];
          this.consecutivo = [];
          let i = 0;
          while (data[i] !== undefined) {
            this.datosBeneficiarios.push(data[i]);
            this.consecutivo.push(data[i].consecutivo);
            i++;
          }
        }
      }
    );
    this.subscriptionTercero = this.store.select(getDatosTercero).subscribe(
      data => {
        if (this.sharedService.IfStore(data)) {
          this.concepto = data.concepto;
          this.codigo = data.codigo;
          this.tipoComprobante = data.tipoComprobante;
        }
      }
    );
  }

  anterior() {}

  siguiente() {}

  elegir(index: any) {}

  anteriorAcreedor() {}

  siguienteAcreedor() {}

  elegirAcreedor(index: any) {}

  guardar() {
    this.informacionResumen.emit(false);
  }

  totalGasto() {
    return this.total = this.datosAcreedor.reduce((a: any, b: { valor: number; }) => a + b.valor, 0);
  }

  totalDebito() {
    return this.debito = this.datosContabilidad.reduce((a: any, b: { debito: number; }) => a + b.debito, 0);
  }

  totalCredito() {
    return this.credito = this.datosContabilidad.reduce((a: any, b: { credito: number; }) => a + b.credito, 0);
  }

}
