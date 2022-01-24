import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, PercentPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import * as fromShared from './reducers/shared.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SharedEffects } from './effects/shared.effects';
import { GeneralTableComponent } from './components/general-table/general-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterTablePipe } from './pipes/filter-table.pipe';
import { CustomTablePipe } from './pipes/custom-table.pipe';
import { DatosGeneralesInicialesComponent } from './components/datos-generales-iniciales/datos-generales-iniciales.component';
import { MouseOverDirective } from './directives/mouse-over.directive';
import { ArbolRubroComponent } from './components/arbol-rubro/arbol-rubro.component';
import { ArbolCuentasContablesDebitoComponent } from './components/arbol-cuentas-contables-debito/arbol-cuentas-contables-debito.component';
import { NbTreeGridModule } from '@nebular/theme';
import { SelectedRowDirective } from './directives/selected-row.directive';
import { MultiPipePipe } from './pipes/multi-pipe.pipe';
import { TimeRangePipe } from './pipes/time-range.pipe';
import { CellViewComponent } from './components/cell-view/cell-view.component';
import { CompoundCellComponent } from './components/compound-cell/compound-cell.component';
import { BtnVolverComponent } from './components/btn-volver/btn-volver.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FileUploadDirective } from './directives/file-upload.directive';
import { TableComponent } from './components/table/table.component';
import * as fromAvances from './reducers/avances.reducer';
import { AvancesEffects } from './effects/avances.effects';
import { DescargarcomprobanteComponent } from './components/descargarcomprobante/descargarcomprobante.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfviewsharedComponent } from './components/pdfviewshared/pdfviewshared.component';
import { TablaReporteMensualPacComponent } from './components/tabla-reporte-mensual-pac/tabla-reporte-mensual-pac.component';
import { TablaReporteRubrosComponent } from './components/tabla-reporte-rubros/tabla-reporte-rubros.component';
import { ContabilizacionComponent } from './components/contabilizacion/contabilizacion.component';
import { TablaReporteSumasComponent } from './components/tabla-reporte-sumas/tabla-reporte-sumas.component';
import { TablaReporteTotalesComponent } from './components/tabla-reporte-totales/tabla-reporte-totales.component';
import { TablaBorradorBoletinComponent } from './components/tabla-borrador-boletin/tabla-borrador-boletin.component';
import { TablaBoletinComponent } from './components/tabla-boletin/tabla-boletin.component';
import { MatTableModule, MatPaginatorModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ArbolCuentasContablesCreditoComponent } from './components/arbol-cuentas-contables-credito/arbol-cuentas-contables-credito.component';



@NgModule({
  exports: [
    TranslateModule,
    GeneralTableComponent,
    DatosGeneralesInicialesComponent,
    MouseOverDirective,
    ArbolRubroComponent,
    ArbolCuentasContablesDebitoComponent,
    ArbolCuentasContablesCreditoComponent,
    DescargarcomprobanteComponent,
    PdfviewsharedComponent,
    SelectedRowDirective,
    TimeRangePipe,
    BtnVolverComponent,
    FileUploadComponent,
    TableComponent,
    TablaReporteMensualPacComponent,
    TablaBoletinComponent,
    ContabilizacionComponent,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PdfViewerModule,
    NbTreeGridModule,
    StoreModule.forFeature(fromShared.sharedFeatureKey, fromShared.reducer),
    StoreModule.forFeature(fromAvances.avancesFeatureKey, fromAvances.reducer),
    EffectsModule.forFeature([SharedEffects, AvancesEffects]),
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    GeneralTableComponent,
    FilterTablePipe,
    CustomTablePipe,
    DatosGeneralesInicialesComponent,
    MouseOverDirective,
    ArbolRubroComponent,
    ArbolCuentasContablesDebitoComponent,
    ArbolCuentasContablesCreditoComponent,
    DescargarcomprobanteComponent,
    PdfviewsharedComponent,
    SelectedRowDirective,
    MultiPipePipe,
    TimeRangePipe,
    CellViewComponent,
    CompoundCellComponent,
    BtnVolverComponent,
    TableComponent,
    FileUploadComponent,
    FileUploadDirective,
    TableComponent,
    TablaReporteMensualPacComponent,
    TablaReporteRubrosComponent,
    ContabilizacionComponent,
    TablaReporteSumasComponent,
    TablaReporteTotalesComponent,
    TablaBorradorBoletinComponent,
    TablaBoletinComponent,
  ],
  providers: [
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
    CustomTablePipe,
    TimeRangePipe,
  ]
})

export class SharedModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
