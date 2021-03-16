import { Component, OnInit, Output, EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { getDatosOrdenesPago, getDatosOrdenPago, getDatosInformacion } from '../../selectors/giros-proveedores.selectors';
import { CONF_BENEFICIARIO, CONF_DETALLES } from '../../interfaces/interfaces';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { cargarDatosBeneficiarios } from '../../actions/giros-proveedores.actions';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../../../../../shared/services/shared.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'ngx-set-erogacion',
  templateUrl: './set-erogacion.component.html',
  styleUrls: ['./set-erogacion.component.scss']
})
export class SetErogacionComponent implements OnInit, OnDestroy {

  @Output() abrirModal: EventEmitter<any>;
  @ViewChild('modalDetalles', { static: false }) modalContenido: any;
  @ViewChild('modalJustificacion', { static: false }) modalJustificacion: any;

  subscriptionOrden$: any;
  subscriptionOrdenes$: any;
  subscriptionInformacion$: any;
  subscriptionDetalles$: any;
  datosDetalle: any;
  consecutivo: any;
  totalGirar: any;
  cuentas: String[] = [
    'Opcion 1',
    'Opcion 2',
    'Opcion 3'
  ];

  bancos: String[] = [
    'Banco de Bogotá',
    'Banco de Occidente',
    'BBVA'
  ];

  cuenta = '230-981-23';
  tipo = 'Ahorros';

  datosBeneficiarios: any;
  configuration: any;
  configurationDetalles: any;
  giroTramite: any;
  validarJustificacion: boolean = false;
  validarBanco: boolean = false;
  modal: NgbModalRef;
  modalRemover: NgbModalRef;
  justificacionRemover: FormGroup;
  bancoForm: FormGroup;

  constructor(private store: Store<any>,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private sharedService: SharedService,) {
    this.configuration = CONF_BENEFICIARIO;
    this.datosBeneficiarios = [];
    this.abrirModal = new EventEmitter;
    this.configurationDetalles = CONF_DETALLES;
    this.datosDetalle = [];
    this.justificacionRemover = this.formBuilder.group({
      justificacion: ['', Validators.required]
    });
    this.bancoForm = this.formBuilder.group({
      banco: ['', Validators.required],
      nombreCuenta: ['', Validators.required],
      /* numeroCuenta: ['', Validators.required],
      tipoCuenta: ['', Validators.required], */
    })
  }

  ngOnDestroy() {
    this.subscriptionOrden$.unsubscribe();
    this.subscriptionOrdenes$.unsubscribe();
    this.subscriptionInformacion$.unsubscribe();
    this.subscriptionDetalles$.unsubscribe();
  }

  ngOnInit() {
    this.subscriptionInformacion$ = combineLatest([
      this.store.select(getDatosInformacion),
      this.store.select(getDatosOrdenPago),
      this.store.select(getDatosOrdenesPago),
    ]).subscribe(([informacion, datosOrden, datosOrdenes]) => {
      this.datosBeneficiarios = [];
      if (this.sharedService.IfStore(informacion)) {
        if (informacion.giroTramite === 'giroUnico') {
          if (this.sharedService.IfStore(datosOrden)) {
            let i = 0;
            while (datosOrden[i] !== undefined) {
              this.datosBeneficiarios.push(datosOrden[i]);
              i++;
            }
          }
        } else if (informacion.giroTramite === 'giroRango') {
          if (this.sharedService.IfStore(datosOrdenes)) {
            let i = 0;
            while (datosOrdenes[i] !== undefined) {
              this.datosBeneficiarios.push(datosOrdenes[i]);
              i++;
            }
          }
        }
      } else {
        this.datosBeneficiarios = [];
      }
    })
  
    this.subscriptionDetalles$ = this.store.select(getFilaSeleccionada).subscribe(
      (action: any) => {
        if (this.sharedService.IfStore(action)) {
          if (action.accion.name === 'remover') {
            this.consecutivo = action.fila.consecutivo;
            this.abrirJustificacion();
          }
          if (action.accion.name === 'verDetalles') {
            this.abrir(action.fila);
          }
          this.store.dispatch(LoadFilaSeleccionada(null));
        }
      });

      this.changes();
  }

  changes() {
    this.bancoForm.valueChanges.subscribe(data => console.log(data));
  }

  abrirJustificacion() {
    this.modalRemover = this.modalService.open(this.modalJustificacion);
  }

  abrir(datos: any) {
    this.datosDetalle = [];
    this.datosDetalle.push(datos);
    this.modal = this.modalService.open(this.modalContenido);
  }

  guardar() {
    if (this.justificacionRemover.valid) {
      this.validarJustificacion = false;
      this.datosBeneficiarios.splice(this.datosBeneficiarios.findIndex(
        (element: any) => {
          element.consecutivo === this.consecutivo;
        }
      ), 1);
      this.cerrarJustificacion();
    } else {
      this.validarJustificacion = true;
    }
  }

  cerrarJustificacion() {
    this.modalRemover.close();
  }

  cerrar() {
    this.modal.close();
  }

  guardarBeneficiarios() {
    if (this.bancoForm.valid) {
      this.validarBanco = false;
      this.store.dispatch(cargarDatosBeneficiarios(this.datosBeneficiarios));  
    } else {
      this.validarBanco = true;
    }
    
  }

  totalGasto() {
    return this.totalGirar = this.datosBeneficiarios.reduce((a: any, b: { valor: number; }) => a + b.valor, 0);
  }
}
