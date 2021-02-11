import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.scss']
})
export class InformeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  ejecucion() {
    this.router.navigateByUrl('pages/avances/ejecucion/ejecucion');
  }

  consolidado() {
    this.router.navigateByUrl('pages/avances/ejecucion/consolidado');
  }

}
