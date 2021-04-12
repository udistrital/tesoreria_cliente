import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-set-nuevasolicitud',
  templateUrl: './set-nuevasolicitud.component.html',
  styleUrls: ['./set-nuevasolicitud.component.scss']
})
export class SetNuevasolicitudComponent implements OnInit {

  infoNuevasolicitudGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.infoNuevasolicitudGroup = this.fb.group({
      codigoEstudiante: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]],
      solicitud: ['', Validators.required],

    });
  }

  isInvalid(nombre: string) {
    const input = this.infoNuevasolicitudGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.infoNuevasolicitudGroup.invalid) {
      return Object.values(this.infoNuevasolicitudGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
