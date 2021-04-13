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

export const CONFIGURACION_CONSULTARECIBOS: any = {
    checkElement: {
        title: {
            name: 'Seleccionar',
            class: 'small text-center',
        },
        pipe: {
            class: 'text-center',
        }
    },
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'periodo',
            title: {
                name: 'Periodo',
                class: 'small text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'periodoPago',
            title: {
                name: 'Periodo Pago',
                class: 'small text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'secuencia',
            title: {
                name: 'Secuencia',
                class: 'small text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'matricula',
            title: {
                name: 'Matrícula',
                class: 'small text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'seguro',
            title: {
                name: 'Seguro',
                class: 'small text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'carnet',
            title: {
                name: 'Carnet',
                class: 'small text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'sistematizacion',
            title: {
                name: 'Sistematización',
                class: 'small text-center',
            },
            pipe: {
                class: '',
            }
        },
    ],
    rowActions: {
        title: {
            name: 'Acciones',
            class: 'small text-center',
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
export const DATOS_CONSULTARECIBOS: any = [
    {
        fechaSolicitud: '2019-06-30T23:00:00Z',
        solicitante: 'Daniel Carvajal',
        codigo: '20192020015',
        periodo: '2019-2',
    },
];

export const CONFIGURACION_COMPROBANTES: any = {
    checkElement: {
        title: {
            name: 'Seleccionar',
            class: 'small text-center',
        },
        pipe: {
            class: 'text-center',
        }
    },
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'tipoComprobante',
            title: {
                name: 'Tipo Comprobante',
                class: 'small text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'numeroComprobante',
            title: {
                name: 'Número Comprobante',
                class: 'small text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'consecutivoComprobante',
            title: {
                name: 'Consecutivo Comprobante',
                class: 'small text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'secuenciaComprobante',
            title: {
                name: 'Secuencia Comprobante',
                class: 'small text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'idTercero',
            title: {
                name: 'ID del Tercero',
                class: 'small text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'detalle',
            title: {
                name: 'Detalle',
                class: 'small text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'valorDebito',
            title: {
                name: 'Valor Débito',
                class: 'small text-center',
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

export const DATOS_COMPROBANTES: any = [
    {
        tipoComprobante: '01',
        numeroComprobante: '20',
        secuenciaComprobante: '2020015',
        idTercero: '201920015',
        detalle: 'recaudo',
        valorDebito: '7500',
    },
];

export const CONFIGURACION_COMPROBANTESFINAL: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'tipoComprobante',
            title: {
                name: 'Tipo Comprobante',
                class: 'small text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'numeroComprobante',
            title: {
                name: 'Número Comprobante',
                class: 'small text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'consecutivoComprobante',
            title: {
                name: 'Consecutivo Comprobante',
                class: 'small text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'secuenciaComprobante',
            title: {
                name: 'Secuencia Comprobante',
                class: 'small text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'idTercero',
            title: {
                name: 'ID del Tercero',
                class: 'small text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'detalle',
            title: {
                name: 'Detalle',
                class: 'small text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'valorDebito',
            title: {
                name: 'Valor Débito',
                class: 'small text-center',
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
