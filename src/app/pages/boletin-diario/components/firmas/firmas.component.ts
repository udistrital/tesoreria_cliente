import { Component, OnInit, ViewChild } from '@angular/core';
import { CONF_CARGOS, DATOS_CARGOS } from '../../interfaces/interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import { MatDialog } from '@angular/material';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-firmas',
  templateUrl: './firmas.component.html',
  styleUrls: ['./firmas.component.scss']
})
export class FirmasComponent implements OnInit {

  @ViewChild('modalPDF', { static: false }) modalPDF: any;
  @ViewChild('modalJustificacion', { static: false }) modalJustificacion: any;
  @ViewChild('modalAprobar', { static: false }) modalAprobar: any;
  configuracionFirmas: any;
  datosFirmas: any;
  fecha: Date;

  cargoForm: FormGroup;
  justificacionForm: FormGroup;
  modalAprobacion: NgbModalRef;

  cargos: String [] = [
    'Auxiliar de contabilidad',
    'Jefe de tesorería',
    'Auxiliar de tesorería'
  ];

  cuentas: String [] = [
    '12 01 06 52',
    '11 10 06 17',
    '19 01 03 01'
  ];

  pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf'; // this sample, dynamic one we will generate with the pdfmake
  pageVariable = 1;

  // Initialize variables required for the header and this component
  fileName = 'test-document.pdf';
  // set zoom variables
  zoom = 0.98; // default initial zoom value
  zoomMax = 2; // max zoom value
  zoomMin = 0.5; // min zoom value
  zoomAmt = 0.2; // stepping zoom values on button click
  zoomScale = 'page-width'; // zoom scale based on the page-width
  totalPages = 0; // indicates the total number of pages in the pdf document
  pdf: PDFDocumentProxy; // to access pdf information from the pdf viewer

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private route: Router,
    private modalService: NgbModal,
  ) {
    this.configuracionFirmas = CONF_CARGOS;
    this.datosFirmas = DATOS_CARGOS;
    this.cargoForm = this.formBuilder.group({
      cargo: ['', Validators.required]
    });
    this.justificacionForm = this.formBuilder.group({
      responsable: ['', Validators.required],
      justificacion: ['', Validators.required],
      numeroCuenta: ['', Validators.required],
      observacion: ['', Validators.required]
    });
   }

  ngOnInit() {}

  aprobar() {
    if (this.cargos.length !== 0) {
      this.modalAprobacion = this.modalService.open(this.modalAprobar);
    } else {
      Swal.fire({
        type: 'error',
        title: '¡Error!',
        html: 'Debe existir al menos un responsable',
        confirmButtonText: 'Aceptar',
      });
    }
  }
  guardar() {
    Swal.fire({
      type: 'success',
      title: '¡Guardado!',
      html: 'Se ha enviado el boletín del día: ' + this.fecha + '<br> Estado: Pendiente',
      confirmButtonText: 'Aceptar',
    });
    this.route.navigateByUrl('pages/boletin/lista');
  }

  generarPdf() {
    this.dialog.open(this.modalPDF);
  }

  justificar() {
    this.dialog.open(this.modalJustificacion);
  }

  agregar() {
    if (this.cargoForm.valid) {
      DATOS_CARGOS.push(
        {
          cargo: this.cargoForm.value.cargo,
          nombre: 'Maria Arias',
        }
      );
    } else {
      this.validarFormulario(this.cargoForm);
    }
  }

  aceptar() {
    this.cerrar();
    this.route.navigateByUrl('pages/boletin/lista');
    Swal.fire({
      type: 'success',
      title: '¡Aprobado!',
      html: 'Se aprobó el boletín del día: ' + this.fecha + ' con consecutivo 1',
      confirmButtonText: 'Aceptar',
    });
  }

  cerrar() {
    this.modalAprobacion.close();
  }

  validar() {
    if (this.justificacionForm.valid) {
      this.close();
      Swal.fire({
        type: 'success',
        title: '¡Guardado!',
        html: 'Se ha enviado el boletín del día: ' + this.fecha + '<br> a corrección <br> Estado: Rechazado',
        confirmButtonText: 'Aceptar',
      });
      this.route.navigateByUrl('pages/boletin/lista');
    } else {
      this.validarFormulario(this.justificacionForm);
    }
  }

  esInvalido(formulario: FormGroup, nombre: string) {
    const input = formulario.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  validarFormulario(formulario: FormGroup) {
    if (formulario.invalid) {
      return Object.values(formulario.controls).forEach(control => {
        control.markAsDirty();
      });
    }
  }

  close() {
    this.dialog.closeAll();
  }

  setZoom(type: string): void {
    if (type === 'increment') {
      this.zoom += this.zoomAmt;
    } else if (type === 'decrement') {
      this.zoom -= this.zoomAmt;
    }
  }

  download(): void {
    const blob = new Blob([this.pdfSrc], { type: 'application/pdf' });

    // IE doesn't allow using a blob object directly as link href
    // instead it is necessary to use msSaveOrOpenBlob
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob);
      return;
    }

    const data = window.URL.createObjectURL(blob);
    const link = document.createElement('a'); // creating an anchor tag
    link.href = data; // setting href value to anchor
    link.download = this.fileName; // giving the download attr to the anchor with the filename that we are giving
    link.click(); // fake click using the js to download it.

    // For firefox it is necessary to delay revoking the ObjectURl
    setTimeout(() => {
      window.URL.revokeObjectURL(data);
    }, 100);
  }

  print(): void {
    // Remove previously added iframes
    const prevFrames = document.querySelectorAll('iframe[name="pdf-frame"]');
    if (prevFrames.length) {
      prevFrames.forEach((item) => item.remove());
    }
    // just like download , we are using the blob
    const blob = new Blob([this.pdfSrc], { type: 'application/pdf' });
    const objectURl = URL.createObjectURL(blob);

    // create iframe element in dom
    const frame = document.createElement('iframe');
    frame.style.display = 'none'; // hiding the iframe
    frame.src = objectURl; // setting the source for that iframe
    // appending this iframe to body
    document.body.appendChild(frame);
    frame.name = 'pdf-frame';
    frame.focus();

    // in edge or IE we are using different methods to print
    if (this.isIE() || this.isEdge()) {
      frame.contentWindow.document.execCommand('print', false, null);
    } else {
      // all other browsers will use this method
      frame.contentWindow.print();
    }
  }

  isIE(): boolean {
    return navigator.userAgent.lastIndexOf('MSIE') !== -1;
  }

  // to know the browser is Edge or not
  isEdge(): boolean {
    return !this.isIE() && !!window.styleMedia;
  }

  // after load complete of the pdf function
  afterLoadComplete(pdf: PDFDocumentProxy): void {
    this.pdf = pdf;
    this.totalPages = pdf.numPages;
  }

}
