import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'ngx-set-erogacion',
  templateUrl: './set-erogacion.component.html',
  styleUrls: ['./set-erogacion.component.scss']
})
export class SetErogacionComponent implements OnInit {

  @Output () validarForm: EventEmitter <any>;
  @Output () informacionForm: EventEmitter <any>;

  erogacionForm: FormGroup;

  bancos: String [] = [
    'Banco de Bogotá',
    'Banco de occidente',
    'Banco caja social'
  ];
  nombresCuentas: String [] = [
    'Nómina',
    'Servicios',
  ];

  numeroChequeras: any [] = [
    1,
    2,
    3,
  ];

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.validarForm = new EventEmitter;
    this.informacionForm = new EventEmitter;
   }

  ngOnInit() {
    this.erogacionForm = this.formBuilder.group({
      banco: ['', Validators.required],
      nombreCuenta: ['', Validators.required],
      numeroChequera: ['', Validators.required],
    });
    this.handleFormChanges();
  }

  handleFormChanges() {
    this.erogacionForm.statusChanges.subscribe(
      (result: any) => {
        if (result === 'VALID') {
          this.validarForm.emit(true);
        } else if (result === 'INVALID') {
          this.validarForm.emit(false);
        }
      }
    );
  }

  onSubmit( data: any ) {
    this.informacionForm.emit(data);
  }

}
