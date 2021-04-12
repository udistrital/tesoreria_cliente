import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-set-generarcertificado',
  templateUrl: './set-generarcertificado.component.html',
  styleUrls: ['./set-generarcertificado.component.scss']
})
export class SetGenerarcertificadoComponent implements OnInit {

  consultaRecibosGroup: FormBuilder;

  constructor() { }

  ngOnInit() {
  }

}
