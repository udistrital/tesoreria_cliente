export const CONFIGURACION_TABLABANCOS: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'ID',
            title: {
                name_i18n: 'id',
                class: 'text-center',
            },
            pipe: {
                class: 'center',
            }
        },
        {
            key: 'codigoSuper',
            title: {
                name_i18n: 'super',
                class: 'text-center',
            },
            pipe: {
                class: 'center',
            }
        },
        {
            key: 'codigoAch',
            title: {
                name_i18n: 'ach',
                class: 'text-center',
            },
            pipe: {
                class: 'center',
            }
        },
        {
            key: 'nitBanco',
            title: {
                name_i18n: 'nit',
                class: 'text-center',
            },
            pipe: {
                class: 'center',
            }
        },
        {
            key: 'nombreBanco',
            title: {
                name_i18n: 'nombre_banco',
                class: 'text-center',
            },
            pipe: {
                class: 'center',
            }
        },
        {
            key: 'estado',
            title: {
                name_i18n: 'estado',
                class: 'text-center',
            },
            pipe: {
                class: 'center',
            }
        },
        {
            key: 'acciones',
            title: {
                name_i18n: 'acciones',
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
                name: 'verDetalleBanco',
                icon: 'fas fa-eye',
                class: 'p-1',
                title: 'Ver Detalle de Banco',
            },
            {
                name: 'editarDetalleBanco',
                icon: 'fas fa-edit',
                class: 'p-1',
                title: 'Editar Detalle de Banco',
            },
            {
                name: 'cuentasBancarias',
                icon: 'fas fa-wallet',
                class: 'p-1',
                title: 'Cuentas Bancarias',
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
export const DATOS_TABLABANCOS: any = [
    {
        codigoSuper: '01',
        codigoAch: '001',
        nitBanco: '860005216',
        nombreBanco: 'Banco de la República',
    },
    {
        codigoSuper: '02',
        codigoAch: '002',
        nitBanco: '86007732',
        nombreBanco: 'Banco de Bogotá',
    },
];
