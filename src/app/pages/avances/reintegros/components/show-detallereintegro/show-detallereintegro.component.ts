import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-show-detallereintegro',
  templateUrl: './show-detallereintegro.component.html',
  styleUrls: ['./show-detallereintegro.component.scss']
})
export class ShowDetallereintegroComponent implements OnInit {

  detalleReintegroGroup: FormGroup;

  constructor() {

   }

  ngOnInit() {
  }

}
