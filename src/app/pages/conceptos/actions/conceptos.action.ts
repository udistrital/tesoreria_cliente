import { createAction, props } from '@ngrx/store';

export const crearConceptosPadre = createAction(
    '[Giros] Crear y guardar una nuevo concepto padre',
    props<{ element: any }>()
);

export const actualizarConceptoPadre = createAction(
    '[Giros] Actualizar y guardar un concepto padre existente',
    props<{ id: any, element: any }>()
);
