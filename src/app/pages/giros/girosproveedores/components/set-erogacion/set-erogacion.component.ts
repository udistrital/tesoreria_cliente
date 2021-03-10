import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-set-erogacion',
  templateUrl: './set-erogacion.component.html',
  styleUrls: ['./set-erogacion.component.scss']
})
export class SetErogacionComponent implements OnInit {

  cuentas: String [] = [
    'Opcion 1',
    'Opcion 2',
    'Opcion 3'
  ];

  bancos: String [] = [
    'Banco de Bogotá',
    'Banco de Occidente',
    'BBVA'
  ];

  constructor() { }

  ngOnInit() {
  }

}
