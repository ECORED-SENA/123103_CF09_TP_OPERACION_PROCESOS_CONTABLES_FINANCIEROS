<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión y el uso adecuado de las herramientas básicas en la ventana <em>Board</em> del <em>software</em> EAGLE.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'En una empresa que fabrica mochilas, la tela principal, el salario del supervisor de planta, el hilo y la depreciación de la máquina de coser deben clasificarse correctamente. ¿Cuál opción presenta la clasificación más adecuada?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Tela e hilo: costos indirectos; supervisor y depreciación: costos directos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Tela: costo fijo; hilo: costo indirecto; supervisor: costo variable; depreciación: costo directo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Tela e hilo: materiales directos; supervisor y depreciación: costos indirectos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Tela: material indirecto; hilo: mano de obra; supervisor: costo directo; depreciación: gasto administrativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Una empresa produce 1.200 unidades en un mes y consume 360 kg de materia prima principal. ¿Cuál es el consumo unitario del material?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '0,20 kg por unidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '0,30 kg por unidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '3,00 kg por unidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '4,33 kg por unidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Una empresa fabrica por pedido específico uniformes empresariales con diseños, cantidades y materiales diferentes para cada cliente. ¿Qué metodología de costeo resulta más pertinente?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Costeo por procesos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Costeo por actividades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Costeo estándar continuo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Costeo por órdenes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'En una planta se producen envases plásticos de manera continua y homogénea durante todo el mes. ¿Qué sistema de costeo se ajusta mejor a esta situación?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Costeo por contratos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Costeo por órdenes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Costeo por procesos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Costeo ABC.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Una empresa desea organizar las fuentes de información de costos en plantillas físicas o digitales. ¿Cuál combinación de soportes resulta más adecuada?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Requisiciones de materiales, tarjetas de tiempo, reportes de producción y comprobantes de CIF.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo facturas de compra y extractos bancarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente reportes contables generales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Correos internos sin formato definido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'En un taller el salario del operario principal depende de las horas efectivamente trabajadas en la orden, mientras que el arriendo de la planta se mantiene igual cada mes. ¿Cómo se clasifican mejor estos costos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ambos son variables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ambos son fijos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Operario: variable; arriendo: fijo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Operario: fijo; arriendo: variable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Una empresa compra esencia por kilogramo, pero su fórmula de producción está expresada en gramos. Si 1 kg cuesta 12.000, ¿cuál es el costo por gramo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '0,12.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '12.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '1,2.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '120.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál situación describe mejor un centro de costo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un producto terminado listo para la venta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una sola factura de compra de materiales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un impuesto que se carga al inventario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un área o proceso donde se acumulan y controlan costos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Una empresa define que sus costos indirectos de fabricación se distribuirán con base en horas máquina. Si los CIF presupuestados son 8.000.000 y la base presupuestada es 2.000 horas máquina, ¿cuál es la tasa predeterminada?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '4.000 por hora.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '2.000 por hora.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '6.000 por hora.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '8.000 por hora.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Si una orden consumió 35 horas máquina y la tasa predeterminada de CIF es 4.000 por hora, ¿cuánto CIF se aplica a esa orden?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '39.000.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '120.000.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '140.000.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '175.000.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'En un sistema de costeo por órdenes, ¿qué documento permite identificar la cantidad de material que salió del almacén para una orden específica?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hoja de nómina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Balance de prueba.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comprobante de egreso bancario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Requisición de materiales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Una empresa tiene al cierre del período 900 unidades terminadas y 200 unidades en proceso al 50 % de avance. ¿Cuántas unidades equivalentes tiene?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '950.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '1.050.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '1.000.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '1.100.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Si los costos acumulados del proceso son 5.500.000 y las unidades equivalentes son 1.000, ¿cuál es el costo unitario equivalente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '5.500.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '55.000.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '5.000.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '550.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'En el costeo ABC, una actividad de inspección cuesta 1.800.000 mensuales y se realizan 90 inspecciones. Si un producto requiere 6 inspecciones, ¿qué costo se le asigna por esa actividad?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '20.000.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '120.000.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '90.000.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '180.000.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Una empresa registra para un lote: materiales directos 1.250.000, mano de obra directa 540.000 y CIF aplicados 310.000. ¿Cuál es el costo total del lote?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '1.790.000.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '1.850.000.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '2.110.000.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '2.100.000.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'Si el lote del punto anterior produjo 420 unidades útiles, ¿cuál es el costo unitario?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '4.500.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '5.000.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '5.250.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '5.500.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'Una empresa registró en la hoja de costeo 700 unidades, pero el reporte de producción muestra 680 unidades útiles y 20 defectuosas no recuperables. ¿Qué debería hacer el analista al calcular el costo unitario?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Dividir siempre entre 700 porque fue la producción inicial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Dividir entre 20 para reconocer el desperdicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'No calcular el costo unitario hasta el siguiente período.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Dividir entre 680 si la política de la empresa costea sobre unidades útiles.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Cuál función de hoja de cálculo resulta más útil para traer automáticamente el valor unitario de un material desde una tabla base?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'SUMA.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'PRODUCTO.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'BUSCARV.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'SI.ERROR.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Cuál situación muestra una debilidad en la actualización de la base de datos de costos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar la fecha de actualización de tarifas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mantener materiales con códigos duplicados y tarifas desactualizadas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Conservar una copia de respaldo del período anterior.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identificar al responsable de la modificación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál opción refleja mejor una verificación adecuada del cálculo de costos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Confirmar solo que la suma final no tenga error aritmético.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comparar el costo final con el del mes anterior sin revisar soportes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Revisar únicamente la tarifa de mano de obra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Contrastar materiales con requisiciones, MOD con tarjetas de tiempo y CIF con comprobantes y bases de asignación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
