export const CONF_INGRESOS: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
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
            key: 'consecutivo',
            title: {
                name: 'Consecutivo',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'centroGestor',
            title: {
                name: 'Centro gestor',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'areaFuncional',
            title: {
                name: 'Área funcional',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'valorTotal',
            title: {
                name: 'Valor total',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'fecha',
            title: {
                name: 'Fecha',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        }
    ],
    rowActions: {
        title: {
            name: 'Detalles',
            class: 'text-center',
            actionClass: 'd-flex flex-row justify-content-around align-middle'
        },
        actions: [
            {
                name: 'verIngreso',
                icon: 'fas fa-eye',
                class: 'p-2',
                title: 'Ver ingreso',
            }
        ],
    },
    tableActions: [
        {
            name: 'nuevo',
            icon: 'fas fa-plus py-1 px-2',
            class: 'px-2',
            title: 'Nuevo ingreso',
        }
    ],
    noData: {
        name: 'No existen elementos asociados',
        class: 'text-center',
    },
    sort: true,
    filter: true,
};
export const CONF_CONSIGNACION: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
        {
            key: 'oficina',
            title: {
                name: 'Oficina',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'ciudad',
            title: {
                name: 'Ciudad',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'fechaRecaudo',
            title: {
                name: 'Fecha recaudo',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'depositante',
            title: {
                name: 'Depositante',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'referencia1',
            title: {
                name: 'Referencia 1 / CC NIT',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'referencia2',
            title: {
                name: 'Referencia 2 / Código del banco',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'valorEfectivo',
            title: {
                name: 'Valor efectivo',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'valorCheque',
            title: {
                name: 'Valor cheque',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'valorDatafono',
            title: {
                name: 'Valor datáfono',
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
                name: 'Valor total',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'otrasReferencias',
            title: {
                name: 'Número otras referencias',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
    ],
    noData: {
        name: 'No existen elementos asociados',
        class: 'text-center',
    },
    sort: true,
    filter: true,
};
export const CONF_RUBROS: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
        {
            key: 'numeroRubro',
            title: {
                name: 'Número de rubro',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'nombreRubro',
            title: {
                name: 'Nombre rubro',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'valor',
            title: {
                name: 'Valor',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        }
    ],
    sort: false,
    filter: false,
};
export const CONF_CONTABILIDAD: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
        {
            key: 'secuencia',
            title: {
                name: 'Secuencia',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'tercero',
            title: {
                name: 'Tercero',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'numeroCuenta',
            title: {
                name: 'N° de la cuenta',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'nombreCuenta',
            title: {
                name: 'Nombre de la cuenta',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'detalle',
            title: {
                name: 'Detalle',
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
        }
    ],
    noData: {
        name: 'No existen elementos asociados',
        class: 'text-center',
    },
    sort: true,
    filter: true,
};
export const CONF_CODIGO_BARRAS: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
        {
            key: 'codigoOficina',
            title: {
                name: 'Cód. oficina',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'oficina',
            title: {
                name: 'Oficina',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'ciudad',
            title: {
                name: 'Ciudad',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'fechaRecaudo',
            title: {
                name: 'Fecha recaudo',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'documento',
            title: {
                name: 'Documento',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'tran',
            title: {
                name: 'Tran',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'valorEfectivo',
            title: {
                name: 'Valor efectivo',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'valorCheque',
            title: {
                name: 'Valor cheque',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'valorDatafono',
            title: {
                name: 'Valor datáfono',
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
                name: 'Valor total',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'codigoTrans',
            title: {
                name: 'Código trans',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'referencia1',
            title: {
                name: 'Referencia1',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
    ],
    noData: {
        name: 'No existen elementos asociados',
        class: 'text-center',
    },
    sort: true,
    filter: true,
};
export const CONF_APORTES: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
        {
            key: 'fechaConsignacion',
            title: {
                name: 'Fecha consignación',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'entidadFinanciera',
            title: {
                name: 'Entidad financiera',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'numeroCuenta',
            title: {
                name: 'N° de cuenta',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'tipoCuenta',
            title: {
                name: 'Tipo de cuenta',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
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
            key: 'valor',
            title: {
                name: 'Valor',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'tipoDocumento',
            title: {
                name: 'Tipo de documento',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'numeroDocumento',
            title: {
                name: 'N° de documento',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'fechaDocumento',
            title: {
                name: 'Fecha del documento',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        }
    ],
    sort: true,
    filter: true,
};

export const OPCIONES_AREA_FUNCIONAL = [
    {
        Id: 1,
        Nombre: 'Rector',
        label: '01 - Rector',
    },
    {
        Id: 2,
        Nombre: 'Convenio',
        label: '02 - Convenio',
    }

];

export const TIPOS_INGRESOS: any = [
    {
        Nombre: 'icetex',
        label: 'Icetex'
    },
    {
        Nombre: 'barras',
        label: 'Codigo de barras'
    },
    {
        Nombre: 'pse',
        label: 'PSE'
    },
    {
        Nombre: 'ach',
        label: 'ACH'
    },
    {
        Nombre: 'recaudoLinea',
        label: 'Recaudo en Linea'
    },
    {
        Nombre: 'aportesNacion',
        label: 'Aportes de la Nación'
    },
    {
        Nombre: 'aportesDistrito',
        label: 'Aportes del Distrito'
    },
    {
        Nombre: 'otrasEntidades',
        label: 'Aportes de otras entidades'
    }
]
 /******  Datos dummy ******************/
export const DATOS_INGRESOS: any = [
    {
        vigencia: 2020,
        consecutivo: 32,
        centroGestor: 230,
        areaFuncional: 1,
        valorTotal: 8127361,
        fecha: '2020/12/01',
    },
    {
        vigencia: 2021,
        consecutivo: 54,
        centroGestor: 230,
        areaFuncional: 1,
        valorTotal: 6523421,
        fecha: '2021/01/01',
    }
];
export const DATOS_ICETEX: any = [
    {
        oficina: 519,
        ciudad: 'Bogotá',
        fechaRecaudo: '2020/06/01',
        depositante: 'ICETEX',
        referencia1: 8127361,
        referencia2: 12391283,
        valorEfectivo: 0,
        valorCheque: 2345678,
        valorDatafono: 0,
        valorTotal: 2345678,
        otrasReferencias: 9672,
    },
    {
        oficina: 519,
        ciudad: 'Bogotá',
        fechaRecaudo: '2020/06/02',
        depositante: 'ICETEX',
        referencia1: 8723481,
        referencia2: 10893298,
        valorEfectivo: 0,
        valorCheque: 3467894,
        valorDatafono: 0,
        valorTotal: 3467894,
        otrasReferencias: 9672,
    }
];
export const DATOS_PSE: any = [
    {
        oficina: '',
        ciudad: 'Bogotá',
        fechaRecaudo: '2020/05/02',
        depositante: 'Andrea Arias',
        referencia1: 823422,
        referencia2: 1857723,
        valorEfectivo: 0,
        valorCheque: 0,
        valorDatafono: 3467894,
        valorTotal: 3467894,
        otrasReferencias: 9672,
    },
    {
        oficina: '',
        ciudad: 'Bogotá',
        fechaRecaudo: '2020/06/10',
        depositante: 'Fernando Duran',
        referencia1: 8723481,
        referencia2: 10893298,
        valorEfectivo: 0,
        valorCheque: 0,
        valorDatafono: 7735983,
        valorTotal: 7735983,
        otrasReferencias: 9672,
    }
];
export const DATOS_ACH: any = [
    {
        oficina: '',
        ciudad: 'Bogotá',
        fechaRecaudo: '2020/06/05',
        depositante: 'Banco de Bogotá',
        referencia1: 8943052,
        referencia2: 1823405,
        valorEfectivo: 0,
        valorCheque: 0,
        valorDatafono: 1238890,
        valorTotal: 0,
        otrasReferencias: 9672,
    },
    {
        oficina: '',
        ciudad: 'Bogotá',
        fechaRecaudo: '2020/06/12',
        depositante: 'BBVA',
        referencia1: 792347,
        referencia2: 1023948,
        valorEfectivo: 0,
        valorCheque: 0,
        valorDatafono: 5938048,
        valorTotal: 5938048,
        otrasReferencias: 9672,
    }
];
export const DATOS_RECAUDO: any = [
    {
        oficina: 519,
        ciudad: 'Bogotá',
        fechaRecaudo: '2020/06/05',
        depositante: 'Richard Buitrago',
        referencia1: 10327409,
        referencia2: 10546478,
        valorEfectivo: 14000,
        valorCheque: 0,
        valorDatafono: 0,
        valorTotal: 14000,
        otrasReferencias: 675,
    },
    {
        oficina: 519,
        ciudad: 'Bogotá',
        fechaRecaudo: '2020/06/07',
        depositante: 'Lina Luis',
        referencia1: 2180123,
        referencia2: 2384081,
        valorEfectivo: 70000,
        valorCheque: 0,
        valorDatafono: 0,
        valorTotal: 70000,
        otrasReferencias: 98,
    }
];
export const DATOS_APORTES_NACION: any = [
    {
        fechaConsignacion: '2019/08/01',
        entidadFinanciera: 'Banco de occidente',
        numeroCuenta: 230141209,
        tipoCuenta: 'Ahorros',
        vigencia: 2018,
        valor: 28345779,
        tipoDocumento: 'Recibo de caja',
        numeroDocumento: 'Res No. 007',
        fechaDocumento: '2019/07/26',
    }
];
export const DATOS_APORTES_DISTRITO: any = [
    {
        fechaConsignacion: '2019/08/03',
        entidadFinanciera: 'BBVA',
        numeroCuenta: 3294021,
        tipoCuenta: 'Corriente',
        vigencia: 2019,
        valor: 758348421,
        tipoDocumento: 'Recibo de caja',
        numeroDocumento: 'Res No. 012',
        fechaDocumento: '2019/07/24',
    }
];
export const DATOS_CODIGO_BARRAS: any = [
    {
        codigoBanco: 23,
        oficina: 248,
        ciudad: 'Bogotá',
        fechaRecaudo: '2020/06/03',
        tran: 'CB',
        valorEfectivo: 0,
        valorCheque: 576681,
        valorDatafono: 0,
        valorTotal: 576681,
        codigoTrans: 8672,
        referencia1: 2019357403,
    }
];
export const DATOS_OTRAS_ENTIDADES: any = [
    {
        oficina: '',
        ciudad: 'Bogotá',
        fechaRecaudo: '2020/06/07',
        depositante: '',
        referencia1: 423487,
        referencia2: 892347,
        valorEfectivo: 0,
        valorCheque: 0,
        valorDatafono: 5800234,
        valorTotal: 5800234,
        otrasReferencias: 324,
    }
];
export const DATOS_CONTABILIDAD: any = [
    {
        secuencia: 1,
        tercero: 12631623,
        numeroCuenta: 17283612,
        nombreCuenta: 'Banco',
        detalle: 'Ingresos',
        debito: 0,
        credito: 586681
    },
    {
        secuencia: 2,
        tercero: 84568904,
        numeroCuenta: 23623,
        nombreCuenta: 'Banco occidente',
        detalle: 'Ingresos',
        debito: 586681,
        credito: 0
    }
];
