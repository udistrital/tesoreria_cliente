import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { SharedService } from '../../../../shared/services/shared.service';
import { getTipoIngreso } from '../../selectors/ingresos.selectors';
import { Router } from '@angular/router';
import {
  CONF_CONSIGNACION,
  CONF_CODIGO_BARRAS,
  CONF_APORTES,
  DATOS_ICETEX,
  DATOS_PSE,
  DATOS_ACH,
  DATOS_RECAUDO,
  DATOS_APORTES_NACION,
  DATOS_APORTES_DISTRITO,
  DATOS_CODIGO_BARRAS,
  DATOS_OTRAS_ENTIDADES,
} from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-set-consignaciones',
  templateUrl: './set-consignaciones.component.html',
  styleUrls: ['./set-consignaciones.component.scss'],
})
export class SetConsignacionesComponent implements OnInit, OnDestroy {
  configurationConsignaciones: any;
  datosConsignaciones: any;
  tipoIngreso: any;
  aportes: boolean;
  totalCheques: any;
  totalValoresEfectivo: any;
  totalValoresDatafono: any;
  subscriptionTipo$: any;

  constructor(
    private store: Store<any>,
    private sharedService: SharedService,
    private route: Router
  ) {}
  ngOnDestroy() {
    if (this.subscriptionTipo$ !== undefined) {
      this.subscriptionTipo$.unsubscribe();
    }
  }

  ngOnInit() {
    this.subscriptionTipo$ = this.store
      .select(getTipoIngreso)
      .subscribe((data) => {
        if (this.sharedService.IfStore(data)) {
          const tipoFinal = data.tipoIngreso.Nombre;
          switch (tipoFinal) {
            case 'icetex':
              this.configurationConsignaciones = CONF_CONSIGNACION;
              this.datosConsignaciones = DATOS_ICETEX;
              this.aportes = false;
              break;
            case 'barras':
              this.configurationConsignaciones = CONF_CODIGO_BARRAS;
              this.datosConsignaciones = DATOS_CODIGO_BARRAS;
              this.aportes = false;
              break;
            case 'pse':
              this.configurationConsignaciones = CONF_CONSIGNACION;
              this.datosConsignaciones = DATOS_PSE;
              this.aportes = false;
              break;
            case 'ach':
              this.configurationConsignaciones = CONF_CONSIGNACION;
              this.datosConsignaciones = DATOS_ACH;
              this.aportes = false;
              break;
            case 'recaudoLinea':
              this.configurationConsignaciones = CONF_CONSIGNACION;
              this.datosConsignaciones = DATOS_RECAUDO;
              this.aportes = false;
              break;
            case 'aportesNacion':
              this.configurationConsignaciones = CONF_APORTES;
              this.datosConsignaciones = DATOS_APORTES_NACION;
              this.aportes = true;
              break;
            case 'aportesDistrito':
              this.configurationConsignaciones = CONF_APORTES;
              this.datosConsignaciones = DATOS_APORTES_DISTRITO;
              this.aportes = true;
              break;
            case 'otrasEntidades':
              this.configurationConsignaciones = CONF_CONSIGNACION;
              this.datosConsignaciones = DATOS_OTRAS_ENTIDADES;
              this.aportes = false;
              break;
            default:
              this.regresar();
              break;
          }
          this.tipoIngreso = tipoFinal;
        }
      });
  }

  total() {
    return (
      this.totalValoresEfectivo + this.totalValoresDatafono + this.totalCheques
    );
  }

  totalEfectivo() {
    return (this.totalValoresEfectivo = this.datosConsignaciones.reduce(
      (a: any, b: { valorEfectivo: number }) => a + b.valorEfectivo,
      0
    ));
  }

  regresar() {
    this.route.navigateByUrl('pages/ingresos/lista');
  }

  totalCheque() {
    return (this.totalCheques = this.datosConsignaciones.reduce(
      (a: any, b: { valorCheque: number }) => a + b.valorCheque,
      0
    ));
  }

  totalDatafono() {
    return (this.totalValoresDatafono = this.datosConsignaciones.reduce(
      (a: any, b: { valorDatafono: number }) => a + b.valorDatafono,
      0
    ));
  }

  totalAportes() {
    return this.datosConsignaciones.reduce(
      (a: any, b: { valor: number }) => a + b.valor,
      0
    );
  }

  anterior() {}

  siguiente() {}
}
