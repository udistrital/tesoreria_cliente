import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { obtenerBancos, obtenerIdSucursales, obtenerSucursales } from '../../../../../shared/actions/shared.actions';
import { seleccionarBancos, seleccionarIdSucursales, seleccionarSucursales } from '../../../../../shared/selectors/shared.selectors';
import { actualizarSucursal, crearSucursal } from '../../actions/sucursales.actions';

@Component({
  selector: 'ngx-create-sucursal',
  templateUrl: './create-sucursal.component.html',
  styleUrls: ['./create-sucursal.component.scss']
})
export class CreateSucursalComponent implements OnInit, OnDestroy {
  @ViewChild('modalGuardar', { static: false }) modalGuardar: ElementRef;


  // Formulario
  crearSucursalGroup: FormGroup;
  // Modal
  closeResult = '';

  bancos: any;
  subBancos$: any;
  idSucursales$: any;
  subSucursales$: any;
  tituloAccion: string;
  datosSucursal: any;
  id: any;
  checked: boolean;



  constructor(private fb: FormBuilder, private modalService: NgbModal, private store: Store<any>, private router: Router, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.createForm();
    this.bancos = [];
    this.store.dispatch(obtenerBancos({}));
    this.store.dispatch(obtenerIdSucursales({}));
    this.checked = true;
  }

  ngOnInit() {
    this.createForm();
    this.tituloAccion = this.activatedRoute.snapshot.url[0].path;
    // Bancos
     this.subBancos$ = this.store.select(seleccionarBancos).subscribe((action) => {
      if (action && action.Bancos) {
        this.bancos = action.Bancos;
        if (this.bancos && this.tituloAccion === 'editar') {
          this.store.dispatch(obtenerSucursales({query: {Id: this.id}}));
          this.subSucursales$ = this.store.select(seleccionarSucursales).subscribe((accion) => {
            if (accion && accion.Sucursales) {
              this.datosSucursal = accion.Sucursales[0];
              this.crearSucursalGroup.setValue({
                nombreBanco: this.bancos[this.bancos.findIndex((element: any) => element.TerceroId.NombreCompleto === this.datosSucursal.TerceroId.NombreCompleto)],
                nombreSucursal: JSON.parse(this.datosSucursal.Dato).nombreSucursal,
                activo: this.datosSucursal.Activo
              });
            }
          });
        } else {
          this.crearSucursalGroup.setValue({
            nombreBanco: '',
            nombreSucursal: '',
            activo: true
          });
        }
      }
    });
  }

  ngOnDestroy() {
    this.subBancos$.unsubscribe();
    if (this.tituloAccion === 'editar') {
      this.subSucursales$.unsubscribe();
    }
  }

  createForm() {
    this.crearSucursalGroup = this.fb.group({
      nombreBanco: ['', Validators.required],
      nombreSucursal: ['', Validators.required],
      activo: ['', Validators.required],
    });

  }

  saveForm() {
    if (this.crearSucursalGroup.invalid) {
      return Object.values(this.crearSucursalGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  isInvalid(nombre: string) {
    const input = this.crearSucursalGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  guardar() {
    var idSucursal;
    if (this.crearSucursalGroup.valid) {
      this.idSucursales$ = this.store.select(seleccionarIdSucursales).subscribe((action) => {
        if (action && action.IdSucursales) {
          idSucursal = action.IdSucursales[0].Id;
        }
      });
      const elemento = {
        Activo: this.crearSucursalGroup.value.activo,
        Dato: '{\"nombreSucursal\":\"' + this.crearSucursalGroup.value.nombreSucursal.toUpperCase() + '\"}',
        InfoComplementariaId: {
          Id: idSucursal
        },
        TerceroId: {
          Id: this.crearSucursalGroup.value.nombreBanco.TerceroId.Id
        }
      };
      this.modalService.open(this.modalGuardar).result.then((result) => {
        if (`${result}`) {
          if (this.tituloAccion === 'editar') {
            this.store.dispatch(actualizarSucursal({id: this.id, element: elemento}));
          } else {
            this.store.dispatch(crearSucursal({ element: elemento}));
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
}
