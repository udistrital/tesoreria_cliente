import { Component, OnInit } from '@angular/core';
import { CONF_DIFERENCIAS, DATOS_DIFERENCIAS } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-set-diferencias',
  templateUrl: './set-diferencias.component.html',
  styleUrls: ['./set-diferencias.component.scss']
})
export class SetDiferenciasComponent implements OnInit {

  configuracionDiferencias: any;
  datosDiferencias: any;

  constructor() {
    this.configuracionDiferencias = CONF_DIFERENCIAS;
    this.datosDiferencias = DATOS_DIFERENCIAS;
   }

  ngOnInit() {
  }

}
