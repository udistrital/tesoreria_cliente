import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'ngx-set-informacion',
  templateUrl: './set-informacion.component.html',
  styleUrls: ['./set-informacion.component.scss']
})
export class SetInformacionComponent implements OnInit {

  @Output () informacionForm: EventEmitter <any>;

  giroNomina: FormGroup;

  areaFuncional: String [] = [
    'Servicios',
    'Pagos',
    'Formatos'
  ];

  tiposGiros: String [] = [
    'Abono en cuenta',
    'Nota débito',
    'Efectivo'
  ];

  vigencias: any [] = [
    2020,
    2021
  ];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.informacionForm = new EventEmitter;
   }

  ngOnInit() {
    this.giroNomina = this.formBuilder.group({
      areaFuncional: ['', Validators.required],
      fecha: ['', Validators.required],
      tipoGiro: ['', Validators.required],
      vigencia: ['', Validators.required],
    });
  }

  onSubmit (data: any) {
    this.informacionForm.emit(data);  
  }

}
