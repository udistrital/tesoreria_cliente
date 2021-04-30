import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[ngx-tabla-borrador-boletin]',
  templateUrl: './tabla-borrador-boletin.component.html',
  styleUrls: ['./tabla-borrador-boletin.component.scss']
})
export class TablaBorradorBoletinComponent implements OnInit {

  @Input() config: any;
  @Input() datos: any;
  @Input() rowspanTable: any;
  @Input() index: any;

  constructor() { }

  ngOnInit() {
  }

}
