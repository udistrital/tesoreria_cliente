import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { cargarTipoIngreso } from '../../actions/ingresos.actions';

@Component({
  selector: 'ngx-layout-ingresos',
  templateUrl: './layout-ingresos.component.html',
  styleUrls: ['./layout-ingresos.component.scss']
})
export class LayoutIngresosComponent implements OnInit {

  tipoIngreso: any;

  constructor(
    private routeActived: ActivatedRoute,
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.getOrden();
  }

  getOrden (): void {
    this.routeActived.params.subscribe(
      params => {
        this.store.dispatch(cargarTipoIngreso(params));
      }
    )
  }
}
