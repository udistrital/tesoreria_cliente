import { Component, OnInit, OnDestroy } from '@angular/core';
import { DATOS_CONSULTA } from '../../interfaces/interfaces';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SelectService } from '../../../../../shared/services/select.service';
import Swal from 'sweetalert2';
import { environment } from '../../../../../../environments/environment.test';

@Component({
  selector: 'ngx-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit, OnDestroy {

  datosConsulta: any;
  datosGuardados: any;
  justificacionDenegar: FormGroup;
  consultaForm: FormGroup;
  modal: NgbModalRef;
  necesidad: boolean = true;

  areaFuncional: String [] = [
    'Servicios',
    'Pagos',
    'Formatos'
  ];

  tiposDocumento: String [] = [
    'CC',
    'NIT',
    'TI'
  ];

  titlesConsulta: String[] = [ 'Consecutivo', 'Tipo orden de pago', 'Vigencia', 'N° CDP', 'Nombre de tercero', 'Valor', 'Estado'];
  attributesConsulta: any [] = [['consecutivo'], ['tipoOrdenPago'], ['vigencia'], ['cdp'], ['nombreTercero'], ['valor'], ['estado']];

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    public selection: SelectService
  ) {
    this.datosGuardados = DATOS_CONSULTA;
    this.datosConsulta  = [];
    this.selection.elementosElegidos = [];
  }
  ngOnDestroy () {
    if (this.modal !== undefined) {
      this.modal.close();
    }
  }

  ngOnInit() {
    this.justificacionDenegar = this.formBuilder.group({
      justificacion: [ '', Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ])],
    });
    this.consultaForm = this.formBuilder.group ({
      tipoId: [ '', Validators.required],
      numeroId: [ '', Validators.required]
    });
    this.datosConsulta = DATOS_CONSULTA;
  }

  open (content: any) {
    this.modal = this.modalService.open(content);
  }

  aprobar() {
    Swal.fire({
      type: 'success',
      title: '¡Aprobado!',
      text: 'Se ha aprobado la solicitud de avance n° 001. Cuenta con 15 días para realizar la legalización.',
      confirmButtonText: 'Aceptar',
    });
    this.necesidad = false;
  }

  close () {
    this.modal.close();
  }

  crear (data: any) {
    this.modal.close();
  }

  consultar(data: any) {

  }

  generarNecesidad () {
    window.open(environment.NECESIDADES, '_blank');
  }

}
