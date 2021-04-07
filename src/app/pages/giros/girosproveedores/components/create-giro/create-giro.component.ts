import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatStepper } from '@angular/material';
import { Store } from '@ngrx/store';
import { cargarDatosInformacion, cargarDatosOrdenPago, cargarDatosOrdenesPago, cargarDatosBancoProveedores, cargarDatosBeneficiarios } from '../../actions/giros-proveedores.actions';
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

  informacion: boolean = false;
  orden: boolean = false;
  erogacion: boolean = false;

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

  datosInformacionForm(data: any, stepper: MatStepper) {
    this.store.dispatch(cargarDatosInformacion(data));
    stepper.next();
  }

  validarInformacion(data: any) {
    this.informacion = data;
  }

  guardarOrden(data: any, stepper: MatStepper) {
    this.store.dispatch(cargarDatosOrdenPago(data));
    stepper.next();
  }

  guardarOrdenes(data: any, stepper: MatStepper) {
    this.store.dispatch(cargarDatosOrdenesPago(data));
    stepper.next();
  }

  validarOrden(data: any) {
    this.orden = data;
  }

  datosBancoForm(data: any) {
    this.store.dispatch(cargarDatosBancoProveedores(data));
  }

  datosBeneficiarios(data: any, stepper: MatStepper) {
    this.store.dispatch(cargarDatosBeneficiarios(data));
    stepper.next();
  }

  validarErogacion(data: any) {
    this.erogacion = data;
  }

}
