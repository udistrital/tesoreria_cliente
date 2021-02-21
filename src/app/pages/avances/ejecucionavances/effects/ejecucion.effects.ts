import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as EjecucionActions from '../actions/ejecucion.actions';



@Injectable()
export class EjecucionEffects {

  loadEjecucions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EjecucionActions.loadEjecucions),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => EjecucionActions.loadEjecucionsSuccess({ data })),
          catchError(error => of(EjecucionActions.loadEjecucionsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
