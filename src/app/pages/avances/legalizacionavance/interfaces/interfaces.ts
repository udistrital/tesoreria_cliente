export const CONFIGURACION_TABLA: any = {
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
            key: 'fechaRegistro',
            title: {
                name: 'Fecha de Registro',
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
            key: 'estado',
            title: {
                name: 'Estado',
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
                name: 'detalle',
                icon: 'fas fa-eye',
                class: 'p-1',
                title: 'Detalle',
            },
            {
                name: 'modificar',
                icon: 'fas fa-pencil-alt',
                class: 'p-1',
                title: 'Modificar',
            },
            {
                name: 'borrar',
                icon: 'fas fa-trash-alt',
                class: 'p-1',
                title: 'Borrar',
            },
        ],
    },
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    endSubtotal: false,
    sort: true,
    filter: true,
};
export const DATOS_TABLA: any = [
    {
        consecutivo: '001',
        fechaRegistro: '12-12-2021',
        areaFuncional: '01',
        estado: 'ELABORADO',
    },
    {
        consecutivo: '002',
        fechaRegistro: '12-12-2021',
        areaFuncional: '01',
        estado: 'ELABORADO',
    },
];

export const CONFIGURACION_TABLA_LEGALIZACION: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'id',
            title: {
                name: '#',
                class: 'text-center',
            },
            pipe: { class: '', }
        },
        {
            key: 'fecha',
            title: {
                name: 'Fecha del Evento o Compra',
                class: 'text-center',
            },
            pipe: {
                type: 'date',
                config: ['shortDate'],
                class: 'text-center',
            }
        },
        {
            key: 'idProveedor',
            title: {
                name: 'Cédula o NIT',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'nombreProveedor',
            title: {
                name: 'Nombre del Proveedor',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'idFactura',
            title: {
                name: 'No. Factura',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'trm',
            title: {
                name: 'T.R.M. (Fecha de compra)',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'subtotal',
            title: {
                name: 'Subtotal de Compra',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'iva',
            title: {
                name: 'IVA (Valor)',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'valorTotal',
            title: {
                name: 'Valor Total de Compra',
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
                name: 'modificar',
                icon: 'fas fa-pencil-alt',
                class: 'p-1',
                title: 'Modificar',
            },
            {
                name: 'borrar',
                icon: 'fas fa-trash-alt',
                class: 'p-1',
                title: 'Borrar',
            },
        ],
    },
    tableActions: [
        {
            name: 'agregarRegistro',
            icon: 'fas fa-plus py-1 px-2',
            class: 'px-2',
            title: 'Agregar Registro',
        }
    ],
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    endSubtotal: {
        items: [
            {
                colspan: '6',
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
    sort: true,
};

export const CONFIGURACION_RETENCIONES: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'id',
            title: {
                name: '#',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'renta',
            title: {
                name: 'Renta',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'ica',
            title: {
                name: 'ICA',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'reteiva',
            title: {
                name: 'RETEIVA',
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
    endSubtotal: {
        items: [
            {
                colspan: '1',
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
    sort: true,
};

export const CONFIGURACION_ARCHIVOS: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'nombre',
            title: {
                name: 'Nombre Archivo',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'tamaño',
            title: {
                name: 'Tamaño',
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
                name: 'borrarAnexo',
                icon: 'fas fa-trash-alt',
                class: 'p-1',
                title: 'Borrar',
            },
        ],
    },
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    endSubtotal: false,
    sort: true,
    maxHeight: 200
};

export const CONFIGURACION_TABLA_ESTUDIANTES: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'codigo',
            title: {
                name: 'Código Estudiante',
                class: 'text-center',
            },
            pipe: { class: '', }
        },
        {
            key: 'tipoId',
            title: {
                name: 'Tipo ID',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'identificacion',
            title: {
                name: 'No. Identificación',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'nombreEstudiante',
            title: {
                name: 'Nombre del Estudiante',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'valorRecibido',
            title: {
                name: 'Valor Recibido',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'dias',
            title: {
                name: 'No. de Días',
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
                name: 'modificarEstudiante',
                icon: 'fas fa-pencil-alt',
                class: 'p-1',
                title: 'Modificar',
            },
            {
                name: 'borrarEstudiante',
                icon: 'fas fa-trash-alt',
                class: 'p-1',
                title: 'Borrar',
            },
        ],
    },
    tableActions: [
        {
            name: 'agregarEstudiante',
            icon: 'fas fa-plus py-1 px-2',
            class: 'px-2',
            title: 'Agregar Estudiante',
        }
    ],
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    endSubtotal: false,
    sort: true,
    maxHeight: 500
};
