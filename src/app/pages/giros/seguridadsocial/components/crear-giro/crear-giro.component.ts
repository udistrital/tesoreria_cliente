import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarDatosInformacion, cargarDatosRelacion, cargarDatosBeneficiarios, cargarDatosBanco } from '../../actions/seguridad-social.actions';

@Component({
  selector: 'ngx-crear-giro',
  templateUrl: './crear-giro.component.html',
  styleUrls: ['./crear-giro.component.scss']
})
export class CrearGiroComponent implements OnInit {

  constructor(
    private store: Store <any>,
  ) { }

  ngOnInit() {
  }

  guardarInformacion(data: any) {
    this.store.dispatch(cargarDatosInformacion(data));
  }

  guardarRelacion(data: any) {
    this.store.dispatch(cargarDatosRelacion(data));
  }

  guardarBeneficiarios(data: any) {
    this.store.dispatch(cargarDatosBeneficiarios(data));
  }

  guardarBanco(data: any) {
    this.store.dispatch(cargarDatosBanco(data));
  }

}
