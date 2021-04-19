import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CONFIGURACION_DETALLE, DATOS_CONTABILIZACION } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-show-detalleadquisicion',
  templateUrl: './show-detalleadquisicion.component.html',
  styleUrls: ['./show-detalleadquisicion.component.scss']
})
export class ShowDetalleadquisicionComponent implements OnInit {

  detalleAdquisicionGroup: FormGroup;

  configContabilizacion: any;
  datosContabilizacion: any;

  // Icono en la Lista de documentos
  mostrarOcultar: string;
  mostrarOcultarIcono: string;

  constructor(private _formBuilder: FormBuilder) {
    this.configContabilizacion = CONFIGURACION_DETALLE;
    this.datosContabilizacion = DATOS_CONTABILIZACION;

    // Icono en la Lista de documentos
    this.mostrarOcultar = 'Mostrar';
    this.mostrarOcultarIcono = 'fa-plus-square';

   }

  ngOnInit() {
    this.detalleAdquisicionGroup = this._formBuilder.group({
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
