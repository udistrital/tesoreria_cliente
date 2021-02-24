import { Component, OnInit, ViewChild } from '@angular/core';
import { SetInfofuncionarioComponent } from '../set-infofuncionario/set-infofuncionario.component';
import { FormBuilder } from '@angular/forms';
import { SetDescripcionComponent } from '../set-descripcion/set-descripcion.component';
import { SetTipoavanceComponent } from '../set-tipoavance/set-tipoavance.component';
import { ShowDetalleavanceComponent } from '../show-detalleavance/show-detalleavance.component';

@Component({
  selector: 'ngx-stepper-solicitudavances',
  templateUrl: './stepper-solicitudavances.component.html',
  styleUrls: ['./stepper-solicitudavances.component.scss']
})
export class StepperSolicitudavancesComponent implements OnInit {
  @ViewChild(SetInfofuncionarioComponent, { static: false }) setInfofuncionarioComponent: SetInfofuncionarioComponent;
  @ViewChild(SetDescripcionComponent, { static: false }) setDescripcionComponent: SetDescripcionComponent;
  @ViewChild(SetTipoavanceComponent, { static: false }) setTipoavanceComponent: SetTipoavanceComponent;
  @ViewChild(ShowDetalleavanceComponent, { static: false }) showDetalleavanceComponent: ShowDetalleavanceComponent;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get infoFuncionarioGroup() {
    return this.setInfofuncionarioComponent ? this.setInfofuncionarioComponent.infoFuncionarioGroup : this.fb.group({});
  }
  get descripcionGroup() {
    return this.setDescripcionComponent ? this.setDescripcionComponent.descripcionGroup : this.fb.group({});
  }
  get tipoAvanceGroup() {
    return this.setTipoavanceComponent ? this.setTipoavanceComponent.tipoAvanceGroup : this.fb.group({});
  }
  get detalleAvanceGroup() {
    return this.showDetalleavanceComponent ? this.showDetalleavanceComponent.detalleAvanceGroup : this.fb.group({});
  }

}
