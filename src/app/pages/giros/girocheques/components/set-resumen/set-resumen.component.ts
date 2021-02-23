import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import Swal from 'sweetalert2';
import { getDatosDetalle, getDatosErogacion, getDatosContabilizacion, getTablaContabilizacion } from '../../selectors/girocheques.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-set-resumen',
  templateUrl: './set-resumen.component.html',
  styleUrls: ['./set-resumen.component.scss']
})
export class SetResumenComponent implements OnInit, OnDestroy {

  subscriptionDetalle$: any;
  subscriptionErogacion$: any;
  subscriptionContabilizacion$: any;
  subscriptionTabla$: any;

  dataContabilizacion: any;
  dataDetalles: any;
  dataErogacion: any;
  debito: any;
  credito: any;

  titles = ['Secuencia', 'Tercero', 'N° de cuenta', 'Nombre cuenta', 'Detalle', 'Débito', 'Crédito'];
  attributes = [['secuencia'], ['tercero'], ['numeroCuenta'], ['nombreCuenta'], ['detalle'], ['debito'], ['credito']];

  contabilizacion: any;
  lista: any;

  constructor(private store: Store<any>,
    private route: Router) {
    this.lista = [];
   }

  ngOnDestroy() {
    this.subscriptionContabilizacion$.unsubscribe();
    this.subscriptionDetalle$.unsubscribe();
    this.subscriptionErogacion$.unsubscribe();
    this.subscriptionTabla$.unsubscribe();
  }

  ngOnInit() {
    this.subscriptionDetalle$ = this.store.select(getDatosDetalle).subscribe(
      data => {
        if (data !== null) {
          this.dataDetalles = data;
        }
      }
    );
    this.subscriptionErogacion$ = this.store.select(getDatosErogacion).subscribe(
      data => {
        if (data !== null) {
          this.dataErogacion = data;
        }
      }
    );
    this.subscriptionContabilizacion$ = this.store.select(getDatosContabilizacion).subscribe(
      data => {
        if (data !== null) {
          this.dataContabilizacion = data;
        }
      }
    );
    this.subscriptionTabla$ = this.store.select(getTablaContabilizacion).subscribe(
      data => {
        if (data !== null) {
          let i = 0;
          while (data[i] !== undefined) {
            this.lista.push(data[i]);
            i++;
          }
          this.contabilizacion = this.lista;
        }
      }
    );
  }

  totalDebito() {
    if (this.contabilizacion !== undefined) {
      return this.debito = this.contabilizacion.reduce((a: any, b: { debito: number; }) => a + b.debito, 0);
    }
  }

  totalCredito() {
    if (this.contabilizacion !== undefined) {
      return this.credito = this.contabilizacion.reduce((a: any, b: { credito: number; }) => a + b.credito, 0);
    }
  }

  guardar() {
    Swal.fire({
      type: 'success',
      title: '¡Guardado!',
      text: 'Se ha guardado el giro de cheque',
      confirmButtonText: 'Aceptar',
    });
    this.route.navigateByUrl('/pages/giros/cheques/lista');
  }

}
