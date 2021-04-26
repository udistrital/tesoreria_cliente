import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SetInforegistroComponent } from '../set-inforegistro/set-inforegistro.component';
import { SetDatosvalorizacionComponent } from '../set-datosvalorizacion/set-datosvalorizacion.component';
import { SetContabilizacionComponent } from '../set-contabilizacion/set-contabilizacion.component';
import { ShowDetallevalorizacionComponent } from '../show-detallevalorizacion/show-detallevalorizacion.component';

@Component({
  selector: 'ngx-stepper-valorizacion',
  templateUrl: './stepper-valorizacion.component.html',
  styleUrls: ['./stepper-valorizacion.component.scss']
})
export class StepperValorizacionComponent implements OnInit {
  @ViewChild(SetInforegistroComponent, { static: false }) setInforegistroComponent: SetInforegistroComponent;
  @ViewChild(SetDatosvalorizacionComponent, { static: false }) setDatosvalorizacionComponent: SetDatosvalorizacionComponent;
  @ViewChild(SetContabilizacionComponent, { static: false }) setContabilizacionComponent: SetContabilizacionComponent;
  @ViewChild(ShowDetallevalorizacionComponent, { static: false }) showDetallevalorizacionComponent: ShowDetallevalorizacionComponent;

  tituloProceso: string;

  constructor(private fb: FormBuilder) {
    this.tituloProceso = this.tituloProceso ? 'VALORIZACIÓN' : 'DESVALORIZACIÓN';
  }

  ngOnInit() {
  }

  get infoRegistroGroup() {
    return this.setInforegistroComponent ? this.setInforegistroComponent.infoRegistroGroup : this.fb.group({});
  }
  get datosValorizacionGroup() {
    return this.setDatosvalorizacionComponent ? this.setDatosvalorizacionComponent.datosValorizacionGroup : this.fb.group({});
  }
  get contabilizacionGroup() {
    return this.setContabilizacionComponent ? this.setContabilizacionComponent.contabilizacionGroup : this.fb.group({});
  }
  get detalleValorizacionGroup() {
    return this.showDetallevalorizacionComponent ? this.showDetallevalorizacionComponent.detalleValorizacionGroup : this.fb.group({});
  }

}
