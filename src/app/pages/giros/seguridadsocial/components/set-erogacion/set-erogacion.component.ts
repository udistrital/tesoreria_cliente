import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { CONF_BENEFICIARIO,
  CONF_ENTIDADES,
  DATOS_BENEFICIARIOS,
  DATOS_ENTIDADES } from '../../interfaces/interfaces';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { Store } from '@ngrx/store';
import { SharedService } from '../../../../../shared/services/shared.service';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'ngx-set-erogacion',
  templateUrl: './set-erogacion.component.html',
  styleUrls: ['./set-erogacion.component.scss']
})
export class SetErogacionComponent implements OnInit, OnDestroy {

  @ViewChild('modalDetalles', { static: false }) modalContenido: any;
  @ViewChild('modalJustificacion', { static: false }) modalJustificacion: any;

  nombreTercero: any;
  datosBeneficiarios: any;
  datosEntidades: any;

  configurationBeneficiarios: any;
  configurationEntidades: any;

  bancoForm: FormGroup;

  modalRemover: NgbModalRef;

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
  validarBanco: boolean = false;

  subscription$: any;

  justificacionRemover: FormGroup;
  validarJustificacion: boolean = false;
  id: any;

  gasto: any;
  patronal: any;
  empleado: any;
  valorNeto: any;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
    public dialog: MatDialog,
    private sharedService: SharedService,
    private modalService: NgbModal,
  ) {
    this.configurationBeneficiarios = CONF_BENEFICIARIO;
    this.configurationEntidades = CONF_ENTIDADES;
    this.datosBeneficiarios = DATOS_BENEFICIARIOS;
    this.datosEntidades = DATOS_ENTIDADES;
    this.bancoForm = this.formBuilder.group({
      banco: ['', Validators.required],
      nombreCuenta: ['', Validators.required]
    });
    this.justificacionRemover = this.formBuilder.group({
      justificacion: ['', Validators.required]
    });
  }

  ngOnDestroy() {
    if (this.modalRemover !== undefined) {
      this.modalRemover.close();
    }
  }

   ngOnInit() {
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe(
      (action: any) => {
        if (this.sharedService.IfStore(action)) {
          if (action.accion.name === 'verDetalles') {
            this.open(action.fila);
          }
          if (action.accion.name === 'eliminar') {
            this.id = action.fila.id;
            this.abrirJustificacion();
          }
          this.store.dispatch(LoadFilaSeleccionada(null));
        }
      }
    );
  }

  open(data: any) {
    this.nombreTercero = data.nombreTercero;
    const dialogRef = this.dialog.open(this.modalContenido);
  }

  abrirJustificacion() {
    this.modalRemover = this.modalService.open(this.modalJustificacion);
  }

  totalGasto() {
    return this.gasto = this.datosEntidades.reduce((a: any, b: { valorNeto: number; }) => a + b.valorNeto, 0);
  }

  totalEmpleado() {
    return this.empleado = this.datosBeneficiarios.reduce((a: any, b: { aporteEmpleado: number; }) => a + b.aporteEmpleado, 0);
  }

  totalPatronal() {
    return this.patronal = this.datosBeneficiarios.reduce((a: any, b: { aportePatronal: number; }) => a + b.aportePatronal, 0);
  }

  totalValor() {
    return this.valorNeto = this.datosBeneficiarios.reduce((a: any, b: { valorNeto: number; }) => a + b.valorNeto, 0);
  }

  cerrarJustificacion() {
    this.modalRemover.close();
  }

  guardar() {
    if (this.justificacionRemover.valid) {
      this.validarJustificacion = false;
      this.datosEntidades.splice(this.datosEntidades.findIndex(
        (element: any) => {
          element.id ===  this.id;
        }
      ), 1);
      this.cerrarJustificacion();
    } else {
      this.validarJustificacion = true;
    }
  }

}
