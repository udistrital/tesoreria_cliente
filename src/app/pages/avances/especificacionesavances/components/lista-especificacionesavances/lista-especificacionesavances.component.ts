import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { actualizarEspecificacion, cargarEspecificaciones, obtenerEspecificaciones } from '../../../../../shared/actions/avances.actions';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { seleccionarEspecificaciones } from '../../../../../shared/selectors/avances.selectors';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { loadEspecificacionSelecionada } from '../../actions/especificacionesavances.actions';
import { CONFIGURACION_TABLA } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-lista-especificacionesavances',
  templateUrl: './lista-especificacionesavances.component.html',
  styleUrls: ['./lista-especificacionesavances.component.scss']
})
export class ListaEspecificacionesavancesComponent implements OnInit, OnDestroy {
  @ViewChild('modalEliminar', { static: false }) modalEliminar: ElementRef;
  configuracionTabla: any;
  datosTabla: any;
  subscription$: any;
  subscriptionEspecificaciones$: any;

  constructor(
    private store: Store<any>,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.datosTabla = [];
    this.configuracionTabla = CONFIGURACION_TABLA;
    this.clearStore();
    this.store.dispatch(obtenerEspecificaciones({}));
  }

  ngOnInit() {
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe((accion: any) => {
      if (accion && accion.fila && accion.accion && accion.accion.name) {
        if (accion.accion.name === 'modificar') {
          this.store.dispatch(loadEspecificacionSelecionada({ fila: accion.fila }));
          this.router.navigate(['pages/avances/especificacionesavances/editar/' + accion.fila.Id]);
        } else if (accion.accion.name === 'cambiarEstado')
          this.modalService.open(this.modalEliminar).result.then((result) => {
            const especificacion = Object.assign({}, accion.fila);
            const id = especificacion.Id;
            if (`${result}`) {
              especificacion.Activo = !especificacion.Activo; delete especificacion.estado;
              delete especificacion.Id;
              this.store.dispatch(actualizarEspecificacion({ id: id, element: especificacion }));
            }
          }, () => { });
      }
    });
    this.subscriptionEspecificaciones$ = this.store.select(seleccionarEspecificaciones).subscribe((accion) => {
      if (accion && accion.especificaciones) {
        if (accion.especificaciones.length && accion.especificaciones[0].Id) {
          this.datosTabla = accion.especificaciones;
          this.datosTabla.forEach(element => {
            element.estado = element.Activo ? 'Activo' : 'Inactivo';
          });
        } else if (accion.especificaciones.idActualizado) {
          const especificacion = this.datosTabla[this.datosTabla.findIndex(
            (element: any) => element.Id === accion.especificaciones.idActualizado)];
          if (especificacion) {
            especificacion.Activo = !especificacion.Activo;
            especificacion.estado = especificacion.Activo ? 'Activo' : 'Inactivo';
          }
        }
      }
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
    this.subscriptionEspecificaciones$.unsubscribe();
    this.clearStore();
  }

  clearStore(){
    this.store.dispatch(LoadFilaSeleccionada(null));
    this.store.dispatch(cargarEspecificaciones(null));
  }

}
