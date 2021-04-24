import { Component, OnInit, ViewChild, Output, EventEmitter, OnDestroy } from '@angular/core';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../../../../../shared/services/shared.service';
import { Store } from '@ngrx/store';
import { DATOS_BENEFICIARIOS } from '../../interfaces/interfaces';
import { CONF_BENEFICIARIO,
  CONF_DETALLES,
  CONF_RUBROS,
  DATOS_RUBROS,
  CONF_DESCUENTOS,
  CONF_DEVENGO,
  DATOS_DESCUENTO,
  DATOS_DEVENGO } from '../../interfaces/interfaces';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'ngx-set-erogacion',
  templateUrl: './set-erogacion.component.html',
  styleUrls: ['./set-erogacion.component.scss']
})
export class SetErogacionComponent implements OnInit, OnDestroy {

  @Output() informacionBanco: EventEmitter<any>;
  @Output() informacionBeneficiarios: EventEmitter<any>;
  @Output() statusErogacion: EventEmitter<any>;
  @ViewChild('modalDetalles', { static: false }) modalContenido: any;

  subscriptionDetalles$: any;
  modal: any;
  bancoForm: FormGroup;
  datosBeneficiarios: any;
  datosDetalle: any;
  datosRubros: any;
  datosDescuento: any;
  datosDevengo: any;
  configuration: any;
  configurationDetalles: any;
  configurationRubro: any;
  configurationDescuento: any;
  configurationDevengo: any;
  validarBanco: boolean = false;

  totalGirar: any;
  cuentas: String[] = [
    'Opcion 1',
    'Opcion 2',
    'Opcion 3'
  ];
  conceptos: String[] = [
    'Opcion 1',
    'Opcion 2',
    'Opcion 3'
  ];

  bancos: String[] = [
    'Banco de Bogotá',
    'Banco de Occidente',
    'BBVA'
  ];

  cuenta = '230-981-23';
  tipo = 'Ahorros';

  devengo: any;
  descuento: any;
  neto: any;

  constructor(private store: Store<any>,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private sharedService: SharedService, ) {
      this.informacionBanco = new EventEmitter;
      this.informacionBeneficiarios = new EventEmitter;
      this.statusErogacion = new EventEmitter;
      this.configuration = CONF_BENEFICIARIO;
      this.configurationDetalles = CONF_DETALLES;
      this.configurationRubro = CONF_RUBROS;
      this.configurationDescuento = CONF_DESCUENTOS;
      this.configurationDevengo = CONF_DEVENGO;
      this.datosDescuento = DATOS_DESCUENTO;
      this.datosDevengo = DATOS_DEVENGO;
      this.datosDetalle = [];
      this.datosBeneficiarios = DATOS_BENEFICIARIOS;
      this.datosRubros = DATOS_RUBROS;

      this.bancoForm = this.formBuilder.group({
        banco: ['', Validators.required],
        nombreCuenta: ['', Validators.required],
        concepto: ['', Validators.required],
      });
     }
  ngOnDestroy() {
    this.subscriptionDetalles$.unsubscribe();
  }

  ngOnInit() {
    this.subscriptionDetalles$ = this.store.select(getFilaSeleccionada).subscribe(
      (action: any) => {
        if (this.sharedService.IfStore(action)) {
          if (action.accion.name === 'verDetalles') {
            this.abrir(action.fila);
          }
          this.store.dispatch(LoadFilaSeleccionada(null));
        }
      }
    );
    this.handleChanges();
  }

  handleChanges() {
    this.bancoForm.statusChanges.subscribe(
      result => {
        if (result === 'VALID') {
          this.statusErogacion.emit(true);
        } else {
          this.statusErogacion.emit(false);
        }
      }
    );
  }

  abrir(datos: any) {
    this.datosDetalle = [];
    this.datosDetalle.push(datos);
    this.modal = this.dialog.open(this.modalContenido);
  }

  guardar() {
    if (this.bancoForm.valid) {
      this.validarBanco = false;
      this.informacionBanco.emit(this.bancoForm.value);
      this.informacionBeneficiarios.emit(this.datosBeneficiarios);
    } else {
      this.validarBanco = true;
      this.validarFormulario();
    }
  }

  esInvalido(nombre: string) {
    const input = this.bancoForm.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  validarFormulario() {
    if (this.bancoForm.invalid) {
      return Object.values(this.bancoForm.controls).forEach(control => {
        control.markAsDirty();
      });
    }
  }

  totalGasto() {
    return this.totalGirar = this.datosBeneficiarios.reduce((a: any, b: { valor: number; }) => a + b.valor, 0);
  }

  totalDevengo() {
    return this.devengo = this.datosDevengo.reduce((a: any, b: { valorDevengo: number; }) => a + b.valorDevengo, 0);
  }

  totalDescuento() {
    return this.descuento = this.datosDescuento.reduce((a: any, b: { valorDescuento: number; }) => a + b.valorDescuento, 0);
  }

  totalNeto() {
    return this.neto = this.devengo - this.descuento;
  }

}
