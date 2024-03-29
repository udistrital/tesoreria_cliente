import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { CONFIGURACION_TABLA, DATOS_TABLA } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-lista-legalizaciones',
  templateUrl: './lista-legalizaciones.component.html',
  styleUrls: ['./lista-legalizaciones.component.scss']
})
export class ListaLegalizacionesComponent implements OnInit, OnDestroy {
  @ViewChild('modalEliminar', { static: false }) modalEliminar: ElementRef;
  configuracionTabla: any;
  datosTabla: any;
  subscription$: any;

  constructor(
    private store: Store<any>,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.datosTabla = DATOS_TABLA;
    this.configuracionTabla = CONFIGURACION_TABLA;
  }

  ngOnInit() {
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe((accion: any) => {
      if (accion && accion.fila && accion.accion && accion.accion.name) {
        if (accion.accion.name === 'modificar' || accion.accion.name === 'detalle') {
          this.router.navigate(['pages/avances/legalizacionavance/editar']);
        } else if (accion.accion.name === 'borrar')
          this.borrar(accion.fila);
      }
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
    this.store.dispatch(LoadFilaSeleccionada(null));
  }

  borrar(fila: { consecutivo: any; fechaRegistro: any; areaFuncional: any; estado: any; }) {
    this.modalService.open(this.modalEliminar).result.then((result) => {
      if (`${result}`)
        this.datosTabla.splice(this.datosTabla.findIndex(
          (element: any) => element.consecutivo === fila.consecutivo
            && element.fechaRegistro === fila.fechaRegistro
            && element.areaFuncional === fila.areaFuncional
            && element.estado === fila.estado
        ), 1);
    }, () => { });
  }

}
