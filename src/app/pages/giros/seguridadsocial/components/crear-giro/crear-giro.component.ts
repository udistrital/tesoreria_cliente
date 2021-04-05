import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material';
import { Store } from '@ngrx/store';
import { cargarDatosInformacion, cargarDatosRelacion, cargarDatosBeneficiarios, cargarDatosBanco } from '../../actions/seguridad-social.actions';

@Component({
  selector: 'ngx-crear-giro',
  templateUrl: './crear-giro.component.html',
  styleUrls: ['./crear-giro.component.scss']
})
export class CrearGiroComponent implements OnInit {

  informacion: boolean = false;
  relaciones: boolean = false;
  erogacion: boolean = false;

  constructor(
    private store: Store <any>,
  ) { }

  ngOnInit() {
  }

  guardarInformacion(data: any, stepper: MatStepper) {
    this.store.dispatch(cargarDatosInformacion(data));
    stepper.next();
  }

  validarInformacion(data: any) {
    this.informacion = data;
  }

  guardarRelacion(data: any, stepper: MatStepper) {
    this.store.dispatch(cargarDatosRelacion(data));
    stepper.next();
  }

  validarRelaciones(data: any) {
    this.relaciones = data;
  }

  guardarBeneficiarios(data: any, stepper: MatStepper) {
    this.store.dispatch(cargarDatosBeneficiarios(data));
    stepper.next();
  }

  guardarBanco(data: any) {
    this.store.dispatch(cargarDatosBanco(data));
  }

  validarErogacion(data: any) {
    this.erogacion = data;
  }

}
