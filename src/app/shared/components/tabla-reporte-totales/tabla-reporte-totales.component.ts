import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadFilaSeleccionada } from '../../actions/shared.actions';

/* tslint:disable:component-selector */
@Component({
  selector: '[ngx-tabla-reporte-totales]',
  templateUrl: './tabla-reporte-totales.component.html',
  styleUrls: ['./tabla-reporte-totales.component.scss']
})
export class TablaReporteTotalesComponent implements OnInit {

  @Input() config: any;
  @Input() items: any;
  @Input() rowspanTable: any;
  @Input() index: any;
  @Input() title: any;

  constructor(
    private store: Store<any>,
  ) {
  }

  ngOnInit() {
  }

  SelectedAction(action: any, row: any, index: any) {

    this.store.dispatch(LoadFilaSeleccionada({
      titulo: this.config.title,
      accion: action,
      fila: row,
      index: index,
    }));
  }
  asIsOrder(a: any, b: any) {
    return 1;
  }


}
