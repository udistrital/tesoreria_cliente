export const CONFIGURACION_TABLASOLICITUD: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'areaFuncional',
            title: {
                name: 'Área Funcional',
                class: 'text-center',
            },
            pipe: {
                class: 'left',
            }
        },
        {
            key: 'Id',
            title: {
                name: 'Número de Solicitud',
                class: 'text-center',
            },
            pipe: {
                class: 'left',
            }
        },
        {
            key: 'estadoSolicitud',
            title: {
                name: 'Estado',
                class: 'text-center',
            },
            pipe: {
                class: 'left',
            }
        },
        {
            key: 'fechaRadicacion',
            title: {
                name: 'Fecha',
                class: 'text-center',
            },
            pipe: {
                type: 'date',
                config: [
                    'shortDate'
                ],
                class: 'center',
            }
        },
        {
            key: 'acciones',
            title: {
                name: 'Acciones',
                class: 'text-center',
            },
            pipe: {
                class: 'icons'
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
                name: 'modificarSolicitud',
                icon: 'fas fa-edit',
                class: 'p-1',
                title: 'Editar Tipo de Avance',
            },
            {
                name: 'borrarSolicitud',
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
    sort: true,
    filter: true,
};


export const CONFIGURACION_REQUISITOSTIPO: any = {
    title: {
        name: 'REQUISITOS', // name title
        class: 'text-center', // bootstrap class
    },
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
            key: 'adjunto',
            title: {
                name: 'Archivo Adjunto',
                class: 'text-center',
            },
            pipe: {
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
                name: 'adjuntarArchivo',
                icon: 'fas fa-paperclip',
                class: 'p-1',
                title: 'Ajuntar Archivo',
            },
        ],
    },
    endSubtotal: false,
    sort: true,
    filter: false,
};

export const CONFIGURACION_ESPECIFICACIONTIPO: any = {
    title: {
        name: 'ESPECIFICACIONES', // name title
        class: 'text-center', // bootstrap class
    },
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'tipoEspecificacion',
            title: {
                name: 'Tipo',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'descripcion',
            title: {
                name: 'Descripción de Especificación',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'valor',
            title: {
                name: 'Valor Solicitado',
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
                name: 'modificarEspecificacion',
                icon: 'fas fa-edit',
                class: 'p-1',
                title: 'Modificar Especificación',
            },
            {
                name: 'borrarEspecificacion',
                icon: 'fas fa-trash-alt',
                class: 'p-1',
                title: 'Borrar Especificación',
            },
        ],
    },
    tableActions: [
        {
            name: 'nuevoRegistro',
            icon: 'fas fa-plus py-1 px-2',
            class: 'px-2',
            title: 'Agregar Especificación',
        }
    ],
    endSubtotal: false,
    sort: true,
    filter: false,
};

export const CONFIGURACION_ESPECIFICACIONDETALLE: any = {
    title: {
        name: 'ESPECIFICACIONES', // name title
        class: 'text-center', // bootstrap class
    },
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'tipoEspecificacion',
            title: {
                name: 'Tipo',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'descripcion',
            title: {
                name: 'Descripción de Especificación',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'valor',
            title: {
                name: 'Valor Solicitado',
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
                name: 'modificarEspecificacion',
                icon: 'fas fa-edit',
                class: 'p-1',
                title: 'Modificar Especificación',
            },
            {
                name: 'borrarEspecificacion',
                icon: 'fas fa-trash-alt',
                class: 'p-1',
                title: 'Borrar Especificación',
            },
        ],
    },
    endSubtotal: false,
    sort: true,
    filter: false,
};
