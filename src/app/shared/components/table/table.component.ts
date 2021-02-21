import { Component, OnInit, Input} from '@angular/core';
import { SelectService } from '../../services/select.service';

@Component({
  selector: 'ngx-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() titles: String[] = [];
  @Input() attributes: String[] = [];
  @Input() list: any[] = [];

  @Input() seleccion: boolean = false;
  @Input() filtro: boolean = false;
  @Input() total: boolean = false;

  elementosElegidos = [];
  row: any;
  consecutivo: any;
  stringBusqueda: any;

  constructor( private selection: SelectService,
    ) {
      this.stringBusqueda = '';
     }

  ngOnInit() {
    this.selection.elementosElegidos = this.elementosElegidos;
  }


  seleccionar ( cuenta: any, isChecked: boolean) {
    if (isChecked) {
      this.elementosElegidos.push(cuenta);
      this.selection.elementosElegidos = this.elementosElegidos;
    } else {
      const index = this.elementosElegidos.findIndex( dato => dato.value === cuenta.consecutivo);
      this.elementosElegidos.splice(index);
      this.selection.elementosElegidos = this.elementosElegidos;
    }
  }

  get valorGirado() {
    return this.list.reduce((a: any, b: { valorGirado: number; }) => a + b.valorGirado, 0);
  }

  get porcentajeGirado() {
    return this.list.reduce((a: any, b: { porcentajeGirado: number; }) => a + b.porcentajeGirado, 0);
  }

  get valorLegalizado() {
    return this.list.reduce((a: any, b: { valorLegalizado: number; }) => a + b.valorLegalizado, 0);
  }

  get porcentajeLegalizado() {
    return this.list.reduce((a: any, b: { porcentajeLegalizado: number; }) => a + b.porcentajeLegalizado, 0);
  }

  get valorLegalizar() {
    return this.list.reduce((a: any, b: { valorLegalizar: number; }) => a + b.valorLegalizar, 0);
  }

  get porcentajeLegalizar() {
    return this.list.reduce((a: any, b: { porcentajeLegalizar: number; }) => a + b.porcentajeLegalizar, 0);
  }
  get totalAvances() {
    return this.list.reduce((a: any, b: { totalAvances: number; }) => a + b.totalAvances, 0);
  }
}
