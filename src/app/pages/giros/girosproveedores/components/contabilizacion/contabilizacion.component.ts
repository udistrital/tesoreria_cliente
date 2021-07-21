import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { SelectService } from '../../../../../shared/services/select.service';
// import {MatDialog} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { MatStepper, MatDialog } from '@angular/material';
import { cargarDatosTercero } from '../../actions/giros-proveedores.actions';

@Component({
  selector: 'ngx-contabilizacion',
  templateUrl: './contabilizacion.component.html',
  styleUrls: ['./contabilizacion.component.scss']
})
export class ContabilizacionComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('modalProveedores', {static: false}) modalContenido: any;
  @Output() validacionContabilidad: EventEmitter <any>;

  informacion: boolean = false;
  erogacion: boolean = false;
  dialogRef: any;

  constructor(public modalProveedor: SelectService,
    public dialog: MatDialog,
    private store: Store<any> ) {
      this.validacionContabilidad = new EventEmitter;
     }

  ngAfterViewInit() {
    this.dialogRef = this.dialog.open(this.modalContenido).afterClosed().subscribe(
      result => {
        this.modalProveedor.modalProveedores = false;
      }
    );
  }

  ngOnDestroy() {
    this.modalProveedor.modalProveedores = false;
  }

  ngOnInit() {}

  validarContabilidad(data: boolean) {
    this.informacion = data;
  }

  informacionContable(data: any, stepper: MatStepper) {
    this.store.dispatch(cargarDatosTercero(data));
    stepper.next();
  }

  validarErogacion(data: boolean) {
    this.erogacion = data;
  }

  informacionErogacion(data: any, stepper: MatStepper) {
    stepper.next();
  }


  informacionResumen(data: any) {
    this.validacionContabilidad.emit(data);
    this.cerrar();
  }

  cerrar () {
    this.dialog.closeAll();
    this.modalProveedor.modalProveedores = false;
  }

}
