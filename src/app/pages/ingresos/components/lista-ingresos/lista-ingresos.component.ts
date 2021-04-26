import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-lista-ingresos',
  templateUrl: './lista-ingresos.component.html',
  styleUrls: ['./lista-ingresos.component.scss']
})
export class ListaIngresosComponent implements OnInit {

  tipoIngreso: any;

  constructor(
    private routeActived: ActivatedRoute,
  ) { }

  ngOnInit() {
    
  }

}
