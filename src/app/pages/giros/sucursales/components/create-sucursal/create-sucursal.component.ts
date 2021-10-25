import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { obtenerBancos, obtenerIdSucursales } from '../../../../../shared/actions/shared.actions';
import { seleccionarBancos, seleccionarIdSucursales } from '../../../../../shared/selectors/shared.selectors';
import { crearSucursal } from '../../actions/sucursales.actions';

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



  constructor(private fb: FormBuilder, private modalService: NgbModal, private store: Store<any>, ) {
    this.createForm();
    this.bancos = [];
    this.store.dispatch(obtenerBancos({}));
    this.store.dispatch(obtenerIdSucursales({}));
  }

  ngOnInit() {
    this.createForm();
    // Bancos
    this.subBancos$ = this.store.select(seleccionarBancos).subscribe((action) => {
      if (action && action.Bancos) {
        this.bancos = action.Bancos;
      }
    });
  }

  ngOnDestroy() {
    this.subBancos$.unsubscribe();
  }

  createForm() {
    this.crearSucursalGroup = this.fb.group({
      nombreBanco: ['', Validators.required],
      nombreSucursal: ['', Validators.required],
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
        Activo: true,
        Dato: '{\"nombreSucursal\": \"' + this.crearSucursalGroup.value.nombreSucursal.toUpperCase() + '\"}',
        InfoComplementariaId: {
          Id: idSucursal
        },
        TerceroId: {
          Id: this.crearSucursalGroup.value.nombreBanco.TerceroId.Id
        }
      };
      this.modalService.open(this.modalGuardar).result.then((result) => {
        if (`${result}`) {
          this.store.dispatch(crearSucursal({ element: elemento}));
        }
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
      this.saveForm(); }
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
