import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'ngx-crear-ingresos',
  templateUrl: './crear-ingresos.component.html',
  styleUrls: ['./crear-ingresos.component.scss']
})
export class CrearIngresosComponent implements OnInit {

  inicio: boolean = false;
  afectacion: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  validarInicio(data: boolean) {
    this.inicio = data;
  }

  informacionInicio(data: any, stepper: MatStepper) {
    stepper.next();
  }

  validarRubros(data: boolean) {
    this.afectacion = data;
  }

  informacionRubros(data: any, stepper: MatStepper) {
    stepper.next();
  }

}
