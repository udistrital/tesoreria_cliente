import { Component, OnInit } from '@angular/core';
import { CONF_BANCOS, DATOS_BANCOS } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-set-concentracion',
  templateUrl: './set-concentracion.component.html',
  styleUrls: ['./set-concentracion.component.scss']
})
export class SetConcentracionComponent implements OnInit {

  configuracionEntidades: any;
  datosEntidades: any;

  constructor() {
    this.configuracionEntidades = CONF_BANCOS;
    this.datosEntidades = DATOS_BANCOS;
   }

  ngOnInit() {
  }

}
