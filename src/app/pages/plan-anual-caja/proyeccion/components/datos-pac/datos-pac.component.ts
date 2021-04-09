import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-datos-pac',
  templateUrl: './datos-pac.component.html',
  styleUrls: ['./datos-pac.component.scss']
})
export class DatosPacComponent implements OnInit, OnChanges {

  @Input() Fuentes: any;
  DatosPACForm: FormGroup;
  PACAprobado: any;
  TotalDistribuir: any;

  constructor(
    private fb: FormBuilder,
  ) {
    this.PACAprobado = 0;
    this.TotalDistribuir = 0;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if (changes.Fuentes && this.DatosPACForm) {
      this.DatosPACForm.get('ApropiacionPresupuestal').setValue(this.ValorFuentes(this.Fuentes))
    }
  }

  ngOnInit() {
    this.CrearDatosPACForm()
  }

  CrearDatosPACForm() {
    this.DatosPACForm = this.fb.group({
      ApropiacionPresupuestal: [this.ValorFuentes(this.Fuentes), [Validators.required]],
      SinSituacionFondos: [0, [Validators.required]],
      Rezago: [0, [Validators.required]],
    });
    this.DatosPACForm.valueChanges.subscribe((data: any) => {
      console.log(data)
      if ((data.ApropiacionPresupuestal - data.SinSituacionFondos) >= 0) {
        this.PACAprobado = data.ApropiacionPresupuestal - data.SinSituacionFondos
      } else {
        this.PACAprobado === 0;
      }
      if ((this.PACAprobado - data.Rezago) >= 0) {
        this.TotalDistribuir = this.PACAprobado - data.Rezago
      } else {
        this.TotalDistribuir === 0;
      }
    })
  }
  ValorFuentes(Fuentes: any[]) {
    console.log(Fuentes)
    if (Object.keys(Fuentes).length === 1) {
      return Fuentes[0].ValorActual
    } else {
      return Fuentes.map((data: any) => {
        return data.ValorActual
      }).reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
    }
  }

}
