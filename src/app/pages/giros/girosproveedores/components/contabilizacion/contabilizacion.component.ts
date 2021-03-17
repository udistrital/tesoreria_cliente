import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SelectService } from '../../../../../shared/services/select.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'ngx-contabilizacion',
  templateUrl: './contabilizacion.component.html',
  styleUrls: ['./contabilizacion.component.scss']
})
export class ContabilizacionComponent implements OnInit, AfterViewInit {

  modal: NgbModalRef;
  dialogRef: any;
  
  @ViewChild('modalProveedores', {static: false}) modalContenido: any;

  constructor(private modalService: NgbModal,
    public modalProveedor: SelectService,
    public dialog: MatDialog ) { }

  ngAfterViewInit() {
    this.dialogRef = this.dialog.open(this.modalContenido);    
  }

  ngOnInit() {
    
  }

  abrir() {
    this.modal = this.modalService.open(this.modalContenido);
  }

  cerrar () {
    this.modal.close();
    this.modalProveedor.modalProveedores = false;
  }

}
