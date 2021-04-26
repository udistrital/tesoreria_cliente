import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SetDatosdeclaracionComponent } from '../set-datosdeclaracion/set-datosdeclaracion.component';
import { SetDetalledeclaracionComponent } from '../set-detalledeclaracion/set-detalledeclaracion.component';
import { SetResumendeclaracionComponent } from '../set-resumendeclaracion/set-resumendeclaracion.component';

@Component({
  selector: 'ngx-set-stepperdeclaracion',
  templateUrl: './set-stepperdeclaracion.component.html',
  styleUrls: ['./set-stepperdeclaracion.component.scss']
})
export class SetStepperdeclaracionComponent implements OnInit {
  @ViewChild(SetDatosdeclaracionComponent, { static: false }) setDatosdeclaracionComponent: SetDatosdeclaracionComponent;
  @ViewChild(SetDetalledeclaracionComponent, { static: false }) setDetalledeclaracionComponent: SetDetalledeclaracionComponent;
  @ViewChild(SetResumendeclaracionComponent, { static: false }) setResumendeclaracionComponent: SetResumendeclaracionComponent;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get datosDeclaracionGroup() {
    return this.setDatosdeclaracionComponent ? this.setDatosdeclaracionComponent.datosDeclaracionGroup : this.fb.group({});
  }
  get detalleDeclaracionGroup() {
    return this.setDetalledeclaracionComponent ? this.setDetalledeclaracionComponent.detalleDeclaracionGroup : this.fb.group({});
  }
  get resumenDeclaracionGroup() {
    return this.setResumendeclaracionComponent ? this.setResumendeclaracionComponent.resumenDeclaracionGroup : this.fb.group({});
  }

}
