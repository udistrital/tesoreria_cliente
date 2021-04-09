import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-set-datosgenerales',
  templateUrl: './set-datosgenerales.component.html',
  styleUrls: ['./set-datosgenerales.component.scss']
})
export class SetDatosgeneralesComponent implements OnInit {

  datosGeneralesGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
