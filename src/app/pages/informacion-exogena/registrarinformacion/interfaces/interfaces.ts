export const CONFIGURACION_TABLA_INFOEXOGENA: any = {
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
                class: 'text-justify',
            }
        },
        {
            key: 'descripcion',
            title: {
                name: 'Descripción',
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
                name: 'editarRegistro',
                icon: 'fas fa-check-double',
                class: 'p-1',
                title: 'Editar Registro',
            },
            {
                name: 'consultaDetalle',
                icon: 'fas fa-eye',
                class: 'p-1',
                title: 'Detalle del Registro',
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
export const DATOS_TABLA_INFOEXOGENA: any = [
    {
        vigencia: '2020',
        estado: 'Borrador',
        descripcion: 'Información Exógena 2020',
        areaFuncional: '01',
        fechaInicial: '2020-05-01T23:00:00Z',
        fechaFinal: '2020-06-30T23:00:00Z',
    },
    {
        vigencia: '2019',
        estado: 'Definitivo',
        descripcion: 'Información Exogena 2019',
        areaFuncional: '01',
        fechaInicial: '2019-10-01T23:00:00Z',
        fechaFinal: '2019-12-30T23:00:00Z',
    },
];

export const CONFIGURACION_CONSULTAS: any = {
    checkElement: {
        title: 'seleccion',
        pipe: {
            class: 'text-center',
        }
    },
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'tipoConsulta',
            title: {
                name: 'Tipo de Consulta',
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
                title: 'Detalle del Registro',
            },
            {
                name: 'descargar',
                icon: 'fas fa-file-download',
                class: 'p-1',
                title: 'Descargar',
            },
            {
                name: 'borrarConsulta',
                icon: 'fas fa-trash-alt',
                class: 'p-1',
                title: 'Borrar Consulta',
            },
        ],
    },
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
};

export const DATOS_CONSULTAS: any = [
    {
        tipoConsulta: 'Ordenes de Pago',
        fechaInicial: '2019-10-01T23:00:00Z',
        fechaFinal: '2019-12-30T23:00:00Z',
    },
    {
        tipoConsulta: 'Ordenes de Pago',
        fechaInicial: '2019-10-01T23:00:00Z',
        fechaFinal: '2019-12-30T23:00:00Z',
    },
];

export const CONFIGURACION_CONSULTATERCEROS: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: '',
            title: {
                name: '',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: '',
            title: {
                name: '',
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
            key: '',
            title: {
                name: '',
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
            key: '',
            title: {
                name: '',
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
            key: '',
            title: {
                name: '',
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
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
};

export const DATOS_CONSULTATERCEROS: any = [
    {

    },

];
