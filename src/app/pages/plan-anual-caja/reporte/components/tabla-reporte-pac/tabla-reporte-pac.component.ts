import { Component, OnInit } from '@angular/core';
import { CONFIGURACION_TABLA_REPORTE, DATOS_TABLA_REPORTE } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-tabla-reporte-pac',
  templateUrl: './tabla-reporte-pac.component.html',
  styleUrls: ['./tabla-reporte-pac.component.scss']
})
export class TablaReportePacComponent implements OnInit {

  datos: any;
  configuracion: any;

  constructor() {
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
        })
      };
    });
  }

  ngOnInit() {
  }

}
