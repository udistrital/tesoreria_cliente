import { Injectable } from '@angular/core';
import { RequestManager } from '../../../../@core/managers/requestManager';

@Injectable({
    providedIn: 'root'
})
export class SucursalesService {
    constructor(private rqManager: RequestManager) { }

    public crearSucursal(element: any) {
        this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
        return this.rqManager.post('info_complementaria_tercero/', element);
    }

    public actualizarSucursal(id: number, element: any) {
        this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
        return this.rqManager.put('info_complementaria_tercero/', element, id);
    }
}
