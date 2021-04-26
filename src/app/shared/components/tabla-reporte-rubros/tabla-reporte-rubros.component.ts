import { Component, Input, OnInit } from '@angular/core';

/* tslint:disable:component-selector */
@Component({
  selector: '[ngx-tabla-reporte-rubros]',
  templateUrl: './tabla-reporte-rubros.component.html',
  styleUrls: ['./tabla-reporte-rubros.component.scss']
})
export class TablaReporteRubrosComponent implements OnInit {

  @Input() config: any;
  @Input() datos: any;
  @Input() rowspanTable: any;
  @Input() index: any;
  suma: any;

  constructor(
  ) { }

  ngOnInit() {
  }


}
