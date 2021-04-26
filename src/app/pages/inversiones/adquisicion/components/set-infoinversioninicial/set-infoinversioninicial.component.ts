import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getNodoSeleccionado } from '../../../../../shared/selectors/shared.selectors';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'ngx-set-infoinversioninicial',
  templateUrl: './set-infoinversioninicial.component.html',
  styleUrls: ['./set-infoinversioninicial.component.scss']
})
export class SetInfoinversioninicialComponent implements OnInit {

  inversionInicialGroup: FormGroup;

  subscription$: any;
  tipoInversion: any;

  // Icono en la Lista de documentos
  mostrarOcultar: string;
  mostrarOcultarIcono: string;

  constructor(private fb: FormBuilder, private store: Store<any>) {
    this.tipoInversion = 'adquisicion';
    // this.tipoInversion = 'reinversion';

    // Icono en la Lista de documentos
    this.mostrarOcultar = 'Mostrar';
    this.mostrarOcultarIcono = 'fa-plus-square';
  }

  ngOnInit() {
    this.createForm();
    // Seleccionar Rubro
    this.subscription$ = this.store.select(getNodoSeleccionado).subscribe((nodo: any) => {
      if (nodo) {
        if (Object.keys(nodo)[0] === 'type') {
          // hay que crear un delay porque el cambio se efectua antes de renderizar la vista
          setTimeout(() => {
            this.inversionInicialGroup.get('rubroSeleccionado').setValue(null);
          });
        } else {
          if (!nodo.children) {
            this.inversionInicialGroup.get('rubroSeleccionado').setValue(nodo);
          }
        }
      }
    });
  }

  createForm() {
    this.inversionInicialGroup = this.fb.group({
      numeroOperacion: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]],
      fechaDocumento: ['', Validators.required],
      fechaAdquisicion: ['', Validators.required],
      fechaVencimiento: ['', Validators.required],
      termino: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]],
      tasa: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]],
      rendimientos: ['', Validators.required],
      valorRendimientos: ['', [
        Validators.required,
        RxwebValidators.numeric({allowDecimal: true})
      ]],
      otros: ['', Validators.required],
      observaciones: ['', Validators.required],
      valorNumero: ['', [
        Validators.required,
        RxwebValidators.numeric({allowDecimal: true})
      ]]
    });
  }

  isInvalid(nombre: string) {
    const input = this.inversionInicialGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.inversionInicialGroup.invalid) {
      return Object.values(this.inversionInicialGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  // Configuracion de Icono en lista documentos
  mostrarOcultarDatos(state: string) {
    if (state === 'false') {
      this.mostrarOcultarIcono = 'fa-minus-square';
    } else {
      this.mostrarOcultarIcono = 'fa-plus-square';
    }
  }

}
