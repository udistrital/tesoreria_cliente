import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as BancosActions from '../actions/bancos.actions';
import * as SharedActions from '../../../../shared/actions/shared.actions';
import { PopUpManager } from '../../../../@core/managers/popUpManager';
import { BancosService } from '../services/bancos.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class BancosEffects {

    tituloAccion: string;

    constructor(
        private actions$: Actions,
        private servicio: BancosService,
        private popupManager: PopUpManager,
        private router: Router,
        private translate: TranslateService,
    ) {
    }

    crearBanco$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(BancosActions.crearBanco),
            mergeMap((accion) => {
                return this.servicio.crearBanco(accion.element)
                .pipe(map(data => {
                    return SharedActions.cargarBancos({
                        Bancos: (data && data.Data ? data.Data : data)}
                    );
                }), catchError(data => of(SharedActions.CatchError(data))));
            })
        );
    });

    actualizarBanco$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(BancosActions.actualizarBanco),
            mergeMap((accion) => {
                return this.servicio.actualizarBanco(accion.id, accion.element)
                .pipe(map(data => {
                    this.popupManager.showSuccessAlert('Se ha actualizado el banco exitosamente');
                    this.router.navigateByUrl('pages/giros/bancos/lista');
                    return SharedActions.cargarBancos({
                        Bancos: (data && data.Data ? data.Data : data)
                    });
                }), catchError(data => of(SharedActions.CatchError(data))));
            })
        );
    });

    crearDatosBanco$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(BancosActions.crearDatosBanco),
            mergeMap((accion) => {
                return this.servicio.crearDatosBanco(accion.element)
                .pipe(map(data => {
                    return SharedActions.cargarBancos({
                        Bancos: (data && data.Data ? data.Data : data)}
                    );
                }), catchError(data => of(SharedActions.CatchError(data))));
            })
        );
    });

    actualizarDatosBanco$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(BancosActions.actualizarDatosBanco),
            mergeMap((accion) => {
                return this.servicio.actualizarDatosBanco(accion.id, accion.element)
                .pipe(map(data => {
                    return SharedActions.cargarBancos({
                        Bancos: (data && data.Data ? data.Data : data)
                    });
                }), catchError(data => of(SharedActions.CatchError(data))));
            })
        );
    });

    crearCodsBanco$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(BancosActions.crearCodsBanco),
            mergeMap((accion) => {
                return this.servicio.crearCodsBanco(accion.element)
                .pipe(map(data => {
                    return SharedActions.cargarBancos({
                        Bancos: (data && data.Data ? data.Data : data)}
                    );
                }), catchError(data => of(SharedActions.CatchError(data))));
            })
        );
    });

    crearTipoTercero$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(BancosActions.crearTipoTercero),
            mergeMap((accion) => {
                return this.servicio.crearTipoTercero(accion.element)
                .pipe(map(data => {
                    this.popupManager.showSuccessAlert('Se ha creado el banco exitosamente').then((result) => {
                        if (result.value === true) this.router.navigateByUrl('pages/giros/bancos/lista');
                    });
                    return SharedActions.cargarTipoTercero({
                        TipoTercero: (data && data.Data ? data.Data : data)}
                    );
                }), catchError(data => of(SharedActions.CatchError(data))));
            })
        );
    });

    actualizarSucursal$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(BancosActions.actualizarCodsBanco),
            mergeMap((accion) => {
                return this.servicio.actualizarCodsBanco(accion.id, accion.element)
                .pipe(map(data => {
                    return SharedActions.cargarBancos({
                        Bancos: (data && data.Data ? data.Data : data)
                    });
                }), catchError(data => of(SharedActions.CatchError(data))));
            })
        );
    });

    actualizarTercero$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(BancosActions.actualizarTercero),
            mergeMap((accion) => {
                return this.servicio.actualizarTercero(accion.id, accion.element)
                .pipe(map(data => {
                    this.popupManager.showSuccessAlert('Se ha cambiado el estado del banco exitosamente').then((result) => {
                        window.location.reload();
                    });
                    return SharedActions.cargarBancosMid({
                        Bancos: (data && data.Data ? data.Data : data)
                    });
                }), catchError(data => of(SharedActions.CatchError(data))));
            })
        );
    });
}
