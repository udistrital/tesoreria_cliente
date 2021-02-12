import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectTipoLegalizacion } from '../../selectors/legalizacionavance.selectors';
import { SetInfolegalizacionComponent } from '../set-infolegalizacion/set-infolegalizacion.component';
import { SetInforesponsableComponent } from '../set-inforesponsable/set-inforesponsable.component';
import { SetPracticasacademicasComponent } from '../set-practicasacademicas/set-practicasacademicas.component';

@Component({
  selector: 'ngx-set-legalizacion',
  templateUrl: './set-legalizacion.component.html',
  styleUrls: ['./set-legalizacion.component.scss']
})
export class SetLegalizacionComponent implements OnInit, OnDestroy {
  @ViewChild(SetInforesponsableComponent, { static: false }) setInforesponsableComponent: SetInforesponsableComponent;
  @ViewChild(SetInfolegalizacionComponent, { static: false }) setInfolegalizacionComponent: SetInfolegalizacionComponent;
  @ViewChild(SetPracticasacademicasComponent, { static: false }) setPracticasacademicasComponent: SetPracticasacademicasComponent;
  subscription$: any;
  tipoLegalizacion: string;

  constructor(private fb: FormBuilder, private store: Store<any>) { 
    this.subscription$ = this.store.select(selectTipoLegalizacion).subscribe((valor) => {
      if (valor && valor.tipoInforme)
        this.tipoLegalizacion = valor.tipoInforme;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription$.unsubscribe();
  }

  get infoResponsableGroup() {
    return this.setInforesponsableComponent ? this.setInforesponsableComponent.datosResponsable : this.fb.group({});
  }

  get infoLegalizacionGroup() {
    return this.setInfolegalizacionComponent ? this.setInfolegalizacionComponent.datosLegalizacion : this.fb.group({});
  }

  get infoPracticasAcademicasGroup() {
    return this.setPracticasacademicasComponent ? this.setPracticasacademicasComponent.datosPracticas : this.fb.group({});
  }
}
