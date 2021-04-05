export const CONFIGURACION_REVERSAR: any = {
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
        /* {
            key: 'centroGestor',
            title: {
                name: 'Centro gestor',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        }, */
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
            key: 'fecha',
            title: {
                name: 'Fecha',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'nombreCuenta',
            title: {
                name: 'Nombre cuenta',
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
            key: 'numeroGiro',
            title: {
                name: 'N° giro',
                class: 'text-center',
            },
            class: 'text-justify',
            pipe: {
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
            title: 'Reversar giro',
        }
    ],
    noData: {
        name: 'No existen elementos asociados',
        class: 'text-center',
    },
    sort: true,
    filter: true,
};
export const DATOS_REVERSAR: any = [
    {
        vigencia: 2020,
        tipoGiro: 'Relación de autorización de nómina',
        areaFuncional: '01',
        fecha: '27/8/2020',
        numeroCuenta: 123908,
        nombreCuenta: 'Nómina',
        numeroGiro: 123234,
    },
    {
        vigencia: 2019,
        tipoGiro: 'Pago proveedores',
        areaFuncional: '01',
        fecha: '28/8/2020',
        numeroGiro: 432890,
        nombreCuenta: 'OAS',
        numeroCuenta: 89240,
     },
];
export const DATOS_GIROS: any = [
    {
        vigencia: 2020,
        tipoGiro: 'Relación de autorización de nómina',
        areaFuncional: '01',
        numeroArchivo: 18236,
        numeroCuenta: 1238,
        banco: 'BBVA'
    },
    {
        vigencia: 2019,
        tipoGiro: 'Pago proveedores',
        areaFuncional: '01',
        numeroArchivo: 38947,
        numeroCuenta: 97894,
        banco: 'Banco de occidente'
     },
];
export const CONF_ADDGIRO: any = {
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
        /* {
            key: 'centroGestor',
            title: {
                name: 'Centro gestor',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        }, */
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
            key: 'numeroArchivo',
            title: {
                name: 'N° del archivo',
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
            key: 'banco',
            title: {
                name: 'Banco',
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
export const CONF_MINGIRO: any = {
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
        /* {
            key: 'centroGestor',
            title: {
                name: 'Centro gestor',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        }, */
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
            key: 'numeroArchivo',
            title: {
                name: 'N° del archivo',
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
            key: 'banco',
            title: {
                name: 'Banco',
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
export const DATOS_BENEFICIARIOS: any = [
    {
        id: 12,
        consecutivo: 1,
        vigencia: 2020,
        tipoDocumento: 'Orden de pago',
        tipoId: 'CC',
        numeroId: 123234,
        nombre: 'Esteban Ayala',
        valor: 12830123,
        banco: 'Banco de Bogotá',
        numeroCuenta: '230-213132',
    },
    {
        id: 23,
        consecutivo: 2,
        vigencia: 2020,
        tipoDocumento: 'Orden de pago',
        tipoId: 'CC',
        numeroId: 7613287,
        nombre: 'David Castellanos',
        valor: 9871273,
        banco: 'Banco de occidente',
        numeroCuenta: '98-12312-1',
    },
    {
        id: 123,
        consecutivo: 3,
        vigencia: 2020,
        tipoDocumento: 'Orden de pago',
        tipoId: 'CC',
        numeroId: 80123123,
        nombre: 'Hernan Arias',
        valor: 81972312,
        banco: 'Bancolombia',
        numeroCuenta: '192-34545',
    }
];
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
            key: 'tipoDocumento',
            title: {
                name: 'Tipo documento',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'banco',
            title: {
                name: 'Banco receptor',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'numeroCuenta',
            title: {
                name: 'Número de cuenta',
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
