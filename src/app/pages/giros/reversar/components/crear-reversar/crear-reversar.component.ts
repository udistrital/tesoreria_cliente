import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'ngx-crear-reversar',
  templateUrl: './crear-reversar.component.html',
  styleUrls: ['./crear-reversar.component.scss']
})
export class CrearReversarComponent implements OnInit {

  giros: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  validarGiro(data: any, stepper: MatStepper) {
    this.giros = data;
    if (data) {
      stepper.next();
    }
  }

}
