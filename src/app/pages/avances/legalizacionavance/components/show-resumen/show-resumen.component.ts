import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  CONFIGURACION_ARCHIVOS,
  CONFIGURACION_RETENCIONES,
  CONFIGURACION_TABLA_ESTUDIANTES,
  CONFIGURACION_TABLA_LEGALIZACION
} from '../../interfaces/interfaces';
import {
  seleccionarDatosAnexos,
  seleccionarDatosEstudiantes,
  seleccionarDatosLegalizacion,
  seleccionarDatosResponsable,
  seleccionarDatosRetenciones,
  seleccionarPracticasAcademicas,
  seleccionarRegistrosLegalizacion
} from '../../selectors/legalizacionavance.selectors';

@Component({
  selector: 'ngx-show-resumen',
  templateUrl: './show-resumen.component.html',
  styleUrls: ['./show-resumen.component.scss']
})
export class ShowResumenComponent implements OnInit, OnDestroy {
  // Suscripciones
  susDatosResponsable$: any;
  susDatosLegalizacion$: any;
  susRegistrosLegalizacion$: any;
  susDatosRetenciones$: any;
  susDatosPracticasAcademicas$: any;
  susDatosEstudiantes$: any;
  susDatosAnexos$: any;
  // Datos
  datosResponsable: any;
  datosLegalizacion: any;
  datosPracticasAcademicas: any;
  // Tablas
  configRegistrosLegalizacion: any;
  datosRegistrosLegalizacion: any;
  configRetenciones: any;
  datosRetenciones: any;
  configAnexos: any;
  datosAnexos: any;
  configEstudiantes: any;
  datosEstudiantes: any;
  // Iconos
  mostrarOcultarIconoLegalizacion: string;
  mostrarOcultarIconoRetenciones: string;

  constructor(private store: Store<any>) {
    this.configRegistrosLegalizacion = Object.assign({}, CONFIGURACION_TABLA_LEGALIZACION);
    delete this.configRegistrosLegalizacion.rowActions;
    delete this.configRegistrosLegalizacion.tableActions;
    this.configRetenciones = Object.assign({}, CONFIGURACION_RETENCIONES);
    this.configEstudiantes = Object.assign({}, CONFIGURACION_TABLA_ESTUDIANTES);
    delete this.configEstudiantes.rowActions;
    delete this.configEstudiantes.tableActions;
    this.configAnexos = Object.assign({}, CONFIGURACION_ARCHIVOS);
    delete this.configAnexos.rowActions;
    this.mostrarOcultarIconoLegalizacion = 'fa-plus';
    this.mostrarOcultarIconoRetenciones = 'fa-plus';
    this.datosRegistrosLegalizacion = [];
    this.datosRetenciones = [];
    this.datosAnexos = [];
    this.datosEstudiantes = [];
  }

  ngOnInit() {
    this.susDatosResponsable$ = this.store.select(seleccionarDatosResponsable).subscribe((valor) => {
      if (valor && valor.datosResponsable) { this.datosResponsable = valor.datosResponsable; }
    });
    this.susDatosLegalizacion$ = this.store.select(seleccionarDatosLegalizacion).subscribe((valor) => {
      if (valor && valor.datosLegalizacion) { this.datosLegalizacion = valor.datosLegalizacion; }
    });
    this.susRegistrosLegalizacion$ = this.store.select(seleccionarRegistrosLegalizacion).subscribe((valor) => {
      if (valor && valor.registrosLegalizacion) { this.datosRegistrosLegalizacion = valor.registrosLegalizacion; }
    });
    this.susDatosRetenciones$ = this.store.select(seleccionarDatosRetenciones).subscribe((valor) => {
      if (valor && valor.datosRetenciones) { this.datosRetenciones = valor.datosRetenciones; }
    });
    this.susDatosPracticasAcademicas$ = this.store.select(seleccionarPracticasAcademicas).subscribe((valor) => {
      if (valor && valor.datosPracticasAcademicas) { this.datosPracticasAcademicas = valor.datosPracticasAcademicas; }
    });
    this.susDatosEstudiantes$ = this.store.select(seleccionarDatosEstudiantes).subscribe((valor) => {
      if (valor && valor.datosEstudiantes) { this.datosEstudiantes = valor.datosEstudiantes; }
    });
    this.susDatosAnexos$ = this.store.select(seleccionarDatosAnexos).subscribe((valor) => {
      if (valor && valor.datosAnexos) { this.datosAnexos = valor.datosAnexos; }
    });
  }

  ngOnDestroy() {
    this.susDatosResponsable$.unsubscribe();
    this.susDatosLegalizacion$.unsubscribe();
    this.susRegistrosLegalizacion$.unsubscribe();
    this.susDatosRetenciones$.unsubscribe();
    this.susDatosPracticasAcademicas$.unsubscribe();
    this.susDatosEstudiantes$.unsubscribe();
    this.susDatosAnexos$.unsubscribe();
  }

  mostrarOcultarRegistrosLegalizacion(state: string) {
    if (state === 'false')
      this.mostrarOcultarIconoLegalizacion = 'fa-minus';
    else
      this.mostrarOcultarIconoLegalizacion = 'fa-plus';
  }

  mostrarOcultarConsolidado(state: string) {
    if (state === 'false')
      this.mostrarOcultarIconoRetenciones = 'fa-minus';
    else
      this.mostrarOcultarIconoRetenciones = 'fa-plus';
  }

}
