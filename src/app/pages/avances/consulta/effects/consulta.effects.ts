import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as ConsultaActions from '../actions/consulta.actions';
import { ConsultaService } from '../services/consulta.service';
import { Store } from '@ngrx/store';
import { PopUpManager } from '../../../../@core/managers/popUpManager';


@Injectable()
export class ConsultaEffects {


  loadConsulta$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(ConsultaActions.loadConsulta),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY)
    );
  });


  constructor(
    private actions$: Actions,
    private avancesService: ConsultaService,
    private popupManager: PopUpManager
  ) { }



}
