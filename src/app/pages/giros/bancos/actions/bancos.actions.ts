import { createAction, props } from '@ngrx/store';

export const crearBanco = createAction(
    '[Bancos] Crear y guardar un nuevo banco',
    props<{ element: any }>()
);


export const actualizarBanco = createAction(
    '[Bancos] Actualizar y guardar un banco existente',
    props<{ id: any, element: any }>()
);

export const crearDatosBanco = createAction(
    '[Bancos] Crear y guardar los datos de un nuevo banco',
    props<{ element: any }>()
);

export const actualizarDatosBanco = createAction(
    '[Bancos] Actualizar y guardar los datos de un banco existente',
    props<{ id: any, element: any }>()
);

export const crearCodsBanco = createAction(
    '[Bancos] Crear y guardar codigos de un nuevo banco',
    props<{ element: any}>()
);

export const actualizarCodsBanco = createAction(
    '[Bancos] Actualizar y guardar los codigos de un banco existente',
    props<{ id: any, element: any }>()
);

export const crearTipoTercero = createAction(
    '[Bancos] Crear y guardar tipo de tercero',
    props<{ element: any}>()
);

export const actualizarTercero = createAction(
    '[Bancos] Actualizar y guardar un tercero existente',
    props<{ id: any, element: any }>()
);
