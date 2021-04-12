import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-set-resumencertificado',
  templateUrl: './set-resumencertificado.component.html',
  styleUrls: ['./set-resumencertificado.component.scss']
})
export class SetResumencertificadoComponent implements OnInit {

  resumenCertificadoGroup: FormBuilder;

  constructor() { }

  ngOnInit() {
  }

}
