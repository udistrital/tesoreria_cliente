import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-ejecucion',
  templateUrl: './ejecucion.component.html',
  styleUrls: ['./ejecucion.component.scss']
})
export class EjecucionComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  volver() {
    this.router.navigateByUrl('pages/avances/ejecucion/informe');
  }

  generar () {}

}
