import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CONFIGURACION_TABLA_CONTABILIZACION } from '../../../../acreedores/anulacion-cheque/interfaces/interfaces';
import { DATOS_CONTABILIZACION } from '../../../../inversiones/adquisicion/interfaces/interfaces';

@Component({
  selector: 'ngx-contabilizacion',
  templateUrl: './contabilizacion.component.html',
  styleUrls: ['./contabilizacion.component.scss']
})
export class ContabilizacionComponent implements OnInit {

  datos: any[];
  configuracion: any;
  debito: any;
  credito: any;

  constructor() {
    this.datos = DATOS_CONTABILIZACION;
    this.configuracion = CONFIGURACION_TABLA_CONTABILIZACION;
    this.debito = this.datos.map((element: any) => {
      if (element.Debito) {
        return element.Debito;
      } else {
        return 0;
      }
    }).reduce((a: any, c: any) => a + c);

    this.credito = this.datos.map((element: any) => {
      if (element.Credito) {
        return element.Credito;
      } else {
        return 0;
      }
    }).reduce((a: any, c: any) => a + c);

  }

  ngOnInit() {
  }

  Guardar() {
    Swal.fire({
      type: 'success',
      title: 'Contabilizacion Aprobada',
      text: 'Consecutivo 12345',
      confirmButtonText: 'Aceptar',
    });
  }

  Descargar() {

  }

}
