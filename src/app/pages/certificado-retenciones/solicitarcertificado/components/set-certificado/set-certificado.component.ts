import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-set-certificado',
  templateUrl: './set-certificado.component.html',
  styleUrls: ['./set-certificado.component.scss']
})
export class SetCertificadoComponent implements OnInit {

  solicitarCertificadoGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.solicitarCertificadoGroup = this.fb.group({
      areaFuncional: ['', Validators.required],
      tipoPersona: ['', Validators.required],
      tipoID: ['', Validators.required],
      numeroID: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]],
      vigencia: ['', Validators.required],
      fechaInicial: ['', Validators.required],
      fechaFinal: ['', Validators.required],
    });
  }

  isInvalid(nombre: string) {
    const input = this.solicitarCertificadoGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.solicitarCertificadoGroup.invalid) {
      return Object.values(this.solicitarCertificadoGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
