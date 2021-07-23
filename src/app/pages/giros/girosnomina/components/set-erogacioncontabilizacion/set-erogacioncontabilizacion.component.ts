import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CONF_BENEFICIARIO_BANCO, DATOS_BENEFICIARIOS_BANCO } from '../../interfaces/interfaces';
import { Store } from '@ngrx/store';
import { getDatosBeneficiarios } from '../../selectors/girosnomina.selectors';
import { SharedService } from '../../../../../shared/services/shared.service';

@Component({
  selector: 'ngx-set-erogacioncontabilizacion',
  templateUrl: './set-erogacioncontabilizacion.component.html',
  styleUrls: ['./set-erogacioncontabilizacion.component.scss']
})
export class SetErogacioncontabilizacionComponent implements OnInit, OnDestroy {

  @Output() statusErogacion: EventEmitter<any>;
  @Output() informacionErogacion: EventEmitter <any>;

  bancoForm: FormGroup;

  cuentas: String[] = [
    'Opcion 1',
    'Opcion 2',
    'Opcion 3'
  ];

  bancos: String[] = [
    'Banco de Bogotá',
    'Banco de Occidente',
    'BBVA'
  ];

  configuration: any;
  datosEntidades: any;

  cuenta = '230-981-23';
  tipo = 'Ahorros';
  validarBanco: boolean = false;
  valorTotal: any;

  datosBeneficiarios: any;
  consecutivo: any;
  subscriptionBeneficiarios$: any;

  id: any;
  nombre: any;
  indice: any;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
    private sharedService: SharedService,
  ) {
    this.bancoForm = this.formBuilder.group({
      banco: ['', Validators.required],
      nombreCuenta: ['', Validators.required]
    });
    this.configuration = CONF_BENEFICIARIO_BANCO;
    this.datosEntidades = DATOS_BENEFICIARIOS_BANCO;
    this.statusErogacion = new EventEmitter;
    this.informacionErogacion = new EventEmitter;
   }
  ngOnDestroy() {
    this.subscriptionBeneficiarios$.unsubscribe();
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
    return this.valorTotal = this.datosEntidades.reduce((a: any, b: { valor: number; }) => a + b.valor, 0);
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

  guardar() {
    if (this.bancoForm.valid) {
      this.validarBanco = false;
      this.informacionErogacion.emit(this.bancoForm.value);
    } else {
      this.validarBanco = true;
      this.validarFormulario();
    }
  }

}
