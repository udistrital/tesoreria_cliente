import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { getTipoIngreso } from '../../selectors/ingresos.selectors';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'ngx-set-inicio',
  templateUrl: './set-inicio.component.html',
  styleUrls: ['./set-inicio.component.scss']
})
export class SetInicioComponent implements OnInit {

  @Output () validarForm: EventEmitter <any>;
  @Output () informacionForm: EventEmitter <any>;

  tipoIngreso: any;
  ingresoTipo: any;
  mensaje: boolean = false;
  datosConsultaForm: FormGroup;
  subscriptionTipoIngreso$: any;

  areaFuncional: String[] = [
    'Servicios',
    'Pagos',
    'Formatos'
  ];

  numeroCuenta: any;

  cuentas: String[] = [
    'Proveedores',
    'Ahorros',
    'General'
  ];

  bancos: String[] = [
    'Banco de Occidente',
    'Banco de Bogotá',
    'BBVA'
  ];

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
    private sharedService: SharedService,
    private route: Router,
  ) {
    this.datosConsultaForm = this.formBuilder.group({
      banco: ['', Validators.required],
      areaFuncional: ['', Validators.required],
      nombreCuenta: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      codigoRecaudo: ['', Validators.required]
    });
    this.numeroCuenta = '230-14-61';
    this.validarForm = new EventEmitter;
    this.informacionForm = new EventEmitter;
  }

  ngOnInit() {
    this.store.select(getTipoIngreso).subscribe(
      data => {
        if (this.sharedService.IfStore(data)) {
          switch (data.tipo) {
            case 'icetex':
              this.ingresoTipo = 'ICETEX';
              break;
            case 'barras':
              this.ingresoTipo = 'Código de barras';
              break;
            case 'pse':
              this.ingresoTipo = 'PSE';
              break;
            case 'ach':
              this.ingresoTipo = 'ACH';
              break;
            case 'recaudoLinea':
              this.ingresoTipo = 'Recaudo en línea';
              break;
            case 'aportesNacion':
              this.ingresoTipo = 'Aportes de la nación';
              break;
            case 'aportesDistrito':
              this.ingresoTipo = 'Aportes del distrito';
              break;
            case 'otrasEntidades':
              this.ingresoTipo = 'Otras entidades';
              break;
            default:
              this.regresar();
              break;
          }
          this.tipoIngreso = data.tipo;
        }
      }
    );
    this.handleChanges();
  }

  onSubmit(data: any) {
    if (this.datosConsultaForm.valid) {
      this.mensaje = false;
      this.informacionForm.emit(data);
    } else {
      this.mensaje = true;
      this.validarFormulario();
    }
  }

  handleChanges() {
    this.datosConsultaForm.statusChanges.subscribe(
      result => {
        if (result === 'VALID') {
          this.validarForm.emit(true);
        } else {
          this.validarForm.emit(false);
        }
      }
    );
  }

  regresar() {
    this.route.navigateByUrl('pages/ingresos/' + this.tipoIngreso + '/lista');
  }

  esInvalido(nombre: string) {
    const input = this.datosConsultaForm.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  validarFormulario() {
    if (this.datosConsultaForm.invalid) {
      return Object.values(this.datosConsultaForm.controls).forEach(control => {
        control.markAsDirty();
      });
    }
  }

}
