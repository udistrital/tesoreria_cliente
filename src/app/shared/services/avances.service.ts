import { Injectable } from '@angular/core';
import { RequestManager } from '../../@core/managers/requestManager';

@Injectable({
  providedIn: 'root'
})
export class AvancesService {

  constructor(private rqManager: RequestManager) { }

  // Tipos avances

  public getTiposAvances(id?: number, query?: any) {
    this.rqManager.setPath('AVANCES_CRUD');
    return this.rqManager.getv2('tipo_avance', id, query);
  }

  public createTipoAvance(element: any) {
    this.rqManager.setPath('AVANCES_CRUD');
    return this.rqManager.post('tipo_avance/', element);
  }

  public updateTipoAvance(id: number, element: any) {
    this.rqManager.setPath('AVANCES_CRUD');
    return this.rqManager.put('tipo_avance/', element, id);
  }

  // Normas

  public getNormas(id?: number, query?: any) {
    this.rqManager.setPath('AVANCES_CRUD');
    return this.rqManager.getv2('norma', id, query);
  }

  public createNorma(element: any) {
    this.rqManager.setPath('AVANCES_CRUD');
    return this.rqManager.post('norma/', element);
  }

  public updateNorma(id: number, element: any) {
    this.rqManager.setPath('AVANCES_CRUD');
    return this.rqManager.put('norma/', element, id);
  }

  // Requisitos

  public getRequisitos(id?: number, query?: any) {
    this.rqManager.setPath('PARAMETROS_CRUD_SERVICE');
    if (!query) query = {};
    query.ParametroPadreId = 324;
    return this.rqManager.getv2('parametro', id, query);
  }

  public createRequisito(element: any) {
    this.rqManager.setPath('PARAMETROS_CRUD_SERVICE');
    element['TipoParametroId'] = { 'Id': 18 };
    element['ParametroPadreId'] = { 'Id': 324 };
    return this.rqManager.post('parametro/', element);
  }

  public updateRequisito(id: number, element: any) {
    this.rqManager.setPath('PARAMETROS_CRUD_SERVICE');
    element['TipoParametroId'] = { 'Id': 18 };
    element['ParametroPadreId'] = { 'Id': 324 };
    return this.rqManager.put('parametro/', element, id);
  }

  // Requisito tipo avance (solo relación)

  public getRequisitoTipoAvance(id?: number, query?: any, idTipoAvance?: number) {
    this.rqManager.setPath('AVANCES_CRUD');
    if (idTipoAvance) {
      if (!query) query = {};
      query.TipoAvanceId = idTipoAvance;
    }
    return this.rqManager.getv2('requisito_tipo_avance', id, query);
  }

  public createRequisitoTipoAvance(element: any) {
    this.rqManager.setPath('AVANCES_CRUD');
    return this.rqManager.post('requisito_tipo_avance/', element);
  }

  public updateRequisitoTipoAvance(id: number, element: any) {
    this.rqManager.setPath('AVANCES_CRUD');
    return this.rqManager.put('requisito_tipo_avance/', element, id);
  }

  // Especificaciones

  public getEspecificaciones(id?: number, query?: any) {
    this.rqManager.setPath('PARAMETROS_CRUD_SERVICE');
    if (!query) query = {};
    query.ParametroPadreId = 325;
    return this.rqManager.getv2('parametro', id, query);
  }

  public createEspecificacion(element: any) {
    this.rqManager.setPath('PARAMETROS_CRUD_SERVICE');
    element['TipoParametroId'] = { 'Id': 18 };
    element['ParametroPadreId'] = { 'Id': 325 };
    return this.rqManager.post('parametro/', element);
  }

  public updateEspecificacion(id: number, element: any) {
    this.rqManager.setPath('PARAMETROS_CRUD_SERVICE');
    element['TipoParametroId'] = { 'Id': 18 };
    element['ParametroPadreId'] = { 'Id': 325 };
    return this.rqManager.put('parametro/', element, id);
  }

  // Solicitudes avance
  public createSolicitudesTipoAvance(element: any) {
    this.rqManager.setPath('AVANCES_CRUD');
    return this.rqManager.post('requisito_tipo_avance/', element);
  }
}

