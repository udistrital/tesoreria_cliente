import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DATOS_ANEXOS, DATOS_RECIBOS, CONFIGURACION_DETALLEANEXOS, CONFIGURACION_DETALLERECIBOS } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-show-detallesolicitud',
  templateUrl: './show-detallesolicitud.component.html',
  styleUrls: ['./show-detallesolicitud.component.scss']
})
export class ShowDetallesolicitudComponent implements OnInit {

  detalleSolicitudGroup: FormGroup;

  // Configuracion de la tabla
  configDetalleAnexos: any;
  datosAnexos: any;
  configDetalleRecibos: any;
  datosRecibos: any;

  // Icono en la Lista de documentos
  mostrarOcultar: string;
  mostrarOcultarIcono: string;


  constructor(private fb: FormBuilder) {

    // Datos y configuracion de Tabla
    this.datosAnexos = DATOS_ANEXOS;
    this.configDetalleAnexos = CONFIGURACION_DETALLEANEXOS;
    this.configDetalleRecibos = CONFIGURACION_DETALLERECIBOS;
    this.datosRecibos = DATOS_RECIBOS;
    // Icono en la Lista de documentos
    this.mostrarOcultar = 'Mostrar';
    this.mostrarOcultarIcono = 'fa-plus-square';
  }

  ngOnInit() {
    this.detalleSolicitudGroup = this.fb.group({
    });
  }

    // Configuracion de Icono en lista documentos
    mostrarOcultarDocs(state: string) {
      if (state === 'false') {
        this.mostrarOcultarIcono = 'fa-minus-square';
      } else {
        this.mostrarOcultarIcono = 'fa-plus-square';
      }
    }

}
