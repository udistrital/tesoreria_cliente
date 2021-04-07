import { Component, OnInit, ViewChild } from '@angular/core';
import { SetProcesoadquisicionComponent } from '../set-procesoadquisicion/set-procesoadquisicion.component';
import { SetInfoinversioninicialComponent } from '../set-infoinversioninicial/set-infoinversioninicial.component';
import { SetContabilizacionComponent } from '../set-contabilizacion/set-contabilizacion.component';
import { ShowDetalleadquisicionComponent } from '../show-detalleadquisicion/show-detalleadquisicion.component';
import { FormBuilder } from '@angular/forms';
import { selectRendimientos } from '../../selectors/adquisicion.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ngx-stepper-registro',
  templateUrl: './stepper-registro.component.html',
  styleUrls: ['./stepper-registro.component.scss']
})
export class StepperRegistroComponent implements OnInit {
  @ViewChild(SetProcesoadquisicionComponent, { static: false }) setProcesoadquisicionComponent: SetProcesoadquisicionComponent;
  @ViewChild(SetInfoinversioninicialComponent, { static: false }) setInfoinversioninicialComponent: SetInfoinversioninicialComponent;
  @ViewChild(SetContabilizacionComponent, { static: false }) setContabilizacionComponent: SetContabilizacionComponent;
  @ViewChild(ShowDetalleadquisicionComponent, { static: false }) showDetalleadquisicionComponent: ShowDetalleadquisicionComponent;
  subscription$: any;
  Rendimientos: string;

  constructor(private fb: FormBuilder, private store: Store<any>) { 
    this.subscription$ = this.store.select(selectRendimientos).subscribe((valor) => {
      if (valor && valor.inversionstate)
        this.Rendimientos = valor.inversionstate;
    });
  }

  ngOnInit() {
  }

  get infoAdquisicionGroup() {
    return this.setProcesoadquisicionComponent ? this.setProcesoadquisicionComponent.infoAdquisicionGroup : this.fb.group({});
  }
  get inversionInicialGroup() {
    return this.setInfoinversioninicialComponent ? this.setInfoinversioninicialComponent.inversionInicialGroup : this.fb.group({});
  }
  get contabilizacionGroup() {
    return this.setContabilizacionComponent ? this.setContabilizacionComponent.contabilizacionGroup : this.fb.group({});
  }
  get detalleAdquisicionGroup() {
    return this.showDetalleadquisicionComponent ? this.showDetalleadquisicionComponent.detalleAdquisicionGroup : this.fb.group({});
  }

}
