import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CONFIGURACION_LEGALIZACION_DETALLE, DATOS_LEGALIZACION, CONFIGURACION_REINTEGRO_DETALLE, DATOS_REINTEGRO } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-show-detallereintegro',
  templateUrl: './show-detallereintegro.component.html',
  styleUrls: ['./show-detallereintegro.component.scss']
})
export class ShowDetallereintegroComponent implements OnInit {

  detalleReintegroGroup: FormGroup;

  configLegalizacion: any;
  datosLegalizacion: any;
  configReintegro: any;
  datosReintegro: any;
  // Icono en la Lista de documentos
  mostrarOcultar: string;
  mostrarOcultarIcono: string;

  constructor(private _formBuilder: FormBuilder) {
    this.configLegalizacion = CONFIGURACION_LEGALIZACION_DETALLE;
    this.datosLegalizacion = DATOS_LEGALIZACION;
    this.configReintegro = CONFIGURACION_REINTEGRO_DETALLE;
    this.datosReintegro = DATOS_REINTEGRO;
    // Icono en la Lista de documentos
    this.mostrarOcultar = 'Mostrar';
    this.mostrarOcultarIcono = 'fa-plus-square';

   }

  ngOnInit() {
    this.detalleReintegroGroup = this._formBuilder.group({
    });
  }

  // Configuracion de Icono en lista documentos
  mostrarOcultarTablas(state: string) {
    if (state === 'false') {
      this.mostrarOcultarIcono = 'fa-minus-square';
    } else {
      this.mostrarOcultarIcono = 'fa-plus-square';
    }
  }

}
