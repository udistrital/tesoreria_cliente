import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { GetVigenciaActual, LoadAreaFuncional, LoadCentroGestor } from '../../../../../shared/actions/shared.actions';
import { getAreaFuncional, getVigenciaActual } from '../../../../../shared/selectors/shared.selectors';
import { ProyeccionServiceService } from '../../services/proyeccion-service.service';

@Component({
  selector: 'ngx-form-fuentes',
  templateUrl: './form-fuentes.component.html',
  styleUrls: ['./form-fuentes.component.scss']
})
export class FormFuentesComponent implements OnInit, OnDestroy {

  FuenteFinanciamientoForm: FormGroup;
  FuentesFinanciamiento: any;
  subscription$: any;
  Fuentes: any[];
  MostrarFuentes: boolean;

  constructor(
    private fb: FormBuilder,
    private proyeccionService: ProyeccionServiceService,
    private store: Store<any>
  ) {
    this.Fuentes = [
      {
        Vigencia: 2020,
        Nombre: 'Recursos del Balance Estampilla UD Ley 1825 de 2020',
        Descripcion: 'Recursos del Balance Estampilla UD Ley 1825 de 2020',
        Codigo: '2414',
        TipoFuente: null,
        ValorInicial: 20000000000,
        ValorActual: 20000000000,
        Estado: 'distribuida',
        Rubros: {},
        NumeroDocumento: '34689',
        TipoDocumento: 'RESOLUCION',
        UnidadEjecutora: '1',
        Movimientos: {}
      }
    ];
    this.MostrarFuentes = true;
    this.store.dispatch(LoadCentroGestor({
      CentroGestor: 230,
    }));
    this.store.dispatch(LoadAreaFuncional({
      Id: 1,
      Nombre: 'Rector',
      label: '01 - Rector',
    }));
    this.store.dispatch(GetVigenciaActual({ offset: 0 }));
    this.CreatFuenteFinanciamientoForm();
  }
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
  ngOnInit() {
    this.subscription$ = combineLatest([
      this.store.select(getVigenciaActual),
      this.store.select(getAreaFuncional),
    ]).subscribe(([vigencia, area]) => {

      if (vigencia && area) {
        const query = {
          Vigencia: vigencia[0].valor,
          UnidadEjecutora: area.Id,
        };
        this.proyeccionService.getFuentesFinanciamiento(null, query).subscribe((fuentesAsociadas: any) => {
          this.FuentesFinanciamiento = fuentesAsociadas;
        });
      }
    });
  }
  CreatFuenteFinanciamientoForm() {
    this.FuenteFinanciamientoForm = this.fb.group({
      FuenteSeleccionada: [null, [Validators.required]],
    });
  }
  AgregarFuente() {
    const fuente = JSON.parse(JSON.stringify(this.Fuentes));
    this.MostrarFuentes = true;
    fuente.push(this.FuenteFinanciamientoForm.value.FuenteSeleccionada);
    this.Fuentes = fuente;
  }
  QuitarFuente(index: any) {
    const fuente = JSON.parse(JSON.stringify(this.Fuentes));
    fuente.splice(index, 1);
    this.Fuentes = fuente;
    if (Object.keys(this.Fuentes).length === 0) {
      this.MostrarFuentes = false;
    }
  }
}
