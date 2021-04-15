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
