import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-consulta-general-mora',
  templateUrl: './consulta-general-mora.component.html',
  styleUrls: ['./consulta-general-mora.component.scss']
})
export class ConsultaGeneralMoraComponent implements OnInit {


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
    this.route.navigate(['pages/recaudo-matriculas/reporte-mora/tabla-general']);
  }


}
