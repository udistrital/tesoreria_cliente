import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarDatosContabilizacion, cargarDatosDetalle, cargarDatosErogacion } from '../../actions/girocheques.actions';
@Component({
  selector: 'ngx-create-giro',
  templateUrl: './create-giro.component.html',
  styleUrls: ['./create-giro.component.scss']
})
export class CreateGiroComponent implements OnInit {

  contabilizacionForm: boolean = false;
  detallesForm: boolean = false;
  erogacionForm: boolean = false;

  constructor(private store: Store<any> ) { }

  ngOnInit() {
  }

  validarContabilizacionForm(data: any) {
    this.contabilizacionForm = data;
  }
  validarDetallesForm(data: any) {
    this.detallesForm = data;
  }
  validarErogacionForm(data: any) {
    this.erogacionForm = data;
  }

  informacionContabilizacionForm(data: any) {
    this.store.dispatch(cargarDatosContabilizacion(data));
  }

  informacionDetallesForm(data: any) {
    this.store.dispatch(cargarDatosDetalle(data));
  }
  informacionErogacionForm(data: any) {
    this.store.dispatch(cargarDatosErogacion(data));
  }
}
