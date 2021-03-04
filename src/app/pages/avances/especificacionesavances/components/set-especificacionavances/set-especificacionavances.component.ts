import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { actualizarEspecificacion, cargarEspecificaciones, crearEspecificacion, obtenerEspecificaciones } from '../../../../../shared/actions/avances.actions';
import { OPCIONES_AREA_FUNCIONAL } from '../../../../../shared/interfaces/interfaces';
import { seleccionarEspecificaciones } from '../../../../../shared/selectors/avances.selectors';
import { getEspecificacionSeleccionada } from '../../selectors/especificacionesavances.selectors';

@Component({
  selector: 'ngx-set-espeficicacionavances',
  templateUrl: './set-especificacionavances.component.html',
  styleUrls: ['./set-especificacionavances.component.scss']
})
export class SetEspecificacionavancesComponent implements OnInit, OnDestroy {
  @ViewChild('modalGuardar', { static: false }) modalGuardar: ElementRef;
  datosEspecificacion: FormGroup;
  opcionesAreaFuncional: Array<any>;
  tituloAccion: string;
  subscription$: any;
  id: any;
  fechaCreacion: string;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<any>
  ) {
    this.opcionesAreaFuncional = OPCIONES_AREA_FUNCIONAL;
    this.tituloAccion = this.activatedRoute.snapshot.url[0].path;
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id)
      this.store.dispatch(obtenerEspecificaciones({ id: this.id }));
  }

  ngOnInit() {
    this.crearFormulario();
    this.subscription$ = this.store.select(seleccionarEspecificaciones).subscribe((accion: any) => {
      if (accion && accion.especificaciones)
        if (accion.especificaciones.Id) {
          this.datosEspecificacion.setValue({
            codigoAbreviacion: accion.especificaciones.CodigoAbreviacion,
            nombreEspecificacion: accion.especificaciones.Nombre,
            descripcion: accion.especificaciones.Descripcion,
            estado: accion.especificaciones.Activo
          });
          this.fechaCreacion = accion.especificaciones.FechaCreacion;
        } else if (accion.especificaciones.idCreado || accion.especificaciones.idActualizado) {
          this.router.navigate(['pages/avances/especificacionesavances/lista']);
        }
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
    this.store.dispatch(cargarEspecificaciones(null));
  }

  crearFormulario() {
    this.datosEspecificacion = this.fb.group({
      codigoAbreviacion: ['', Validators.required],
      nombreEspecificacion: ['', Validators.required],
      descripcion: ['', Validators.required],
      estado: ['', Validators.required],
    });
  }

  esInvalido(nombre: string) {
    const input = this.datosEspecificacion.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  validarFormulario() {
    if (this.datosEspecificacion.invalid) {
      return Object.values(this.datosEspecificacion.controls).forEach(control => {
        control.markAsDirty();
      });
    }
  }

  guardar() {
    if (this.datosEspecificacion.valid)
      this.modalService.open(this.modalGuardar).result.then((result) => {
        if (`${result}`) {
          const especificacion = {
            'CodigoAbreviacion': this.datosEspecificacion.get('codigoAbreviacion').value,
            'Nombre': this.datosEspecificacion.get('nombreEspecificacion').value,
            'Descripcion': this.datosEspecificacion.get('descripcion').value,
            'Activo': String(this.datosEspecificacion.get('estado').value) === 'true'
          };
          if (this.fechaCreacion)
          especificacion['FechaCreacion'] = this.fechaCreacion.split(' ')[0];
          if (this.id)
            this.store.dispatch(actualizarEspecificacion({ id: this.id, element: especificacion }));
          else
            this.store.dispatch(crearEspecificacion({ element: especificacion }));
        }
      }, () => { });
    else
      this.validarFormulario();
  }

}
