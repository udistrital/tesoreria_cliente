import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import * as SolicitudAvanceActions from '../actions/solicitudavances.actions';
import { PopUpManager } from '../../../../@core/managers/popUpManager';
import { SolicitudavancesService } from '../services/solicitudavances.service';
import * as SharedActions from '../../../../shared/actions/shared.actions';


@Injectable()
export class SolicitudAvancesEffects {


    loadAvancess$ = createEffect(() => {
        return this.actions$.pipe(

            ofType(SolicitudAvanceActions.loadSolicitudavances),
            /** An EMPTY observable only emits completion. Replace with your own observable API request */
            concatMap(() => EMPTY)
        );
    });


    constructor(
        private actions$: Actions,
        private servicio: SolicitudavancesService,
        private popupManager: PopUpManager
    ) { }

    // Solicitud de avances

    getSolicitudesAvances$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(SolicitudAvanceActions.obtenerSolicitudesAvance),
            mergeMap((accion) => this.servicio.getSolicitudesAvance()
                .pipe(map(data => SolicitudAvanceActions.cargarSolicitudesAvance({
                    solicitudesAvance: (data && data.Data ? data.Data : data)

                })),
                    catchError(data => of(SharedActions.CatchError(data)))))

                // })), catchError(data => of(SharedActions.CatchError(data)))))

        );
    });

    createSolicitudAvance$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(SolicitudAvanceActions.crearSolicitudAvance),
            mergeMap((accion) => {
                return this.servicio.createSolicitudAvance(accion.element)
                    // .pipe(map(data => SolicitudAvanceActions.cargarSolicitudesAvance({
                    //     solicitudesAvance: { creado: (data && data.Data ? data.Data : data) }
                    // })),
                    //     catchError(data => of(SharedActions.CatchError(data))));
                    .pipe(map(data => {
                        // console.log("data ", data)
                       this.popupManager.showSuccessAlert('Guardado exitoso');
                       return SolicitudAvanceActions.cargarSolicitudesAvance({
                           solicitudesAvance: { creado: (data && data.Data ? data.Data : data) }
                       });
                    }), catchError(data => of(SharedActions.CatchError(data))));

            })
        );
    });

    updateSolicitudAvance$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(SolicitudAvanceActions.actualizarSolicitudAvance),
            mergeMap((accion) =>
                this.servicio.updateSolicitudAvance(accion.id, accion.element)
                    .pipe(map((data) => SolicitudAvanceActions.cargarSolicitudesAvance({
                        solicitudesAvance: { actualizado: (data && data.Data ? data.Data : data) }
                    })
                    ),
                        catchError(data => of(SharedActions.CatchError(data))))
            )
        );
    });

}
