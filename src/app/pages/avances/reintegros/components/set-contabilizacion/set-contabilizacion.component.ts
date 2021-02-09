import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-set-contabilizacion',
  templateUrl: './set-contabilizacion.component.html',
  styleUrls: ['./set-contabilizacion.component.scss']
})
export class SetContabilizacionComponent implements OnInit {

  contabilizacionGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
