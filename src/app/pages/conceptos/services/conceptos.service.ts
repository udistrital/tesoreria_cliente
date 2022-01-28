import { Injectable } from '@angular/core';
import { RequestManager } from '../../../@core/managers/requestManager';

@Injectable({
    providedIn: 'root'
})
export class ConceptosService {
    constructor(private rqManager: RequestManager) { }

    public crearConceptoPadre(element: any) {
        this.rqManager.setPath('CUENTAS_CONTABLES_SERVICE');
        return this.rqManager.post('conceptos/', element);
    }

    public actualizarConceptoPadre(id: string, element: any) {
        this.rqManager.setPath('CUENTAS_CONTABLES_SERVICE');
        return this.rqManager.put('conceptos/', element, id);
    }
}
