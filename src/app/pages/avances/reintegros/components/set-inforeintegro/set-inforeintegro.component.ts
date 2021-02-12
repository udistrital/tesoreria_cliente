import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-set-inforeintegro',
  templateUrl: './set-inforeintegro.component.html',
  styleUrls: ['./set-inforeintegro.component.scss']
})
export class SetInforeintegroComponent {

  infoReintegroGroup: FormGroup;
  archivo: any;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  // Creación de formulario reactivo
  createForm() {
    this.infoReintegroGroup = this.fb.group({
      areaFuncional: ['', Validators.required],
      numeroOficio: ['',
        [Validators.required,
        Validators.pattern('^[0-9]*$')]],
      fecha: ['', Validators.required],
      vigencia: ['', Validators.required],
      tipoActa: ['', Validators.required],
      concepto: ['', Validators.required],
      causalReintegro: ['', Validators.required],
      valorReintegro: ['',
        [Validators.required,
        Validators.pattern('^[0-9]*$')]],
      justificacion: ['', Validators.required],
      reciboCaja: ['',
        [Validators.required,
        Validators.pattern('^[0-9]*$')]],
    });
  }

  // Validar información de formulario
  esInvalido(nombre: string) {
    const input = this.infoReintegroGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  // Adjuntar un archivo
  prepareFileList(files: Array<any>) {
    this.archivo = files[0];
  }

  // Guardar información de formulario
  saveForm() {
    if (this.infoReintegroGroup.invalid) {
      return Object.values(this.infoReintegroGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
