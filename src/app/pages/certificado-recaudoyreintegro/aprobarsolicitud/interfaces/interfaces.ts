export const CONFIGURACION_TABLA_APROBACION: any = {
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
        {
            key: 'tipoSolicitud',
            title: {
                name: 'Tipo de Solicitud',
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


export const DATOS_TABLA_APROBACION: any = [
    {
        fechaSolicitud: '2019-06-30T23:00:00Z',
        solicitante: 'Daniel Carvajal',
        codigo: '20192020015',
        periodo: '2019-2',
        tipoSolicitud: 'Certificado de Reintegro',
        estado: 'Aprobado'
    },
    {
        fechaSolicitud: '2019-06-30T23:00:00Z',
        solicitante: 'Daniel Carvajal',
        codigo: '20192020015',
        periodo: '2019-2',
        tipoSolicitud: 'Certificado de Recaudo',
        estado: 'Denegado'
    },
];

export const DATOS_ANEXOS: any = [
    {
        fechaPago: '2019-06-30T23:00:00Z',
        comprobantePago: '123654',
        periodo: '2019-3',
        nombreAnexo: 'document.pdf',
        valorPagado: '500000',
    },
];

export const CONFIGURACION_ANEXOS: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'fechaPago',
            title: {
                name: 'Fecha de Pago',
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
            key: 'comprobantePago',
            title: {
                name: 'Comprobante de Pago',
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
            key: 'nombreAnexo',
            title: {
                name: 'Archivo Adjunto',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'valorPagado',
            title: {
                name: 'Valor Pagado',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
    ],
    endSubtotal: {
        items: [
            {
                colspan: '4',
                name: 'TOTAL',
                class: 'text-center',
            },
        ],
        last: [
            {
                name: 0,
                class: 'text-center',
                pipe: {
                    type: 'currency',
                    config: [],
                    class: 'text-center',
                }
            },
        ]
    },
};
