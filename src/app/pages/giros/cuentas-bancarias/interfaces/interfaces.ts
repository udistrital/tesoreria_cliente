export const CONFIGURACION_TABLACUENTA: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'ID',
            title: {
                name_i18n: 'id',
                class: 'text-center',
            },
            pipe: {
                class: 'center',
            }
        },
        {
            key: 'nombreCuenta',
            title: {
                name_i18n: 'cuenta',
                class: 'text-center',
            },
            pipe: {
                class: 'center',
            }
        },
        {
            key: 'tipoCuenta',
            title: {
                name_i18n: 'tipo_cuenta',
                class: 'text-center',
            },
            pipe: {
                class: 'left',
            }
        },
        {
            key: 'numeroCuenta',
            title: {
                name_i18n: 'numero_cuenta',
                class: 'text-center',
            },
            pipe: {
                class: 'left',
            }
        },
        {
            key: 'sucursal',
            title: {
                name_i18n: 'sucursal',
                class: 'text-center',
            },
            pipe: {
                class: 'center',
            },
        },
        {
            key: 'estado',
            title: {
                name_i18n: 'estado',
                class: 'text-center',
            },
            pipe: {
                class: 'center',
            },
        },
        {
            key: 'acciones',
            title: {
                name_i18n: 'acciones',
                class: 'text-center',
            },
            pipe: {
                class: 'icons'
            }
        }
    ],
    noData: {
        name_i18n: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    sort: true,
    filter: true,
};

export const CODIGO_RECURSOS: any = {
    recaudadora : 2,
    pagadora : 3,
};
