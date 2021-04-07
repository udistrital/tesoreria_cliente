import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { CONF_ADDGIRO, CONF_MINGIRO, DATOS_GIROS } from '../../interfaces/interfaces';
import { SharedService } from '../../../../../shared/services/shared.service';
import { Store } from '@ngrx/store';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-set-giros',
  templateUrl: './set-giros.component.html',
  styleUrls: ['./set-giros.component.scss']
})
export class SetGirosComponent implements OnInit, OnDestroy {

  @Output() validarGiro: EventEmitter <any>;

  giroSeleccionado: any;
  configurationPlus: any;
  configurationMin: any;
  datosGiros: any;
  subscriptionTabla$: any;
  mensaje: boolean;

  constructor(
    private store: Store<any>,
    private sharedService: SharedService,
  ) {
    this.validarGiro = new EventEmitter;
    this.configurationPlus = CONF_ADDGIRO;
    this.configurationMin = CONF_MINGIRO;
    this.datosGiros = DATOS_GIROS;
    this.giroSeleccionado = [];
   }

  ngOnDestroy() {
    this.subscriptionTabla$.unsubscribe();
  }

  ngOnInit() {
    this.mensaje = false;
    this.subscriptionTabla$ = this.store.select(getFilaSeleccionada).subscribe((action: any) => {
      if (this.sharedService.IfStore(action)) {
        if (action.accion.name === 'agregar') {
          if (this.giroSeleccionado.length === 0) {
            this.giroSeleccionado.push(action.fila);
            this.validarGiro.emit(true);
          } else {
            Swal.fire({
              type: 'error',
              title: '¡Error!',
              text: 'Sólo es posible elegir un giro',
              confirmButtonText: 'Aceptar',
            });
          }
        }
        if (action.accion.name === 'eliminar') {
          this.giroSeleccionado.splice( this.giroSeleccionado.findIndex(
            (element: any) => {
              element.consecutivo ===  action.fila.consecutivo;
            }
          ), 1);
          this.validarGiro.emit(false);
        }
        this.store.dispatch(LoadFilaSeleccionada(null));
      }
    });

  }

  guardar() {
    if (this.giroSeleccionado.length === 0) {
      this.validarGiro.emit(false);
      this.mensaje = true;
    } else {
      this.validarGiro.emit(true);
      this.mensaje = false;
    }
  }
}
