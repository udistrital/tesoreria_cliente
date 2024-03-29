export const CONF_BOLETINES: any = {
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
            key: 'fechaAprobacion',
            title: {
                name: 'Fecha aprobación',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'fechaRegistro',
            title: {
                name: 'Fecha registro',
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
                name: 'ver',
                icon: 'fas fa-eye',
                class: 'p-2',
                title: 'Ver solicitud',
            },
            {
                name: 'editar',
                icon: 'fas fa-edit',
                class: 'p-2',
                title: 'Editar solicitud',
            }
        ],
    },
    tableActions: [
        {
            name: 'nuevo',
            icon: 'fas fa-plus py-1 px-2',
            class: 'px-2',
            title: 'Nuevo boletín',
        }
    ],
    noData: {
        name: 'No existen elementos asociados',
        class: 'text-center',
    },
    sort: true,
    filter: true,
};
export const CONF_BORRADOR: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
        {
            key: 'cuenta',
            title: {
                name: 'Cuenta',
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
            key: 'saldo',
            title: {
                name: 'Saldo anterior',
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
                name: 'Ingresos (créditos)',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'debito',
            title: {
                name: 'Egresos (débitos)',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'nuevoSaldo',
            title: {
                name: 'Nuevo saldo',
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
export const CONF_CONSULTACUENTA: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
        {
            key: 'tipoComprobante',
            title: {
                name: 'Tipo comprobante',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'comprobante',
            title: {
                name: 'Comprobante',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'numero',
            title: {
                name: 'Numero',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
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
            key: 'cedula',
            title: {
                name: 'Cédula',
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
            key: 'descripcion',
            title: {
                name: 'Descripción',
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
            key: 'creditos',
            title: {
                name: 'Créditos',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'debitos',
            title: {
                name: 'Débitos',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'base',
            title: {
                name: 'Base',
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
                name: 'ver',
                icon: 'fas fa-eye',
                class: 'p-2',
                title: 'Ver solicitud',
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
export const CONF_CONSULTACOMPROBANTE: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
        {
            key: 'cuenta',
            title: {
                name: 'Cuenta',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
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
            key: 'cedula',
            title: {
                name: 'Cédula',
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
            key: 'descripcion',
            title: {
                name: 'Descripción',
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
            key: 'creditos',
            title: {
                name: 'Créditos',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'debitos',
            title: {
                name: 'Débitos',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'base',
            title: {
                name: 'Base',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
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
                name: 'ver',
                icon: 'fas fa-eye',
                class: 'p-2',
                title: 'Ver solicitud',
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
export const CONF_BANCOS: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
        {
            key: 'nombreCuenta',
            title: {
                name: 'Cuenta contable',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'entidadBancaria',
            title: {
                name: 'Entidad bancaria',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'capital',
            title: {
                name: 'Capital',
                class: 'text-center',
            },
            pipe: {
                type: 'currency',
                config: [],
                class: 'text-center',
            }
        },
        {
            key: 'concentracion',
            title: {
                name: 'Concentración',
                class: 'text-center',
            },
            pipe: {
                type: 'percent',
                config: [],
                class: 'text-center',
            }
        }
    ],
    sort: false,
    filter: false,
};
export const CONF_DIFERENCIAS: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
        {
            key: 'tipoComprobante',
            title: {
                name: 'Tipo comprobante',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'comprobante',
            title: {
                name: 'Comprobante',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
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
            key: 'nit',
            title: {
                name: 'NIT',
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
            key: 'cuenta',
            title: {
                name: 'Cuenta',
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
            key: 'descripcion',
            title: {
                name: 'Descripción',
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
export const CONF_CARGOS: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
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
            key: 'cargo',
            title: {
                name: 'Cargo',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        }
    ],
    sort: false,
    filter: false,
};
/*----------------- Datos dummie --------- */
export const DATOS_BOLETINES: any = [
    {
        consecutivo: 1,
        centroGestor: 230,
        areaFuncional: 1,
        fechaAprobacion: '',
        fechaRegistro: '04/10/2020',
        estado: 'Borrador',
    },
    {
        consecutivo: 2,
        centroGestor: 230,
        areaFuncional: 1,
        fechaAprobacion: '06/10/2020',
        fechaRegistro: '05/10/2020',
        estado: 'Aprobado',
    },
];
export const DATOS_BANCOS: any = [
    {
        nombreCuenta: 'EFECTIVO',
    },
    {
        entidadBancaria: 'Banco de Occidente',
        capital: 23684456,
        concentracion: 38,
    },
    {
        entidadBancaria: 'Banco BBVA',
        capital: 34984721,
        concentracion: 37,
    },
    {
        entidadBancaria: 'Banco de Bogotá',
        capital: 12563123,
        concentracion: 10,
    },
    {
        entidadBancaria: 'Banco Popular',
        capital: 1456234,
        concentracion: 3,
    },
    {
        nombreCuenta: 'INVERSIONES',
    },
    {
        entidadBancaria: 'Banco de Occidente',
        capital: 23684456,
        concentracion: 38,
    },
    {
        entidadBancaria: 'Banco BBVA',
        capital: 34984721,
        concentracion: 37,
    },
    {
        entidadBancaria: 'Banco de Bogotá',
        capital: 12563123,
        concentracion: 10,
    },
    {
        entidadBancaria: 'Banco Popular',
        capital: 1456234,
        concentracion: 3,
    },
    {
        nombreCuenta: 'OTROS ACTIVOS',
    },
    {
        entidadBancaria: 'Banco de Occidente',
        capital: 23684456,
        concentracion: 38,
    },
    {
        entidadBancaria: 'Banco BBVA',
        capital: 34984721,
        concentracion: 37,
    },
    {
        entidadBancaria: 'Banco de Bogotá',
        capital: 12563123,
        concentracion: 10,
    },
    {
        entidadBancaria: 'Banco Popular',
        capital: 1456234,
        concentracion: 3,
    }
];
export const DATOS_DIFERENCIAS: any = [
    {
        tipoComprobante: 1,
        comprobante: '',
        numero: 38,
        secuencia: 52,
        nit: '1238-456',
        nombreTercero: 'Amanda Miguel',
        cuenta: '3453-124-5',
        nombreCuenta: 'Proveedor',
        fecha: '02/08/10',
        descripcion: 'Pago certificado',
        valor: 3127302,
    },
    {
        tipoComprobante: 3,
        comprobante: '',
        numero: 65,
        secuencia: 95,
        nit: '4358-456',
        nombreTercero: 'Jane Kevs',
        cuenta: '87-534-2',
        nombreCuenta: 'Nomina',
        fecha: '20/04/10',
        descripcion: 'Pago certificado',
        valor: 2123,
    }
];
export const DATOS_CARGOS: any = [
    {
        nombre: 'Jesus Alvaro Mahecha',
        cargo: 'Jefe sección de contabilidad',
    },
    {
        nombre: 'María del Pilar',
        cargo: 'Auxiliar de contabilidad',
    },
];
export const DATOS_COMPROBANTE: any = [
    {
        cuenta: 'corriente',
        numero: 6131,
        secuencia: 2,
        cedula: 7231919,
        nombreTercero: 'Andres Arias',
        nombre: 'Banco occidente',
        fecha: '12/01/2020',
        descripcion: 'Pago julio',
        valor: 1273998,
        creditos: 1273998,
        debitos: 0,
        base: 0,
    },
    {
        cuenta: 'ahorros',
        numero: 9853,
        secuencia: 3,
        cedula: 834201,
        nombreTercero: 'Cesar Forero',
        nombre: 'Banco occidente',
        fecha: '03/04/2020',
        descripcion: 'Pago julio',
        valor: 832749,
        creditos: 832749,
        debitos: 0,
        base: 0,
    },
];
export const DATOS_CUENTAS: any = [
    {
        tipoComprobante: 'G',
        comprobante: 7,
        numero: 6123,
        secuencia: 8,
        cedula: 71368162,
        nombreTercero: 'Plata Ya LTDA',
        nombre: 'Occidente',
        fecha: '2020/01/20',
        descripcion: 'Pago julio',
        saldoAnterior: 18239093,
        creditos: 18239093,
        debitos: 0,
        base: 0,
    },
    {
        tipoComprobante: 'G',
        comprobante: 1,
        numero: 8973,
        secuencia: 9,
        cedula: 7613132,
        nombreTercero: 'Chaparro Murcia',
        nombre: 'Occidente',
        fecha: '2020/10/07',
        descripcion: 'Pago correspondiente',
        saldoAnterior: 4392401,
        egresos: 4392401,
        debitos: 0,
        base: 0,
    },
];
export const DATOS_BORRADOR: any = [
    /* { cuentas: [{
        cuenta: '',
        nombreCuenta: 'SALDO DE TESORERÍA',
        saldo: 35550520418,
        debito: 1550728,
        credito: 1550728,
        nuevoSaldo: 35550520418,
    }]},
    { cuentas: [{
        cuenta: '11',
        nombreCuenta: 'EFECTIVO',
        saldo: 21667969346,
        debito: 1550728,
        credito: 1550728,
        nuevoSaldo: 21667969346,
    }]},
    { cuentas: [{
        cuenta: '11 10',
        nombreCuenta: 'BANCOS Y CORPORACIONES',
        saldo: 21667969346,
        debito: 1550728,
        credito: 1550728,
        nuevoSaldo: 21667969346,
    }]},
    { cuentas: [{
        cuenta: '11 10 05',
        nombreCuenta: 'CUENTA CORRIENTE BANCA',
        saldo: 454988542,
        debito: 0,
        credito: 1550728,
        nuevoSaldo: 453437814,
    }]},
    { cuentas: [{
        cuenta: '11 10 05 02',
        nombreCuenta: 'Occidente 05354-08 proveedores',
        saldo: 454988542,
        debito: 0,
        credito: 1550728,
        nuevoSaldo: 453437814,
    }]},
    { cuentas: [{
        cuenta: '11 10 06',
        nombreCuenta: 'CUENTA DE AHORRO',
        saldo: 21212880803,
        debito: 1550728,
        credito: 0,
        nuevoSaldo: 21214431531,
    }]},
    { cuentas: [{
        cuenta: '11 10 06 06',
        nombreCuenta: 'OCCIDENTE 230-81451-9 Prestamos',
        saldo: 519063789,
        debito: 0,
        credito: 0,
        nuevoSaldo: 519063789,
    }]},
    { cuentas: [{
        cuenta: '12',
        nombreCuenta: 'INVERSIONES',
        saldo: 8832579091,
        debito: 0,
        credito: 0,
        nuevoSaldo: 8832579091,
    }]},
    { cuentas: [{
        cuenta: '12 01',
        nombreCuenta: 'INVERSIONES ADMINISTRA',
        saldo: 8832579091,
        debito: 0,
        credito: 0,
        nuevoSaldo: 8832579091,
    }]},
    { cuentas: [{
        cuenta: '12 01 06',
        nombreCuenta: 'CERTIFICADO DE DEPOSITO',
        saldo: 8832579091,
        debito: 0,
        credito: 0,
        nuevoSaldo: 8832579091,
    }]},
    { cuentas: [{
        cuenta: '12 01 06 52',
        nombreCuenta: 'CDT FPENSIONES 61-90 D',
        saldo: 8832579091,
        debito: 0,
        credito: 0,
        nuevoSaldo: 8832579091,
    }]},
    { cuentas: [{
        cuenta: '12 01 06 52 06',
        nombreCuenta: 'CDT BANCOLOMBIA BENEFICIO INSTITUCIONAL',
        saldo: 8832579091,
        debito: 0,
        credito: 0,
        nuevoSaldo: 8832579091,
    }]},
    { cuentas: [{
        cuenta: '19',
        nombreCuenta: 'OTROS ACTIVOS',
        saldo: 5050071980,
        debito: 0,
        credito: 0,
        nuevoSaldo: 8832579091,
    }]},
    { cuentas: [{
        cuenta: '19 01',
        nombreCuenta: 'RESERVA FINANCIERA ACTUARIAL',
        saldo: 5050071980,
        debito: 0,
        credito: 0,
        nuevoSaldo: 8832579091,
    }]},
    { cuentas: [{
        cuenta: '19 01 01',
        nombreCuenta: 'EFECTIVO',
        saldo: 659450801,
        debito: 0,
        credito: 0,
        nuevoSaldo: 659450801,
    }]},
    { cuentas: [{
        cuenta: '19 01 01 01',
        nombreCuenta: 'BANCO DE OCCIDENTE 251-80660-0 Ahorros',
        saldo: 659450801,
        debito: 0,
        credito: 0,
        nuevoSaldo: 659450801,
    }]}, */
    {
        cuenta: '',
        nombreCuenta: 'SALDO DE TESORERÍA',
        saldo: 35550520418,
        debito: 1550728,
        credito: 1550728,
        nuevoSaldo: 35550520418,
    },
    {
        cuenta: '11',
        nombreCuenta: 'EFECTIVO',
        saldo: 21667969346,
        debito: 1550728,
        credito: 1550728,
        nuevoSaldo: 21667969346,
    },
    {
        cuenta: '11 10',
        nombreCuenta: 'BANCOS Y CORPORACIONES',
        saldo: 21667969346,
        debito: 1550728,
        credito: 1550728,
        nuevoSaldo: 21667969346,
    },
    {
        cuenta: '11 10 05',
        nombreCuenta: 'CUENTA CORRIENTE BANCA',
        saldo: 454988542,
        debito: 0,
        credito: 1550728,
        nuevoSaldo: 453437814,
    },
    {
        cuenta: '11 10 05 02',
        nombreCuenta: 'Occidente 05354-08 proveedores',
        saldo: 454988542,
        debito: 0,
        credito: 1550728,
        nuevoSaldo: 453437814,
    },
    {
        cuenta: '11 10 06',
        nombreCuenta: 'CUENTA DE AHORRO',
        saldo: 21212880803,
        debito: 1550728,
        credito: 0,
        nuevoSaldo: 21214431531,
    },
    {
        cuenta: '11 10 06 06',
        nombreCuenta: 'OCCIDENTE 230-81451-9 Prestamos',
        saldo: 519063789,
        debito: 0,
        credito: 0,
        nuevoSaldo: 519063789,
    },
    {
        cuenta: '12',
        nombreCuenta: 'INVERSIONES',
        saldo: 8832579091,
        debito: 0,
        credito: 0,
        nuevoSaldo: 8832579091,
    },
    {
        cuenta: '12 01',
        nombreCuenta: 'INVERSIONES ADMINISTRA',
        saldo: 8832579091,
        debito: 0,
        credito: 0,
        nuevoSaldo: 8832579091,
    },
    {
        cuenta: '12 01 06',
        nombreCuenta: 'CERTIFICADO DE DEPOSITO',
        saldo: 8832579091,
        debito: 0,
        credito: 0,
        nuevoSaldo: 8832579091,
    },
    {
        cuenta: '12 01 06 52',
        nombreCuenta: 'CDT FPENSIONES 61-90 D',
        saldo: 8832579091,
        debito: 0,
        credito: 0,
        nuevoSaldo: 8832579091,
    },
    {
        cuenta: '12 01 06 52 06',
        nombreCuenta: 'CDT BANCOLOMBIA BENEFICIO INSTITUCIONAL',
        saldo: 8832579091,
        debito: 0,
        credito: 0,
        nuevoSaldo: 8832579091,
    },
    {
        cuenta: '19',
        nombreCuenta: 'OTROS ACTIVOS',
        saldo: 5050071980,
        debito: 0,
        credito: 0,
        nuevoSaldo: 8832579091,
    },
    {
        cuenta: '19 01',
        nombreCuenta: 'RESERVA FINANCIERA ACTUARIAL',
        saldo: 5050071980,
        debito: 0,
        credito: 0,
        nuevoSaldo: 8832579091,
    },
    {
        cuenta: '19 01 01',
        nombreCuenta: 'EFECTIVO',
        saldo: 659450801,
        debito: 0,
        credito: 0,
        nuevoSaldo: 659450801,
    },
    {
        cuenta: '19 01 01 01',
        nombreCuenta: 'BANCO DE OCCIDENTE 251-80660-0 Ahorros',
        saldo: 659450801,
        debito: 0,
        credito: 0,
        nuevoSaldo: 659450801,
    }
];
