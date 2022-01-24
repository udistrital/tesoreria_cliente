import { Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, Renderer2, ViewChildren } from '@angular/core';
import {
  NbGetters,
  NbSortDirection,
  NbTreeGridRowComponent,
  NbTreeGridDataSource,
  NbTreeGridDataSourceBuilder,
  NbSortRequest,
} from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { FormManager } from '../../../../@core/managers/formManager';
import { PopUpManager } from '../../../../@core/managers/popUpManager';
import { FORM_NODO_CONCEPTO } from './form_nodo_concepto';
import { ArbolHelper } from '../../../../@core/helpers/arbol/arbolHelper';
import { Store } from '@ngrx/store';
import { obtenerConceptos, obtenerConceptosByCodigo } from '../../../../shared/actions/shared.actions';
import { seleccionarConceptos } from '../../../../shared/selectors/shared.selectors';
import { Router } from '@angular/router';

interface EstructuraArbolRubrosApropiaciones {
  Codigo: string;
  Descripcion?: string;
  ValorInicial: number;
  Hijos?: EstructuraArbolRubrosApropiaciones[];
  Movimientos?: string[];
  Padre?: string;
  UnidadEjecutora: number;
  Estado?: string;
  IsLeaf: boolean;
  expanded?: boolean;
  isHighlighted?: boolean;
  data?: EstructuraArbolRubrosApropiaciones;
  children?: EstructuraArbolRubrosApropiaciones[];
}

@Component({
  selector: 'ngx-table-conceptos',
  templateUrl: './table-conceptos.component.html',
  styleUrls: ['./table-conceptos.component.scss']
})
export class TableConceptosComponent implements OnInit, OnDestroy, OnChanges {

  @Output() ConceptoSeleccionado = new EventEmitter();
  @Input() updateSignal: Observable<string[]>;
  @Input('paramsFieldsName') paramsFieldsName: object;
  @ViewChildren(NbTreeGridRowComponent, { read: ElementRef }) treeNodes: ElementRef[];

  update: any;
  customColumn = 'Codigo';
  defaultColumns = ['Nombre'];
  hasListener: any[] = [];
  oldHighlight: ElementRef;

  allColumns = [this.customColumn, ...this.defaultColumns];
  dataSource: NbTreeGridDataSource<EstructuraArbolRubrosApropiaciones>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  idHighlight: any;
  isSelected: boolean;
  searchValue: string;
  formData: any;
  nodeData: any;
  selectedNodeData: any;
  cleanForm: boolean;
  showTree: boolean = true;
  viewTab: boolean = false;
  cuentaAlterna: any;
  cuentaAlternaAnt: number;
  roles: any;
  tesoreria: boolean;
  conceptos: any;
  subConceptos$: any;
  constructor(
    private renderer: Renderer2,
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<EstructuraArbolRubrosApropiaciones>,
    // private dataSourceBuilder2: NbTreeGridDataSourceBuilder<EstructuraArbolRubrosApropiaciones>,
    private treeHelper: ArbolHelper,
    private translate: TranslateService,
    private pUpManager: PopUpManager,
    private store: Store<any>,
    private router: Router
    // private rubroHelper: RubroHelper,
  ) {
    this.store.dispatch(obtenerConceptos({}));
  }
  ngOnDestroy(): void {
    this.subConceptos$.unsubscribe();
    this.clearStore();
  }

  clearStore() {
    this.store.dispatch(obtenerConceptos(null));
    this.store.dispatch(obtenerConceptosByCodigo(null));
  }

  ngOnInit() {
    this.roles = (JSON.parse(atob(localStorage.getItem('id_token').split('.')[1])).role)
        .filter((data: any) => (data.indexOf('/') === -1));
    if (this.roles.indexOf('ADMIN_CONTABILIDAD') > -1) this.tesoreria = false;
    else this.tesoreria = true;
    this.loadTree();

    this.formData = FORM_NODO_CONCEPTO;
    this.nodeData = undefined;
    this.construirForm();
  }
  construirForm() {
    this.formData.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formData.campos.length; i++) {
      this.formData.campos[i].label = this.formData.campos[i].label_i18n;
      this.formData.campos[i].placeholder = this.formData.campos[i].label_i18n;
    }

    const naturalezaIndex = FormManager.getIndexForm(this.formData, 'NaturalezaCuentaID');
    const tipoMonedaIndex = FormManager.getIndexForm(this.formData, 'MonedaID');
    const detalleCuentaIndex = FormManager.getIndexForm(this.formData, 'DetalleCuentaID');
    const centroCostosIndex = FormManager.getIndexForm(this.formData, 'CentroDecostosID');

    this.treeHelper.getNaturalezaCuenta().subscribe(res => {
      this.formData.campos[naturalezaIndex].opciones = res;
    });

    this.treeHelper.getTipoMoneda().subscribe(res => {
      this.formData.campos[tipoMonedaIndex].opciones = res;
    });

    this.treeHelper.getDetalleCuenta().subscribe(res => {
      this.formData.campos[detalleCuentaIndex].opciones = res;
    });

    this.treeHelper.getCentroCostos().subscribe(res => {
      this.formData.campos[centroCostosIndex].opciones = res;
    });
  }

  sendMessage() {
    this.router.navigateByUrl('pages/conceptos/crear/hijo/' + this.selectedNodeData.Codigo);
  }

  verConcepto(accion: string) {
    this.router.navigateByUrl('pages/conceptos/' + accion + '/' + this.selectedNodeData.Codigo);
  }

  ngOnChanges(changes) {
    if (changes['updateSignal'] && this.updateSignal) {
      this.updateSignal.subscribe(() => {
        this.loadTree();
      });
    }
    if (changes['externalSearch'] && changes['externalSearch'].currentValue) {
      this.searchValue = changes['externalSearch'].currentValue;
    }
    if (changes['paramsFieldsName'] && changes['paramsFieldsName'].currentValue) {
      this.paramsFieldsName = changes['paramsFieldsName'].currentValue;
    }
  }

  // private data: TreeNode<EstructuraArbolRubrosApropiaciones>[] | TreeNode<EstructuraArbolRubros>[];

  private data: [];

  loadTree() {
    const getters: NbGetters<any, any> = {
      dataGetter: (node: any) => node.data || undefined,
      childrenGetter: (node: any) => !!node.children && !!node.children.length ? node.children : [],
      expandedGetter: (node: any) => !!node.expanded,
    };
    this.customColumn = 'Codigo';
    this.defaultColumns = ['Nombre', 'Activo'];
    this.allColumns = [this.customColumn, ...this.defaultColumns];
    this.subConceptos$ = this.store.select(seleccionarConceptos).subscribe((accion) => {
      if (accion && accion.Conceptos) {
        if (accion.Conceptos.length) {
          this.conceptos = accion.Conceptos;
          this.dataSource = this.dataSourceBuilder.create(this.conceptos, getters);
        }
      }
    });
  }
  updateTreeSignal($event) {
    this.loadTree();
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  async onSelect(selectedItem: any, treegrid) {
    this.idHighlight = treegrid.elementRef.nativeElement.getAttribute('data-picker');
    this.ConceptoSeleccionado.emit(selectedItem.data);
    this.selectedNodeData = selectedItem.data;
  }

  cleanInterface() {
    this.loadTree();
    this.cleanForm = !this.cleanForm;
    // this.selectedNodeData = undefined;
    this.formData.campos[FormManager.getIndexForm(this.formData, 'Codigo')].prefix.value = '';
    this.nodeData = undefined;
  }

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + nextColumnStep * index;
  }

  updateHighlight(newHighlight: ElementRef, row) {
    this.oldHighlight && this.renderer.setStyle(this.oldHighlight.nativeElement, 'background', 'white');
    if (row.Codigo === this.idHighlight) {
      this.renderer.setStyle(newHighlight.nativeElement, 'background', 'lightblue');
    }
    this.oldHighlight = newHighlight;
  }

  validHighlight(selectedItem: any, treegrid) {

    if (selectedItem.data.Codigo === this.idHighlight) {
      this.updateHighlight(treegrid.elementRef, selectedItem.data);
      return true;
    }
    return false;
  }

  validarCampo($event) {
    // Cambios por campo
    switch ($event.nombre) {
      // Cuando se cambia el campo de cuenta alterna, se oculta o muestran el campo de cód y nombre
      case 'CuentaAlterna': {
        const codCuenta = this.formData.campos[FormManager.getIndexForm(this.formData, 'CodigoCuentaAlterna')];
        const nomCuenta = this.formData.campos[FormManager.getIndexForm(this.formData, 'NombreCuentaAlterna')];
        if ($event.valor !== undefined && $event.valor.Id) {
          codCuenta.claseGrid = codCuenta.claseGrid.replaceAll(' d-none', '');
          nomCuenta.claseGrid = nomCuenta.claseGrid.replaceAll(' d-none', '');
          codCuenta.requerido = true;
        } else {
          this.cuentaAlterna = null;
          codCuenta.claseGrid += ' d-none';
          nomCuenta.claseGrid += ' d-none';
          codCuenta.requerido = false;
        }
        break;
      }
      // Cuando se cambia el cód de cuenta, se debe buscar la cuenta
      case 'CodigoCuentaAlterna': {
        if (this.cuentaAlternaAnt !== $event.valor.toString()) {
          this.cuentaAlternaAnt = $event.valor;
          const nomCuenta = this.formData.campos[FormManager.getIndexForm(this.formData, 'NombreCuentaAlterna')];
          const cAlterna = $event.valor.toString();
          let cA = '';
          // Cuenta númerica a cuenta con guiones
          if (cAlterna.length >= 6) {
            cA = cAlterna[0] + '-' + cAlterna[1] + '-' + cAlterna.substring(2, 4) + '-' + cAlterna.substring(4, 6);
            if (cAlterna.length >= 8)
              cA += '-' + cAlterna.substring(6, 8);
          }
          // Valores para cuenta inválida o no encontrada
          this.cuentaAlterna = null;
          nomCuenta.requerido = true;
          nomCuenta.valor = '';
          nomCuenta.alerta = 'Cuenta inválida o no encontrada';
          // Solicitud de datos de cuenta
          this.treeHelper.getInfoCuenta(cA, false).subscribe(res => {
            if (res && res !== undefined && res.Codigo && res.Nombre) {
              // Valores para cuenta válida
              this.cuentaAlterna = res.Codigo;
              nomCuenta.requerido = false;
              nomCuenta.valor = res.Codigo + ' ' + res.Nombre;
              nomCuenta.alerta = null;
            }
          });
        }
        break;
      }
    }
  }

  validarForm($event) {
    if (!$event.valid) return;
    const nodeData = $event.data.NodoCuentaContable;

    nodeData['DetalleCuentaID'] = nodeData['DetalleCuentaID']['Id'];
    nodeData['MonedaID'] = nodeData['MonedaID']['Id'];
    nodeData['NaturalezaCuentaID'] = nodeData['NaturalezaCuentaID']['Id'];
    nodeData['CentroDecostosID'] = nodeData['CentroDecostosID']['Id'];
    nodeData['Ajustable'] = nodeData['Ajustable']['Id'];
    nodeData['RequiereTercero'] = nodeData['RequiereTercero']['Id'];
    nodeData['Nmnc'] = nodeData['Nmnc']['Id'];
    nodeData['CodigoCuentaAlterna'] = this.cuentaAlterna !== null ? this.cuentaAlterna.replaceAll('-', '') : null;
    nodeData['Codigo'] = nodeData['Codigo'] + '';
    nodeData['Activo'] = nodeData['Activa']['Id'];
    if (this.selectedNodeData) {
      nodeData['Padre'] = this.selectedNodeData['Codigo'];
    }
    if (this.nodeData) {
      this.treeHelper.updateNode($event.data.NodoCuentaContable.Codigo, $event.data.NodoCuentaContable).subscribe(res => {
        if (res) {
          this.pUpManager.showAlert('success', 'Cuenta contable', 'Cuenta actualizada correctamente');
          this.cleanInterface();
          this.showTreeTab();
        }
      });
    } else {

      this.treeHelper.addNode($event.data.NodoCuentaContable).subscribe(res => {
        if (res) {
          this.pUpManager.showAlert('success', 'Cuenta contable', 'Cuenta registrada correctamente');
          this.cleanInterface();
          this.showTreeTab();
        }
      });
    }


  }

  showViewTab(option = '') {
    this.showTree = false;
    this.viewTab = true;
    this.formData.campos[FormManager.getIndexForm(this.formData, 'Codigo')].prefix.value = this.selectedNodeData ? this.selectedNodeData.Codigo + '-' : '';
    switch (option) {
      case 'group':
        this.selectedNodeData = undefined;
        this.formData.campos[FormManager.getIndexForm(this.formData, 'Codigo')].prefix.value = '';
        break;

      default:
        break;
    }
  }

  makeFormEditable(editable: boolean, update = false) {
    for (let i = 0; i < this.formData.campos.length; i++) {
      this.formData.campos[i].deshabilitar = editable;
    }
    // always "Codigo" field is disabled.
    if (update === true) {
      const codigoIndex = FormManager.getIndexForm(this.formData, 'Codigo');
      this.formData.campos[codigoIndex].deshabilitar = true;
    }
    this.formData.campos[FormManager.getIndexForm(this.formData, 'NombreCuentaAlterna')].deshabilitar = true;
  }

  showTreeTab() {
    this.showTree = true;
    this.viewTab = false;
  }

  getTreeInfo() {
    this.store.dispatch(obtenerConceptosByCodigo({codigo: this.selectedNodeData.Codigo}));
    this.treeHelper.getInfoCuenta(this.selectedNodeData.Codigo).subscribe(res => {
      this.nodeData = res;
      const naturalezaIndex = FormManager.getIndexForm(this.formData, 'NaturalezaCuentaID');
      const tipoMonedaIndex = FormManager.getIndexForm(this.formData, 'MonedaID');
      const detalleCuentaIndex = FormManager.getIndexForm(this.formData, 'DetalleCuentaID');
      const centroCostosIndex = FormManager.getIndexForm(this.formData, 'CentroDecostosID');
      this.nodeData['DetalleCuentaID'] = this.formData.campos[detalleCuentaIndex].opciones.find(element => element.Id === this.nodeData['DetalleCuentaID']);
      this.nodeData['CentroDecostosID'] = this.formData.campos[centroCostosIndex].opciones.find(element => element.Id === this.nodeData['CentroDecostosID']);
      this.nodeData['MonedaID'] = this.formData.campos[tipoMonedaIndex].opciones.find(element => element.Id === this.nodeData['MonedaID']);
      this.nodeData['NaturalezaCuentaID'] = this.formData.campos[naturalezaIndex].opciones.find(element => element.Id === this.nodeData['NaturalezaCuentaID']);
      this.nodeData['Ajustable'] = this.nodeData['Ajustable'] === true ? { Label: 'Si', Id: true } : { Label: 'No', Id: false };
      this.nodeData['RequiereTercero'] = this.nodeData['RequiereTercero'] === true ? { Label: 'Si', Id: true } : { Label: 'No', Id: false };
      this.nodeData['Nmnc'] = this.nodeData['Nmnc'] === true ? { Label: 'Si', Id: true } : { Label: 'No', Id: false };
      this.nodeData['CuentaAlterna'] =
        this.nodeData['CodigoCuentaAlterna'] !== null && this.nodeData['CodigoCuentaAlterna'] !== '' ? { Label: 'Si', Id: true } : { Label: 'No', Id: false };
      this.nodeData['Activa'] = this.nodeData['Activo'] === true ? { Label: 'Si', Id: true } : { Label: 'No', Id: false };
    });
  }

  modificarConcepto(concepto: any) {
    this.router.navigate(['pages/conceptos/editar/' + this.selectedNodeData.Codigo]);
    return;
  }

}

export class FsIconAComponent {
  @Input() kind: string;

  @Input() expanded: boolean;

  isDir(): boolean {
    return this.kind === 'dir';
  }
}
