import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-set-datosdeclaracion',
  templateUrl: './set-datosdeclaracion.component.html',
  styleUrls: ['./set-datosdeclaracion.component.scss']
})
export class SetDatosdeclaracionComponent implements OnInit {

  datosDeclaracionGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.datosDeclaracionGroup = this.fb.group({
      areaFuncional: ['', Validators.required],
      descripcion: ['', Validators.required],
      presentacion: ['', Validators.required],
      entidad: ['', Validators.required],
      tipoDeclaracion: ['', Validators.required],
      vigencia: ['', Validators.required],
      fechaInicial: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      cargoResponsable: ['', Validators.required],
    });
  }

  isInvalid(nombre: string) {
    const input = this.datosDeclaracionGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.datosDeclaracionGroup.invalid) {
      return Object.values(this.datosDeclaracionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
