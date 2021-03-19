import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { SelectService } from '../../../../../shared/services/select.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'ngx-contabilizacion',
  templateUrl: './contabilizacion.component.html',
  styleUrls: ['./contabilizacion.component.scss']
})
export class ContabilizacionComponent implements OnInit, AfterViewInit, OnDestroy {

  dialogRef: any;

  @ViewChild('modalNomina', { static: false }) modalContenido: any;

  constructor(public modalNomina: SelectService,
    public dialog: MatDialog) { }

  ngAfterViewInit() {
    this.dialogRef = this.dialog.open(this.modalContenido);
  }

  ngOnDestroy() {
    this.modalNomina.modalNomina = false;
  }

  ngOnInit() {
  }

  cerrar () {
    this.modalNomina.modalNomina = false;
  }

}
