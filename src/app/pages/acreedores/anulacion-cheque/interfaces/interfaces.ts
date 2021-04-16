export const CONFIGURACION_TABLA_ANULACION_CHEQUES: any = {

    showColumnTitle: true,
    dataConfig: [
        {
            key: 'Vigencia',
            title: {
                name: 'Vigencia',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'CentroGestor',
            title: {
                name: 'Centro Gestor',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'AreaFuncional',
            title: {
                name: 'Area Funcional',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'TipoGiro',
            title: {
                name: 'Tipo de Giro',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'NumeroGiro',
            title: {
                name: 'Numero de Giro',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'OPRelacionado',
            title: {
                name: 'Area Funcional',
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
                title: 'Editar',
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

export const DATOS_ANULACION_CHEQUE = [
    {
        Vigencia: '2020',
        CentroGestor: '230',
        AreaFuncional: '01',
        TipoGiro: 'Pago Proveedores',
        NumeroGiro: '20200607164945',
        OPRelacionado: '20200607164945',
    },
    {
        Vigencia: '2020',
        CentroGestor: '230',
        AreaFuncional: '01',
        TipoGiro: 'Pago Proveedores',
        NumeroGiro: '20200607164945',
        OPRelacionado: '20200607164945',
    },
    {
        Vigencia: '2020',
        CentroGestor: '230',
        AreaFuncional: '01',
        TipoGiro: 'Pago Proveedores',
        NumeroGiro: '20200607164945',
        OPRelacionado: '20200607164945',
    },
    {
        Vigencia: '2020',
        CentroGestor: '230',
        AreaFuncional: '01',
        TipoGiro: 'Pago Proveedores',
        NumeroGiro: '20200607164945',
        OPRelacionado: '20200607164945',
    },
];

export const CONFIGURACION_TABLA_DETALLE_GIRO: any = {

    showColumnTitle: true,
    dataConfig: [
        {
            key: 'Beneficiario',
            title: {
                name: 'Beneficiario',
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
                        class: 'text-center align-middle px-0',
                    }
                },
                {
                    key: 'NumeroID',
                    title: {
                        name: 'Numero ID',
                        class: 'text-center px-5',
                    },
                    pipe: {

                        class: 'text-center align-middle px-0',
                    }
                },
                {
                    key: 'Nombre',
                    title: {
                        name: 'Nombre',
                        class: 'text-center px-5',
                    },
                    pipe: {

                        class: 'text-center align-middle px-0',
                    }
                },
            ]
        },
        {
            key: 'FechaGiro',
            title: {
                name: 'Fecha de Giro',
                class: 'text-center text-nowrap',
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
            key: 'NumeroCheque',
            title: {
                name: 'Numero de Cheque',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'Valor',
            title: {
                name: 'Valor',
                class: 'text-center',
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
            key: 'Estado',
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
            name: 'Opciones',
            class: 'text-center',
            actionClass: 'd-flex flex-row justify-content-around align-middle'
        },
        actions: [
            {
                name: 'editar',
                icon: 'fas fa-list',
                class: 'p-2',
                title: 'Editar',
            },
        ],
    },
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    sort: true,
    filter: false,
};

export const CONFIGURACION_TABLA_DETALLE_GIRO_2: any = {

    showColumnTitle: true,
    dataConfig: [
        {
            key: 'Beneficiario',
            title: {
                name: 'Beneficiario',
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
                        class: 'text-center align-middle px-0',
                    }
                },
                {
                    key: 'NumeroID',
                    title: {
                        name: 'Numero ID',
                        class: 'text-center px-5',
                    },
                    pipe: {

                        class: 'text-center align-middle px-0',
                    }
                },
                {
                    key: 'Nombre',
                    title: {
                        name: 'Nombre',
                        class: 'text-center px-5',
                    },
                    pipe: {

                        class: 'text-center align-middle px-0',
                    }
                },
            ]
        },
        {
            key: 'FechaGiro',
            title: {
                name: 'Fecha de Giro',
                class: 'text-center text-nowrap',
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
            key: 'NumeroCheque',
            title: {
                name: 'Numero de Cheque',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'Valor',
            title: {
                name: 'Valor',
                class: 'text-center',
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
            key: 'Estado',
            title: {
                name: 'Estado',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
    ],
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    sort: true,
    filter: false,
};


export const DATOS_DETALLE_GIRO = [
    {
        Beneficiario: {
            TipoID: 'CC',
            NumeroID: '1018463814',
            Nombre: 'Jhoan Manuel Murillo',
        },
        FechaGiro: '2021-04-07T20:04:07Z',
        NumeroCheque: '20200607164945',
        Valor: 123456789,
        Estado: 'Girado',
    },
    {
        Beneficiario: {
            TipoID: 'CC',
            NumeroID: '1018463814',
            Nombre: 'Jhoan Manuel Murillo',
        },
        FechaGiro: '2021-04-07T20:04:07Z',
        NumeroCheque: '20200607164945',
        Valor: 123456789,
        Estado: 'Girado',
    },
    {
        Beneficiario: {
            TipoID: 'CC',
            NumeroID: '1018463814',
            Nombre: 'Jhoan Manuel Murillo',
        },
        FechaGiro: '2021-04-07T20:04:07Z',
        NumeroCheque: '20200607164945',
        Valor: 123456789,
        Estado: 'Anulado',
    }
];

export const DETALLE_GIRO = {
    TipoDocumento: 'Orden Pago Proveedores',
    Consecutivo: '123',
    TipoGiro: 'Cheque',
    OrdenPago: '19045',
};

export const DETALLE_CHEQUE = {
    Beneficiario: {
        TipoID: 'CC',
        NumeroID: '1018463814',
        Nombre: 'Jhoan Manuel Murillo',
    },
    FechaGiro: '2021-04-07T20:04:07Z',
    NumeroCheque: '20200607164945',
    Valor: 123456789,
    TipoDocumento: 'Orden Pago Proveedores',
    Consecutivo: '123',
    TipoGiro: 'Cheque',
    OrdenPago: '19045',
};

export const CONFIGURACION_TABLA_CONTABILIZACION: any = {

    showColumnTitle: true,
    dataConfig: [
        {
            key: 'Secuencia',
            title: {
                name: 'Secuencia',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'Documento',
            title: {
                name: 'Documento',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'Cuenta',
            title: {
                name: 'Cuenta',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'NombreCuenta',
            title: {
                name: 'Nombre Cuenta',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center text-nowrap',
            }
        },
        {
            key: 'Detalle',
            title: {
                name: 'Detalle',
                class: 'text-center text-nowrap',
            },
            pipe: {
                class: 'text-center text-nowrap',
            }
        },
        {
            key: 'Debito',
            title: {
                name: 'Debito',
                class: 'text-center',
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
            key: 'Credito',
            title: {
                name: 'Credito',
                class: 'text-center',
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
        }
    ],
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    sort: true,
    filter: false,
};

export const DATOS_CONTABILIZACION = [
    {
        Secuencia: 1,
        Documento: 1018463814,
        Cuenta: 1110050200,
        NombreCuenta: 'Banco de Occidente',
        Detalle: '20210321 OP 16049 EFECT NO COBRADO MAT HNOR M AMB',
        Debito: 828116,
    },
    {
        Secuencia: 2,
        Documento: 1018463814,
        Cuenta: 2490320300,
        NombreCuenta: 'Efectivos no Cobrados',
        Detalle: '20210321 OP 16049 EFECT NO COBRADO MAT HNOR M AMB',
        Credito: 828116,
    }
];
