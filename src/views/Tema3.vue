<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Metodologías y procedimientos de costeo por órdenes, procesos y actividades
    .row.justify-content-center.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0
        .caja-1.ajuste-caja-1-1(data-aos="fade-right")
          p.mb-0 La empresa no puede aplicar un sistema de costeo útil si no define con claridad qué metodología responde mejor a su forma de operar. En términos prácticos, las metodologías de costeo sirven para organizar la acumulación, asignación y cálculo de los costos según la lógica del producto o del servicio. No es lo mismo costear una orden específica de producción, un proceso continuo de fabricación o un conjunto de actividades que sostienen la prestación del servicio. Por eso, este capítulo se concentra en tres rutas de costeo que aparecen con frecuencia en la práctica empresarial: costeo por órdenes, costeo por procesos y costeo por actividades.
      .col-lg-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img55.svg").m-auto
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img56.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Desde el punto de vista formativo, el interés no está solo en definir cada metodología, sino en entender cuándo se utiliza, qué documentos la soportan, cómo se registra la mano de obra, de qué manera se asignan los costos indirectos de fabricación y cómo se determina el costo final.
    p.mb-0 Esta comprensión permite que el aprendiz no vea el sistema de costeo como una fórmula aislada, sino como una forma de organizar técnicamente la información de la empresa para calcular costos unitarios y totales con mayor consistencia.
    .bg-1
      .px-5
        Separador
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Costeo por órdenes: concepto, órdenes de aplicación y requisiciones
        .row.justify-content-center.align-items-center.mb-5
          .col-lg.mb-4.mb-lg-0
            .caja-1.ajuste-caja-1-1.color-1(data-aos="fade-right")
              p El costeo por órdenes se utiliza cuando la empresa #[b produce por pedidos específicos, lotes diferenciados o trabajos] que pueden identificarse de manera individual.
              p.mb-0 En este sistema, #[b los costos se acumulan por cada orden de trabajo], lo que permite conocer cuánto costó producir un lote concreto, atender un encargo determinado o fabricar una referencia particular. Esta metodología resulta apropiada cuando los productos o servicios no son completamente uniformes y cuando la empresa necesita rastrear materiales, mano de obra y costos indirectos por orden o por cliente.
          .col-lg-auto.col-md-9(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/img57.png").m-auto
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src="@/assets/curso/temas/img58.png").m-auto
          .col-lg
            .caja-1.ajuste-caja-1.color-1(data-aos="fade-left")
              p En la práctica, este sistema se apoya en documentos que permiten seguir el flujo del costo. Entre los más importantes están la orden de producción, la requisición de materiales y la tarjeta de tiempo.
              p.mb-0 La requisición informa qué material salió del almacén para una orden específica; la tarjeta de tiempo registra cuántas horas de trabajo se dedicaron a esa orden; y la hoja de costos de la orden consolida materiales directos, mano de obra directa y CIF aplicados. Así, la empresa no costea “en bloque”, sino pedido por pedido.
        .caja-4.p-5.mb-5(data-aos="fade-right")
          .row.justify-content-center.align-items-center
            .col-lg.mb-4.mb-lg-0
              p La fórmula básica del costeo por órdenes es:
              .caja-7.mb-3.text-white.text-center(data-aos="zoom-in")
                p.mb-0 Costo total de la orden = Materiales directos + Mano de obra directa + CIF aplicados
              p Si además se requiere el costo unitario, se usa:
              .caja-7.mb-3.text-white(data-aos="zoom-in")
                .row.align-items-center.justify-content-center
                  .col-lg-6.p-0.text-center
                    p.mb-0.texto-right Costo unitario de la orden =
                  .col-lg-6.text-center.texto-left
                    .caja-8.text-center
                      p.mb-0.line--bottom Costo total de la orden
                      p.mb-0 Unidades terminadas de la orden
              p Por ejemplo, si una orden de 200 unidades consumió $ 1.800.000 en materiales directos, $ 900.000 en mano de obra directa y $ 600.000 en CIF aplicados, el costo total será $ 3.300.000 y el costo unitario será:
              .caja-7.mb-3.text-white(data-aos="zoom-in")
                .row.align-items-center.justify-content-center
                  .col-lg-6.texto-right
                    .caja-8.text-center
                      p.mb-0.line--bottom $ 3.300.000
                      p.mb-0 200
                  .col-lg-6.p-0
                    p.mb-0.texto-left = $ 16.500 por unidad
              p.mb-0 Esta fórmula es sencilla, pero depende de un buen levantamiento de requisiciones, tiempos y bases de aplicación de costos indirectos.
            .col-lg-auto.col-md-9(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/img59.png").m-auto
        p.mb-5 A continuación, se resumen los documentos principales y su función dentro del costeo por órdenes. Su finalidad es facilitar la comprensión de cómo se acumula el costo por pedido o lote específico.
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Orden de trabajo
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Función en el costeo por órdenes:] identifica el pedido o lote a costear.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Aplicación práctica:] permite acumular costos por cliente, producto o lote.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img60.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Requisición de materiales
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Función en el costeo por órdenes:] registra salidas de material para la orden.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Aplicación práctica:] determina materiales directos consumidos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img61.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Tarjeta de tiempo
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Función en el costeo por órdenes:] registra horas dedicadas a la orden.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Aplicación práctica:] determina mano de obra directa.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img62.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Hoja de costos de la orden
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Función en el costeo por órdenes:] consolida MD, MOD y CIF aplicados.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Aplicación práctica:] permite calcular costo total y unitario.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img63.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Tasa de aplicación de CIF
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Función en el costeo por órdenes:] distribuye costos indirectos a cada orden.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Aplicación práctica:] asigna CIF según base definida.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img64.png', alt='' style="max-width: 500px").m-auto
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Costeo por procesos: concepto, producción equivalente y procesos de aplicación
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-2(data-aos="fade-right")
          p.mb-0 El costeo por procesos se utiliza cuando #[b la producción es continua, homogénea y pasa por etapas sucesivas de transformación]. En este caso, los costos no se acumulan por pedido individual, sino por proceso, departamento o fase productiva, y luego se distribuyen entre las unidades producidas en el período.
      .col-lg-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img65.jpg', alt='').m-auto
      .col-lg
        p.mb-0 Esta metodología es habitual en industrias como #[b alimentos, químicos, bebidas, plásticos o textiles], donde se elaboran grandes volúmenes de unidades similares. La dificultad principal del costeo por procesos aparece cuando al cierre del período existen unidades terminadas y unidades en proceso con distintos niveles de avance.
    p.mb-5 Para resolverlo, se trabaja con producción equivalente, que convierte las unidades parcialmente terminadas en una cantidad equivalente de unidades completas. Así, el costo no se reparte solo entre las terminadas, sino entre las unidades equivalentes del período.
    .caja-4.p-5.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-3
        .col-lg.mb-4.mb-lg-0
          p Una fórmula básica es:
          .caja-7.mb-3.text-white.text-center(data-aos="zoom-in")
            p.mb-0 Unidades equivalentes = Unidades terminadas + (Unidades en proceso × Porcentaje de avance)
          p Y luego:
          .caja-7.mb-3.text-white(data-aos="zoom-in")
            .row.align-items-center.justify-content-center
              .col-lg-6.p-0.text-center
                p.mb-0.texto-right Costo unitario equivalente = 
              .col-lg-6.text-center.texto-left
                .caja-8.text-center
                  p.mb-0.line--bottom Costos acumulados del proceso
                  p.mb-0 Unidades equivalentes
          p #[b Ejemplo:] si un departamento terminó 800 unidades y dejó 200 unidades en proceso al 50 %, las unidades equivalentes serán:
          .caja-7.mb-3.text-white.text-center(data-aos="zoom-in")
            p.mb-0 800 + (200 × 0,50) = 900 unidades equivalentes
          p Si los costos acumulados fueron $ 4.500.000, el costo unitario equivalente será:
          .caja-7.text-white(data-aos="zoom-in")
            .row.align-items-center.justify-content-center
              .col-lg-6.texto-right
                .caja-8.text-center
                  p.mb-0.line--bottom 4.500.000
                  p.mb-0 900
              .col-lg-6.p-0
                p.mb-0.texto-left = 5.000 por unidad equivalente
        .col-lg-auto.col-md-9(data-aos="fade-left")
          figure
            img(src="@/assets/curso/temas/img66.png").m-auto
      p Este cálculo permite distribuir el costo con mayor justicia técnica entre producción terminada y producción en proceso.
      p Esta tabla presenta una situación básica de producción equivalente. Su finalidad es facilitar la comprensión del cálculo unitario cuando existen unidades en proceso al cierre del período.
      .row.justify-content-center.align-items-center
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 3.
            span Ejemplo práctico de producción equivalente en costeo por procesos
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Concepto
                  th.texto-left Dato
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Unidades terminadas
                  td.texto-left 800
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Unidades en proceso
                  td.texto-left 200
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Porcentaje de avance de unidades en proceso
                  td.texto-left 50 %
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Unidades equivalentes
                  td.texto-left 900
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Costos acumulados del proceso
                  td.texto-left $ 4.500.000
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Costo unitario equivalente
                  td.texto-left $ 5.000
    p.mb-0 En el entorno empresarial, esta metodología es útil cuando no resulta práctico identificar el costo por lote individual, porque la producción fluye de manera continua. Sin embargo, exige registros disciplinados de unidades iniciadas, terminadas, transferidas y en proceso, así como un control claro del porcentaje de avance. Sin esa información, el costo por proceso pierde precisión.
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Costeo por actividades: concepto y actividades de aplicación
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-2.ajuste-caja-2-1(data-aos="fade-right")
          p.mb-0 El costeo por actividades, conocido como #[b ABC], parte de una lógica distinta: en lugar de #[b distribuir costos indirectos con una sola base general], identifica primero las actividades que consumen recursos y luego asigna esos costos a productos o servicios según el uso que hacen de dichas actividades.
      .col-lg-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img67.jpg', alt='').m-auto
      .col-lg
        p Esto es especialmente útil cuando la empresa tiene diversidad de productos, múltiples procesos de apoyo o una estructura indirecta relevante que no se explica bien con una única base de reparto.
        p.mb-0 En términos simples, el ABC reconoce que no son los productos por sí mismos los que consumen recursos de apoyo, sino las actividades necesarias para diseñarlos, prepararlos, inspeccionarlos, moverlos o atenderlos.
    p.mb-5 Por eso, primero se costean las actividades y luego se asigna el costo de esas actividades al producto o servicio mediante conductores de costo. Esta lógica permite una lectura más fina de los costos indirectos y mejora el análisis gerencial cuando la empresa necesita saber qué productos, clientes o servicios realmente consumen más recursos (Luna-Altamirano & Moreno-Narváez, 2020).
    .bg-3
      .px-5
        .caja-4.p-5.mb-5(data-aos="fade-right")
          .row.justify-content-center.align-items-center.mb-3
            .col-lg.mb-4.mb-lg-0
              p La fórmula práctica es:
              .caja-7.mb-3.text-white(data-aos="zoom-in")
                .row.align-items-center.justify-content-center
                  .col-lg-6.p-0.text-center
                    p.mb-0.texto-right Tasa del conductor de costo =
                  .col-lg-6.text-center.texto-left
                    .caja-8.text-center
                      p.mb-0.line--bottom Costo total de la actividad
                      p.mb-0 Volumen total del conductor
              p Luego:
              .caja-7.mb-3.text-white.text-center(data-aos="zoom-in")
                p.mb-0 Costo asignado al objeto = Tasa del conductor × Consumo del conductor por el objeto
            .col-lg-auto.col-md-9(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/img68.png").m-auto
          p.mb-0 Ejemplo: si la actividad “inspección” cuesta $ 2.400.000 al mes y se realizan 120 inspecciones, la tasa será $ 20.000 por inspección.
          p.mb-0 Si un producto requiere 8 inspecciones, se le asignarán $ 160.000 por esa actividad.
        p.mb-5 Este enfoque es más detallado que el costeo tradicional, pero también exige mejor levantamiento de información sobre actividades y conductores. Esta tabla presenta cómo se relacionan las actividades con sus conductores de costo. Su finalidad es facilitar la comprensión de la asignación de costos indirectos en un sistema ABC.
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 4.
          span Ejemplo básico de actividades y conductores en costeo ABC
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Actividad
                th.ajuste-border-tabla.texto-left Costo total de la actividad
                th.ajuste-border-tabla.texto-left Conductor de costo
                th.ajuste-border-tabla.texto-left Volumen del conductor
                th.texto-left Tasa del conductor
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Preparación de máquinas
                td.ajuste-border-tabla.texto-left $ 3.000.000
                td.ajuste-border-tabla.texto-left Número de preparaciones
                td.ajuste-border-tabla.texto-left 60
                td.texto-left $ 50.000
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Inspección de calidad
                td.ajuste-border-tabla.texto-left $ 2.400.000
                td.ajuste-border-tabla.texto-left Número de inspecciones
                td.ajuste-border-tabla.texto-left 120
                td.texto-left $ 20.000
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Despacho de pedidos
                td.ajuste-border-tabla.texto-left $ 1.800.000
                td.ajuste-border-tabla.texto-left Número de despachos
                td.ajuste-border-tabla.texto-left 90
                td.texto-left $ 20.000
        Separador
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Tarjetas tiempo, asignación de CIF y determinación del costo final
        .row.justify-content-center.align-items-center.mb-5
          .col-lg.mb-4.mb-lg-0
            .caja-1.ajuste-caja-1.color-1(data-aos="fade-right")
              p Las tarjetas tiempo son una fuente de información clave porque permiten medir la mano de obra aplicada a órdenes, procesos o actividades. En contextos productivos, registran cuántas horas o minutos dedicó el trabajador a una orden o fase; en servicios, pueden registrar tiempo por caso, cliente o actividad.
              p.mb-0 Su importancia no está solo en liquidar nómina, sino en costear con mayor precisión la participación del trabajo humano en el costo final. La asignación de CIF complementa ese registro, ya que integra al costo final todos los recursos indirectos necesarios para operar.
          .col-lg-auto.col-md-9(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/img69.png").m-auto
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .caja-4.p-5(data-aos="fade-right")
              p.text-center En costeo por órdenes y por procesos suele usarse una tasa predeterminada, calculada así:
              .caja-7.mb-3.text-white(data-aos="zoom-in")
                .row.align-items-center.justify-content-center
                  .col-lg-6.p-0.text-center
                    p.mb-0.texto-right Tasa predeterminada de CIF =
                  .col-lg-6.text-center.texto-left
                    .caja-8.text-center
                      p.mb-0.line--bottom CIF presupuestados
                      p.mb-0 Base presupuestada
              p.text-center Después, para cada orden, proceso o unidad de análisis:
              .caja-7.mb-3.text-white.text-center(data-aos="zoom-in")
                p.mb-0 CIF aplicados = Tasa predeterminada × Base real consumida
              p Por ejemplo, si los CIF presupuestados son $ 15.000.000 y la base presupuestada son 5.000 horas de MOD, la tasa será $ 3.000 por hora de MOD.
              p Si una orden consumió 40 horas, se le asignan $ 120.000 de CIF.
              p.mb-0 Con materiales, mano de obra y CIF ya identificados, se obtiene el costo final. En una orden, se suman los tres componentes. En un proceso, se distribuyen entre unidades equivalentes. En ABC, se agregan los costos directos y los costos de actividades asignados.
        .row.justify-content-center.align-items-center.mb-5
          .col-lg.mb-4.mb-lg-0
            p La clave no está en la suma misma, sino en que cada componente tenga respaldo documental y criterio técnico de aplicación.  Así, el costo final deja de ser una cifra “estimada al ojo” y se convierte en un resultado verificable.
            p.mb-0 Esta tabla organiza las principales fuentes y operaciones de cálculo usadas para cerrar el costeo. Su finalidad es mostrar cómo se integran materiales, mano de obra y costos indirectos.
          .col-lg-auto.col-md-9(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/img70.svg").m-auto
    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 5.
          span Fuentes y fórmulas básicas para la determinación del costo final
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Componente
                th.ajuste-border-tabla.texto-left Fuente principal
                th.texto-left Fórmula o criterio
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Materiales directos
                td.ajuste-border-tabla.texto-left Requisiciones y #[i kardex]
                td.texto-left Cantidad consumida × costo unitario
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Mano de obra directa
                td.ajuste-border-tabla.texto-left Tarjetas tiempo y nómina
                td.texto-left Horas o minutos × tarifa de MOD
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold CIF aplicados
                td.ajuste-border-tabla.texto-left Comprobantes indirectos y base de reparto
                td.texto-left Tasa predeterminada × base real
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Costo total
                td.ajuste-border-tabla.texto-left Consolidación de los tres componentes
                td.texto-left MD + MOD + CIF
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Costo unitario
                td.ajuste-border-tabla.texto-left Hoja de costeo o reporte final
                td.texto-left Costo total / unidades producidas
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Selección y aplicación de la metodología de costeo según el tipo de producto o servicio
    .bg-3
      .px-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg.mb-4.mb-lg-0
            .caja-1.ajuste-caja-1.color-1(data-aos="fade-right")
              p Elegir #[b la metodología de costeo] no es un asunto puramente académico; es una decisión operativa.
              p Una empresa debe #[b seleccionar el sistema] que mejor refleje su forma de producir o prestar servicios. Si trabaja por pedidos diferenciados, el costeo por órdenes suele ser el más adecuado. Si produce de manera continua y uniforme, resulta más coherente el costeo por procesos. 
              p.mb-0 Si su estructura de apoyo es compleja y necesita mayor precisión en los indirectos, puede ser conveniente el costeo por actividades. En la práctica, la selección también depende de la capacidad de la empresa para levantar información. Un sistema ABC puede ser muy útil, pero no siempre es viable si la organización no mide actividades ni conductores.
          .col-lg-auto.col-md-9(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/img71.png").m-auto
        p Del mismo modo, un costeo por órdenes no sirve si la empresa no distingue cada trabajo de manera individual. Por eso, la metodología debe responder tanto al tipo de operación como a la calidad de los registros disponibles. El mejor sistema no es el más complejo, sino el que permite costear con consistencia, oportunidad y utilidad para la gestión.
        p.mb-5 A continuación, se presentan criterios de selección entre costeo por órdenes, por procesos y por actividades. Su finalidad es orientar la elección metodológica según la realidad de la empresa.
        .row.align-items-center.mb-5
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img72.png", alt="" ).m-auto
          .col-xl
            AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
              .row(titulo="Producción por pedidos específicos o lotes diferenciados").ajuste-cajaAcordion
                ul.fa-ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Metodología más adecuada:] costeo por órdenes.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Razón principal:] permite acumular costos por trabajo individual.
              .row(titulo="Producción continua y homogénea").ajuste-cajaAcordion
                ul.fa-ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Metodología más adecuada:] costeo por procesos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Razón principal:] facilita distribuir costos por etapas o departamentos.
              .row(titulo="Alta diversidad de productos y altos costos indirectos").ajuste-cajaAcordion
                ul.fa-ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Metodología más adecuada:] costeo por actividades.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Razón principal:] mejora la asignación de indirectos según consumo de actividades.
              .row(titulo="Servicios con casos individualizables").ajuste-cajaAcordion
                ul.fa-ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Metodología más adecuada:] costeo por órdenes.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Razón principal:] permite costear por cliente, contrato o caso.
              .row(titulo="Servicios con procesos repetitivos y estandarizados").ajuste-cajaAcordion
                ul.fa-ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Metodología más adecuada:] costeo por procesos o ABC, según complejidad.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Razón principal:] permite reflejar mejor el flujo o las actividades de apoyo.
        .caja-6.mb-0(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img21.svg', alt='' style="max-width: 85px").m-auto
            .col-xl.mb-4.mb-lg-0
              h4 Ejercicio aplicado 3. Selección y aplicación de metodologías de costeo
              p.mb-0 Se invita a revisar el documento Ejercicio aplicado 3. Selección y aplicación de metodologías de costeo, donde se aborda la aplicación práctica de diferentes metodologías de costeo según las características operativas de diversas líneas de negocio.
            .col-xl-2
              a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Ejercicio_aplicado_3.pdf')" target="_blank" type="application/pdf")
                span Descargar
                i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema3',
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
