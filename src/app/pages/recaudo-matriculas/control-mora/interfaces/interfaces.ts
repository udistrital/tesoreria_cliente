export const CONFIGURACION_TABLA_CONTROL_MORA = {
    showColumnTitle: true,
    dataConfig: [

        {
            key: 'TipoID',
            title: {
                name: 'Tipo ID',
                class: 'text-center align-middle px-5',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'NumeroID',
            title: {
                name: 'Numero ID',
                class: 'text-center align-middle px-5',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'Codigo',
            title: {
                name: 'Codigo',
                class: 'text-center align-middle px-5',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'Nombre',
            title: {
                name: 'Nombre',
                class: 'text-center align-middle px-5',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'Estado',
            title: {
                name: 'Valor Total a Diferir',
                class: 'text-center px-5',
            },
            pipe: {
                class: 'text-right align-middle ',
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
                name: 'Editar',
                icon: 'fas fa-pencil-alt',
                class: '',
                title: 'Editar 3',
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

export const DATOS_CONTROL_MORA = [
    {
        TipoID: 'CC',
        NumeroID: '1018463814',
        Codigo: '20111005011',
        Nombre: 'Jhoan Manuel Murillo',
        Estado: 'ESTUDIANTE MATRICULADO'
    },
    {
        TipoID: 'CC',
        NumeroID: '1018463814',
        Codigo: '20111005011',
        Nombre: 'Jhoan Manuel Murillo',
        Estado: 'ESTUDIANTE MATRICULADO'
    },
    {
        TipoID: 'CC',
        NumeroID: '1018463814',
        Codigo: '20111005011',
        Nombre: 'Jhoan Manuel Murillo',
        Estado: 'ESTUDIANTE MATRICULADO'
    },
    {
        TipoID: 'CC',
        NumeroID: '1018463814',
        Codigo: '20111005011',
        Nombre: 'Jhoan Manuel Murillo',
        Estado: 'ESTUDIANTE MATRICULADO'
    },
    {
        TipoID: 'CC',
        NumeroID: '1018463814',
        Codigo: '20111005011',
        Nombre: 'Jhoan Manuel Murillo',
        Estado: 'ESTUDIANTE MATRICULADO'
    },
];

export const DATOS_CONTABILIZACION_3 = [
    {
        Secuencia: 1,
        Documento: 1018463814,
        Cuenta: 1110050200,
        NombreCuenta: 'Banco de Occidente',
        Detalle: '20210321 OP 16049 EFECT NO COBRADO MAT HNOR M AMB',
        Debito: 1500000,
    },
    {
        Secuencia: 2,
        Documento: 1018463814,
        Cuenta: 2490320300,
        NombreCuenta: 'Efectivos no Cobrados',
        Detalle: '20210321 OP 16049 EFECT NO COBRADO MAT HNOR M AMB',
        Credito: 1500000,
    },
    {
        Secuencia: 3,
        Documento: 1018463814,
        Cuenta: 1110050200,
        NombreCuenta: 'Banco de Occidente',
        Detalle: '20210321 OP 16049 EFECT NO COBRADO MAT HNOR M AMB',
        Debito: 1500000,
    },
    {
        Secuencia: 4,
        Documento: 1018463814,
        Cuenta: 2490320300,
        NombreCuenta: 'Efectivos no Cobrados',
        Detalle: '20210321 OP 16049 EFECT NO COBRADO MAT HNOR M AMB',
        Credito: 1500000,
    },
];

export const CONFIGURACION_TABLA_CONSULTA_MATRICULAS_2: any = {

    showColumnTitle: true,
    dataConfig: [
        {
            key: 'TipoID',
            title: {
                name: 'Tipo ID',
                class: 'text-center align-middle',
            },
            pipe: {
                class: 'text-center align-middle',
            }
        },
        {
            key: 'NumeroID',
            title: {
                name: 'Numero ID',
                class: 'text-center align-middle',
            },
            pipe: {
                class: 'text-center text-nowrap align-middle',
            }
        },
        {
            key: 'Codigo',
            title: {
                name: 'Codigo',
                class: 'text-center align-middle',
            },
            pipe: {
                class: 'text-center text-nowrap align-middle',
            }
        },
        {
            key: 'Nombre',
            title: {
                name: 'Nombre',
                class: 'text-center text-nowrap align-middle',
            },
            pipe: {
                class: 'text-center text-nowrap align-middle',
            }
        },
        {
            key: 'FechaOrdinaria',
            title: {
                name: 'Fecha Ordinaria',
                class: 'text-center align-middle',
            },
            pipe: {
                type: 'date',
                config: [
                    'shortDate'
                ],
                class: 'text-center align-middle',
            }
        },
        {
            key: 'ValorOrdinario',
            title: {
                name: 'Valor Ordinario',
                class: 'text-center align-middle text-nowrap px-5',
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
            key: 'FechaExtraOrdinaria',
            title: {
                name: 'Fecha Ordinaria',
                class: 'text-center align-middle',
            },
            pipe: {
                type: 'date',
                config: [
                    'shortDate'
                ],
                class: 'text-center align-middle',
            }
        },
        {
            key: 'ValorExtraOrdinario',
            title: {
                name: 'Valor Ordinario',
                class: 'text-center align-middle text-nowrap px-5',
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
            key: 'Pago',
            title: {
                name: 'Pago',
                class: 'text-center align-middle',
            },
            pipe: {
                isBoolean: true,
                class: 'text-center align-middle',
            }
        },
        {
            key: 'FechaPago',
            title: {
                name: 'Fecha Pago',
                class: 'text-center align-middle',
            },
            pipe: {
                type: 'date',
                config: [
                    'shortDate'
                ],
                class: 'text-center align-middle',
            }
        },
        {
            key: 'ValorPago',
            title: {
                name: 'Valor Pago',
                class: 'text-center align-middle text-nowrap px-5',
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

    ],

    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center align-middle',
    },
    sort: true,
    filter: false,
};
