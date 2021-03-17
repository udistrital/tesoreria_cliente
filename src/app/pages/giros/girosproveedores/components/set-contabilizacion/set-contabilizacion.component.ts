import { Component, OnInit } from '@angular/core';
import { CONF_PROVEEDORES } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-set-contabilizacion',
  templateUrl: './set-contabilizacion.component.html',
  styleUrls: ['./set-contabilizacion.component.scss']
})
export class SetContabilizacionComponent implements OnInit {

  configuration: any;
  datosProveedores: any;

  constructor() {
    this.configuration = CONF_PROVEEDORES;
    this.datosProveedores = [];
   }

  ngOnInit() {
  }

}
