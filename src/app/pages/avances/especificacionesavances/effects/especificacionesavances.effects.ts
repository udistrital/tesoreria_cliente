import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as EspecificacionesavancesActions from '../actions/especificacionesavances.actions';


@Injectable()
export class EspecificacionesavancesEffects {


  loadEspecificacionesavancess$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(EspecificacionesavancesActions.loadEspecificacionesavances),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY)
    );
  });


  constructor(private actions$: Actions) { }

}
