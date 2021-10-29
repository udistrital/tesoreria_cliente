import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as SucursalesActions from '../actions/sucursales.actions';
import * as SharedActions from '../../../../shared/actions/shared.actions';
import { PopUpManager } from '../../../../@core/managers/popUpManager';
import { SucursalesService } from '../services/sucursales.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class SucursalesEffects {

    tituloAccion: string;

    constructor(
        private actions$: Actions,
        private servicio: SucursalesService,
        private popupManager: PopUpManager,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
    }

    crearSucursal$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(SucursalesActions.crearSucursal),
            mergeMap((accion) => {
                return this.servicio.crearSucursal(accion.element)
                .pipe(map(data => {
                    this.popupManager.showSuccessAlert('Guardado de sucursal exitoso');
                    this.router.navigateByUrl('pages/giros/sucursales/lista');
                    return SharedActions.cargarSucursales({
                        Sucursales: (data && data.Data ? data.Data : data)}
                    );
                }), catchError(data => of(SharedActions.CatchError(data))));
            })
        );
    });

    actualizarSucursal$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(SucursalesActions.actualizarSucursal),
            mergeMap((accion) => {
                return this.servicio.actualizarSucursal(accion.id, accion.element)
                .pipe(map(data => {
                    this.popupManager.showSuccessAlert('Se ha actualizado la sucursal exitosamente');
                    this.router.navigateByUrl('pages/giros/sucursales/lista');
                    return SharedActions.cargarSucursales({
                        Sucursales: (data && data.Data ? data.Data : data)
                    });
                }), catchError(data => of(SharedActions.CatchError(data))));
            })
        );
    });
}
