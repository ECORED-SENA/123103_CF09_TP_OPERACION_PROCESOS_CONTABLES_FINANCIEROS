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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/123103_CF09_DU.zip',
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
      termino: 'Asignación de costos',
      significado:
        'Proceso mediante el cual los costos directos e indirectos se distribuyen a un producto, servicio, orden o centro de costo, según criterios técnicos definidos.',
    },
    {
      termino: 'Base de asignación',
      significado:
        'Medida utilizada para distribuir costos indirectos entre productos, servicios o procesos, como horas de mano de obra, horas máquina o unidades producidas.',
    },
    {
      termino: 'Centro de costo',
      significado:
        'Área, proceso o dependencia de la empresa donde se acumulan, controlan o analizan costos para su posterior distribución o evaluación.',
    },
    {
      termino: 'Costo de operación',
      significado:
        'Valor de los recursos consumidos en la producción de bienes o en la prestación de servicios dentro de una empresa.',
    },
    {
      termino: 'Costo directo',
      significado:
        'Costo que puede identificarse y asociarse de manera inmediata con un producto, servicio, orden o actividad específica.',
    },
    {
      termino: 'Costo indirecto',
      significado:
        'Costo necesario para la operación, pero que no puede relacionarse de manera inmediata con un solo objeto de costo y requiere un criterio de asignación.',
    },
    {
      termino: 'Costeo por actividades',
      significado:
        'Metodología que asigna los costos indirectos a los productos o servicios según las actividades realizadas y los generadores de costo asociados.',
    },
    {
      termino: 'Costeo por órdenes',
      significado:
        'Sistema de costeo que acumula y calcula los costos por pedido, lote o trabajo específico.',
    },
    {
      termino: 'Costeo por procesos',
      significado:
        'Sistema de costeo utilizado cuando la producción es continua y homogénea, acumulando los costos por departamentos o etapas del proceso.',
    },
    {
      termino: 'Costos indirectos de fabricación (CIF)',
      significado:
        'Conjunto de costos relacionados con la producción que no se identifican directamente con una unidad específica, como energía, supervisión, depreciación o mantenimiento.',
    },
    {
      termino: 'Hoja de costeo',
      significado:
        'Formato físico o digital donde se consolidan materiales, mano de obra y costos indirectos para calcular el costo total y unitario de un producto o servicio.',
    },
    {
      termino: 'Mano de obra directa',
      significado:
        'Trabajo del personal que interviene de manera directa en la fabricación del producto o en la ejecución principal del servicio.',
    },
    {
      termino: 'Materia prima',
      significado:
        'Material principal que se transforma o se incorpora al producto durante el proceso productivo.',
    },
    {
      termino: 'Requisición de materiales',
      significado:
        'Documento que registra la salida de materiales del almacén para ser utilizados en una orden, lote, proceso o actividad determinada.',
    },
    {
      termino: 'Tarjeta de tiempo',
      significado:
        'Registro utilizado para controlar el tiempo trabajado por un operario o empleado en una orden, proceso, actividad o servicio específico.',
    },
  ],
  referencias: [
    {
      referencia:
        'Academia EBC. (2025, febrero 27). Sistema de costeo por procesos [Vídeo]. YouTube.',
      link: 'https://www.youtube.com/watch?v=XeZuzD_Ev60',
    },
    {
      referencia:
        'Cuevas, C. F. (2001). Contabilidad de costos: enfoque gerencial y de gestión (2.ª ed.). Pearson Educación de Colombia.',
      link: '',
    },
    {
      referencia:
        'Cuevas, C. F. (2010). Contabilidad de costos: enfoque gerencial y de gestión (3.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Díaz, D. (2025, junio 15). Tabla de costos en Excel para principiantes [Vídeo]. YouTube.',
      link: 'https://www.youtube.com/watch?v=01pIjU3cIXU',
    },
    {
      referencia:
        'Edutin Academy. (2025, octubre 11). Costeo basado en actividades (ABC): curso de contabilidad [Vídeo]. YouTube.',
      link: 'https://www.youtube.com/watch?v=Cxx6t5_V3s0',
    },
    {
      referencia:
        'Función Pública. (2015). Decreto 2420 de 2015, Anexo 2. Gestor Normativo.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745',
    },
    {
      referencia:
        'García Colín, J. (2014). Contabilidad de costos (4.ª ed.). McGraw-Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Hansen, D. R. (2007). Administración de costos: contabilidad y control (5.ª ed.). Cengage Learning.',
      link: '',
    },
    {
      referencia:
        'Hansen, D. R., & Mowen, M. M. (2003). Administración de costos: contabilidad y control. International Thomson Editores.',
      link: '',
    },
    {
      referencia:
        'Horngren, C. T. (2012). Contabilidad de costos: un enfoque gerencial. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Ingeniería Industrial Easy. (2024, agosto 30). Costeo ABC o costeo basado en actividades: caso práctico [Vídeo]. YouTube.',
      link: 'https://www.youtube.com/watch?v=DNWirlDkyg4',
    },
    {
      referencia:
        'Jeison Stiven Aya Gaita. (2020, junio 13). Cómo hacer una tabla de costos en Excel [Vídeo]. YouTube.',
      link: 'https://www.youtube.com/watch?v=Wqr-5t-RFXg',
    },
    {
      referencia:
        'Luna-Altamirano, K. A., & Moreno-Narváez, V. P. (2020). Sistema de costos basado en actividades ABC/ABM como herramienta de gestión en C. V. Confecciones Jevalusa. CIENCIAMATRIA.',
      link: '',
    },
    {
      referencia:
        'MayuGo. (2023, marzo 12). Costos por órdenes de producción/trabajo: curso de costos de producción [Vídeo]. YouTube.',
      link: 'https://www.youtube.com/watch?v=GN7HsLEBn5U',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015). Decreto 2420 de 2015. Gestor Normativo.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745',
    },
    {
      referencia:
        'Universidad Católica San Pablo. (2015, octubre 13). Costos por procesos continuos - Costos II - #UCSPTutoriales [Vídeo]. YouTube.',
      link: 'https://www.youtube.com/watch?v=u21i7Z1T5Kg',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },

    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Tello Zambrano',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },

    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan José Calderon Gutiérrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodríguez',
          cargo: 'Desarrollador fullstack',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },

    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
