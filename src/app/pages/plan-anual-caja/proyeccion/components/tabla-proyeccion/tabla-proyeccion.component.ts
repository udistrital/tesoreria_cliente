import { Component, OnInit } from '@angular/core';
import { CONFIGURACION_TABLA_PROYECCION, DATOS_TABLA_PROYECCION } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-tabla-proyeccion',
  templateUrl: './tabla-proyeccion.component.html',
  styleUrls: ['./tabla-proyeccion.component.scss']
})
export class TablaProyeccionComponent implements OnInit {
  configuracion: any;
  datos: any;

  constructor() {
    this.configuracion = CONFIGURACION_TABLA_PROYECCION;
    this.datos = (DATOS_TABLA_PROYECCION as any[]).map((element: any) => {
      return {
        ...element,
        CodigoFuentes: element.Fuentes.map((x: any) => {
          return x.Codigo;
        }),
        NombreFuentes: element.Fuentes.map((x: any) => {
          return x.Nombre;
        }),
      };
    });

  }

  ngOnInit() {
  }

}
