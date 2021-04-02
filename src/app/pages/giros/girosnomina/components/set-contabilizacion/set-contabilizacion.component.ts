import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DATOS_CONTABILIDAD, CONF_CONT } from '../../interfaces/interfaces';
import { Store } from '@ngrx/store';
import { getDatosBeneficiarios } from '../../selectors/girosnomina.selectors';
import { SharedService } from '../../../../../shared/services/shared.service';

@Component({
  selector: 'ngx-set-contabilizacion',
  templateUrl: './set-contabilizacion.component.html',
  styleUrls: ['./set-contabilizacion.component.scss']
})
export class SetContabilizacionComponent implements OnInit, OnDestroy {

  @Output () statusContable: EventEmitter <any>;
  @Output () informacionContable: EventEmitter <any>;
  @Output () cerrarModal: EventEmitter <any>;

  credito: any;
  debito: any;
  mensaje: boolean;
  datosContabilidad: any;
  configurationContabilidad: any;
  subscriptionBeneficiarios$: any;
  contabilizacionForm: FormGroup;
  datosBeneficiarios: any;
  consecutivo: any;
  nombre: any;
  id: any;
  indice: any;

  codigos: String[] = [
    'Opcion 1',
    'Opcion 2',
    'Opcion 3'
  ];
  conceptos: String[] = [
    'Opcion 1',
    'Opcion 2',
    'Opcion 3'
  ];

  tiposComprobante: String[] = [
    'Opcion 1',
    'Opcion 2',
    'Opcion 3'
  ];

  ngOnDestroy() {
    this.subscriptionBeneficiarios$.unsubscribe();
  }

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
    private sharedService: SharedService
  ) {
    this.contabilizacionForm = this.formBuilder.group({
      concepto: ['', Validators.required],
      codigo: ['', Validators.required],
      tipoComprobante: ['', Validators.required]
    });
    this.datosContabilidad = DATOS_CONTABILIDAD;
    this.configurationContabilidad = CONF_CONT;
    this.statusContable = new EventEmitter;
    this.informacionContable = new EventEmitter;
    this.cerrarModal = new EventEmitter;
   }

  ngOnInit() {
    this.subscriptionBeneficiarios$ = this.store.select(getDatosBeneficiarios).subscribe(
      data => {
        if (this.sharedService.IfStore(data)) {
          this.datosBeneficiarios = [];
          this.consecutivo = [];
          let i = 0;
          while (data[i] !== undefined) {
            this.datosBeneficiarios.push(data[i]);
            this.consecutivo.push(data[i].consecutivo);
            i++;
          }
        }
      }
    );
    this.indice = 0;
    this.id = this.datosBeneficiarios[this.indice].id;
    this.nombre = this.datosBeneficiarios[this.indice].nombre;
    this.handleChanges();
  }

  handleChanges() {
    this.contabilizacionForm.statusChanges.subscribe(
      result => {
        if (result === 'VALID') {
          this.statusContable.emit(true);
        } else {
          this.statusContable.emit(false);
        }
      }
    );
  }

  anterior() {
    if (this.indice > 0 ) {
      this.indice--;
      this.id = this.datosBeneficiarios[this.indice].id;
      this.nombre = this.datosBeneficiarios[this.indice].nombre;
    } else {
      this.id = this.datosBeneficiarios[0].id;
      this.nombre = this.datosBeneficiarios[0].nombre;
    }
  }

  siguiente() {
    if (this.indice < this.datosBeneficiarios.length - 1) {
      this.indice++;
      this.id = this.datosBeneficiarios[this.indice].id;
      this.nombre = this.datosBeneficiarios[this.indice].nombre;
    } else {
      this.id = this.datosBeneficiarios[this.datosBeneficiarios.length - 1].id;
      this.nombre = this.datosBeneficiarios[this.datosBeneficiarios.length - 1].nombre;
    }
  }

  elegir(index: any) {
    this.indice = index;
    this.id = this.datosBeneficiarios[index].id;
    this.nombre = this.datosBeneficiarios[index].nombre;
  }

  esInvalido(nombre: string) {
    const input = this.contabilizacionForm.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  validarFormulario() {
    if (this.contabilizacionForm.invalid) {
      return Object.values(this.contabilizacionForm.controls).forEach(control => {
        control.markAsDirty();
      });
    }
  }

  totalDebito() {
    return this.debito = this.datosContabilidad.reduce((a: any, b: { debito: number; }) => a + b.debito, 0);
  }

  totalCredito() {
    return this.credito = this.datosContabilidad.reduce((a: any, b: { credito: number; }) => a + b.credito, 0);
  }

  guardar() {
    if (this.contabilizacionForm.valid) {
      this.mensaje = false;
      this.informacionContable.emit(this.contabilizacionForm.value);
    } else {
      this.mensaje = true;
      this.validarFormulario();
    }
  }

  cerrar() {
    this.cerrarModal.emit();
  }

}
