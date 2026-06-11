<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos para la determinación del costo de operación
    .row.justify-content-center.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0
        .caja-1(data-aos="fade-right")
          p.mb-0 Determinar #[b el costo de operación] exige comprender cómo se comportan los recursos dentro de la empresa y cómo se convierten en información útil para controlar, medir y decidir. En la práctica, calcular costos no consiste solo en sumar valores, sino en identificar qué recursos se consumen, en qué parte del proceso se originan, cómo deben clasificarse y bajo qué criterios se incorporan al producto o al servicio.
      .col-lg-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img1.svg").m-auto
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Elementos del costo de operación
    .bg-1
      .px-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg.mb-4.mb-lg-0
            .caja-1.ajuste-caja-1.color-1(data-aos="fade-right")
              p.mb-0 Los elementos del costo de operación corresponden a los componentes básicos que intervienen en la elaboración de un producto o en la prestación de un servicio. En términos generales, estos elementos son la materia prima o materiales, la mano de obra y los costos indirectos.
          .col-lg-auto.col-md-9(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/img3.png").m-auto
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            .caja-2.ajuste-caja-2(data-aos="fade-right")
              p.mb-0 La utilidad de esta clasificación está en que permite reconocer qué recursos se consumen de manera directa y cuáles apoyan el proceso sin poder asociarse de forma inmediata a una sola unidad producida o a un solo servicio prestado (Cuevas, 2001).
          .col-lg-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/img4.jpg', alt='').m-auto
          .col-lg
            p.mb-0 En el marco contable colombiano para pymes, incorporado en el Decreto 2420 de 2015, el costo de los inventarios incluye costos de compra, costos de transformación y otros costos necesarios para darles su condición y ubicación actuales. Dentro de los costos de transformación se incluyen los costos directamente relacionados con las unidades de producción, como la mano de obra directa, y una distribución sistemática de los costos indirectos de producción variables o fijos (Función Pública, 2015).
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img5.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Llevado a una situación empresarial sencilla, si una panadería produce pan tajado, la harina, la levadura y los empaques corresponden a materiales; el operario que mezcla, hornea y empaca corresponde a mano de obra directa; y la energía del horno, la depreciación de la maquinaria, el supervisor de planta y los materiales de limpieza harían parte de los costos indirectos.
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src="@/assets/curso/temas/img6.svg").m-auto
          .col-lg
            p.mb-0 En una empresa de servicios, el mismo razonamiento aplica: algunos recursos son directos al servicio prestado y otros sostienen la operación sin poder cargarse de forma inmediata a un solo cliente o actividad (García Colín, 2014).
        p.mb-5 A continuación, se relacionan los componentes básicos del costo de operación y su función dentro del proceso empresarial. Su finalidad es facilitar la identificación inicial de los recursos que intervienen en el costeo.
        .bg-slider.mb-0
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4
                    h4 Materiales o materia prima
                    p.mb-0 Bienes físicos que se incorporan al producto o se consumen en la prestación del servicio. Tela en confección, harina en panadería, insumos clínicos en laboratorio.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img8.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4
                    h4 Mano de obra directa
                    p.mb-0 Trabajo del personal que interviene de manera directa en la elaboración o atención. Operario de producción, técnico instalador, auxiliar que presta el servicio.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img9.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4
                    h4 Costos indirectos de fabricación u operación
                    p.mb-0 Recursos necesarios para operar, pero no atribuibles de forma directa a una sola unidad. Energía, supervisión, depreciación, mantenimiento, materiales auxiliares.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img10.png', alt='' style="max-width: 500px").m-auto
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Estructura del proceso productivo y de servicios
    .row.justify-content-center.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0
        .caja-1.color-1(data-aos="fade-right")
          p.mb-0 El costo no surge en abstracto; #[b surge dentro de un proceso]. Por eso, para costear correctamente, primero es necesario comprender cómo funciona la operación de la empresa. En una #[b organización productiva], el proceso suele pasar por etapas como abastecimiento, transformación, control y terminación. En una empresa de servicios, el recorrido puede ir desde la solicitud del cliente hasta la preparación, ejecución, revisión y entrega del servicio.
      .col-lg-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img11.png").m-auto
    p.mb-5 Identificar esta estructura es importante porque permite establecer en qué momento se consumen recursos y dónde se deben levantar los datos de costos. En la práctica, este tema evita uno de los errores más frecuentes: intentar costear sin conocer la ruta real del trabajo. 
    .row.justify-content-center.mb-0
      .col-lg-10
        .caja-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img12.jpg', alt='').m-auto
            .col-xl.fit___box_container
              ul.fa-ul.estilo___ul.mb-0
                li.mb-2
                  span.fa-li
                    i.fas.fa-check-circle
                  | Si una empresa de mantenimiento industrial no distingue entre diagnóstico, intervención técnica y cierre del servicio, difícilmente podrá identificar qué costos corresponden a cada fase.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Lo mismo ocurre en una fábrica que no separa la recepción de materiales, la producción y el empaque. Cuando el proceso está claro, el costo se vuelve trazable; cuando el proceso es confuso, el costeo también lo será.
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Clasificación de costos: fijos, variables, directos e indirectos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0
        .caja-1.color-1.ajuste-caja-1(data-aos="fade-right")
          p.mb-0 Clasificar los costos permite entender cómo se comportan y cómo deben tratarse dentro del sistema de costeo. #[b Los costos fijos] permanecen relativamente estables dentro de un rango de operación, mientras que los variables cambian según el volumen producido o el nivel de actividad.
      .col-lg-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img13.png").m-auto
    p.mb-5 Por su parte, #[b los costos directos] pueden asociarse con facilidad a un producto, servicio u orden específica, mientras que los indirectos requieren criterios de distribución o asignación. Esta clasificación no es solo conceptual; tiene efectos directos sobre la forma en que la empresa calcula, analiza y controla sus costos (Cuevas, 2001).
    .row.justify-content-center.mb-5
      .col-lg-10
        .caja-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img14.jpg', alt='').m-auto
            .col-xl.fit___box_container
              p.mb-0 En la empresa, un costo puede pertenecer a más de una clasificación al mismo tiempo. El salario de un supervisor de planta, por ejemplo, puede comportarse como fijo y, a la vez, ser indirecto. En cambio, la materia prima principal suele ser variable y directa.
    p.mb-5 Entender estas combinaciones es importante porque evita errores de asignación. No todos los costos variables son directos y no todos los costos fijos son indirectos por definición; su tratamiento depende de la relación real que tengan con el objeto de costo.
    .caja-4.p-4.mb-5(data-aos="zoom-in")
      p.mb-0 Esta tabla resume las clasificaciones más utilizadas para analizar costos dentro de la empresa. Su finalidad es mostrar que el mismo recurso puede entenderse desde distintos criterios de comportamiento y asignación.
    .row.justify-content-center.mb-0
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 1.
          span Clasificación práctica de los costos
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Criterio
                th.ajuste-border-tabla.texto-left Tipo
                th.ajuste-border-tabla.texto-left Característica
                th.texto-left Ejemplo
            tbody
              tr
                td.ajuste-border-tabla.texto-right.text-weight-bold Comportamiento
                td.ajuste-border-tabla.texto-left Fijo
                td.ajuste-border-tabla.texto-left No cambia significativamente dentro de cierto nivel de actividad
                td.texto-left Arriendo de planta
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-right.text-weight-bold Comportamiento
                td.ajuste-border-tabla.texto-left Variable
                td.ajuste-border-tabla.texto-left Cambia según el volumen de producción o servicio
                td.texto-left Materia prima principal
              tr
                td.ajuste-border-tabla.texto-right.text-weight-bold Asignación
                td.ajuste-border-tabla.texto-left Directo
                td.ajuste-border-tabla.texto-left Se identifica fácilmente con el producto o servicio
                td.texto-left Mano de obra del operario principal
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-right.text-weight-bold Asignación
                td.ajuste-border-tabla.texto-left Indirecto
                td.ajuste-border-tabla.texto-left Requiere una base de reparto o asignación
                td.texto-left Energía de planta
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Normativa contable sobre medición de inventarios y costos
    .bg-1
      .px-5
        p.mb-5 A continuación, se presenta una explicación sobre la normativa contable aplicable a la medición de inventarios y costos en Colombia, bajo el marco de las NIIF para pymes y el Decreto 2420 de 2015.
        .row.align-items-center.m-0.mb-0
          .col-xl
            .row.align-items-center.justify-content-center.caja-5(data-aos="zoom-in")
              .col-auto.mb-4.mb-lg-0
                figure(data-aos="fade-right")
                  img(src="@/assets/curso/temas/img15.svg" style="max-width: 220px").m-auto
              .col
                h4.mb-4 Pódcast
                TarjetaAudio.color-acento-contenido.mb-3(
                  texto="Normativa contable sobre medición de inventarios y costos"
                  :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
          .col-xl-auto.d-none.d-xl-block
            figure(data-aos="fade-left")
              img(src="@/assets/curso/temas/img16.png" ).m-auto
        Separador
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.5 Políticas organizacionales para la determinación de costos y documentación del plan de costeo
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            .caja-2(data-aos="fade-right")
              p.mb-0 Además de la norma contable, la empresa necesita #[b políticas internas] para definir cómo levantará la información, quién será responsable de cada dato, qué formatos usará y en qué tiempos documentará el proceso de costeo. Estas políticas son importantes porque #[b el costo de operación no se calcula solo con conceptos]; se calcula con datos concretos provenientes de producción, compras, nómina, inventarios y registros operativos.
          .col-lg-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/img17.jpg', alt='').m-auto
          .col-lg
            p.mb-4 Si la organización no define una ruta interna para recolectar y ordenar esa información, el sistema de costeo pierde consistencia.  En la práctica, documentar el plan de costeo implica establecer actividades, responsables y tiempos. 
            figure.d-none.d-xl-block(data-aos="fade-left")
              img(src='@/assets/curso/temas/img18.svg', alt='' style="width: 90px")
        .row.justify-content-center.mb-5
          .col-lg-10
            .caja-3.color-2(data-aos="zoom-in")
              .row.align-items-center
                .col-xl-auto
                  figure
                    img(src='@/assets/curso/temas/img19.jpg', alt='').m-auto
                .col-xl.fit___box_container
                  p.mb-0 Por ejemplo, una empresa puede definir qué producción entregará semanalmente el consumo de materiales, talento humano reportará las horas de mano de obra, contabilidad consolidará los CIF y el analista de costos verificará los datos antes del cálculo final.
        p.mb-5 Esta simple organización mejora notablemente la trazabilidad de la información y permite detectar errores antes de que afecten el costo unitario o total. A continuación, se presenta una forma sencilla de organizar el plan de costeo dentro de la empresa. Su finalidad es mostrar que el costeo necesita actividades, responsables y tiempos definidos.
        .row.align-items-center.mb-5
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img20.png", alt="" ).m-auto
          .col-xl
            AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
              .row(titulo="Levantar consumo de materiales").ajuste-cajaAcordion
                ul.fa-ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Responsable:] producción o almacén.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Frecuencia o tiempo:] diario o semanal.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Evidencia:] requisiciones o reportes de salida.
              .row(titulo="Consolidar mano de obra").ajuste-cajaAcordion
                ul.fa-ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Responsable:] talento humano o jefe de área.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Frecuencia o tiempo:] semanal o quincenal.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Evidencia:] tarjetas de tiempo o planillas.
              .row(titulo="Identificar CIF").ajuste-cajaAcordion
                ul.fa-ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Responsable:] contabilidad o coordinación administrativa.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Frecuencia o tiempo:] mensual.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Evidencia:] relación de gastos indirectos.
              .row(titulo="Verificar datos de origen").ajuste-cajaAcordion
                ul.fa-ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Responsable:] analista de costos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Frecuencia o tiempo:] antes del cálculo.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Evidencia:] matriz de revisión.
              .row(titulo="Elaborar cálculo final").ajuste-cajaAcordion
                ul.fa-ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Responsable:] analista de costos o contador.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Frecuencia o tiempo:] según cierre definido.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Evidencia:] hoja de costeo y reporte final.
    .caja-6.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img21.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Ejercicio aplicado 1. Reconocimiento inicial del costo de operación
          p.mb-0 Se invita a revisar el documento Ejercicio aplicado 1. Reconocimiento inicial del costo de operación, donde se aborda la clasificación y análisis de los elementos básicos del costo en una empresa dedicada a la producción de uniformes escolares.
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Ejercicio_aplicado_1.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
                  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
