import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-set-datosregistro',
  templateUrl: './set-datosregistro.component.html',
  styleUrls: ['./set-datosregistro.component.scss']
})
export class SetDatosregistroComponent implements OnInit {

  datosRegistroGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.datosRegistroGroup = this.fb.group({
      areaFuncional: ['', Validators.required],
      vigencia: ['', Validators.required],
      descripcion: ['', Validators.required],
      presentacion: ['', Validators.required],
      fechaInicial: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      cargoResponsable: ['', Validators.required]
    });
  }

  isInvalid(nombre: string) {
    const input = this.datosRegistroGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.datosRegistroGroup.invalid) {
      return Object.values(this.datosRegistroGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
