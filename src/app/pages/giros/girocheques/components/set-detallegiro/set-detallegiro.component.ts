import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DATOS_RUBROS } from '../../interfaces/interfaces';
@Component({
  selector: 'ngx-set-detallegiro',
  templateUrl: './set-detallegiro.component.html',
  styleUrls: ['./set-detallegiro.component.scss']
})
export class SetDetallegiroComponent implements OnInit {

  @Output () validarForm: EventEmitter <any>;
  @Output () informacionForm: EventEmitter <any>;

  titles = ['Número de rubro', 'Nombre rubro', 'Valor'];
  attributes = [['numeroRubro'], ['nombreRubro'], ['valor']];

  giroCheque: FormGroup;
  rubros: any;

  areaFuncional: String [] = [
    'Servicios',
    'Pagos',
    'Formatos'
  ];
  tiposDocumentos: String [] = [
    'Orden de pago',
    'Relación de autorización',
  ];

  tiposGiro: String [] = [
    'Transferencia bancaria',
    'PIN',
  ];

  vigencias: any [] = [
    2020,
    2021,
  ];

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.validarForm = new EventEmitter;
    this.informacionForm = new EventEmitter;
    this.rubros = DATOS_RUBROS;
   }

  ngOnInit() {
    this.giroCheque = this.formBuilder.group({
      areaFuncional: ['', Validators.required],
      fecha: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      tipoGiro: ['', Validators.required],
      vigencia: ['', Validators.required],
      numeroOrdenPago: ['', Validators.required],
    });
    this.handleFormChanges();
  }

  handleFormChanges() {
    this.giroCheque.statusChanges.subscribe(
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
