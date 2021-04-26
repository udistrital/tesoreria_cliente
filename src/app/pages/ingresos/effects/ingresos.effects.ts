import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as IngresosActions from '../actions/ingresos.actions';


@Injectable()
export class IngresosEffects {


  loadIngresoss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(IngresosActions.loadIngresoss),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY)
    );
  });


  constructor(private actions$: Actions) {}

}
