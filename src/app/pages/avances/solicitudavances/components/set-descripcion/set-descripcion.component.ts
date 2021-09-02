import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { obtenerDependencias, obtenerFacultadesProyectos, obtenerOrdenadores } from '../../../../../shared/actions/shared.actions';
import { seleccionarDependencias, seleccionarFacultadesProyectos, seleccionarOrdenadores } from '../../../../../shared/selectors/shared.selectors';
import { cargarDescripcionSolicitud } from '../../actions/solicitudavances.actions';

@Component({
  selector: 'ngx-set-descripcion',
  templateUrl: './set-descripcion.component.html',
  styleUrls: ['./set-descripcion.component.scss']
})
export class SetDescripcionComponent implements OnInit, OnDestroy {
  descripcionGroup: FormGroup;
  ordenadores: any;
  subOrdenadores$: any;
  subDependencias$: any;
  dependencias: any;
  facultades: any;
  proyectosCurriculares: any;
  subFacultades$: any;
  subProyectos$: any;
  subDescripcionSol$: any;

  constructor(private fb: FormBuilder, private store: Store<any>) {
    // Datos del back
    this.ordenadores = [];
    this.dependencias = [];
    this.facultades = [];
    this.proyectosCurriculares = [];
    this.store.dispatch(obtenerOrdenadores({}));
    this.store.dispatch(obtenerDependencias({}));
    this.store.dispatch(obtenerFacultadesProyectos({}));
  }

  ngOnInit() {
    this.createForm();
    // Ordenadores del gasto
    this.subOrdenadores$ = this.store.select(seleccionarOrdenadores).subscribe((action) => {
      if (action && action.Ordenadores) this.ordenadores = action.Ordenadores;
    });
    // Dependencias
    this.subDependencias$ = this.store.select(seleccionarDependencias).subscribe((action) => {
      if (action && action.Dependencias && action.Dependencias[0]) this.dependencias = action.Dependencias;
    });
    // Facultades
    this.subFacultades$ = this.store.select(seleccionarFacultadesProyectos).subscribe((action) => {
      if (action && action.FacultadesProyectos && action.FacultadesProyectos[0]) this.facultades = action.FacultadesProyectos;
    });
    // Proyectos
    this.subProyectos$ = this.descripcionGroup.get('facultad').valueChanges.subscribe((facultad) => {
      if (facultad) this.proyectosCurriculares = facultad.Opciones;
    });
    // Cambios generales
    this.subDescripcionSol$ = this.descripcionGroup.valueChanges.subscribe((value) => {
      this.store.dispatch(cargarDescripcionSolicitud({ descripcionSolicitud: value }));
    });
  }

  ngOnDestroy() {
    this.subOrdenadores$.unsubscribe();
    this.subDependencias$.unsubscribe();
    this.subFacultades$.unsubscribe();
    this.subProyectos$.unsubscribe();
    this.subDescripcionSol$.unsubscribe();
  }

  // Validacion del Formulario
  get ordenadorInvalid() {
    return this.descripcionGroup.get('ordenadorGasto').invalid && this.descripcionGroup.get('ordenadorGasto').touched;
  }
  get objetivoInvalid() {
    return this.descripcionGroup.get('objetivo').invalid && this.descripcionGroup.get('objetivo').touched;
  }
  get fechaInvalid() {
    return this.descripcionGroup.get('fecha').invalid && this.descripcionGroup.get('fecha').touched;
  }
  get dependenciaInvalid() {
    return this.descripcionGroup.get('dependencia').invalid && this.descripcionGroup.get('dependencia').touched;
  }
  get justificacionInvalid() {
    return this.descripcionGroup.get('justificacion').invalid && this.descripcionGroup.get('justificacion').touched;
  }
  get facultadInvalid() {
    return this.descripcionGroup.get('facultad').invalid && this.descripcionGroup.get('facultad').touched;
  }
  get proyectoInvalid() {
    return this.descripcionGroup.get('proyecto').invalid && this.descripcionGroup.get('proyecto').touched;
  }
  get codConvenioInvalid() {
    return this.descripcionGroup.get('codConvenio').invalid && this.descripcionGroup.get('codConvenio').touched;
  }
  get codInvestigacionInvalid() {
    return this.descripcionGroup.get('codInvestigacion').invalid && this.descripcionGroup.get('codInvestigacion').touched;
  }

  createForm() {
    this.descripcionGroup = this.fb.group({
      ordenadorGasto: ['', Validators.required],
      objetivo: ['', Validators.required],
      dependencia: ['', Validators.required],
      justificacion: ['', Validators.required],
      facultad: ['', Validators.required],
      proyecto: ['', Validators.required],
      codConvenio: ['', Validators.required],
      codInvestigacion: ['', Validators.required],
    });
  }

  saveForm() {
    if (this.descripcionGroup.invalid) {
      return Object.values(this.descripcionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
