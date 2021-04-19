import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-solicitud-reactivacion',
  templateUrl: './solicitud-reactivacion.component.html',
  styleUrls: ['./solicitud-reactivacion.component.scss']
})
export class SolicitudReactivacionComponent implements OnInit {

  files: any[];
  Datos: any[];

  ReactivacionForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.Datos = [];
    this.ReactivacionForm = this.fb.group({
      TipoID: [],
      NumeroID: [],
      Codigo: [],
      Nombre: [],
      Apellido: [],
      Detalle: [],
    });
  }

  ngOnInit() {
  }
  onFileInput(event: any) {
    this.files = event.target.files;
  }
  Agregar() {
    this.Datos.push(this.files[0]);
    this.files = undefined;
  }

  Remover(index: any) {
    this.Datos.splice(index, 1);
  }
  OnCreate() {
    Swal.fire({
      type: 'success',
      title: '¡Aprobado!',
      text: 'Solicitud Enviada',
      confirmButtonText: 'Aceptar',
    });
  }

}
