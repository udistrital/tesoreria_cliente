import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'ngx-set-informacion',
  templateUrl: './set-informacion.component.html',
  styleUrls: ['./set-informacion.component.scss']
})
export class SetInformacionComponent implements OnInit {

  @Output () informacionForm: EventEmitter <any>;
  @Output () statusForm: EventEmitter <any>;

  giroNomina: FormGroup;

  areaFuncional: String [] = [
    'Servicios',
    'Pagos',
    'Formatos'
  ];

  tiposGiros: String [] = [
    'Abono en cuenta',
    'Nota débito',
    'Efectivo'
  ];

  vigencias: any [] = [
    2020,
    2021
  ];

  mensaje: boolean;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.informacionForm = new EventEmitter;
    this.statusForm = new EventEmitter;
   }

  ngOnInit() {
    this.mensaje = false;
    this.giroNomina = this.formBuilder.group({
      areaFuncional: ['', Validators.required],
      fecha: ['', Validators.required],
      tipoGiro: ['', Validators.required],
      vigencia: ['', Validators.required],
    });
    this.handleChanges();
  }

  handleChanges() {
    this.giroNomina.statusChanges.subscribe(
      result => {
        if (result === 'INVALID') {
          this.statusForm.emit(false);
        } else {
          this.statusForm.emit(true);
        }
      }
    );
  }

  esInvalido(nombre: string) {
    const input = this.giroNomina.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  validarFormulario() {
    if (this.giroNomina.invalid) {
      return Object.values(this.giroNomina.controls).forEach(control => {
        control.markAsDirty();
      });
    }
  }

  onSubmit (data: any) {
    if (this.giroNomina.valid) {
      this.informacionForm.emit(data);
      this.mensaje = false;
    } else {
      this.validarFormulario();
      this.mensaje = true;
    }
  }

}
