import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DATOS_EJECUCION } from '../../interfaces/interfaces'
@Component({
  selector: 'ngx-consolidado',
  templateUrl: './consolidado.component.html',
  styleUrls: ['./consolidado.component.scss']
})
export class ConsolidadoComponent implements OnInit, OnDestroy {

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

  modal: NgbModalRef;

  constructor(
    private router: Router,
    private modalService: NgbModal,
  ) {
    this.datosEjecucion = DATOS_EJECUCION;
  }

  areaFuncional: String [] = [
    'Servicios',
    'Pagos',
    'Formatos'
  ];

  vigencias: String [] = [
    '2020',
    '2021'
  ];

  datosEjecucion: any;

  titlesConsulta: String[] = [ 'Mes', 'Valor girado', 'Porcentaje girado', 'Valor legalizado', 'Porcentaje legalizado', 'Valor por legalizar', 'Porcentaje por legalizar', 'Total avances por mes'];
  attributesConsulta: any [] = [['mes'], ['valorGirado'], ['porcentajeGirado'], ['valorLegalizado'], ['porcentajeLegalizado'], ['valorLegalizar'], ['porcentajeLegalizar'], ['totalAvances']];

  ngOnDestroy () {
    if (this.modal !== undefined) {
      this.modal.close();
    }
  }

  ngOnInit() {
  }

  volver() {
    this.router.navigateByUrl('pages/avances/ejecucion/informe');
  }

  open(content: any) {
    this.modal = this.modalService.open(content);
  }

  close () {
    this.modal.close();
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
