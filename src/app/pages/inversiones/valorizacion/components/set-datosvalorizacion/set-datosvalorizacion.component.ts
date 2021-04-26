import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'ngx-set-datosvalorizacion',
  templateUrl: './set-datosvalorizacion.component.html',
  styleUrls: ['./set-datosvalorizacion.component.scss']
})
export class SetDatosvalorizacionComponent implements OnInit {

  datosValorizacionGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.datosValorizacionGroup = this.fb.group({
      precioCierre: ['', [
        Validators.required,
        RxwebValidators.numeric({allowDecimal: true})
      ]],
      registroValorizacion: ['', [
        Validators.required,
        RxwebValidators.numeric({allowDecimal: true})
      ]],
      observaciones: ['', ],
    });
  }

  isInvalid(nombre: string) {
    const input = this.datosValorizacionGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.datosValorizacionGroup.invalid) {
      return Object.values(this.datosValorizacionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
