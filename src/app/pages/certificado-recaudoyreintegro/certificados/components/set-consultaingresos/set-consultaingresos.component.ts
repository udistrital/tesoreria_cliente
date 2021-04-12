import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-set-consultaingresos',
  templateUrl: './set-consultaingresos.component.html',
  styleUrls: ['./set-consultaingresos.component.scss']
})
export class SetConsultaingresosComponent implements OnInit {

  consultaIngresosGroup: FormBuilder;

  constructor() { }

  ngOnInit() {
  }

}
