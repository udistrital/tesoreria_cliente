import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DATOS_CONTA} from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-set-contabilizacion',
  templateUrl: './set-contabilizacion.component.html',
  styleUrls: ['./set-contabilizacion.component.scss']
})
export class SetContabilizacionComponent implements OnInit {

  @Output () validarForm: EventEmitter <any>;
  @Output () informacionForm: EventEmitter <any>;

  titles = ['Secuencia', 'Tercero', 'N° de cuenta', 'Nombre cuenta', 'Detalle', 'Débito', 'Crédito'];
  attributes = [['secuencia'], ['tercero'], ['numeroCuenta'], ['nombreCuenta'], ['detalle'], ['debito'], ['credito']];

  contabilizacion: any;
  debito: any;
  credito: any;
  contabilizacionForm: FormGroup;

  tiposComprobante: String [] = [
    'A',
    'B',
    'C'
  ];
  numerosComprobante: any [] = [
    12,
    15,
    8
  ];

  conceptos: String [] = [
    'Pago proveedores',
    'Pago nómina',
  ];

  consecutivos: any [] = [
    21,
    22,
    23
  ];

  constructor(
    private formBuilder: FormBuilder,
  ) { this.validarForm = new EventEmitter;
    this.informacionForm = new EventEmitter;
    this.contabilizacion = DATOS_CONTA;
   }

  ngOnInit() {
    this.contabilizacionForm = this.formBuilder.group({
      tipoComprobante: ['', Validators.required],
      numeroComprobante: ['', Validators.required],
      consecutivo: ['', Validators.required],
      conceptoContable: ['', Validators.required],
    });
    this.handleFormChanges();
  }

  handleFormChanges() {
    this.contabilizacionForm.statusChanges.subscribe(
      (result: any) => {
        if (result === 'VALID') {
          this.validarForm.emit(true);
        } else if (result === 'INVALID') {
          this.validarForm.emit(false);
        }
      }
    );
  }

  totalDebito() {
    return this.debito = this.contabilizacion.reduce((a: any, b: { debito: number; }) => a + b.debito, 0);
  }

  totalCredito() {
    return this.credito = this.contabilizacion.reduce((a: any, b: { credito: number; }) => a + b.credito, 0);
  }

  onSubmit( data: any ) {
    this.informacionForm.emit(data);
  }

}
