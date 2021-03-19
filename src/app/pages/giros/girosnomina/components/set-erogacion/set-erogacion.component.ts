import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../../../../../shared/services/shared.service';
import { Store } from '@ngrx/store';
import { DATOS_BENEFICIARIOS } from '../../interfaces/interfaces';
import { CONF_BENEFICIARIO,
  CONF_DETALLES,
  CONF_RUBROS,
  DATOS_RUBROS,
  CONF_DESCUENTOS,
  CONF_DEVENGO,
  DATOS_DESCUENTO,
  DATOS_DEVENGO } from '../../interfaces/interfaces';
@Component({
  selector: 'ngx-set-erogacion',
  templateUrl: './set-erogacion.component.html',
  styleUrls: ['./set-erogacion.component.scss']
})
export class SetErogacionComponent implements OnInit {

  @Output() informacionBanco: EventEmitter<any>;
  @Output() informacionBeneficiarios: EventEmitter<any>;
  @ViewChild('modalDetalles', { static: false }) modalContenido: any;

  subscriptionDetalles$: any;
  modal: NgbModalRef;
  bancoForm: FormGroup;
  
  datosBeneficiarios: any;
  datosDetalle: any;
  datosRubros: any;
  datosDescuento: any;
  datosDevengo: any;
  
  configuration: any;
  configurationDetalles: any;
  configurationRubro: any;
  configurationDescuento: any;
  configurationDevengo: any;
  
  validarBanco: boolean = false;

  totalGirar: any;
  cuentas: String[] = [
    'Opcion 1',
    'Opcion 2',
    'Opcion 3'
  ];
  conceptos: String[] = [
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

  constructor(private store: Store<any>,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private sharedService: SharedService, ) {
      this.informacionBanco = new EventEmitter;
      this.informacionBeneficiarios = new EventEmitter;
      this.configuration = CONF_BENEFICIARIO;
      this.configurationDetalles = CONF_DETALLES;
      this.configurationRubro = CONF_RUBROS;
      this.configurationDescuento = CONF_DESCUENTOS;
      this.configurationDevengo = CONF_DEVENGO;
      this.datosDescuento = DATOS_DESCUENTO;
      this.datosDevengo = DATOS_DEVENGO;
      this.datosDetalle = [];
      this.datosBeneficiarios = DATOS_BENEFICIARIOS;
      this.datosRubros = DATOS_RUBROS;

      this.bancoForm = this.formBuilder.group({
        banco: ['', Validators.required],
        nombreCuenta: ['', Validators.required],
        concepto: ['', Validators.required],
      }); 
     }

  ngOnInit() {
    this.subscriptionDetalles$ = this.store.select(getFilaSeleccionada).subscribe(
      (action: any) => {
        if (this.sharedService.IfStore(action)) {
          if (action.accion.name === 'verDetalles') {
            this.abrir(action.fila);
          }
          this.store.dispatch(LoadFilaSeleccionada(null));
        }
      }
    );
  }

  abrir(datos: any) {
    this.datosDetalle = [];
    this.datosDetalle.push(datos);
    this.modal = this.modalService.open(this.modalContenido);
  }

  guardar() {
    this.informacionBanco.emit(this.bancoForm.value);
    this.informacionBeneficiarios.emit(this.datosBeneficiarios);
  }

  cerrar () {
    this.modal.close();
  }

  totalGasto() {
    return this.totalGirar = this.datosBeneficiarios.reduce((a: any, b: { valor: number; }) => a + b.valor, 0);
  }

}
