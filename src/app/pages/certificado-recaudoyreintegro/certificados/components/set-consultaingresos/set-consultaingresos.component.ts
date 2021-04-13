import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONFIGURACION_COMPROBANTES, DATOS_COMPROBANTES } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-set-consultaingresos',
  templateUrl: './set-consultaingresos.component.html',
  styleUrls: ['./set-consultaingresos.component.scss']
})
export class SetConsultaingresosComponent implements OnInit {

  consultaIngresosGroup: FormGroup;

  configComprobante: any;
  datosComprobante: any;

  constructor(private fb: FormBuilder) {
    this.configComprobante = CONFIGURACION_COMPROBANTES;
    this.datosComprobante = DATOS_COMPROBANTES;
   }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.consultaIngresosGroup = this.fb.group({
      areaFuncional: ['', Validators.required],
      tipoComprobante: ['', Validators.required],
      numeroComprobante: ['', Validators.required],
      fechaComprobante: ['', Validators.required],
      cuentaContable: ['', Validators.required],
      banco: ['', Validators.required],
      cuentaBancaria: ['', Validators.required],
    });
  }

  isInvalid(nombre: string) {
    const input = this.consultaIngresosGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.consultaIngresosGroup.invalid) {
      return Object.values(this.consultaIngresosGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
