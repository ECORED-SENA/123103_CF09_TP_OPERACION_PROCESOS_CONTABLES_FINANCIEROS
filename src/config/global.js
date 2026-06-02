export default {
  global: {
    Name:
      'Elementos, métodos y herramientas para el cálculo de costos de operación',
    Description:
      'Este desarrollo aborda los elementos, metodologías y herramientas requeridas para calcular costos de operación de acuerdo con un sistema de costeo, mediante la identificación de componentes del costo, el levantamiento y organización de información, la asignación de costos directos e indirectos, la aplicación de metodologías de costeo y el uso de herramientas tecnológicas para registrar, verificar y actualizar la información de costos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos para la determinación del costo de operación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Elementos del costo de operación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Estructura del proceso productivo y de servicios',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Clasificación de costos: fijos, variables, directos e indirectos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Normativa contable sobre medición de inventarios y costos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Políticas organizacionales para la determinación de costos y documentación del plan de costeo',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Centros de costo, unidades de medida y levantamiento de información de costos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Conceptos de centros de costo y asignación de costos indirectos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Identificación de centros productivos y administrativos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Unidades base, conversiones, medición con precisión y tolerancias',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Volúmenes de producción, consumos de recursos y datos de origen',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Registros, fuentes de información y plantillas físicas o digitales para el costeo',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Metodologías y procedimientos de costeo por órdenes, procesos y actividades',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Costeo por órdenes: concepto, órdenes de aplicación y requisiciones',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Costeo por procesos: concepto, producción equivalente y procesos de aplicación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Costeo por actividades: concepto y actividades de aplicación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Tarjetas tiempo, asignación de CIF y determinación del costo final',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Selección y aplicación de la metodología de costeo según el tipo de producto o servicio',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estructura de consumos y cálculo de costos de operación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Estructura de consumos de materiales y mano de obra',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Determinación del consumo de materiales, mano de obra directa y costos indirectos de fabricación',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Cálculo unitario, cálculo total y parámetros técnicos del costeo',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Métodos de asignación y verificación del cálculo con datos de origen',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Documentación y trazabilidad del costo de operación',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Herramientas tecnológicas, registro y actualización de costos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Funciones de hoja de cálculo aplicadas al costeo',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Formatos y plantillas organizacionales para el registro de costos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Herramientas tecnológicas para cálculo y análisis de costos',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo:
              'Lineamientos para la actualización de bases de datos de costos',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo:
              'Validación de datos, reportes, integración de sistemas y seguridad de la información',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
