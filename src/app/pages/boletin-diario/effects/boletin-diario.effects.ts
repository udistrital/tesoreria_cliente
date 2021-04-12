import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as BoletinDiarioActions from '../actions/boletin-diario.actions';


@Injectable()
export class BoletinDiarioEffects {


  loadBoletinDiarios$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(BoletinDiarioActions.loadBoletinDiarios),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY)
    );
  });


  constructor(private actions$: Actions) {}

}
