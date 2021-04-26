import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-set-generarcertificado',
  templateUrl: './set-generarcertificado.component.html',
  styleUrls: ['./set-generarcertificado.component.scss']
})
export class SetGenerarcertificadoComponent implements OnInit {

  generarCertificadoGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.generarCertificadoGroup = this.fb.group({
      areaFuncional: ['', Validators.required],
      tipoPersona: ['', Validators.required],
      tipoID: ['', Validators.required],
      numeroID: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]],
    });
  }

  isInvalid(nombre: string) {
    const input = this.generarCertificadoGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.generarCertificadoGroup.invalid) {
      return Object.values(this.generarCertificadoGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}
