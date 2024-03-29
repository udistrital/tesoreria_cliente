import { Component, OnInit } from '@angular/core';
import { CONFIGURACION_TABLA_REPORTE, DATOS_TABLA_REPORTE, DATOS_TOTALES_TABLA_REPORTE } from '../../../reporte/interfaces/interfaces';

@Component({
  selector: 'ngx-tabla-cierre-pac',
  templateUrl: './tabla-cierre-pac.component.html',
  styleUrls: ['./tabla-cierre-pac.component.scss']
})
export class TablaCierrePacComponent implements OnInit {

  datos: any;
  configuracion: any;
  title: string;
  totales: any;

  constructor() {
    this.title = 'CIERRE PLAN MENSUALIZADO DE CAJA';
    this.totales = DATOS_TOTALES_TABLA_REPORTE;
    this.configuracion = CONFIGURACION_TABLA_REPORTE;
    this.datos = (DATOS_TABLA_REPORTE as any[]).map((element: any) => {
      return {
        Rubros : element.Rubros.map((element2: any) => {
          return {
            ...element2,
            CodigoFuentes: element2.Fuentes.map((x: any) => {
              return x.Codigo;
            }),
            NombreFuentes: element2.Fuentes.map((x: any) => {
              return x.Nombre;
            }),
          };
        }),
        Totales: element.Totales ? element.Totales : undefined
      };
    });
  }

  ngOnInit() {
  }

}
