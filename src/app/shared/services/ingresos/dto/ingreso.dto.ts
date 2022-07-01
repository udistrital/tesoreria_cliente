import { MovimientoContable } from './movimientoContable.dto';

export interface Ingreso {
  Id: number;
  VigenciaId: string;
  Consecutivo: number;
  AreaFuncional: string;
  ValorTotal: number;
  TipoIngresoId: number;
  MovimientoContableId: number;
  Metadatos: Metadatos;
  Activo: boolean;
  FechaCreacion: string;
  FechaModificacion: string;
}

interface Metadatos {
  MovimientoContable?: MovimientoContable;
}
