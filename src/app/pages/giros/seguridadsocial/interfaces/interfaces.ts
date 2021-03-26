export const CONF_GIROSEGURIDAD: any = {
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
export const CONF_ENTIDADES: any = {
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
            key: 'nombreTercero',
            title: {
                name: 'Nombre tercero',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'fechaPago',
            title: {
                name: 'Fecha de pago',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'valorNeto',
            title: {
                name: 'Valor neto',
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
                name: 'verDetalles',
                icon: 'fas fa-eye',
                class: 'p-2',
                title: 'Ver detalles',
            },
            {
                name: 'eliminar',
                icon: 'fas fa-times',
                class: 'p-2',
                title: 'Eliminar',
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
                class: 'text-justify',
            }
        }
    ],
    sort: true,
    filter: false,
};
export const CONF_CONCEPTOS: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
        {
            key: 'numeroConcepto',
            title: {
                name: 'N° de concepto',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'concepto',
            title: {
                name: 'Concepto RA',
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
                class: 'text-justify',
            }
        }
    ],
    sort: true,
    filter: false,
};
export const CONF_BENEFICIARIO: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
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
            key: 'id',
            title: {
                name: 'Tipo ID',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'nombreTercero',
            title: {
                name: 'Nombre del tercero',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'valorNeto',
            title: {
                name: 'Valor neto',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'aporteEmpleado',
            title: {
                name: 'Aporte empleado',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'aportePatronal',
            title: {
                name: 'Aporte patronal',
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
                class: 'text-justify',
            }
        },
        {
            key: 'credito',
            title: {
                name: 'Crédito',
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
export const DATOS_GIROSEGURIDAD: any = [
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
        tipoId: 'CC',
        id: 127358,
        nombreTercero: 'Ana Miranda',
        valorNeto: 21899500,
        aporteEmpleado: 6569860,
        aportePatronal: 15329720,
    },
    {
        tipoId: 'CC',
        id: 87234,
        nombreTercero: 'Kevin Arias',
        valorNeto: 32849400,
        aporteEmpleado: 9854820,
        aportePatronal: 22994560,
     }
];
export const DATOS_ENTIDADES: any = [
    {
        consecutivo: 383,
        tipoId: 'NIT',
        id: 127358,
        nombreTercero: 'Protección S.A.',
        fechaPago: '27/06/2020',
        valorNeto: 54749000,
    },
    {
        consecutivo: 383,
        tipoId: 'NIT',
        id: 736123,
        nombreTercero: 'Colpensiones',
        fechaPago: '27/06/2020',
        valorNeto: 730264400,
     },
     {
        consecutivo: 383,
        tipoId: 'NIT',
        id: 489723,
        nombreTercero: 'SURA',
        fechaPago: '27/06/2020',
        valorNeto: 1000000,
     }
];
export const DATOS_CONCEPTOS: any = [
    {
        numeroConcepto: 1494,
        concepto: 'ICBF Docentes',
        valorTotal: 7123
    },
    {
        numeroConcepto: 406,
        concepto: 'Aporte pensión docentes',
        valorTotal: 139824
    },
    {
        numeroConcepto: 416,
        concepto: 'Aporte salud pensión',
        valorTotal: 56534
    }
];
export const DATOS_CONT: any = [
    {
        secuencia: 1,
        tercero: 71236,
        numeroCuenta: 1233,
        nombreCuenta: 'Occidente proveedores',
        detalle: 'Pago enero-remuneración',
        debito: 0,
        credito: 785013400,
    },
    {
        secuencia: 2,
        tercero: 873182,
        numeroCuenta: 34358,
        nombreCuenta: 'Protección S.A.',
        detalle: 'Pago enero-remuneración',
        debito: 54749000,
        credito: 0,
    },
    {
        secuencia: 3,
        tercero: 18741,
        numeroCuenta: 87312,
        nombreCuenta: 'Colpensiones',
        detalle: 'Pago enero-remuneración',
        debito: 730264400,
        credito: 0,
    },
    {
        secuencia: 4,
        tercero: 81723,
        numeroCuenta: 1823,
        nombreCuenta: 'Sura',
        detalle: 'Pago enero-remuneración',
        debito: 1000000,
        credito: 0,
    }
];
