export default {
  global: {
    componenteFormativo: 'Gestión de dispositivos de red',
    descripcionCurso:
      'A través de este componente formativo, el aprendiz debe apropiar los elementos y conceptos necesarios requeridos para la gestión y administración de los dispositivos de la red.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
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
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Fundamentos del monitoreo SNMP',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: '¿Qué es el SNMP?',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Componentes básicos de SNMP y sus funcionalidades',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Comandos básicos de SNMP',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Comunicación SNMP normal',
        desarrolloContenidos: true,
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
        download: 'downloads/228183_CF14_DU.zip',
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
      tema: 'Dispositivos gestionados',
      referencia: 'Net Faculty. (2016). <em>SNMP MIB</em> (video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TsANXT0fdV4&t=6s',
    },
  ],
  glosario: [
    {
      termino: 'Administración',
      significado:
        'es el acto de administrar, planificar, controlar y dirigir los diversos recursos de una organización.',
    },
    {
      termino: 'ICMP',
      significado:
        ' <em>Internet Control Message Protocol</em> es el protocolo de control y notificación de errores de Internet.',
    },
    {
      termino: 'IP',
      significado:
        ' <em>Internet Protocol</em>, protocolo para la comunicación de datos digitales, cuya funcionalidad se ubica en la capa de red del modelo OSI.',
    },
    {
      termino: 'OID',
      significado:
        ' <em>Object Identifier</em> es una cadena de tamaño variable de números.',
    },
    {
      termino: 'Protocolo',
      significado:
        'conjunto de reglas que fijan cómo deben comunicarse los diversos componentes de un sistema computacional.',
    },
    {
      termino: 'UDP',
      significado:
        ' <em>User Datagram Protocol</em> es un protocolo de la capa de transporte no orientado a conexión basado en el intercambio de datagramas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arboledas Brihuega, D. (2015). Administración de redes telemáticas. RA-MA Editorial.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/106471',
    },
    {
      referencia:
        'Báez Cheza, J. E. (2017). Diseño e implementación de un modelo de gestión de red para la red de área local del edificio central de la Universidad Técnica del Norte en base al modelo de gestión OSI con el protocolo SNMP (Bachelor´s thesis).',
    },
    {
      referencia:
        'ManageEngine LATAM. (2021). ¿Qué son WMI, CLI, SNMP y para qué sirven?  ManageEngine LATAM.',
      link: 'https://www.youtube.com/watch?v=4E_q_5xjc24',
    },
    {
      referencia:
        'Moreno Pérez, J. C. y Santos González, M. (2015). Sistemas informáticos y redes locales. RA-MA Editorial.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/62492?page=395',
    },
    {
      referencia: 'Net Faculty. (2016). SNMP MIB.',
      link: 'https://www.youtube.com/watch?v=TsANXT0fdV4&t=6s',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Mauricio Tovar Artunduaga',
          cargo: 'Instructor',
          centro:
            'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Jorge Eliécer Loaiza Muñoz',
          cargo: 'Instructor',
          centro:
            'Centro de Diseño e innovación tecnológica industrial - Regional Antioquia',
        },
        {
          nombre: 'Luz Mila Pacheco Fuentes',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Julieth Paola Vital López',
          cargo: 'Corrección de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Cinthia Rocío Trejos Chacón',
          cargo: 'Experta temática',
          centro:
            'Centro de la Industria, la empresa y los servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Deivis Eduard Ramirez Martinez',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de Diseño y Metrología - Regional distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Metodólogo para formación virtual',
          centro:
            'Regional Santander - Centro industrial del diseño y la manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
