import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'ngx-set-informacion',
  templateUrl: './set-informacion.component.html',
  styleUrls: ['./set-informacion.component.scss']
})
export class SetInformacionComponent implements OnInit {

  @Output () informacionForm: EventEmitter <any>;
  @Output () statusForm: EventEmitter <any>;

  boletinDiario: FormGroup;

  areaFuncional: String [] = [
    'Servicios',
    'Pagos',
    'Formatos'
  ];

  mensaje: boolean;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.informacionForm = new EventEmitter;
    this.statusForm = new EventEmitter;
   }

  ngOnInit() {
    this.mensaje = false;
    this.boletinDiario = this.formBuilder.group({
      areaFuncional: ['', Validators.required],
      fechaRegistro: ['', Validators.required],
    });
    this.handleChanges();
  }

  handleChanges() {
    this.boletinDiario.statusChanges.subscribe(
      result => {
        if (result === 'VALID') {
          this.statusForm.emit(true);
        } else {
          this.statusForm.emit(false);
        }
      }
    );
  }

  onSubmit(data: any) {
    if (this.boletinDiario.valid) {
      this.informacionForm.emit(data);
      this.mensaje = false;
    } else {
      this.validarFormulario();
      this.mensaje = true;
    }
  }

  esInvalido(nombre: string) {
    const input = this.boletinDiario.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  validarFormulario() {
    if (this.boletinDiario.invalid) {
      return Object.values(this.boletinDiario.controls).forEach(control => {
        control.markAsDirty();
      });
    }
  }

}
