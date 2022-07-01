export interface MovimientoContable {
  id: number;
  codigo: number;
  concepto_id: number;
  consecutivo: number;
  valorDebito: number;
  valorCredito: number;
  tipoComprobante: string;
}
