import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-set-infoinversioninicial',
  templateUrl: './set-infoinversioninicial.component.html',
  styleUrls: ['./set-infoinversioninicial.component.scss']
})
export class SetInfoinversioninicialComponent implements OnInit {

  inversionInicialGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.inversionInicialGroup = this.fb.group({
      numeroOperacion: ['', Validators.required],
      fechaDocumento: ['', Validators.required],
      nit: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]],
      recursosCompra: ['', Validators.required],
      tipoTitulo: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      valorInversion: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$')]],
    });
  }

  isInvalid(nombre: string) {
    const input = this.inversionInicialGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.inversionInicialGroup.invalid) {
      return Object.values(this.inversionInicialGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
