export const CONFIGURACION_TABLACERTIFICADOS: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'fechaSolicitud',
            title: {
                name: 'Fecha',
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
            key: 'solicitante',
            title: {
                name: 'Solicitante',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'codigo',
            title: {
                name: 'Código del Estudiante',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'periodo',
            title: {
                name: 'Periodo',
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
                name: 'verSolicitud',
                icon: 'fas fa-eye',
                class: 'p-1',
                title: 'Ver Solicitud',
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
export const DATOS_TABLACERTIFICADOS: any = [
    {
        fechaSolicitud: '2019-06-30T23:00:00Z',
        solicitante: 'Daniel Carvajal',
        codigo: '20192020015',
        periodo: '2019-2',
    },
];

