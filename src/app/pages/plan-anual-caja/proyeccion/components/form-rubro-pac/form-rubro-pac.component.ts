import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-form-rubro-pac',
  templateUrl: './form-rubro-pac.component.html',
  styleUrls: ['./form-rubro-pac.component.scss']
})
export class FormRubroPacComponent implements OnInit {
  
  title: string;

  constructor() {
    this.title = 'PROYECCION PLAN ANUAL DE CAJA';
  }

  ngOnInit() {
  }

}
