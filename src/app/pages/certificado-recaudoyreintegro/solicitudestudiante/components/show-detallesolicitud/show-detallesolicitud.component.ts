import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-show-detallesolicitud',
  templateUrl: './show-detallesolicitud.component.html',
  styleUrls: ['./show-detallesolicitud.component.scss']
})
export class ShowDetallesolicitudComponent implements OnInit {

  detalleSolicitudGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
