import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetArbolRubro, GetVigenciaActual } from '../../../../../shared/actions/shared.actions';
import { getNodoSeleccionado, getVigenciaActual } from '../../../../../shared/selectors/shared.selectors';

@Component({
  selector: 'ngx-seleccion-rubro',
  templateUrl: './seleccion-rubro.component.html',
  styleUrls: ['./seleccion-rubro.component.scss']
})
export class SeleccionRubroComponent implements OnInit {

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
}
