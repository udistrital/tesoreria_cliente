import { Component, OnInit, ViewChild } from '@angular/core';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { CONF_CONTABILIDAD } from '../../interfaces/interfaces';
import { getTipoIngreso } from '../../selectors/ingresos.selectors';
import { Store } from '@ngrx/store';
import { SharedService } from '../../../../shared/services/shared.service';
import Swal from 'sweetalert2';
import { TranslateFormItemsService } from '../../../../shared/helpers/translate-form-items.service';
import { DATOS_CONTABILIDAD } from '../../../../../assets/mock/tiposIngresos';

@Component({
  selector: 'ngx-set-contabilizar',
  templateUrl: './set-contabilizar.component.html',
  styleUrls: ['./set-contabilizar.component.scss']
})
export class SetContabilizarComponent implements OnInit {

  @ViewChild('modalPDF', { static: false }) modalPDF: any;

  mensaje: boolean;

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

  codigos: String[] = [
    'Opcion 1',
    'Opcion 2',
    'Opcion 3'
  ];
  conceptos: String[] = [
    'Opcion 1',
    'Opcion 2',
    'Opcion 3'
  ];

  tiposComprobante: String[] = [
    'Opcion 1',
    'Opcion 2',
    'Opcion 3'
  ];

  contabilizacionForm: FormGroup;

  configuration: any;
  datos: any;
  debito: any;
  credito: any;
  tipoIngreso: any;

  subscriptionTipoIngreso$: any;

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private sharedService: SharedService,
    private store: Store <any>,
    private translateHelper: TranslateFormItemsService
  ) {
    this.contabilizacionForm = this.formBuilder.group({
      concepto: ['', Validators.required],
      codigo: ['', Validators.required],
      tipoComprobante: ['', Validators.required]
    });
    this.datos = DATOS_CONTABILIDAD;
  }

  ngOnInit() {
    this.translateTableConfiguracion();
    this.subscriptionTipoIngreso$ = this.store.select(getTipoIngreso).subscribe(
      data => {
        if (this.sharedService.IfStore(data)) {
          this.tipoIngreso = data.tipo;
        }
      }
    );
  }

  totalDebito() {
    return this.debito = this.datos.reduce((a: any, b: { debito: number; }) => a + b.debito, 0);
  }

  totalCredito() {
    return this.credito = this.datos.reduce((a: any, b: { credito: number; }) => a + b.credito, 0);
  }

  esInvalido(nombre: string) {
    const input = this.contabilizacionForm.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  validarFormulario() {
    if (this.contabilizacionForm.invalid) {
      return Object.values(this.contabilizacionForm.controls).forEach(control => {
        control.markAsDirty();
      });
    }
  }

  close() {
    this.dialog.closeAll();
  }

  generarPdf() {
    this.dialog.open(this.modalPDF);
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

  private translateTableConfiguracion(): void {
    this.configuration = this.translateHelper.translateItemTableConfiguration(CONF_CONTABILIDAD);
  }
}
