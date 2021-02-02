import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-set-tipoavance',
  templateUrl: './set-tipoavance.component.html',
  styleUrls: ['./set-tipoavance.component.scss']
})
export class SetTipoavanceComponent implements OnInit {
  tipoAvanceGroup: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  // Validacion del Formulario
  get seleccionAvanceInvalid() {
    return this.tipoAvanceGroup.get('seleccionAvance').invalid && this.tipoAvanceGroup.get('seleccionAvance').touched;
  }

  createForm() {
    this.tipoAvanceGroup = this.fb.group({
      seleccionAvance: ['', Validators.required],
    });
  }

  saveForm() {
    if (this.tipoAvanceGroup.invalid) {
      return Object.values(this.tipoAvanceGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
