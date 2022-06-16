import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { getTipoIngreso } from '../../selectors/ingresos.selectors';
import { SharedService } from '../../../../shared/services/shared.service';
import Swal from 'sweetalert2';
import { MockService } from '../../../../shared/services/mock.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-set-inicio',
  templateUrl: './set-inicio.component.html',
  styleUrls: ['./set-inicio.component.scss'],
})
export class SetInicioComponent implements OnInit, OnDestroy {
  @Output() validarForm: EventEmitter<any>;
  @Output() informacionForm: EventEmitter<any>;

  tipoIngreso: any;
  ingresoTipo: any;
  mensaje: boolean = false;
  datosConsultaForm: FormGroup;
  subscriptionTipoIngreso$: any;

  areaFuncional: string[];
  cuentasBancarias: string[];
  cuentas: string[];
  bancos: string[];
  fecha: string;

  bancoSelected: string;
  cuentaBancariaBancos: any;
  numeroCuentaSelected: string;
  nombreCuentaSelected: string;

  fechaInicioMal: boolean = false;
  fechaFinMal: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
    private sharedService: SharedService,
    private route: Router,
    private mockService: MockService,
    private translate: TranslateService,
  ) {
    this.datosConsultaForm = this.formBuilder.group({
      banco: ['', Validators.required],
      areaFuncional: ['', Validators.required],
      fecha: [new Date().toLocaleDateString(), Validators.required],
      nombreCuenta: ['', Validators.required],
      cuentasBancarias: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      codigoRecaudo: ['', Validators.required],
    });
    this.validarForm = new EventEmitter();
    this.informacionForm = new EventEmitter();
  }

  ngOnDestroy() {
    if (this.subscriptionTipoIngreso$ !== undefined) {
      this.subscriptionTipoIngreso$.unsubscribe();
    }
  }

  ngOnInit() {
    this.subscriptionTipoIngreso$ = this.store
      .select(getTipoIngreso)
      .subscribe((data) => {
        if (this.sharedService.IfStore(data)) {
          // console.log('data: ', data);
          switch (data.tipoIngreso.Nombre) {
            case 'icetex':
            case 'barras':
            case 'pse':
            case 'ach':
            case 'recaudoLinea':
            case 'aportesNacion':
            case 'aportesDistrito':
            case 'otrasEntidades':
              this.ingresoTipo = data.tipoIngreso.label;
              break;
            default:
              this.regresar();
              break;
          }
          this.tipoIngreso = data.tipoIngreso;
        }
      });
    this.handleChanges();

    // Traer Bancos de Tesorería MID que tengan cuentas bancarias asociadas
    this.sharedService.getCuentaBancariaBancoMid().subscribe((res) => {
      if (res.Data && res.Data.length) {
        this.cuentaBancariaBancos = res.Data;
        const pruebaBancos = res.Data.map((cuenta) => {
          return cuenta.NombreBanco;
        });

        this.bancos = [...new Set(pruebaBancos)] as string[];
      }
    });

    // Traer Áreas Funcionales del servicio con Mock de datos TODO: Cambiar por un API paramétrica
    this.mockService.getAreasFuncionales().subscribe((res) => {
      this.areaFuncional = res.map((area) => {
        return `${area.codigo} - ${area.nombre}`;
      });
    });
  }

  onSubmit(data: any) {
    if (this.datosConsultaForm.valid) {
      if (
        this.datosConsultaForm.value.fechaFinal <
        this.datosConsultaForm.value.fechaInicio
      ) {
        Swal.fire({
          type: this.translate.instant('AVISOS.error'),
          title: this.translate.instant('AVISOS.error_titulo'),
          html: this.translate.instant('AVISOS.fecha_inicio_mayor_fecha_final'),
          confirmButtonText: this.translate.instant('AVISOS.boton_confirmacion'),
        });
      } else {
        this.mensaje = false;
        this.informacionForm.emit(data);
      }
    } else {
      this.mensaje = true;
      this.validarFormulario();
    }
  }

  handleChanges() {
    this.datosConsultaForm.statusChanges.subscribe((result) => {
      if (result === 'VALID') {
        this.mensaje = false;
        this.validarForm.emit(true);
      } else {
        this.validarForm.emit(false);
      }
    });
  }

  regresar() {
    this.route.navigateByUrl(`pages/ingresos/lista/${this.tipoIngreso.Nombre}`);
  }

  esInvalido(nombre: string) {
    const input = this.datosConsultaForm.get(nombre);
    if (input) return input.invalid && (input.touched || input.dirty);
    else return true;
  }

  validarFormulario() {
    if (this.datosConsultaForm.invalid) {
      return Object.values(this.datosConsultaForm.controls).forEach(
        (control) => {
          control.markAsDirty();
        }
      );
    }
  }

  cambioBanco(event$: string) {
    this.bancoSelected = event$;
    if (event$) {
      this.cuentasBancarias = this.cuentaBancariaBancos
        .filter((cuenta) => {
          return cuenta.NombreBanco === this.bancoSelected;
        })
        .map((cuenta) => {
          return `${cuenta.NumeroCuenta} / ${cuenta.NombreSucursal}`;
        });

      this.cambioNumeroCuenta('');
    }
  }

  cambioNumeroCuenta(event$: any) {
    this.numeroCuentaSelected = event$;
    if (event$) {
      const numCuenta: string = event$.split('/')[0].trim();
      const query = { NumeroCuenta: numCuenta };
      const limit = -1;
      this.sharedService.getCuentasBancarias(query, limit).subscribe((res) => {
        if (res.Data && res.Data.length) {
          this.cuentas = res.Data.map((cuenta) => {
            return cuenta.NombreCuenta;
          });
        }
      });
      this.cambioNombreCuenta('');
    }
  }

  cambioNombreCuenta(event$: any) {
    this.nombreCuentaSelected = event$;
  }
}
