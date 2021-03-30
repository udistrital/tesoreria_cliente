import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-show-detalleadquisicion',
  templateUrl: './show-detalleadquisicion.component.html',
  styleUrls: ['./show-detalleadquisicion.component.scss']
})
export class ShowDetalleadquisicionComponent implements OnInit {

  detalleAdquisicionGroup: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
