import { createAction, props } from '@ngrx/store';

export const crearCuentaBancaria = createAction(
    '[Giros] Crear y guardar una nueva cuenta bancaria',
    props<{ element: any }>()
);

export const actualizarCuentaBancaria = createAction(
    '[Giros] Actualizar y guardar una cuenta bancaria existente',
    props<{ id: any, element: any }>()
);
