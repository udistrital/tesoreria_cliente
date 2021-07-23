import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetVigenciaActual, GetArbolRubro } from '../../../../../shared/actions/shared.actions';
import { getVigenciaActual, getNodoSeleccionado } from '../../../../../shared/selectors/shared.selectors';

@Component({
  selector: 'ngx-rubro-seguimiento',
  templateUrl: './rubro-seguimiento.component.html',
  styleUrls: ['./rubro-seguimiento.component.scss']
})
export class RubroSeguimientoComponent implements OnInit, OnDestroy {

  subscription3$: any;
  rubroSeleccionado: any;
  Vigencia: any;
  subscription2$: any;

  constructor(
    private store: Store<any>,
  ) {
    this.store.dispatch(GetVigenciaActual({ offset: 0 }));
    this.store.dispatch(GetArbolRubro({ branch: '3' }));
  }
  ngOnDestroy(): void {
    this.subscription2$.unsubscribe();
    this.subscription3$.unsubscribe();
  }
  ngOnInit() {
    this.subscription3$ = this.store.select(getVigenciaActual).subscribe((vigencia: any) => {
      if (vigencia) {
        this.Vigencia = vigencia[0].valor;
      }
    });
    this.subscription2$ = this.store.select(getNodoSeleccionado).subscribe((nodo: any) => {
      if (nodo) {
        if (Object.keys(nodo)[0] !== 'type') {
          if (nodo && !nodo.children) {
            this.SeleccionarRubro(nodo);
          }
        }
      }
    });
  }

  SeleccionarRubro(rubro: any) {
    this.rubroSeleccionado = rubro;
  }

  fuenteRecurso() {
    console.warn('Funcionalidad aún no desarrollada');
  }

}
