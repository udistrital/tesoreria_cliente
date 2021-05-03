import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONFIGURACION_TABLACUENTAS, DATOS_TABLACUENTAS } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-set-detalledeclaracion',
  templateUrl: './set-detalledeclaracion.component.html',
  styleUrls: ['./set-detalledeclaracion.component.scss']
})
export class SetDetalledeclaracionComponent implements OnInit {

  detalleDeclaracionGroup: FormGroup;

  configCuentas: any;
  datosCuentas: any;

  // Icono en la Lista de documentos
  mostrarOcultar: string;
  mostrarOcultarIcono: string;

  constructor(private fb: FormBuilder) {

    this.configCuentas = CONFIGURACION_TABLACUENTAS;
    this.datosCuentas = DATOS_TABLACUENTAS;


    // Icono en la Lista de documentos
    this.mostrarOcultar = 'Mostrar';
    this.mostrarOcultarIcono = 'fa-plus-square';
  }

  ngOnInit() {
    this.createForm();
  }

  agregarCuenta() {

  }
  // Configuracion de Icono en lista documentos
  mostrarOcultarCuentas(state: string, index: number) {
    if (state === 'false') {
      this.mostrarOcultarIcono = 'fa-minus-square';
    } else {
      this.mostrarOcultarIcono = 'fa-plus-square';
    }
  }

  createForm() {
    this.detalleDeclaracionGroup = this.fb.group({
      codigoCuenta: ['',
      [Validators.required,
      Validators.pattern('^[0-9]*$')]],
    });
  }

  isInvalid(nombre: string) {
    const input = this.detalleDeclaracionGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.detalleDeclaracionGroup.invalid) {
      return Object.values(this.detalleDeclaracionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
