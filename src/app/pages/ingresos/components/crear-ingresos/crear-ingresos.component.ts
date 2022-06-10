import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SharedService } from '../../../../shared/services/shared.service';
import { getTipoIngreso } from '../../selectors/ingresos.selectors';

@Component({
  selector: 'ngx-crear-ingresos',
  templateUrl: './crear-ingresos.component.html',
  styleUrls: ['./crear-ingresos.component.scss'],
})
export class CrearIngresosComponent implements OnInit {
  inicio: boolean = false;
  afectacion: boolean = false;

  tipoIngreso: any;
  subscriptionTipoIngreso$: any;

  constructor(
    private store: Store<any>,
    private sharedService: SharedService,
    private route: Router
  ) {}

  ngOnInit() {
    this.subscriptionTipoIngreso$ = this.store
      .select(getTipoIngreso)
      .subscribe((data) => {
        if (!this.sharedService.IfStore(data)) {
          this.route.navigate([`pages/ingresos/lista`]);
        }
      });
  }

  validarInicio(data: boolean) {
    this.inicio = data;
  }

  informacionInicio(data: any, stepper: MatStepper) {
    stepper.next();
  }

  validarRubros(data: boolean) {
    this.afectacion = data;
  }

  informacionRubros(data: any, stepper: MatStepper) {
    stepper.next();
  }
}
