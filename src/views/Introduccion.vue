<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0
        .caja-1(data-aos="fade-right")
          p.mb-0 El cálculo de costos de operación constituye una base técnica para comprender cómo se comportan los recursos dentro de una empresa y cómo se transforman en información útil para el control, la planeación y la toma de decisiones. En actividades productivas y de servicios, conocer el costo no significa únicamente sumar desembolsos, sino identificar con precisión los elementos que lo componen, reconocer la estructura del proceso en el que se originan y establecer criterios que permitan relacionar consumos, actividades y resultados con la realidad operativa de la organización. (García Colín, 2014).
      .col-lg-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/intro/img1.svg").m-auto
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Desde esta perspectiva, el estudio de los elementos, métodos y herramientas para el cálculo de costos de operación permite entender que costear exige levantar y organizar información, seleccionar la metodología más adecuada según el tipo de producto o servicio, definir criterios de asignación de costos directos e indirectos y documentar el proceso de costeo con suficiente trazabilidad. Esta mirada resulta especialmente importante en entornos empresariales donde la materia prima, la mano de obra y los costos indirectos no se comportan de la misma manera y, por tanto, requieren tratamientos técnicos diferenciados para obtener costos unitarios y totales con mayor consistencia.
    p.mb-0 En consecuencia, este desarrollo propone una aproximación articulada entre fundamentos conceptuales, metodologías de costeo, centros de costo, estructura de consumos, registro de información y uso de herramientas tecnológicas para procesar, verificar y actualizar datos de costos. Su aplicabilidad radica en que permite pasar de la comprensión general del costo a su cálculo operativo, apoyando el análisis de resultados, la validación de datos de origen y la construcción de información más confiable para la gestión empresarial.

</template>

<script>
export default {
  name: 'Introduccion',
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
