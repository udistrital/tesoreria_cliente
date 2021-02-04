import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DATOS_REQUISITOSTIPO, CONFIGURACION_REQUISITOSTIPO, DATOS_ESPECIFICACIONTIPO, CONFIGURACION_ESPECIFICACIONTIPO } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-set-tipoavance',
  templateUrl: './set-tipoavance.component.html',
  styleUrls: ['./set-tipoavance.component.scss']
})
export class SetTipoavanceComponent implements OnInit {
  tipoAvanceGroup: FormGroup;

  // Icono en la Lista de documentos
  mostrarOcultar: string;
  mostrarOcultarIcono: string;

  // Configuracion de la tabla
  configRequisitos: any;
  datosRequisitos: any;
  configEspecificacion: any;
  datosEspecificacion: any;


  constructor(private fb: FormBuilder) {

    // Datos y configuracion de Tabla
    this.datosRequisitos = DATOS_REQUISITOSTIPO;
    this.configRequisitos = CONFIGURACION_REQUISITOSTIPO;
    this.datosEspecificacion = DATOS_ESPECIFICACIONTIPO;
    this.configEspecificacion = CONFIGURACION_ESPECIFICACIONTIPO;
    // Icono en la Lista de documentos
    this.mostrarOcultar = 'Mostrar';
    this.mostrarOcultarIcono = 'fa-plus-square';
  }

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

  // Configuracion de Icono en lista documentos
  mostrarOcultarTiposAvances(state: string) {
    if (state === 'false') {
      this.mostrarOcultarIcono = 'fa-minus-square';
    } else {
      this.mostrarOcultarIcono = 'fa-plus-square';
    }
  }

}
