<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Centros de costo, unidades de medida y levantamiento de información de costos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0
        .caja-1(data-aos="fade-right")
          p.mb-0 #[b El cálculo de costos de operación] exige saber dónde se generan los costos, con qué unidad se van a medir y de qué fuentes saldrá la información que alimentará el costeo. En la #[b práctica empresarial], este capítulo cumple una función operativa: permite pasar de la comprensión general del costo a la organización de los datos que harán posible distribuir materiales, mano de obra y costos indirectos con mayor consistencia. Sin esta base, el sistema de costeo puede existir en el papel, pero no funcionar de manera confiable en la empresa (García Colín, 2014; Horngren, 2012).
      .col-lg-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img22.svg").m-auto
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img23.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En empresas productivas y de servicios, los problemas de costeo suelen empezar cuando no se distinguen bien los centros de costo, se usan unidades de medida inconsistentes o se trabaja con registros incompletos.
    p.mb-0 Por eso, antes de aplicar #[b un método de costeo], conviene definir qué áreas consumen recursos, qué bases servirán para medir el uso de esos recursos y qué documentos respaldarán la información de origen. Esa preparación mejora la trazabilidad del costo y reduce errores posteriores de asignación.
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Conceptos de centros de costo y asignación de costos indirectos
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-2(data-aos="fade-right")
          p.mb-0 Un centro de costo es una parte de la organización sobre la cual se acumulan, controlan o analizan costos. Puede ser un área de producción, un proceso, un servicio interno o una dependencia administrativa. Su utilidad radica en que permite reunir costos en un punto específico antes de asignarlos al producto, al servicio o a la orden de trabajo. En términos prácticos, el centro de costo ayuda a responder dos preguntas básicas: dónde se origina el costo y a qué objeto final debe trasladarse.
      .col-lg-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img24.jpg', alt='').m-auto
      .col-lg
        p.mb-0 La asignación de costos indirectos aparece porque muchos recursos de la operación no pueden cargarse de manera inmediata a una sola unidad producida o a un solo servicio prestado. #[b Energía, supervisión, mantenimiento, depreciación o alquiler de planta son ejemplos típicos]. Como no tienen una relación directa y exclusiva con una unidad, la empresa necesita una base de distribución que permita repartirlos de forma razonable.
    p.mb-5 Esa base puede ser horas de mano de obra, horas máquina, unidades producidas, metros cuadrados o cualquier otra medida que tenga relación lógica con el consumo del recurso (Horngren, 2012).
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        .caja-4.p-4(data-aos="fade-right")
          p Una fórmula práctica para la asignación es la siguiente:
          .caja-7.mb-3.text-white(data-aos="zoom-in")
            .row.align-items-center
              .col.p-0
                p.mb-0.texto-right Tasa de asignación de CIF =
              .col
                .caja-8.text-center
                  p.mb-0.line--bottom Costos indirectos presupuestados
                  p.mb-0 Base presupuestada
          p Luego, el costo indirecto asignado se calcula así:
          .caja-7.text-white.text-center(data-aos="zoom-in")
            p.mb-0 CIF asignado = Tasa de asignación × Base real consumida
      .col-lg-5.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img25.png").m-auto
    .caja-9.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img26.svg', alt='' style="width: 85px").m-auto
        .col-xl.col-md-10
          p.mb-0 #[b Por ejemplo], si los CIF presupuestados del mes son $ 12.000.000 y la base presupuestada son 3.000 horas máquina, la tasa será $ 4.000 por hora máquina. Si una orden consume 25 horas máquina, se le asignan $ 100.000 de CIF. Esta lógica hace visible el criterio de asignación y facilita la revisión del cálculo.
    p.mb-5 A continuación, se presentan los conceptos operativos más importantes para organizar la acumulación y distribución de costos dentro de la empresa. Su finalidad es facilitar la comprensión inicial del trabajo por centros de costo.
    .bg-2
      .px-5
        .bg-carrusel
          .px-5
            SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in")
              .tarjeta.color-acento-botones
                .row.justify-content-center.mb-3
                  .col-12
                    img(src='@/assets/curso/temas/img28.png' ).m-auto
                .box___card_sinbordes_p
                  h4.mb-3.estilo-text Centro de costo
                  p Área o proceso donde se acumulan costos.
                  p.mb-0 #[b Ejemplo empresarial:] corte, ensamble, ventas, mantenimiento.
              .tarjeta.color-acento-botones
                .row.justify-content-center.mb-3
                  .col-12
                    img(src='@/assets/curso/temas/img29.png' ).m-auto
                .box___card_sinbordes_p
                  h4.mb-3.estilo-text Costo directo
                  p Se identifica con facilidad con el producto o servicio.
                  p.mb-0 #[b Ejemplo empresarial:] tela de un uniforme, horas del técnico del servicio.
              .tarjeta.color-acento-botones
                .row.justify-content-center.mb-3
                  .col-12
                    img(src='@/assets/curso/temas/img30.png' ).m-auto
                .box___card_sinbordes_p
                  h4.mb-3.estilo-text Costo indirecto
                  p No se asocia de forma inmediata a una unidad específica.
                  p.mb-0 #[b Ejemplo empresarial:] energía, supervisión, depreciación.
              .tarjeta.color-acento-botones
                .row.justify-content-center.mb-3
                  .col-12
                    img(src='@/assets/curso/temas/img31.png' ).m-auto
                .box___card_sinbordes_p
                  h4.mb-3.estilo-text Base de asignación
                  p Medida usada para repartir costos indirectos.
                  p.mb-0 #[b Ejemplo empresarial:] horas máquina, horas mod, unidades producidas.
              .tarjeta.color-acento-botones
                .row.justify-content-center.mb-3
                  .col-12
                    img(src='@/assets/curso/temas/img32.png' ).m-auto
                .box___card_sinbordes_p
                  h4.mb-3.estilo-text Tasa de asignación
                  p Relación entre CIF y base elegida.
                  p.mb-0 #[b Ejemplo empresarial:] $ 4.000 por hora máquina.
            Separador
            #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
              h2 2.2 Identificación de centros productivos y administrativos
            .row.justify-content-center.align-items-center.mb-5
              .col-lg.mb-4.mb-lg-0
                .caja-1.color-1(data-aos="fade-right")
                  p.mb-0 En la empresa, no todos los centros de costo cumplen la misma función. #[b Los centros productivos] participan de forma directa en la elaboración del producto o en la prestación del servicio principal, mientras que #[b los centros administrativos] apoyan la operación, pero no transforman directamente el bien o el servicio final. Esta diferenciación es importante porque no todos los costos se tratan igual y porque la empresa necesita saber qué áreas agregan valor operativo directo y cuáles prestan soporte interno. 
              .col-lg-auto.col-md-9(data-aos="fade-left")
                figure
                  img(src="@/assets/curso/temas/img33.png").m-auto
            .row.justify-content-center.mb-5
              .col-lg-10
                .row.justify-content-center
                  .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                    .caja-10.h-100
                      .row.justify-content-center.mb-3.text-white
                        .col-12
                          figure.mb-4
                            img(src='@/assets/curso/temas/img34.png', alt="" ).m-auto
                        .box___card_sinbordes_p
                          p.mb-0 En una fábrica de muebles, corte, ensamblaje y acabado serían #[b centros productivos]; gerencia, contabilidad y talento humano serían #[b centros administrativos].
                  .col-xl-6.col-md-9(data-aos="fade-left")
                    .caja-11.h-100
                      .row.justify-content-center.mb-3
                        .col-12
                          figure.mb-4
                            img(src='@/assets/curso/temas/img35.png', alt="" ).m-auto
                        .box___card_sinbordes_p
                          p.mb-0 En una firma de servicios contables, revisión documental, liquidación y cierre técnico podrían asumirse como #[b centros operativos del servicio], mientras que archivo, coordinación y administración funcionarían como #[b centros de apoyo].
            .row.justify-content-center.align-items-center.mb-5
              .col-xl.mb-4.mb-lg-0
                .caja-2.ajuste-caja-2(data-aos="fade-right")
                  p.mb-0 Esta clasificación ayuda a organizar mejor el costo y a decidir qué valores se cargan directamente al objeto de costo y cuáles deben redistribuirse. En la práctica, identificar centros de costo implica observar la ruta real del trabajo. Si la empresa costea sin distinguir sus áreas, termina mezclando gastos de naturaleza diferente y pierde precisión.
              .col-lg-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/img36.jpg', alt='').m-auto
              .col-lg
                p.mb-0 Por eso, antes de asignar costos, conviene listar las áreas, describir su función y definir si son productivas, de servicio interno o administrativas. Esa sola clasificación ya mejora el control del costo de operación (Don R. Hansen, 2003). A continuación, se presenta una forma sencilla de clasificar centros de costo dentro de una empresa. Su finalidad es apoyar el reconocimiento de áreas según su función dentro de la operación.
    .bg-carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in")
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img37.png' ).m-auto
            h4.mb-3.estilo-text Producción o elaboración
            ul.fa-ul.mb-5
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Tipo de centro:] productivo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Función principal:] transformar materiales o ejecutar el servicio principal.
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img38.png' ).m-auto
            h4.mb-3.estilo-text Control de calidad
            ul.fa-ul.mb-5
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Tipo de centro:] productivo o de apoyo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Función principal:] verificar cumplimiento técnico del producto o servicio.
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img39.png' ).m-auto
            h4.mb-3.estilo-text Mantenimiento
            ul.fa-ul.mb-5
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Tipo de centro:] de apoyo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Función principal:] sostener el funcionamiento de equipos e instalaciones.
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img40.png' ).m-auto
            h4.mb-3.estilo-text Contabilidad
            ul.fa-ul.mb-5
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Tipo de centro:] administrativo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Función principal:] registrar y controlar información financiera y de costos.
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img41.png' ).m-auto
            h4.mb-3.estilo-text Talento humano
            ul.fa-ul.mb-5
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Tipo de centro:] administrativo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Función principal:] gestionar personal, nómina y apoyo organizacional.
        Separador
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Unidades base, conversiones, medición con precisión y tolerancias
        .row.justify-content-center.align-items-center.mb-5
          .col-lg.mb-4.mb-lg-0
            .caja-1.color-1(data-aos="fade-right")
              p Costear correctamente también exige medir correctamente. Las unidades base son las medidas sobre las cuales la empresa controla producción, consumo y asignación de costos. Pueden expresarse en kilogramos, metros, litros, unidades, horas hombre, horas máquina, lotes, servicios atendidos o cualquier otra unidad coherente con la operación.
              p.mb-0 La clave es que la misma unidad se use de manera consistente en el registro, el cálculo y la interpretación del costo (Cuevas, 2001). Las conversiones aparecen cuando los datos de origen no están en la misma unidad de trabajo.
          .col-lg-auto.col-md-9(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/img42.png").m-auto
    .caja-4.p-5.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center
        .col-lg.mb-4.mb-lg-0
          p Por ejemplo, si una empresa compra materia prima en kilogramos, pero produce en gramos, necesita convertir para evitar errores de cálculo.
          .caja-7.mb-3.text-white.text-center(data-aos="zoom-in")
            p.mb-0 Una relación básica sería: 1 kilogramo = 1.000 gramos
          p Si el precio por kilogramo es $ 8.500, entonces el costo por gramo será:
          .caja-7.mb-3.text-white(data-aos="zoom-in")
            .row.align-items-center.justify-content-center
              .col-lg-3.p-0
                p.mb-0.texto-right Costo por gramo =
              .col-lg-2.text-center
                .caja-8
                  p.mb-0.line--bottom $ 8.500
                  p.mb-0 1.000
              .col-lg-3.p-0
                p.mb-0.texto-left = $ 8,5
          p Si una unidad del producto consume 350 gramos, el costo del material por unidad será:
          .caja-7.mb-3.text-white.text-center(data-aos="zoom-in")
            p.mb-0 350 × 8,5 = $ 2.975
          p.mb-0 Estas conversiones, aunque simples, son decisivas porque un error pequeño en la unidad puede distorsionar todo el costo final.
        .col-lg-auto.col-md-9(data-aos="fade-left")
          figure
            img(src="@/assets/curso/temas/img43.png").m-auto
    p.mb-5 La precisión y las tolerancias también son relevantes. La precisión busca que la medición refleje con suficiente exactitud el consumo real; la tolerancia reconoce que en procesos productivos o de servicio puede haber una variación aceptable entre lo esperado y lo ocurrido.
    .row.justify-content-center.mb-5
      .col-lg-10
        .caja-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img44.jpg', alt='').m-auto
            .col-xl.fit___box_container
              p.mb-0 Por ejemplo, si una receta técnica establece 500 gramos por unidad con una tolerancia de ±10 gramos, un consumo de 507 gramos sigue estando dentro de lo aceptable, pero uno de 530 ya requiere revisión. En la empresa, estas tolerancias ayudan a distinguir entre variación normal y desperdicio o desviación que afecta el costeo.
    .bg-1
      .px-5
        p.mb-5 Esta tabla presenta ejemplos prácticos de medición aplicados al costeo. Su finalidad es mostrar cómo una unidad mal definida o mal convertida puede afectar el cálculo de costos.
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 2.
          span Unidades base, conversiones y control de medición
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Dato de origen
                th.ajuste-border-tabla.texto-left Unidad de compra
                th.ajuste-border-tabla.texto-left Unidad de consumo
                th.ajuste-border-tabla.texto-left Conversión
                th.texto-left Aplicación en costeo
            tbody
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Tela
                td.ajuste-border-tabla.texto-left Metro
                td.ajuste-border-tabla.texto-left Centímetro
                td.ajuste-border-tabla.texto-left 1 metro = 100 cm
                td.texto-left Costo por cm para prendas pequeñas
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Harina
                td.ajuste-border-tabla.texto-left Kilogramo
                td.ajuste-border-tabla.texto-left Gramo
                td.ajuste-border-tabla.texto-left 1 kg = 1.000 g
                td.texto-left Costo por gramo en panadería
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Mano de obra
                td.ajuste-border-tabla.texto-left Hora
                td.ajuste-border-tabla.texto-left Minuto
                td.ajuste-border-tabla.texto-left 1 hora = 60 min
                td.texto-left Costo por minuto de operación
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Pintura
                td.ajuste-border-tabla.texto-left Galón
                td.ajuste-border-tabla.texto-left Litro
                td.ajuste-border-tabla.texto-left Según equivalencia técnica usada por la empresa
                td.texto-left Costo por litro aplicado
        Separador
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 Volúmenes de producción, consumos de recursos y datos de origen
        .row.justify-content-center.align-items-center.mb-5
          .col-lg.mb-4.mb-lg-0
            .caja-1.color-1(data-aos="fade-right")
              p El levantamiento de información para el costeo parte de tres grupos de datos: #[b cuánto se produjo o se atendió, cuánto recurso se consumió y cuál es el soporte de origen de ese consumo].
              p.mb-0 Sin estos tres elementos, el cálculo del costo pierde sustento. En una empresa, el volumen de producción puede expresarse como unidades terminadas, lotes, pedidos o servicios ejecutados; los consumos incluyen materiales, horas de mano de obra y uso de recursos indirectos; y los datos de origen provienen de documentos como requisiciones, tarjetas de tiempo, reportes de producción, facturas o registros de inventario.
          .col-lg-auto.col-md-9(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/img45.png").m-auto
        .caja-4.p-5.mb-5(data-aos="fade-right")
          .row.justify-content-center.align-items-center
            .col-lg.mb-4.mb-lg-0
              p Una forma práctica de calcular el consumo unitario es:
              .caja-7.mb-3.text-white(data-aos="zoom-in")
                .row.align-items-center.justify-content-center
                  .col-lg-6.p-0.text-center
                    p.mb-0.texto-right Consumo unitario =
                  .col-lg-6.text-center.texto-left
                    .caja-8.text-center
                      p.mb-0.line--bottom Consumo total del recurso
                      p.mb-0 Unidades producidas útiles
              p Si durante una semana se consumieron 180 kilos de material y se obtuvieron 900 unidades útiles, el consumo unitario será:
              .caja-7.mb-3.text-white(data-aos="zoom-in")
                .row.align-items-center.justify-content-center
                  .col-lg-6.texto-right
                    .caja-8.text-center
                      p.mb-0.line--bottom 180
                      p.mb-0 90
                  .col-lg-6.p-0
                    p.mb-0.texto-left = 0,20 kilos por unidad
              p Si el costo del kilo es $ 6.000, el costo unitario de ese material será:
              .caja-7.mb-3.text-white.text-center(data-aos="zoom-in")
                p.mb-0 0,20 x $ 6.000 = $ 1.200
              p.mb-0 Esta relación entre volumen y consumo es la base del costeo unitario. Por eso, si el dato de producción útil está mal levantado, el costo unitario también quedará distorsionado (García Colín, 2014).
            .col-lg-auto.col-md-9(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/img46.png").m-auto
    p En empresas de servicios, la lógica es equivalente. El volumen puede expresarse en horas facturables, servicios prestados, casos cerrados o visitas realizadas; el consumo puede incluir horas del profesional, materiales usados o tiempo de soporte; y los datos de origen deben provenir de registros verificables.
    p.mb-0 Lo importante es que cada valor utilizado en el costeo tenga respaldo documental y relación con la operación real (Horngren, 2012).
    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Registros, fuentes de información y plantillas físicas o digitales para el costeo
    .bg-1
      .px-5
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            .caja-2(data-aos="fade-right")
              p.mb-0 El costeo depende de la calidad de sus registros. Si los datos de consumo, tiempo o producción no están organizados, el sistema de costeo pierde confiabilidad. Por eso, la empresa necesita #[b definir fuentes de información claras y plantillas de registro que faciliten la captura y posterior consolidación de los datos]. En la práctica, estas fuentes pueden ser físicas o digitales, siempre que mantengan consistencia, trazabilidad y facilidad de revisión.
          .col-lg-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/img47.jpg', alt='').m-auto
          .col-lg
            figure.d-none.d-xl-block(data-aos="fade-left").mb-1
              img(src='@/assets/curso/temas/img48.svg', alt='' style="width: 90px")
            p.mb-0 Entre las fuentes más comunes se encuentran las requisiciones de materiales, #[b las tarjetas de tiempo, los reportes de producción, los kardex de inventario, las nóminas y los comprobantes de gastos indirectos].
        p Cada una cumple una función específica. La requisición presenta qué material salió y para qué orden; la tarjeta de tiempo registra horas trabajadas; el reporte de producción indica volumen elaborado; y el registro contable ayuda a consolidar los costos indirectos. Cuando estas fuentes se integran en una plantilla, el analista de costos puede organizar la información con más rapidez y menor riesgo de omisión.
        p.mb-5 A continuación, se presentan ejemplos de fuentes de datos y su posible uso en plantillas de costeo. Su finalidad es facilitar la organización de la información antes del cálculo.
        .bg-carrusel
          .px-5
            SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img49.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Requisición de materiales
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Dato principal:] cantidad solicitada y entregada.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Uso en el costeo:] determinar consumo de materiales directos.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img50.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Tarjeta de tiempo
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Dato principal:] horas o minutos trabajados.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Uso en el costeo:] calcular mano de obra directa.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img51.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Reporte de producción
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Dato principal:] unidades, lotes o servicios ejecutados.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Uso en el costeo:] relacionar consumo con volumen.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img52.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Kardex o inventario
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Dato principal:] entradas, salidas y saldos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Uso en el costeo:] verificar costo y disponibilidad de materiales.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img53.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Comprobantes de gastos indirectos
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Dato principal:] CIF del período.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Uso en el costeo:] acumular y distribuir costos indirectos.
            .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/temas/img54.jpg')})`}"
              )
              .bloque-texto-g__texto.p-4
                p.mb-0 En una empresa pequeña, una hoja de cálculo bien diseñada puede ser suficiente para organizar esta información. En una empresa mediana o con mayor complejidad, puede requerirse integración con módulos de inventario, nómina y producción. En ambos casos, el principio es el mismo: registrar una sola vez, con fuente identificable y con posibilidad de revisión. Esa disciplina es la que convierte los datos dispersos en información útil para el costeo.
            .caja-6.mb-0(data-aos="flip-up")
              .row.align-items-center
                .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/temas/img21.svg', alt='' style="max-width: 85px").m-auto
                .col-xl.mb-4.mb-lg-0
                  h4 Ejercicio aplicado 2. Centros de costo, medición y levantamiento de información
                  p.mb-0 Se invita a revisar el documento Ejercicio aplicado 2. Centros de costo, medición y levantamiento de información, donde se aborda la identificación de centros productivos, administrativos y de apoyo dentro de una empresa fabricante de productos de limpieza, así como los procesos básicos de medición y recopilación de datos para el costeo.
                .col-xl-2
                  a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Ejercicio_aplicado_2.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download

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
