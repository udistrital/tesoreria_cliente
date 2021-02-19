import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-set-contabilizacion',
  templateUrl: './set-contabilizacion.component.html',
  styleUrls: ['./set-contabilizacion.component.scss']
})
export class SetContabilizacionComponent implements OnInit {

  titles = ['Secuencia', 'Tercero', 'N° de cuenta', 'Nombre cuenta', 'Detalle', 'Crédito'];
  attributes = [['secuencia'], ['tercero'], ['numeroCuenta'], ['nombreCuenta'], ['detalle'], ['credito']];

  contabilizacion: any;

  constructor() { }

  ngOnInit() {
  }

}
