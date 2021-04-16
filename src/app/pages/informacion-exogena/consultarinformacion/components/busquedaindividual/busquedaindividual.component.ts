import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-busquedaindividual',
  templateUrl: './busquedaindividual.component.html',
  styleUrls: ['./busquedaindividual.component.scss']
})
export class BusquedaindividualComponent implements OnInit {

  busquedaGroup: FormGroup;

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.createForm();
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
