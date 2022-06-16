import { TranslateFormItemsService } from './../../../../../shared/helpers/translate-form-items.service';
import { Component, OnInit } from '@angular/core';
import { CONF_RUBROS, DATOS_CONCEPTOS, DATOS_RUBROS, CONF_CONCEPTOS } from '../../interfaces/interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-set-rubros',
  templateUrl: './set-rubros.component.html',
  styleUrls: ['./set-rubros.component.scss']
})
export class SetRubrosComponent implements OnInit {

  configurationRubro: any;
  datosRubros: any;

  configurationConcepto: any;
  datosConceptos: any;
  conceptoForm: FormGroup;

  totalGirar: any;

  mensaje: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private translateHelper: TranslateFormItemsService,
  ) {
    this.conceptoForm = this.formBuilder.group({
      numeroConcepto: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.mensaje = false;
    this.translateTableConfiguracion();
    this.configurationConcepto = CONF_CONCEPTOS;
    this.datosRubros = DATOS_RUBROS;
    this.datosConceptos = DATOS_CONCEPTOS;
  }

  agregar() {
    if (this.conceptoForm.valid) {
      this.mensaje = false;
      DATOS_CONCEPTOS.push({
        numeroConcepto: this.conceptoForm.value.numeroConcepto,
        concepto: 'ICBF',
        valorTotal: 273478
      });
    } else {
      this.mensaje = true;
    }
  }

  totalGasto() {
    return this.totalGirar = this.datosConceptos.reduce((a: any, b: { valorTotal: number; }) => a + b.valorTotal, 0);
  }

  private translateTableConfiguracion(): void {
    this.configurationRubro = this.translateHelper.translateItemTableConfiguration(CONF_RUBROS);
  }

}
