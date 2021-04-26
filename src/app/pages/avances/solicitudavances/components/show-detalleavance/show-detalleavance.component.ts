import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { cargarSolicitudesAvance, crearSolicitudAvance } from '../../actions/solicitudavances.actions';
import { seleccionarDescripcionSolicitud, seleccionarInfoFuncionario, seleccionarSolicitudesAvance, seleccionarTiposAvances } from '../../selectors/solicitudavances.selectors';

@Component({
  selector: 'ngx-show-detalleavance',
  templateUrl: './show-detalleavance.component.html',
  styleUrls: ['./show-detalleavance.component.scss']
})
export class ShowDetalleavanceComponent implements OnInit, OnDestroy {

  // Fin formulario
  detalleAvanceGroup: FormGroup;
  // Icono en la Lista de documentos
  mostrarOcultar: string;
  mostrarOcultarIcono: string;
  // Configuracion de la tabla
  configRequisitos: any;
  configEspecificacion: any;
  // Tabla en detalleavance
  configDetalle: any;
  datosDetalle: any;
  subInfoFuncionario$: any;
  infoFuncionario: any;
  subDescripcionSol$: any;
  subTiposAvances$: any;
  descripcionSolicitud: any;
  tiposAvances: any;
  subGuardar$: any;

  constructor(private _formBuilder: FormBuilder,
    private store: Store<any>,
    private router: Router) {
    // Icono en la Lista de documentos
    this.mostrarOcultar = 'Mostrar';
    this.mostrarOcultarIcono = 'fa-plus-square';
  }

  ngOnInit() {
    this.detalleAvanceGroup = this._formBuilder.group({
    });
    // Información de funcionario
    this.subInfoFuncionario$ = this.store.select(seleccionarInfoFuncionario).subscribe((accion) => {
      if (accion && accion.infoFuncionario) this.infoFuncionario = accion.infoFuncionario;
    });
    // Detalle de la solicitud
    this.subDescripcionSol$ = this.store.select(seleccionarDescripcionSolicitud).subscribe((accion) => {
      if (accion && accion.descripcionSolicitud) this.descripcionSolicitud = accion.descripcionSolicitud;
    });
    // Tipos de avance
    this.subTiposAvances$ = this.store.select(seleccionarTiposAvances).subscribe((accion) => {
      if (accion && accion.tiposAvances && accion.tiposAvances !== undefined) {
        this.tiposAvances = [];
        accion.tiposAvances.forEach((element: any) => {
          const tipo = Object.assign({}, element);
          tipo.requisitos = element.requisitos;
          tipo.especificaciones = element.especificaciones;
          tipo.configespecificaciones = Object.assign({}, tipo.configespecificaciones);
          tipo.configrequisitos = Object.assign({}, tipo.configrequisitos);
          tipo.configespecificaciones.rowActions = null;
          tipo.configespecificaciones.tableActions = null;
          tipo.configrequisitos.rowActions = null;
          tipo.configrequisitos.tableActions = null;
          this.tiposAvances.push(tipo);
        });
      }
    });
    // Guardado
    // Detalle de la solicitud
    this.subGuardar$ = this.store.select(seleccionarSolicitudesAvance).subscribe((accion) => {
      if (accion && accion.solicitudesAvance && accion.solicitudesAvance.creado)
        this.router.navigateByUrl('pages/avances/solicitudavances/lista');
    });
  }

  ngOnDestroy() {
    this.subInfoFuncionario$.unsubscribe();
    this.subDescripcionSol$.unsubscribe();
    this.subTiposAvances$.unsubscribe();
    this.subGuardar$.unsubscribe();
    this.store.dispatch(cargarSolicitudesAvance(null));
  }

  // Configuracion de Icono en lista documentos
  mostrarOcultarTiposAvances(state: string, index: number) {
    if (state === 'false') {
      this.tiposAvances[index].mostrarOcultarIcono = 'fa-minus-square';
    } else {
      this.tiposAvances[index].mostrarOcultarIcono = 'fa-plus-square';
    }
  }

  get totalAvance() {
    return this.tiposAvances.reduce((a: any, b) => a + b.especificaciones.reduce((c: any, d: { valor: number; }) => c + d.valor, 0), 0);
  }

  guardar() {
    const elemento = {
      EstadoTipoSolicitud: { Id: 21 },
      FechaRadicacion: new Date().toISOString().split('T')[0],
      SolicitudFinalizada: false,
      VigenciaId: Number(this.infoFuncionario.vigencia._id),
      AreaFuncionalId: this.infoFuncionario.areaFuncional.Id,
      CargoOrdenadorGastoId: this.descripcionSolicitud.ordenadorGasto.Id,
      Objetivo: this.descripcionSolicitud.objetivo,
      Justificacion: this.descripcionSolicitud.justificacion,
      DependenciaId: this.descripcionSolicitud.dependencia.Id,
      FacultadId: this.descripcionSolicitud.facultad.Id,
      ProyectoCurricularId: this.descripcionSolicitud.proyecto.Id,
      ConvenioId: 4,
      ProyectoInvId: 5,
      TerceroId: this.infoFuncionario.tercero.Id,
      FechaEvento: this.descripcionSolicitud.fecha,
      Activo: true
    };
    this.store.dispatch(crearSolicitudAvance({ element: elemento }));
  }

}
