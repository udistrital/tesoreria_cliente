import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DATOS_REQUISITOSP, CONFIGURACION_REQUISITOSP } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-set-tipodeavance',
  templateUrl: './set-tipodeavance.component.html',
  styleUrls: ['./set-tipodeavance.component.scss']
})
export class SetTipodeavanceComponent implements OnInit {
  tituloAccion: string;
  // Formulario
  editTipoavanceGroup: FormGroup;
  codigoTipo = 'CTAT';
  estadoTipo = 'Activo';

  configRequisitos: any;
  datosRequisitos: any;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute) {

    this.datosRequisitos = DATOS_REQUISITOSP;
    this.configRequisitos = CONFIGURACION_REQUISITOSP;

    // Título, editar o crear
    this.tituloAccion = this.activatedRoute.snapshot.url[0].path;
    this.createForm();
  }

  ngOnInit() {
  }

  // Validacion del Formulario
  get areaInvalid() {
    return this.editTipoavanceGroup.get('areaFuncional').invalid && this.editTipoavanceGroup.get('areaFuncional').touched;
  }
  get fechaInvalid() {
    return this.editTipoavanceGroup.get('fecha').invalid && this.editTipoavanceGroup.get('fecha').touched;
  }
  get codigoTipoInvalid() {
    return this.editTipoavanceGroup.get('codigoTipo').invalid && this.editTipoavanceGroup.get('codigoTipo').touched;
  }
  get nombreTipoInvalid() {
    return this.editTipoavanceGroup.get('nombreTipo').invalid && this.editTipoavanceGroup.get('nombreTipo').touched;
  }
  get descripcionInvalid() {
    return this.editTipoavanceGroup.get('descripcion').invalid && this.editTipoavanceGroup.get('descripcion').touched;
  }
  get estadoTipoInvalid() {
    return this.editTipoavanceGroup.get('estadoTipo').invalid && this.editTipoavanceGroup.get('estadoTipo').touched;
  }
  get normaTipoInvalid() {
    return this.editTipoavanceGroup.get('normaTipo').invalid && this.editTipoavanceGroup.get('normaTipo').touched;
  }

  createForm() {
    this.editTipoavanceGroup = this.fb.group({
      areaFuncional: ['', Validators.required],
      fecha: [''],
      codigoTipo: ['', Validators.required],
      nombreTipo: ['', Validators.required],
      descripcion: [''],
      estadoTipo: [''],
      normaTipo: ['', Validators.required],

    });
  }

  saveForm() {
    if (this.editTipoavanceGroup.invalid) {
      return Object.values(this.editTipoavanceGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
