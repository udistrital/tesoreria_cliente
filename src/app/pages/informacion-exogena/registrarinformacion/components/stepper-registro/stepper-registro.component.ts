import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SetDatosregistroComponent } from '../set-datosregistro/set-datosregistro.component';
import { SetConsultainformacionComponent } from '../set-consultainformacion/set-consultainformacion.component';
import { SetConsultatercerosComponent } from '../set-consultaterceros/set-consultaterceros.component';

@Component({
  selector: 'ngx-stepper-registro',
  templateUrl: './stepper-registro.component.html',
  styleUrls: ['./stepper-registro.component.scss']
})
export class StepperRegistroComponent implements OnInit {
  @ViewChild(SetDatosregistroComponent, { static: false }) setDatosregistroComponent: SetDatosregistroComponent;
  @ViewChild(SetConsultainformacionComponent, { static: false }) setConsultainformacionComponent: SetConsultainformacionComponent;
  @ViewChild(SetConsultatercerosComponent, { static: false }) setConsultatercerosComponent: SetConsultatercerosComponent;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  get datosRegistroGroup() {
    return this.setDatosregistroComponent ? this.setDatosregistroComponent.datosRegistroGroup : this.fb.group({});
  }
  get consultaInformacionGroup() {
    return this.setConsultainformacionComponent ? this.setConsultainformacionComponent.consultaInformacionGroup : this.fb.group({});
  }
  get consultaTercerosGroup() {
    return this.setConsultatercerosComponent ? this.setConsultatercerosComponent.consultaTercerosGroup : this.fb.group({});
  }

}
