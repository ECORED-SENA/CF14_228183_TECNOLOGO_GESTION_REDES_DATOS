<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .BGM01.px-md-5.px-4.pt-5.mb-5
      p.mb-5(data-aos="fade-right") Para comenzar con el estudio del componente formativo, lo invitamos a ver el siguiente video.

      figure.mb-5(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/slz86MF43YE?si=QX0M03d-ggxEzVnS" title="Gestión de dispositivos de red" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Gestión de dispositivos de red

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
