import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-pdfviewshared',
  templateUrl: './pdfviewshared.component.html',
  styleUrls: ['./pdfviewshared.component.scss']
})
export class PdfviewsharedComponent implements OnInit {

  @Input() fileName = '';
  @Input() currentPage: number;
  @Input() totalPages: number;
  @Input() zoomAmt: number;
  @Input() zoomMax: number;
  @Input() zoomMin: number;

  @Output() setZoom: EventEmitter<any> = new EventEmitter();
  @Output() download: EventEmitter<any> = new EventEmitter();
  @Output() print: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDownload(event: any): void {
    this.download.emit();
  }

  onPrint(event: any): void {
    this.print.emit();
  }

  zoom(type: string): void {
    this.setZoom.emit(type);
  }
}
