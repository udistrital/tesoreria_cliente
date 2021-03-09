export const CONFIGURACION_TABLATIPOS: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'CodigoAbreviacion',
            title: {
                name: 'Código',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'Nombre',
            title: {
                name: 'Nombre de Tipo',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'Descripcion',
                title: {
                name: 'Descripción de Tipo',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'estadoTipo',
            title: {
                name: 'Estado',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'FechaModificacion',
            title: {
                name: 'Fecha',
                class: 'text-center',
            },
            pipe: {
                type: 'date',
                config: [
                    'shortDate'
                ],
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
                name: 'verDetalle',
                icon: 'fas fa-info-circle',
                class: 'p-1',
                title: 'Detalle',
            },
            {
                name: 'asosiarRequisitos',
                icon: 'fas fa-list',
                class: 'p-1',
                title: 'Asociar Requisitos',
            },
            {
                name: 'modificarTipo',
                icon: 'fas fa-edit',
                class: 'p-1',
                title: 'Editar Tipo de Avance',
            },
            {
                name: 'borrarTipo',
                icon: 'fas fa-trash-alt',
                class: 'p-1',
                title: 'Borrar Tipo de Avance',
            },
        ],
    },
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    endSubtotal: false,
    sort: true,
    filter: true,
};

export const CONFIGURACION_REQUISITOSDETALLE: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'CodigoAbreviacion',
            title: {
                name: 'Código',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'Nombre',
            title: {
                name: 'Nombre de Requisito',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'Descripcion',
            title: {
                name: 'Descripción de Requisito',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'FechaModificacion',
            title: {
                name: 'Fecha',
                class: 'text-center',
            },
            pipe: {
                type: 'date',
                config: [
                    'shortDate'
                ],
                class: 'text-center',
            }
        },
    ],
    sort: true,
    filter: false,
};

export const CONFIGURACION_REQUISITOS: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'CodigoAbreviacion',
            title: {
                name: 'Código',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'Nombre',
            title: {
                name: 'Nombre de Requisito',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'Descripcion',
            title: {
                name: 'Descripción de Requisito',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'FechaModificacion',
            title: {
                name: 'Fecha',
                class: 'text-center',
            },
            pipe: {
                type: 'date',
                config: [
                    'shortDate'
                ],
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
                name: 'borrarRequisito',
                icon: 'fas fa-trash-alt',
                class: 'p-1',
                title: 'Borrar requisito',
            },
        ],
    },
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    sort: true,
    filter: false,
};
export const CONFIGURACION_TABLA_NORMA: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'LinkNorma',
            title: {
                name: 'Enlace de Norma',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'Vigencia',
            title: {
                name: 'Vigencia',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'FechaModificacion',
            title: {
                name: 'Fecha de Actualización',
                class: 'text-center',
            },
            pipe: {
                type: 'date',
                config: [
                    'shortDate'
                ],
                class: 'text-center',
            }
        },
    ],
    noData: {
        name: 'No existen elementos asociados',
        class: 'text-center',
    },
    sort: true,
};
