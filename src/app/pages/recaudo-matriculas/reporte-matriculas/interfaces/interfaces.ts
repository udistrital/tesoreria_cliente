export const CONFIGURACION_TABLA_REPORTE_MATRICULAS: any = {

    showColumnTitle: true,
    dataConfig: [
        {
            key: 'Consecutivo',
            title: {
                name: 'Consecutivo',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'Semestre',
            title: {
                name: 'Semestre',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'FechaCreacion',
            title: {
                name: 'Fecha Creacion',
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
            key: 'Decano',
            title: {
                name: 'Decano',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'Coordinador',
            title: {
                name: 'Coordinador de Proyecto',
                class: 'text-center',
            },
            pipe: {
                class: '',
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
                name: 'editar',
                icon: 'fas fa-list',
                class: 'p-2',
                title: 'Editar Anulacion Orden Pago',
            },
        ],
    },
    noData: {
        name: 'No Existen Datos Asociados',
        class: 'text-center',
    },
    sort: true,
    filter: true,
};

export const DATOS_REPORTE_MATRICULAS = [
    {
        Consecutivo: 1,
        Semestre: '2020-01',
        FechaCreacion: '2021-04-07T20:04:07Z',
        Decano: 'Carlos Montenegro',
        Coordinador: 'Beatriz Jaramillo'
    },
    {
        Consecutivo: 1,
        Semestre: '2020-01',
        FechaCreacion: '2021-04-07T20:04:07Z',
        Decano: 'Carlos Montenegro',
        Coordinador: 'Beatriz Jaramillo',
    },
];

export const CONFIGURACION_TABLA_REPORTE_DETALLE = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'Estudiante',
            title: {
                name: 'Alumno Responsable',
                class: 'text-center px-5',
            },
            pipe: {
                class: '',
            },
            objectKeys: [
                {
                    key: 'TipoID',
                    title: {
                        name: 'Tipo ID',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        class: '',
                    }
                },
                {
                    key: 'NumeroID',
                    title: {
                        name: 'Numero ID',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        class: '',
                    }
                },
                {
                    key: 'Codigo',
                    title: {
                        name: 'Codigo',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        class: '',
                    }
                },
                {
                    key: 'Nombre',
                    title: {
                        name: 'Nombre',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        class: '',
                    }
                },
                {
                    key: 'ValorTotal',
                    title: {
                        name: 'Valor Total a Diferir',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
            ]
        },
        {
            key: 'Cuotas',
            title: {
                name: 'Cuotas',
                class: 'text-center px-5',
            },
            pipe: {
                class: '',
            },
            compound: [
                {
                    key: 'ValorCuota',
                    title: {
                        name: 'Valor',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'FechaLimite',
                    title: {
                        name: 'Fecha Limite',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        pipe: {
                            type: 'date',
                            config: [
                                'shortDate'
                            ],
                            class: 'text-center',
                        }
                    }
                },
            ]
        },
    ],
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    sort: true,
    filter: false,
};

export const DATOS_REPORTE_DETALLE = [
    {
        Estudiante: {
            TipoID: 'CC',
            NumeroID: '1018463814',
            Codigo: '20111005011',
            Nombre: 'Jhoan Manuel Murillo',
            ValorTotal: 3000000
        },
        Cuotas: [
            {
                ValorCuota: 1000000,
                FechaLimite: '2021-04-07T20:04:07Z',
            },
            {
                ValorCuota: 1000000,
                FechaLimite: '2021-04-07T20:04:07Z',
            },
            {
                ValorCuota: 1000000,
                FechaLimite: '2021-04-07T20:04:07Z',
            },
        ]
    },
    {
        Estudiante: {
            TipoID: 'CC',
            NumeroID: '1018463814',
            Codigo: '20111005011',
            Nombre: 'Jhoan Manuel Murillo',
            ValorTotal: 3000000
        },
        Cuotas: [
            {
                ValorCuota: 1000000,
                FechaLimite: '2021-04-07T20:04:07Z',
            },
            {
                ValorCuota: 1000000,
                FechaLimite: '2021-04-07T20:04:07Z',
            },
            {
                ValorCuota: 1000000,
                FechaLimite: '2021-04-07T20:04:07Z',
            },
        ]
    },
    {
        Estudiante: {
            TipoID: 'CC',
            NumeroID: '1018463814',
            Codigo: '20111005011',
            Nombre: 'Jhoan Manuel Murillo',
            ValorTotal: 3000000
        },
        Cuotas: [
            {
                ValorCuota: 1000000,
                FechaLimite: '2021-04-07T20:04:07Z',
            },
            {
                ValorCuota: 1000000,
                FechaLimite: '2021-04-07T20:04:07Z',
            },
            {
                ValorCuota: 1000000,
                FechaLimite: '2021-04-07T20:04:07Z',
            },
        ]
    }
]