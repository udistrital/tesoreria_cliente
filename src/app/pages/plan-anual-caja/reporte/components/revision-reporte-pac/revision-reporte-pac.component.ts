import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CONFIGURACION_TABLA_REVISION_PAC, CONFIGURACION_TABLA_REVISION_PAC_2, DATOS_REVISION_PAC, DATOS_REVISION_PAC_2 } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-revision-reporte-pac',
  templateUrl: './revision-reporte-pac.component.html',
  styleUrls: ['./revision-reporte-pac.component.scss']
})
export class RevisionReportePacComponent implements OnInit {

  configuracion1: any;
  configuracion2: any;
  datos1: any;
  datos2: any;
  valid: any;


  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.configuracion1 = CONFIGURACION_TABLA_REVISION_PAC;
    this.configuracion2 = CONFIGURACION_TABLA_REVISION_PAC_2;
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.valid = params['valid'] || null;
      if (this.valid) {
        this.datos1 = [];
        this.datos2 = [];
      } else {
        this.datos1 = DATOS_REVISION_PAC;
        this.datos2 = DATOS_REVISION_PAC_2;
      }
    });

  }

  ngOnInit() {
  }
  GenerarReporte() {
    this.route.navigate(['pages/plan-anual-caja/reporte/tabla-reporte-pac']);
  }
}
