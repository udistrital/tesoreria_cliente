export const CONFIGURACION_GIROPROVEEDORES: any = {
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
            key: 'tipoGiro',
            title: {
                name: 'Tipo de giro',
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
            key: 'numeroGiro',
            title: {
                name: 'N° giro',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'numeroCuenta',
            title: {
                name: 'N° de OP/RA',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        }
    ],
    rowActions: {
        title: {
            name: 'Acciones',
            class: 'text-center',
            actionClass: 'd-flex flex-row justify-content-around align-middle'
        },
        actions: [
            {
                name: 'ver',
                icon: 'fas fa-eye',
                class: 'p-2',
                title: 'Ver Solicitud',
            },
        ],
    },
    tableActions: [
        {
            name: 'nuevo',
            icon: 'fas fa-plus py-1 px-2',
            class: 'px-2',
            title: 'Crear nuevo giro a proveedores',
        }
    ],
    noData: {
        name: 'No existen elementos asociados',
        class: 'text-center',
    },
    sort: true,
    filter: true,
};
export const DATOS_GIROPROVEEDORES: any = [
    {
        vigencia: 2020,
        tipoGiro: 'Relación de autorización de nómina',
        centroGestor: 230,
        areaFuncional: '01',
        numeroGiro: 123234,
        numeroCuenta: 123908,
    },
    {
        vigencia: 2019,
        tipoGiro: 'Pago proveedores',
        centroGestor: 230,
        areaFuncional: '01',
        numeroGiro: 432890,
        numeroCuenta: 89240,
     },
];
export const CONF_ORDENPAGO: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
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
            key: 'tipoOrdenPago',
            title: {
                name: 'Tipo orden de pago',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'formaPago',
            title: {
                name: 'Forma de pago',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
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
            key: 'numeroId',
            title: {
                name: 'N° ID',
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
                name: 'ver',
                icon: 'fas fa-eye',
                class: 'p-2',
                title: 'Ver Solicitud',
            }
        ],
    },
    noData: {
        name: 'No existen elementos asociados',
        class: 'text-center',
    },
    sort: true,
    filter: true,
};
export const CONF_MINORDENPAGO: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
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
            key: 'tipoOrdenPago',
            title: {
                name: 'Tipo orden de pago',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'formaPago',
            title: {
                name: 'Forma de pago',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
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
            key: 'numeroId',
            title: {
                name: 'N° ID',
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
                name: 'ver',
                icon: 'fas fa-eye',
                class: 'p-2',
                title: 'Ver Solicitud',
            },
            {
                name: 'eliminar',
                icon:  'fas fa-minus',
                class: 'p-2',
                title: 'Eliminar'
            }
        ],
    },
    noData: {
        name: 'No existen elementos asociados',
        class: 'text-center',
    },
    sort: true,
    filter: true,
};
export const CONF_ADDORDENPAGO: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
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
            key: 'tipoOrdenPago',
            title: {
                name: 'Tipo orden de pago',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'formaPago',
            title: {
                name: 'Forma de pago',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
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
            key: 'numeroId',
            title: {
                name: 'N° ID',
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
                name: 'ver',
                icon: 'fas fa-eye',
                class: 'p-2',
                title: 'Ver Solicitud',
            },
            {
                name: 'agregar',
                icon:  'fas fa-plus',
                class: 'p-2',
                title: 'Agregar'
            }
        ],
    },
    noData: {
        name: 'No existen elementos asociados',
        class: 'text-center',
    },
    sort: true,
    filter: true,
};
export const CONF_BENEFICIARIO: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
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
            key: 'envio',
            title: {
                name: 'Envio',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
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
            key: 'numeroId',
            title: {
                name: 'ID',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'nombre',
            title: {
                name: 'Nombre',
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
    ],
    rowActions: {
        title: {
            name: 'Acciones',
            class: 'text-center',
            actionClass: 'd-flex flex-row justify-content-around align-middle'
        },
        actions: [
            {
                name: 'verDetalles',
                icon: 'fas fa-eye',
                class: 'p-2',
                title: 'Ver detalles',
            },
            {
                name: 'remover',
                icon: 'fas fa-times',
                class: 'p-2',
                title: 'Quitar pago',
            },
        ],
    },
    noData: {
        name: 'No existen elementos asociados',
        class: 'text-center',
    },
    sort: true,
    filter: true,
};
export const CONF_BENEFICIARIORESUMEN: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
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
            key: 'envio',
            title: {
                name: 'Envio',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
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
            key: 'numeroId',
            title: {
                name: 'ID',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'nombre',
            title: {
                name: 'Nombre',
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
    ],
    noData: {
        name: 'No existen elementos asociados',
        class: 'text-center',
    },
    sort: true,
    filter: true,
};
export const CONF_DETALLES: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
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
            key: 'envio',
            title: {
                name: 'Envio',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'banco',
            title: {
                name: 'Banco',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'numeroCuenta',
            title: {
                name: 'N° cuenta',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'clase',
            title: {
                name: 'Clase',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        }
    ],
    noData: {
        name: 'No existen elementos asociados',
        class: 'text-center',
    },
    sort: true,
    filter: false,
};
export const CONF_PROVEEDORES: any = {
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
    filter: false,
};
export const CONF_BANCO: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
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
            key: 'id',
            title: {
                name: 'ID',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'nombre',
            title: {
                name: 'Nombre',
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
    noData: {
        name: 'No existen elementos asociados',
        class: 'text-center',
    },
    sort: true,
    filter: false,
};
export const CONF_ACREEDOR: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'codigo',
            title: {
                name: 'Código',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'codigoConcepto',
            title: {
                name: 'Código del concepto',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'concepto',
            title: {
                name: 'Concepto',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'numeroDocumento',
            title: {
                name: 'Número de documento',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'nombre',
            title: {
                name: 'Nombre',
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
    sort: true,
    filter: false,
};
export const DATOS_GIRO_ORDEN: any = [
    {
        id: 12,
        consecutivo: 1,
        vigencia: 2020,
        tipoOrdenPago: '',
        formaPago: 'efectivo',
        tipoId: 'CC',
        numeroId: 123234,
        numeroEnvio: 123,
        nombre: 'Esteban Ayala',
        valor: 12830123,
        banco: 'Banco de Bogotá',
        numeroCuenta: '230-213132',
        clase: 'ahorros',
    },
    {
        id: 23,
        consecutivo: 2,
        vigencia: 2020,
        tipoOrdenPago: '',
        formaPago: 'efectivo',
        tipoId: 'CC',
        numeroId: 7613287,
        numeroEnvio: 98,
        nombre: 'David Castellanos',
        valor: 9871273,
        banco: 'Banco de occidente',
        numeroCuenta: '98-12312-1',
        clase: 'corriente',
    },
    {
        id: 123,
        consecutivo: 3,
        vigencia: 2020,
        tipoOrdenPago: '',
        formaPago: 'efectivo',
        tipoId: 'CC',
        numeroId: 80123123,
        numeroEnvio: 32,
        nombre: 'Hernan Arias',
        valor: 81972312,
        banco: 'Bancolombia',
        numeroCuenta: '192-34545',
        clase: 'ahorros',
    },
    {
        id: 1897,
        consecutivo: 4,
        vigencia: 2020,
        tipoOrdenPago: '',
        formaPago: 'efectivo',
        tipoId: 'CC',
        numeroId: 7123990,
        numeroEnvio: 56,
        nombre: 'Juliana Vargas',
        valor: 16391723,
        banco: 'Banco del norte',
        numeroCuenta: '012-324231',
        clase: 'corriente',
    },
    {
        id: 979,
        consecutivo: 5,
        vigencia: 2020,
        tipoOrdenPago: '',
        formaPago: 'efectivo',
        tipoId: 'CC',
        numeroId: 517308,
        numeroEnvio: 78,
        nombre: 'Kevin Limas',
        valor: 89127396,
        banco: 'BBVA',
        numeroCuenta: '8713-768-123',
        clase: 'ahorros',
    },
    {
        id: 9283,
        consecutivo: 6,
        vigencia: 2020,
        tipoOrdenPago: '',
        formaPago: 'efectivo',
        tipoId: 'CC',
        numeroId: 8712937,
        numeroEnvio: 67,
        nombre: 'Cristian Mana',
        valor: 8912712,
        banco: 'Banco de Bogotá',
        numeroCuenta: '8768-23-234',
        clase: 'ahorros',
    },
];
export const DATOS_CONTABILIDAD_TERCERO: any = [
    {
        secuencia: 1,
        tercero: 3458,
        numeroCuenta: 3457934,
        nombreCuenta: 'Occidente Proveedores',
        detalle: 'Endoso Cesar Salamanca',
        debito: 0,
        credito: 819237,
    },
    {
        secuencia: 2,
        tercero: 871239,
        numeroCuenta: 178231,
        nombreCuenta: 'Fondo de empleados',
        detalle: 'Endoso Cesar Salamanca',
        debito: 819237,
        credito: 0,
    }
];
export const DATOS_BENEFICIARIOS_BANCO: any = [
    {
        consecutivo: 382,
        tipoId: 'CC',
        id: 34567,
        nombre: 'Banco Davivienda',
        fechaPago: '',
        valor: 823123,
    },
    {
        consecutivo: 383,
        tipoId: 'CC',
        id: 34587,
        nombre: 'Banco Davivienda',
        fechaPago: '',
        valor: 345328,
     }
];
export const DATOS_ACREEDOR: any = [
    {
        codigo: 2,
        codigoConcepto: 79,
        concepto: 'Banco Davivienda',
        valor: 0,
    },
    {
        numeroDocumento: 783123,
        nombre: 'Cesar Salamanca',
        valor: 10000,
    }
];
