export const CONFIGURACION_TABLA_CONSULTA_MATRICULAS: any = {

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

export const DATOS_CONTABILIZACION_2 = [
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
    {
        Secuencia: 5,
        Documento: 1018463814,
        Cuenta: 1110050200,
        NombreCuenta: 'Banco de Occidente',
        Detalle: '20210321 OP 16049 EFECT NO COBRADO MAT HNOR M AMB',
        Debito: 1500000,
    },
    {
        Secuencia: 6,
        Documento: 1018463814,
        Cuenta: 2490320300,
        NombreCuenta: 'Efectivos no Cobrados',
        Detalle: '20210321 OP 16049 EFECT NO COBRADO MAT HNOR M AMB',
        Credito: 1500000,
    },
    {
        Secuencia: 7,
        Documento: 1018463814,
        Cuenta: 1110050200,
        NombreCuenta: 'Banco de Occidente',
        Detalle: '20210321 OP 16049 EFECT NO COBRADO MAT HNOR M AMB',
        Debito: 1500000,
    },
    {
        Secuencia: 8,
        Documento: 1018463814,
        Cuenta: 2490320300,
        NombreCuenta: 'Efectivos no Cobrados',
        Detalle: '20210321 OP 16049 EFECT NO COBRADO MAT HNOR M AMB',
        Credito: 1500000,
    },
    {
        Secuencia: 9,
        Documento: 1018463814,
        Cuenta: 1110050200,
        NombreCuenta: 'Banco de Occidente',
        Detalle: '20210321 OP 16049 EFECT NO COBRADO MAT HNOR M AMB',
        Debito: 1500000,
    },
    {
        Secuencia: 10,
        Documento: 1018463814,
        Cuenta: 2490320300,
        NombreCuenta: 'Efectivos no Cobrados',
        Detalle: '20210321 OP 16049 EFECT NO COBRADO MAT HNOR M AMB',
        Credito: 1500000,
    },
];

export const DATOS_CONSULTA_MATRICULAS = [
    {
        TipoID: 'CC',
        NumeroID: '1018463814',
        Codigo: '20111005011',
        Nombre: 'Jhoan Manuel Murillo Yara',
        ValorOrdinario: 1500000,
        FechaOrdinaria: '2021-04-07T20:04:07Z',
        ValorExtraOrdinario: 1500000,
        FechaExtraOrdinaria: '2021-04-07T20:04:07Z',
        ValorPago: 1500000,
        FechaPago: '2021-04-07T20:04:07Z',
        Pago: true,
    },
    {
        TipoID: 'CC',
        NumeroID: '1018463814',
        Codigo: '20111005011',
        Nombre: 'Jhoan Manuel Murillo Yara',
        ValorOrdinario: 1500000,
        FechaOrdinaria: '2021-04-07T20:04:07Z',
        ValorExtraOrdinario: 1500000,
        FechaExtraOrdinaria: '2021-04-07T20:04:07Z',
        ValorPago: 1500000,
        FechaPago: '2021-04-07T20:04:07Z',
        Pago: true,
    },
    {
        TipoID: 'CC',
        NumeroID: '1018463814',
        Codigo: '20111005011',
        Nombre: 'Jhoan Manuel Murillo Yara',
        ValorOrdinario: 1500000,
        FechaOrdinaria: '2021-04-07T20:04:07Z',
        ValorExtraOrdinario: 1500000,
        FechaExtraOrdinaria: '2021-04-07T20:04:07Z',
        ValorPago: 1500000,
        FechaPago: '2021-04-07T20:04:07Z',
        Pago: true,
    },
    {
        TipoID: 'CC',
        NumeroID: '1018463814',
        Codigo: '20111005011',
        Nombre: 'Jhoan Manuel Murillo Yara',
        ValorOrdinario: 1500000,
        FechaOrdinaria: '2021-04-07T20:04:07Z',
        ValorExtraOrdinario: 1500000,
        FechaExtraOrdinaria: '2021-04-07T20:04:07Z',
        ValorPago: 1500000,
        FechaPago: '2021-04-07T20:04:07Z',
        Pago: true,
    },
    {
        TipoID: 'CC',
        NumeroID: '1018463814',
        Codigo: '20111005011',
        Nombre: 'Jhoan Manuel Murillo Yara',
        ValorOrdinario: 1500000,
        FechaOrdinaria: '2021-04-07T20:04:07Z',
        ValorExtraOrdinario: 1500000,
        FechaExtraOrdinaria: '2021-04-07T20:04:07Z',
        ValorPago: 1500000,
        FechaPago: '2021-04-07T20:04:07Z',
        Pago: true,
    },

];
