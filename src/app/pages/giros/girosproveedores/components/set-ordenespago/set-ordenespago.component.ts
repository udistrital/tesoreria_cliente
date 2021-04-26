import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DATOS_GIRO_ORDEN, CONF_ORDENPAGO, CONF_MINORDENPAGO } from '../../interfaces/interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getFilaSeleccionada} from '../../../../../shared/selectors/shared.selectors';
import { LoadFilaSeleccionada} from '../../../../../shared/actions/shared.actions';
import { SharedService } from '../../../../../shared/services/shared.service';
@Component({
  selector: 'ngx-set-ordenespago',
  templateUrl: './set-ordenespago.component.html',
  styleUrls: ['./set-ordenespago.component.scss']
})
export class SetOrdenespagoComponent implements OnInit, OnDestroy {

  @Output() validarOrdenes: EventEmitter<any>;
  @Output() statusOrdenes: EventEmitter<any>;

  configuration: any;
  configurationMin: any;
  datosGiroOrdenesPago: any;
  consecutivos: FormGroup;
  subscription$: any;
  agregarConsecutivos: boolean = false;

  datosSeleccionados: any;
  validarConsecutivo: boolean = false;
  validar: boolean = false;
  mensaje: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
    private sharedService: SharedService
  ) {
    this.datosSeleccionados = [];
    this.validarOrdenes = new EventEmitter;
    this.statusOrdenes = new EventEmitter;
    this.configuration = CONF_ORDENPAGO;
    this.datosGiroOrdenesPago = DATOS_GIRO_ORDEN;
    this.configurationMin = CONF_MINORDENPAGO;
    this.consecutivos = this.formBuilder.group({
      desde: ['', Validators.required],
      hasta: ['', Validators.required]
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  ngOnInit() {
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe((action) => {
      if (this.sharedService.IfStore(action)) {
        if (action.accion.name === 'eliminar') {
          if (this.datosSeleccionados.length === 1) {
            this.agregarConsecutivos = false;
          }
          this.datosSeleccionados.splice(this.datosSeleccionados.findIndex(
            (element: any) => {
              element.consecutivo ===  action.fila.consecutivo;
            }
          ), 1);
        }
        this.store.dispatch(LoadFilaSeleccionada(null));
      }
    });
    this.changes();
  }

  changes() {
    this.consecutivos.statusChanges.subscribe(
      (status) => {
        if ( status === 'INVALID') {
          this.validar = true;
        } else {
          this.validar = false;
        }
      });
  }

  onSubmit(data: any) {
    if (this.consecutivos.valid) {
      if (data.hasta < data.desde ) {
        this.validarConsecutivo = true;
      } else {
        this.validarConsecutivo = false;
        this.agregarConsecutivos = true;
        this.statusOrdenes.emit(true);
        for (let i = data.desde; i <= data.hasta; i++) {
          this.datosGiroOrdenesPago.filter((result: any) => {
            if (result.consecutivo === i) {
              this.datosSeleccionados.push(result);
            }
          });
        }
      }
    } else {
      this.validarFormulario();
      this.validar = true;
    }
  }

  esInvalido(nombre: string) {
    const input = this.consecutivos.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  validarFormulario() {
    if (this.consecutivos.invalid) {
      return Object.values(this.consecutivos.controls).forEach(control => {
        control.markAsDirty();
      });
    }
  }

  remove() {
    this.agregarConsecutivos = false;
    this.datosSeleccionados = [];
  }

  guardar() {
    if (this.datosSeleccionados.length === 0) {
      this.statusOrdenes.emit(false);
      this.mensaje = true;
    } else {
      this.mensaje = false;
      this.validarOrdenes.emit(this.datosSeleccionados);
    }
  }

}
