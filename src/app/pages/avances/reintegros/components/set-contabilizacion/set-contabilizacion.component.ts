import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONFIGURACION_LEGALIZACION, DATOS_LEGALIZACION, CONFIGURACION_REINTEGRO, DATOS_REINTEGRO } from '../../interfaces/interfaces';
import { Store } from '@ngrx/store';
import { getAccionTabla, getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LoadFilaSeleccionada, LoadAccionTabla } from '../../../../../shared/actions/shared.actions';

@Component({
  selector: 'ngx-set-contabilizacion',
  templateUrl: './set-contabilizacion.component.html',
  styleUrls: ['./set-contabilizacion.component.scss']
})
export class SetContabilizacionComponent implements OnInit, OnDestroy {
  @ViewChild('agregarRegistroModal', { static: false }) agregarRegistroModal: ElementRef;
  @ViewChild('eliminarRegistroModal', { static: false }) eliminarRegistroModal: ElementRef;
  @ViewChild('legalizacionTab', { static: true }) legalizacionTab: ElementRef;
  @ViewChild('reintegroTab', { static: false }) reintegroTab: ElementRef;

  // Formularios
  contabilizacionGroup: FormGroup;
  modalRegistroGroup: FormGroup;
  agregarRegistroModalRef: any;

  // Datos de las tablas
  configLegalizacion: any;
  datosLegalizacion: any;
  configReintegro: any;
  datosReintegro: any;

  // Modales
  closeResult = '';

  // Acciones en las tablas
  subscription$: any;
  subscriptionAccion$: any;

  constructor(private fb: FormBuilder, private store: Store<any>, private modalService: NgbModal) {
    this.createForm();

    this.configLegalizacion = CONFIGURACION_LEGALIZACION;
    this.datosLegalizacion = DATOS_LEGALIZACION;
    this.configReintegro = CONFIGURACION_REINTEGRO;
    this.datosReintegro = DATOS_REINTEGRO;
  }

  ngOnInit() {

    // Crear un nuevo registro en las tablas (cuentas contables)
    this.subscriptionAccion$ = this.store.select(getAccionTabla).subscribe((accion) => {
      if (accion && accion.titulo) {
        this.abrirModalRegistro(accion);
      }
    });

    // Acciones por registro en tablas: editar o borrar
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe((accion) => {
      if (accion && accion.accion) {
        switch (accion.accion.name) {
          case 'borrarLegalizacion':
            this.modalEliminarLegalizacion(accion.fila);
            break;
          case 'borrarReintegro':
            this.modalEliminarReintegro(accion.fila);
            break;
          case 'editarReintegro':
            this.abrirModalRegistro(accion);
            break;
          case 'editarLegalizacion':
            this.abrirModalRegistro(accion);
            break;
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
    this.subscriptionAccion$.unsubscribe();
    this.store.dispatch(LoadFilaSeleccionada(null));
    this.store.dispatch(LoadAccionTabla(null));
  }


  createForm() {
    this.contabilizacionGroup = this.fb.group({
      // Campos para comprobante de legalizacion
      tipoComprobanteL: ['', Validators.required],
      numeroComprobanteL: ['', Validators.required],
      consecutivoL: ['', Validators.required],
      conceptoL: ['', Validators.required],
      // Campos para comprobante de reintegro
      tipoComprobanteR: ['', Validators.required],
      numeroComprobanteR: ['', Validators.required],
      consecutivoR: ['', Validators.required],
      conceptoR: ['', Validators.required],
    });
    // Formulario del modal agregar registro en las tablas
    this.modalRegistroGroup = this.fb.group({
      idTercero: ['', Validators.required],
      numeroCuenta: ['', Validators.required],
      valorCuenta: ['', Validators.required],
      valorNumero: ['', Validators.required],
    });
  }

  isInvalid(nombre: string) {
    const input = this.contabilizacionGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  isInvalidModal(nombre: string) {
    const input = this.modalRegistroGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched);
    else
      return true;
  }

  // Valida los datos de la etiqueta "Legalizacion"
  saveFormLegalizacion(touch = true) {
    let valid = true;
    const camposL = ['tipoComprobanteL', 'numeroComprobanteL', 'consecutivoL', 'conceptoL'];
    for (const campo of camposL) {
      const control = this.contabilizacionGroup.get(campo);
      if (touch)
        control.markAsTouched();
      valid = valid && control.valid;
    }
    return valid;
  }

  // Valida los datos de la etiqueta "Reintegro", solo si se han validado los de "Legalizacion"
  saveForm() {
    if (this.contabilizacionGroup.invalid) {
      if (!this.saveFormLegalizacion())
        this.legalizacionTab.nativeElement.click();
      return Object.values(this.contabilizacionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  // Valida información de formulario en modal Agregar Registro
  saveModalForm() {
    if (this.modalRegistroGroup.invalid) {
      return Object.values(this.modalRegistroGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    } else {
      this.agregarRegistroModalRef.close();
    }
  }

  // Manejo de las acciones entre etiquetas
  changeLegalizacion() {
    this.legalizacionTab.nativeElement.click();
  }
  changeReintegro() {
    if (this.saveFormLegalizacion()) {
      this.reintegroTab.nativeElement.click();
    }
  }

  // Enumerar registros en tablas "Legalizacion" y "Reintegro"
  seguirSecuencia() {
    let numero = 1;
    for (const registro of this.datosLegalizacion) {
      registro.secuencia = numero;
      numero++;
    }
    for (const registro of this.datosReintegro) {
      registro.secuencia = numero;
      numero++;
    }
  }

  // Modal acciones sobre la tabla: eliminar registros de Legalizacion
  modalEliminarLegalizacion(fila: any) {
    this.modalService.open(this.eliminarRegistroModal).result.then((result) => {
      if (`${result}`) {
        const index = this.datosLegalizacion.findIndex(
          (element: any) => element.secuencia === fila.secuencia
            && element.tercero === fila.tercero
            && element.numeroCuenta === fila.numeroCuenta
            && element.debito === fila.debito
            && element.credito === fila.credito
        );
        this.datosLegalizacion.splice(index, 1);
        this.seguirSecuencia();
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // Modal acciones sobre la tabla: eliminar registros de Reintegro
  modalEliminarReintegro(fila: any) {
    this.modalService.open(this.eliminarRegistroModal).result.then((result) => {
      if (`${result}`) {
        const index = this.datosReintegro.findIndex(
          (element: any) => element.secuencia === fila.secuencia
            && element.tercero === fila.tercero
            && element.numeroCuenta === fila.numeroCuenta
            && element.debito === fila.debito
            && element.credito === fila.credito
        );
        this.datosReintegro.splice(index, 1);
        this.seguirSecuencia();
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // Acciones sobre la tabla: agregar registros en las tablas
  abrirModalRegistro(accion: any) {
    // Coloca todos los campos con los valores de la fila
    if (accion.fila) {
      this.modalRegistroGroup.setValue({
        idTercero: accion.fila.tercero,
        numeroCuenta: accion.fila.numeroCuenta,
        valorCuenta: accion.fila.debito !== '' ? 'debito' : 'credito',
        valorNumero: accion.fila.debito !== '' ? accion.fila.debito : accion.fila.credito
      });
      // Coloca todos los campos vacios
    } else {
      this.modalRegistroGroup.setValue({
        idTercero: '',
        numeroCuenta: '',
        valorCuenta: '',
        valorNumero: '',
      });
      Object.values(this.modalRegistroGroup.controls).forEach(control => {
        control.markAsUntouched();
      });
    }
    // Abrir modal de registro
    this.agregarRegistroModalRef = this.modalService.open(this.agregarRegistroModal);
    // Maneja el comportamiento para guardar formulario del modal
    this.agregarRegistroModalRef.result.then((result) => {
      if (`${result}`) {
        const valorNumero = this.modalRegistroGroup.get('valorNumero').value;
        const valorCuenta = this.modalRegistroGroup.get('valorCuenta').value;
        if (accion.fila) {
          accion.fila.tercero = this.modalRegistroGroup.get('idTercero').value;
          accion.fila.numeroCuenta = this.modalRegistroGroup.get('numeroCuenta').value;
          accion.fila.debito = valorCuenta === 'debito' ? valorNumero : '';
          accion.fila.credito = valorCuenta === 'credito' ? valorNumero : '';
        } else {
          let tabla = null;
          const registro = {
            secuencia: 0,
            tercero: this.modalRegistroGroup.get('idTercero').value,
            numeroCuenta: this.modalRegistroGroup.get('numeroCuenta').value,
            debito: valorCuenta === 'debito' ? valorNumero : '',
            credito: valorCuenta === 'credito' ? valorNumero : '',
          };
          if (accion.titulo.name === 'LEGALIZACIÓN')
            tabla = this.datosLegalizacion;
          else if (accion.titulo.name === 'REINTEGRO')
            tabla = this.datosReintegro;
          if (tabla) {
            tabla.push(registro);
            this.seguirSecuencia();
          }
        }
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  // Funciones para descargar comprobantes contables
  modalComprobanteLegalizacion(legalizacionModal) {
    this.modalService.open(legalizacionModal, { size: 'xl' });
  }
  modalComprobanteReintegro(reintegroModal) {
    this.modalService.open(reintegroModal, { size: 'xl' });
  }

}
