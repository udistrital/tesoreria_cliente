import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ngx-create-giro',
  templateUrl: './create-giro.component.html',
  styleUrls: ['./create-giro.component.scss']
})
export class CreateGiroComponent implements OnInit {

  constructor(
    private store : Store <any>,
  ) { }

  ngOnInit() {
  }

  datosInformacionForm(data: any) {
    
  }


}
