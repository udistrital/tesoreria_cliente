export const CONFIGURACION_LISTA: any = {
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
            key: 'vigencia',
            title: {
                name: 'Vigencia',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
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
            key: 'numeroLegalizacion',
            title: {
                name: 'No. de Legalización',
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
                name: 'verDocumento',
                icon: 'fas fa-eye',
                class: 'p-1',
                title: 'Ver Legalización',
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
export const DATOS_LISTA: any = [
    {
        consecutivo: '001',
        vigencia: '2019',
        areaFuncional: '01',
        numeroLegalizacion: '357',
    },
    {
        consecutivo: '002',
        vigencia: '2020',
        areaFuncional: '01',
        numeroLegalizacion: '358',
    },
];
