import { Component, OnInit, ViewChild } from '@angular/core';
import { SetGenerarcertificadoComponent } from '../set-generarcertificado/set-generarcertificado.component';
import { SetConsultaingresosComponent } from '../set-consultaingresos/set-consultaingresos.component';
import { SetResumencertificadoComponent } from '../set-resumencertificado/set-resumencertificado.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-stepper-certificaciones',
  templateUrl: './stepper-certificaciones.component.html',
  styleUrls: ['./stepper-certificaciones.component.scss']
})
export class StepperCertificacionesComponent implements OnInit {
  @ViewChild(SetGenerarcertificadoComponent, { static: false }) setGenerarcertificadoComponent: SetGenerarcertificadoComponent;
  @ViewChild(SetConsultaingresosComponent, { static: false }) setConsultaingresosComponent: SetConsultaingresosComponent;
  @ViewChild(SetResumencertificadoComponent, { static: false }) setResumencertificadoComponent: SetResumencertificadoComponent;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get consultaRecibosGroup() {
    return this.setGenerarcertificadoComponent ? this.setGenerarcertificadoComponent.consultaRecibosGroup : this.fb.group({});
  }
  get consultaIngresosGroup() {
    return this.setConsultaingresosComponent ? this.setConsultaingresosComponent.consultaIngresosGroup : this.fb.group({});
  }
  get resumenCertificadoGroup() {
    return this.setResumencertificadoComponent ? this.setResumencertificadoComponent.resumenCertificadoGroup : this.fb.group({});
  }


}
