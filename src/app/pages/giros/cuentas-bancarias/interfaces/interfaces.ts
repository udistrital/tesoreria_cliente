export const CONFIGURACION_TABLACUENTA: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'ID',
            title: {
                name: 'ID',
                class: 'text-center',
            },
            pipe: {
                class: 'center',
            }
        },
        {
            key: 'nombreCuenta',
            title: {
                name: 'Cuenta',
                class: 'text-center',
            },
            pipe: {
                class: 'center',
            }
        },
        {
            key: 'tipoCuenta',
            title: {
                name: 'TipoCuenta',
                class: 'text-center',
            },
            pipe: {
                class: 'left',
            }
        },
        {
            key: 'numeroCuenta',
            title: {
                name: 'NumeroCuenta',
                class: 'text-center',
            },
            pipe: {
                class: 'left',
            }
        },
        {
            key: 'sucursal',
            title: {
                name: 'Sucursal',
                class: 'text-center',
            },
            pipe: {
                class: 'center',
            },
        },
        {
            key: 'estado',
            title: {
                name: 'Estado',
                class: 'text-center',
            },
            pipe: {
                class: 'center',
            },
        },
        {
            key: 'acciones',
            title: {
                name: 'Acciones',
                class: 'text-center',
            },
            pipe: {
                class: 'icons'
            }
        }
    ],
    rowActions: {
        title: {
            name: 'Acciones',
            class: 'text-center',
            actionClass: 'd-flex flex-row justify-content-around align-middle'
        },
        actions: [
            {
                name: 'verDetalleCuenta',
                icon: 'fas fa-eye',
                class: 'p-1',
                title: 'Ver Detalle de Cuenta Bancaria',
            },
            {
                name: 'editarCuenta',
                icon: 'fas fa-edit',
                class: 'p-1',
                title: 'Editar Detalle de Cuenta Bancaria',
            },
            {
                name: 'borrarCuenta',
                icon: 'fas fa-trash-alt',
                class: 'p-1',
                title: 'BorrarCuenta',
            },
        ],
    },
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    sort: true,
    filter: true,
};
