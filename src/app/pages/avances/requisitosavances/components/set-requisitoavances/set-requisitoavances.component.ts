import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { OPCIONES_AREA_FUNCIONAL } from '../../../../../shared/interfaces/interfaces';
import { getRequisitoSeleccionado } from '../../selectors/requisitosavances.selectors';

@Component({
  selector: 'ngx-set-requisitoavances',
  templateUrl: './set-requisitoavances.component.html',
  styleUrls: ['./set-requisitoavances.component.scss']
})
export class SetRequisitoavancesComponent implements OnInit, OnDestroy {
  @ViewChild('modalGuardar', { static: false }) modalGuardar: ElementRef;
  datosRequisito: FormGroup;
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
      this.subscription$ = this.store.select(getRequisitoSeleccionado).subscribe((accion: any) => {
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
    this.datosRequisito.setValue({
      areaFuncional: null,
      fecha: {
        year: parseInt(dateArray[2], 10),
        month: parseInt(dateArray[0], 10),
        day: parseInt(dateArray[1], 10)
      },
      codigoAbreviacion: fila.codigo,
      nombreRequisito: fila.nombre,
      descripcion: fila.descripcion,
      estado: fila.estado
    });
  }

  crearFormulario() {
    this.datosRequisito = this.fb.group({
      areaFuncional: ['', Validators.required],
      fecha: ['', Validators.required],
      codigoAbreviacion: ['', Validators.required],
      nombreRequisito: ['', Validators.required],
      descripcion: ['', Validators.required],
      estado: ['', Validators.required],
    });
  }

  esInvalido(nombre: string) {
    const input = this.datosRequisito.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  validarFormulario() {
    if (this.datosRequisito.invalid) {
      return Object.values(this.datosRequisito.controls).forEach(control => {
        control.markAsDirty();
      });
    }
  }

  guardar() {
    if (this.datosRequisito.valid)
      this.modalService.open(this.modalGuardar).result.then((result) => {
        if (`${result}`) {
          this.router.navigate(['pages/avances/requisitosavances/lista']);
        }
      }, () => { });
    else
      this.validarFormulario();
  }

}
