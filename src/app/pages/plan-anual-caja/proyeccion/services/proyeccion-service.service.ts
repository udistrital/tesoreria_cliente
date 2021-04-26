import { Injectable } from '@angular/core';
import { RequestManager } from '../../../../@core/managers/requestManager';

@Injectable({
  providedIn: 'root'
})
export class ProyeccionServiceService {

  constructor(
    private rqManager: RequestManager,
  ) { }

  public getFuentesFinanciamiento(id?: any, params?: any) {
    this.rqManager.setPath('PLAN_CUENTAS_MONGO_SERVICE');
    const query_params = {
      query: '',
    };
    if (params) {
      query_params.query = id ? id + '/' + params.Vigencia + '/' + params.UnidadEjecutora : params.Vigencia + '/' + params.UnidadEjecutora;
    } else {
      query_params.query = '0/1';
    }
    return this.rqManager.get('fuente_financiamiento/' + query_params.query);
  }

}
