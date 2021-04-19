import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as GirosnominaActions from '../actions/girosnomina.actions';



@Injectable()
export class GirosnominaEffects {

  loadGirosnominas$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GirosnominaActions.loadGirosnominas),
      concatMap(() => EMPTY)
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
    );
  });



  constructor(private actions$: Actions) {}

}
