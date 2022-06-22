import { Injectable } from '@angular/core';
import { RequestManager } from '../../../@core/managers/requestManager';

@Injectable({
  providedIn: 'root',
})
export class IngresoService {
  constructor(private rqManager: RequestManager) {}

  public getIngresos(limit?: number) {
    return this.rqManager.getv2('ingreso', null, null, null, null, null, limit);
  }
}
