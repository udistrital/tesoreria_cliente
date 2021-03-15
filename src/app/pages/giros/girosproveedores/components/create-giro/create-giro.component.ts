import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarDatosInformacion, cargarDatosOrdenPago, cargarDatosOrdenesPago } from '../../actions/giros-proveedores.actions';

@Component({
  selector: 'ngx-create-giro',
  templateUrl: './create-giro.component.html',
  styleUrls: ['./create-giro.component.scss']
})
export class CreateGiroComponent implements OnInit {

  orden: boolean = false;

  constructor(
    private store: Store <any>,
  ) { }

  ngOnInit() {
  }

  datosInformacionForm(data: any) {
    this.store.dispatch(cargarDatosInformacion(data));
  }

  guardarOrden(data: any) {
    this.store.dispatch(cargarDatosOrdenPago(data));
  }

  guardarOrdenes(data: any) {
    this.store.dispatch(cargarDatosOrdenesPago(data));
  }

}
