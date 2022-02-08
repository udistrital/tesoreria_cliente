import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { GetArbolRubro, obtenerConcepto, obtenerCuentaCredito, obtenerCuentaDebito, obtenerParametros, obtenerParametrosHijos, obtenerRubro,
          obtenerTipoComprobante, SeleccionarCuentaContable, SeleccionarRubro} from '../../../../shared/actions/shared.actions';
import { OPCIONES_AREA_FUNCIONAL, OPCIONES_ENTIDAD_PRESUPUESTAL } from '../../../../shared/interfaces/interfaces';
import { TranslateService } from '@ngx-translate/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { getArbolRubro, getCuentaCredito, getCuentaDebito, getNodoSeleccionado, getNodoSeleccionadoCuentaContableCredito, getNodoSeleccionadoCuentaContableDebito,
          getRubro, seleccionarConcepto, seleccionarParametros, seleccionarParametrosHijos, seleccionarTipoComprobante } from '../../../../shared/selectors/shared.selectors';
import { CONFIGURACION_CUENTASCONTABLES_CREDITO, CONFIGURACION_CUENTASCONTABLES_DEBITO } from '../../interfaces/interface';
import { actualizarConceptoPadre, crearConceptosPadre } from '../../actions/conceptos.action';

@Component({
  selector: 'ngx-create-conceptos',
  templateUrl: './create-conceptos.component.html',
  styleUrls: ['./create-conceptos.component.scss']
})
export class CreateConceptosComponent implements OnInit, OnDestroy {
  @ViewChild('modalGuardar' , {static: false}) modalGuardar: ElementRef;
  @ViewChild('exampleModalLabel' , {static: false}) exampleModalLabel: ElementRef;
  @ViewChild('ngx-arbol-rubro' , {static: false}) arbolRubro: ElementRef;
  @ViewChild('ngx-arbol-cuenta-contable' , {static: false}) arbolCuentaContable: ElementRef;
  @ViewChild('exampleModal' , {static: false}) exampleModal: ElementRef;
  // Modals

  closeResult = '';
  tesoreria: boolean;
  modalCuentaDebitoGroup: FormGroup;
  debito: string;
  credito: string;
  agregarRegistroRubroRef: any;
  opcionesAreaFuncional: any;
  opcionesEntidadPresupuestal: any;
  crearConceptosGroup: FormGroup;
  tituloAccion: string;
  tituloAccionPadre: string;
  padre: boolean;
  clasesTransacciones: any;
  subClaseTransaccion$: any;
  tiposTransacciones: any;
  subTipoTransaccion$: any;
  tiposComprobante: any;
  subTipoComprobante$: any;
  rubroSeleccionado: any;
  subRubroVer$: any;
  subRubro$: any;
  cuentaContableDebitoSeleccionada: any;
  cuentaContableCreditoSeleccionada: any;
  subGetNodoSeleccionado$: any;
  subGetNodoSeleccionadoCuentaContableD$: any;
  subGetNodoSeleccionadoCuentaContableC$: any;
  configRequisitosDebito: any;
  configRequisitosCredito: any;
  cuentasDebitoTabla: any;
  cuentasCreditoTabla: any;
  subscriptionAccion$: any;
  subCuentasDebito$: any;
  subCuentasCredito$: any;
  concepto: any;
  conceptoPadre: string;
  subConcepto$: any;
  rubroBol: boolean;
  verCuentas: boolean;
  ver: boolean;
  roles: any;
  flag: boolean;
  rubroCod: any;
  aux: number;
  auxCount: number;
  ins: boolean;

  constructor(private fb: FormBuilder, private store: Store<any>, private translate: TranslateService, private modalService: NgbModal, private activatedRoute: ActivatedRoute) {
    this.ins = true;
    this.tesoreria = true;
    this.debito = 'debito';
    this.credito = 'credito';
    this.aux = 0;
    this.auxCount = 0;
    this.opcionesAreaFuncional = OPCIONES_AREA_FUNCIONAL;
    this.opcionesEntidadPresupuestal = OPCIONES_ENTIDAD_PRESUPUESTAL;
    this.configRequisitosDebito = CONFIGURACION_CUENTASCONTABLES_DEBITO;
    this.configRequisitosDebito.title.tabla = 0;
    this.configRequisitosCredito = CONFIGURACION_CUENTASCONTABLES_CREDITO;
    this.configRequisitosCredito.title.tabla = 0;
    this.cuentasDebitoTabla = [];
    this.cuentasCreditoTabla = [];
    this.rubroBol = false;
    this.tituloAccion = this.activatedRoute.snapshot.url[1].path;
    if (this.tituloAccion === 'padre') this.padre = true;
    else if (this.tituloAccion === 'hijo') {
      this.verCuentas = true;
      this.tituloAccionPadre = this.activatedRoute.snapshot.url[2].path;
      this.store.dispatch(obtenerConcepto({concepto: this.tituloAccionPadre}));
      this.padre = false;
    } else {
      this.tituloAccion = this.activatedRoute.snapshot.url[0].path;
      this.tituloAccionPadre = this.activatedRoute.snapshot.url[1].path;
      this.store.dispatch(obtenerConcepto({concepto: this.tituloAccionPadre}));
      if (this.tituloAccion === 'ver') this.ver = true;
    }
    this.store.dispatch(obtenerParametros({query: {TipoParametroId__CodigoAbreviacion: 'CT'}}));
    this.store.dispatch(obtenerTipoComprobante({}));
   }
  ngOnDestroy(): void {
    if (this.tituloAccion !== 'padre') this.subConcepto$.unsubscribe();
    this.subClaseTransaccion$.unsubscribe();
    if (!this.padre) {
      this.subTipoTransaccion$.unsubscribe();
      this.subRubro$.unsubscribe();
      if (this.tituloAccion === 'editar' && !this.tesoreria && this.subCuentasCredito$ && this.subCuentasDebito$) {
        this.subCuentasCredito$.unsubscribe();
        this.subCuentasDebito$.unsubscribe();
      }
    }
    this.subTipoComprobante$.unsubscribe();
    this.subGetNodoSeleccionado$.unsubscribe();
    this.subGetNodoSeleccionadoCuentaContableD$.unsubscribe();
    this.subGetNodoSeleccionadoCuentaContableC$.unsubscribe();
    this.clearStore();
  }

  clearStore() {
    this.store.dispatch(obtenerParametros(null));
    this.store.dispatch(obtenerTipoComprobante(null));
    this.store.dispatch(obtenerParametrosHijos(null));
    this.store.dispatch(SeleccionarRubro(null));
    this.store.dispatch(SeleccionarCuentaContable(null));
    this.store.dispatch(SeleccionarCuentaContable(null));
    this.store.dispatch(obtenerCuentaCredito(null));
    this.store.dispatch(obtenerCuentaDebito(null));
  }

  ngOnInit() {
    this.flag = true;
    this.roles = (JSON.parse(atob(localStorage.getItem('id_token').split('.')[1])).role)
        .filter((data: any) => (data.indexOf('/') === -1));
    if (this.roles.indexOf('ADMIN_CONTABILIDAD') > -1) this.tesoreria = false;
    else this.tesoreria = true;
    this.subGetNodoSeleccionado$ = this.store.select(getNodoSeleccionado).subscribe((nodo: any) => {
      if (nodo) {
        if (Object.keys(nodo)[0] !== 'type') {
          if (nodo && !nodo.children) {
            this.SeleccionarRubro(nodo);
            this.rubroSeleccionado = nodo;
          }
        }
      }
    });
    this.subGetNodoSeleccionadoCuentaContableD$ = this.store.select(getNodoSeleccionadoCuentaContableDebito).subscribe((nodoCuenta: any) => {
      if (nodoCuenta) {
        if (Object.keys(nodoCuenta)[0] !== 'type') {
          if (nodoCuenta && !nodoCuenta.children) {
            this.SeleccionarCuentaContable(nodoCuenta);
            this.cuentaContableDebitoSeleccionada = nodoCuenta;
          }
        }
      }
    });
    this.subGetNodoSeleccionadoCuentaContableC$ = this.store.select(getNodoSeleccionadoCuentaContableCredito).subscribe((nodoCuenta: any) => {
      if (nodoCuenta) {
        if (Object.keys(nodoCuenta)[0] !== 'type') {
          if (nodoCuenta && !nodoCuenta.children) {
            this.SeleccionarCuentaContable(nodoCuenta);
            this.cuentaContableCreditoSeleccionada = nodoCuenta;
          }
        }
      }
    });
    this.createForm();
    this.subConcepto();
  }

  createForm() {
    this.crearConceptosGroup = this.fb.group({
      entidadPresupuestal: ['', Validators.required],
      areaFuncional: ['', Validators.required],
      codigo: ['', Validators.required],
      claseTransaccion: ['', Validators.required],
      tipoTransaccion: [''],
      activo: [true],
      nombreConcepto: ['', Validators.required],
      tipoComprobante: ['', Validators.required],
      codigoBogData: ['', Validators.required],
    });
    this.modalCuentaDebitoGroup = this.fb.group({
      tipoId: ['', Validators.required],
      descripcion: ['', Validators.required],
      valorSolicitado: ['', Validators.required],
    });
  }

  isInvalid(nombre: string) {
    if (nombre === 'tipoTransaccion' && this.tituloAccion === 'padre') {
    } else {
      const input = this.crearConceptosGroup.get(nombre);
      if (input)
        return input.invalid && (input.touched || input.dirty);
      else
        return true;
    }
  }

  async consultarTipoTransaccion(change?: boolean) {
    if (this.crearConceptosGroup.value.claseTransaccion && change && this.tituloAccion === 'editar') {
      this.concepto.ClaseTransaccionId = this.crearConceptosGroup.value.claseTransaccion.Id;
      this.concepto.AreaFuncional = this.crearConceptosGroup.value.areaFuncional.Id;
      this.concepto.Codigo = this.crearConceptosGroup.value.codigo;
      this.concepto.Nombre = this.crearConceptosGroup.value.nombreConcepto;
      this.concepto.TipoComprobanteId = this.crearConceptosGroup.value.tipoComprobante.Codigo;
      this.concepto.CodigoBogdata = this.crearConceptosGroup.value.codigoBogData;
    }
    if (change) this.flag = change;
    if (this.crearConceptosGroup.value.claseTransaccion && this.flag) {
      this.flag = true;
    }
    this.ins = true;
    this.rubroSeleccionado = null;
    this.modalService.dismissAll();
    this.subRubro$ = this.store.select(getArbolRubro).subscribe((arbol) => {
      if (arbol[0] && this.auxCount !== this.aux) {
        this.ins = false;
        this.auxCount = this.aux;
        this.rubroBol = true;
      } else if (this.ins) {
        this.aux += 1;
        arbol = null;
        this.rubroBol = false;
      }
      if (this.crearConceptosGroup.value.claseTransaccion) {
        if (this.crearConceptosGroup.value.claseTransaccion.Nombre === 'Ingresos') {
          this.rubroCod = 2;
        } else if (this.crearConceptosGroup.value.claseTransaccion.Nombre === 'Egresos') {
          this.rubroCod = 3;
        }
      }
    });
    if (this.rubroCod && this.flag) this.store.dispatch(GetArbolRubro({ branch: this.rubroCod }));
    if ((this.tituloAccion === 'ver' || this.tituloAccion === 'editar') && this.flag) {
      var tipoTran;
      if (!change) {
        var tipoTran = await this.concepto.ClaseTransaccionId;
      } else {
        tipoTran = await this.crearConceptosGroup.value.claseTransaccion.Id;
      }
      if (tipoTran) {
        this.store.dispatch(obtenerParametrosHijos({query: {ParametroPadreId: tipoTran}}));
        this.flag = false;
      }
    } else if (this.tituloAccion === 'hijo' && this.flag) {
      const tipoTransaccion = this.crearConceptosGroup.controls['claseTransaccion'].value;
      if (tipoTransaccion) this.store.dispatch(obtenerParametrosHijos({query: {ParametroPadreId: tipoTransaccion.Id}}));
    }
    if (change) this.subTipoTransaccion$.unsubscribe();
    this.subTipoTransaccion$ = this.store.select(seleccionarParametrosHijos).subscribe((accion) => {
      if (accion &&  accion.ParametrosHijos) {
        this.tiposTransacciones = accion.ParametrosHijos;
        if ((this.tituloAccion === 'ver' || this.tituloAccion === 'editar') && !change) {
          this.conceptos();
        }
      }
    });
  }

  SeleccionarRubro(rubro: any) {
    this.store.dispatch(SeleccionarRubro(rubro));
  }

  SeleccionarCuentaContable(cuentaContable: any) {
    this.store.dispatch(SeleccionarCuentaContable(cuentaContable));
  }

  agregarCuentaDebito() {
    this.cuentasDebitoTabla.push(this.cuentaContableDebitoSeleccionada.data);
  }

  agregarCuentaCredito() {
    this.cuentasCreditoTabla.push(this.cuentaContableCreditoSeleccionada.data);
  }
  guardar() {
    if (this.crearConceptosGroup.valid) {
      var tipoTransaccion;
      if (this.concepto) {
        if (!this.padre) {
          tipoTransaccion = this.crearConceptosGroup.value.tipoTransaccion.Id;
        } else {
          tipoTransaccion = 0;
        }
      }
      const elemento = {
        Activo: this.crearConceptosGroup.value.activo,
        Padre: null,
        Nombre: this.crearConceptosGroup.value.nombreConcepto,
        AreaFuncional: this.crearConceptosGroup.value.areaFuncional.Id,
        EntidadPresupuestal: this.crearConceptosGroup.value.entidadPresupuestal.Id,
        ClaseTransaccionId: this.crearConceptosGroup.value.claseTransaccion.Id,
        TipoTransaccionId: tipoTransaccion,
        Codigo: this.crearConceptosGroup.value.codigo,
        TipoComprobanteId: this.crearConceptosGroup.value.tipoComprobante.Codigo,
        RubroPresupuestalId: null,
        CodigoBogdata: this.crearConceptosGroup.value.codigoBogData,
        Aplicacion: 'tesoreria',
        CuentasCredito: [],
        CuentasDebito: [],
        Nivel: null,
      };
      if (this.tituloAccion === 'hijo') {
        elemento.Padre = this.concepto.Codigo;
        elemento.RubroPresupuestalId = this.rubroSeleccionado.data.Codigo;
      } else if (this.tituloAccion === 'editar') {
        elemento.Nivel = this.concepto.Nivel;
        if (!this.padre) elemento.TipoTransaccionId = this.crearConceptosGroup.value.tipoTransaccion.Id;
        for (let i = 0; i < this.cuentasDebitoTabla.length; i++) {
          elemento.CuentasDebito.push(this.cuentasDebitoTabla[i].Codigo);
        }
        for (let i = 0; i < this.cuentasCreditoTabla.length; i++) {
          elemento.CuentasCredito.push(this.cuentasCreditoTabla[i].Codigo);
        }
        if (this.padre === false) {
          elemento.Padre = this.conceptoPadre;
          elemento.RubroPresupuestalId = this.rubroSeleccionado.data.Codigo;
        }
      }
      this.modalService.open(this.modalGuardar).result.then((result) => {
        if (`${result}`) {
          if (this.tituloAccion === 'editar' || this.tituloAccion === 'ver') {
            this.store.dispatch(actualizarConceptoPadre({id: this.concepto.id, element: elemento}));
          } else {
            this.store.dispatch(crearConceptosPadre({element: elemento}));
          }
        }
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
      this.saveForm();
    }
  }

  openRubro() {
    this.modalService.open(this.exampleModal).result.then((result) => {
        this.modalService.open(this.exampleModal).close();
    }, (reason) => {
    });
  }

  subConcepto() {
    if (this.tituloAccion === 'padre') {
      this.subClaseTransaccion();
    } else {
      this.subConcepto$ = this.store.select(seleccionarConcepto).subscribe((accion) => {
        if (accion && accion.Concepto) {
          this.concepto = accion.Concepto;
          if (this.concepto.Padre) {
            this.padre = true;
            if (this.tituloAccion === 'ver' || this.tituloAccion === 'editar' ) {
              this.padre = false;
              this.conceptoPadre = this.concepto.Padre;
              this.verCuentas = true;
            }
          } else {
            this.conceptoPadre = this.concepto.Codigo + ' - ' + this.concepto.Nombre;
            this.padre = false;
            this.verCuentas = false;
            if (this.tituloAccion === 'ver' || this.tituloAccion === 'editar' ) {
              this.padre = true;
              this.verCuentas = false;
            }
          }
          this.subClaseTransaccion();
        }
      });
    }
  }

  subClaseTransaccion() {
    this.subClaseTransaccion$ = this.store.select(seleccionarParametros).subscribe((accion) => {
      if (accion && accion.Parametros) {
        this.clasesTransacciones = accion.Parametros;
        this.subTipoComprobante();
      }
    });
  }

  subTipoComprobante() {
    this.subTipoComprobante$ = this.store.select(seleccionarTipoComprobante).subscribe((accion) => {
      if (accion && accion.TiposComprobante) {
        this.tiposComprobante = accion.TiposComprobante;
        this.subRubroConcepto();
      }
    });
  }

  // Busqueda de rubro al momento de ver o editar algun concepto
  subRubroConcepto() {
    if (this.padre === false && this.flag) {
      this.store.dispatch(obtenerRubro({codRubro: this.concepto.RubroPresupuestalId}));
      this.subRubroVer$ = this.store.select(getRubro).subscribe((accion) => {
        if (accion && accion.Rubro) {
          this.rubroSeleccionado = accion.Rubro[0];
        }
      });
      this.subCuentasContablesDebito();
    } else {
      this.consultarTipoTransaccion();
    }
  }

  // Busqueda de cuentas contables al momento de ver o editar algun concepto
  subCuentasContablesDebito() {
    if (this.concepto.CuentasDebito) {
      for (let i = 0; i < this.concepto.CuentasDebito.length; i++) {
        this.store.dispatch(obtenerCuentaDebito({idCuentaContable: this.concepto.CuentasDebito[i]}));
        this.subCuentasDebito$ = this.store.select(getCuentaDebito).subscribe((accion) => {
          if (accion && accion.CuentaDebito) {
            if (!this.cuentasDebitoTabla.includes(accion.CuentaDebito)) {
              this.cuentasDebitoTabla.push(accion.CuentaDebito);
            }
          }
        });
      }
      try {
        if (this.cuentasDebitoTabla[0].Code) this.cuentasDebitoTabla.shift();
      } catch (error) {
      }
      this.subCuentasCredito();
    }
  }

  subCuentasCredito() {
    this.consultarTipoTransaccion();
    for (let i = 0; i < this.concepto.CuentasCredito.length; i++) {
      this.store.dispatch(obtenerCuentaCredito({idCuentaContable: this.concepto.CuentasCredito[i]})),
      this.subCuentasCredito$ = this.store.select(getCuentaCredito).subscribe((accion1) => {
        if (accion1 && accion1.CuentaCredito) {
          if (!this.cuentasCreditoTabla.includes(accion1.CuentaCredito)) this.cuentasCreditoTabla.push(accion1.CuentaCredito);
        }
      });
    }
    try {
      if (this.cuentasCreditoTabla[0].Code) this.cuentasCreditoTabla.shift();
    } catch (error) {
    }
  }

  conceptos() {
    if ((this.tituloAccion === 'ver' || this.tituloAccion === 'editar') && this.concepto) {
      this.crearConceptosGroup.patchValue({
        entidadPresupuestal: this.opcionesEntidadPresupuestal[this.opcionesEntidadPresupuestal.findIndex((e: any) => e.Id === this.concepto.EntidadPresupuestal)],
        areaFuncional: this.opcionesAreaFuncional[this.opcionesAreaFuncional.findIndex((e: any) => e.Id === this.concepto.AreaFuncional)],
        codigo: this.concepto.Codigo,
        claseTransaccion: this.clasesTransacciones[this.clasesTransacciones.findIndex((e: any) => e.Id === this.concepto.ClaseTransaccionId)],
        tipoTransaccion: this.tiposTransacciones[this.tiposTransacciones.findIndex((e: any) => e.Id === this.concepto.TipoTransaccionId)],
        activo: this.concepto.Activo,
        nombreConcepto: this.concepto.Nombre,
        tipoComprobante: this.tiposComprobante[this.tiposComprobante.findIndex((e: any) => e.Codigo === this.concepto.TipoComprobanteId)],
        codigoBogData: this.concepto.CodigoBogdata
      });
    }
  }
  saveForm() {
    if (this.crearConceptosGroup.invalid) {
      return Object.values(this.crearConceptosGroup.controls).forEach(control => {
        control.markAsTouched();
      });
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

}
