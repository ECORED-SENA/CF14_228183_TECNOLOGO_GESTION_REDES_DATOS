<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos del monitoreo SNMP

    .row.justify-content-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img01.svg' alt="")
      .col-lg-7(data-aos="fade-left")
        p.mb-0 Dentro de la gran variedad de herramientas y aplicaciones para el monitoreo de red, se destaca el protocolo SNMP, el cual es útil a los administradores de la red, debido a que permite la configuración de los parámetros de la red desde una consola central, incluye el reporte estadístico del uso de recursos de red. Este protocolo está pensado para la administración, monitoreo y control de las redes de computadoras, tanto en sus componentes lógicos como físicos, además de ser compatible con una gran cantidad de aplicaciones de red y los principales sistemas operativos, sus siglas en inglés vienen de #[em Simple Network Management Protocol] o Protocolo Simple de Administración de Red, y se define como un protocolo de capa 7 o capa de aplicación.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 ¿Qué es el SNMP?

    p(data-aos="fade-right") En una red bien definida y robusta, implementar este protocolo ayudará a la estabilidad y funcionalidad de la infraestructura tecnológica. El protocolo SNMP forma parte de la familia de protocolos TCP/IP y permite la aplicación del modelo cliente-servidor, para proporcionar las funciones de monitorización de red, principalmente SNMP se encarga de monitorear dispositivos en red como #[em switch] y #[em router], y a su vez, permite monitorear servidores y estaciones de trabajo.
    p.mb-5(data-aos="fade-right") Al hablar de monitoreo de dispositivos en red, se suele escuchar el término SNMP, WMI, CLI, conocidos en el área del monitoreo. Ampliemos un poco sobre su historia.

    SlyderF.mb-5(columnas="col-lg-6" data-aos="zoom-in")
      .tarjeta.BG02.p-4.h-100
        .row.mb-4
          .col-lg-3.col-md-4.col-5
            img(src='@/assets/curso/tema1/img02.svg' alt="")
        p A mediados de 1960, se manejaba un proyecto conocido como #[b Arpanet] por el ejército de los Estados Unidos, en el cual inicio la necesidad de interconectar locaciones remotas. A mediados de 1980, aparecieron nuevos sistemas de desarrollo y nuevos sistemas operativos:
        ul.lista-ul--color(style="font-weight: 900")
          li(style="margin-bottom: 2px")
            i.fas.fa-project-diagram(style="color: #6E40FC;")
            | 1981 MSDOS
          li(style="margin-bottom: 2px")
            i.fas.fa-project-diagram(style="color: #6E40FC;")
            .h5.mb-0 1984 Macintosh #[em System Software]
          li(style="margin-bottom: 2px")
            i.fas.fa-project-diagram(style="color: #6E40FC;")
            | 1985 Windows
      .tarjeta.BG02.p-4.h-100
        .row.mb-4
          .col-lg-3.col-md-4.col-5
            img(src='@/assets/curso/tema1/img03.svg' alt="")
        p.mb-0 Con el surgimiento de las redes, se presentaron variables y comportamientos desconocidos, por lo cual nace la necesidad de poder monitorear la comunicación entre los distintos sistemas, por lo cual en los años 90 aparece un nuevo concepto: SNMP - #[em Simple Network Management Protocol] (Protocolo Simple de gestión de red), un protocolo que surge precisamente para suplir esta necesidad.
      .tarjeta.BG02.p-4.h-100
        .row.mb-4
          .col-lg-3.col-md-4.col-5
            img(src='@/assets/curso/tema1/img04.svg' alt="")
        p Con el SNMP, nacen conceptos en relación con la implementación de dicho protocolo como lo es el MIB:
        .h5.mb-1 M #[em Management]
        .h5.mb-1 I #[em Information]
        .h5 B #[em Base]
        p Esta conforma una base de datos de elementos de configuración dentro del SNMP, y también se encuentran los OID:
        .h5.mb-1 O #[em Object]
        .h5 ID #[em Identifier]
        p.mb-0 Que hacen referencia a los elementos de configuración del mismo.
      .tarjeta.BG02.p-4.h-100
        .row.mb-4
          .col-lg-3.col-md-4.col-5
            img(src='@/assets/curso/tema1/img05.svg' alt="")
        p.mb-0 SNMP es un protocolo de la capa de aplicación que funciona sobre el puerto UDP 161, permite ejercer una comunicación hacia el dispositivo destino y basados en estos dos elementos: el MIB y el OID, que corresponden a cada una de las características del dispositivo monitoreado o gestionado, permite obtener métricas del estado de la red como lo son: disco, memoria, procesamiento, temperatura, y estado de las interfaces. Esto nos da un gran avance en cuanto a poder parametrizar y medir umbrales específicos en el comportamiento del sistema.
      .tarjeta.BG02.p-4.h-100
        .row.mb-4
          .col-lg-3.col-md-4.col-5
            img(src='@/assets/curso/tema1/img06.svg' alt="")
        p.mb-0 Con el surgimiento de Microsoft, se desarrollan nuevos protocolos, permitiendo mayor contextualización en los procesos y servicios de este tipo de sistema operativo, como resultado se desarrolla WMI - #[em Windows Management Instrumentation], enfocado en obtener métricas similares a SNMP, pero específicamente para los distintos sistemas operativos desarrollados por Microsoft
      .tarjeta.BG02.p-4.h-100
        .row.mb-4
          .col-lg-3.col-md-4.col-5
            img(src='@/assets/curso/tema1/img07.svg' alt="")
        p Nace la necesidad en la cual muchos dispositivos de red o las distintas distribuciones de Linux y kernel UNIX necesitaban acceder para obtener métricas de estos tipos de sistemas, los cuales no se podían obtener mediante SNMP, por esta razón se accedía mediante el CLI o línea de comandos. Este protocolo funciona usualmente generando una conexión cifrada puede ser establecida mediante el puerto 22, que permite conectarnos a dichos sistemas y obtener una comunicación y una escalación a nivel de privilegios altos, obteniendo métricas adicionales complementando el ciclo de monitoreo de red.

    p.mb-5(data-aos="fade-right") La característica más destacable del SNMP es que la información monitorizada son parámetros estandarizados, lo cual permite la aplicación de este protocolo a una gran variedad de dispositivos en red de diversos fabricantes. Una gran mayoría de dispositivos de red vienen integrados con el protocolo SNMP, mediante un agente que normalmente se debe habilitar y configurar para realizar el monitoreo de red.

    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.BG03.p-4
          .row.align-items-center
            .col-lg-9.order-lg-1.order-2
              p(data-aos="fade-right") Dentro de las ventajas que ofrece la implementación del protocolo SNMP se encuentran:
              ul.lista-ul--color
                li(style="margin-bottom: 2px" data-aos="fade-right")
                  i.fas.fa-project-diagram(style="color: #6E40FC;")
                  .h5.mb-1 Centralizar las operaciones de los dispositivos en red que facilita el monitoreo y la administración.
                li(style="margin-bottom: 2px" data-aos="fade-right")
                  i.fas.fa-project-diagram(style="color: #6E40FC;")
                  .h5.mb-1 Permitir mecanismos de gestión y monitoreo que garanticen la detección de problemas a tiempo.
                li(style="margin-bottom: 2px" data-aos="fade-right")
                  i.fas.fa-project-diagram(style="color: #6E40FC;")
                  .h5.mb-1 Mejorar el aprovechamiento de los recursos disponibles de la red.
                li(style="margin-bottom: 2px" data-aos="fade-right")
                  i.fas.fa-project-diagram(style="color: #6E40FC;")
                  .h5.mb-1 Controlar cambios y actualizaciones.
            .col-3.d-lg-none.d-flex
            .col-lg-4.col-5.img-01.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              .px-4
                img(src='@/assets/curso/tema1/img08.svg' alt="")

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Componentes básicos de SNMP y sus funcionalidades

    p.mb-5(data-aos="fade-right") Según el autor Moreno (2015), el protocolo SNMP basa su funcionamiento en dos entidades conocidas como:

    .row.justify-content-center.mb-5
      .col-xl-5.col-lg-6.mb-4(data-aos="fade-right")
        .tarjeta.color-primario.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-3.col-5.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img09.svg' alt="")
            .col-9
              .h5.text-white NMS (#[em Network Management Station])
              p.text-white.mb-0 Es un servidor que mediante #[em software], ejecuta aplicaciones que se encargan de realizar a cabo la supervisión y control de los dispositivos administrados.
      .col-xl-5.col-lg-6.mb-4(data-aos="fade-left")
        .tarjeta.color-primario.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-3.col-5.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img10.svg' alt="")
            .col-9
              .h5.text-white Agentes de gestión
              p.text-white.mb-0 Son componentes de #[em software] instalados en el dispositivo de red que se desea monitorizar, y principalmente estos son los que envían la información a los NMS.

    p(data-aos="fade-right") Para su funcionamiento, tanto los agentes como el NMS usan una estructura de datos normalizada conocida como MIB (#[em Management Information Base]).
    p(data-aos="fade-right") Aquí se almacena información de gestión, sirve para elaborar estadísticas y otros informes que permiten al administrador tomar decisiones sobre la funcionalidad y la seguridad de los nodos administrados de la red.
    p.mb-5(data-aos="fade-right") Para ampliar la información, lo invitamos a ver el siguiente video.

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2kyg4XB3XmY?si=9IKSO9AxUMcGoixu" title="Protocolo SNMP" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Protocolo SNMP

    p.mb-5(data-aos="fade-right") La comunicación entre los dispositivos gestionados y la entidad gestora NMS, se pueden producir de dos formas diferentes:

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4(data-aos="fade-right")
        .tarjeta.BG04.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-3.col-5.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img11.svg' alt="")
            .col-9
              p.mb-0 Mensajes de solicitud/respuesta, comunicación establecida entre el NMS y el agente. Estos últimos responden con la información solicitada, si no se recibe respuesta el dispositivo no está disponible.
      .col-lg-6.mb-4(data-aos="fade-left")
        .tarjeta.BG04.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-3.col-5.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img12.svg' alt="")
            .col-9
              p.mb-0 Mensajes TRAP, estos son mensajes que envía el agente al NMS cuando quiere notificar algún dato.

    .row.mb-5
      .col-auto(data-aos="fade-right")
        .BGR05.px-5.py-2
          .h3.text-white.mb-0 Administrador de SNMP

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2
        p(data-aos="fade-right") Es un ente de control que funciona como una consola centralizada, que ayuda a la comunicación con los dispositivos de la red, los cuales han sido establecidos o implementados por los agentes del protocolo SNMP. Es decir, el administrador de SNMP o mejor conocido como NMS, está al tanto de todo lo que sucede con los elementos que componen la red de información.
        p(data-aos="fade-right") En una red puede existir uno o varios NMS, su función principal es la de gestionar/monitorizar la red. Estos dispositivos almacenan en una base de datos denominada MIB o base de información de gestión, y a su vez cada agente tiene almacenada información en su MIB local.
        p.mb-0(data-aos="fade-right") Funciones clave del administrador de SNMP:
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img13.png' alt="")

    .row.justify-content-center.mb-5
      .col-lg-3.col-sm-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.color-primario.px-4.py-3.h-100.text-white
          p.mb-0 #[b 1.] Consultar a los agentes.
      .col-lg-3.col-sm-6.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta.color-primario.px-4.py-3.h-100.text-white
          p.mb-0 #[b 2]. Recibir respuestas de los agentes.
      .col-lg-3.col-sm-6.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta.color-primario.px-4.py-3.h-100.text-white
          p.mb-0 #[b 3.] Establecer variables en los agentes.
      .col-lg-3.col-sm-6.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta.color-primario.px-4.py-3.h-100.text-white
          p.mb-0 #[b 4.] Reconocer los eventos asíncronos de los agentes.

    .BGM06.px-md-5.px-4.py-4.mb-5
      .row.mb-5
        .col-auto(data-aos="fade-right")
          .BGR05.px-5.py-2
            .h3.text-white.mb-0 Dispositivos gestionados

      .row.justify-content-center.align-items-center
        .col-lg-9.order-lg-1.order-2
          p(data-aos="fade-right") También son conocidos como dispositivos administrados, son todos aquellos elementos de la red de datos que necesitan ser monitorizados para verificar su desempeño, contienen un agente SNMP y se ubican en una red administrada. Una gran cantidad de dispositivos de red pueden hacer parte de los dispositivos gestionados como lo son el #[em router, switch, firewall], UPS, impresora, entre otros. También puede ser cualquier servidor físico o virtual, incluyendo cualquier dispositivo con sistema operativo Windows, Linux, Solaris, que cuente con una dirección IP y un agente SNMP; los dispositivos gestionados ponen a disposición del NMS la información recolectada y almacenada en el MIB.
          p.mb-0(data-aos="fade-right") La MIB que corresponde a la Base de Información de Administración, es principalmente donde se recopila la información para administrar el dispositivo de red. Las MIB se componen de objetos administrados que se encuentran debidamente identificados con un OID (identificador de objeto).  A continuación, se presenta el esquema de diagrama de árbol MIB.
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img14.svg' alt="")

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.BG06.p-4
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Figura 1.
            span Diagrama de árbol MIB
          .px-lg-5
            .BGR07.p-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/img15.svg' alt="Imagen que presenta el esquema de diagrama de árbol MIB.")
            figcaption(data-aos="fade-right") Nota. <span style="font-weight: 400">Tomado de <a href="https://www.manageengine.com/es/network-monitoring/what-is-snmp.html" target="_blank" style="color: #111e61; text-decoration: underline; font-weight: 900">manageengine</a></span>

    .row.mb-5
      .col-auto(data-aos="fade-right")
        .BGR05.px-5.py-2
          .h3.text-white.mb-0 Agente SNMP

    .h5(data-aos="fade-right") Según Arboledas (2015, p.117):
    p.mb-5(data-aos="fade-right") Es un #[em software] especial que se aloja o instala en los dispositivos que constituyen la red, dicho #[em software] recopila constantemente información del dispositivo, la cual es enviada al administrador para que este la analice y determine si existe algún inconveniente con dicho dispositivo y así tomar las acciones pertinentes que garanticen el correcto funcionamiento de la red.

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.BG03.p-4
          .row.align-items-center
            .col-lg-9.order-lg-1.order-2
              p(data-aos="fade-right") Funciones clave del agente del SNMP:
              ul.lista-ul--color
                li(style="margin-bottom: 2px" data-aos="fade-right")
                  i.fas.fa-project-diagram(style="color: #6E40FC;")
                  .h5.mb-1 Recopila información de gestión sobre su entorno local.
                li(style="margin-bottom: 2px" data-aos="fade-right")
                  i.fas.fa-project-diagram(style="color: #6E40FC;")
                  .h5.mb-1 Almacena y recupera la información de gestión según se define en el MIB.
                li(style="margin-bottom: 2px" data-aos="fade-right")
                  i.fas.fa-project-diagram(style="color: #6E40FC;")
                  .h5.mb-1 Señala un evento al administrador.
                li(style="margin-bottom: 2px" data-aos="fade-right")
                  i.fas.fa-project-diagram(style="color: #6E40FC;")
                  .h5.mb-1 Actúa como un #[em proxy] para algún nodo de la red no gestionable de SNMP.
            .col-3.d-lg-none.d-flex
            .col-lg-4.col-5.img-01.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              .px-4
                img(src='@/assets/curso/tema1/img16.svg' alt="")
    br
    p(data-aos="fade-right") Un agente posee el conocimiento local de información de gestión (memoria libre, número de paquetes IP recibidos, rutas, entre otros), la cual es traducida a un formato compatible con SNMP y organizada en jerarquías. Todos los agentes se configuran con una cadena de verificación mejor conocida como comunidad.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Comandos básicos de SNMP

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p.mb-0 Para poder interactuar con este protocolo de administración, es necesario implementar algunos comandos que obtengan la información necesaria acorde a los requerimientos de administración. Según Arboledas (2015), principalmente el protocolo SNMP cuenta con cuatro comandos básicos, con los cuales supervisan y controlan los dispositivos administrados estos son: Lectura, escritura, notificación y operaciones transversales, que pueden apreciarse a continuación.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img17.jpg' alt="")

    .tarjeta.BGIMG01.p-4
      SlyderA(tipo="b")
        .row.justify-content-center
          .h5.mb-5 Comando de lectura
          .col-lg-10
            .tarjeta.tarjeta--blanca.px-lg-5.px-4.py-4
              img(src='@/assets/curso/tema1/img18.svg' alt="Imagen que representa el comando de lectura cuando toma un requerimiento." style="max-width: 610px").mx-auto
        .row.justify-content-center
          .h5.mb-5 Comando de lectura
          .col-lg-10
            .tarjeta.tarjeta--blanca.px-lg-5.px-4.py-4
              img(src='@/assets/curso/tema1/img19.svg' alt="Imagen que representa el comando de lectura cuando recibe una respuesta." style="max-width: 610px").mx-auto
        .row.justify-content-center
          .h5.mb-5 Comando de escritura
          .col-lg-10
            .tarjeta.tarjeta--blanca.px-lg-5.px-4.py-4
              img(src='@/assets/curso/tema1/img20.svg' alt="Imagen que representa el comando de escritura cuando toma un pedido." style="max-width: 610px").mx-auto
        .row.justify-content-center
          .h5.mb-5 Comando de notificación
          .col-lg-10
            .tarjeta.tarjeta--blanca.px-lg-5.px-4.py-4
              img(src='@/assets/curso/tema1/img21.svg' alt="Imagen que representa el comando de notificación." style="max-width: 610px").mx-auto
        .row.justify-content-center
          .h5.mb-5 Comando de operaciones transversales
          .col-lg-10
            .tarjeta.tarjeta--blanca.px-lg-5.px-4.py-4
              img(src='@/assets/curso/tema1/img22.svg' alt="Imagen que representa el comando de operaciones transversales para GetRequest y, posteriormente, a GetNextRequest." style="max-width: 610px").mx-auto
        .row.justify-content-center
          .h5.mb-5 Comando de operaciones transversales
          .col-lg-10
            .tarjeta.tarjeta--blanca.px-lg-5.px-4.py-4
              img(src='@/assets/curso/tema1/img23.svg' alt="Imagen que representa el comando de operaciones transversales para GetBulkRequest." style="max-width: 610px").mx-auto

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
