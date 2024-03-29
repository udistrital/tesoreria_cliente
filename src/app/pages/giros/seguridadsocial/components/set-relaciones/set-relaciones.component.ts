
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { SharedService } from '../../../../../shared/services/shared.service';
import { Store } from '@ngrx/store';
import { CONF_ADDRELACION, CONF_MINRELACION, DATOS_RELACION } from '../../interfaces/interfaces';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-set-relaciones',
  templateUrl: './set-relaciones.component.html',
  styleUrls: ['./set-relaciones.component.scss']
})
export class SetRelacionesComponent implements OnInit, OnDestroy {

  @Output() informacionRelaciones: EventEmitter<any>;
  @Output() statusRelaciones: EventEmitter<any>;

  configurationPlus: any;
  configurationMin: any;
  datosGiroRelacion: any;

  datoSeleccionado: any;
  subscriptionTabla$: any;

  mensaje: boolean;

  constructor(
    private store: Store<any>,
    private sharedService: SharedService,
  ) {
    this.configurationPlus = CONF_ADDRELACION;
    this.configurationMin = CONF_MINRELACION;
    this.datoSeleccionado = [];
    this.datosGiroRelacion = DATOS_RELACION;
    this.informacionRelaciones = new EventEmitter;
    this.statusRelaciones = new EventEmitter;
   }

  ngOnInit() {
    this.mensaje = false;
    this.subscriptionTabla$ = this.store.select(getFilaSeleccionada).subscribe((action: any) => {
      if (this.sharedService.IfStore(action)) {
        if (action.accion.name === 'agregar') {
          if (this.datoSeleccionado.length === 0) {
            this.datoSeleccionado.push(action.fila);
            this.statusRelaciones.emit(true);
          } else {
            Swal.fire({
              type: 'error',
              title: '¡Error!',
              text: 'Sólo es posible elegir una relación de autorización',
              confirmButtonText: 'Aceptar',
            });
          }
        }
        if (action.accion.name === 'quitar') {
          this.datoSeleccionado.splice( this.datoSeleccionado.findIndex(
            (element: any) => {
              element.consecutivo ===  action.fila.consecutivo;
            }
          ), 1);
        }
        this.store.dispatch(LoadFilaSeleccionada(null));
      }
    });
  }

  ngOnDestroy() {
    this.subscriptionTabla$.unsubscribe();
  }

  guardar() {
    if (this.datoSeleccionado.length === 0) {
      this.statusRelaciones.emit(false);
      this.mensaje = true;
    } else {
      this.informacionRelaciones.emit(this.datoSeleccionado);
      this.mensaje = false;
    }
  }

}
