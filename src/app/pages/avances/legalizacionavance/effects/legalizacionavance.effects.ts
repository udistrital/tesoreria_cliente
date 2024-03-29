import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as LegalizacionavanceActions from '../actions/legalizacionavance.actions';


@Injectable()
export class LegalizacionavanceEffects {


  loadLegalizacionavances$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(LegalizacionavanceActions.loadLegalizacionavances),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY)
    );
  });


  constructor(private actions$: Actions) { }

}
