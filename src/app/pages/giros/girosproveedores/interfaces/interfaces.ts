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
export const DATOS_GIRO_ORDEN: any = [
    {
        consecutivo: 1,
        vigencia: 2020,
        tipoOrdenPago: '',
        formaPago: 'efectivo',
        tipoId: 'CC',
        numeroId: 123234,
    },
    {
        consecutivo: 2,
        vigencia: 2020,
        tipoOrdenPago: '',
        formaPago: 'efectivo',
        tipoId: 'CC',
        numeroId: 786868,
     },
];