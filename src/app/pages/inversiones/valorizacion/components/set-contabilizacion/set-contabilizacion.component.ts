import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CONFIGURACION_CONTABILIZACION, DATOS_CONTABILIZACION } from '../../../valorizacion/interfaces/interfaces';

@Component({
  selector: 'ngx-set-contabilizacion',
  templateUrl: './set-contabilizacion.component.html',
  styleUrls: ['./set-contabilizacion.component.scss']
})
export class SetContabilizacionComponent implements OnInit {

  contabilizacionGroup: FormGroup;
  // Datos de las tablas
  configValorizacion: any;
  datosValorizacion: any;

  constructor(private fb: FormBuilder, private modalService: NgbModal) {
    this.createForm();

    this.configValorizacion = CONFIGURACION_CONTABILIZACION;
    this.datosValorizacion = DATOS_CONTABILIZACION;
  }

  ngOnInit() {
  }

  createForm() {
    this.contabilizacionGroup = this.fb.group({
      tipoComprobante: ['', Validators.required],
      numeroComprobante: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]],
      consecutivo: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]],
      concepto: ['', Validators.required],
    });
  }

  isInvalid(nombre: string) {
    const input = this.contabilizacionGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.contabilizacionGroup.invalid) {
      return Object.values(this.contabilizacionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

 // Funciones para descargar comprobantes contables
 modalComprobante(contabilizacionModal) {
   this.modalService.open(contabilizacionModal, { size: 'xl' });
  }

}
