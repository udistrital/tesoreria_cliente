import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as GirosProveedoresActions from '../actions/giros-proveedores.actions';



@Injectable()
export class GirosProveedoresEffects {

  loadGirosProveedoress$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GirosProveedoresActions.loadGirosProveedoress),
      concatMap(() => EMPTY)
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
    );
  });



  constructor(private actions$: Actions) {}

}
