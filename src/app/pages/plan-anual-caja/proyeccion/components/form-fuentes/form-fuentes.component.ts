import { Component, OnInit } from '@angular/core';
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
export class FormFuentesComponent implements OnInit {

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
    this.Fuentes = [];
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
    this.Fuentes.splice(index, 1);
    if (Object.keys(this.Fuentes).length === 0) {
      this.MostrarFuentes = false;
    }
  }
}
