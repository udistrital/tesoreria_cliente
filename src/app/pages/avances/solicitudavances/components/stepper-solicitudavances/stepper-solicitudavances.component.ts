import { Component, OnInit, ViewChild } from '@angular/core';
import { SetInfofuncionarioComponent } from '../set-infofuncionario/set-infofuncionario.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-stepper-solicitudavances',
  templateUrl: './stepper-solicitudavances.component.html',
  styleUrls: ['./stepper-solicitudavances.component.scss']
})
export class StepperSolicitudavancesComponent implements OnInit {
  @ViewChild(SetInfofuncionarioComponent, { static: false }) setInfofuncionarioComponent: SetInfofuncionarioComponent;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get infoFuncionarioGroup() {
    return this.setInfofuncionarioComponent ? this.setInfofuncionarioComponent.infoFuncionarioGroup : this.fb.group({});
  }

}
