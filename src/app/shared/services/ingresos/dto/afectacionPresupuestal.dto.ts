export interface AfectacionPresupuestal {
  id: number;
  ingreso_id: number;
  rubro_id: number;
  activo: boolean;
  fecha_creacion: Date;
  fecha_modificacion: Date;
}