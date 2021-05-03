import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DATOS_ANEXOS, CONFIGURACION_ANEXOS } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-set-anexos',
  templateUrl: './set-anexos.component.html',
  styleUrls: ['./set-anexos.component.scss']
})
export class SetAnexosComponent implements OnInit {

  anexosGroup: FormGroup;
  modalAnexosGroup: FormGroup;

  archivo: any;
  // Datos de las tablas
  configAnexos: any;
  datosAnexos: any;

  constructor(private fb: FormBuilder, private modalService: NgbModal) {
    this.createForm();

    this.configAnexos = CONFIGURACION_ANEXOS;
    this.datosAnexos = DATOS_ANEXOS;
  }

  ngOnInit() {
  }

  createForm() {
    this.anexosGroup = this.fb.group({
      justificacion: ['', Validators.required],
    });
    this.modalAnexosGroup = this.fb.group({
      fechaPago: ['', Validators.required],
      numeroComprobante: ['', Validators.required],
      periodo: ['', Validators.required],
      valorPagado: ['', Validators.required],
    });
  }

  isInvalid(nombre: string) {
    const input = this.anexosGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  isInvalidModal(nombre: string) {
    const input = this.modalAnexosGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.anexosGroup.invalid) {
      return Object.values(this.anexosGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
    if (this.modalAnexosGroup.invalid) {
      return Object.values(this.modalAnexosGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  // Adjuntar un archivo
  prepareFileList(files: Array<any>) {
    this.archivo = files[0];
  }

}
