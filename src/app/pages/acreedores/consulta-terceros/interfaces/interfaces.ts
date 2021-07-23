export const CONFIGURACION_TABLA_CONSULTA_ACREEDORES: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'TipoID',
            title: {
                name: 'Tipo ID',
                class: 'text-center text-nowrap',
            },
            pipe: {
                class: 'text-center text-nowrap',
            }
        },
        {
            key: 'NumeroID',
            title: {
                name: 'Numero ID',
                class: 'text-center text-nowrap',
            },
            pipe: {
                class: 'text-center text-nowrap',
            }
        },
        {
            key: 'Nombre',
            title: {
                name: 'Nombre',
                class: 'text-center text-nowrap',
            },
            pipe: {
                class: 'text-center text-nowrap',
            }
        },
        {
            key: 'OPRelacionado',
            title: {
                name: 'N° Orden de Pago',
                class: 'text-center text-nowrap',
            },
            pipe: {
                class: 'text-center text-nowrap',
            }
        },
        {
            key: 'GiroAsociado',
            title: {
                name: 'N° Giro',
                class: 'text-center text-nowrap',
            },
            pipe: {
                class: 'text-center text-nowrap',
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
                title: 'Editar Consulta de Acreedores',
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

export const DATOS_CONSULTA_ACREEDORES = [
    {
        OPRelacionado: '12345',
        TipoID: 'CC',
        NumeroID: '1018463814',
        Nombre: 'Jhoan Manuel Murillo',
        GiroAsociado: '202011234564'
    },
    {
        OPRelacionado: '12345',
        TipoID: 'CC',
        NumeroID: '1018463814',
        Nombre: 'Jhoan Manuel Murillo',
        GiroAsociado: '202011234564'
    },
    {
        OPRelacionado: '12345',
        TipoID: 'CC',
        NumeroID: '1018463814',
        Nombre: 'Jhoan Manuel Murillo',
        GiroAsociado: '202011234564'
    },
    {
        OPRelacionado: '12345',
        TipoID: 'CC',
        NumeroID: '1018463814',
        Nombre: 'Jhoan Manuel Murillo',
        GiroAsociado: '202011234564'
    },
    {
        OPRelacionado: '12345',
        TipoID: 'CC',
        NumeroID: '1018463814',
        Nombre: 'Jhoan Manuel Murillo',
        GiroAsociado: '202011234564'
    },
    {
        OPRelacionado: '12345',
        TipoID: 'CC',
        NumeroID: '1018463814',
        Nombre: 'Jhoan Manuel Murillo',
        GiroAsociado: '202011234564'
    },
];

export const CONFIGURACION_TABLA_IMPUTACION: any = {
    showColumnTitle: true,
    title: {
        name: 'Imputacion Presupuestal',
        class: 'text-center text-nowrap',
    },
    dataConfig: [
        {
            key: 'Disponibilidad',
            title: {
                name: 'Disponibilidad',
                class: 'text-center text-nowrap',
            },
            pipe: {
                class: 'text-center text-nowrap',
            }
        },
        {
            key: 'Codigo',
            title: {
                name: 'Codigo',
                class: 'text-center text-nowrap',
            },
            pipe: {
                class: 'text-center text-nowrap',
            }
        },
        {
            key: 'Registro',
            title: {
                name: 'Registro',
                class: 'text-center text-nowrap',
            },
            pipe: {
                class: 'text-center text-nowrap',
            }
        },
        {
            key: 'Nombre',
            title: {
                name: 'Nombre',
                class: 'text-center text-nowrap',
            },
            pipe: {
                class: 'text-center text-nowrap',
            }
        },
        {
            key: 'ValorAplicacion',
            title: {
                name: 'Valor Aplicacion',
                class: 'text-center text-nowrap',
            },
            pipe: {
                type: 'currency',
                config: [
                    '$',
                    'symbol',
                    '1.2-2',
                    'en-US'
                ],
                class: 'text-center align-middle px-0',
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

export const CONFIGURACION_TABLA_MOVIMIENTO_CONTABLE: any = {
    showColumnTitle: true,
    title: {
        name: 'Movimiento Contable',
        class: 'text-center text-nowrap',
    },
    dataConfig: [
        {
            key: 'NombreRetencion',
            title: {
                name: 'Nombre Retencion',
                class: 'text-center text-nowrap',
            },
            pipe: {
                class: 'text-center text-nowrap',
            }
        },
        {
            key: 'Descuento',
            title: {
                name: 'Descuento',
                class: 'text-center text-nowrap',
            },
            pipe: {
                type: 'currency',
                config: [
                    '$',
                    'symbol',
                    '1.2-2',
                    'en-US'
                ],
                class: 'text-center align-middle px-0',
            }
        },
        {
            key: 'BaseRetencion',
            title: {
                name: 'Base Retencion',
                class: 'text-center text-nowrap',
            },
            pipe: {
                type: 'currency',
                config: [
                    '$',
                    'symbol',
                    '1.2-2',
                    'en-US'
                ],
                class: 'text-center align-middle px-0',
            }
        },
        {
            key: 'CodigoContable',
            title: {
                name: 'Codigo Contable',
                class: 'text-center text-nowrap',
            },
            pipe: {
                class: 'text-center text-nowrap',
            }
        },
        {
            key: 'Valor',
            title: {
                name: 'Valor',
                class: 'text-center text-nowrap',
            },
            pipe: {
                type: 'currency',
                config: [
                    '$',
                    'symbol',
                    '1.2-2',
                    'en-US'
                ],
                class: 'text-center align-middle px-0',
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
export const DATOS_IMPUTACION = [
    {
        Disponibilidad: '1111',
        Codigo: ' 111-222-333',
        Registro: '12345',
        Nombre: 'Eventos Academicos',
        ValorAplicacion: 3000000,
    }
];

export const DATOS_MOVIMIENTO_CONTABLE = [
    {
        NombreRetencion: 'Valor Bruto',
        Descuento: 0,
        BaseRetencion: 0,
        CodigoContable: '111-222-333',
        Valor: 3000000,
    }
];

export const DATOS_ORDEN_PAGO = {
    OPRelacionado: '12345',
    TipoID: 'CC',
    NumeroID: '1018463814',
    Nombre: 'Jhoan Manuel Murillo',
    GiroAsociado: '202011234564',
    NumeroCompromiso: '0000000',
    Compromiso: '',
    Interventor: ' 123456734',
    NombreInterventor: 'Pepito Perez',
    ActaRecibido: '123345',
    Entrada: '20201235343',
    Detalle: 'Detalle de la orden de pago asociada',
    TipoOP: 'Orden Pago Proveedores',
    ValorNeto: 3000000,
    CodigoContable: '111-222-333',
};
