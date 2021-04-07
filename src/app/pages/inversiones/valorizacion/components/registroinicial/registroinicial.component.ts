import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-registroinicial',
  templateUrl: './registroinicial.component.html',
  styleUrls: ['./registroinicial.component.scss']
})
export class RegistroinicialComponent implements OnInit {

  infoRegistroGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.infoRegistroGroup = this.fb.group({
      areaFuncional: ['', Validators.required],
      nit: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]],
      recursosCompra: ['', Validators.required],
      tipoTitulo: ['', Validators.required],
      fechaIncial: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      valorInversion: ['', [
        Validators.required,
        // RxwebValidators.numeric({allowDecimal: true})
      ]]
    });
  }

  isInvalid(nombre: string) {
    const input = this.infoRegistroGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.infoRegistroGroup.invalid) {
      return Object.values(this.infoRegistroGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
