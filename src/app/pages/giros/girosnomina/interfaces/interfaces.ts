export const CONF_GIRONOMINA: any = {
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
                name: 'verGiro',
                icon: 'fas fa-eye',
                class: 'p-2',
                title: 'Ver solicitud',
            },
            {
                name: 'editar',
                icon: 'fas fa-edit',
                class: 'p-2',
                title: 'Editar giro',
            }
        ],
    },
    tableActions: [
        {
            name: 'nuevo',
            icon: 'fas fa-plus py-1 px-2',
            class: 'px-2',
            title: 'Crear nuevo giro de nómina',
        }
    ],
    noData: {
        name: 'No existen elementos asociados',
        class: 'text-center',
    },
    sort: true,
    filter: true,
};

export const CONF_MINRELACION: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
        {
            key: 'numero',
            title: {
                name: 'Número',
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
            key: 'mes',
            title: {
                name: 'Mes',
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
    ],
    rowActions: {
        title: {
            name: 'Acciones',
            class: 'text-center',
            actionClass: 'd-flex flex-row justify-content-around align-middle'
        },
        actions: [
            {
                name: 'verRelacion',
                icon: 'fas fa-eye',
                class: 'p-2',
                title: 'Ver documento',
            },
            {
                name: 'eliminar',
                icon: 'fas fa-minus',
                class: 'p-2',
                title: 'Eliminar'
            }
        ],
    },
    sort: true,
    filter: false,
};
export const CONF_ADDRELACION: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
        {
            key: 'numero',
            title: {
                name: 'Número',
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
            key: 'mes',
            title: {
                name: 'Mes',
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
    ],
    rowActions: {
        title: {
            name: 'Acciones',
            class: 'text-center',
            actionClass: 'd-flex flex-row justify-content-around align-middle'
        },
        actions: [
            {
                name: 'verRelacion',
                icon: 'fas fa-eye',
                class: 'p-2',
                title: 'Ver documento',
            },
            {
                name: 'agregar',
                icon: 'fas fa-plus',
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
export const CONF_BENEFICIARIO_BANCO: any = {
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
    sort: true,
    filter: false,
};
export const CONF_DETALLES: any = {
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
            key: 'tipoId',
            title: {
                name: 'Tipo de documento',
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
            key: 'envio',
            title: {
                name: 'N° envío',
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
    sort: true,
    filter: false,
};
export const CONF_DESCUENTOS: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
        {
            key: 'descuento',
            title: {
                name: 'Descuento',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'valorDescuento',
            title: {
                name: 'Valor descuento',
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
export const CONF_DEVENGO: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
        {
            key: 'devengo',
            title: {
                name: 'Devengo',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'valorDevengo',
            title: {
                name: 'Valor devengo',
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
export const CONF_CONT: any = {
    showColumnTitle: true,
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
export const DATOS_RUBROS: any = [
    {
        numeroRubro: '3.01.001.01.02.05.0001.01',
        nombreRubro: 'Riesgos laborales docentes',
        valor: 17329387,
    },
    {
        numeroRubro: '3.01.001.01.02.05.0001.01',
        nombreRubro: 'ICBF docentes',
        valor: 17329387,
    },
];
export const DATOS_GIRONOMINA: any = [
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
export const DATOS_RELACION: any = [
    {
        numero: 567,
        nombre: 'Pago mensual',
        vigencia: 2021,
        consecutivo: 345,
        mes: 'mayo',
        formaPago: 'transferencia',
    },
    {
        numero: 534,
        nombre: 'Pago prima',
        vigencia: 2021,
        consecutivo: 546,
        mes: 'junio',
        formaPago: 'transferencia'
     },
     {
        numero: 763,
        nombre: 'Pago cesantias',
        vigencia: 2021,
        consecutivo: 2349,
        mes: 'junio',
        formaPago: 'transferencia'
     }
];
export const DATOS_BENEFICIARIOS: any = [
    {
        consecutivo: 23,
        envio: 567,
        tipoId: 'CC',
        id: 127358,
        nombre: 'Ana Miranda',
        valor: 897231,
        vigencia: 2021,
        banco: 'Banco de occidente',
        numeroCuenta: '230-123-345',
        clase: 'ahorros'
    },
    {
        consecutivo: 67,
        envio: 342,
        tipoId: 'CC',
        id: 87234,
        nombre: 'Kevin Arias',
        valor: 729873,
        vigencia: 2021,
        banco: 'BBVA',
        numeroCuenta: '192-123-345',
        clase: 'ahorros'
     },
     {
        consecutivo: 8734,
        envio: 897,
        tipoId: 'CC',
        id: 92374,
        nombre: 'Cristian Luis',
        valor: 34508121,
        vigencia: 2021,
        banco: 'Banco de Bogotá',
        numeroCuenta: '0-123124-345',
        clase: 'corriente'
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
export const DATOS_DEVENGO: any = [
    {
        devengo: 'Sueldos',
        valorDevengo: 4382108,
    },
    {
        devengo: 'Bonificación',
        valorDevengo: 306748,
     },
];
export const DATOS_DESCUENTO: any = [
    {
        descuento: 'Retención en la fuente',
        valorDescuento: 52585,
    },
    {
        descuento: 'Fondo de empleados',
        valorDescuento: 22000,
    },
    {
        descuento: 'SINTRA-UD',
        valorDescuento: 131463,
    },
    {
        descuento: 'Régimen de salud',
        valorDescuento: 525853,
    },
    {
        descuento: 'Sistema general de pensión',
        valorDescuento: 775722,
    },
];
export const DATOS_CONTABILIDAD: any = [
    {
        secuencia: 1,
        tercero: 79355747,
        numeroCuenta: 271863,
        nombreCuenta: 'Proveedores',
        detalle: 'Nómina del mes de julio',
        debito: 0,
        credito: 1264304,
    },
    {
        secuencia: 2,
        tercero: 79355747,
        numeroCuenta: 712361,
        nombreCuenta: 'Honorarios',
        detalle: 'Nómina del mes de julio',
        debito: 0,
        credito: 2893934,
    },
    {
        secuencia: 3,
        tercero: 79355747,
        numeroCuenta: 728612,
        nombreCuenta: 'Reteica',
        detalle: 'Nómina del mes de julio',
        debito: 0,
        credito: 10449,
    },
    {
        secuencia: 4,
        tercero: 79355747,
        numeroCuenta: 123786,
        nombreCuenta: 'Estampilla pro cultura',
        detalle: 'Nómina del mes de julio',
        debito: 0,
        credito: 6588,
    },
    {
        secuencia: 5,
        tercero: 79355747,
        numeroCuenta: 789123,
        nombreCuenta: 'Estampilla pro adulto',
        detalle: 'Nómina del mes de julio',
        debito: 0,
        credito: 23354,
    },
    {
        secuencia: 6,
        tercero: 79355747,
        numeroCuenta: 4234768,
        nombreCuenta: 'Libranzas',
        detalle: 'Nómina del mes de julio',
        debito: 22874645,
        credito: 0,
    }
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
