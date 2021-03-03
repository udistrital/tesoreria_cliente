import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as AvancesActions from '../actions/avances.actions';
import * as SharedActions from '../actions/shared.actions';
import { AvancesService } from '../services/avances.service';
import { Store } from '@ngrx/store';
import { PopUpManager } from '../../@core/managers/popUpManager';


@Injectable()
export class AvancesEffects {


  loadAvancess$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AvancesActions.loadAvancess),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY)
    );
  });


  constructor(
    private actions$: Actions,
    private avancesService: AvancesService,
    private popupManager: PopUpManager
  ) { }

  // Tipos avances

  getTiposAvances$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AvancesActions.obtenerTiposAvances),
      mergeMap((accion) => {
        return this.avancesService.getTiposAvances(accion && accion.id ? accion.id : null)
          .pipe(map(data => AvancesActions.cargarTiposAvances({ tiposAvances: (data && data.Data ? data.Data : data) })),
            catchError(data => of(SharedActions.CatchError(data))));
      })
    );
  });

  createTipoAvance$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AvancesActions.crearTipoAvance),
      mergeMap((accion) => {
        return this.avancesService.createTipoAvance(accion.element)
          .pipe(map(data => AvancesActions.cargarTiposAvances({ tiposAvances: { idCreado: data && data.Data && data.Data.Id ? data.Data.Id : data } })),
            catchError(data => of(SharedActions.CatchError(data))));
      })
    );
  });

  updateTipoAvance$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AvancesActions.actualizarTipoAvance),
      mergeMap((accion) => {
        return this.avancesService.updateTipoAvance(accion.id, accion.element)
          .pipe(map(() => {
            return AvancesActions.cargarTiposAvances({
              tiposAvances: { idActualizado: accion.id }
            });
          }),
            catchError(data => of(SharedActions.CatchError(data))));
      })
    );
  });

  deleteTipoAvance$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AvancesActions.eliminarTipoAvance),
      mergeMap((accion) => {
        return this.avancesService.deleteTipoAvance(accion.id)
          .pipe(map(() => {
            this.popupManager.showSuccessAlert('Tipo de avance eliminado');
            return AvancesActions.cargarTiposAvances({
              tiposAvances: { idEliminado: accion.id }
            });
          }),
            catchError(data => of(SharedActions.CatchError(data))));
      })
    );
  });

  // Normas

  getNormas$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AvancesActions.obtenerNormas),
      mergeMap((accion) => {
        return this.avancesService.getNormas(accion && accion.id ? accion.id : null, accion && accion.query ? accion.query : null)
          .pipe(map(data => AvancesActions.cargarNormas({ normas: (data && data.Data ? data.Data : data) })),
            catchError(data => of(SharedActions.CatchError(data))));
      })
    );
  });

  createNorma$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AvancesActions.crearNorma),
      mergeMap((accion) => {
        return this.avancesService.createNorma(accion.element)
          .pipe(map(data => {
            this.popupManager.showSuccessAlert('Guardado exitoso');
            return AvancesActions.cargarNormas({
              normas: { idCreado: data && data.Data && data.Data.Id ? data.Data.Id : data }
            });
          }),
            catchError(data => of(SharedActions.CatchError(data))));
      })
    );
  });

  updateNorma$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AvancesActions.actualizarNorma),
      mergeMap((accion) => {
        this.popupManager.showSuccessAlert('Guardado exitoso');
        return this.avancesService.updateNorma(accion.id, accion.element)
          .pipe(map(() => {
            return AvancesActions.cargarNormas({
              normas: { idActualizado: accion.id }
            });
          }),
            catchError(data => of(SharedActions.CatchError(data))));
      })
    );
  });

}
