import { Injectable } from '@angular/core';
import { RequestManager } from '../../../../@core/managers/requestManager';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private rqManager: RequestManager) { }

}
