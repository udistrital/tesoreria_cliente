import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-create-giro',
  templateUrl: './create-giro.component.html',
  styleUrls: ['./create-giro.component.scss']
})
export class CreateGiroComponent implements OnInit {

  contabilizacionForm: boolean = false;
  detallesForm: boolean = false;
  erogacionForm: boolean = false;

  dataContabilizacion: any;
  dataDetalles: any;
  dataErogacion: any;

  constructor() { }

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
    this.dataContabilizacion = data;
  }

  informacionDetallesForm(data: any) {
    this.dataDetalles = data;
  }
  informacionErogacionForm(data: any) {
    this.dataErogacion = data;
  }
}
