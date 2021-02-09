export const CONFIGURACION_TABLA: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'consecutivo',
            title: {
                name: 'Consecutivo',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'fechaRegistro',
            title: {
                name: 'Fecha de Registro',
                class: 'text-center',
            },
            pipe: {
                type: 'date',
                config: [
                    'shortDate'
                ],
                class: 'text-center',
            }
        },
        {
            key: 'areaFuncional',
            title: {
                name: 'Área Funcional',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'estado',
            title: {
                name: 'Estado',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
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
                name: 'detalle',
                icon: 'fas fa-eye',
                class: 'p-1',
                title: 'Detalle',
            },
            {
                name: 'modificar',
                icon: 'fas fa-pencil-alt',
                class: 'p-1',
                title: 'Modificar',
            },
            {
                name: 'borrar',
                icon: 'fas fa-trash-alt',
                class: 'p-1',
                title: 'Borrar',
            },
        ],
    },
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    endSubtotal: false,
    sort: true,
    filter: true,
};
export const DATOS_TABLA: any = [
    {
        consecutivo: '001',
        fechaRegistro: '12-12-2021',
        areaFuncional: '01',
        estado: 'ELABORADO',
    },
    {
        consecutivo: '002',
        fechaRegistro: '12-12-2021',
        areaFuncional: '01',
        estado: 'ELABORADO',
    },
];