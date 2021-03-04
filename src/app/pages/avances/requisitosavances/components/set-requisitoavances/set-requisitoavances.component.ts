import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { actualizarRequisito, cargarRequisitos, crearRequisito, obtenerRequisitos } from '../../../../../shared/actions/avances.actions';
import { OPCIONES_AREA_FUNCIONAL } from '../../../../../shared/interfaces/interfaces';
import { seleccionarRequisitos } from '../../../../../shared/selectors/avances.selectors';

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
  id: string;
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
    this.store.dispatch(cargarRequisitos(null));
    if (this.id)
      this.store.dispatch(obtenerRequisitos({ id: this.id }));
  }

  ngOnInit() {
    this.crearFormulario();
    this.subscription$ = this.store.select(seleccionarRequisitos).subscribe((accion: any) => {
      if (accion && accion.requisitos)
        if (accion.requisitos.Id) {
          this.datosRequisito.setValue({
            codigoAbreviacion: accion.requisitos.CodigoAbreviacion,
            nombreRequisito: accion.requisitos.Nombre,
            descripcion: accion.requisitos.Descripcion,
            estado: accion.requisitos.Activo
          });
          this.fechaCreacion = accion.requisitos.FechaCreacion;
        } else if (accion.requisitos.idCreado || accion.requisitos.idActualizado) {
          this.router.navigate(['pages/avances/requisitosavances/lista']);
        }
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
    this.store.dispatch(cargarRequisitos(null));
  }

  crearFormulario() {
    this.datosRequisito = this.fb.group({
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
          const requisito = {
            'CodigoAbreviacion': this.datosRequisito.get('codigoAbreviacion').value,
            'Nombre': this.datosRequisito.get('nombreRequisito').value,
            'Descripcion': this.datosRequisito.get('descripcion').value,
            'Activo': String(this.datosRequisito.get('estado').value) === 'true'
          };
          if (this.fechaCreacion)
            requisito['FechaCreacion'] = this.fechaCreacion.split(' ')[0];
          if (this.id)
            this.store.dispatch(actualizarRequisito({ id: this.id, element: requisito }));
          else
            this.store.dispatch(crearRequisito({ element: requisito }));
        }
      }, () => { });
    else
      this.validarFormulario();
  }

}
