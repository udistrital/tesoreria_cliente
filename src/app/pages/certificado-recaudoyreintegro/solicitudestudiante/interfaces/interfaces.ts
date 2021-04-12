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

export const CONFIGURACION_RECIBOS: any = {
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

export const DATOS_RECIBOS: any = [
    {
        periodo: '2019-2',
    },
    {
        periodo: '2019-3',
    },
];

export const CONFIGURACION_INFOADICIONAL: any = {
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
            key: 'valorOrdinario',
            title: {
                name: 'Valor Ordinario',
                class: 'small text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'fechaOrdinaria',
            title: {
                name: 'Fecha Ordinaria',
                class: 'small text-center',
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
            key: 'valorExtra',
            title: {
                name: 'Valor Extraordinario',
                class: 'small text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'fechaExtra',
            title: {
                name: 'Fecha Extraordinaria',
                class: 'small text-center',
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
            key: 'cuota',
            title: {
                name: 'Cuota',
                class: 'small text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'pago',
            title: {
                name: 'Pago',
                class: 'small text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'fechaPago',
            title: {
                name: 'Fecha de Pago',
                class: 'small text-center',
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
            key: 'observaciones',
            title: {
                name: 'Observaciones',
                class: 'small text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'estadoRecibo',
            title: {
                name: 'Estado del Recibo',
                class: 'small text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
    ],
    sort: true,
    filter: false,
};


export const DATOS_INFOADICIONAL: any = [
    {
        valorOrdinario: '$500.000,00',
    },
    {
        valorOrdinario: '$490.000,00',
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
    rowActions: {
        title: {
            name: 'Acciones',
            class: 'text-center',
            actionClass: 'd-flex flex-row justify-content-around align-middle'
        },
        actions: [
            {
                name: 'modificarArchivo',
                icon: 'fas fa-edit',
                class: 'p-1',
                title: 'Editar Archivo',
            },
            {
                name: 'borrarArchivo',
                icon: 'fas fa-trash-alt',
                class: 'p-1',
                title: 'Borrar Archivo',
            },
        ],
    },
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    tableActionsI: [
        {
            name: 'nuevoArchivo',
            icon: 'fas fa-plus py-1 px-2',
            class: 'px-2',
            title: 'Agregar Comprobante',
        }
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
            {
                name: ' ',
                class: '',
                pipe: { type: '', config: [], class: '' }
            },
        ]
    },
};

export const DATOS_ANEXOS: any = [
    {
        fechaPago: '2019-06-30T23:00:00Z',
        comprobantePago: '123654',
        periodo: '2019-3',
        nombreAnexo: 'document.pdf',
        valorPagado: '500000',
    },
];

export const CONFIGURACION_DETALLERECIBOS: any = {
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
};


export const CONFIGURACION_DETALLEANEXOS: any = {
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
