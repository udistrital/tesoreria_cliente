import { Injectable } from '@angular/core';
import { RequestManager } from '../../../@core/managers/requestManager';

@Injectable({
  providedIn: 'root',
})
export class IngresoService {
  constructor(private rqManager: RequestManager) {}

  public getIngresos(limit: number = -1) {
    this.rqManager.setPath('INGRESOS_CRUD_SERVICE');

    return this.rqManager.getv2('ingreso', null, null, null, null, null, limit);
  }
}
