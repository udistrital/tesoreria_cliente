import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-set-procesoadquisicion',
  templateUrl: './set-procesoadquisicion.component.html',
  styleUrls: ['./set-procesoadquisicion.component.scss']
})
export class SetProcesoadquisicionComponent implements OnInit {

  infoAdquisicionGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.infoAdquisicionGroup = this.fb.group({
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
        Validators.pattern('^[0-9]*$')]],
    });
  }

  isInvalid(nombre: string) {
    const input = this.infoAdquisicionGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.infoAdquisicionGroup.invalid) {
      return Object.values(this.infoAdquisicionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
