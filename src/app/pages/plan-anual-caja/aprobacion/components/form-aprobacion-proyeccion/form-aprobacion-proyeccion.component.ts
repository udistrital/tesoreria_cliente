import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MESES } from '../../../proyeccion/interfaces/interfaces';

@Component({
  selector: 'ngx-form-aprobacion-proyeccion',
  templateUrl: './form-aprobacion-proyeccion.component.html',
  styleUrls: ['./form-aprobacion-proyeccion.component.scss']
})
export class FormAprobacionProyeccionComponent implements OnInit {

  ProyeccionMensualForm: FormGroup;
  Meses: any;
  TotalDistribuido: any;

  constructor(
    private fb: FormBuilder,
  ) {
    this.TotalDistribuido = 0;
    this.Meses = MESES;
  }

  ngOnInit() {
    this.CrearProyeccionMensualForm();
  }

  CrearProyeccionMensualForm() {
    this.ProyeccionMensualForm = this.fb.group({
      Enero: [0, [Validators.required]],
      Febrero: [0, [Validators.required]],
      Marzo: [0, [Validators.required]],
      Abril: [0, [Validators.required]],
      Mayo: [0, [Validators.required]],
      Junio: [0, [Validators.required]],
      Julio: [0, [Validators.required]],
      Agosto: [0, [Validators.required]],
      Septiembre: [0, [Validators.required]],
      Octubre: [0, [Validators.required]],
      Noviembre: [0, [Validators.required]],
      Diciembre: [0, [Validators.required]],
    });
    this.ProyeccionMensualForm.valueChanges.subscribe((data: any) => {
      this.TotalDistribuido = 0;
      MESES.forEach((mes: any) => {
        this.TotalDistribuido += data[mes];
      });
    });
  }

}
