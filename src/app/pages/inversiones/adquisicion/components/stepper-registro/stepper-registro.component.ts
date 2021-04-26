import { Component, OnInit, ViewChild } from '@angular/core';
import { SetProcesoadquisicionComponent } from '../set-procesoadquisicion/set-procesoadquisicion.component';
import { SetInfoinversioninicialComponent } from '../set-infoinversioninicial/set-infoinversioninicial.component';
import { SetContabilizacionComponent } from '../set-contabilizacion/set-contabilizacion.component';
import { ShowDetalleadquisicionComponent } from '../show-detalleadquisicion/show-detalleadquisicion.component';
import { FormBuilder } from '@angular/forms';
import { SetProcesoreinversionComponent } from '../set-procesoreinversion/set-procesoreinversion.component';

@Component({
  selector: 'ngx-stepper-registro',
  templateUrl: './stepper-registro.component.html',
  styleUrls: ['./stepper-registro.component.scss']
})
export class StepperRegistroComponent implements OnInit {
  @ViewChild(SetProcesoadquisicionComponent, { static: false }) setProcesoadquisicionComponent: SetProcesoadquisicionComponent;
  @ViewChild(SetProcesoreinversionComponent, { static: false }) setProcesoreinversionComponent: SetProcesoreinversionComponent;
  @ViewChild(SetInfoinversioninicialComponent, { static: false }) setInfoinversioninicialComponent: SetInfoinversioninicialComponent;
  @ViewChild(SetContabilizacionComponent, { static: false }) setContabilizacionComponent: SetContabilizacionComponent;
  @ViewChild(ShowDetalleadquisicionComponent, { static: false }) showDetalleadquisicionComponent: ShowDetalleadquisicionComponent;

  tipoInversion: any;

  constructor(private fb: FormBuilder) {
    this.tipoInversion = 'adquisicion';
    // this.tipoInversion = 'reinversion';
  }

  ngOnInit() {
  }

  get infoAdquisicionGroup() {
    return this.setProcesoadquisicionComponent ? this.setProcesoadquisicionComponent.infoAdquisicionGroup : this.fb.group({});
  }
  get infoReinversionGroup() {
    return this.setProcesoreinversionComponent ? this.setProcesoreinversionComponent.infoReinversionGroup : this.fb.group({});
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
