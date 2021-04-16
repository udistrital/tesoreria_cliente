import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CONFIGURACION_CONSULTAS, DATOS_CONSULTAS } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-set-consultainformacion',
  templateUrl: './set-consultainformacion.component.html',
  styleUrls: ['./set-consultainformacion.component.scss']
})
export class SetConsultainformacionComponent implements OnInit {

  consultaInformacionGroup: FormGroup;

  configConsultas: any;
  datosConsultas: any;
  
  constructor(private fb: FormBuilder) { 
    this.datosConsultas = DATOS_CONSULTAS;
    this.configConsultas = CONFIGURACION_CONSULTAS;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.consultaInformacionGroup = this.fb.group({
      tipoConsulta: ['', Validators.required],
    });
  }

  isInvalid(nombre: string) {
    const input = this.consultaInformacionGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.consultaInformacionGroup.invalid) {
      return Object.values(this.consultaInformacionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
