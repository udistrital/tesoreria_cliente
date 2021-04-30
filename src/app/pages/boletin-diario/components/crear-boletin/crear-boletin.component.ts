import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material';
import { Store } from '@ngrx/store';
import { cargarDatosInformacion } from '../../actions/boletin-diario.actions';

@Component({
  selector: 'ngx-crear-boletin',
  templateUrl: './crear-boletin.component.html',
  styleUrls: ['./crear-boletin.component.scss']
})
export class CrearBoletinComponent implements OnInit {

  informacion: boolean = false;

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  validarInformacion(data: boolean) {
    this.informacion = data;
  }

  datosInformacionForm(data: any, stepper: MatStepper) {
    this.store.dispatch(cargarDatosInformacion(data));
    stepper.next();
  }

}
