import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { MockService } from '../../../../../shared/services/mock.service';
import { cargarDatosResponsableLegalizacion, loadTipoLegalizacion } from '../../actions/legalizacionavance.actions';

@Component({
  selector: 'ngx-set-inforesponsable',
  templateUrl: './set-inforesponsable.component.html',
  styleUrls: ['./set-inforesponsable.component.scss']
})
export class SetInforesponsableComponent implements OnInit, OnDestroy, OnDestroy {
  datosResponsable: FormGroup;
  opcionesAreaFuncional: any;
  subTipoInforme$: any;
  susDatosSolicitante$: any;

  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private mockService: MockService,
    ) {
    this.crearFormulario();
  }

  ngOnInit() {
    this.mockService.getAreasFuncionales().subscribe((res) => {
      this.opcionesAreaFuncional = res;
    });

    this.subTipoInforme$ = this.datosResponsable.get('tipoInforme').valueChanges.subscribe(valor => {
      if (this.datosResponsable.get('tipoInforme').valid)
        this.store.dispatch(loadTipoLegalizacion({ tipoInforme: valor }));
    });

    this.susDatosSolicitante$ = this.datosResponsable.valueChanges.subscribe(valor => {
      if (this.datosResponsable.valid)
        this.store.dispatch(cargarDatosResponsableLegalizacion({ datosResponsable: valor }));
    });
  }

  ngOnDestroy() {
    this.subTipoInforme$.unsubscribe();
    this.susDatosSolicitante$.unsubscribe();
    this.store.dispatch(LoadFilaSeleccionada(null));
  }

  crearFormulario() {
    this.datosResponsable = this.fb.group({
      tipoId: ['', Validators.required],
      numeroId: ['', Validators.required],
      areaFuncional: ['', Validators.required],
      tipoInforme: ['', Validators.required]
    });
  }

  validarFormulario() {
    if (this.datosResponsable.invalid) {
      return Object.values(this.datosResponsable.controls).forEach(control => {
        control.markAsDirty();
      });
    }
  }

  esInvalido(nombre: string) {
    const input = this.datosResponsable.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

}
