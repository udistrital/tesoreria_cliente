import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { TranslateFormItemsService } from '../../../../shared/helpers/translate-form-items.service';
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
    private sharedService: SharedService,
    private translate: TranslateService,
    private translateHelper: TranslateFormItemsService
  ) {
    this.datos = [];
    this.rubrosForm = this.formBuilder.group({
      numeroRubro: ['', Validators.required],
    });
    this.validarRubros = new EventEmitter();
    this.informacionRubros = new EventEmitter();
  }

  ngOnInit() {
    this.translateTableConfiguracion();
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
        type: this.translate.instant('AVISOS.error'),
        title: this.translate.instant('AVISOS.error_titulo'),
        text: this.translate.instant('RUBRO.modificar_rubro'),
        confirmButtonText: this.translate.instant('AVISOS.boton_confirmacion'),
      });
    } else {
      this.informacionRubros.emit(this.datos);
    }
  }

  guardar() {
    if (this.rubrosForm.valid) {
      Swal.fire({
        type: this.translate.instant('AVISOS.exitoso'),
        title: this.translate.instant('AVISOS.guardado_titulo'),
        html: this.translate.instant('INGRESOS.ingreso_guardado', {
          CONSECUTIVO: 1,
        }),
        confirmButtonText: this.translate.instant('AVISOS.boton_confirmacion'),
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

  private translateTableConfiguracion(): void {
    this.configuration = this.translateHelper.translateItemTableConfiguration(CONF_RUBROS);
  }
}
