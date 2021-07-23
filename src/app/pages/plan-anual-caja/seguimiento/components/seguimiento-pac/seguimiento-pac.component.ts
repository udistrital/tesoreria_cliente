import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-seguimiento-pac',
  templateUrl: './seguimiento-pac.component.html',
  styleUrls: ['./seguimiento-pac.component.scss']
})
export class SeguimientoPacComponent implements OnInit {

  title: string;

  constructor() {
    this.title = 'SEGUIMIENTO PLAN ANUAL DE CAJA';
  }

  ngOnInit() {
  }

  OnCreate() {
    console.warn('Funcionalidad aún no desarrollada');
  }

}
