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
}
