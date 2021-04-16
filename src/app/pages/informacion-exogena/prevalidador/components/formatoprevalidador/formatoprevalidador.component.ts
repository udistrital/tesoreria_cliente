import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'ngx-formatoprevalidador',
  templateUrl: './formatoprevalidador.component.html',
  styleUrls: ['./formatoprevalidador.component.scss']
})
export class FormatoprevalidadorComponent implements OnInit {

  prevalidadorGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.prevalidadorGroup = this.fb.group({
      areaFuncional: ['', Validators.required],
      vigencia: ['', Validators.required],
      vigenciaInforme: ['', Validators.required],
      descripcion: ['', Validators.required],
      tipoPersona: ['', Validators.required],
      formato: ['', Validators.required],
      valorCuantia: ['', [
        Validators.required,
        RxwebValidators.numeric({allowDecimal: true})
      ]],
      informe: ['', Validators.required]
    });
  }

  isInvalid(nombre: string) {
    const input = this.prevalidadorGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.prevalidadorGroup.invalid) {
      return Object.values(this.prevalidadorGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
