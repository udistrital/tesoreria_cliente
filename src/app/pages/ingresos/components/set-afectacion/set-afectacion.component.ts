import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import Swal from 'sweetalert2';
import { SharedService } from '../../../../shared/services/shared.service';
import { CONF_RUBROS } from '../../interfaces/interfaces';
import { getTipoIngreso } from '../../selectors/ingresos.selectors';

@Component({
  selector: 'ngx-set-afectacion',
  templateUrl: './set-afectacion.component.html',
  styleUrls: ['./set-afectacion.component.scss'],
})
export class SetAfectacionComponent implements OnInit {
  @Output() validarRubros: EventEmitter<any>;
  @Output() informacionRubros: EventEmitter<any>;

  configuration: any;
  datos: any;
  rubrosForm: FormGroup;
  mensaje: boolean = false;

  numerosRubros: any = [
    '2.1.02.05.01.1.1.1.2.2.1',
    '2.1.02.05.01.1.1.1.2.2.2',
    '2.1.02.05.01.1.1.1.2.2.3',
    '2.1.02.05.01.1.1.1.2.2.4',
  ];

  tipoIngreso: any;
  subscriptionTipoIngreso$: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private store: Store<any>,
    private sharedService: SharedService
  ) {
    this.datos = [];
    this.rubrosForm = this.formBuilder.group({
      numeroRubro: ['', Validators.required],
    });
    this.configuration = CONF_RUBROS;
    this.validarRubros = new EventEmitter();
    this.informacionRubros = new EventEmitter();
  }

  ngOnInit() {
    this.subscriptionTipoIngreso$ = this.store
      .select(getTipoIngreso)
      .subscribe((data) => {
        if (this.sharedService.IfStore(data)) {
          this.tipoIngreso = data.tipo;
        }
      });
  }

  agregar() {
    if (this.rubrosForm.valid) {
      this.mensaje = false;
      this.datos.push({
        numeroRubro: this.rubrosForm.value.numeroRubro,
        nombreRubro: 'Programas de pregrado',
        valor: 345482934,
      });
      this.validarRubros.emit(true);
    } else {
      this.mensaje = true;
    }
  }

  aprobar() {
    if (this.datos.length === 0) {
      Swal.fire({
        type: 'error',
        title: '¡Error!',
        text: 'Debe modificar al menos un rubro',
        confirmButtonText: 'Aceptar',
      });
    } else {
      this.informacionRubros.emit(this.datos);
    }
  }

  guardar() {
    if (this.rubrosForm.valid) {
      Swal.fire({
        type: 'success',
        title: '¡Guardado!',
        html: 'Se ha creado el ingreso con consecutivo 1',
        confirmButtonText: 'Aceptar',
      });
      this.route.navigate([`pages/ingresos/lista/${this.tipoIngreso}`]);
      this.mensaje = false;
    } else {
      this.validarFormulario();
      this.mensaje = true;
    }
  }

  validarFormulario() {
    if (this.rubrosForm.invalid) {
      return Object.values(this.rubrosForm.controls).forEach((control) => {
        control.markAsDirty();
      });
    }
  }

  totalAportes() {
    return 345482934;
  }
}
