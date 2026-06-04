<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Herramientas tecnológicas, registro y actualización de costos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0
        .caja-1.ajuste-caja-1-1(data-aos="fade-right")
          p.mb-0 En la práctica empresarial, el cálculo de costos no depende solo de conocer conceptos o aplicar fórmulas de manera manual. También requiere herramientas que permitan organizar datos, procesarlos con rapidez, reducir errores y conservar la trazabilidad de la información.
      .col-lg-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img102.svg").m-auto
    p.mb-5 Por eso, el uso de hojas de cálculo, plantillas organizacionales, bases de datos y sistemas de registro se convierte en una parte importante del costeo de operación, especialmente cuando la empresa necesita actualizar consumos, revisar variaciones y producir reportes con oportunidad.
    .row.justify-content-center.align-items-center.mb-0
      .col-lg.mb-4.mb-lg-0
        .caja-1.ajuste-caja-1.color-1(data-aos="fade-right")
          p Esta dimensión tecnológica no sustituye el criterio técnico del costeo, pero sí mejora la forma en que la información se captura, se valida y se convierte en un soporte útil para la gestión (Horngren, 2012).
          p.mb-0 En este capítulo, el interés principal es explicar cómo las herramientas tecnológicas apoyan el cálculo y el análisis de costos en contextos reales de trabajo.
      .col-lg-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img103.png").m-auto
    .bg-1
      .px-5
        Separador
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.1 Funciones de hoja de cálculo aplicadas al costeo
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            .caja-2.color-3(data-aos="fade-right")
              p.mb-0 La hoja de cálculo es una de las herramientas más utilizadas para registrar, organizar y calcular costos de operación, sobre todo en pequeñas y medianas empresas. Su utilidad radica en que permite reunir información de materiales, mano de obra y costos indirectos en una misma estructura, aplicar fórmulas, hacer conversiones, verificar resultados y generar resúmenes sin necesidad de repetir cálculos manuales.
          .col-lg-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/img104.jpg', alt='').m-auto
          .col-lg
            p.mb-0 Esto vuelve más ágil el trabajo del analista de costos y disminuye el riesgo de errores aritméticos cuando la información está bien estructurada. En costeo, las funciones más útiles no siempre son las más complejas. De hecho, gran parte del trabajo cotidiano puede resolverse con operaciones básicas de suma, multiplicación, búsqueda, validación y manejo de errores.
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img105.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Por ejemplo, una empresa puede calcular el costo de materiales multiplicando cantidades consumidas por tarifas unitarias, sumar la mano de obra por lote, distribuir los CIF con base en horas de trabajo y comparar consumos estándar con consumos reales usando una sola hoja. Lo importante es que la estructura de la hoja responda al proceso de costeo y no que se convierta en un archivo cargado de fórmulas difíciles de controlar.
        p.mb-5 A continuación, se presentan algunas de las funciones más utilizadas en el procesamiento de datos de costos. Entre ellas se incluyen operaciones para sumar valores, multiplicar cantidades por tarifas, aplicar validaciones lógicas, controlar errores, consultar datos desde tablas base y calcular valores totales en una sola operación. Estas funciones facilitan el registro, la automatización y la verificación de la información empleada en el cálculo de costos de operación.
        .row.justify-content-center.mb-5
          .col-lg-10
            .row.align-items-center
              .col-xl
                .row.mb-2.m-0(data-aos="fade-right")
                  .col-lg.caja-13
                    p.mb-0 =SUMA(rango)
                  .col-lg.caja-14
                    p.mb-0 Totalizar materiales, horas o costos acumulados.
                .row.mb-2.m-0(data-aos="fade-right")
                  .col-lg.caja-13
                    p.mb-0 =PRODUCTO(celda1;celda2)
                  .col-lg.caja-14
                    p.mb-0 Calcular costo por cantidad y tarifa.
                .row.mb-2.m-0(data-aos="fade-right")
                  .col-lg.caja-13
                    p.mb-0 =SI(prueba_lógica;valor_si_verdadero;valor_si_falso)
                  .col-lg.caja-14
                    p.mb-0 Aplicar validaciones simples, por ejemplo cuando el consumo supera el estándar.
                .row.mb-2.m-0(data-aos="fade-right")
                  .col-lg.caja-13
                    p.mb-0 =SI.ERROR(fórmula;valor_alternativo)
                  .col-lg.caja-14
                    p.mb-0 Evitar mensajes de error en divisiones o búsquedas incompletas.
                .row.mb-2.m-0(data-aos="fade-right")
                  .col-lg.caja-13
                    p.mb-0 =BUSCARV(...)
                  .col-lg.caja-14
                    p.mb-0 Traer tarifas, códigos o centros de costo desde una tabla base.
                .row.m-0(data-aos="fade-right")
                  .col-lg.caja-13
                    p.mb-0 =SUMAPRODUCTO(rango1;rango2)
                  .col-lg.caja-14
                    p.mb-0 Calcular valores totales de materiales o actividades en una sola operación.
        .caja-4.p-5.mb-5(data-aos="fade-right")
          .row.justify-content-center.align-items-center.mb-3
            .col-lg.mb-4.mb-lg-0
              p #[b Ejemplo práctico]
              .row
                .col
                  p.mb-0 Si en una hoja de costos se tiene:
                .col
                  ul.fa-ul.estilo___ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | columna B: cantidad consumida. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | columna C: tarifa unitaria. 
              p Y el costo total del material se obtiene con:
              .caja-7.mb-3.text-white.text-center(data-aos="zoom-in")
                p.mb-0 =SUMA(D2:D10)
              p Si se quiere traer automáticamente la tarifa de un material desde una tabla maestra:
              .caja-7.mb-3.text-white.text-center(data-aos="zoom-in")
                p.mb-0 =BUSCARV(A2;Tarifas!A:B;2;FALSO)
              p Estas funciones simplifican el trabajo, pero solo producen resultados útiles si la empresa ya definió correctamente sus datos de origen, sus unidades de medida y sus criterios de asignación.
            .col-lg-auto.col-md-9(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/img106.png").m-auto
          p.mb-0 Esta tabla resume funciones básicas de hoja de cálculo útiles para el trabajo diario de costeo. Su finalidad es destacar que muchas operaciones de costos pueden automatizarse con herramientas sencillas y bien organizadas.
    .bg-1
      .px-5
        p.mb-5 
        .row.justify-content-center.mb-5
          .col-lg-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 9.
              span Funciones de hoja de cálculo aplicadas al costeo
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Función o recurso
                    th.ajuste-border-tabla.texto-left Aplicación en costos
                    th.texto-left Ejemplo práctico
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold SUMA
                    td.ajuste-border-tabla.texto-left Totalizar costos o cantidades
                    td.texto-left Sumar materiales directos de un lote
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Multiplicación
                    td.ajuste-border-tabla.texto-left Calcular costo por cantidad y tarifa
                    td.texto-left Horas MOD × tarifa por hora
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold SI
                    td.ajuste-border-tabla.texto-left Validar condiciones del cálculo
                    td.texto-left Generar alerta si la merma supera la tolerancia
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold SI.ERROR
                    td.ajuste-border-tabla.texto-left Evitar errores visibles en la hoja
                    td.texto-left Reemplazar división inválida por cero
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold BUSCARV
                    td.ajuste-border-tabla.texto-left Traer tarifas, códigos o descripciones
                    td.texto-left Cargar el valor unitario del material desde una tabla base
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold SUMAPRODUCTO
                    td.ajuste-border-tabla.texto-left Calcular valores totales en series
                    td.texto-left Cantidades consumidas × costos unitarios
        .row.justify-content-center.mb-0
          .col-lg-10
            .caja-3.color-3(data-aos="zoom-in")
              .row.align-items-center
                .col-xl-auto
                  figure
                    img(src='@/assets/curso/temas/img107.jpg', alt='').m-auto
                .col-xl.fit___box_container
                  h5 Ejemplo aplicado
                  p Una empresa de alimentos registra en una hoja de cálculo el consumo de azúcar, harina y mantequilla por lote. En lugar de calcular manualmente cada línea, usa una tabla base con los precios de los materiales y una función de búsqueda para traer automáticamente la tarifa unitaria.
                  p.mb-0 Después, multiplica cantidad por tarifa y suma el resultado del lote completo. Este procedimiento no solo ahorra tiempo, sino que también permite actualizar automáticamente el costo cuando cambia el precio del insumo, siempre que la tabla base se mantenga actualizada.
        Separador
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Formatos y plantillas organizacionales para el registro de costos
        p.mb-5 A continuación, se presenta un video sobre los formatos y plantillas organizacionales para el registro de costos, destacando su importancia en la organización, control y trazabilidad de la información dentro de los sistemas de costeo empresariales.
        figure(data-aos="zoom-in").mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/NlJWlyiaSMY?si=XqboUlSLfCN9WG5O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption #[b Video]. Importancia de los formatos organizacionales en el sistema de costeo empresarial
    p.mb-5 Se presentan los formatos básicos para registrar la información de costos en la empresa. El propósito es resaltar que el proceso de costeo debe respaldarse con soportes documentales claros, coherentes y consistentes.
    .bg-2
      .px-5
        .bg-carrusel
          .px-5
            SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img108.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Requisición de materiales
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Función principal:] controlar salidas de materiales.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Información que registra:] código, cantidad, lote, área solicitante.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img109.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Tarjeta de tiempo
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Función principal:] medir mano de obra aplicada.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Información que registra:] horas, minutos, trabajador, orden o proceso.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img110.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Hoja de costeo
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Función principal:] consolidar el costo del objeto.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Información que registra:] MD, MOD, CIF, costo total y unitario.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img111.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Reporte de producción
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Función principal:] registrar volumen producido.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Información que registra:] unidades previstas, útiles, defectuosas.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img112.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Formato de CIF
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Función principal:] acumular costos indirectos del período.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Información que registra:] energía, mantenimiento, supervisión, depreciación.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img113.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Matriz de validación
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Función principal:] revisar consistencia del cálculo.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Información que registra:] cruce entre datos de origen, fórmulas y resultados.
            .row.justify-content-center.mb-0
              .col-lg-10
                .caja-3.color-2(data-aos="zoom-in")
                  .row.align-items-center
                    .col-xl-auto
                      figure
                        img(src='@/assets/curso/temas/img114.jpg', alt='').m-auto
                    .col-xl.fit___box_container
                      h5 Ejemplo aplicado
                      p.mb-0 Una empresa de confección usa tres plantillas principales: una para consumo de tela por lote, una para tiempo de confección por operaria y una hoja de costeo final. Cuando el lote termina, el analista consolida los valores en la hoja final. Gracias a que los tres formatos tienen el mismo código de lote, puede rastrear fácilmente de dónde salió cada cifra del costo unitario.
            Separador
            #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
              h2 5.3 Herramientas tecnológicas para cálculo y análisis de costos
            .row.justify-content-center.align-items-center.mb-5
              .col-lg.mb-4.mb-lg-0
                .caja-1.ajuste-caja-1.color-1(data-aos="fade-right")
                  p Además de la hoja de cálculo, muchas empresas utilizan herramientas tecnológicas complementarias para fortalecer el costeo. Entre ellas se encuentran los módulos de inventario, los sistemas contables, los programas de nómina, los ERP, los tableros de control y algunas aplicaciones internas diseñadas para consolidar consumos o reportes operativos.
                  p.mb-0 La función de estas herramientas no es reemplazar la lógica del costeo, sino integrarla con otros procesos de la empresa para que la información fluya con mayor rapidez y menor duplicidad. En un contexto práctico, la ventaja de estas herramientas está en la integración.
              .col-lg-auto.col-md-9(data-aos="fade-left")
                figure
                  img(src="@/assets/curso/temas/img115.png").m-auto
            p.mb-5 Si el sistema de inventarios registra consumos, el módulo de nómina registra horas o salarios y contabilidad concentra los gastos indirectos, el análisis de costos puede alimentarse con información más completa y con menos reprocesos.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-2.ajuste-caja-2-3(data-aos="fade-right")
          p.mb-0 Esto es especialmente importante cuando la empresa trabaja con muchos productos, varias áreas o períodos frecuentes de costeo. El problema aparece cuando la información existe, pero no está conectada o no se codifica de forma consistente.
      .col-lg-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img116.jpg', alt='').m-auto
      .col-lg
        p.mb-0 Las herramientas tecnológicas también fortalecen el análisis. Permiten comparar períodos, revisar variaciones, identificar productos con mayor costo, calcular participaciones porcentuales y construir reportes para gerencia. Por ejemplo, un tablero sencillo puede incluir:
    .bg-carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img117.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Costo unitario por producto
            p.mb-0.text-center Comparar el costo entre productos o períodos.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img118.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Variación del costo frente al período anterior
            p.mb-0.text-center Identificar aumentos o disminuciones relevantes.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img119.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Peso de materiales, MOD y CIF en el costo total
            p.mb-0.text-center Analizar la participación de cada componente del costo.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img120.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Consumo real frente al estándar
            p.mb-0.text-center Revisar desviaciones operativas.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img121.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Productos o servicios con mayor desviación
            p.mb-0.text-center Priorizar análisis y control sobre costos críticos.
        p.mb-5 Esto convierte la tecnología en apoyo para la interpretación y no solo para el almacenamiento de datos. A continuación, se presentan herramientas tecnológicas aplicadas al cálculo y análisis de costos.
        .row.justify-content-center.mb-5
          .col-lg-10
            AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
              .row(titulo="Hoja de cálculo").ajuste-cajaAcordion
                .col-xl-7.mb-4.mb-lg-0.ajuste-vineta
                  ul.fa-ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Uso en el costeo:] registro y cálculo básico.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ejemplo de aplicación:] hoja de costeo por lote.
                .col-xl-5
                  figure
                    img(src='@/assets/curso/temas/img122.png', alt='' style="width: 350px")
              .row(titulo="Sistema de inventarios").ajuste-cajaAcordion
                .col-xl-7.mb-4.mb-lg-0.ajuste-vineta
                  ul.fa-ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Uso en el costeo:] control de entradas y salidas.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ejemplo de aplicación:] valor de materiales consumidos.
                .col-xl-5
                  figure
                    img(src='@/assets/curso/temas/img123.png', alt='' style="width: 350px")
              .row(titulo="<em>Software</em> de nómina").ajuste-cajaAcordion
                .col-xl-7.mb-4.mb-lg-0.ajuste-vineta
                  ul.fa-ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Uso en el costeo:] cálculo de mano de obra.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ejemplo de aplicación:] horas y tarifas de personal.
                .col-xl-5
                  figure
                    img(src='@/assets/curso/temas/img124.png', alt='' style="width: 350px")
              .row(titulo="Sistema contable").ajuste-cajaAcordion
                .col-xl-7.mb-4.mb-lg-0.ajuste-vineta
                  ul.fa-ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Uso en el costeo:] consolidación de CIF.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ejemplo de aplicación:] reporte de gastos indirectos del período.
                .col-xl-5
                  figure
                    img(src='@/assets/curso/temas/img125.png', alt='' style="width: 350px")
              .row(titulo="ERP").ajuste-cajaAcordion
                .col-xl-7.mb-4.mb-lg-0.ajuste-vineta
                  ul.fa-ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Uso en el costeo:] integración de áreas y datos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ejemplo de aplicación:] cruce entre compras, producción y costos.
                .col-xl-5
                  figure
                    img(src='@/assets/curso/temas/img126.png', alt='' style="width: 350px")
              .row(titulo="Tablero de control").ajuste-cajaAcordion
                .col-xl-7.mb-4.mb-lg-0.ajuste-vineta
                  ul.fa-ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Uso en el costeo:] análisis de resultados.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ejemplo de aplicación:] comparación mensual del costo unitario.
                .col-xl-5
                  figure
                    img(src='@/assets/curso/temas/img127.png', alt='' style="width: 350px")
    .row.justify-content-center.mb-0
      .col-lg-10
        .caja-3.color-2(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img128.jpg', alt='').m-auto
            .col-xl.fit___box_container
              h5 Ejemplo aplicado
              p.mb-0 Una empresa de mantenimiento técnico usa una hoja de cálculo para costear servicios, pero ahora desea mejorar el análisis. Para ello, conecta el reporte mensual de horas de los técnicos, el consumo de repuestos y los gastos de desplazamiento en una sola base, y luego resume los resultados en un tablero que presenta el costo promedio por servicio y la variación por tipo de cliente. El costo sigue calculándose con criterios contables y operativos, pero la tecnología facilita interpretarlo y explicarlo mejor.
    Separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.4  Lineamientos para la actualización de bases de datos de costos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0
        p Una base de datos de costos debe mantenerse actualizada para que el cálculo siga siendo útil. Si la empresa trabaja con tarifas antiguas, materiales descontinuados, centros de costo mal codificados o unidades de medida inconsistentes, el sistema de costeo pierde valor. 
        p.mb-0 Por ello, actualizar una base de costos no significa solo agregar cifras nuevas, sino revisar que la estructura siga siendo coherente con la operación real (Horngren, 2012). En términos prácticos, una base de datos de costos suele contener:
      .col-lg-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img129.png").m-auto
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 10.
          span Elementos básicos de una base de datos de costos
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Elemento de la base de datos
                th.texto-left Función dentro del costeo
            tbody
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Catálogo de materiales y servicios
                td.texto-left Identificar recursos utilizados en la operación.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Unidades de medida
                td.texto-left Mantener coherencia en registros y cálculos.
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Tarifas unitarias
                td.texto-left Valorar materiales, tiempos y servicios.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Centros de costo
                td.texto-left Organizar la acumulación de costos.
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Objetos de costo
                td.texto-left Relacionar el cálculo con productos, servicios o procesos.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Conductores de asignación
                td.texto-left Distribuir costos indirectos.
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Estándares o parámetros técnicos
                td.texto-left Comparar consumos reales frente a referencias previstas.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Historial de períodos anteriores
                td.texto-left Analizar tendencias y variaciones del costo.
    p.mb-5 La actualización debe seguir lineamientos claros, por ejemplo:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img130.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Validar datos antes de cargar").ajuste-cajaAcordion
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Finalidad:] evitar errores en el cálculo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Riesgo si no se aplica:] costos con información incorrecta.
          .row(titulo="Registrar fecha de actualización").ajuste-cajaAcordion
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Finalidad:] conocer la vigencia del dato.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Riesgo si no se aplica:] uso de tarifas obsoletas.
          .row(titulo="Identificar responsable del cambio").ajuste-cajaAcordion
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Finalidad:] asegurar control del registro.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Riesgo si no se aplica:] falta de trazabilidad.
          .row(titulo="Conservar respaldo anterior").ajuste-cajaAcordion
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Finalidad:] permitir revisión histórica.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Riesgo si no se aplica:] pérdida de comparación entre períodos.
          .row(titulo="Estandarizar códigos y unidades").ajuste-cajaAcordion
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Finalidad:] mantener consistencia de la base.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Riesgo si no se aplica:] duplicidad o mala conversión.
          .row(titulo="Revisar periódicamente parámetros").ajuste-cajaAcordion
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Finalidad:] ajustar la base a la operación real.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Riesgo si no se aplica:] desfase entre sistema y proceso.
    .row.justify-content-center.mb-0
      .col-lg-10
        .caja-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img131.jpg', alt='').m-auto
            .col-xl.fit___box_container
              h5 Ejemplo aplicado
              p Una empresa conserva el costo del empaque con una tarifa de hace ocho meses. Al actualizar precios, descubre que el valor real subió 18 %.
              p.mb-0 Si no corrige la base de datos, todos los costos unitarios siguientes quedarán subestimados. Este ejemplo permite comprender que la actualización no es una tarea secundaria, sino una condición para que el costeo siga representando la realidad económica del proceso.
    Separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.5 Validación de datos, reportes, integración de sistemas y seguridad de la información
    p.mb-5 El costeo no termina cuando la cifra aparece en una hoja. Antes de usarla, la empresa debe validar que los datos sean consistentes, que los reportes reflejen lo que realmente ocurrió, que la información provenga de fuentes integradas y que el sistema de registro tenga condiciones mínimas de seguridad. Esta fase es importante porque un costo técnicamente bien calculado puede perder valor si se basa en datos incompletos, si no puede explicarse o si cualquier usuario modifica la base sin control (Hansen, 2007). La validación de datos implica revisar:
    .bg-2
      .px-5
        .bg-carrusel
          .px-5
            SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img132.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Cantidades consumidas frente a salidas registradas
                p.mb-0.text-center Confirmar coherencia entre consumo y documentos fuente.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img133.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Horas de MOD frente al tiempo trabajado
                p.mb-3.text-center Verificar que el tiempo cargado corresponda a la operación real.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img134.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Fórmulas utilizadas
                p.mb-3.text-center Detectar errores de cálculo o referencias incorrectas.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img135.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Conversión de unidades de medida
                p.mb-3.text-center Garantizar uniformidad en el cálculo del costo.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img136.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text CIF asignados frente a la base definida
                p.mb-3.text-center Confirmar que la distribución se realizó correctamente.
            p.mb-5 Los reportes, por su parte, cumplen una función gerencial. No basta con tener una hoja de costos; la empresa necesita convertir el cálculo en información que pueda interpretarse y utilizarse para la toma de decisiones.  Algunos reportes útiles son:
            .row.justify-content-center.mb-5
              .col-lg-8
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 11.
                  span Reportes utilizados para el análisis de costos
                .tabla-a(data-aos="zoom-in")
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Tipo de reporte
                        th.texto-left Utilidad
                    tbody
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Costo unitario por producto o servicio
                        td.texto-left Analizar el comportamiento del costo individual.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Costo total por lote, orden o período
                        td.texto-left Evaluar el costo acumulado de la operación.
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Participación de materiales, MOD y CIF
                        td.texto-left Identificar el peso de cada componente del costo.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Comparación entre costo estándar y costo real
                        td.texto-left Detectar desviaciones operativas.
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Variación entre períodos
                        td.texto-left Revisar tendencias y cambios en el comportamiento del costo.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Reporte de productos o servicios con mayor costo
                        td.texto-left Priorizar acciones de control y análisis.
            p.mb-5 La integración de sistemas reduce duplicidad y mejora trazabilidad. Si el kardex, la nómina y el registro de CIF pueden relacionarse entre sí, el analista evita transcribir datos varias veces. En empresas pequeñas esta integración puede ser manual, pero organizada; en empresas medianas o grandes puede apoyarse en un sistema más robusto.
            .row.justify-content-center.align-items-center.mb-5
              .col-lg.mb-4.mb-lg-0
                p.mb-0 La seguridad de la información también es parte del costeo. Proteger archivos, restringir accesos, bloquear fórmulas críticas, conservar copias de respaldo y registrar cambios evita pérdidas, alteraciones no controladas y problemas de confiabilidad. En la práctica, una hoja de costos sin seguridad puede ser tan riesgosa como una hoja mal calculada.  A continuación, se presentan controles básicos para validación, reporte e integración de la información de costos.
              .col-lg-auto.col-md-9(data-aos="fade-left")
                figure
                  img(src="@/assets/curso/temas/img137.svg").m-auto
            .bg-carrusel
              .px-5
                SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
                  .tarjeta.color-acento-botones
                    .row.justify-content-center.mb-3
                      .col-12
                        img(src='@/assets/curso/temas/img138.png' ).m-auto
                    h4.mb-3.estilo-text Validación de datos
                    .box___card_sinbordes_p
                      ul.fa-ul.mb-0
                        li.mb-2
                          span.fa-li
                            i.fas.fa-check-circle
                          | #[b Control sugerido:] cruce con documentos fuente y revisión de fórmulas.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-check-circle
                          | #[b Resultado esperado:] costos coherentes y verificables.
                  .tarjeta.color-acento-botones
                    .row.justify-content-center.mb-3
                      .col-12
                        img(src='@/assets/curso/temas/img139.png' ).m-auto
                    h4.mb-3.estilo-text Reportes
                    .box___card_sinbordes_p
                      ul.fa-ul.mb-0
                        li.mb-2
                          span.fa-li
                            i.fas.fa-check-circle
                          | #[b Control sugerido:] resúmenes periódicos y comparativos.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-check-circle
                          | #[b Resultado esperado:] información útil para decisión y control.
                  .tarjeta.color-acento-botones
                    .row.justify-content-center.mb-3
                      .col-12
                        img(src='@/assets/curso/temas/img140.png' ).m-auto
                    h4.mb-3.estilo-text Integración de sistemas
                    .box___card_sinbordes_p
                      ul.fa-ul.mb-0
                        li.mb-2
                          span.fa-li
                            i.fas.fa-check-circle
                          | #[b Control sugerido:] relación entre inventarios, nómina y contabilidad.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-check-circle
                          | #[b Resultado esperado:] menor duplicidad y mayor trazabilidad.
                  .tarjeta.color-acento-botones
                    .row.justify-content-center.mb-3
                      .col-12
                        img(src='@/assets/curso/temas/img141.png' ).m-auto
                    h4.mb-3.estilo-text Seguridad
                    .box___card_sinbordes_p
                      ul.fa-ul.mb-0
                        li.mb-2
                          span.fa-li
                            i.fas.fa-check-circle
                          | #[b Control sugerido:] accesos restringidos, respaldos y bloqueo de celdas críticas.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-check-circle
                          | #[b Resultado esperado:] protección de la información.
                  .tarjeta.color-acento-botones
                    .row.justify-content-center.mb-3
                      .col-12
                        img(src='@/assets/curso/temas/img142.png' ).m-auto
                    h4.mb-3.estilo-text Control de versiones
                    .box___card_sinbordes_p
                      ul.fa-ul.mb-0
                        li.mb-2
                          span.fa-li
                            i.fas.fa-check-circle
                          | #[b Control sugerido:] archivo de versiones anteriores.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-check-circle
                          | #[b Resultado esperado:] seguimiento histórico del costeo.
                .bg-4
                  .px-5
                    .caja-6.mb-5(data-aos="flip-up")
                      .row.align-items-center
                        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
                          figure
                            img(src='@/assets/curso/temas/img21.svg', alt='' style="max-width: 85px").m-auto
                        .col-xl.mb-4.mb-lg-0
                          h4 Ejercicio aplicado 5. Herramientas tecnológicas, registro y actualización de costos
                          p.mb-0 Se invita a revisar el documento Ejercicio aplicado 5. Herramientas tecnológicas, registro y actualización de costos, donde se aborda la importancia del uso adecuado de herramientas tecnológicas y controles de validación en los procesos de costeo empresarial.
                        .col-xl-2
                          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Ejercicio_aplicado_5.pdf')" target="_blank" type="application/pdf")
                            span Descargar
                            i.fas.fa-file-download
                    p.mb-5 A partir de lo desarrollado, el cálculo de costos de operación se comprende como un proceso técnico que exige identificar los elementos del costo, reconocer la estructura del proceso productivo o de servicios, organizar la información de consumos y seleccionar la metodología de costeo más adecuada según la realidad de la empresa. En este recorrido, el análisis de centros de costo, unidades de medida, requisiciones, tarjetas de tiempo, asignación de costos indirectos y determinación de costos unitarios y totales permite entender que costear no consiste únicamente en operar fórmulas, sino en construir información confiable a partir de datos de origen, criterios de asignación y procedimientos documentados que den soporte al resultado final (García Colín, 2014).
                    .row.justify-content-center.align-items-center.mb-0
                      .col-lg.mb-4.mb-lg-0
                        .caja-1.ajuste-caja-1.color-2(data-aos="fade-right")
                          p.mb-0 Desde esta perspectiva, el componente presenta que la utilidad del costeo no termina en la obtención de una cifra, sino en la posibilidad de registrar, verificar, actualizar y analizar esa información mediante herramientas tecnológicas y formatos organizacionales que favorecen la trazabilidad y el control. De este modo, la empresa puede fortalecer la medición de sus recursos, mejorar la precisión del cálculo y disponer de información más consistente para apoyar decisiones relacionadas con producción, prestación de servicios, eficiencia operativa y control de resultados, integrando los fundamentos del costo con su aplicación práctica en contextos empresariales concretos (Hansen, 2007).
                      .col-lg-auto.col-md-9(data-aos="fade-left")
                        figure
                          img(src="@/assets/curso/temas/img143.png").m-auto

</template>

<script>
export default {
  name: 'Tema5',
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
