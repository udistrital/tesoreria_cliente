import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getNodoSeleccionado } from '../../../../../shared/selectors/shared.selectors';

@Component({
  selector: 'ngx-set-infoinversioninicial',
  templateUrl: './set-infoinversioninicial.component.html',
  styleUrls: ['./set-infoinversioninicial.component.scss']
})
export class SetInfoinversioninicialComponent implements OnInit {

  inversionInicialGroup: FormGroup;

  subscription$: any;


  constructor(private fb: FormBuilder, private store: Store<any>) { }

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
        Validators.pattern('^[1-9]*\d{0,7}(?:\.\d{1,4})?|\.\d{1,4}$')
      ]],
      otros: ['', Validators.required],
      observaciones: ['', Validators.required],
      valorNumero: ['', [
        Validators.required,
        Validators.pattern('^[1-9]*\d{0,7}(?:\.\d{1,4})?|\.\d{1,4}$')
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

}
