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
    sort: false,
    filter: false,
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
    sort: false,
    filter: false,
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
    filter: false,
};
 /******  Datos dummy ******************/