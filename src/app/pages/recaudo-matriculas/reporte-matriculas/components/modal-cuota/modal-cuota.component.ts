import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'ngx-modal-cuota',
  templateUrl: './modal-cuota.component.html',
  styleUrls: ['./modal-cuota.component.scss']
})
export class ModalCuotaComponent implements OnInit {

  configuracion: any;
  datos: any[];
  title: any;
  subscription$: any;

  constructor(
    private matDialogRef: MatDialogRef<ModalCuotaComponent>,
  ) {
  }
  ngOnInit() {
  }
  OnClose() {
    this.matDialogRef.close();
  }


}
