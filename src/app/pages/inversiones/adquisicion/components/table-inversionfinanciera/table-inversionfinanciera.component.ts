import { Component, OnInit } from '@angular/core';
import { DATOS_TABLA_ADQUISICION, CONFIGURACION_TABLA_ADQUISICION } from '../../interfaces/interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-table-inversionfinanciera',
  templateUrl: './table-inversionfinanciera.component.html',
  styleUrls: ['./table-inversionfinanciera.component.scss']
})
export class TableInversionfinancieraComponent implements OnInit {

  justificarCancelacion: FormGroup;
  modal: NgbModalRef;

  configAdquisicion: any;
  datosAdquisicion: any;

  constructor(private fb: FormBuilder) {
    this.datosAdquisicion = DATOS_TABLA_ADQUISICION;
    this.configAdquisicion = CONFIGURACION_TABLA_ADQUISICION;

   }

  ngOnInit() {
    this.justificarCancelacion = this.fb.group({
      justificacion: [ '', Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ])],
    });
  }

  crear (data: any) {
    this.modal.close();
  }

  close () {
    this.modal.close();
  }

}
