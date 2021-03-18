import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-set-infoafectacion',
  templateUrl: './set-infoafectacion.component.html',
  styleUrls: ['./set-infoafectacion.component.scss']
})
export class SetInfoafectacionComponent implements OnInit {

  infoAfectacionGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.infoAfectacionGroup = this.fb.group({
      vigencia: ['', Validators.required],
      numeroOrdenPago: ['', Validators.required],
    });
  }

  esInvalido(nombre: string) {
    const input = this.infoAfectacionGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.infoAfectacionGroup.invalid) {
      return Object.values(this.infoAfectacionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
