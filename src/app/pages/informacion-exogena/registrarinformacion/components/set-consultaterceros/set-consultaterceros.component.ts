import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CONFIGURACION_CONSULTATERCEROS, DATOS_CONSULTATERCEROS } from '../../interfaces/interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-set-consultaterceros',
  templateUrl: './set-consultaterceros.component.html',
  styleUrls: ['./set-consultaterceros.component.scss']
})
export class SetConsultatercerosComponent implements OnInit {

  consultaIndividualGroup: FormGroup;
  consultaTercerosGroup: FormGroup;

  configConsultaterceros: any;
  datosConsultaterceros: any;
  busqueda: any;
  archivo: any;

  constructor( private fb: FormBuilder, private modalService: NgbModal ) {
    this.datosConsultaterceros = DATOS_CONSULTATERCEROS;
    this.configConsultaterceros = CONFIGURACION_CONSULTATERCEROS;

    // this.busqueda = 'individual';
    this.busqueda = 'masiva';
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.consultaTercerosGroup = this.fb.group({
      busqueda: ['', Validators.required],
    });
  }

  isInvalid(nombre: string) {
    const input = this.consultaTercerosGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  // Adjuntar un archivo
  prepareFileList(files: Array<any>) {
    this.archivo = files[0];
  }

  saveForm() {
    if (this.consultaTercerosGroup.invalid) {
      return Object.values(this.consultaTercerosGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
  // Funcion para exportar
  exportar(exportarInfoModal) {
    this.modalService.open(exportarInfoModal, { size: 'xl' });
  }

}
