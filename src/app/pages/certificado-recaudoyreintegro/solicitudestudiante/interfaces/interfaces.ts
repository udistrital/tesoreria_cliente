export const CONFIGURACION_TABLASOLICITUD: any = {
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
            key: 'tipoSolicitud',
            title: {
                name: 'Tipo de Solicitud',
                class: 'text-center',
            },
            pipe: {
                class: '',
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
        {
            key: 'estadoSolicitud',
            title: {
                name: 'Estado',
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


export const DATOS_TABLASOLICITUD: any = [
    {
        fechaSolicitud: '2019-06-30T23:00:00Z',
        tipoSolicitud: 'Certificado de Reintegro',
        periodo: '2019-2',
        estadoSolicitud: 'Aprobado',
    },
    {
        fechaSolicitud: '2019-09-30T23:00:00Z',
        tipoSolicitud: 'Certificado de Recaudo',
        periodo: '2019-3',
        estadoSolicitud: 'Solicitado',
    },
];

