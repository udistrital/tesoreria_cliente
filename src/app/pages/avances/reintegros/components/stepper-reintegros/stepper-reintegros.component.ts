import { Component, OnInit, ViewChild } from '@angular/core';
import { SetContabilizacionComponent } from '../set-contabilizacion/set-contabilizacion.component';
import { SetInfoafectacionComponent } from '../set-infoafectacion/set-infoafectacion.component';
import { SetInforeintegroComponent } from '../set-inforeintegro/set-inforeintegro.component';
import { ShowDetallereintegroComponent } from '../show-detallereintegro/show-detallereintegro.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-stepper-reintegros',
  templateUrl: './stepper-reintegros.component.html',
  styleUrls: ['./stepper-reintegros.component.scss']
})
export class StepperReintegrosComponent implements OnInit {
  @ViewChild(SetInforeintegroComponent, { static: false }) setInforeintegroComponent: SetInforeintegroComponent;
  @ViewChild(SetInfoafectacionComponent, { static: false }) setInfoafectacionComponent: SetInfoafectacionComponent;
  @ViewChild(SetContabilizacionComponent, { static: false }) setContabilizacionComponent: SetContabilizacionComponent;
  @ViewChild(ShowDetallereintegroComponent, { static: false }) showDetallereintegroComponent: ShowDetallereintegroComponent;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get infoReintegroGroup() {
    return this.setInforeintegroComponent ? this.setInforeintegroComponent.infoReintegroGroup : this.fb.group({});
  }
  get infoAfectacionGroup() {
    return this.setInfoafectacionComponent ? this.setInfoafectacionComponent.infoAfectacionGroup : this.fb.group({});
  }
  get contabilizacionGroup() {
    return this.setContabilizacionComponent ? this.setContabilizacionComponent.contabilizacionGroup : this.fb.group({});
  }
  get detalleReintegroGroup() {
    return this.showDetallereintegroComponent ? this.showDetallereintegroComponent.detalleReintegroGroup : this.fb.group({});
  }

}
