<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Estructura de consumos y cálculo de costos de operación
    .row.justify-content-center.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0
        .caja-1.ajuste-caja-1(data-aos="fade-right")
          p.mb-0 El cálculo de costos de operación entra en una fase más técnica cuando la empresa deja de limitarse a identificar elementos del costo y empieza a #[b medir consumos, valorar recursos y convertir esa información en costos unitarios y totales]. En este punto, ya no basta con saber qué es materia prima, mano de obra o costo indirecto; ahora se requiere determinar cuánto se consumió, en qué condiciones se utilizó, con qué parámetros se midió y cómo se integran esos valores al sistema de costeo. 
      .col-lg-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img73.svg").m-auto
    p.mb-5 En la cotidianidad empresarial, muchos errores de costeo no se originan en la metodología elegida, sino en la debilidad de los datos de consumo. Cuando la empresa no controla bien las salidas de materiales, no registra con claridad el tiempo trabajado o mezcla costos indirectos sin criterio de asignación, el resultado final pierde confiabilidad. De ahí que el cálculo de costos de operación exija una relación permanente entre datos de origen, fórmulas, parámetros técnicos y documentación de soporte. Esta lógica es consistente con los desarrollos de la contabilidad de costos y de la administración de costos, donde el costo útil para la gestión depende de la calidad del registro y de la consistencia del cálculo.
    .bg-1
      .px-5
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Estructura de consumos de materiales y mano de obra
        p.mb-5 La estructura de consumos describe cómo #[b la empresa organiza y cuantifica los recursos que intervienen en la producción o en la prestación de un servicio]. En términos prácticos, esta estructura permite responder tres preguntas básicas: qué recursos se consumen, en qué cantidad se consumen y con qué unidad se controlan.
        .row.justify-content-center.mb-5
          .col-lg-10
            .caja-3.color-3(data-aos="zoom-in")
              .row.align-items-center
                .col-xl-auto
                  figure
                    img(src='@/assets/curso/temas/img74.jpg', alt='').m-auto
                .col-xl.fit___box_container
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-2
                      span.fa-li
                        i.fas.fa-check-circle
                      | En una empresa productiva, esto suele expresarse en materiales directos, materiales auxiliares, mano de obra directa y, en algunos casos, tiempos de apoyo asociados a procesos internos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | En una empresa de servicios, la lógica es semejante, aunque el peso relativo de la mano de obra y de los tiempos de ejecución suele ser mayor.
        p En la práctica, la estructura de consumos parte de parámetros técnicos. Una ficha técnica, una receta estándar, una orden de producción o una ruta de trabajo suelen indicar la cantidad esperada de material por unidad, el tiempo estimado por operación o el nivel de uso de un recurso específico.
        p.mb-5 Esto permite que la empresa no trabaje únicamente con percepciones, sino con referencias que luego pueden compararse con el consumo real.
        .row.justify-content-center.mb-5
          .col-lg-10
            .caja-3.color-3(data-aos="zoom-in")
              .row.align-items-center
                .col-xl-auto
                  figure
                    img(src='@/assets/curso/temas/img75.jpg', alt='').m-auto
                .col-xl.fit___box_container
                  p.mb-0 Si una empresa de confección establece que una camisa consume 1,8 metros de tela y 25 minutos de confección, esos valores funcionan como punto de partida para analizar el comportamiento real del costo.
        p Conviene diferenciar entre consumo estándar y consumo real. El estándar corresponde al valor esperado según diseño o planeación; el real corresponde a lo efectivamente usado en la operación.
        p.mb-5 La diferencia entre ambos puede originarse por desperdicio, merma, reproceso, baja productividad o cambios en el método de trabajo.
        .row.justify-content-center.align-items-center.mb-5
          .col-lg.mb-4.mb-lg-0
            .caja-1.ajuste-caja-1.color-1(data-aos="fade-right")
              p Esta comparación es importante porque, además de servir para costear, ayuda a controlar la eficiencia operativa y a detectar desviaciones que afectan el costo final (Cuevas C. F., 2010).
              p.mb-0 Esta tabla presenta una forma práctica de organizar los consumos básicos que intervienen en el cálculo del costo de operación. Su finalidad es facilitar la identificación de recursos y su medición dentro del proceso empresarial.
          .col-lg-auto.col-md-9(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/img76.png").m-auto
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 6.
          span Estructura básica de consumos en el costeo de operación
        .tabla-a(data-aos="zoom-in").mb-5
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Componente
                th.ajuste-border-tabla.texto-left Qué representa
                th.ajuste-border-tabla.texto-left Unidad de medida frecuente
                th.texto-left Fuente de información
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Material directo principal
                td.ajuste-border-tabla.texto-left Recurso que se incorpora al producto o servicio
                td.ajuste-border-tabla.texto-left kg, g, m, litros, unidades
                td.texto-left Requisiciones, kardex, ficha técnica
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Material auxiliar
                td.ajuste-border-tabla.texto-left Insumo de apoyo al proceso
                td.ajuste-border-tabla.texto-left Unidades, litros, paquetes
                td.texto-left Requisiciones, reportes internos
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Mano de obra directa
                td.ajuste-border-tabla.texto-left Tiempo del personal que ejecuta la operación principal
                td.ajuste-border-tabla.texto-left Horas, minutos
                td.texto-left Tarjetas tiempo, nómina, órdenes de trabajo
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Tiempo de preparación
                td.ajuste-border-tabla.texto-left Tiempo previo para alistar el proceso
                td.ajuste-border-tabla.texto-left Horas, minutos
                td.texto-left Reporte de producción, control interno
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Merma o desperdicio normal
                td.ajuste-border-tabla.texto-left Pérdida prevista dentro del proceso
                td.ajuste-border-tabla.texto-left %, kg, unidades
                td.texto-left Ficha técnica, registro de producción           
    .bg-1
      .px-5
        .row.justify-content-center.mb-0
          .col-lg-10
            .caja-3.color-3(data-aos="zoom-in")
              .row.align-items-center
                .col-xl-auto
                  figure
                    img(src='@/assets/curso/temas/img77.jpg', alt='').m-auto
                .col-xl.fit___box_container
                  p #[b Ejemplo aplicado]
                  p Una empresa que produce galletas define en su ficha técnica que cada lote de 1.000 unidades debe consumir 28 kg de harina, 9 kg de azúcar, 3 kg de mantequilla y 6 horas de mano de obra directa.
                  p.mb-0 Esa estructura de consumos le permite preparar el costeo antes de producir, pero solo al contrastarla con las requisiciones y con los tiempos reales puede saber si el lote se comportó como estaba previsto.
        Separador
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.2 Determinación del consumo de materiales, mano de obra directa y costos indirectos de fabricación
        p.mb-5 Determinar el consumo significa cuantificar cuánto recurso se utilizó realmente en el período, en la orden, en el lote o en el proceso.
        .caja-4.p-5.mb-5(data-aos="fade-right")
          .row.justify-content-center.align-items-center.mb-3
            .col-lg.mb-4.mb-lg-0
              p En materiales, esto puede hacerse mediante requisiciones específicas, por control de salidas de inventario o a partir de la fórmula básica de inventarios:
              .caja-7.mb-3.text-white.text-center(data-aos="zoom-in")
                p.mb-0 Consumo de materiales = Inventario inicial + Compras netas - Inventario final
              p Esta fórmula es útil cuando la empresa quiere determinar el consumo total de un material en un período.
              p Si, por ejemplo, inició con 120 kg de materia prima, compró 380 kg y terminó con 90 kg; el consumo será:
              .caja-7.mb-3.text-white.text-center(data-aos="zoom-in")
                p.mb-0 120 + 380 - 90 = 410 kg
              p Si esos 410 kg se usaron para producir 2.050 unidades, el consumo unitario será:
              .caja-7.mb-3.text-white(data-aos="zoom-in")
                .row.align-items-center.justify-content-center
                  .col-lg-6.texto-right
                    .caja-8.text-center
                      p.mb-0.line--bottom 410
                      p.mb-0 2.050
                  .col-lg-6.p-0
                    p.mb-0.texto-left = 0,20 kg por unidad
            .col-lg-auto.col-md-9(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/img78.png").m-auto
          .row.mb-3
            .col-lg-8
              p Este tipo de cálculo permite relacionar el inventario con la producción útil y proporciona una base más sólida para valorar el costo del material.
              p En mano de obra directa, la determinación del consumo se hace en tiempo y luego se convierte en valor. La fórmula más frecuente es:
              .caja-7.mb-3.text-white.text-center(data-aos="zoom-in")
                p.mb-0 Costo de mano de obra directa = Horas trabajadas × Tarifa por hora
              p Si un operario dedicó 36 horas a un lote y la tarifa por hora es $ 18.500, el costo de MOD será:
              .caja-7.mb-3.text-white.text-center(data-aos="zoom-in")
                p.mb-0 36 × $ 18.500 = $ 666.000
          p.mb-0 Cuando la empresa registra minutos, primero debe convertirlos a horas o mantener una tarifa por minuto. Lo importante es que la unidad de tiempo sea consistente con el criterio de cálculo definido para el costeo.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-2.ajuste-caja-2-2(data-aos="fade-right")
          p.mb-0 En los costos indirectos de fabricación u operación, la determinación parte de la acumulación de recursos que apoyan el proceso, pero que no pueden cargarse directamente a una sola unidad. Aquí aparecen conceptos como #[b energía, depreciación, supervisión, mantenimiento, servicios públicos, elementos de aseo o materiales indirectos].
      .col-lg-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img79.jpg', alt='').m-auto
      .col-lg
        figure.d-none.d-xl-block(data-aos="fade-left").mb-1
          img(src='@/assets/curso/temas/img80.svg', alt='' style="width: 90px")
        p.mb-0 En esta fase del capítulo, el objetivo no es todavía profundizar en el método más complejo de distribución, sino establecer que estos costos deben identificarse, acumularse y prepararse para su asignación posterior.
    p.mb-5 Esta tabla presenta ejemplos sencillos de cómo se determina el consumo y el valor de materiales, mano de obra y costos indirectos. Su finalidad es apoyar el paso desde el dato de origen hasta el costo calculado.
    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Tabla 7.
      span Determinación práctica de consumos y costo de recursos
    .tabla-a(data-aos="zoom-in").mb-5
      table
        thead
          tr
            th.ajuste-border-tabla.texto-left Recurso
            th.ajuste-border-tabla.texto-left Dato de origen
            th.ajuste-border-tabla.texto-left Fórmula aplicada
            th.texto-left Resultado
        tbody
          tr
            td.ajuste-border-tabla.texto-left.text-weight-bold Material directo
            td.ajuste-border-tabla.texto-left II 120 kg + compras 380 kg - IF 90 kg.
            td.ajuste-border-tabla.texto-left II + compras - IF
            td.texto-left 410 kg consumidos
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left.text-weight-bold Consumo unitario de material
            td.ajuste-border-tabla.texto-left 410 kg / 2.050 unidades
            td.ajuste-border-tabla.texto-left Consumo total / unidades útiles
            td.texto-left 0,20 kg por unidad
          tr
            td.ajuste-border-tabla.texto-left.text-weight-bold Mano de obra directa
            td.ajuste-border-tabla.texto-left 36 horas a $ 18.500
            td.ajuste-border-tabla.texto-left Horas × tarifa
            td.texto-left $ 666.000
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left.text-weight-bold CIF del período
            td.ajuste-border-tabla.texto-left Energía $ 240.000 + mantenimiento $ 180.000 + supervisión $ 350.000
            td.ajuste-border-tabla.texto-left Suma de CIF identificados
            td.texto-left $ 770.000
    .caja-4.p-5.mb-0(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-3
        .col-lg.mb-4.mb-lg-0
          p #[b Ejemplo aplicado]
          p Un taller de calzado registra para una orden de 300 pares: cuero consumido 210 m², suela 300 juegos, 48 horas de mano de obra directa y $ 540.000 de CIF del período aplicables a la orden.
          p Si el cuero cuesta $ 16.000 por m² y cada juego de suela vale $ 4.500, el costo directo del material será:
          .caja-7.mb-3.text-white.text-center(data-aos="zoom-in")
            p.mb-0 210 × $ 16.000 = $ 3.360.000
            p.mb-0 300 × $ 4.500 = $ 1.350.000
            p.mb-0 Material directo total = $ 4.710.000
          p Si la MOD vale $ 20.000 por hora:
          .caja-7.mb-3.text-white.text-center(data-aos="zoom-in")
            p.mb-0 48 × $ 20.000 = $ 960.000
          p Hasta este punto, antes de distribuir o verificar CIF, la orden ya tiene acumulados $ 5.670.000 entre materiales y mano de obra.
        .col-lg-auto.col-md-9(data-aos="fade-left")
          figure
            img(src="@/assets/curso/temas/img81.png").m-auto
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Cálculo unitario, cálculo total y parámetros técnicos del costeo
    p.mb-5 El cálculo total integra todos los componentes del costo identificados para una orden, lote, proceso o servicio. 
    .caja-4.p-5.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-3
        .col-lg.mb-4.mb-lg-0
          p La fórmula general más utilizada es:
          .caja-7.mb-3.text-white.text-center(data-aos="zoom-in")
            p.mb-0 Costo total de operación = Materiales directos + Mano de obra directa + Costos indirectos aplicados
          p Luego, para obtener el costo unitario:
          .caja-7.text-white(data-aos="zoom-in")
            .row.align-items-center.justify-content-center
              .col-lg-6.p-0.text-center
                p.mb-0.texto-right Costo unitario =
              .col-lg-6.text-center.texto-left
                .caja-8.text-center
                  p.mb-0.line--bottom Costo total de operación
                  p.mb-0 Unidades útiles producidas
        .col-lg-auto.col-md-9(data-aos="fade-left")
          figure
            img(src="@/assets/curso/temas/img82.png").m-auto
      p.mb-0 Aquí, la palabra útiles es importante. La empresa no debería dividir sobre unidades defectuosas no aprovechables ni sobre cantidades teóricas sin verificar. Si el lote produjo 1.000 unidades, pero solo 960 quedaron en condiciones de venta, el costo unitario debe calcularse sobre 960, salvo que la empresa tenga una política específica para tratar pérdidas normales y anormales.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0
        .caja-1.ajuste-caja-1(data-aos="fade-right")
          p.mb-0 Los parámetros técnicos del costeo son condiciones de referencia que permiten interpretar mejor el cálculo. Entre ellos están el rendimiento, la merma normal, el tiempo estándar, la tolerancia en el consumo, la capacidad normal y la producción útil. Estos parámetros ayudan a determinar si un costo es razonable o si presenta una desviación que exige revisión.
      .col-lg-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img83.png").m-auto
    .caja-4.p-5.mb-0(data-aos="fade-right")
      p Por ejemplo, si una receta técnica define una merma normal del 3 % y el proceso presenta una merma del 8 %, el cálculo del costo sigue siendo posible, pero la empresa debe reconocer que el resultado está afectado por una ineficiencia o una desviación operativa. Un caso sencillo puede ilustrarlo mejor. Suponga que una empresa de productos de aseo fabrica un lote de 500 unidades útiles y presenta los siguientes datos:
      .row.justify-content-center.align-items-center.mb-3
        .col-lg.mb-4.mb-lg-0
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Materiales directos: $ 1.420.000. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Mano de obra directa: $ 680.000. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | CIF aplicados: $ 450.000. 
          p El costo total será:
          .caja-7.mb-3.text-white.text-center(data-aos="zoom-in")
            p.mb-0 $ 1.420.000 + $ 680.000 + $ 450.000 = $ 2.550.000
          p Y el costo unitario:
          .caja-7.mb-3.text-white(data-aos="zoom-in")
            .row.align-items-center.justify-content-center
              .col-lg-6.texto-right
                .caja-8.text-center
                  p.mb-0.line--bottom $ 2.550.000
                  p.mb-0 500
              .col-lg-6.p-0
                p.mb-0.texto-left = $ 5.100 por unidad
        .col-lg-auto.col-md-9(data-aos="fade-left")
          figure
            img(src="@/assets/curso/temas/img84.png").m-auto
      p Si el proceso había previsto producir 520 unidades, pero solo quedaron 500 útiles, la diferencia entre producción prevista y útil debe analizarse como parte del rendimiento y de la merma del proceso.
      p Esta tabla presenta un ejercicio sencillo de integración del costo. Su finalidad es relacionar los componentes del costo, las unidades útiles y el costo unitario.
      .row.justify-content-center
        .col-lg-6
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 8.
            span Ejemplo integrado de cálculo total y unitario del costo de operación
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Concepto
                  th.texto-left Valor
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Materiales directos
                  td.texto-left $ 1.420.000
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Mano de obra directa
                  td.texto-left $ 680.000
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold CIF aplicados
                  td.texto-left $ 450.000
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Costo total de operación
                  td.texto-left $ 2.550.000
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Unidades útiles producidas
                  td.texto-left 500
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Costo unitario
                  td.texto-left $ 5.100
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Métodos de asignación y verificación del cálculo con datos de origen
    p.mb-5 Una vez determinados los consumos y calculado el costo, la empresa debe verificar si los valores asignados realmente corresponden a los datos de origen y a los parámetros definidos. Esta verificación es un paso técnico fundamental, porque evita que el costo final dependa de errores de digitación, conversiones incorrectas, duplicidad de registros o distribución inadecuada de los costos indirectos.
    .caja-12(data-aos="zoom-in").mb-5
      .row.align-items-center
        .col-xl.order-2.order-lg-1.fit___box_container
          p En este punto, se aplican métodos de asignación y de control. En costos indirectos, por ejemplo, la empresa puede usar una base única de reparto, una base departamental o un conductor específico, según la complejidad de la operación. Pero, independientemente del método elegido, la verificación debe responder preguntas como estas: 
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | ¿Los materiales asignados coinciden con las requisiciones?
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | ¿La MOD coincide con las tarjetas tiempo y la nómina?
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | ¿Los CIF asignados se calcularon con la tasa correcta?
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | ¿Las unidades de producción corresponden a los reportes reales?
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | ¿Las conversiones de unidades fueron aplicadas de manera uniforme?
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img85.jpg', alt='').m-auto
    p.mb-5 Una forma práctica de verificación es la conciliación entre fuentes. Si una orden reporta 36 horas de mano de obra, el registro de tiempo debe coincidir con la liquidación interna de la nómina y con la hoja de costeo.
    .row.justify-content-center.mb-5
      .col-lg-10
        .caja-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img86.jpg', alt='').m-auto
            .col-xl.fit___box_container
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Si el material consumido fue de 280 kg, esa cifra debe corresponder al kardex y a la requisición.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Si no existe concordancia, el cálculo puede ser numéricamente correcto, pero técnicamente débil.
    p.mb-5 Por eso, verificar el costo no significa repetir la suma; significa contrastar el resultado con la evidencia que lo respalda. A continuación, se presenta una ruta básica de verificación para el cálculo de costos. Su finalidad es destacar que el costeo debe contrastarse con documentos fuente y parámetros previamente definidos.
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Materiales directos
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Documento o fuente de contraste:] kardex, requisición, ficha técnica.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Pregunta de control:] ¿La cantidad consumida coincide con las salidas registradas y con la unidad de medida usada?
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img87.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Mano de obra directa
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Documento o fuente de contraste:] tarjeta tiempo, nómina, orden de producción.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Pregunta de control:] ¿El tiempo cargado corresponde al trabajo realmente ejecutado?
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img88.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Costos indirectos
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Documento o fuente de contraste:] comprobantes, reportes contables, base de asignación.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Pregunta de control:] ¿La tasa y la base aplicadas fueron las correctas?
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img89.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Producción útil
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Documento o fuente de contraste:] reporte de producción, acta de cierre, control de calidad.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Pregunta de control:] ¿Las unidades del cálculo corresponden a unidades terminadas y útiles?
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img90.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Parámetros técnicos
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Documento o fuente de contraste:] ficha técnica, receta, estándar, política interna.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Pregunta de control:] ¿La merma, tolerancia y rendimiento usados son los definidos por la empresa?
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img91.png', alt='' style="max-width: 500px").m-auto
    .bg-2
      .px-5
        .caja-4.p-5.mb-0(data-aos="fade-right")
          .row.justify-content-center.align-items-center.mb-3
            .col-lg.mb-4.mb-lg-0
              p #[b Ejemplo aplicado]
              p Una empresa registra 1.200 unidades terminadas en la hoja de costeo, pero el reporte de producción presenta 1.160 unidades útiles y 40 defectuosas no recuperables.
              p Si el costo total fue $ 9.280.000, calcular el unitario sobre 1.200 arroja:
              .caja-7.mb-3.text-white(data-aos="zoom-in")
                .row.align-items-center.justify-content-center
                  .col-lg-6.texto-right
                    .caja-8.text-center
                      p.mb-0.line--bottom $ 9.280.000
                      p.mb-0 1.200
                  .col-lg-6.p-0
                    p.mb-0.texto-left = $ 7.733
              p Mientras que hacerlo sobre 1.160 da:
              .caja-7.mb-3.text-white(data-aos="zoom-in")
                .row.align-items-center.justify-content-center
                  .col-lg-6.texto-right
                    .caja-8.text-center
                      p.mb-0.line--bottom $ 9.280.000
                      p.mb-0 1.160
                  .col-lg-6.p-0
                    p.mb-0.texto-left = $ 8.000
            .col-lg-auto.col-md-9(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/img92.png").m-auto
          p.mb-0 Esta diferencia permite comprender por qué verificar la producción útil es indispensable: el error no está en la suma del costo total, sino en la base usada para repartirlo.
        Separador
        #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.5 Documentación y trazabilidad del costo de operación
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            .caja-2(data-aos="fade-right")
              p.mb-0 La trazabilidad del costo significa que la empresa puede reconstruir cómo se obtuvo una cifra de costo, qué documentos la respaldan, qué responsables intervinieron y qué criterios se aplicaron en el cálculo. En términos operativos, un costo trazable no es solo un valor final; es un resultado que puede seguirse desde los datos de origen hasta la hoja final de costeo. Para lograrlo, la documentación debe mantenerse ordenada y articulada.
          .col-lg-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/img93.jpg', alt='').m-auto
          .col-lg
            figure.d-none.d-xl-block(data-aos="fade-left").mb-1
              img(src='@/assets/curso/temas/img94.svg', alt='' style="width: 90px")
            p.mb-0 Esto implica que las requisiciones estén identificadas por orden o lote, que las tarjetas tiempo señalen el proceso o actividad correspondiente, que los CIF tengan soporte contable y que las hojas de cálculo o plantillas de costeo registren fecha, responsable, objeto de costo y versión del cálculo.
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src="@/assets/curso/temas/img95.png").m-auto
          .col-lg
            .caja-1.color-1(data-aos="fade-left")
              p Cuando esta cadena documental se mantiene, el costo puede verificarse, corregirse y explicarse con mayor facilidad.
              p La trazabilidad también mejora la toma de decisiones. Si la gerencia identifica que un producto aumentó de costo, necesita determinar si la variación provino del material, del tiempo de mano de obra, de la tasa de CIF o de una desviación técnica del proceso.
              p.mb-0 Sin documentación, la cifra queda aislada; con trazabilidad, el costo se convierte en información gerencial.
        p.mb-5 A continuación, se presenta una secuencia básica para asegurar trazabilidad en el costeo. Su finalidad es destacar que el costo debe poder seguirse desde su origen hasta su consolidación final.
    .bg-carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img96.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img97.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Registro del consumo
                  ul.fa-ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Documento o soporte:] requisición, kardex, tarjeta tiempo.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Finalidad:] capturar el dato de origen.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img98.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Consolidación del costo
                  ul.fa-ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Documento o soporte:] hoja de costeo, plantilla digital.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Finalidad:] integrar materiales, MOD y CIF.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img99.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Verificación
                  ul.fa-ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Documento o soporte:] matriz de revisión, conciliación de fuentes.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Finalidad:] confirmar consistencia del cálculo.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img100.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Aprobación
                  ul.fa-ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Documento o soporte:] firma o validación del responsable.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Finalidad:] dar control sobre la versión final.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img101.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Archivo y consulta
                  ul.fa-ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Documento o soporte:] carpeta física o digital, base de datos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Finalidad:] permitir revisión posterior y actualización.
        .caja-6.mb-0(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img21.svg', alt='' style="max-width: 85px").m-auto
            .col-xl.mb-4.mb-lg-0
              h4 Ejercicio aplicado 4. Estructura de consumos y cálculo de costos de operación
              p.mb-0 Se invita a revisar  el documento Ejercicio aplicado 4. Estructura de consumos y cálculo de costos de operación, donde se aborda el cálculo práctico de costos de producción a partir del consumo de materiales, mano de obra directa y costos indirectos de fabricación en un lote de desinfectante líquido. 
            .col-xl-2
              a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Ejercicio_aplicado_4.pdf')" target="_blank" type="application/pdf")
                span Descargar
                i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema4',
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
