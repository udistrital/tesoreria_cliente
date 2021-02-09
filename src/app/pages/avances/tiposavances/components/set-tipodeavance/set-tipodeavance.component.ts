import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DATOS_REQUISITOS, CONFIGURACION_REQUISITOSDETALLE } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-set-tipodeavance',
  templateUrl: './set-tipodeavance.component.html',
  styleUrls: ['./set-tipodeavance.component.scss']
})
export class SetTipodeavanceComponent implements OnInit {
  @ViewChild('guardarModal', { static: false }) guardarModal: ElementRef;

  tituloAccion: string;
  // Formulario
  tipoavanceGroup: FormGroup;
  codigoTipo = 'CTAT';
  estadoTipo = 'Activo';

  // Modales
  closeResult = '';

  configRequisitos: any;
  datosRequisitos: any;
  // Icono en la Lista de documentos
  mostrarOcultar: string;
  mostrarOcultarIcono: string;

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.configRequisitos = CONFIGURACION_REQUISITOSDETALLE;
    this.datosRequisitos = DATOS_REQUISITOS;
    // Título, editar o crear
    this.tituloAccion = this.activatedRoute.snapshot.url[0].path;
    this.createForm();
    // Icono en la Lista de documentos
    this.mostrarOcultar = 'Mostrar';
    this.mostrarOcultarIcono = 'fa-eye';
  }

  ngOnInit() {
  }

  // Validacion del Formulario
  get areaInvalid() {
    return this.tipoavanceGroup.get('areaFuncional').invalid && this.tipoavanceGroup.get('areaFuncional').touched;
  }
  get fechaInvalid() {
    return this.tipoavanceGroup.get('fecha').invalid && this.tipoavanceGroup.get('fecha').touched;
  }
  get codigoTipoInvalid() {
    return this.tipoavanceGroup.get('codigoTipo').invalid && this.tipoavanceGroup.get('codigoTipo').touched;
  }
  get nombreTipoInvalid() {
    return this.tipoavanceGroup.get('nombreTipo').invalid && this.tipoavanceGroup.get('nombreTipo').touched;
  }
  get descripcionInvalid() {
    return this.tipoavanceGroup.get('descripcion').invalid && this.tipoavanceGroup.get('descripcion').touched;
  }
  get estadoTipoInvalid() {
    return this.tipoavanceGroup.get('estadoTipo').invalid && this.tipoavanceGroup.get('estadoTipo').touched;
  }
  get normaTipoInvalid() {
    return this.tipoavanceGroup.get('normaTipo').invalid && this.tipoavanceGroup.get('normaTipo').touched;
  }

  createForm() {
    this.tipoavanceGroup = this.fb.group({
      areaFuncional: ['', Validators.required],
      fecha: [''],
      codigoTipo: ['', Validators.required],
      nombreTipo: ['', Validators.required],
      descripcion: ['', Validators.required],
      estadoTipo: ['', Validators.required],
      normaTipo: ['', Validators.required],
    });
  }

  saveForm() {
    if (this.tipoavanceGroup.invalid) {
      return Object.values(this.tipoavanceGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  // Modal acciones sobre la tabla: asociar registros
  modalGuardar() {
    if (this.tipoavanceGroup.valid) {
      this.modalService.open(this.guardarModal).result.then((result) => {
        if (`${result}`) {
          this.router.navigate(['pages/avances/tiposavances/lista']);
        }
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else { this.saveForm(); }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // Configuracion de Icono en lista documentos
  mostrarOcultarDocumentos(state: string) {
    if (state === 'false') {
      this.mostrarOcultarIcono = 'fa-eye-slash';
    } else {
      this.mostrarOcultarIcono = 'fa-eye';
    }
  }

}
