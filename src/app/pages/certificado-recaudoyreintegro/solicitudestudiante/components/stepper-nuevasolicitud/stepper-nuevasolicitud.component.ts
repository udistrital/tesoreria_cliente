import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SetNuevasolicitudComponent } from '../set-nuevasolicitud/set-nuevasolicitud.component';
import { SetDatosgeneralesComponent } from '../set-datosgenerales/set-datosgenerales.component';
import { SetAnexosComponent } from '../set-anexos/set-anexos.component';
import { ShowDetallesolicitudComponent } from '../show-detallesolicitud/show-detallesolicitud.component';

@Component({
  selector: 'ngx-stepper-nuevasolicitud',
  templateUrl: './stepper-nuevasolicitud.component.html',
  styleUrls: ['./stepper-nuevasolicitud.component.scss']
})
export class StepperNuevasolicitudComponent implements OnInit {
  @ViewChild(SetNuevasolicitudComponent, { static: false }) setNuevasolicitudComponent: SetNuevasolicitudComponent;
  @ViewChild(SetDatosgeneralesComponent, { static: false }) setDatosgeneralesComponent: SetDatosgeneralesComponent;
  @ViewChild(SetAnexosComponent, { static: false }) setAnexosComponent: SetAnexosComponent;
  @ViewChild(ShowDetallesolicitudComponent, { static: false }) showDetallesolicitudComponent: ShowDetallesolicitudComponent;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get infoNuevasolicitudGroup() {
    return this.setNuevasolicitudComponent ? this.setNuevasolicitudComponent.infoNuevasolicitudGroup : this.fb.group({});
  }
  get datosGeneralesGroup() {
    return this.setDatosgeneralesComponent ? this.setDatosgeneralesComponent.datosGeneralesGroup : this.fb.group({});
  }
  get anexosGroup() {
    return this.setAnexosComponent ? this.setAnexosComponent.anexosGroup : this.fb.group({});
  }
  get detalleSolicitudGroup() {
    return this.showDetallesolicitudComponent ? this.showDetallesolicitudComponent.detalleSolicitudGroup : this.fb.group({});
  }

}
