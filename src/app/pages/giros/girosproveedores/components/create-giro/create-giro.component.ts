import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarDatosInformacion, cargarDatosOrdenPago, cargarDatosOrdenesPago } from '../../actions/giros-proveedores.actions';
import { getDatosInformacion, getDatosOrdenPago } from '../../selectors/giros-proveedores.selectors';

@Component({
  selector: 'ngx-create-giro',
  templateUrl: './create-giro.component.html',
  styleUrls: ['./create-giro.component.scss']
})
export class CreateGiroComponent implements OnInit, OnDestroy {

  subscriptionInformacion$: any;
  subscription$: any;
  tipoTramite: any;

  constructor(
    private store: Store <any>,
  ) {
    this.tipoTramite = '';
   }

  ngOnDestroy() {
    this.subscriptionInformacion$.unsubscribe();
  }

  ngOnInit() {
    this.subscriptionInformacion$ = this.store.select(getDatosInformacion).subscribe(
      data => {
        if (data !== null) {
          this.tipoTramite = data.giroTramite;
        }
      }
    );
  }

  datosInformacionForm(data: any) {
    this.store.dispatch(cargarDatosInformacion(data));
  }

  guardarOrden(data: any) {
    /* this.store.dispatch(cargarDatosOrdenPago(null)); */
    this.store.dispatch(cargarDatosOrdenPago(data));
  }

  guardarOrdenes(data: any) {
    /* this.store.dispatch(cargarDatosOrdenesPago(null)); */
    this.store.dispatch(cargarDatosOrdenesPago(data));
  }

}
