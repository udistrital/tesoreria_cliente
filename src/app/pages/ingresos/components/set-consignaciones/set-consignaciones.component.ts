import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SharedService } from '../../../../shared/services/shared.service';
import { getTipoIngreso } from '../../selectors/ingresos.selectors';
import { Router } from '@angular/router';
import { CONF_CONSIGNACION, CONF_CODIGO_BARRAS, CONF_APORTES, DATOS_ICETEX, DATOS_PSE, DATOS_ACH, DATOS_RECAUDO, DATOS_APORTES_NACION, DATOS_APORTES_DISTRITO, DATOS_CODIGO_BARRAS } from '../../interfaces/interfaces';
import { DATOS_ENTIDADES } from '../../../giros/seguridadsocial/interfaces/interfaces';

@Component({
  selector: 'ngx-set-consignaciones',
  templateUrl: './set-consignaciones.component.html',
  styleUrls: ['./set-consignaciones.component.scss']
})
export class SetConsignacionesComponent implements OnInit {

  configurationConsignaciones: any;
  datosConsignaciones: any;
  tipoIngreso: any;

  constructor(
    private store: Store<any>,
    private sharedService: SharedService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.store.select(getTipoIngreso).subscribe(
      data => {
        if (this.sharedService.IfStore(data)) {
          switch (data.tipo) {
            case 'icetex':
              this.configurationConsignaciones = CONF_CONSIGNACION;
              this.datosConsignaciones = DATOS_ICETEX;
              break;
            case 'barras':
              this.configurationConsignaciones = CONF_CODIGO_BARRAS;
              this.datosConsignaciones = DATOS_CODIGO_BARRAS;
              break;
            case 'pse':
              this.configurationConsignaciones = CONF_CONSIGNACION;
              this.datosConsignaciones = DATOS_PSE;
              break;
            case 'ach':
              this.configurationConsignaciones = CONF_CONSIGNACION;
              this.datosConsignaciones = DATOS_ACH;
              break;
            case 'recaudoLinea':
              this.configurationConsignaciones = CONF_CONSIGNACION;
              this.datosConsignaciones = DATOS_RECAUDO;
              break;
            case 'aportesNacion':
              this.configurationConsignaciones = CONF_APORTES;
              this.datosConsignaciones = DATOS_APORTES_NACION;
              break;
            case 'aportesDistrito':
              this.configurationConsignaciones = CONF_APORTES;
              this.datosConsignaciones = DATOS_APORTES_DISTRITO;
              break;
            case 'otrasEntidades':
              this.configurationConsignaciones = CONF_CONSIGNACION;
              this.datosConsignaciones = DATOS_ENTIDADES;
              break;
            default:
              this.regresar();
              break;
          }
          this.tipoIngreso = data.tipo;
        }
      }
    );
  }

  total() {
  }

  totalEfectivo() {

  }

  regresar() {
    this.route.navigateByUrl('pages/ingresos/' + this.tipoIngreso + '/lista');
  }

  totalCheque() {}

  totalDatafono() {}

}
