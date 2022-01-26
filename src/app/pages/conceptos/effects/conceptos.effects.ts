import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PopUpManager } from '../../../@core/managers/popUpManager';
import * as ConceptosActions from '../actions/conceptos.action';
import * as SharedActions from '../../../shared/actions/shared.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ConceptosService } from '../services/conceptos.service';

@Injectable()
export class ConceptosEffects {
    tituloAccion: string;

    constructor(
        private actions$: Actions,
        private servicio: ConceptosService,
        private popupManager: PopUpManager,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private translate: TranslateService,
    ) {
    }

    crearConceptoPadre$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ConceptosActions.crearConceptosPadre),
            mergeMap((accion) => {
                return this.servicio.crearConceptoPadre(accion.element)
                .pipe(map(data => {
                    this.popupManager
                        .showSuccessAlert(this.translate.instant('CUENTA_BANCARIA.guardado_exitoso'))
                        .then((result) => {
                            if (result.value === true) this.router.navigateByUrl('pages/conceptos/lista');
                        });
                    return SharedActions.cargarConcepto({
                        Conceptos: (data && data.Data ? data.Data : data)}
                    );
                }), catchError(data => of(SharedActions.CatchError(data))));
            })
        );
    });

    actualizarConceptoPadre$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ConceptosActions.actualizarConceptoPadre),
            mergeMap((accion) => {
                return this.servicio.actualizarConceptoPadre(accion.id, accion.element)
                .pipe(map(data => {
                    this.popupManager.showSuccessAlert(this.translate.instant('CUENTA_BANCARIA.guardado_exitoso')).then((result) => {
                        if (result.value === true) this.router.navigateByUrl('pages/conceptos/lista');
                    });
                    return SharedActions.cargarConcepto({
                        Conceptos: (data && data.Data ? data.Data : data)}
                    );
                }), catchError(data => of(SharedActions.CatchError(data))));
            })
        );
    });
}
