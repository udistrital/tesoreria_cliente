export interface TipoIngreso {
  id: number;
  tipo: string;
  parametrizacion_contable: Object;
  activo: boolean;
  fecha_creacion: Date;
  fecha_modificacion: Date;
}
