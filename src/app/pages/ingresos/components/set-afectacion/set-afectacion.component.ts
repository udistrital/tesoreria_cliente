import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CONF_RUBROS } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-set-afectacion',
  templateUrl: './set-afectacion.component.html',
  styleUrls: ['./set-afectacion.component.scss']
})
export class SetAfectacionComponent implements OnInit {

  @Output () validarRubros: EventEmitter <any>;
  @Output () informacionRubros: EventEmitter <any>;

  configuration: any;
  datos: any;
  rubrosForm: FormGroup;
  mensaje: boolean = false;

  numerosRubros: any = [
    '2.1.02.05.01.1.1.1.2.2.1',
    '2.1.02.05.01.1.1.1.2.2.2',
    '2.1.02.05.01.1.1.1.2.2.3',
    '2.1.02.05.01.1.1.1.2.2.4',
  ];

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.datos = [];
    this.rubrosForm = this.formBuilder.group({
      numeroRubro: ['', Validators.required]
    });
    this.configuration = CONF_RUBROS;
    this.validarRubros = new EventEmitter;
    this.informacionRubros = new EventEmitter;
   }

  ngOnInit() {
  }

  agregar() {
    if (this.rubrosForm.valid) {
      this.mensaje = false;
      this.datos.push({
        numeroRubro: this.rubrosForm.value.numeroRubro,
        nombreRubro: 'Programas de pregrado',
        valor: 345482934
      });
      this.validarRubros.emit(true);
    } else {
      this.mensaje = true;
    }
  }

  aprobar() {
    if (this.datos.length === 0) {
      Swal.fire({
        type: 'error',
        title: '¡Error!',
        text: 'Debe modificar al menos un rubro',
        confirmButtonText: 'Aceptar',
      });
    } else {
      this.informacionRubros.emit(this.datos);
    }
  }

  totalAportes() {
    return 345482934;
  }

}
