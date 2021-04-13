export const CONFIGURACION_TABLA_SOLICITUDES_PAC: any = {
    title: {
        name: 'Lista de Solicitudes',
        class: 'text-center text-light',
    },
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'Id',
            title: {
                name: 'Consecutivo',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'Descripcion',
            title: {
                name: 'Descripcion',
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
            key: 'FechaCreacion',
            title: {
                name: 'Fecha de Creación',
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
        {
            key: 'FechaModificacion',
            title: {
                name: 'Ultima Modificación',
                class: 'text-center',
            },
            pipe: {
                type: 'date',
                config: [
                    'shortDate',
                ],
                class: 'text-center',
            }
        },
        {
            key: 'Aprobado',
            title: {
                name: 'Aprobado',
                class: 'text-center',
            },
            pipe: {
                isBoolean: true,
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
                name: 'editar',
                icon: 'fas fa-pencil-alt',
                class: 'p-2',
                title: 'Editar',
            },
            {
                name: 'ver',
                icon: 'fas fa-list',
                class: 'p-2',
                title: 'Ver Proyeccion',
            },
            {
                name: 'tabla',
                icon: 'fas fa-code-branch',
                class: 'p-2',
                title: 'Ver Tabla Proyeccion',
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

export const DATOS_SOLICITUDES_PAC = [
    {
        Id: 1,
        Descripcion: 'aasdas',
        Vigencia: '2020',
        FechaCreacion: '2021-04-07T20:04:07Z',
        FechaModificacion: '2021-04-07T20:04:07Z',
        Aprobado: true,
    },
    {
        Id: 2,
        Descripcion: 'aasdas',
        Vigencia: '2020',
        FechaCreacion: '2021-04-07T20:04:07Z',
        FechaModificacion: '2021-04-07T20:04:07Z',
        Aprobado: false,
    },
    {
        Id: 3,
        Descripcion: 'aasdas',
        Vigencia: '2020',
        FechaCreacion: '2021-04-07T20:04:07Z',
        FechaModificacion: '2021-04-07T20:04:07Z',
        Aprobado: true,
    }
];

export const MESES = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
];

export const DATOS_TABLA_REPORTE = [
    {
        Rubros: [
            {
                Rubro: {
                    Vigencia: 0,
                    Nombre: 'GASTOS',
                    Descripcion: 'GASTOS',
                    FechaCreacion: '2021-01-28T03:45:08.914Z',
                    FechaModificacion: '2021-01-28T03:45:08.914Z',
                    Activo: false,
                    Codigo: '3',
                    Hijos: [
                        '3-00',
                        '3-01',
                        '3-03'
                    ],
                    Padre: '',
                    UnidadEjecutora: '1',
                    Bloqueado: false,
                    Apropiaciones: false
                },
                Fuentes: [],
                ApropiacionInicial: 9468710000,
                Modificaciones: 0,
                Aprobado: 9468710000,
                Rezago: 0,
                Enero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Febrero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Marzo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Abril: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Mayo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Junio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Julio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Agosto: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Septiembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Octubre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Noviembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Diciembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },

            },
        ],
    },
    {
        Rubros: [
            {
                Rubro: {
                    Vigencia: 0,
                    Nombre: 'GASTOS',
                    Descripcion: 'GASTOS',
                    FechaCreacion: '2021-01-28T03:45:08.914Z',
                    FechaModificacion: '2021-01-28T03:45:08.914Z',
                    Activo: false,
                    Codigo: '3',
                    Hijos: [
                        '3-00',
                        '3-01',
                        '3-03'
                    ],
                    Padre: '',
                    UnidadEjecutora: '1',
                    Bloqueado: false,
                    Apropiaciones: false
                },
                Fuentes: [],
                ApropiacionInicial: 9468710000,
                Modificaciones: 0,
                Aprobado: 9468710000,
                Rezago: 0,
                Enero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Febrero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Marzo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Abril: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Mayo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Junio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Julio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Agosto: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Septiembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Octubre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Noviembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Diciembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
            },
            {
                Rubro: {
                    Vigencia: 0,
                    Nombre: 'GASTOS DE FUNCIONAMIENTO',
                    Descripcion: 'GASTOS DE FUNCIONAMIENTO',
                    FechaCreacion: '2021-01-28T03:45:08.914Z',
                    FechaModificacion: '2021-01-28T03:45:08.914Z',
                    Activo: false,
                    Codigo: '3-01',
                    Hijos: [
                        '3-01-001',
                        '3-01-002',
                        '3-01-003',
                        '3-01-004',
                        '3-01-005'
                    ],
                    Padre: '3',
                    UnidadEjecutora: '1',
                    Bloqueado: false,
                    Apropiaciones: false,
                },
                Fuentes: [],
                ApropiacionInicial: 9468710000,
                Modificaciones: 0,
                Aprobado: 9468710000,
                Rezago: 0,
                Enero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Febrero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Marzo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Abril: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Mayo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Junio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Julio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Agosto: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Septiembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Octubre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Noviembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Diciembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
            },
            {
                Rubro: {
                    Vigencia: 0,
                    Nombre: 'Administrativos',
                    Descripcion: 'Administrativos',
                    FechaCreacion: '2021-01-28T03:45:08.914Z',
                    FechaModificacion: '2021-01-28T03:45:08.914Z',
                    Activo: false,
                    Codigo: '3-01-001-01-01-01-0001-01',
                    Hijos: [],
                    Padre: '3-01-001-01-01-01-0001',
                    UnidadEjecutora: '1',
                    Bloqueado: true,
                    Apropiaciones: true
                },
                Fuentes: [

                ],
                ApropiacionInicial: 9468710000,
                Modificaciones: 0,
                Aprobado: 9468710000,
                Rezago: 0,
                Enero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Febrero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Marzo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Abril: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Mayo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Junio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Julio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Agosto: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Septiembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Octubre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Noviembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Diciembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
            },
            {
                Rubro: {
                    Vigencia: 0,
                    Nombre: 'Administrativos',
                    Descripcion: 'Administrativos',
                    FechaCreacion: '2021-01-28T03:45:08.914Z',
                    FechaModificacion: '2021-01-28T03:45:08.914Z',
                    Activo: false,
                    Codigo: '3-01-001-01-01-01-0001-01',
                    Hijos: [],
                    Padre: '3-01-001-01-01-01-0001',
                    UnidadEjecutora: '1',
                    Bloqueado: true,
                    Apropiaciones: true
                },
                Fuentes: [

                ],
                ApropiacionInicial: 9468710000,
                Modificaciones: 0,
                Aprobado: 9468710000,
                Rezago: 0,
                Enero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Febrero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Marzo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Abril: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Mayo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Junio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Julio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Agosto: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Septiembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Octubre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Noviembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Diciembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
            },
            {
                Rubro: {
                    Vigencia: 0,
                    Nombre: 'Administrativos',
                    Descripcion: 'Administrativos',
                    FechaCreacion: '2021-01-28T03:45:08.914Z',
                    FechaModificacion: '2021-01-28T03:45:08.914Z',
                    Activo: false,
                    Codigo: '3-01-001-01-01-01-0001-01',
                    Hijos: [],
                    Padre: '3-01-001-01-01-01-0001',
                    UnidadEjecutora: '1',
                    Bloqueado: true,
                    Apropiaciones: true
                },
                Fuentes: [

                ],
                ApropiacionInicial: 9468710000,
                Modificaciones: 0,
                Aprobado: 9468710000,
                Rezago: 0,
                Enero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Febrero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Marzo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Abril: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Mayo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Junio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Julio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Agosto: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Septiembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Octubre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Noviembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Diciembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
            },
            {
                Rubro: {
                    Vigencia: 0,
                    Nombre: 'Administrativos',
                    Descripcion: 'Administrativos',
                    FechaCreacion: '2021-01-28T03:45:08.914Z',
                    FechaModificacion: '2021-01-28T03:45:08.914Z',
                    Activo: false,
                    Codigo: '3-01-001-01-01-01-0001-01',
                    Hijos: [],
                    Padre: '3-01-001-01-01-01-0001',
                    UnidadEjecutora: '1',
                    Bloqueado: true,
                    Apropiaciones: true
                },
                Fuentes: [

                ],
                ApropiacionInicial: 9468710000,
                Modificaciones: 0,
                Aprobado: 9468710000,
                Rezago: 0,
                Enero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Febrero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Marzo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Abril: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Mayo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Junio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Julio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Agosto: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Septiembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Octubre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Noviembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Diciembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
            },
        ],
    },
    {
        Rubros: [
            {
                Rubro: {
                    Vigencia: 0,
                    Nombre: 'GASTOS',
                    Descripcion: 'GASTOS',
                    FechaCreacion: '2021-01-28T03:45:08.914Z',
                    FechaModificacion: '2021-01-28T03:45:08.914Z',
                    Activo: false,
                    Codigo: '3',
                    Hijos: [
                        '3-00',
                        '3-01',
                        '3-03'
                    ],
                    Padre: '',
                    UnidadEjecutora: '1',
                    Bloqueado: false,
                    Apropiaciones: false
                },
                Fuentes: [],
                ApropiacionInicial: 9468710000,
                Modificaciones: 0,
                Aprobado: 9468710000,
                Rezago: 0,
                Enero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Febrero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Marzo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Abril: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Mayo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Junio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Julio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Agosto: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Septiembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Octubre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Noviembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Diciembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
            },
            {
                Rubro: {
                    Vigencia: 0,
                    Nombre: 'GASTOS DE FUNCIONAMIENTO',
                    Descripcion: 'GASTOS DE FUNCIONAMIENTO',
                    FechaCreacion: '2021-01-28T03:45:08.914Z',
                    FechaModificacion: '2021-01-28T03:45:08.914Z',
                    Activo: false,
                    Codigo: '3-01',
                    Hijos: [
                        '3-01-001',
                        '3-01-002',
                        '3-01-003',
                        '3-01-004',
                        '3-01-005'
                    ],
                    Padre: '3',
                    UnidadEjecutora: '1',
                    Bloqueado: false,
                    Apropiaciones: false,
                },
                Fuentes: [],
                ApropiacionInicial: 9468710000,
                Modificaciones: 0,
                Aprobado: 9468710000,
                Rezago: 0,
                Enero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Febrero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Marzo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Abril: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Mayo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Junio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Julio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Agosto: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Septiembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Octubre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Noviembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Diciembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
            },
            {
                Rubro: {
                    Vigencia: 0,
                    Nombre: 'Administrativos',
                    Descripcion: 'Administrativos',
                    FechaCreacion: '2021-01-28T03:45:08.914Z',
                    FechaModificacion: '2021-01-28T03:45:08.914Z',
                    Activo: false,
                    Codigo: '3-01-001-01-01-01-0001-01',
                    Hijos: [],
                    Padre: '3-01-001-01-01-01-0001',
                    UnidadEjecutora: '1',
                    Bloqueado: true,
                    Apropiaciones: true
                },
                Fuentes: [
                    {
                        Vigencia: 2020,
                        Nombre: 'Recursos del Balance Estampilla UD Ley 1825 de 2020',
                        Descripcion: 'Recursos del Balance Estampilla UD Ley 1825 de 2020',
                        Codigo: '2414',
                        TipoFuente: null,
                        ValorInicial: 20000000000,
                        ValorActual: 0,
                        Estado: 'distribuida',
                        Rubros: {},
                        NumeroDocumento: '34689',
                        TipoDocumento: 'RESOLUCION',
                        UnidadEjecutora: '1',
                        Movimientos: {}
                    },
                ],
                ApropiacionInicial: 9468710000,
                Modificaciones: 0,
                Aprobado: 9468710000,
                Rezago: 0,
                Enero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Febrero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Marzo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Abril: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Mayo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Junio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Julio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Agosto: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Septiembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Octubre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Noviembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Diciembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
            },
            {
                Rubro: {
                    Vigencia: 0,
                    Nombre: 'Administrativos',
                    Descripcion: 'Administrativos',
                    FechaCreacion: '2021-01-28T03:45:08.914Z',
                    FechaModificacion: '2021-01-28T03:45:08.914Z',
                    Activo: false,
                    Codigo: '3-01-001-01-01-01-0001-01',
                    Hijos: [],
                    Padre: '3-01-001-01-01-01-0001',
                    UnidadEjecutora: '1',
                    Bloqueado: true,
                    Apropiaciones: true
                },
                Fuentes: [
                    {
                        Vigencia: 2020,
                        Nombre: 'Recursos del Balance Estampilla UD Ley 1825 de 2020',
                        Descripcion: 'Recursos del Balance Estampilla UD Ley 1825 de 2020',
                        Codigo: '2414',
                        TipoFuente: null,
                        ValorInicial: 20000000000,
                        ValorActual: 0,
                        Estado: 'distribuida',
                        Rubros: {},
                        NumeroDocumento: '34689',
                        TipoDocumento: 'RESOLUCION',
                        UnidadEjecutora: '1',
                        Movimientos: {}
                    },
                ],
                ApropiacionInicial: 9468710000,
                Modificaciones: 0,
                Aprobado: 9468710000,
                Rezago: 0,
                Enero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Febrero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Marzo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Abril: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Mayo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Junio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Julio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Agosto: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Septiembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Octubre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Noviembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Diciembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
            },
            {
                Rubro: {
                    Vigencia: 0,
                    Nombre: 'Administrativos',
                    Descripcion: 'Administrativos',
                    FechaCreacion: '2021-01-28T03:45:08.914Z',
                    FechaModificacion: '2021-01-28T03:45:08.914Z',
                    Activo: false,
                    Codigo: '3-01-001-01-01-01-0001-01',
                    Hijos: [],
                    Padre: '3-01-001-01-01-01-0001',
                    UnidadEjecutora: '1',
                    Bloqueado: true,
                    Apropiaciones: true
                },
                Fuentes: [
                    {
                        Vigencia: 2020,
                        Nombre: 'Recursos del Balance Estampilla UD Ley 1825 de 2020',
                        Descripcion: 'Recursos del Balance Estampilla UD Ley 1825 de 2020',
                        Codigo: '2414',
                        TipoFuente: null,
                        ValorInicial: 20000000000,
                        ValorActual: 0,
                        Estado: 'distribuida',
                        Rubros: {},
                        NumeroDocumento: '34689',
                        TipoDocumento: 'RESOLUCION',
                        UnidadEjecutora: '1',
                        Movimientos: {}
                    },
                    {
                        Vigencia: 2020,
                        Nombre: 'Recursos del Balance Estampilla UD Ley 1825 de 2020',
                        Descripcion: 'Recursos del Balance Estampilla UD Ley 1825 de 2020',
                        Codigo: '2414',
                        TipoFuente: null,
                        ValorInicial: 20000000000,
                        ValorActual: 0,
                        Estado: 'distribuida',
                        Rubros: {},
                        NumeroDocumento: '34689',
                        TipoDocumento: 'RESOLUCION',
                        UnidadEjecutora: '1',
                        Movimientos: {}
                    },
                ],
                ApropiacionInicial: 9468710000,
                Modificaciones: 0,
                Aprobado: 9468710000,
                Rezago: 0,
                Enero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Febrero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Marzo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Abril: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Mayo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Junio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Julio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Agosto: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Septiembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Octubre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Noviembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Diciembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
            },
            {
                Rubro: {
                    Vigencia: 0,
                    Nombre: 'Administrativos',
                    Descripcion: 'Administrativos',
                    FechaCreacion: '2021-01-28T03:45:08.914Z',
                    FechaModificacion: '2021-01-28T03:45:08.914Z',
                    Activo: false,
                    Codigo: '3-01-001-01-01-01-0001-01',
                    Hijos: [],
                    Padre: '3-01-001-01-01-01-0001',
                    UnidadEjecutora: '1',
                    Bloqueado: true,
                    Apropiaciones: true
                },
                Fuentes: [
                    {
                        Vigencia: 2020,
                        Nombre: 'Recursos del Balance Estampilla UD Ley 1825 de 2020',
                        Descripcion: 'Recursos del Balance Estampilla UD Ley 1825 de 2020',
                        Codigo: '2414',
                        TipoFuente: null,
                        ValorInicial: 20000000000,
                        ValorActual: 0,
                        Estado: 'distribuida',
                        Rubros: {},
                        NumeroDocumento: '34689',
                        TipoDocumento: 'RESOLUCION',
                        UnidadEjecutora: '1',
                        Movimientos: {}
                    },
                    {
                        Vigencia: 2020,
                        Nombre: 'Recursos del Balance Estampilla UD Ley 1825 de 2020',
                        Descripcion: 'Recursos del Balance Estampilla UD Ley 1825 de 2020',
                        Codigo: '2414',
                        TipoFuente: null,
                        ValorInicial: 20000000000,
                        ValorActual: 0,
                        Estado: 'distribuida',
                        Rubros: {},
                        NumeroDocumento: '34689',
                        TipoDocumento: 'RESOLUCION',
                        UnidadEjecutora: '1',
                        Movimientos: {}
                    },
                ],
                ApropiacionInicial: 9468710000,
                Modificaciones: 0,
                Aprobado: 9468710000,
                Rezago: 0,
                Enero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Febrero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Marzo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Abril: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Mayo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Junio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Julio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Agosto: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Septiembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Octubre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Noviembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Diciembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
            },
            {
                Rubro: {
                    Vigencia: 0,
                    Nombre: 'Administrativos',
                    Descripcion: 'Administrativos',
                    FechaCreacion: '2021-01-28T03:45:08.914Z',
                    FechaModificacion: '2021-01-28T03:45:08.914Z',
                    Activo: false,
                    Codigo: '3-01-001-01-01-01-0001-01',
                    Hijos: [],
                    Padre: '3-01-001-01-01-01-0001',
                    UnidadEjecutora: '1',
                    Bloqueado: true,
                    Apropiaciones: true
                },
                Fuentes: [
                    {
                        Vigencia: 2020,
                        Nombre: 'Recursos del Balance Estampilla UD Ley 1825 de 2020',
                        Descripcion: 'Recursos del Balance Estampilla UD Ley 1825 de 2020',
                        Codigo: '2414',
                        TipoFuente: null,
                        ValorInicial: 20000000000,
                        ValorActual: 0,
                        Estado: 'distribuida',
                        Rubros: {},
                        NumeroDocumento: '34689',
                        TipoDocumento: 'RESOLUCION',
                        UnidadEjecutora: '1',
                        Movimientos: {}
                    },
                ],
                ApropiacionInicial: 9468710000,
                Modificaciones: 0,
                Aprobado: 9468710000,
                Rezago: 0,
                Enero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Febrero: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Marzo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Abril: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Mayo: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Junio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Julio: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Agosto: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Septiembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Octubre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Noviembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
                Diciembre: {
                    Proyectado: 669473383,
                    Ejecutado: 669473383,
                    Porcentaje: 1,
                },
            }
        ]
    }

];

export const CONFIGURACION_TABLA_REPORTE = {
    showColumnTitle: true,
    subtitle: {
        name: '',
        class: 'text-center text-light bg-primary text-uppercase',
    },
    dataConfig: [
        {
            key: 'Rubro',
            title: {
                name: 'Codigo Rubro',
                class: 'text-center px-5 text-nowrap',
            },
            pipe: {
                class: 'text-left text-nowrap align-middle',
                type: 'custom',
                config: [
                    (data: any) => {
                        return data.Codigo;
                    }
                ], //
            }
        },
        {
            key: 'Rubro',
            title: {
                name: 'Nombre Rubro',
                class: 'text-center px-5 text-nowrap',
            },
            pipe: {
                class: 'text-left text-nowrap align-middle',
                type: 'custom',
                config: [
                    (data: any) => {
                        return data.Nombre;
                    }
                ], //
            }
        },
        {
            key: 'CodigoFuentes',
            title: {
                name: 'Codigo Fuente',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify align-middle',
                isArray: true,
            }
        },
        {
            key: 'NombreFuentes',
            title: {
                name: 'Nombre Fuente Financiamiento',
                class: 'text-center px-5 text-nowrap',
            },
            pipe: {
                class: 'text-justify align-start',
                isArray: true,
            }
        },
        {
            key: 'ApropiacionInicial',
            title: {
                name: 'Apropiacion Inicial',
                class: 'text-center px-5 text-nowrap',
            },
            pipe: {
                type: 'currency',
                config: [
                    '$',
                    'symbol',
                    '1.2-2',
                    'en-US'
                ],
                class: 'text-right align-middle px-0',
            }
        },
        {
            key: 'Modificaciones',
            title: {
                name: 'Modificaciones',
                class: 'text-center px-5',
            },
            pipe: {
                type: 'currency',
                config: [
                    '$',
                    'symbol',
                    '1.2-2',
                    'en-US'
                ],
                class: 'text-right align-middle px-0',
            }
        },
        {
            key: 'Enero',
            title: {
                name: 'Enero',
                class: 'text-center px-5',
            },
            pipe: {
                class: '',
            },
            objectKeys: [
                {
                    key: 'Proyectado',
                    title: {
                        name: 'Proyectado',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'Ejecutado',
                    title: {
                        name: 'Ejecutado',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'Porcentaje',
                    title: {
                        name: '%',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'percent',
                        config: [
                            '1.2-2'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
            ]
        },
        {
            key: 'Febrero',
            title: {
                name: 'Febrero',
                class: 'text-center px-5',
            },
            pipe: {
                class: '',
            },
            objectKeys: [
                {
                    key: 'Proyectado',
                    title: {
                        name: 'Proyectado',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'Ejecutado',
                    title: {
                        name: 'Ejecutado',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'Porcentaje',
                    title: {
                        name: '%',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'percent',
                        config: [
                            '1.2-2'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
            ]
        },
        {
            key: 'Marzo',
            title: {
                name: 'Marzo',
                class: 'text-center px-5',
            },
            pipe: {
                class: '',
            },
            objectKeys: [
                {
                    key: 'Proyectado',
                    title: {
                        name: 'Proyectado',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'Ejecutado',
                    title: {
                        name: 'Ejecutado',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'Porcentaje',
                    title: {
                        name: '%',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'percent',
                        config: [
                            '1.2-2'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
            ]
        },
        {
            key: 'Abril',
            title: {
                name: 'Abril',
                class: 'text-center px-5',
            },
            pipe: {
                class: '',
            },
            objectKeys: [
                {
                    key: 'Proyectado',
                    title: {
                        name: 'Proyectado',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'Ejecutado',
                    title: {
                        name: 'Ejecutado',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'Porcentaje',
                    title: {
                        name: '%',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'percent',
                        config: [
                            '1.2-2'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
            ]
        },
        {
            key: 'Mayo',
            title: {
                name: 'Mayo',
                class: 'text-center px-5',
            },
            pipe: {
                class: '',
            },
            objectKeys: [
                {
                    key: 'Proyectado',
                    title: {
                        name: 'Proyectado',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'Ejecutado',
                    title: {
                        name: 'Ejecutado',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'Porcentaje',
                    title: {
                        name: '%',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'percent',
                        config: [
                            '1.2-2'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
            ]
        },
        {
            key: 'Junio',
            title: {
                name: 'Junio',
                class: 'text-center px-5',
            },
            pipe: {
                class: '',
            },
            objectKeys: [
                {
                    key: 'Proyectado',
                    title: {
                        name: 'Proyectado',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'Ejecutado',
                    title: {
                        name: 'Ejecutado',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'Porcentaje',
                    title: {
                        name: '%',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'percent',
                        config: [
                            '1.2-2'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
            ]
        },
        {
            key: 'Julio',
            title: {
                name: 'Julio',
                class: 'text-center px-5',
            },
            pipe: {
                class: '',
            },
            objectKeys: [
                {
                    key: 'Proyectado',
                    title: {
                        name: 'Proyectado',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'Ejecutado',
                    title: {
                        name: 'Ejecutado',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'Porcentaje',
                    title: {
                        name: '%',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'percent',
                        config: [
                            '1.2-2'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
            ]
        },
        {
            key: 'Agosto',
            title: {
                name: 'Agosto',
                class: 'text-center px-5',
            },
            pipe: {
                class: '',
            },
            objectKeys: [
                {
                    key: 'Proyectado',
                    title: {
                        name: 'Proyectado',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'Ejecutado',
                    title: {
                        name: 'Ejecutado',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'Porcentaje',
                    title: {
                        name: '%',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'percent',
                        config: [
                            '1.2-2'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
            ]
        },
        {
            key: 'Septiembre',
            title: {
                name: 'Septiembre',
                class: 'text-center px-5',
            },
            pipe: {
                class: '',
            },
            objectKeys: [
                {
                    key: 'Proyectado',
                    title: {
                        name: 'Proyectado',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'Ejecutado',
                    title: {
                        name: 'Ejecutado',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'Porcentaje',
                    title: {
                        name: '%',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'percent',
                        config: [
                            '1.2-2'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
            ]
        },
        {
            key: 'Octubre',
            title: {
                name: 'Octubre',
                class: 'text-center px-5',
            },
            pipe: {
                class: '',
            },
            objectKeys: [
                {
                    key: 'Proyectado',
                    title: {
                        name: 'Proyectado',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'Ejecutado',
                    title: {
                        name: 'Ejecutado',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'Porcentaje',
                    title: {
                        name: '%',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'percent',
                        config: [
                            '1.2-2'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
            ]
        },
        {
            key: 'Noviembre',
            title: {
                name: 'Noviembre',
                class: 'text-center px-5',
            },
            pipe: {
                class: '',
            },
            objectKeys: [
                {
                    key: 'Proyectado',
                    title: {
                        name: 'Proyectado',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'Ejecutado',
                    title: {
                        name: 'Ejecutado',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'Porcentaje',
                    title: {
                        name: '%',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'percent',
                        config: [
                            '1.2-2'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
            ]
        },
        {
            key: 'Diciembre',
            title: {
                name: 'Diciembre',
                class: 'text-center px-5',
            },
            pipe: {
                class: '',
            },
            objectKeys: [
                {
                    key: 'Proyectado',
                    title: {
                        name: 'Proyectado',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'Ejecutado',
                    title: {
                        name: 'Ejecutado',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'currency',
                        config: [
                            '$',
                            'symbol',
                            '1.2-2',
                            'en-US'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
                {
                    key: 'Porcentaje',
                    title: {
                        name: '%',
                        class: 'text-center px-5',
                    },
                    pipe: {
                        type: 'percent',
                        config: [
                            '1.2-2'
                        ],
                        class: 'text-right align-middle px-0',
                    }
                },
            ]
        },
        {
            key: 'Rezago',
            title: {
                name: 'Rezago',
                class: 'text-center px-5',
            },
            pipe: {
                type: 'currency',
                config: [
                    '$',
                    'symbol',
                    '1.2-2',
                    'en-US'
                ],
                class: 'text-right align-middle px-0',
            }
        },
        {
            key: 'NoEjecutado',
            title: {
                name: 'No Ejecutado',
                class: 'text-center px-5',
            },
            pipe: {
                type: 'currency',
                config: [
                    '$',
                    'symbol',
                    '1.2-2',
                    'en-US'
                ],
                class: 'text-right align-middle px-0',
            }
        },

    ],
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    sort: true,
    filter: false,
};
