import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-set-procesoreinversion',
  templateUrl: './set-procesoreinversion.component.html',
  styleUrls: ['./set-procesoreinversion.component.scss']
})
export class SetProcesoreinversionComponent implements OnInit {

  infoReinversionGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.infoReinversionGroup = this.fb.group({
      areaFuncional: ['', Validators.required],
    });
  }

  isInvalid(nombre: string) {
    const input = this.infoReinversionGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.infoReinversionGroup.invalid) {
      return Object.values(this.infoReinversionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
