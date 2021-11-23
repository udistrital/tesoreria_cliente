import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { OPCIONES_AREA_FUNCIONAL } from '../../../../../shared/interfaces/interfaces';
import { obtenerBancos, obtenerSucursales, obtenerDivisas, cargarDivisas, obtenerRecursos, obtenerTipoCuenta, obtenerCuentasBancarias,
        cargarCuentasBancarias, cargarRecursos, cargarBancos } from '../../../../../shared/actions/shared.actions';
import { Store } from '@ngrx/store';
import { seleccionarBancos, seleccionarDivisas, seleccionarSucursales, seleccionarRecursos, seleccionarTipoCuentas, seleccionarCuentasBancarias } from '../../../../../shared/selectors/shared.selectors';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { actualizarCuentaBancaria, crearCuentaBancaria } from '../../actions/cuentaBancaria.action';

@Component({
  selector: 'ngx-create-cuenta',
  templateUrl: './create-cuenta.component.html',
  styleUrls: ['./create-cuenta.component.scss']
})
export class CreateCuentaComponent implements OnInit, OnDestroy {
  @ViewChild('modalGuardar', {static: false}) modalGuardar: ElementRef;
  // Modal
  closeResult = '';
  opcionesAreaFuncional: any;
  bancos: any;
  subBancos$: any;
  sucursales: any;
  subSucursales$: any;
  divisas: any;
  subDivisas$: any;
  tipoCuentas: any;
  subTipoCuentas$: any;
  recursos: any;
  subRecursos$: any;
  checkedRecaudadora: boolean;
  tituloAccion: string;
  datosCuentaBancaria: any;
  subCuentaBancaria$: any;
  id: string;
  touched: boolean;
  recaudadoraPagadora: string;
  sucursal: any;
  ver: boolean;

  // Formulario
  crearCuentaBancariaGroup: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<any>, private modalService: NgbModal, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.opcionesAreaFuncional = OPCIONES_AREA_FUNCIONAL;
    this.bancos = [];
    this.sucursales = [];
    this.divisas = [];
    this.recursos = [];
    this.tipoCuentas = [];
    this.datosCuentaBancaria = [];
    this.touched = false;
    this.store.dispatch(obtenerBancos({}));
    this.store.dispatch(obtenerDivisas({}));
    this.store.dispatch(obtenerTipoCuenta({}));
    this.tituloAccion = this.activatedRoute.snapshot.url[0].path;
    if (this.tituloAccion === 'ver' ) this.ver = true;
    else this.ver = false;
    if (this.tituloAccion === 'editar' || this.tituloAccion === 'ver' ) {
      this.store.dispatch(obtenerSucursales({query: {InfoComplementariaId__CodigoAbreviacion: 'SUC',
                                            Activo: true}}));
      this.store.dispatch(obtenerCuentasBancarias({query: {Id: this.id}}));
    } else this.store.dispatch(obtenerRecursos({codigo: 2}));
   }
  ngOnDestroy() {
    this.clearStore();
    if (this.tituloAccion === 'editar' || this.tituloAccion === 'ver') {
      this.subCuentaBancaria$.unsubscribe();
    }
    this.tituloAccion = '';
    this.subBancos$.unsubscribe();
    this.subDivisas$.unsubscribe();
    this.subRecursos$.unsubscribe();
    this.subTipoCuentas$.unsubscribe();
  }

  clearStore() {
    this.store.dispatch(cargarCuentasBancarias(null));
    this.store.dispatch(cargarRecursos(null));
    this.store.dispatch(cargarBancos(null));
  }

  ngOnInit() {
    if (this.tituloAccion === 'editar' || this.tituloAccion === 'ver') {
      this.subCuentaBancaria$ = this.store.select(seleccionarCuentasBancarias).subscribe((accion) => {
        if (accion && accion.CuentasBancarias) {
          this.datosCuentaBancaria = accion.CuentasBancarias[0];
          if (this.datosCuentaBancaria.Recaudadora === true && (this.tituloAccion === 'editar' || this.tituloAccion === 'ver')) {
            this.store.dispatch(obtenerRecursos({codigo: 2}));
            this.subBancos();
          } else if (this.datosCuentaBancaria.Recaudadora === false && (this.tituloAccion === 'editar' || this.tituloAccion === 'ver')) {
            this.store.dispatch(obtenerRecursos({codigo: 3}));
            this.subBancos();
          }
        }
      });
  } else {
      this.recaudadoraPagadora = 'recaudadora';
      this.subBancos();
      }
      this.createForm();
    }

  createForm() {
    this.crearCuentaBancariaGroup = this.fb.group({
      areaFuncional: ['', Validators.required],
      recurso: ['', Validators.required],
      nombreCuenta: ['', Validators.required],
      numeroCuenta: ['', Validators.required],
      tipoCuenta: ['', Validators.required],
      recaudadoraPagadora: [this.recaudadoraPagadora],
      cuatropormil: [false],
      divisa: ['', Validators.required],
      nombreBanco: ['', Validators.required],
      sucursal: ['', Validators.required],
    });

  }

  isInvalid(nombre: string) {
    const input = this.crearCuentaBancariaGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  consultaSucursales() {
    const banco = this.crearCuentaBancariaGroup.controls['nombreBanco'].value;
    this.store.dispatch(obtenerSucursales({query: {InfoComplementariaId__CodigoAbreviacion: 'SUC',
    TerceroId__NombreCompleto: banco.TerceroId.NombreCompleto, Activo: true}}));
    this.subSucursales$ = this.store.select(seleccionarSucursales).subscribe((accion) => {
      if (accion &&  accion.Sucursales) {
        if (accion.Sucursales.length && accion.Sucursales[0].Id) {
          this.sucursales = accion.Sucursales;
          this.sucursales.forEach(element => {
            element.sucursal = JSON.parse(element.Dato).nombreSucursal;
          });
        }
      }
    });
  }

  saveForm() {
    if (this.crearCuentaBancariaGroup.invalid) {
      return Object.values(this.crearCuentaBancariaGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  guardar() {
    if (this.crearCuentaBancariaGroup.valid) {
      let recaudadora;
      let pagadora;
      if (this.crearCuentaBancariaGroup.value.recaudadoraPagadora === 'recaudadora') {
        recaudadora = true;
        pagadora = false;
      } else {
        recaudadora = false;
        pagadora = true;
      }
      const elemento = {
        Activo: true,
        NombreCuenta: this.crearCuentaBancariaGroup.value.nombreCuenta,
        NumeroCuenta: this.crearCuentaBancariaGroup.value.numeroCuenta,
        SucursalId: this.crearCuentaBancariaGroup.value.sucursal.Id,
        TipoCuentaId: this.crearCuentaBancariaGroup.value.tipoCuenta.Id,
        Recaudadora: recaudadora,
        Pagadora: pagadora,
        CuatroPorMil: this.crearCuentaBancariaGroup.value.cuatropormil,
        RecursoId: this.crearCuentaBancariaGroup.value.recurso.data.Codigo,
        AreaFuncional: this.crearCuentaBancariaGroup.value.areaFuncional.Id,
        DivisaId: this.crearCuentaBancariaGroup.value.divisa.Id
      };
      this.modalService.open(this.modalGuardar).result.then((result) => {
        if (`${result}`) {
          if (this.tituloAccion === 'editar' || this.tituloAccion === 'ver') {
            this.store.dispatch(actualizarCuentaBancaria({id: this.id, element: elemento}));
          } else {
            this.store.dispatch(crearCuentaBancaria({element: elemento}));
          }
        }
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
      this.saveForm();
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  consultaTipoRecursos(recaudadora: boolean) {
    if (this.ver === false) {
      this.subRecursos$.unsubscribe();
      this.checkedRecaudadora = recaudadora;
      if (this.checkedRecaudadora === true) {
        this.store.dispatch(obtenerRecursos({codigo: 2}));
      } else {
        this.store.dispatch(obtenerRecursos({codigo: 3}));
      }
      this.subRecursos();
    }
  }

  subRecursos() {
    this.subRecursos$ = this.store.select(seleccionarRecursos).subscribe((accion) => {
      if (accion &&  accion.Recursos) {
        if (accion.Recursos.length && accion.Recursos[0].children) {
          this.recursos = accion.Recursos[0].children;
          this.recursos.forEach(element => {
            element.recursos = element.data.Nombre;
          });
          if ((this.tituloAccion === 'editar' || this.tituloAccion === 'ver' ) && this.touched === false) {
            this.cuentaBancaria();
          }
        }
      }
    });
    if (this.crearCuentaBancariaGroup.controls.recurso.touched) {
      this.crearCuentaBancariaGroup.controls.recurso.markAsPending();
      this.isInvalid('recurso');
    }
  }

  subBancos() {
    this.subBancos$ = this.store.select(seleccionarBancos).subscribe((action) => {
      if (action && action.Bancos) {
        this.bancos = action.Bancos;
        this.subDivisas();
      }
    });
  }

  subDivisas() {
    this.subDivisas$ = this.store.select(seleccionarDivisas).subscribe((action) => {
      if (action && action.Divisas) {
        this.divisas = action.Divisas;
        this.subTipoCuenta();
      }
    });
  }

  subTipoCuenta() {
    this.subTipoCuentas$ = this.store.select(seleccionarTipoCuentas).subscribe((action) => {
      if (action && action.TipoCuentas) {
        this.tipoCuentas = action.TipoCuentas;
        this.subRecursos();
      }
    });
  }

  cuentaBancaria() {
    this.touched = true;
    this.subCuentaBancaria$.unsubscribe();
    if (this.tituloAccion === 'editar' || this.tituloAccion === 'ver') {
      this.subCuentaBancaria$ = this.store.select(seleccionarCuentasBancarias).subscribe((accion) => {
        if (accion && accion.CuentasBancarias) {
          this.datosCuentaBancaria = accion.CuentasBancarias[0];
          if (this.datosCuentaBancaria.Recaudadora === true) this.recaudadoraPagadora = 'recaudadora';
          else this.recaudadoraPagadora = 'pagadora';
          this.subSucursales$ = this.store.select(seleccionarSucursales).subscribe((accion) => {
            if (accion &&  accion.Sucursales) {
              if (accion.Sucursales.length && accion.Sucursales[0].Id) {
                this.sucursales = accion.Sucursales;
                this.sucursales.forEach(element => {
                  element.sucursal = JSON.parse(element.Dato).nombreSucursal;
                });
              }
            }
          });
          this.sucursal = this.sucursales[this.sucursales.findIndex((e: any) => e.Id === this.datosCuentaBancaria.SucursalId)];
          this.sucursales = this.sucursales.filter((e: any) => e.TerceroId.NombreCompleto === this.sucursal.TerceroId.NombreCompleto);
          if (this.recursos && this.sucursal && this.bancos)
          this.crearCuentaBancariaGroup.setValue({
            areaFuncional: this.opcionesAreaFuncional[this.opcionesAreaFuncional.findIndex((e: any) => e.Id === this.datosCuentaBancaria.AreaFuncional)],
            recurso: this.recursos[this.recursos.findIndex((e: any) => e.Codigo === this.datosCuentaBancaria.RecursoId)],
            nombreCuenta: this.datosCuentaBancaria.NombreCuenta,
            numeroCuenta: this.datosCuentaBancaria.NumeroCuenta,
            tipoCuenta: this.tipoCuentas[this.tipoCuentas.findIndex((e: any) => e.Id === this.datosCuentaBancaria.TipoCuentaId)],
            recaudadoraPagadora: this.recaudadoraPagadora,
            cuatropormil: this.datosCuentaBancaria.CuatroPorMil,
            divisa: this.divisas[this.divisas.findIndex((e: any) => e.Id === this.datosCuentaBancaria.DivisaId)],
            nombreBanco: this.bancos[this.bancos.findIndex((e: any) => e.TerceroId.NombreCompleto === this.sucursal.TerceroId.NombreCompleto)],
            sucursal: this.sucursal
          });
        }
      });
    }
  }
}
