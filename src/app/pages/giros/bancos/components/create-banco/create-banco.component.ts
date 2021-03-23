import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-create-banco',
  templateUrl: './create-banco.component.html',
  styleUrls: ['./create-banco.component.scss']
})
export class CreateBancoComponent implements OnInit {
  @ViewChild('modalGuardar', { static: false }) modalGuardar: ElementRef;

  // Formulario
  crearBancoGroup: FormGroup;
  // Modal
  closeResult = '';


  constructor(private fb: FormBuilder, private modalService: NgbModal) {
    this.createForm();
  }

  ngOnInit() {
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
