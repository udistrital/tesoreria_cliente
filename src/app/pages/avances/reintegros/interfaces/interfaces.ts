export const CONFIGURACION_LISTA: any = {
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
            key: 'vigencia',
            title: {
                name: 'Vigencia',
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
                class: 'text-justify',
            }
        },
        {
            key: 'numeroLegalizacion',
            title: {
                name: 'No. de Legalización',
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
                name: 'verDocumento',
                icon: 'fas fa-eye',
                class: 'p-1',
                title: 'Ver Legalización',
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
export const DATOS_LISTA: any = [
    {
        consecutivo: '001',
        vigencia: '2019',
        areaFuncional: '01',
        numeroLegalizacion: '357',
    },
    {
        consecutivo: '002',
        vigencia: '2020',
        areaFuncional: '01',
        numeroLegalizacion: '358',
    },
];

export const CONFIGURACION_LEGALIZACION: any = {
    title: {
        name: 'LEGALIZACIÓN',
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
    rowActions: {
        title: {
            name: 'Acciones',
            class: 'text-center',
            actionClass: 'd-flex flex-row justify-content-around align-middle'
        },
        actions: [
            {
                name: 'editarLegalizacion',
                icon: 'fas fa-edit',
                class: 'p-1',
                title: 'Editar Registro',
            },
            {
                name: 'borrarLegalizacion',
                icon: 'fas fa-trash-alt',
                class: 'p-1',
                title: 'Borrar Registro',
            },
        ],
    },
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    tableActions: [
        {
            name: 'nuevoRegistro',
            icon: 'fas fa-plus py-1 px-2',
            class: 'px-2',
            title: 'Agregar Registro',
        }
    ],
};
export const DATOS_LEGALIZACION: any = [
    {
        secuencia: '1',
        tercero: '900123456',
        numeroCuenta: '7208021100',
        debito: '400000',
        credito: '',
    },
    {
        secuencia: '2',
        tercero: '900123456',
        numeroCuenta: '7208021100',
        debito: '500000',
        credito: '',
    },
    {
        secuencia: '3',
        tercero: '1234567890',
        numeroCuenta: '1420900100',
        debito: '',
        credito: '400000',
    },
    {
        secuencia: '4',
        tercero: '1234567890',
        numeroCuenta: '1420900100',
        debito: '',
        credito: '500000',
    },
];

export const CONFIGURACION_REINTEGRO: any = {
    title: {
        name: 'REINTEGRO',
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
    rowActions: {
        title: {
            name: 'Acciones',
            class: 'text-center',
            actionClass: 'd-flex flex-row justify-content-around align-middle'
        },
        actions: [
            {
                name: 'editarReintegro',
                icon: 'fas fa-edit',
                class: 'p-1',
                title: 'Editar Registro',
            },
            {
                name: 'borrarReintegro',
                icon: 'fas fa-trash-alt',
                class: 'p-1',
                title: 'Borrar Registro',
            },
        ],
    },
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    tableActions: [
        {
            name: 'nuevoRegistro',
            icon: 'fas fa-plus py-1 px-2',
            class: 'px-2',
            title: 'Agregar Cuenta',
        }
    ],
};
export const DATOS_REINTEGRO: any = [
    {
        secuencia: '5',
        tercero: '899999230',
        numeroCuenta: '7208021100',
        debito: '100000',
        credito: '',
    },
    {
        secuencia: '6',
        tercero: '1234567890',
        numeroCuenta: '1420900100',
        debito: '',
        credito: '100000',
    },
];

export const CONFIGURACION_LEGALIZACION_DETALLE: any = {
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
export const CONFIGURACION_REINTEGRO_DETALLE: any = {
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
