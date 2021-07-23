import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-aprobar-pac',
  templateUrl: './aprobar-pac.component.html',
  styleUrls: ['./aprobar-pac.component.scss']
})
export class AprobarPacComponent implements OnInit {

  title: string;

  constructor() {
    this.title = 'APROBACION PLAN ANUAL DE CAJA';
  }

  ngOnInit() {
  }

  OnCreate() {
    console.warn('Funcionalidad aún no desarrollada')
  }

}
