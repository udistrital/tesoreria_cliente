import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONFIGURACION_TABLACERTIFICADO, DATOS_TABLACERTIFICADO } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-busquedaindividual',
  templateUrl: './busquedaindividual.component.html',
  styleUrls: ['./busquedaindividual.component.scss']
})
export class BusquedaindividualComponent implements OnInit {

  busquedaGroup: FormGroup;

  configCertificado: any;
  datosCertificado: any;

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.createForm();

    this.configCertificado = CONFIGURACION_TABLACERTIFICADO;
    this.datosCertificado = DATOS_TABLACERTIFICADO;

  }

  createForm() {
    this.busquedaGroup = this.fb.group({
      tipoID: ['', Validators.required],
    });
  }

  isInvalid(nombre: string) {
    const input = this.busquedaGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.busquedaGroup.invalid) {
      return Object.values(this.busquedaGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
