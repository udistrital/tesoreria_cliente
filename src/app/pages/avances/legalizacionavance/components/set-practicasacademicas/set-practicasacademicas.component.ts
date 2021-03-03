import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { LoadAccionTabla, LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { getAccionTabla, getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { cargarDatosAnexos, cargarDatosEstudiantes, cargarDatosPracticasAcademicas } from '../../actions/legalizacionavance.actions';
import { CONFIGURACION_ARCHIVOS, CONFIGURACION_TABLA_ESTUDIANTES } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-set-practicasacademicas',
  templateUrl: './set-practicasacademicas.component.html',
  styleUrls: ['./set-practicasacademicas.component.scss']
})
export class SetPracticasacademicasComponent implements OnInit, OnDestroy {
  @ViewChild('modalEliminar', { static: false }) modalEliminar: ElementRef;
  @ViewChild('modalRegistro', { static: false }) modalRegistro: ElementRef;
  datosPracticas: FormGroup;
  datosEstudiantesGroup: FormGroup;
  configAnexos: any;
  datosAnexos: any;
  configEstudiantes: any;
  datosEstudiantes: any;
  mostrarOcultarIcono: any;
  agregarEditarRegistro: string;
  subscriptionFila$: any;
  subscriptionAccion$: any;
  registroModal: any;
  subDatosPracticas$: any;


  crearFormularios() {
    this.datosPracticas = this.fb.group({
      fecha: ['', Validators.required],
      destinoPractica: ['', Validators.required],
      proyectoCurricular: ['', Validators.required],
      valorAvance: ['', Validators.required],
      valorReintegro: ['', Validators.required],
      cantidadAnexos: ['', [Validators.required, Validators.min(1)]],
      cantidadEstudiantes: ['', [Validators.required, Validators.min(1)]],
    });
    this.datosEstudiantesGroup = this.fb.group({
      codigo: ['', Validators.required],
      tipoId: [''],
      identificacion: [''],
      nombreEstudiante: [''],
      valorRecibido: ['', Validators.required],
      dias: ['', Validators.required],
    });
  }

  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private modalService: NgbModal) {
    this.configAnexos = CONFIGURACION_ARCHIVOS;
    this.datosAnexos = [];
    this.configEstudiantes = CONFIGURACION_TABLA_ESTUDIANTES;
    this.datosEstudiantes = [];
    this.crearFormularios();
  }

  ngOnInit() {
    // Crear un nuevo registro
    this.subscriptionAccion$ = this.store.select(getAccionTabla).subscribe((accion) => {
      if (accion && accion.accion && accion.accion.name === 'agregarEstudiante')
        this.abrirModalRegistro('Agregar');
    });

    // Acciones por registro en tablas: editar o borrar
    this.subscriptionFila$ = this.store.select(getFilaSeleccionada).subscribe((accion) => {
      if (accion && accion.accion) {
        switch (accion.accion.name) {
          case 'modificarEstudiante':
            this.abrirModalRegistro('Modificar', accion.fila);
            break;
          case 'borrarEstudiante':
            this.abrirModalEliminar(accion.fila);
            break;
          case 'borrarAnexo':
            this.datosAnexos.splice(this.datosAnexos.findIndex(
              (element: any) => element.file === accion.fila.file
            ), 1);
            this.datosPracticas.get('cantidadAnexos').setValue(this.datosAnexos.length);
            this.store.dispatch(cargarDatosAnexos({ datosAnexos: this.datosAnexos }));
            break;
        }
      }
    });

    // Suscripción para notificar de cambios en los datos de legalización
    this.subDatosPracticas$ = this.datosPracticas.valueChanges.subscribe(valor => {
      if (this.datosPracticas.valid)
        this.store.dispatch(cargarDatosPracticasAcademicas({ datosPracticas: valor }));
    });
  }

  ngOnDestroy() {
    this.subscriptionFila$.unsubscribe();
    this.subscriptionAccion$.unsubscribe();
    this.subDatosPracticas$.unsubscribe();
    this.store.dispatch(LoadFilaSeleccionada(null));
    this.store.dispatch(LoadAccionTabla(null));
  }

  validarFormulario() {
    if (this.datosPracticas.invalid) {
      return Object.values(this.datosPracticas.controls).forEach(control => {
        control.markAsDirty();
      });
    }
  }

  guardarModalForm() {
    if (this.datosEstudiantesGroup.invalid) {
      Object.values(this.datosEstudiantesGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    } else {
      this.registroModal.close();
    }
  }

  esInvalido(nombre: string) {
    const input = this.datosPracticas.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  esInvalidoModal(nombre: string) {
    const input = this.datosEstudiantesGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched);
    else
      return true;
  }

  abrirModalEliminar(fila: any) {
    this.modalService.open(this.modalEliminar).result.then((result) => {
      if (`${result}`) {
        const index = this.datosEstudiantes.findIndex(
          (element: any) => element.codigo === fila.codigo
            && element.identificacion === fila.identificacion
        );
        this.datosEstudiantes.splice(index, 1);
        this.datosPracticas.get('cantidadEstudiantes').setValue(this.datosEstudiantes.length);
        this.store.dispatch(cargarDatosEstudiantes({ datosEstudiantes: this.datosEstudiantes }));
      }
    }, () => { });
  }

  abrirModalRegistro(nombreAccion: string, fila = null) {
    this.agregarEditarRegistro = nombreAccion;
    // Coloca valores vacios o con los datos de la fila según sea el caso
    if (fila) {
      const filaC = Object.assign({}, fila);
      this.datosEstudiantesGroup.setValue(filaC);
    } else
      Object.values(this.datosEstudiantesGroup.controls).forEach(control => {
        control.setValue('');
        control.markAsUntouched();
      });
    // Apertura de modal
    this.registroModal = this.modalService.open(this.modalRegistro, { size: 'lg' });
    this.registroModal.result.then((result) => {
      if (`${result}`) {
        const filaC = Object.assign({}, this.datosEstudiantesGroup.value);
        if (fila)
          this.datosEstudiantes[fila.id - 1] = filaC;
        else
          this.datosEstudiantes.push(filaC);
        this.datosPracticas.get('cantidadEstudiantes').setValue(this.datosEstudiantes.length);
        this.store.dispatch(cargarDatosEstudiantes({ datosEstudiantes: this.datosEstudiantes }));
      }
    }, () => { });
  }

  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      this.datosAnexos.push({
        nombre: item.name,
        tamaño: (item.size / 1024).toFixed(2) + 'KB',
        file: item
      });
    }
    this.datosPracticas.get('cantidadAnexos').setValue(this.datosAnexos.length);
    this.store.dispatch(cargarDatosAnexos({ datosAnexos: this.datosAnexos }));
  }

  mostrarOcultarConsolidado(state: string) {
    if (state === 'false')
      this.mostrarOcultarIcono = 'fa-minus';
    else
      this.mostrarOcultarIcono = 'fa-plus';
  }

}
