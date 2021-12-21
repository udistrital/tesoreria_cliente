import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { cargarBancos, obtenerBancoByNit, obtenerInfoComplementaria, obtenerSucursales, obtenerTipoContribuyente, obtenerTipoDocumento, obtenerTipoTercero } from '../../../../../shared/actions/shared.actions';
import { seleccionarBancoByNit, seleccionarBancos, seleccionarInfoComplementaria, seleccionarSucursales, seleccionarTipoContribuyente,
          seleccionarTipoDocumento, seleccionarTipoTercero } from '../../../../../shared/selectors/shared.selectors';
import { actualizarBanco, actualizarCodsBanco, actualizarDatosBanco, crearBanco, crearCodsBanco, crearDatosBanco, crearTipoTercero } from '../../actions/bancos.actions';

@Component({
  selector: 'ngx-create-banco',
  templateUrl: './create-banco.component.html',
  styleUrls: ['./create-banco.component.scss']
})
export class CreateBancoComponent implements OnInit, OnDestroy {
  @ViewChild('modalGuardar', { static: false }) modalGuardar: ElementRef;

  // Formulario
  crearBancoGroup: FormGroup;
  // Modal
  closeResult = '';
  tituloAccion: string;
  contribuyente: any;
  subContribuyente$: any;
  tipoDocumento: any;
  subTipoDocumento$: any;
  banco: any;
  subBanco$: any;
  bancoByNit: any;
  subBancoByNit$: any;
  infoComplementaria: any;
  subInfoComplementaria$: any;
  tipoTercero: any;
  subTipoTercero$: any;
  post = true;
  id: string;


  constructor(private fb: FormBuilder, private modalService: NgbModal, private store: Store<any>, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.createForm();
    this.store.dispatch(obtenerTipoContribuyente({query: {CodigoAbreviacion: 'P_JURIDICA'}}));
    this.store.dispatch(obtenerTipoDocumento({query: {CodigoAbreviacion: 'NIT'}}));
    this.store.dispatch(obtenerInfoComplementaria({query: {CodigoAbreviacion: 'COD_B'}}));
    this.store.dispatch(obtenerTipoTercero({query: {CodigoAbreviacion: 'BANCO'}}));
  }
  ngOnDestroy(): void {
    if (this.tituloAccion === 'editar') {
      this.subBancoByNit$.unsubscribe();
    }
    this.subContribuyente$.unsubscribe();
    this.subTipoDocumento$.unsubscribe();
    this.subInfoComplementaria$.unsubscribe();
    this.subTipoTercero$.unsubscribe();
    this.clearStore();
  }

  clearStore() {
    this.store.dispatch(cargarBancos(null));
  }

  ngOnInit() {
    this.clearStore();
    this.tituloAccion = this.activatedRoute.snapshot.url[0].path;
    this.subContribuyente$ = this.store.select(seleccionarTipoContribuyente).subscribe((action) => {
      if (action && action.TipoContribuyente) {
        this.contribuyente = action.TipoContribuyente[0];
      }
    });
    this.subTipoDocumento$ = this.store.select(seleccionarTipoDocumento).subscribe((action) => {
      if (action && action.TipoDocumento) {
        this.tipoDocumento = action.TipoDocumento[0];
      }
    });
    this.subInfoComplementaria$ = this.store.select(seleccionarInfoComplementaria).subscribe((action) => {
      if (action && action.InfoComplementaria) {
        this.infoComplementaria = action.InfoComplementaria[0];
      }
    });
    this.subTipoTercero$ = this.store.select(seleccionarTipoTercero).subscribe((action) => {
      if (action && action.TipoTercero) {
        this.tipoTercero = action.TipoTercero[0];
      }
    });

    if (this.tituloAccion === 'editar') {
      this.store.dispatch(obtenerBancoByNit({query: {TerceroId__Id: this.id, TipoDocumentoId__CodigoAbreviacion: 'NIT'}}));
      this.store.dispatch(obtenerSucursales({query: {TerceroId__Id: this.id, InfoComplementariaId__CodigoAbreviacion: 'COD_B'}}));
      this.subBancoByNit$ = this.store.select(seleccionarBancoByNit).subscribe((accion) => {
        if (accion && accion.BancoByNit) {
          this.bancoByNit = accion.BancoByNit[0];
          this.subInfoComplementaria$ = this.store.select(seleccionarSucursales).subscribe((accion1) => {
            if (accion1 && accion1.Sucursales) {
              this.infoComplementaria = accion1.Sucursales[0];
              this.crearBancoGroup.setValue({
                codigoSuper: JSON.parse(this.infoComplementaria.Dato).codigoSuper,
                codigoAch: JSON.parse(this.infoComplementaria.Dato).codigoAch,
                nitBanco: this.bancoByNit.Numero,
                nombreBanco: this.bancoByNit.TerceroId.NombreCompleto
              });
            }
          });
        }
      });
    } else {
      this.crearBancoGroup.setValue({
        codigoSuper: '',
        codigoAch: '',
        nitBanco: '',
        nombreBanco: ''
      });
    }
  }

  createForm() {
    this.crearBancoGroup = this.fb.group({
      codigoSuper: ['', Validators.required],
      codigoAch: ['', Validators.required],
      nitBanco: ['', Validators.required],
      nombreBanco: ['', Validators.required],
    });
  }

  saveForm() {
    if (this.crearBancoGroup.invalid) {
      return Object.values(this.crearBancoGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  isInvalid(nombre: string) {
    const input = this.crearBancoGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  guardar() {
    if (this.crearBancoGroup.valid) {
      const terceroBanco = {
        Activo: true,
        NombreCompleto: this.crearBancoGroup.value.nombreBanco.toUpperCase(),
        TipoContribuyenteId: {
          Id: this.contribuyente.Id
        }
      };
      const nitBanco = {
        Activo: true,
        TipoDocumentoId: {
          Id: this.tipoDocumento.Id
        },
        Numero: this.crearBancoGroup.value.nitBanco.toString(),
        TerceroId: {
          Id: 0
        },
      };
      const infoCompBanco = {
        Activo: true,
        TerceroId: {
          Id: 0
        },
        InfoComplementariaId: {
          Id: this.infoComplementaria.Id
        },
        Dato: JSON.stringify({codigoSuper: this.crearBancoGroup.value.codigoSuper,
                              codigoAch: this.crearBancoGroup.value.codigoAch}),
      };
      const tipoTercero = {
        Activo: true,
        TerceroId: {
          Id: 0
        },
        TipoTerceroId: {
          Id: this.tipoTercero.Id
        }
      };
      this.modalService.open(this.modalGuardar).result.then((result) => {
        if (`${result}`) {
          if (this.tituloAccion === 'editar') {
            this.store.dispatch(actualizarBanco({id: this.id, element: terceroBanco}));
            nitBanco.TerceroId.Id = parseInt(this.id, 0);
            infoCompBanco.TerceroId.Id = parseInt(this.id, 0);
            infoCompBanco.InfoComplementariaId.Id = this.infoComplementaria.InfoComplementariaId.Id;
            this.store.dispatch(actualizarDatosBanco({id: this.bancoByNit.Id, element: nitBanco}));
            this.store.dispatch(actualizarCodsBanco({id: this.infoComplementaria.Id, element: infoCompBanco}));
          } else {
            this.store.dispatch(obtenerBancoByNit({query: {numero: nitBanco.Numero}}));
            this.subContribuyente$ = this.store.select(seleccionarBancoByNit).subscribe((action) => {
              if (action && action.BancoByNit) {
                this.bancoByNit = action.BancoByNit[0];
                if (this.bancoByNit.Id) {
                  infoCompBanco.TerceroId.Id = this.bancoByNit.TerceroId.Id;
                  this.store.dispatch(crearCodsBanco({element: infoCompBanco}));
                } else if (this.post === true) {
                  this.store.dispatch(crearBanco({ element: terceroBanco}));
                  this.subContribuyente$ = this.store.select(seleccionarBancos).subscribe((action1) => {
                    if (action1 && action1.Bancos) {
                      this.banco = action1.Bancos;
                      nitBanco.TerceroId.Id = this.banco.Id;
                      infoCompBanco.TerceroId.Id = this.banco.Id;
                      tipoTercero.TerceroId.Id = this.banco.Id;
                      if (this.post === true ) {
                        this.store.dispatch(crearDatosBanco({ element: nitBanco}));
                        this.store.dispatch(crearCodsBanco({element: infoCompBanco}));
                        this.store.dispatch(crearTipoTercero({element: tipoTercero}));
                        this.post = false;
                      }
                    }
                  });
                }
              }
            });
          }
        }
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else { this.saveForm(); }
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
