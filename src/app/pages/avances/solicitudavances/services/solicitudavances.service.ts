import { Injectable } from '@angular/core';
import { RequestManager } from '../../../../@core/managers/requestManager';

@Injectable({
  providedIn: 'root'
})
export class SolicitudavancesService {

  constructor(private rqManager: RequestManager) { }

  // Solicitudes de avance

  public getSolicitudesAvance(limit?: number) {
    this.rqManager.setPath('TESORERIA_MID_SERVICE');
    const params = {
      limit: limit ? limit : 0,
    };
    return this.rqManager.get('solicitud_avance', params);
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
