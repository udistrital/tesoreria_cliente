import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-set-resumen',
  templateUrl: './set-resumen.component.html',
  styleUrls: ['./set-resumen.component.scss']
})
export class SetResumenComponent implements OnInit {

  areaFuncional: any;
  fecha: any;
  tipoGiro: any;
  centroGestor: any;
  tipoDocumento: any;
  consecutivo: any;
  vigencia: any;
  banco: any;
  nombreCuenta: any;
  numeroCuenta: any;
  tipoCuenta: any;
  concepto: any;
  constructor() { }

  ngOnInit() {
  }

}
