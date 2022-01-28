import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetArbolRubro, LoadNodoSeleccionado } from '../../actions/shared.actions';
import { ArbolRubros, DatosNodo } from '../../interfaces/interfaces';
import { getArbolRubro, getNodoSeleccionado } from '../../selectors/shared.selectors';
import { NbGetters, NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbTreeGridRowComponent } from '@nebular/theme';
import { ParametricService } from '../../services/parametric.service';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Component({
  selector: 'ngx-arbol-rubro',
  templateUrl: './arbol-rubro.component.html',
  styleUrls: ['./arbol-rubro.component.scss']
})
export class ArbolRubroComponent implements OnInit, OnDestroy, OnChanges {

  @Input() FuenteRecurso: any;
  @Input() Raiz: string;

  selectedTreeRow: any = null;

  sortColumn: string = '';
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  customColumn = 'Codigo';
  defaultColumns = ['Nombre'];
  allColumns = [this.customColumn, ...this.defaultColumns];

  data: ArbolRubros<DatosNodo>[];
  dataSource: NbTreeGridDataSource<any>;
  arbolRubro: boolean;

  subscription$: any;
  subscription2$: any;

  FuenteRecurso$: BehaviorSubject<any>;

  constructor(
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<any>,
    private store: Store<any>,
    private parametric: ParametricService,
  ) {
    this.FuenteRecurso$ = new BehaviorSubject(this.FuenteRecurso);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.store.select(getArbolRubro).subscribe((arbol) => {
    });
    if (changes.FuenteRecurso) {
      this.FuenteRecurso$.next(this.FuenteRecurso);
      this.store.dispatch(LoadNodoSeleccionado(null));
    }
  }

  ngOnInit() {
    this.arbolRubro = false;
    const getters: NbGetters<ArbolRubros<DatosNodo>, ArbolRubros<DatosNodo>> = {
      dataGetter: (node: ArbolRubros<DatosNodo>) => node.data || null,
      childrenGetter: (node: ArbolRubros<DatosNodo>) => !!node.children && !!node.children.length ? node.children : [],
      expandedGetter: (node: ArbolRubros<DatosNodo>) => !!node.expanded,
    };
    this.subscription$ = combineLatest([
      this.store.select(getArbolRubro),
      this.FuenteRecurso$.asObservable(),
    ]).subscribe(([arbol, fuente]) => {
      if (Object.keys(arbol).length !== 0) {
        if (fuente) {
          this.data = this.CargarRubros(fuente, arbol);
        } else {
          this.data = [arbol[0]];
        }
        this.dataSource = this.dataSourceBuilder.create(this.data, getters);
      }
    });
    this.subscription2$ = this.store.select(getNodoSeleccionado).subscribe((rubro: any) => {
      if (rubro) {
        if (Object.keys(rubro)[0] !== 'type') {
          if (rubro !== null) {
            this.selectedTreeRow = rubro;
          }
        }
      }
    });
  }

  changeSort(sortRequest: NbSortRequest): void {
    this.dataSource.sort(sortRequest);
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getDirection(column: string): NbSortDirection {
    if (column === this.sortColumn) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  ngOnDestroy(): void {
    if (this.subscription$) this.subscription$.unsubscribe();
    if (this.subscription2$) this.subscription2$.unsubscribe();
  }

  onSelect(row: any) {
    this.store.dispatch(LoadNodoSeleccionado(row));
  }

  CargarRubros(Fuente: any, Arbol: any) {
    const ArbolFuenteRecurso = Arbol[0].children.find(
      hijo => hijo.Codigo === Fuente
    );

    return [ArbolFuenteRecurso];
  }
}
