import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { SelectService } from '../../../../../shared/services/select.service';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material';
import { Store } from '@ngrx/store';
import { cargarDatosTercero } from '../../actions/girosnomina.actions';
@Component({
  selector: 'ngx-contabilizacion',
  templateUrl: './contabilizacion.component.html',
  styleUrls: ['./contabilizacion.component.scss']
})
export class ContabilizacionComponent implements OnInit, AfterViewInit, OnDestroy {

  @Output() validacionContabilidad: EventEmitter<any>;
  @ViewChild('modalNomina', { static: false }) modalContenido: any;
  dialogRef: any;
  informacion: boolean = false;
  erogacion: boolean = false;

  constructor(public modalNomina: SelectService,
    public dialog: MatDialog,
    private store: Store<any> ) {
      this.validacionContabilidad = new EventEmitter;
     }

  ngAfterViewInit() {
    this.dialogRef = this.dialog.open(this.modalContenido).afterClosed().subscribe(
      result => {
        this.modalNomina.modalNomina = false;
      }
    );
  }

  ngOnDestroy() {
    this.modalNomina.modalNomina = false;
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
    this.modalNomina.modalNomina = false;
  }

}
