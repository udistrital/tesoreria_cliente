import { createAction, props } from '@ngrx/store';

export const crearSucursal = createAction(
    '[Giros] Crear y guardar una nueva sucursal',
    props<{ element: any }>()
);


export const actualizarSucursal = createAction(
    '[Giros] Actualizar y guardar una sucursal existente',
    props<{ id: any, element: any }>()
);
