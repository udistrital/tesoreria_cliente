import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-consulta-control-mora',
  templateUrl: './consulta-control-mora.component.html',
  styleUrls: ['./consulta-control-mora.component.scss']
})
export class ConsultaControlMoraComponent implements OnInit {


  configuracion: any;
  datos: any[];
  title: any;
  subscription$: any;

  constructor(
    private route: Router,
  ) {

  }

  ngOnInit() {

  }
  AgregarRegistro() {
    this.route.navigate(['pages/recaudo-matriculas/control-mora/tabla-consulta']);
  }


}
