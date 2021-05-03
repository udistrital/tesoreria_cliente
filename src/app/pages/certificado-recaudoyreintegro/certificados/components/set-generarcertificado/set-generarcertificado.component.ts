import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CONFIGURACION_CONSULTARECIBOS, DATOS_CONSULTARECIBOS } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-set-generarcertificado',
  templateUrl: './set-generarcertificado.component.html',
  styleUrls: ['./set-generarcertificado.component.scss']
})
export class SetGenerarcertificadoComponent implements OnInit {

  consultaRecibosGroup: FormGroup;

  configConsultaRecibos: any;
  datosConsultaRecibos: any;

  constructor(private fb: FormBuilder) {
    this.configConsultaRecibos = CONFIGURACION_CONSULTARECIBOS;
    this.datosConsultaRecibos = DATOS_CONSULTARECIBOS;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.consultaRecibosGroup = this.fb.group({
      codigo: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]],
    });
  }

  isInvalid(nombre: string) {
    const input = this.consultaRecibosGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.consultaRecibosGroup.invalid) {
      return Object.values(this.consultaRecibosGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
