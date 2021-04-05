import { Component, OnInit, ViewChild } from '@angular/core';
import { SetProcesoadquisicionComponent } from '../set-procesoadquisicion/set-procesoadquisicion.component';
import { SetInfoinversioninicialComponent } from '../set-infoinversioninicial/set-infoinversioninicial.component';
import { SetContabilizacionComponent } from '../set-contabilizacion/set-contabilizacion.component';
import { ShowDetalleadquisicionComponent } from '../show-detalleadquisicion/show-detalleadquisicion.component';
import { FormBuilder } from '@angular/forms';

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


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get infoAdquisicionGroup() {
    return this.setProcesoadquisicionComponent ? this.setProcesoadquisicionComponent.infoAdquisicionGroup : this.fb.group({});
  }
  get inversionInicialGroup() {
    return this.setInfoinversioninicialComponent ? this.setInfoinversioninicialComponent.inversionInicialGroup : this.fb.group({});
  }
  get causacionInicialGroup() {
    return this.setContabilizacionComponent ? this.setContabilizacionComponent.causacionInicialGroup : this.fb.group({});
  }
  get detalleAdquisicionGroup() {
    return this.showDetalleadquisicionComponent ? this.showDetalleadquisicionComponent.detalleAdquisicionGroup : this.fb.group({});
  }

}
