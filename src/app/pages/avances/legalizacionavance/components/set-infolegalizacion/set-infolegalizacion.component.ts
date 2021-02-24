import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { LoadAccionTabla, LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { getAccionTabla, getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { cargarDatosLegalizacion, cargarDatosRetenciones, cargarRegistrosLegalizacion } from '../../actions/legalizacionavance.actions';
import { CONFIGURACION_RETENCIONES, CONFIGURACION_TABLA_LEGALIZACION } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-set-infolegalizacion',
  templateUrl: './set-infolegalizacion.component.html',
  styleUrls: ['./set-infolegalizacion.component.scss']
})
export class SetInfolegalizacionComponent implements OnInit, OnDestroy {
  @ViewChild('modalEliminar', { static: false }) modalEliminar: ElementRef;
  @ViewChild('modalRegistro', { static: false }) modalRegistro: ElementRef;
  datosLegalizacion: FormGroup;
  datosRegistro: FormGroup;
  configRegistrosLegalizacion: any;
  datosRegistrosLegalizacion: any;
  configRetenciones: any;
  datosRetenciones: any;
  mostrarOcultarIcono: any;
  subscriptionAccion$: any;
  subscription$: any;
  agregarEditarRegistro: string;
  registroModal: any;
  susDatosLegalizacion$: any;

  crearFormularios() {
    this.datosLegalizacion = this.fb.group({
      vigencia: ['', Validators.required],
      numeroOrden: ['', Validators.required],
      dependencia: ['', Validators.required],
      totalAvance: ['', Validators.required],
      cantidadRegistros: ['', [Validators.required, Validators.min(1)]],
    });
    this.datosRegistro = this.fb.group({
      fecha: ['', Validators.required],
      tipoId: ['', Validators.required],
      idProveedor: ['', Validators.required],
      nombreProveedor: ['', Validators.required],
      idFactura: ['', Validators.required],
      trm: ['', Validators.required],
      subtotal: ['', Validators.required],
      ivaPorcentaje: ['', Validators.required],

      rentaPorcentaje: ['', Validators.required],
      icaPorcentaje: ['', Validators.required],
      reteIvaPorcentaje: ['', Validators.required],
    });
  }

  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private modalService: NgbModal) {
    this.configRegistrosLegalizacion = CONFIGURACION_TABLA_LEGALIZACION;
    this.configRetenciones = CONFIGURACION_RETENCIONES;
    this.datosRegistrosLegalizacion = [];
    this.datosRetenciones = [];
    this.mostrarOcultarIcono = 'fa-plus';
    this.crearFormularios();
  }

  ngOnInit() {
    // Crear un nuevo registro
    this.subscriptionAccion$ = this.store.select(getAccionTabla).subscribe((accion) => {
      if (accion && accion.accion && accion.accion.name === 'agregarRegistro')
        this.abrirModalRegistro('Agregar');
    });

    // Acciones por registro en tablas: editar o borrar
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe((accion) => {
      if (accion && accion.accion) {
        switch (accion.accion.name) {
          case 'modificar':
            this.abrirModalRegistro('Modificar', accion.fila);
            break;
          case 'borrar':
            this.abrirModalEliminar(accion.fila);
            break;
        }
      }
    });

    // Suscripción para notificar de cambios en los datos de legalización
    this.susDatosLegalizacion$ = this.datosLegalizacion.valueChanges.subscribe(valor => {
      if (this.datosLegalizacion.valid)
        this.store.dispatch(cargarDatosLegalizacion({ datosLegalizacion: valor }));
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
    this.subscriptionAccion$.unsubscribe();
    this.susDatosLegalizacion$.unsubscribe();
    this.store.dispatch(LoadFilaSeleccionada(null));
    this.store.dispatch(LoadAccionTabla(null));
  }

  validarFormulario() {
    if (this.datosLegalizacion.invalid) {
      return Object.values(this.datosLegalizacion.controls).forEach(control => {
        control.markAsDirty();
      });
    }
  }

  esInvalido(nombre: string) {
    const input = this.datosLegalizacion.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  esInvalidoModal(nombre: string) {
    const input = this.datosRegistro.get(nombre);
    if (input)
      return input.invalid && (input.touched);
    else
      return true;
  }

  mostrarOcultarConsolidado(state: string) {
    if (state === 'false')
      this.mostrarOcultarIcono = 'fa-minus';
    else
      this.mostrarOcultarIcono = 'fa-plus';
  }

  abrirModalEliminar(fila: any) {
    this.modalService.open(this.modalEliminar).result.then((result) => {
      if (`${result}`) {
        const index = this.datosRegistrosLegalizacion.findIndex(
          (element: any) => element.consecutivo === fila.consecutivo
            && element.id === fila.id
            && element.fecha === fila.fecha
            && element.idProveedor === fila.idProveedor
            && element.nombreProveedor === fila.nombreProveedor
            && element.idFactura === fila.idFactura
            && element.trm === fila.trm
            && element.subtotal === fila.subtotal
            && element.iva === fila.iva
            && element.valorTotal === fila.valorTotal
        );
        this.datosRegistrosLegalizacion.splice(index, 1);
        this.datosRetenciones.splice(index, 1);
        this.actualizarSecuenciayTotales();
        this.datosLegalizacion.get('cantidadRegistros').setValue(this.datosRegistrosLegalizacion.length);
        this.store.dispatch(cargarRegistrosLegalizacion({ registrosLegalizacion: this.datosRegistrosLegalizacion }));
        this.store.dispatch(cargarDatosRetenciones({ datosRetenciones: this.datosRetenciones }));
      }
    }, () => { });
  }

  abrirModalRegistro(nombreAccion: string, fila = null) {
    this.agregarEditarRegistro = nombreAccion;
    // Coloca valores vacios o con los datos de la fila según sea el caso
    if (fila) {
      const filaC = Object.assign({}, fila);
      delete filaC.id; delete filaC.iva; delete filaC.valorTotal;
      delete filaC.renta; delete filaC.ica; delete filaC.reteiva;
      this.datosRegistro.setValue(filaC);
    }
    else
      Object.values(this.datosRegistro.controls).forEach(control => {
        control.setValue('');
        control.markAsUntouched();
      });
    // Apertura de modal
    this.registroModal = this.modalService.open(this.modalRegistro, { size: 'lg' })
    this.registroModal.result.then((result) => {
      if (`${result}`) {
        const filaC = Object.assign({}, this.datosRegistro.value);
        filaC.iva = this.ivaValor;
        filaC.valorTotal = this.valorTotal;
        const filaRetencion = {
          renta: this.renta,
          ica: this.ica,
          reteiva: this.reteIva
        };
        if (fila) {
          this.datosRegistrosLegalizacion[fila.id - 1] = filaC;
          this.datosRetenciones[fila.id - 1] = filaRetencion;
        } else {
          this.datosRegistrosLegalizacion.push(filaC);
          this.datosRetenciones.push(filaRetencion);
        }
        this.actualizarSecuenciayTotales();
        this.datosLegalizacion.get('cantidadRegistros').setValue(this.datosRegistrosLegalizacion.length);
        this.store.dispatch(cargarRegistrosLegalizacion({ registrosLegalizacion: this.datosRegistrosLegalizacion }));
        this.store.dispatch(cargarDatosRetenciones({ datosRetenciones: this.datosRetenciones }));
      }
    }, () => { });
  }

  guardarModalForm() {
    if (this.datosRegistro.invalid) {
      Object.values(this.datosRegistro.controls).forEach(control => {
        control.markAsTouched();
      });
    } else {
      this.registroModal.close();
    }
  }

  actualizarSecuenciayTotales() {
    let subTotal = 0; let iva = 0; let valorTotal = 0;
    let renta = 0; let ica = 0; let reteiva = 0;
    for (let i = 0; i < this.datosRegistrosLegalizacion.length; i++) {
      this.datosRegistrosLegalizacion[i].id = i + 1;
      this.datosRetenciones[i].id = i + 1;
      subTotal += this.datosRegistrosLegalizacion[i].subtotal;
      iva += this.datosRegistrosLegalizacion[i].iva;
      valorTotal += this.datosRegistrosLegalizacion[i].valorTotal;
      renta += this.datosRetenciones[i].renta;
      ica += this.datosRetenciones[i].ica;
      reteiva += this.datosRetenciones[i].reteiva;
    }
    this.configRegistrosLegalizacion.endSubtotal.last[0].name = subTotal;
    this.configRegistrosLegalizacion.endSubtotal.last[1].name = iva;
    this.configRegistrosLegalizacion.endSubtotal.last[2].name = valorTotal;
    this.configRetenciones.endSubtotal.last[0].name = renta;
    this.configRetenciones.endSubtotal.last[1].name = ica;
    this.configRetenciones.endSubtotal.last[2].name = reteiva;
  }

  get ivaValor() {
    return this.datosRegistro.get('subtotal').value * this.datosRegistro.get('ivaPorcentaje').value / 100;
  }

  get valorTotal() {
    return this.datosRegistro.get('subtotal').value + this.ivaValor;
  }

  get renta() {
    return this.datosRegistro.get('subtotal').value * this.datosRegistro.get('rentaPorcentaje').value / 100;
  }

  get ica() {
    return this.datosRegistro.get('subtotal').value * this.datosRegistro.get('icaPorcentaje').value / 100;
  }

  get reteIva() {
    return this.datosRegistro.get('subtotal').value * this.datosRegistro.get('reteIvaPorcentaje').value / 100;
  }

}