import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { actualizarRequisito, cargarRequisitos, obtenerRequisitos } from '../../../../../shared/actions/avances.actions';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { seleccionarRequisitos } from '../../../../../shared/selectors/avances.selectors';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { loadRequisitoSelecionado } from '../../actions/requisitosavances.actions';
import { CONFIGURACION_TABLA } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-lista-requisitosavances',
  templateUrl: './lista-requisitosavances.component.html',
  styleUrls: ['./lista-requisitosavances.component.scss']
})
export class ListaRequisitosavancesComponent implements OnInit, OnDestroy {
  @ViewChild('modalEliminar', { static: false }) modalEliminar: ElementRef;
  configuracionTabla: any;
  datosTabla: any;
  subscription$: any;
  subscriptionRequisitos$: any;

  constructor(
    private store: Store<any>,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.datosTabla = [];
    this.configuracionTabla = CONFIGURACION_TABLA;
    this.clearStore();
    this.store.dispatch(obtenerRequisitos({}));
  }

  ngOnInit() {
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe((accion: any) => {
      if (accion && accion.fila && accion.accion && accion.accion.name) {
        if (accion.accion.name === 'modificar') {
          this.store.dispatch(loadRequisitoSelecionado({ fila: accion.fila }));
          this.router.navigate(['pages/avances/requisitosavances/editar/' + accion.fila.Id]);
        } else if (accion.accion.name === 'cambiarEstado')
          this.modalService.open(this.modalEliminar).result.then((result) => {
            const requisito = Object.assign({}, accion.fila);
            const id = requisito.Id;
            if (`${result}`) {
              requisito.Activo = !requisito.Activo; delete requisito.estado;
              delete requisito.Id;
              this.store.dispatch(actualizarRequisito({ id: id, element: requisito }));
            }
          }, () => { });
      }
    });
    this.subscriptionRequisitos$ = this.store.select(seleccionarRequisitos).subscribe((accion) => {
      if (accion && accion.requisitos) {
        if (accion.requisitos.length && accion.requisitos[0].Id) {
          this.datosTabla = accion.requisitos;
          this.datosTabla.forEach(element => {
            element.estado = element.Activo ? 'Activo' : 'Inactivo';
          });
        } else if (accion.requisitos.idActualizado) {
          const requisito = this.datosTabla[this.datosTabla.findIndex(
            (element: any) => element.Id === accion.requisitos.idActualizado)];
          if (requisito) {
            requisito.Activo = !requisito.Activo;
            requisito.estado = requisito.Activo ? 'Activo' : 'Inactivo';
          }
        }
      }
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
    this.subscriptionRequisitos$.unsubscribe();
    this.clearStore();
  }

  clearStore() {
    this.store.dispatch(LoadFilaSeleccionada(null));
    this.store.dispatch(cargarRequisitos(null));
  }

}
