import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PopUpManager } from '../../../../@core/managers/popUpManager';
import { CuentaBancariaService } from '../services/cuentaBancaria.service';
import * as CuentasBancariasActions from '../actions/cuentaBancaria.action';
import * as SharedActions from '../../../../shared/actions/shared.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CuentaBancariaEffects {
    tituloAccion: string;

    constructor(
        private actions$: Actions,
        private servicio: CuentaBancariaService,
        private popupManager: PopUpManager,
        private router: Router,
        private activatedRoute: ActivatedRoute, ) {

        }

    crearCuentaBancaria$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CuentasBancariasActions.crearCuentaBancaria),
            mergeMap((accion) => {
                return this.servicio.crearCuentaBancaria(accion.element)
                .pipe(map(data => {
                    this.popupManager.showSuccessAlert('Guardado de cuenta bancaria exitoso');
                    this.router.navigateByUrl('pages/giros/cuentas/lista');
                    return SharedActions.cargarCuentasBancarias({
                        Sucursales: (data && data.Data ? data.Data : data)}
                    );
                }), catchError(data => of(SharedActions.CatchError(data))));
            })
        );
    });

    actualizarSucursal$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CuentasBancariasActions.actualizarCuentaBancaria),
            mergeMap((accion) => {
                return this.servicio.actualizarCuentaBancaria(accion.id, accion.element)
                .pipe(map(data => {
                    this.popupManager.showSuccessAlert('Se ha actualizado la cuenta bancaria exitosamente');
                    this.router.navigateByUrl('pages/giros/cuentas/lista');
                    return SharedActions.cargarCuentasBancarias({
                        Sucursales: (data && data.Data ? data.Data : data)
                    });
                }), catchError(data => of(SharedActions.CatchError(data))));
            })
        );
    });
}

