export const CONFIGURACION_TABLA_ADQUISICION: any = {
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
            key: 'consecutivoAdqusicion',
            title: {
                name: 'Consecutivo',
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
                class: 'text-justify',
            }
        },
        {
            key: 'banco',
            title: {
                name: 'Banco',
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
                name: 'rendimientos',
                icon: 'fas fa-check-double',
                class: 'p-1',
                title: 'Rendimientos de Inversión',
            },
            {
                name: 'consultaDetalle',
                icon: 'fas fa-eye',
                class: 'p-1',
                title: 'Detalle de la Inversión',
            },
            {
                name: 'reinversion',
                icon: 'fas fa-money-check',
                class: 'p-1',
                title: 'Registrar Reinversión',
            },
            {
                name: 'cancelarInversion',
                icon: 'fas fa-ban',
                class: 'p-1',
                title: 'Cancelar Inversión',
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
export const DATOS_TABLA_ADQUISICION: any = [
    {
        vigencia: '2019',
        consecutivoAdqusicion: '123',
        estado: 'Compra',
        banco: 'Banco de Bogotá',
        areaFuncional: '01',
        fechaInicial: '2019-05-01T23:00:00Z',
        fechaFinal: '2019-06-30T23:00:00Z',
    },
    {
        vigencia: '2020',
        consecutivoAdqusicion: '321',
        estado: 'Reinversión',
        banco: 'Banco de Bogotá',
        areaFuncional: '01',
        fechaInicial: '2020-10-01T23:00:00Z',
        fechaFinal: '2020-12-30T23:00:00Z',
    },
];

export const CONFIGURACION_CONTABILIZACION: any = {
    title: {
        name: 'CAUSACIÓN INVERSIÓN INICIAL',
        class: 'text-center',
        actionClass: 'd-flex flex-row justify-content-around align-middle'
    },
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'secuencia',
            title: {
                name: 'Secuencia',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'tercero',
            title: {
                name: 'ID de Tercero',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'numeroCuenta',
            title: {
                name: 'No. de Cuenta',
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
            key: 'debito',
            title: {
                name: 'Débito',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'credito',
            title: {
                name: 'Crédito',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
    ],
    rowActions: false,
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    tableActions: false,
};
export const DATOS_CONTABILIZACION: any = [
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

export const CONFIGURACION_DETALLE: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'secuencia',
            title: {
                name: 'Secuencia',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'tercero',
            title: {
                name: 'ID de Tercero',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'numeroCuenta',
            title: {
                name: 'No. de Cuenta',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'debito',
            title: {
                name: 'Débito',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'credito',
            title: {
                name: 'Crédito',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
    ],
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
};

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
