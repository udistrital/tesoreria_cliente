import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-consulta-general',
  templateUrl: './consulta-general.component.html',
  styleUrls: ['./consulta-general.component.scss']
})
export class ConsultaGeneralComponent implements OnInit {


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
    this.route.navigate(['pages/recaudo-matriculas/consulta-matriculas/tabla-consulta']);
  }


}
