import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DATOS_TABLARENDIMIENTOS, CONFIGURACION_TABLARENDIMIENTOS } from '../../interfaces/interfaces';
import { SetContabilizacionComponent } from '../set-contabilizacion/set-contabilizacion.component';

@Component({
  selector: 'ngx-rendimientos',
  templateUrl: './rendimientos.component.html',
  styleUrls: ['./rendimientos.component.scss']
})
export class RendimientosComponent implements OnInit {
  @ViewChild(SetContabilizacionComponent, { static: false }) setContabilizacionComponent: SetContabilizacionComponent;


  causacionResumenGroup: FormGroup;
  // contabilizacionGroup: FormGroup;
  guardarRendimientoGroup: FormGroup;

  configRendimientos: any;
  datosRendimientos: any;

  closeResult = '';

  constructor(private fb: FormBuilder) {
    this.datosRendimientos = DATOS_TABLARENDIMIENTOS;
    this.configRendimientos = CONFIGURACION_TABLARENDIMIENTOS;
   }

  ngOnInit() {
    // this.createForm();
    this.causacionResumenGroup = this.fb.group({
    });
    this.guardarRendimientoGroup = this.fb.group({
    });
  }

  get contabilizacionGroup() {
    return this.setContabilizacionComponent ? this.setContabilizacionComponent.contabilizacionGroup : this.fb.group({});
  }


}
