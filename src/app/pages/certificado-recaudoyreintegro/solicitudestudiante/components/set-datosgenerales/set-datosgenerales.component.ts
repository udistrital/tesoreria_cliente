import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CONFIGURACION_RECIBOS, DATOS_RECIBOS, CONFIGURACION_INFOADICIONAL, DATOS_INFOADICIONAL } from '../../interfaces/interfaces';
import { Store } from '@ngrx/store';
import { getAccionTabla, getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { loadSolicitudestudianteSeleccionado } from '../../actions/solicitudestudiante.actions';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';

@Component({
  selector: 'ngx-set-datosgenerales',
  templateUrl: './set-datosgenerales.component.html',
  styleUrls: ['./set-datosgenerales.component.scss']
})
export class SetDatosgeneralesComponent implements OnInit, OnDestroy {

  @ViewChild('verInfoAdicionalModal', { static: false }) verInfoAdicionalModal: ElementRef;

  datosGeneralesGroup: FormGroup;
  configRecibos: any;
  datosRecibos: any;
  configInfoAdicional: any;
  datosInfoAdicional: any;

  subscription$: any;
  subscription2$: any;
  stringBusqueda: string;
  @Output() selectedAction: EventEmitter<any>;

  constructor(private fb: FormBuilder, private store: Store<any>, private modalService: NgbModal) {
    this.configRecibos = CONFIGURACION_RECIBOS;
    this.datosRecibos = DATOS_RECIBOS;
    this.configInfoAdicional = CONFIGURACION_INFOADICIONAL;
    this.datosInfoAdicional = DATOS_INFOADICIONAL;

    this.stringBusqueda = '';
    this.selectedAction = new EventEmitter<any>();
  }

  ngOnInit() {
    this.datosGeneralesGroup = this.fb.group({
    });

    // Tabla
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe((fila: any) => {
      if (fila) {
        this.store.dispatch(loadSolicitudestudianteSeleccionado(fila.fila));
      }
    });
    this.subscription$ = this.store.select(getAccionTabla).subscribe((accion: any) => {
      this.store.dispatch(loadSolicitudestudianteSeleccionado(null));
    });
    // Modal de la tabla para ver informacion de los registros
    this.subscription2$ = this.store.select(getFilaSeleccionada).subscribe((accion) => {
      if (accion && accion.accion) {
        if (accion.accion.name === 'verSolicitud') {
          this.modalService.open(this.verInfoAdicionalModal, { size: 'xl' });
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
    this.store.dispatch(LoadFilaSeleccionada(null));
    this.subscription2$.unsubscribe();
  }

  saveForm() {
    if (this.datosGeneralesGroup.invalid) {
      return Object.values(this.datosGeneralesGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
