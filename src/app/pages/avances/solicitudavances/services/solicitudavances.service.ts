import { Injectable } from '@angular/core';
import { RequestManager } from '../../../../@core/managers/requestManager';

@Injectable({
  providedIn: 'root'
})
export class SolicitudavancesService {

  constructor(private rqManager: RequestManager) { }

  // Solicitudes de avance

  public getSolicitudesAvance(id?: number, query?: any) {
    this.rqManager.setPath('TESORERIA_MID_SERVICE');
    let queryParams = '';
    if (query)
      for (const [key, value] of Object.entries(query))
        queryParams += `${key}:${value},`;
    return this.rqManager.get('solicitud_avance/' + (id ? '/' + id : ''), { query: queryParams });
  }

  public createSolicitudAvance(element: any) {
    this.rqManager.setPath('TESORERIA_MID_SERVICE');
    return this.rqManager.post('solicitud_avance/', element);
  }

  public updateSolicitudAvance(id: number, element: any) {
    this.rqManager.setPath('TESORERIA_MID_SERVICE');
    return this.rqManager.put('solicitud_avance/', element, id);
  }

}
