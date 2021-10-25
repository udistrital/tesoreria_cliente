import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as SucursalesActions from '../actions/sucursales.actions';
import * as SharedActions from '../../../../shared/actions/shared.actions';
import { PopUpManager } from '../../../../@core/managers/popUpManager';
import { SucursalesService } from '../services/sucursales.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class SucursalesEffects {

    constructor(
        private actions$: Actions,
        private servicio: SucursalesService,
        private popupManager: PopUpManager
    ) {
    }

    crearSucursal$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(SucursalesActions.crearSucursal),
            mergeMap((accion) => {
                return this.servicio.crearSucursal(accion.element)
                .pipe(map(data => {
                    this.popupManager.showSuccessAlert('Guardado exitoso');
                    return SucursalesActions.cargarSucursales({
                        sucursales: { creado: (data && data.Data ? data.Data : data)}
                    });
                }), catchError(data => of(SharedActions.CatchError(data))));
            })
        );
    });
}
