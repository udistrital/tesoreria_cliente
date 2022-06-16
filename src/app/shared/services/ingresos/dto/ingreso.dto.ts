export interface Ingreso {
  id: number;
  vigencia_id: string;
  consecutivo: number;
  area_funcional: string;
  valor_total: number;
  tipo_ingreso_id: number;
  movimiento_contable_id: number;
  metadatos: Object;
  activo: boolean;
  fecha_creacion: Date;
  fecha_modificacion: Date;
}