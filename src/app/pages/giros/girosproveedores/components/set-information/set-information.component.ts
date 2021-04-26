import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'ngx-set-information',
  templateUrl: './set-information.component.html',
  styleUrls: ['./set-information.component.scss']
})
export class SetInformationComponent implements OnInit {

  @Output () validarForm: EventEmitter <any>;
  @Output () informacionForm: EventEmitter <any>;

  giroProveedor: FormGroup;

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

  constructor(private formBuilder: FormBuilder) {
    this.validarForm = new EventEmitter;
    this.informacionForm = new EventEmitter;
   }

  ngOnInit() {
    this.giroProveedor = this.formBuilder.group({
      areaFuncional: ['', Validators.required],
      fecha: ['', Validators.required],
      giroTramite: ['', Validators.required],
      tipoGiro: ['', Validators.required],
      vigencia: ['', Validators.required],
    });
    this.handleFormChanges();
  }

  handleFormChanges() {
    this.giroProveedor.statusChanges.subscribe(
      (result: any) => {
        if (result === 'VALID') {
          this.validarForm.emit(true);
        } else if (result === 'INVALID') {
          this.validarForm.emit(false);
        }
      }
    );
  }

  esInvalido(nombre: string) {
    const input = this.giroProveedor.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  validarFormulario() {
    if (this.giroProveedor.invalid) {
      return Object.values(this.giroProveedor.controls).forEach(control => {
        control.markAsDirty();
      });
    }
  }

  onSubmit (data: any) {
    if (this.giroProveedor.valid) {
      this.informacionForm.emit(data);
      this.mensaje = false;
    } else {
      this.validarFormulario();
      this.mensaje = true;
    }
  }

}
