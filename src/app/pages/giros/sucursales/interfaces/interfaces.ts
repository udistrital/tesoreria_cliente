export const CONFIGURACION_TABLASUCURSAL: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'codigoID',
            title: {
                name: 'ID',
                class: 'text-center',
            },
            pipe: {
                class: 'center',
            }
        },
        {
            key: 'nombreSucursal',
            title: {
                name: 'Sucursal',
                class: 'text-center',
            },
            pipe: {
                class: 'left',
            }
        },
        {
            key: 'nombreBanco',
            title: {
                name: 'Banco',
                class: 'text-center',
            },
            pipe: {
                class: 'left',
            }
        },
        {
            key: 'activo',
            title: {
                name: 'Activo',
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
                name: 'verDetalleSucursal',
                icon: 'fas fa-eye',
                class: 'p-1',
                title: 'Ver Detalle de Banco',
            },
            {
                name: 'editarSucursal',
                icon: 'fas fa-edit',
                class: 'p-1',
                title: 'Editar Detalle de Banco',
            },
            {
                name: 'borraSucursal',
                icon: 'fas fa-trash-alt',
                class: 'p-1',
                title: 'pendiente',
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
