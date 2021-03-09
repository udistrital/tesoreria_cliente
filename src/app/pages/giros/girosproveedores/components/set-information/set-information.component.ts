import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'ngx-set-information',
  templateUrl: './set-information.component.html',
  styleUrls: ['./set-information.component.scss']
})
export class SetInformationComponent implements OnInit {

  @Output () validarForm: EventEmitter <any>;
  @Output () informacionForm: EventEmitter <any>;

  giroProveedor: FormGroup;

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

  constructor(private formBuilder: FormBuilder) {
    this.validarForm = new EventEmitter;
    this.informacionForm = new EventEmitter;
   }

  ngOnInit() {
    this.giroProveedor = this.formBuilder.group({
      areaFuncional: ['', Validators.required],
      fecha: ['', Validators.required],
      giroTramite: ['', Validators.required],
      tipoGiro: ['', Validators.required],
      vigencia: ['', Validators.required],
    });
    this.handleFormChanges();
  }

  handleFormChanges() {
    this.giroProveedor.statusChanges.subscribe(
      (result: any) => {
        if (result === 'VALID') {
          this.validarForm.emit(true);
        } else if (result === 'INVALID') {
          this.validarForm.emit(false);
        }
      }
    );
  }

  onSubmit (data: any) {
    this.informacionForm.emit(data);
  }

}
