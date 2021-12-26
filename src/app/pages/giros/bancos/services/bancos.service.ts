import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RequestManager } from '../../../../@core/managers/requestManager';

@Injectable({
    providedIn: 'root'
})
export class BancosService {
    constructor(private rqManager: RequestManager, private router: Router) { }

    public crearBanco(element: any) {
        this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
        return this.rqManager.post('tercero/', element);
    }

    public actualizarBanco(id: number, element: any) {
        this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
        return this.rqManager.put('tercero/', element, id);
    }

    public crearDatosBanco(element: any) {
        this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
        return this.rqManager.post('datos_identificacion/', element);
    }

    public actualizarDatosBanco(id: number, element: any) {
        this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
        return this.rqManager.put('datos_identificacion/', element, id);
    }

    public crearCodsBanco(element: any) {
        this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
        return this.rqManager.post('info_complementaria_tercero/', element);
    }

    public crearTipoTercero(element: any) {
        this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
        return this.rqManager.post('tercero_tipo_tercero/', element);
    }

    public actualizarCodsBanco(id: number, element: any) {
        this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
        return this.rqManager.put('info_complementaria_tercero/', element, id);
    }

    public actualizarTercero(id: number, element: any) {
        this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
        return this.rqManager.put('tercero/', element, id);
    }
}
