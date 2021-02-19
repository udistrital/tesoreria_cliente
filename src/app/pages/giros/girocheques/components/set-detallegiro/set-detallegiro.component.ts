import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-set-detallegiro',
  templateUrl: './set-detallegiro.component.html',
  styleUrls: ['./set-detallegiro.component.scss']
})
export class SetDetallegiroComponent implements OnInit {

  titles = ['Número de rubro', 'Nombre rubro', 'Valor'];
  attributes = [['numeroRubro'], ['nombreRubro'], ['valor']];

  giroCheque: FormGroup;
  rubros: any;
  
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.giroCheque = this.formBuilder.group({
      areaFuncional: ['', Validators.required],
      fecha: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      tipoGiro: ['', Validators.required],
      vigencia: ['', Validators.required],
      numeroOrdenPago: ['', Validators.required],
    });
  }

  onSubmit( data: any ) {

  }

}
