import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PopUpManager } from '../../../../@core/managers/popUpManager';
import { CuentaBancariaService } from '../services/cuentaBancaria.service';
import * as CuentasBancariasActions from '../actions/cuentaBancaria.action';
import * as SharedActions from '../../../../shared/actions/shared.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class CuentaBancariaEffects {
    tituloAccion: string;

    constructor(
        private actions$: Actions,
        private servicio: CuentaBancariaService,
        private popupManager: PopUpManager,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private translate: TranslateService, ) {

        }

    crearCuentaBancaria$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CuentasBancariasActions.crearCuentaBancaria),
            mergeMap((accion) => {
                return this.servicio.crearCuentaBancaria(accion.element)
                .pipe(map(data => {
                    this.popupManager.showSuccessAlert(this.translate.instant('CUENTA_BANCARIA.guardado_exitoso'));
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
                    this.popupManager.showSuccessAlert(this.translate.instant('CUENTA_BANCARIA.edicion_exitosa'));
                    this.router.navigateByUrl('pages/giros/cuentas/lista');
                    return SharedActions.cargarCuentasBancarias({
                        Sucursales: (data && data.Data ? data.Data : data)
                    });
                }), catchError(data => of(SharedActions.CatchError(data))));
            })
        );
    });
}
