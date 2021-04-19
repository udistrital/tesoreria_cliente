import { Component, OnInit } from '@angular/core';
import { DATOS_CONSULTA_ACREEDORES } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-detalle-datos',
  templateUrl: './detalle-datos.component.html',
  styleUrls: ['./detalle-datos.component.scss']
})
export class DetalleDatosComponent implements OnInit {

  Datos: any;

  constructor() {
    this.Datos = DATOS_CONSULTA_ACREEDORES[0];
  }

  ngOnInit() {
  }

}
