import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SelectService } from '../../../../../shared/services/select.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CONF_CONT, DATOS_CONT } from '../../interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-contabilizacion',
  templateUrl: './contabilizacion.component.html',
  styleUrls: ['./contabilizacion.component.scss']
})
export class ContabilizacionComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('modalConta', { static: false }) modalConta: any;
  @Output() aprobacion: EventEmitter<any>;

  dialogRef: any;
  contabilizacionForm: FormGroup;
  configurationConta: any;
  datosConta: any;
  consecutivo: any;
  credito: any;
  debito: any;
  mensaje: boolean;

  codigos: String[] = [
    'Opcion 1',
    'Opcion 2',
    'Opcion 3'
  ];
  conceptos: String[] = [
    'Opcion 1',
    'Opcion 2',
    'Opcion 3'
  ];

  tiposComprobante: String[] = [
    'Opcion 1',
    'Opcion 2',
    'Opcion 3'
  ];

  constructor(
    public dialog: MatDialog,
    public modalSeguridad: SelectService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {
    this.contabilizacionForm = this.formBuilder.group({
      concepto: ['', Validators.required],
      codigo: ['', Validators.required],
      tipoComprobante: ['', Validators.required]
    });
    this.configurationConta = CONF_CONT;
    this.datosConta = DATOS_CONT;
    this.aprobacion = new EventEmitter;
   }

  ngAfterViewInit() {
    this.abrir();
  }

  abrir() {
    this.dialogRef = this.dialog.open(this.modalConta).afterClosed().subscribe(result => {
      this.modalSeguridad.modalSeguridad = false;
    });
  }

  ngOnDestroy() {
    if  (this.dialogRef !== undefined) {
      this.dialog.closeAll();
    }
    this.modalSeguridad.modalSeguridad = false;
  }

  ngOnInit() {
    this.mensaje = false;
  }

  aprobar() {
    if (this.contabilizacionForm.valid) {
      this.dialog.closeAll();
      Swal.fire({
        type: 'success',
        title: '¡Aprobado!',
        html: 'Se aprobó la contabilidad',
        confirmButtonText: 'Aceptar',
      });
      this.aprobacion.emit(false);
    } else {
      this.validarFormulario();
      this.mensaje = true;
    }
  }

  esInvalido(nombre: string) {
    const input = this.contabilizacionForm.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  validarFormulario() {
    if (this.contabilizacionForm.invalid) {
      return Object.values(this.contabilizacionForm.controls).forEach(control => {
        control.markAsDirty();
      });
    }
  }

  guardar() {
    Swal.fire({
      type: 'success',
      title: '¡Guardado!',
      html: 'Se ha creado el giro con consecutivo: ' + this.consecutivo + '<br> Estado: Pendiente',
      confirmButtonText: 'Aceptar',
    });
    this.route.navigateByUrl('/pages/giros/seguridad/lista');
  }

  totalDebito() {
    return this.debito = this.datosConta.reduce((a: any, b: { debito: number; }) => a + b.debito, 0);
  }

  totalCredito() {
    return this.credito = this.datosConta.reduce((a: any, b: { credito: number; }) => a + b.credito, 0);
  }

}
