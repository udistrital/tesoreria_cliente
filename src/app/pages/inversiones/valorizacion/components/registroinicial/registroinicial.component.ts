import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-registroinicial',
  templateUrl: './registroinicial.component.html',
  styleUrls: ['./registroinicial.component.scss']
})
export class RegistroinicialComponent implements OnInit {

  infoRegistroGroup: FormGroup;
  closeResult: string;

  constructor(private fb: FormBuilder, private modalService: NgbModal) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.infoRegistroGroup = this.fb.group({
      areaFuncional: ['', Validators.required],
      nit: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]],
      tipoDocumento: ['', Validators.required],
      fechaAdquisicion: ['', Validators.required],
      numeroDocumento: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]],
      valorNominal: ['', [
        Validators.required,
        RxwebValidators.numeric({ allowDecimal: true })
      ]],
      participacion: ['', Validators.required],
      valorInversion: ['', [
        Validators.required,
        RxwebValidators.numeric({ allowDecimal: true })
      ]],
      valorAcciones: ['', [
        Validators.required,
        RxwebValidators.numeric({ allowDecimal: true })
      ]]
    });
  }

  isInvalid(nombre: string) {
    const input = this.infoRegistroGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.infoRegistroGroup.invalid) {
      return Object.values(this.infoRegistroGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  open(modalGuardar) {
    this.modalService.open(modalGuardar, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
