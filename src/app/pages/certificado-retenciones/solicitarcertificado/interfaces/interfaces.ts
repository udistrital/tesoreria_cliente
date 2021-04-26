export const CONFIGURACION_TABLARETENCIONES: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'vigencia',
            title: {
                name: 'Vigencia',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'estado',
            title: {
                name: 'Estado',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'areaFuncional',
            title: {
                name: 'Área Funcional',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'fechaInicial',
            title: {
                name: 'Fecha Inicial',
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
            key: 'fechaFinal',
            title: {
                name: 'Fecha Final',
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
    ],
    rowActions: {
        title: {
            name: 'Acciones',
            class: 'text-center',
            actionClass: 'd-flex flex-row justify-content-around align-middle'
        },
        actions: [
            {
                name: 'consultaDetalle',
                icon: 'fas fa-eye',
                class: 'p-1',
                title: 'Detalle del Certificado',
            },
            {
                name: 'descargar',
                icon: 'fas fa-file-download',
                class: 'p-1',
                title: 'Descargar Certificado',
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
export const DATOS_TABLARETENCIONES: any = [
    {
        vigencia: '2019',
        estado: 'Compra',
        areaFuncional: '01',
        fechaInicial: '2019-05-01T23:00:00Z',
        fechaFinal: '2019-06-30T23:00:00Z',
    },
    {
        vigencia: '2020',
        estado: 'Reinversión',
        areaFuncional: '01',
        fechaInicial: '2020-10-01T23:00:00Z',
        fechaFinal: '2020-12-30T23:00:00Z',
    },
];

export const CONFIGURACION_TABLARENDIMIENTOS: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'vigencia',
            title: {
                name: 'Vigencia',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'numeroComprobante',
            title: {
                name: 'Número',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'detalle',
            title: {
                name: 'Detalle',
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
                class: 'text-center',
            }
        },
        {
            key: 'fechaRendimiento',
            title: {
                name: 'Fecha de Documento',
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
    ],
    rowActions: {
        title: {
            name: 'Acciones',
            class: 'text-center',
            actionClass: 'd-flex flex-row justify-content-around align-middle'
        },
        actions: [
            {
                name: 'verDetalle',
                icon: 'fas fa-eye',
                class: 'p-1',
                title: 'Ver Detalle',
            },
        ],
    },
};

export const DATOS_TABLARENDIMIENTOS: any = [
    {
        vigencia: '2019',
        numeroComprobante: '01-01-01',
        detalle: 'Rendimientos CDT Mes 1',
        areaFuncional: '01',
        fechaRendimiento: '2019-05-01T23:00:00Z',
    },
    {
        vigencia: '2019',
        numeroComprobante: '01-01-02',
        detalle: 'Rendimientos CDT Mes 2',
        areaFuncional: '01',
        fechaRendimiento: '2019-06-01T23:00:00Z',
    },
];
