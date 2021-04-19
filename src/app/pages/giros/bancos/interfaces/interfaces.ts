export const CONFIGURACION_TABLABANCOS: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'codigoSuper',
            title: {
                name: 'Código Super',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'codigoAch',
            title: {
                name: 'Código ACH',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'nitBanco',
            title: {
                name: 'NIT',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'nombreBanco',
            title: {
                name: 'Nombre del Banco',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
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
