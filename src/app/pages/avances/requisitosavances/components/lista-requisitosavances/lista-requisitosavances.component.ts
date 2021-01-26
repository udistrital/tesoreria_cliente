import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { loadRequisitoSelecionado } from '../../actions/requisitosavances.actions';
import { DATOS_TABLA, CONFIGURACION_TABLA } from '../../interfaces/interfaces';

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
        if (accion.accion.name === 'modificar') {
          this.store.dispatch(loadRequisitoSelecionado({ fila: accion.fila }));
          this.router.navigate(['pages/avances/requisitosavances/editar']);
        } else if (accion.accion.name === 'cambiarEstado')
          this.modalService.open(this.modalEliminar).result.then((result) => {
            if (`${result}`)
              this.cambiarEstado(accion.fila);
          }, () => { });
      }
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
    this.store.dispatch(LoadFilaSeleccionada(null));
  }

  cambiarEstado(fila) {
    // TODO
    if (fila.estado === 'Activo')
      fila.estado = 'Inactivo';
    else if (fila.estado === 'Inactivo')
      fila.estado = 'Activo';
  }

}
