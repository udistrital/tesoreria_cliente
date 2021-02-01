import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-set-infofuncionario',
  templateUrl: './set-infofuncionario.component.html',
  styleUrls: ['./set-infofuncionario.component.scss']
})
export class SetInfofuncionarioComponent implements OnInit {
  infoFuncionarioGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

    // Validacion del Formulario
    get conceptoInvalid() {
      return this.infoFuncionarioGroup.get('concepto').invalid && this.infoFuncionarioGroup.get('concepto').touched;
    }
    get areaInvalid() {
      return this.infoFuncionarioGroup.get('areaFuncional').invalid && this.infoFuncionarioGroup.get('areaFuncional').touched;
    }
    get tipoIdInvalid() {
      return this.infoFuncionarioGroup.get('tipoId').invalid && this.infoFuncionarioGroup.get('tipoId').touched;
    }
    get numeroIdInvalid() {
      return this.infoFuncionarioGroup.get('numeroId').invalid && this.infoFuncionarioGroup.get('numeroId').touched;
    }
    get cargoInvalid() {
      return this.infoFuncionarioGroup.get('cargo').invalid && this.infoFuncionarioGroup.get('cargo').touched;
    }

  createForm() {
    this.infoFuncionarioGroup = this.fb.group({
      concepto: ['', Validators.required],
      numeroSolicitud: ['001'],
      areaFuncional: ['', Validators.required],
      fechaSolicitud: [''],
      tipoId: ['', Validators.required],
      numeroId: ['',
        [Validators.required,
        Validators.pattern('^[0-9]*$')]],
      nombres: [''],
      apellidos: [''],
      cargo: ['', Validators.required],

    });
  }

  saveForm() {
    if (this.infoFuncionarioGroup.invalid) {
      return Object.values(this.infoFuncionarioGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
