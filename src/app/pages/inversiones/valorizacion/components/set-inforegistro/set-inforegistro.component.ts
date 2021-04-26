import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-set-inforegistro',
  templateUrl: './set-inforegistro.component.html',
  styleUrls: ['./set-inforegistro.component.scss']
})
export class SetInforegistroComponent implements OnInit {

  infoRegistroGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.infoRegistroGroup = this.fb.group({
      proceso: ['', Validators.required],
      areaFuncional: ['', Validators.required],
    });
  }

  isInvalid(nombre: string) {
    const input = this.infoRegistroGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.infoRegistroGroup.invalid) {
      return Object.values(this.infoRegistroGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
