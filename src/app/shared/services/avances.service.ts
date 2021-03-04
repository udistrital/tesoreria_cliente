import { Injectable } from '@angular/core';
import { RequestManager } from '../../@core/managers/requestManager';

@Injectable({
  providedIn: 'root'
})
export class AvancesService {

  constructor(private rqManager: RequestManager) { }

  // Tipos avances

  public getTiposAvances(id?: number) {
    this.rqManager.setPath('AVANCES_CRUD');
    return this.rqManager.get('tipo_avance/' + (id ? '/' + id : ''));
  }

  public createTipoAvance(element: any) {
    this.rqManager.setPath('AVANCES_CRUD');
    return this.rqManager.post('tipo_avance/', element);
  }

  public updateTipoAvance(id: number, element: any) {
    this.rqManager.setPath('AVANCES_CRUD');
    return this.rqManager.put('tipo_avance/', element, id);
  }

  public deleteTipoAvance(id: number) {
    this.rqManager.setPath('AVANCES_CRUD');
    return this.rqManager.delete('tipo_avance/', id);
  }

  // Normas

  public getNormas(id?: number, query?: any) {
    this.rqManager.setPath('AVANCES_CRUD');
    let queryParams = '';
    for (const [key, value] of Object.entries(query))
      queryParams = `${queryParams}${key}:${value},`;
    queryParams = queryParams.substr(0, queryParams.length - 1);
    return this.rqManager.get('norma/' + (id ? '/' + id : ''), { query: queryParams });
  }

  public createNorma(element: any) {
    this.rqManager.setPath('AVANCES_CRUD');
    return this.rqManager.post('norma/', element);
  }

  public updateNorma(id: number, element: any) {
    this.rqManager.setPath('AVANCES_CRUD');
    return this.rqManager.put('norma/', element, id);
  }

  public deleteNorma(id: number) {
    this.rqManager.setPath('AVANCES_CRUD');
    return this.rqManager.delete('norma/', id);
  }

  // Requisitos

  public getRequisitos(id?: number) {
    this.rqManager.setPath('PARAMETROS_CRUD_SERVICE');
    return this.rqManager.get('parametro/' + (id ? '/' + id : ''), {
      query: 'ParametroPadreId:324'
    });
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

  // Especificaciones

  public getEspecificaciones(id?: number) {
    this.rqManager.setPath('PARAMETROS_CRUD_SERVICE');
    return this.rqManager.get('parametro/' + (id ? '/' + id : ''), {
      query: 'ParametroPadreId:325'
    });
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

}
