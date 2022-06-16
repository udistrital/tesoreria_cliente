export const CONF_INGRESOS: any = {
  showColumnTitle: true,
  dataConfig: [
    {
      key: 'vigencia',
      title: {
        class: 'text-center',
        label_i18n: 'GLOBAL.vigencia'
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'consecutivo',
      title: {
        class: 'text-center',
        label_i18n: 'GLOBAL.consecutivo'
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'centroGestor',
      title: {
        class: 'text-center',
        label_i18n: 'GLOBAL.centro_gestor'
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'areaFuncional',
      title: {
        class: 'text-center',
        label_i18n: 'GLOBAL.area_funcional'
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'valorTotal',
      title: {
        class: 'text-center',
        label_i18n: 'GLOBAL.valor_total'
      },
      pipe: {
        type: 'currency',
        config: [],
        class: 'text-center',
      },
    },
    {
      key: 'fecha',
      title: {
        class: 'text-center',
        label_i18n: 'GLOBAL.fecha'
      },
      pipe: {
        class: 'text-justify',
      },
    },
  ],
  rowActions: {
    title: {
      class: 'text-center',
      actionClass: 'd-flex flex-row justify-content-around align-middle',
      label_i18n: 'GLOBAL.detalles'
    },
    actions: [
      {
        icon: 'fas fa-eye',
        class: 'p-2',
        label_i18n_name: 'ACCION.NOMBRE.ver_ingreso',
        label_i18n_title: 'ACCION.TITULO.ver_ingreso'
      },
    ],
  },
  tableActions: [
    {
      icon: 'fas fa-plus py-1 px-2',
      class: 'px-2',
      disabled: true,
      label_i18n_name: 'ACCION.NOMBRE.nuevo_ingreso',
      label_i18n_title: 'ACCION.TITULO.nuevo_ingreso'
    },
  ],
  noData: {
    label_i18n: 'AVISOS.sin_elementos_asociados',
    class: 'text-center',
  },
  sort: true,
  filter: true,
};
export const CONF_CONSIGNACION: any = {
  showColumnTitle: true,
  dataConfig: [
    {
      key: 'oficina',
      title: {
        label_i18n: 'CONSIGNACION.oficina',
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'ciudad',
      title: {
        label_i18n: 'CONSIGNACION.ciudad',
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'fechaRecaudo',
      title: {
        label_i18n: 'CONSIGNACION.fecha_recaudo',
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'depositante',
      title: {
        label_i18n: 'CONSIGNACION.depositante',
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'referencia1',
      title: {
        label_i18n: 'CONSIGNACION.referencia_1',
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'referencia2',
      title: {
        label_i18n: 'CONSIGNACION.referencia_2',
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'valorEfectivo',
      title: {
        label_i18n: 'CONSIGNACION.valor_efectivo',
        class: 'text-center',
      },
      pipe: {
        type: 'currency',
        config: [],
        class: 'text-center',
      },
    },
    {
      key: 'valorCheque',
      title: {
        label_i18n: 'CONSIGNACION.valor_cheque',
        class: 'text-center',
      },
      pipe: {
        type: 'currency',
        config: [],
        class: 'text-center',
      },
    },
    {
      key: 'valorDatafono',
      title: {
        label_i18n: 'CONSIGNACION.valor_datafono',
        class: 'text-center',
      },
      pipe: {
        type: 'currency',
        config: [],
        class: 'text-center',
      },
    },
    {
      key: 'valorTotal',
      title: {
        label_i18n: 'CONSIGNACION.valor_total',
        class: 'text-center',
      },
      pipe: {
        type: 'currency',
        config: [],
        class: 'text-center',
      },
    },
    {
      key: 'otrasReferencias',
      title: {
        label_i18n: 'CONSIGNACION.numero_otras_referencias',
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
  ],
  noData: {
    label_i18n: 'AVISOS.sin_elementos_asociados',
    class: 'text-center',
  },
  sort: true,
  filter: true,
};
export const CONF_RUBROS: any = {
  showColumnTitle: true,
  dataConfig: [
    {
      key: 'numeroRubro',
      title: {
        class: 'text-center',
        label_i18n: "RUBRO.numero_rubro"
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'nombreRubro',
      title: {
        class: 'text-center',
        label_i18n: "RUBRO.nombre_rubro"
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'valor',
      title: {
        class: 'text-center',
        label_i18n: "GLOBAL.valor",
      },
      pipe: {
        type: 'currency',
        config: [],
        class: 'text-center',
      },
    },
  ],
  sort: false,
  filter: false,
};
export const CONF_CONTABILIDAD: any = {
  showColumnTitle: true,
  dataConfig: [
    {
      key: 'secuencia',
      title: {
        label_i18n: "CONTABILIZACION.secuencia",
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'tercero',
      title: {
        label_i18n: "CONTABILIZACION.tercero",
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'numeroCuenta',
      title: {
        label_i18n: "CONTABILIZACION.numero_cuenta",
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'nombreCuenta',
      title: {
        label_i18n: "CONTABILIZACION.nombre_cuenta",
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'detalle',
      title: {
        label_i18n: "CONTABILIZACION.detalle",
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'debito',
      title: {
        label_i18n: "CONTABILIZACION.debito",
        class: 'text-center',
      },
      pipe: {
        type: 'currency',
        config: [],
        class: 'text-center',
      },
    },
    {
      key: 'credito',
      title: {
        label_i18n: "CONTABILIZACION.credito",
        class: 'text-center',
      },
      pipe: {
        type: 'currency',
        config: [],
        class: 'text-center',
      },
    },
  ],
  noData: {
    label_i18n: "AVISOS.sin_elementos_asociados",
    class: 'text-center',
  },
  sort: true,
  filter: true,
};
export const CONF_CODIGO_BARRAS: any = {
  showColumnTitle: true,
  dataConfig: [
    {
      key: 'codigoOficina',
      title: {
        label_i18n: "CODIGO_BARRAS.codigo_oficina",
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'oficina',
      title: {
        label_i18n: "CONSIGNACION.oficina",
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'ciudad',
      title: {
        label_i18n: "CONSIGNACION.ciudad",
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'fechaRecaudo',
      title: {
        label_i18n: "CONSIGNACION.fecha_recaudo",
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'documento',
      title: {
        label_i18n: "CODIGO_BARRAS.documento",
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'tran',
      title: {
        label_i18n: "CODIGO_BARRAS.transaccion",
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'valorEfectivo',
      title: {
        label_i18n: "CONSIGNACION.valor_efectivo",
        class: 'text-center',
      },
      pipe: {
        type: 'currency',
        config: [],
        class: 'text-center',
      },
    },
    {
      key: 'valorCheque',
      title: {
        label_i18n: "CONSIGNACION.valor_cheque",
        class: 'text-center',
      },
      pipe: {
        type: 'currency',
        config: [],
        class: 'text-center',
      },
    },
    {
      key: 'valorDatafono',
      title: {
        label_i18n: "CONSIGNACION.valor_datafono",
        class: 'text-center',
      },
      pipe: {
        type: 'currency',
        config: [],
        class: 'text-center',
      },
    },
    {
      key: 'valorTotal',
      title: {
        label_i18n: "CONSIGNACION.valor_total",
        class: 'text-center',
      },
      pipe: {
        type: 'currency',
        config: [],
        class: 'text-center',
      },
    },
    {
      key: 'codigoTrans',
      title: {
        label_i18n: "CODIGO_BARRAS.codigo_transaccion",
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'referencia1',
      title: {
        label_i18n: "CONSIGNACION.referencia_1",
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
  ],
  noData: {
    label_i18n: "AVISOS.sin_elementos_asociados",
    class: 'text-center',
  },
  sort: true,
  filter: true,
};
export const CONF_APORTES: any = {
  showColumnTitle: true,
  dataConfig: [
    {
      key: 'fechaConsignacion',
      title: {
        label_i18n: "APORTES.fecha_consignacion",
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'entidadFinanciera',
      title: {
        label_i18n: "APORTES.entidad_financiera",
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'numeroCuenta',
      title: {
        label_i18n: "CUENTA_BANCARIA.numero_cuenta",
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'tipoCuenta',
      title: {
        label_i18n: "CUENTA_BANCARIA.tipo_cuenta",
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'vigencia',
      title: {
        label_i18n: "GLOBAL.vigencia",
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'valor',
      title: {
        label_i18n: "GLOBAL.valor",
        class: 'text-center',
      },
      pipe: {
        type: 'currency',
        config: [],
        class: 'text-center',
      },
    },
    {
      key: 'tipoDocumento',
      title: {
        label_i18n: "APORTES.tipo_documento",
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'numeroDocumento',
      title: {
        label_i18n: "APORTES.numero_documento",
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
    {
      key: 'fechaDocumento',
      title: {
        label_i18n: "APORTES.fecha_documento",
        class: 'text-center',
      },
      pipe: {
        class: 'text-justify',
      },
    },
  ],
  sort: true,
  filter: true,
};

export const TIPOS_INGRESOS: any = [
  {
    Nombre: 'icetex',
    label: 'Icetex',
    label_i18n: "INGRESOS.icetex"
  },
  {
    Nombre: 'barras',
    label: 'Codigo de barras',
    label_i18n: "INGRESOS.codigo_barras"
  },
  {
    Nombre: 'pse',
    label: 'PSE',
    label_i18n: "INGRESOS.pse"
  },
  {
    Nombre: 'ach',
    label: 'ACH',
    label_i18n: "INGRESOS.ach"
  },
  {
    Nombre: 'recaudoLinea',
    label: 'Recaudo en Linea',
    label_i18n: "INGRESOS.recaudo_linea"
  },
  {
    Nombre: 'aportesNacion',
    label: 'Aportes de la Nación',
    label_i18n: "INGRESOS.aportes_nacion"
  },
  {
    Nombre: 'aportesDistrito',
    label: 'Aportes del Distrito',
    label_i18n: "INGRESOS.aportes_distrito"
  },
  {
    Nombre: 'otrasEntidades',
    label: 'Aportes de otras entidades',
    label_i18n: "INGRESOS.aportes_otras_entidades"
  }
];
