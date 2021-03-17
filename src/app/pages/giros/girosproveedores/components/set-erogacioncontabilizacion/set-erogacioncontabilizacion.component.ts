import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-set-erogacioncontabilizacion',
  templateUrl: './set-erogacioncontabilizacion.component.html',
  styleUrls: ['./set-erogacioncontabilizacion.component.scss']
})
export class SetErogacioncontabilizacionComponent implements OnInit {

  cuentas: String[] = [
    'Opcion 1',
    'Opcion 2',
    'Opcion 3'
  ];

  bancos: String[] = [
    'Banco de Bogotá',
    'Banco de Occidente',
    'BBVA'
  ];

  cuenta = '230-981-23';
  tipo = 'Ahorros';
  
  constructor() { }

  ngOnInit() {
  }

}
