import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { OPCIONES_AREA_FUNCIONAL } from '../../../../../shared/interfaces/interfaces';
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

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<any>
  ) {
    this.opcionesAreaFuncional = OPCIONES_AREA_FUNCIONAL;
    this.tituloAccion = this.activatedRoute.snapshot.url[0].path;
  }

  ngOnInit() {
    this.crearFormulario();
    if (this.tituloAccion === 'editar') {
      this.subscription$ = this.store.select(getEspecificacionSeleccionada).subscribe((accion: any) => {
        if (accion && accion.fila)
          this.llenarDatosEditables(accion.fila);
      });
    }
  }

  ngOnDestroy() {
    if (this.subscription$ != null)
      this.subscription$.unsubscribe();
  }

  llenarDatosEditables(fila: { fecha: string; codigo: any; nombre: any; descripcion: any; estado: any; }) {
    // TODO
    const dateArray = fila.fecha.split('-');
    this.datosEspecificacion.setValue({
      areaFuncional: null,
      fecha: {
        year: parseInt(dateArray[2], 10),
        month: parseInt(dateArray[0], 10),
        day: parseInt(dateArray[1], 10)
      },
      codigoAbreviacion: fila.codigo,
      nombreEspecificacion: fila.nombre,
      descripcion: fila.descripcion,
      estado: fila.estado
    });
  }

  crearFormulario() {
    this.datosEspecificacion = this.fb.group({
      areaFuncional: ['', Validators.required],
      fecha: ['', Validators.required],
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
          this.router.navigate(['pages/avances/especificacionesavances/lista']);
        }
      }, () => { });
    else
      this.validarFormulario();
  }

}
