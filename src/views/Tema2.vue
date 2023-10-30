<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Comunicación SNMP normal

    p.mb-5 Por pertenecer a la familia de protocolos TCP/IP, la comunicación de SNMP se hace de manera similar a los datos transmitidos en internet. Es decir, se empaquetan siguiendo la arquitectura de trama TCP/IP y se transmiten a través del protocolo de internet. SNMP permite el intercambio de información entre la entidad de administración y los agentes en forma de mensajes SNMP. El formato del PDU (acrónimo de Unidad de datos de protocolo) de la trama SNMP, se estructura como se presenta a continuación.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .BGR06.px-lg-5.px-4.py-4
          .BGR07.p-4
            ImagenInfografica.color-acento-botones
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/img01.svg' alt="Imagen que presenta la estructura del formato del PDU de la trama SNMP")
              .tarjeta.BG08.p-3(x="14%" y="24%" numero="+")
                .h4 Versión
                p.mb-0 Indica el número de versión del protocolo SNMP.
              .tarjeta.BG08.p-3(x="45%" y="24%" numero="+")
                .h4 Cadena de comunidad
                p.mb-0 Nombre de comunidad utilizado en el intercambio. Sirve para autentificar el mensaje SNMP.
              .tarjeta.BG08.p-3(x="30%" y="42%" numero="+")
                .h4 Estado de error
                p.mb-0 Indica un error entre una serie de ellos.
              .tarjeta.BG08.p-3(x="46%" y="42%" numero="+")
                .h4 Índice de error
                p.mb-0 Cuando el estado del error no es cero, este campo contiene un puntero que especifica qué objeto ha generado el error en particular.
              .tarjeta.BG08.p-3(x="77%" y="55%" numero="+")
                .h4 Conexiones variables
                p.mb-0 Son los campos de datos de SNMP codificados mediante el estándar SMI.
          figcaption(data-aos="fade-right") Nota. <span style="font-weight: 400">Adaptado de Arboledas (2015).</span>

    p.mb-5(data-aos="fade-right") Como todo proceso tecnológico, el SNMP ha sufrido cambios a lo largo del tiempo, los cuales buscan mejorar su eficiencia, robustez y estabilidad. Arboledas (2015), ofrece una discriminación de las diferentes versiones de este protocolo. Allí se observan las diferentes mejoras y cambios que ha presentado en pro de mejorar su desempeño.

    .BGM09.px-md-5.px-4.pb-4.mb-5
      .row
        .col-auto.img-02(data-aos="fade-right")
          .BGR05.px-5.py-2
            .h3.text-white.mb-0 SNMP

      .row.justify-content-center.mb-5
        .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img02.svg' alt="")
        .col-lg-10
          p(data-aos="fade-left") A continuación, se presenta una infografía sobre el SNMP.
          p.mb-0(data-aos="fade-left") Dentro de la gran variedad de #[em software] para el monitoreo de red aplicando SNMP, se encuentra el SNMPSoft, este incluye un conjunto de utilidades de red para administradores de red y especialistas en TI. Dentro de estas se encuentran:

      .row.justify-content-center.mb-5
        .col-lg-3.col-sm-6.mb-lg-0.mb-4(data-aos="fade-right")
          .tarjeta.color-primario.px-4.py-3.h-100.text-white
            .h5 #[em SnmpGet] (herramienta de línea de comandos)
            p.mb-0 Lee los valores de las variables SNMP de cualquier equipo de red.
        .col-lg-3.col-sm-6.mb-lg-0.mb-4(data-aos="flip-right")
          .tarjeta.color-primario.px-4.py-3.h-100.text-white
            .h5 #[em SnmpSet] (herramienta de línea de comandos)
            p.mb-0 Cambia los valores de las variables SNMP en cualquier equipo de red.
        .col-lg-3.col-sm-6.mb-lg-0.mb-4(data-aos="flip-left")
          .tarjeta.color-primario.px-4.py-3.h-100.text-white
            .h5 #[em SnmpWalk] (herramienta de línea de comandos)
            p.mb-0 Escanea un dispositivo para enumerar todas las variables que están disponibles para leer.
        .col-lg-3.col-sm-6.mb-lg-0.mb-4(data-aos="fade-left")
          .tarjeta.color-primario.px-4.py-3.h-100.text-white
            .h5 #[em SnmpTrapGen] (herramienta de línea de comandos)
            p.mb-0 Envía trampas SNMP (notificación) a un recolector de trampas SNMP.

    p.mb-5(data-aos="fade-right") Lo invitamos a ver el siguiente video, donde brevemente se dará una explicación de la activación del protocolo SNMP y el uso de la herramienta SnmpWalk.

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema2',
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
