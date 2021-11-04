import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { OPCIONES_AREA_FUNCIONAL } from '../../../../../shared/interfaces/interfaces';

@Component({
  selector: 'ngx-create-cuenta',
  templateUrl: './create-cuenta.component.html',
  styleUrls: ['./create-cuenta.component.scss']
})
export class CreateCuentaComponent implements OnInit {
  @ViewChild('modalGuardar', {static: false}) modalGuardar: ElementRef;

  opcionesAreaFuncional: any;

  // Formulario
  crearCuentaBancariaGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.opcionesAreaFuncional = OPCIONES_AREA_FUNCIONAL;
   }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.crearCuentaBancariaGroup = this.fb.group({
      areaFuncional: ['', Validators.required],
      recurso: ['', Validators.required],
      fuenteFinanciamiento: ['', Validators.required],
      nombreCuenta: ['', Validators.required],
      numeroCuenta: ['', Validators.required],
      tipoCuenta: ['', Validators.required],
      pagadora: ['', Validators.required],
      recaudadora: ['', Validators.required],
      cuatropormil: ['', Validators.required],
      saldoBanco: ['', Validators.required],
      saldoCuentaContable: ['', Validators.required],
      moneda: ['', Validators.required],
    });

  }

  isInvalid(nombre: string) {
    const input = this.crearCuentaBancariaGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

}
