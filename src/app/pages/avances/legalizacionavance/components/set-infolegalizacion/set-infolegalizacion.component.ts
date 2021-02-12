import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-set-infolegalizacion',
  templateUrl: './set-infolegalizacion.component.html',
  styleUrls: ['./set-infolegalizacion.component.scss']
})
export class SetInfolegalizacionComponent implements OnInit {
  datosLegalizacion: FormGroup;

  crearFormulario() {
    this.datosLegalizacion = this.fb.group({
      vigencia: ['', Validators.required],
    });
  }

  constructor(private fb: FormBuilder) { 
    this.crearFormulario();
  }

  ngOnInit() {
  }

  validarFormulario() {
    if (this.datosLegalizacion.invalid) {
      return Object.values(this.datosLegalizacion.controls).forEach(control => {
        control.markAsDirty();
      });
    }
  }

  esInvalido(nombre: string) {
    const input = this.datosLegalizacion.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

}
