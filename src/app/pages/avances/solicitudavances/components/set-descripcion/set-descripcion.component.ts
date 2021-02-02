import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-set-descripcion',
  templateUrl: './set-descripcion.component.html',
  styleUrls: ['./set-descripcion.component.scss']
})
export class SetDescripcionComponent implements OnInit {
  descripcionGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  // Validacion del Formulario
  get ordenadorInvalid() {
    return this.descripcionGroup.get('ordenadorGasto').invalid && this.descripcionGroup.get('ordenadorGasto').touched;
  }
  get objetivoInvalid() {
    return this.descripcionGroup.get('objetivo').invalid && this.descripcionGroup.get('objetivo').touched;
  }
  get fechaInvalid() {
    return this.descripcionGroup.get('fecha').invalid && this.descripcionGroup.get('fecha').touched;
  }
  get dependenciaInvalid() {
    return this.descripcionGroup.get('dependencia').invalid && this.descripcionGroup.get('dependencia').touched;
  }
  get justificacionInvalid() {
    return this.descripcionGroup.get('justificacion').invalid && this.descripcionGroup.get('justificacion').touched;
  }
  get facultadInvalid() {
    return this.descripcionGroup.get('facultad').invalid && this.descripcionGroup.get('facultad').touched;
  }
  get proyectoInvalid() {
    return this.descripcionGroup.get('proyecto').invalid && this.descripcionGroup.get('proyecto').touched;
  }
  get codConvenioInvalid() {
    return this.descripcionGroup.get('codConvenio').invalid && this.descripcionGroup.get('codConvenio').touched;
  }
  get convenioInvalid() {
    return this.descripcionGroup.get('convenio').invalid && this.descripcionGroup.get('convenio').touched;
  }
  get codInvestigacionInvalid() {
    return this.descripcionGroup.get('codInvestigacion').invalid && this.descripcionGroup.get('codInvestigacion').touched;
  }
  get investigacionInvalid() {
    return this.descripcionGroup.get('investigacion').invalid && this.descripcionGroup.get('investigacion').touched;
  }

  createForm() {
    this.descripcionGroup = this.fb.group({
      ordenadorGasto: ['', Validators.required],
      objetivo: ['', Validators.required],
      fecha: [''],
      dependencia: ['', Validators.required],
      justificacion: ['', Validators.required],
      facultad: ['', Validators.required],
      proyecto: ['', Validators.required],
      codConvenio: ['', Validators.required],
      convenio: ['', Validators.required],
      codInvestigacion: ['', Validators.required],
      investigacion: ['', Validators.required],
    });
  }

  saveForm() {
    if (this.descripcionGroup.invalid) {
      return Object.values(this.descripcionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
