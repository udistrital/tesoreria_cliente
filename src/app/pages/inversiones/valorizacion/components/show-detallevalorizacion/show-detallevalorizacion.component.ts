import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CONFIGURACION_DETALLE, DATOS_CONTABILIZACION } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-show-detallevalorizacion',
  templateUrl: './show-detallevalorizacion.component.html',
  styleUrls: ['./show-detallevalorizacion.component.scss']
})
export class ShowDetallevalorizacionComponent implements OnInit {

  detalleValorizacionGroup: FormGroup;

  configContabilizacion: any;
  datosContabilizacion: any;

  // Icono en la Lista de documentos
  mostrarOcultar: string;
  mostrarOcultarIcono: string;

  constructor(private _formBuilder: FormBuilder) {
    this.configContabilizacion = CONFIGURACION_DETALLE;
    this.datosContabilizacion = DATOS_CONTABILIZACION;

    // Icono en la Lista de cuentas
    this.mostrarOcultar = 'Mostrar';
    this.mostrarOcultarIcono = 'fa-plus-square';

    }

  ngOnInit() {
    this.detalleValorizacionGroup = this._formBuilder.group({
    });
  }

  // Configuracion de Icono en lista cuentas
  mostrarOcultarTablas(state: string) {
    if (state === 'false') {
      this.mostrarOcultarIcono = 'fa-minus-square';
    } else {
      this.mostrarOcultarIcono = 'fa-plus-square';
    }
  }

}
