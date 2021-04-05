export const CONFIGURACION_TABLA_DECLARACION: any = {
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
            key: 'consecutivoDeclaracion',
            title: {
                name: 'Consecutivo',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
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
                name: 'cambioEstado',
                icon: 'fas fa-edit',
                class: 'p-1',
                title: 'Editar Documento',
            },
            {
                name: 'consultaDetalle',
                icon: 'fas fa-eye',
                class: 'p-1',
                title: 'Detalle de la Inversión',
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
export const DATOS_TABLA_DECLARACION: any = [
    {
        vigencia: '2019',
        consecutivoDeclaracion: '123',
        estado: 'Definitivo',
        detalle: 'Declaración de Retención 2019',
        areaFuncional: '01',
        fechaInicial: '2019-05-01T23:00:00Z',
        fechaFinal: '2019-06-30T23:00:00Z',
    },
    {
        vigencia: '2020',
        consecutivoDeclaracion: '321',
        estado: 'Corregir',
        detalle: 'Declaración de Retención 2020',
        areaFuncional: '01',
        fechaInicial: '2020-10-01T23:00:00Z',
        fechaFinal: '2020-12-30T23:00:00Z',
    },
    {
        vigencia: '2021',
        consecutivoDeclaracion: '321',
        estado: 'Borrador',
        detalle: 'Declaración de Retención 2021',
        areaFuncional: '01',
        fechaInicial: '2020-10-01T23:00:00Z',
        fechaFinal: '2020-12-30T23:00:00Z',
    },
];

export const CONFIGURACION_TABLACUENTAS: any = {
    title: {
        name: '(código - nombre de cuenta contable)',
        class: 'text-center',
    },
    rowActions: {
        title: {
            name: 'Ver',
            class: 'text-center',
            actionClass: 'd-flex flex-row justify-content-around align-middle'
        },
        actions: [
            {
                name: 'verDocumento',
                icon: 'fas fa-eye',
                class: 'p-1',
                title: 'Ver documento',
            },
        ],
    },
    showColumnTitle: true,
    dataConfig: [
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
            key: 'tipoDocumento',
            title: {
                name: 'Tipo de Documento',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'numeroDocumento',
            title: {
                name: 'Número',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'fechaDocumento',
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
        {
            key: 'tercero',
            title: {
                name: 'Tercero',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'valorBase',
            title: {
                name: 'Valor Base',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'valorRetencion',
            title: {
                name: 'Valor Retención',
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
                colspan: '5',
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
            {
                name: 0,
                class: 'text-center',
                pipe: {
                    type: 'currency',
                    config: [],
                    class: 'text-center',
                }
            },
            {
                name: ' ',
                class: '',
                pipe: { type: '', config: [], class: '' }
            },
        ]
    },
};

export const DATOS_TABLACUENTAS: any = [
    {
        vigencia: '2019',
        fechaInicial: '2019-05-01T23:00:00Z',
        fechaFinal: '2019-06-30T23:00:00Z',
    },
];

export const CONFIGURACION_DETALLECUENTAS: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'codCuentaContable',
            title: {
                name: 'Código Cuenta Contable',
                class: 'text-center bg-white text-dark',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'nombreCuentaContable',
            title: {
                name: 'Tipo de Documento',
                class: 'text-center bg-white text-dark',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'totalValorBase',
            title: {
                name: 'Total Valor Base',
                class: 'text-center bg-white text-dark',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'totalValorRetencion',
            title: {
                name: 'Total Valor Retención',
                class: 'text-center bg-white text-dark',
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
                colspan: '2',
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
    sort: false,
    filter: false,
};

export const DATOS_DETALLECUENTAS: any = [
    {
        vigencia: '2019',
        fechaInicial: '2019-05-01T23:00:00Z',
        fechaFinal: '2019-06-30T23:00:00Z',
    },
];

export const CONFIGURACION_CONCILIACION: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'codCuentaContable',
            title: {
                name: 'Código Cuenta Contable',
                class: 'text-center bg-white text-dark',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'nombreCuentaContable',
            title: {
                name: 'Tipo de Documento',
                class: 'text-center bg-white text-dark',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'saldoContabilidad',
            title: {
                name: 'Saldos Contabilidad',
                class: 'text-center bg-white text-dark',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'saldoContabilidadRedondo',
            title: {
                name: 'Saldos Contabilidad Redondeados',
                class: 'text-center bg-white text-dark',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'ValorEntidad',
            title: {
                name: 'Valor de la Entidad',
                class: 'text-center bg-white text-dark',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'diferencia',
            title: {
                name: 'Diferencia',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
    ],
};

export const DATOS_CONCILIACION: any = [
    {
        vigencia: '2019',
        fechaInicial: '2019-05-01T23:00:00Z',
        fechaFinal: '2019-06-30T23:00:00Z',
    },
];
export const DATOS_OTROSPAGOS: any = [
    {
        vigencia: '2019',
        fechaInicial: '2019-05-01T23:00:00Z',
        fechaFinal: '2019-06-30T23:00:00Z',
    },
];
