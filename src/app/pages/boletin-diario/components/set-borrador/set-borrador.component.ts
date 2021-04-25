import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CONF_CONSULTACUENTA, CONF_CONSULTACOMPROBANTE, DATOS_CUENTAS, DATOS_COMPROBANTE } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-set-borrador',
  templateUrl: './set-borrador.component.html',
  styleUrls: ['./set-borrador.component.scss']
})
export class SetBorradorComponent implements OnInit {

  consulta: any;
  configuracionCuentas: any;
  datosCuentas: any;
  configuracionComprobante: any;
  datosComprobante: any;

  consultaForm: FormGroup;
  cuentasForm: FormGroup;
  comprobanteForm: FormGroup;

  tiposComprobante: String [] = [
    'A',
    'B',
    'C',
    'G',
  ];

  comprobantes: Number [] = [
    1,
    2,
    4,
    7,
  ];

  cuentasContables: String [] = [
    '11 10 05 70',
    '11 10 05 54',
    '11 10 05 39',
    '11 10 05 38',
  ];

  mensaje: boolean;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.consultaForm = this.formBuilder.group({
      tipoConsulta: ['', Validators.required]
    });
    this.cuentasForm = this.formBuilder.group({
      numeroCuenta: ['', Validators.required]
    });
    this.comprobanteForm = this.formBuilder.group({
      tipoComprobante: ['', Validators.required],
      comprobante: ['', Validators.required]
    });
    this.configuracionCuentas = CONF_CONSULTACUENTA;
    this.datosCuentas = [];
    this.configuracionComprobante = CONF_CONSULTACOMPROBANTE;
    this.datosComprobante = [];
   }

  ngOnInit() {
    this.handleChanges();
    this.mensaje = false;
  }

  handleChanges() {
    this.consultaForm.valueChanges.subscribe(
      result => this.consulta = result.tipoConsulta
    );
  }

  mostrarBorrador() {
    this.consulta = undefined;
    this.consultaForm.reset();
    this.comprobanteForm.reset();
    this.cuentasForm.reset();
    this.datosComprobante = [];
    this.datosCuentas = [];
  }

  esInvalido(formulario: FormGroup, nombre: string) {
    const input = formulario.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  validarFormulario(formulario: FormGroup) {
    if (formulario.invalid) {
      return Object.values(formulario.controls).forEach(control => {
        control.markAsDirty();
      });
    }
  }

  consultar() {
    this.datosComprobante = [];
    this.datosCuentas = [];
    if (this.consulta === 'cuentaContable') {
      if (this.cuentasForm.valid) {
        this.mensaje = false;
        this.datosCuentas = DATOS_CUENTAS;
      } else {
        this.validarFormulario(this.cuentasForm);
        this.mensaje = true;
      }
    } else if (this.consulta === 'tipoComprobante' ) {
      if (this.comprobanteForm.valid) {
        this.mensaje = false;
        this.datosComprobante = DATOS_COMPROBANTE;
      } else {
        this.validarFormulario(this.comprobanteForm);
        this.mensaje = true;
      }
    }
  }

}
