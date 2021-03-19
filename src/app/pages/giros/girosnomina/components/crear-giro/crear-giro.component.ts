import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarDatosInformacion, cargarDatosBancoNomina, cargarDatosRelacion, cargarDatosBeneficiarios } from '../../actions/girosnomina.actions';

@Component({
  selector: 'ngx-crear-giro',
  templateUrl: './crear-giro.component.html',
  styleUrls: ['./crear-giro.component.scss']
})
export class CrearGiroComponent implements OnInit {

  constructor(private store: Store <any>,) {
    
   }

  ngOnInit() {
  }

  datosInformacionForm(data: any) {
    this.store.dispatch(cargarDatosInformacion(data));
  }

  datosInformacionRelacion(data: any) {
    this.store.dispatch(cargarDatosRelacion(data));
  }

  datosBancoForm(data: any) {
    this.store.dispatch(cargarDatosBancoNomina(data));
  }

  datosBeneficiarios(data: any) {
    this.store.dispatch(cargarDatosBeneficiarios(data));
  }

}
