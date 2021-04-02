import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material';
import { Store } from '@ngrx/store';
import { cargarDatosInformacion, cargarDatosBancoNomina, cargarDatosRelacion, cargarDatosBeneficiarios } from '../../actions/girosnomina.actions';

@Component({
  selector: 'ngx-crear-giro',
  templateUrl: './crear-giro.component.html',
  styleUrls: ['./crear-giro.component.scss']
})
export class CrearGiroComponent implements OnInit {

  informacion: boolean = false;
  relacion: boolean = false;
  erogacion: boolean = false;

  constructor(private store: Store <any>, ) {}

  ngOnInit() {
  }

  datosInformacionForm(data: any, stepper: MatStepper) {
    this.store.dispatch(cargarDatosInformacion(data));
    stepper.next();
  }

  validarInformacion(data: any) {
    this.informacion = data;
  }

  datosInformacionRelacion(data: any, stepper: MatStepper) {
    this.store.dispatch(cargarDatosRelacion(data));
    stepper.next();
  }

  validarRelacion(data: any) {
    this.relacion = data;
  }

  datosBancoForm(data: any) {
    this.store.dispatch(cargarDatosBancoNomina(data));
  }

  datosBeneficiarios(data: any, stepper: MatStepper) {
    this.store.dispatch(cargarDatosBeneficiarios(data));
    stepper.next();
  }

  validarErogacion(data: any) {
    this.erogacion = data;
  }

}
