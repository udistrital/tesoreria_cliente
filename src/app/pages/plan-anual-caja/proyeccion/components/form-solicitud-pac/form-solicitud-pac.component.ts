import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'ngx-form-solicitud-pac',
  templateUrl: './form-solicitud-pac.component.html',
  styleUrls: ['./form-solicitud-pac.component.scss']
})
export class FormSolicitudPacComponent implements OnInit {

  titulo: any;
  subscription$: any;

  PACForm: FormGroup;
  boton: string;
  Vigencia: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<FormSolicitudPacComponent>,
  ) {
    this.titulo = 'Crear Nueva Solicitud PAC';
    this.CrearPACForm(data)
  }

  ngOnInit() {
    
  }

  CrearPACForm(plan?: any) {
    console.log(plan)
    if (plan) {
      this.titulo = 'Editar Solicitud Pac';
      this.boton = 'Editar';
      this.PACForm = this.fb.group({
        Activo: [plan.Activo, []],
        FechaCreacion: [plan.FechaCreacion, []],
        FechaModificacion: [plan.FechaModificacion, []],
        Id: [plan.Id, []],
        Descripcion: [plan.Descripcion, [Validators.required]],
        Vigencia: [plan.Vigencia, [Validators.required]],
        Aprobado: [plan.Aprobado, []],
      });
    } else {
      this.titulo = 'Crear Nueva Solicitud PAC';
      this.boton = 'Crear';
      this.PACForm = this.fb.group({
        Activo: [true, []],
        FechaCreacion: ['', []],
        FechaModificacion: ['', []],
        Id: [null, []],
        Descripcion: ['', [Validators.required]],
        Vigencia: ["2020", [Validators.required]],
        Aprobado: [false, []]
      });
    }
  }
  OnCancel() {
    this.matDialogRef.close();
  }
  OnSubmit() {
  }
}
