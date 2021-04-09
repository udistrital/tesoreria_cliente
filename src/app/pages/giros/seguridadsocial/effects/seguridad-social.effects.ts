import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as SeguridadSocialActions from '../actions/seguridad-social.actions';


@Injectable()
export class SeguridadSocialEffects {


  loadSeguridadSocials$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SeguridadSocialActions.loadSeguridadSocials),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY)
    );
  });


  constructor(private actions$: Actions) {}

}
