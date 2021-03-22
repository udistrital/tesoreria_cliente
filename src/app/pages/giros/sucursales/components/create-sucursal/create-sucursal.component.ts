import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-create-sucursal',
  templateUrl: './create-sucursal.component.html',
  styleUrls: ['./create-sucursal.component.scss']
})
export class CreateSucursalComponent implements OnInit {
  @ViewChild('modalGuardar', { static: false }) modalGuardar: ElementRef;


  // Formulario
  crearSucursalGroup: FormGroup;
  // Modal
  closeResult = '';



  constructor(private fb: FormBuilder, private modalService: NgbModal) {
    this.createForm();
  }

  ngOnInit() {
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
    if (this.crearSucursalGroup.valid) {
      this.modalService.open(this.modalGuardar).result.then((result) => {
        if (`${result}`) {

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
