export const CONFIGURACION_TABLAINFORMES: any = {
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
            key: 'tipoDocumento',
            title: {
                name: 'Tipo de Documento',
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
export const DATOS_TABLAINFORMES: any = [
    {
        vigencia: '2019',
        tipoDocumento: 'Compra',
        areaFuncional: '01',
        fechaInicial: '2019-05-01T23:00:00Z',
        fechaFinal: '2019-06-30T23:00:00Z',
    },
    {
        vigencia: '2020',
        tipoDocumento: 'Reinversión',
        areaFuncional: '01',
        fechaInicial: '2020-10-01T23:00:00Z',
        fechaFinal: '2020-12-30T23:00:00Z',
    },
];

export const CONFIGURACION_CONSULTAINFORMACION: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'ordePago',
            title: {
                name: 'No. Órden de Pago',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'nombre',
            title: {
                name: 'Nombre Solicitante',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'concepto',
            title: {
                name: 'Concepto',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'valorOrdenPago',
            title: {
                name: 'Valor Orden Pago',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
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
                name: 'consultaIE',
                icon: 'fas fa-clipboard-list',
                class: 'p-1',
                title: 'Consultar Información Exógena',
            },
            {
                name: 'detalle',
                icon: 'fas fa-eye',
                class: 'p-1',
                title: 'Ver Detalle',
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
export const DATOS_CONSULTAINFORMACION: any = [
    {
        secuencia: '1',
        tercero: '900123456',
        numeroCuenta: '7208021100',
        detalle: 'inversión',
        debito: '500000',
        credito: '',
    },
    {
        secuencia: '2',
        tercero: '900123456',
        numeroCuenta: '7208021100',
        detalle: 'inversión',
        debito: '',
        credito: '500000',
    },
];
