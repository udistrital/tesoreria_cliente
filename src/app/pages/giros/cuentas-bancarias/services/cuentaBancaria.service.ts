import { Injectable } from '@angular/core';
import { RequestManager } from '../../../../@core/managers/requestManager';

@Injectable({
    providedIn: 'root'
})
export class CuentaBancariaService {
    constructor(private rqManager: RequestManager) { }

    public crearCuentaBancaria(element: any) {
        this.rqManager.setPath('GIROS_CRUD_SERVICE');
        return this.rqManager.post('cuenta_bancaria/', element);
    }

    public actualizarCuentaBancaria(id: number, element: any) {
        this.rqManager.setPath('GIROS_CRUD_SERVICE');
        return this.rqManager.put('cuenta_bancaria/', element, id);
    }
}
