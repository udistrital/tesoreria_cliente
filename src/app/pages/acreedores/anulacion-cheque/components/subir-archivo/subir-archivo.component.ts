import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-subir-archivo',
  templateUrl: './subir-archivo.component.html',
  styleUrls: ['./subir-archivo.component.scss']
})
export class SubirArchivoComponent implements OnInit {
  files: any;

  constructor(
    private route: Router,
  ) {
  }

  ngOnInit() {
  }

  GenerarReporte() {
    this.route.navigate(['pages/acreedores/anulacion-cheque/tabla-anulacion']);
  }
  onFileInput(event: any) {
    this.files = event.target.files;
  }


}
