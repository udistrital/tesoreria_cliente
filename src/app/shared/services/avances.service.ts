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

}
