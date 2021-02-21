import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DATOS_REQUISITOSTIPO,
  CONFIGURACION_REQUISITOSTIPO,
  DATOS_ESPECIFICACIONTIPO,
  CONFIGURACION_ESPECIFICACIONTIPO,
  DATOS_ESPECIFICACIONDETALLE,
  CONFIGURACION_ESPECIFICACIONDETALLE } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-show-detalleavance',
  templateUrl: './show-detalleavance.component.html',
  styleUrls: ['./show-detalleavance.component.scss']
})
export class ShowDetalleavanceComponent implements OnInit {

  // Fin formulario
  detalleAvanceGroup: FormGroup;
  // Icono en la Lista de documentos
  mostrarOcultar: string;
  mostrarOcultarIcono: string;
  // Configuracion de la tabla
  configRequisitos: any;
  datosRequisitos: any;
  configEspecificacion: any;
  datosEspecificacion: any;
  // Tabla en detalleavance
  configDetalle: any;
  datosDetalle: any;

  constructor(private _formBuilder: FormBuilder) {

    // Datos y configuracion de Tabla
    this.datosRequisitos = DATOS_REQUISITOSTIPO;
    this.configRequisitos = CONFIGURACION_REQUISITOSTIPO;
    this.datosEspecificacion = DATOS_ESPECIFICACIONTIPO;
    this.configEspecificacion = CONFIGURACION_ESPECIFICACIONTIPO;
    this.datosDetalle = DATOS_ESPECIFICACIONDETALLE;
    this.configDetalle = CONFIGURACION_ESPECIFICACIONDETALLE;

    // Icono en la Lista de documentos
    this.mostrarOcultar = 'Mostrar';
    this.mostrarOcultarIcono = 'fa-plus-square';
  }

  ngOnInit() {
    this.detalleAvanceGroup = this._formBuilder.group({
    });
  }

  // Configuracion de Icono en lista documentos
  mostrarOcultarTiposAvances(state: string) {
    if (state === 'false') {
      this.mostrarOcultarIcono = 'fa-minus-square';
    } else {
      this.mostrarOcultarIcono = 'fa-plus-square';
    }
  }

}
