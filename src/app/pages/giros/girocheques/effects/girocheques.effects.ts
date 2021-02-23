import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as GirochequesActions from '../actions/girocheques.actions';



@Injectable()
export class GirochequesEffects {

  loadGirochequess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GirochequesActions.loadGirochequess),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => GirochequesActions.loadGirochequessSuccess({ data })),
          catchError(error => of(GirochequesActions.loadGirochequessFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
