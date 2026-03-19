(function () {
  const S = {
    'dec-mensual': {
      name: 'Declaraciones Mensuales SAR',
      id: 'dec-mensual',
      price: 2500,
      icon: 'bi-calendar2-check',
      badgeIcon: 'bi-calendar-check',
      badgeText: 'Servicio recurrente',
      subtitle: 'Presentacion puntual y precisa de todas sus obligaciones tributarias mensuales ante el SAR.',
      desc: {
        title: 'Su cumplimiento fiscal mensual, sin estres',
        body: [
          'Nuestro servicio de <strong>Declaraciones Mensuales</strong> cubre la preparacion, revision y presentacion oportuna de todas las obligaciones tributarias que su empresa debe cumplir ante el Servicio de Administracion de Rentas (SAR) de Honduras. Nos encargamos del Impuesto sobre Ventas (ISV), retenciones de ISR, contribuciones al IHSS, RAP, INFOP y cualquier otra obligacion periodica aplicable a su actividad economica.',
          'Trabajamos de forma proactiva: recopilamos su informacion contable, la validamos, preparamos los formularios correspondientes y los presentamos dentro de los plazos legales, evitando multas, recargos e intereses que podrian afectar la salud financiera de su negocio.'
        ]
      },
      benefits: [
        ['bi-shield-check', 'Cumplimiento garantizado', 'Presentamos sus declaraciones antes del vencimiento, evitando multas y recargos del SAR.'],
        ['bi-clock-history', 'Ahorro de tiempo', 'Dedique su tiempo a hacer crecer su negocio mientras nosotros manejamos la carga tributaria.'],
        ['bi-graph-up-arrow', 'Optimizacion fiscal', 'Identificamos deducciones y creditos fiscales aplicables para reducir legalmente su carga impositiva.'],
        ['bi-person-check', 'Contador dedicado', 'Un profesional asignado que conoce su empresa y le brinda atencion personalizada cada mes.'],
        ['bi-file-earmark-bar-graph', 'Reportes claros', 'Reciba resumenes mensuales con el detalle de lo declarado, montos pagados y proximos vencimientos.']
      ],
      process: {
        sub: 'Un proceso sencillo y transparente de principio a fin.',
        steps: [
          ['Recopilacion de informacion', 'Recibimos su documentacion contable del mes: facturas de venta, facturas de compra, planillas y comprobantes de retencion.'],
          ['Revision y conciliacion', 'Nuestro equipo verifica los montos, valida las retenciones y concilia la informacion con los registros contables.'],
          ['Preparacion de formularios', 'Elaboramos los formularios del SAR (DEI-345, DEI-352, etc.) con los calculos correctos de impuestos a pagar o saldo a favor.'],
          ['Presentacion y pago', 'Presentamos electronicamente ante el SAR y le notificamos con el comprobante de presentacion y el resumen del periodo.']
        ]
      },
      pricing: {
        badge: 'Mas popular',
        label: 'Desde',
        amount: 'L 2,500',
        suffix: ' /mes',
        note: 'Precio varia segun volumen de transacciones',
        feats: ['Declaracion ISV mensual', 'Retenciones de ISR', 'Contribuciones IHSS / RAP / INFOP', 'Presentacion electronica al SAR', 'Contador dedicado', 'Reporte mensual detallado', 'Soporte via WhatsApp']
      },
      plans: {
        sub: 'Tres opciones transparentes segun el volumen de obligaciones tributarias de su negocio.',
        tiers: [
          { n: 'Esencial', d: 'Para emprendedores y negocios pequenos con hasta 30 transacciones mensuales.', p: 'L 1,500', s: ' /mes', f: ['Declaracion ISV mensual', 'Retenciones de ISR', 'Presentacion electronica al SAR', 'Reporte mensual en PDF', 'Soporte por correo electronico'], ft: false, cta: 'Comenzar' },
          { n: 'Profesional', d: 'Para PYMES con multiples obligaciones y hasta 100 transacciones mensuales.', p: 'L 2,800', s: ' /mes', f: ['Todo lo del plan Esencial', 'Contribuciones IHSS / RAP / INFOP', 'Contador dedicado', 'Impuesto municipal (si aplica)', 'Soporte via WhatsApp', 'Alertas de vencimiento'], ft: true, cta: 'Comenzar' },
          { n: 'Empresarial', d: 'Para empresas con alto volumen, multiples establecimientos o regimenes especiales.', p: 'A medida', s: '', f: ['Todo lo del plan Profesional', 'Transacciones ilimitadas', 'Multiples establecimientos', 'Integracion con su ERP', 'Asesoria tributaria avanzada', 'Soporte prioritario'], ft: false, cta: 'Solicitar cotizacion' }
        ]
      },
      includes: {
        sub: 'Un paquete completo para que usted no se preocupe por nada relacionado con sus declaraciones mensuales.',
        cards: [
          ['bi-receipt', 'icon-teal', 'Declaracion del ISV', 'Preparacion y presentacion del Impuesto Sobre Ventas de acuerdo a sus transacciones del periodo.'],
          ['bi-cash-stack', 'icon-crimson', 'Retenciones de ISR', 'Calculo y declaracion de retenciones del Impuesto Sobre la Renta a empleados y proveedores.'],
          ['bi-people', 'icon-brass', 'Contribuciones patronales', 'Presentacion de IHSS, RAP e INFOP con los calculos correctos segun su planilla de empleados.'],
          ['bi-cloud-upload', 'icon-teal', 'Presentacion electronica', 'Envio de formularios a traves de la plataforma del SAR y generacion de comprobantes de presentacion.'],
          ['bi-bar-chart-line', 'icon-crimson', 'Reporte mensual', 'Resumen ejecutivo con montos declarados, impuestos pagados, saldos a favor y proximos vencimientos.'],
          ['bi-headset', 'icon-brass', 'Soporte continuo', 'Atencion personalizada por WhatsApp, correo o llamada para resolver sus dudas tributarias.']
        ],
        check: ['Declaracion ISV (formulario DEI-345)', 'Retenciones ISR a empleados', 'Retenciones ISR a proveedores', 'Contribucion IHSS patronal y laboral', 'Contribucion RAP', 'Contribucion INFOP', 'Declaracion de impuesto municipal (si aplica)', 'Calculo de saldos a favor', 'Presentacion electronica al SAR', 'Comprobantes de presentacion', 'Reporte resumen mensual (PDF)', 'Asesoria tributaria basica incluida']
      },
      faq: {
        sub: 'Las consultas mas comunes sobre nuestro servicio de declaraciones mensuales.',
        items: [
          ['Que informacion necesitan para preparar mis declaraciones?', 'Necesitamos sus facturas de venta y compra del periodo, comprobantes de retencion, planilla de empleados y cualquier otro documento fiscal relevante. Le proporcionamos una checklist mensual y podemos conectarnos directamente a su sistema contable.'],
          ['Que pasa si no entrego la informacion a tiempo?', 'Le enviamos recordatorios automaticos con 10 y 5 dias de anticipacion al vencimiento. Si la informacion se retrasa, trabajamos con caracter de urgencia para presentar la declaracion a tiempo.'],
          ['El precio varia segun el tamano de mi empresa?', 'Si, ofrecemos tres planes adaptados al tamano de su empresa. El plan Esencial comienza en L 1,500/mes para negocios con hasta 30 transacciones. El plan Profesional cubre hasta 100 transacciones por L 2,800/mes.'],
          ['Puedo cancelar el servicio en cualquier momento?', 'Si, no exigimos contratos a largo plazo. Puede cancelar con 15 dias de anticipacion al siguiente periodo. Le entregamos toda su documentacion organizada al momento de la cancelacion.'],
          ['Como aseguran que las declaraciones se presenten a tiempo?', 'Manejamos un calendario fiscal interno con alertas automatizadas para cada cliente. Iniciamos el proceso con al menos 10 dias habiles de anticipacion y mantenemos un record de puntualidad superior al 99.5%.']
        ]
      },
      related: ['isr-anual', 'contabilidad-gral', 'gestion-sar'],
      cta: ['Listo para dejar de preocuparse por sus impuestos?', 'Contactenos hoy y reciba una evaluacion gratuita de su situacion fiscal. Sin compromisos.']
    },

    'isr-anual': {
      name: 'Declaracion Anual ISR',
      id: 'isr-anual',
      price: 5000,
      icon: 'bi-file-earmark-text',
      badgeIcon: 'bi-calendar-event',
      badgeText: 'Servicio anual',
      subtitle: 'Calculo, preparacion y presentacion de su declaracion anual del Impuesto Sobre la Renta ante el SAR.',
      desc: {
        title: 'Maximice sus beneficios fiscales en su declaracion anual',
        body: [
          'La <strong>Declaracion Anual del ISR</strong> es una de las obligaciones fiscales mas importantes para personas naturales y juridicas en Honduras. Nuestro equipo de expertos tributarios analiza a fondo sus ingresos, gastos deducibles y creditos fiscales para presentar una declaracion precisa que optimice su posicion fiscal dentro del marco legal vigente.',
          'Revisamos exhaustivamente toda su documentacion del periodo fiscal, identificamos oportunidades de ahorro que podria estar pasando por alto y preparamos los formularios correspondientes con los calculos exactos, garantizando el cumplimiento con el Codigo Tributario hondureno.'
        ]
      },
      benefits: [
        ['bi-piggy-bank', 'Maximizacion de deducciones', 'Identificamos todas las deducciones legales aplicables para reducir su base imponible al maximo permitido por ley.'],
        ['bi-shield-check', 'Cumplimiento normativo', 'Declaracion preparada conforme al Codigo Tributario y las regulaciones vigentes del SAR de Honduras.'],
        ['bi-calculator', 'Calculos precisos', 'Verificacion exhaustiva de cifras para evitar errores que generen requerimientos o auditorias del SAR.'],
        ['bi-clock-history', 'Presentacion oportuna', 'Gestionamos los plazos para que su declaracion se presente antes de la fecha limite sin recargos.'],
        ['bi-file-earmark-check', 'Documentacion respaldada', 'Organizamos y archivamos toda la documentacion soporte de su declaracion por el periodo legal requerido.']
      ],
      process: {
        sub: 'Un proceso meticuloso para asegurar la precision de su declaracion anual.',
        steps: [
          ['Recopilacion del periodo fiscal', 'Reunimos estados financieros, facturas, comprobantes de retencion, constancias bancarias y toda la documentacion del ano fiscal.'],
          ['Analisis y calculo del ISR', 'Calculamos su renta neta gravable, aplicamos deducciones permitidas, creditos fiscales y determinamos el impuesto a pagar o saldo a favor.'],
          ['Preparacion del formulario', 'Elaboramos el formulario oficial de declaracion jurada con todos los anexos y cuadros complementarios requeridos por el SAR.'],
          ['Revision final y presentacion', 'Realizamos una doble verificacion de cifras antes de presentar electronicamente. Le entregamos el acuse de recibo y resumen ejecutivo.']
        ]
      },
      pricing: {
        badge: 'Persona natural',
        label: 'Desde',
        amount: 'L 5,000',
        suffix: '',
        note: 'Precio varia segun complejidad y tipo de contribuyente',
        feats: ['Analisis completo del periodo fiscal', 'Calculo de renta neta gravable', 'Identificacion de deducciones legales', 'Preparacion del formulario oficial', 'Presentacion electronica al SAR', 'Acuse de recibo oficial', 'Asesoria post-declaracion']
      },
      plans: {
        sub: 'Opciones adaptadas al tipo de contribuyente y la complejidad de su situacion fiscal.',
        tiers: [
          { n: 'Persona Natural', d: 'Para asalariados con ingresos adicionales o profesionales independientes.', p: 'L 5,000', s: '', f: ['Calculo de ISR personal', 'Deducciones personales permitidas', 'Credito por retenciones', 'Formulario de declaracion jurada', 'Presentacion electronica'], ft: false, cta: 'Solicitar' },
          { n: 'PYME', d: 'Para pequenas y medianas empresas con contabilidad regular.', p: 'L 8,500', s: '', f: ['Todo lo de Persona Natural', 'Analisis de estados financieros', 'Deducciones empresariales', 'Creditos fiscales aplicables', 'Conciliacion fiscal-contable', 'Soporte ante requerimientos'], ft: true, cta: 'Solicitar' },
          { n: 'Corporativo', d: 'Para empresas con operaciones complejas o regimenes especiales.', p: 'A medida', s: '', f: ['Todo lo de PYME', 'Precios de transferencia', 'Operaciones internacionales', 'Regimenes especiales', 'Planificacion fiscal estrategica', 'Representacion ante el SAR'], ft: false, cta: 'Cotizar' }
        ]
      },
      includes: {
        sub: 'Todo lo necesario para una declaracion anual completa, precisa y optimizada.',
        cards: [
          ['bi-journal-check', 'icon-teal', 'Analisis de ingresos', 'Revision detallada de todas las fuentes de ingreso del periodo fiscal para determinar la renta bruta.'],
          ['bi-percent', 'icon-crimson', 'Deducciones legales', 'Identificacion y aplicacion de todas las deducciones permitidas por el Codigo Tributario hondureno.'],
          ['bi-calculator', 'icon-brass', 'Calculo del impuesto', 'Determinacion precisa del ISR a pagar aplicando la tabla progresiva o tasa corporativa vigente.'],
          ['bi-file-earmark-pdf', 'icon-teal', 'Formulario oficial', 'Preparacion del formulario de declaracion jurada con todos los campos y anexos requeridos.'],
          ['bi-send-check', 'icon-crimson', 'Presentacion digital', 'Envio electronico a traves del portal del SAR con generacion de acuse de recibo oficial.'],
          ['bi-archive', 'icon-brass', 'Archivo documental', 'Organizacion y resguardo digital de toda la documentacion soporte por el periodo legal.']
        ],
        check: ['Calculo de renta bruta gravable', 'Analisis de gastos deducibles', 'Credito por retenciones ISR', 'Credito por anticipo de ISR', 'Conciliacion fiscal-contable', 'Formulario de declaracion jurada', 'Anexos de ingresos y gastos', 'Presentacion electronica al SAR', 'Acuse de recibo del SAR', 'Resumen ejecutivo del periodo', 'Calculo de saldo a favor (si aplica)', 'Asesoria sobre pago o compensacion']
      },
      faq: {
        sub: 'Respuestas a las preguntas mas frecuentes sobre la declaracion anual del ISR.',
        items: [
          ['Cuando es la fecha limite para presentar la declaracion anual?', 'La declaracion anual del ISR debe presentarse dentro de los primeros cuatro meses del ano siguiente al periodo fiscal, es decir antes del 30 de abril. Recomendamos iniciar con al menos 6 semanas de anticipacion.'],
          ['Que documentos necesito para mi declaracion anual?', 'Necesitamos sus estados financieros del periodo, constancias de retenciones recibidas, comprobantes de anticipos de ISR pagados, facturas de gastos deducibles y estados de cuenta bancarios.'],
          ['Que deducciones puedo aplicar?', 'Dependiendo de su tipo de contribuyente, puede deducir gastos medicos, educativos, donaciones, intereses de prestamos hipotecarios, gastos de operacion del negocio, depreciaciones y amortizaciones permitidas.'],
          ['Que pasa si no presento mi declaracion a tiempo?', 'El SAR aplica una multa por presentacion tardia mas recargos e intereses sobre el impuesto no pagado. Podemos ayudarle a regularizar su situacion si tiene declaraciones pendientes.'],
          ['Pueden ayudarme ante un requerimiento del SAR?', 'Si, brindamos representacion y asistencia completa ante requerimientos, auditorias y fiscalizaciones del SAR. Preparamos la respuesta con la documentacion soporte correspondiente.']
        ]
      },
      related: ['dec-mensual', 'consultoria-trib', 'auditoria-fiscal'],
      cta: ['Listo para optimizar su declaracion anual?', 'Solicite una evaluacion gratuita y descubra cuanto puede ahorrar legalmente en su proxima declaracion de ISR.']
    },

    'constitucion': {
      name: 'Constitucion de Empresas',
      id: 'constitucion',
      price: 15000,
      icon: 'bi-building-add',
      badgeIcon: 'bi-building-add',
      badgeText: 'Servicio unico',
      subtitle: 'Tramite completo para la constitucion legal de su empresa en Honduras con todos los permisos de operacion.',
      desc: {
        title: 'Formalice su empresa con respaldo legal completo',
        body: [
          'La <strong>Constitucion de Empresas</strong> es el primer paso para operar con respaldo juridico en Honduras. Nuestro equipo de abogados y contadores le acompana en todo el proceso de formalizacion: desde la eleccion del tipo societario adecuado hasta la obtencion del ultimo permiso de operacion, asegurando que su empresa nazca cumpliendo con todas las normas legales y fiscales.',
          'Manejamos la escritura publica ante notario, la inscripcion en el Registro Mercantil de la Camara de Comercio, la obtencion del RTN empresarial ante el SAR, el permiso de operacion municipal y la apertura de libros contables obligatorios. Un servicio integral para que usted se concentre en su negocio desde el primer dia.'
        ]
      },
      benefits: [
        ['bi-patch-check', 'Legalidad garantizada', 'Su empresa queda constituida conforme al Codigo de Comercio y las regulaciones vigentes de Honduras.'],
        ['bi-stopwatch', 'Tramite acelerado', 'Gestionamos todos los pasos en paralelo para reducir al minimo el tiempo de constitucion.'],
        ['bi-person-workspace', 'Asesoria societaria', 'Le orientamos sobre el tipo de sociedad mas conveniente segun su actividad y numero de socios.'],
        ['bi-clipboard-check', 'Ventanilla unica', 'Usted no necesita visitar oficinas ni hacer filas. Nosotros realizamos todos los tramites por usted.'],
        ['bi-journal-bookmark', 'Documentacion completa', 'Reciba todos los documentos legales organizados: escritura, inscripciones, RTN, permisos y libros.']
      ],
      process: {
        sub: 'Un acompanamiento integral desde la planificacion hasta la operacion.',
        steps: [
          ['Evaluacion y planificacion', 'Analizamos su actividad economica, numero de socios y proyecciones para recomendar la estructura societaria optima (S. de R.L., S.A., Comerciante Individual).'],
          ['Redaccion y protocolizacion', 'Elaboramos la escritura de constitucion con las clausulas apropiadas y la protocolizamos ante notario publico autorizado.'],
          ['Inscripciones legales', 'Inscribimos la sociedad en el Registro Mercantil, obtenemos el RTN empresarial ante el SAR y gestionamos el permiso de operacion municipal.'],
          ['Entrega y puesta en marcha', 'Le entregamos toda la documentacion legalizada, los libros contables oficiales y un resumen de sus obligaciones fiscales y mercantiles.']
        ]
      },
      pricing: {
        badge: 'S. de R.L.',
        label: 'Desde',
        amount: 'L 15,000',
        suffix: '',
        note: 'Precio varia segun el tipo de sociedad',
        feats: ['Escritura publica notariada', 'Inscripcion en Registro Mercantil', 'Obtencion de RTN empresarial', 'Permiso de operacion municipal', 'Libros contables oficiales', 'Asesoria tributaria inicial', 'Documentacion organizada']
      },
      plans: {
        sub: 'Opciones segun el tipo de entidad que necesita constituir.',
        tiers: [
          { n: 'Comerciante Individual', d: 'Para emprendedores que operan de forma individual sin socios.', p: 'L 8,000', s: '', f: ['Inscripcion como comerciante individual', 'RTN de persona natural con negocio', 'Permiso de operacion municipal', 'Autorizacion de facturacion', 'Asesoria fiscal inicial'], ft: false, cta: 'Solicitar' },
          { n: 'S. de R.L.', d: 'La opcion mas comun para negocios con 2 o mas socios y responsabilidad limitada.', p: 'L 15,000', s: '', f: ['Todo lo de Comerciante Individual', 'Escritura de constitucion notariada', 'Inscripcion en Registro Mercantil', 'Libros contables y actas', 'Capital social definido', 'Pacto social personalizado'], ft: true, cta: 'Solicitar' },
          { n: 'Sociedad Anonima', d: 'Para empresas con multiples accionistas y estructura corporativa formal.', p: 'L 20,000', s: '', f: ['Todo lo de S. de R.L.', 'Emision de acciones', 'Junta directiva constituida', 'Reglamento interno', 'Estructura corporativa completa', 'Asesoria de gobierno corporativo'], ft: false, cta: 'Solicitar' }
        ]
      },
      includes: {
        sub: 'Todo lo necesario para que su empresa quede legalmente constituida y lista para operar.',
        cards: [
          ['bi-file-earmark-ruled', 'icon-teal', 'Escritura publica', 'Redaccion y protocolizacion de la escritura de constitucion ante notario publico autorizado.'],
          ['bi-bank', 'icon-crimson', 'Registro Mercantil', 'Inscripcion de la sociedad en el Registro Mercantil de la Camara de Comercio e Industrias.'],
          ['bi-card-heading', 'icon-brass', 'RTN empresarial', 'Obtencion del Registro Tributario Nacional de la empresa ante el SAR.'],
          ['bi-geo-alt', 'icon-teal', 'Permiso municipal', 'Gestion del permiso de operacion ante la alcaldia municipal correspondiente.'],
          ['bi-journal-bookmark-fill', 'icon-crimson', 'Libros oficiales', 'Apertura y legalizacion de libros diario, mayor, inventarios, balances y actas.'],
          ['bi-briefcase', 'icon-brass', 'Asesoria inicial', 'Orientacion sobre obligaciones fiscales, plazos de declaracion y regimen tributario aplicable.']
        ],
        check: ['Escritura de constitucion notariada (original y copias)', 'Inscripcion en el Registro Mercantil', 'RTN empresarial del SAR', 'Permiso de operacion municipal', 'Autorizacion de facturacion (CAI)', 'Libros de diario y mayor legalizados', 'Libro de actas y registro de socios', 'Certificacion de capital social', 'Guia de obligaciones fiscales', 'Cronograma de primeras declaraciones']
      },
      faq: {
        sub: 'Resolvemos las dudas mas comunes sobre el proceso de constitucion de empresas.',
        items: [
          ['Cuanto tiempo toma constituir una empresa?', 'El proceso completo toma entre 3 y 5 semanas habiles, dependiendo de la carga del Registro Mercantil y la municipalidad. La escritura se puede tener lista en 3-5 dias habiles.'],
          ['Que tipo de sociedad me conviene mas?', 'Depende de su situacion. La S. de R.L. es la mas comun para negocios familiares o con pocos socios. La S.A. es ideal para empresas con multiples inversionistas. Le asesoramos segun su caso especifico.'],
          ['Cual es el capital social minimo requerido?', 'Para una S. de R.L. el capital minimo es de L 5,000. Para una S.A. es de L 25,000. Sin embargo, se recomienda un capital acorde con la actividad economica que desarrollara.'],
          ['Necesito estar presente para los tramites?', 'No necesariamente. Con un poder legal notariado, nuestro equipo puede realizar todos los tramites en su representacion. Solo necesitamos su presencia para la firma de la escritura ante el notario.'],
          ['Que obligaciones tendre despues de constituir mi empresa?', 'Debera presentar declaraciones mensuales de ISV y retenciones, la declaracion anual de ISR, mantener su contabilidad al dia y renovar su permiso de operacion anualmente. Le proporcionamos un cronograma completo.']
        ]
      },
      related: ['contabilidad-gral', 'dec-mensual', 'consultoria-trib'],
      cta: ['Listo para formalizar su empresa?', 'Contactenos y le guiamos en cada paso del proceso de constitucion. Primera consulta sin costo.']
    },

    'auditoria': {
      name: 'Auditoria Contable',
      id: 'auditoria',
      price: 20000,
      icon: 'bi-clipboard2-data',
      badgeIcon: 'bi-clipboard-data',
      badgeText: 'Servicio especializado',
      subtitle: 'Revision exhaustiva de estados financieros con emision de dictamen profesional independiente.',
      desc: {
        title: 'Transparencia y confianza en sus estados financieros',
        body: [
          'La <strong>Auditoria Contable</strong> es una evaluacion independiente y objetiva de los estados financieros de su empresa. Nuestro equipo de auditores certificados examina sus registros contables, politicas financieras y controles internos para emitir un dictamen profesional que brinda confianza a socios, inversionistas, bancos y autoridades regulatorias.',
          'Aplicamos las Normas Internacionales de Auditoria (NIA) y verificamos el cumplimiento con las Normas Internacionales de Informacion Financiera (NIIF) para PYMES, identificando riesgos, oportunidades de mejora y areas donde se pueden fortalecer los controles internos de su organizacion.'
        ]
      },
      benefits: [
        ['bi-eye', 'Independencia y objetividad', 'Dictamen emitido por profesionales independientes que garantiza la credibilidad de su informacion financiera.'],
        ['bi-search', 'Deteccion de riesgos', 'Identificamos debilidades en controles internos y areas vulnerables antes de que se conviertan en problemas mayores.'],
        ['bi-bank2', 'Credibilidad financiera', 'Un dictamen limpio fortalece su posicion ante bancos, inversionistas, proveedores y entidades gubernamentales.'],
        ['bi-check2-all', 'Cumplimiento NIIF', 'Verificamos que sus estados financieros cumplan con las Normas Internacionales de Informacion Financiera aplicables.'],
        ['bi-lightbulb', 'Recomendaciones de mejora', 'Reciba una carta de gerencia con observaciones y recomendaciones practicas para fortalecer su gestion financiera.']
      ],
      process: {
        sub: 'Metodologia rigurosa basada en Normas Internacionales de Auditoria.',
        steps: [
          ['Planificacion y alcance', 'Definimos el alcance de la auditoria, evaluamos riesgos preliminares y elaboramos el plan de trabajo con las areas a examinar.'],
          ['Trabajo de campo', 'Nuestro equipo examina documentacion, realiza pruebas sustantivas, verifica saldos con terceros y evalua los controles internos existentes.'],
          ['Hallazgos y discusion', 'Presentamos los hallazgos preliminares a la gerencia para aclarar observaciones y discutir las recomendaciones propuestas.'],
          ['Dictamen y carta de gerencia', 'Emitimos el dictamen de auditoria independiente junto con la carta de gerencia que incluye observaciones y recomendaciones detalladas.']
        ]
      },
      pricing: {
        badge: 'PYME',
        label: 'Desde',
        amount: 'L 20,000',
        suffix: '',
        note: 'Precio varia segun tamano de la empresa y complejidad',
        feats: ['Planificacion de auditoria', 'Trabajo de campo completo', 'Pruebas sustantivas y de cumplimiento', 'Confirmaciones con terceros', 'Dictamen de auditoria independiente', 'Carta de gerencia con recomendaciones', 'Reunion de cierre con directivos']
      },
      plans: {
        sub: 'Niveles de auditoria adaptados al tamano y complejidad de su organizacion.',
        tiers: [
          { n: 'PYME', d: 'Para pequenas y medianas empresas con estados financieros regulares.', p: 'L 20,000', s: '', f: ['Estados financieros basicos', 'Pruebas sustantivas clave', 'Dictamen de auditoria', 'Carta de gerencia', 'Reunion de cierre'], ft: false, cta: 'Solicitar' },
          { n: 'Mediana Empresa', d: 'Para empresas con multiples lineas de negocio y mayor volumen de operaciones.', p: 'L 35,000', s: '', f: ['Todo lo de PYME', 'Evaluacion de controles internos', 'Confirmaciones bancarias y de terceros', 'Analisis de partes relacionadas', 'Informe ejecutivo ampliado', 'Seguimiento de observaciones previas'], ft: true, cta: 'Solicitar' },
          { n: 'Corporativo', d: 'Para grandes empresas, grupos corporativos o entidades reguladas.', p: 'A medida', s: '', f: ['Todo lo de Mediana Empresa', 'Auditoria de subsidiarias', 'Pruebas de TI y sistemas', 'Cumplimiento regulatorio especifico', 'Informe para reguladores', 'Soporte en asamblea de accionistas'], ft: false, cta: 'Cotizar' }
        ]
      },
      includes: {
        sub: 'Un examen financiero integral con entregables claros y accionables.',
        cards: [
          ['bi-list-check', 'icon-teal', 'Planificacion detallada', 'Evaluacion de riesgos, materialidad y elaboracion del programa de auditoria con las areas criticas a examinar.'],
          ['bi-search', 'icon-crimson', 'Pruebas sustantivas', 'Verificacion de saldos, transacciones y revelaciones mediante muestreo estadistico y confirmaciones externas.'],
          ['bi-shield-lock', 'icon-brass', 'Evaluacion de controles', 'Analisis de los controles internos existentes y recomendaciones para fortalecer los puntos debiles.'],
          ['bi-file-earmark-medical', 'icon-teal', 'Dictamen profesional', 'Opinion independiente sobre la razonabilidad de los estados financieros conforme a las NIIF.'],
          ['bi-envelope-paper', 'icon-crimson', 'Carta de gerencia', 'Documento con observaciones, hallazgos y recomendaciones practicas para mejorar la gestion financiera.'],
          ['bi-people', 'icon-brass', 'Reunion de cierre', 'Presentacion de resultados ante la junta directiva o socios con explicacion detallada de hallazgos.']
        ],
        check: ['Memoorando de planificacion de auditoria', 'Evaluacion de riesgos por area', 'Pruebas de cumplimiento de controles', 'Pruebas sustantivas de saldos', 'Confirmaciones bancarias', 'Confirmaciones de cuentas por cobrar', 'Analisis de inventarios', 'Verificacion de activos fijos', 'Revision de provisiones y contingencias', 'Dictamen del auditor independiente', 'Carta de gerencia con recomendaciones', 'Informe ejecutivo para directivos']
      },
      faq: {
        sub: 'Preguntas frecuentes sobre el proceso de auditoria contable.',
        items: [
          ['Cuanto tiempo toma una auditoria?', 'Depende del tamano de la empresa. Para una PYME, entre 3 y 4 semanas desde la planificacion hasta la emision del dictamen. Para empresas mas grandes, entre 6 y 8 semanas.'],
          ['Que informacion debo preparar?', 'Necesitamos sus estados financieros, balanza de comprobacion, libros contables, conciliaciones bancarias, documentacion de activos fijos, contratos vigentes y cualquier otra informacion financiera relevante del periodo.'],
          ['La auditoria es obligatoria?', 'En Honduras, las empresas que superan ciertos umbrales de ingresos estan obligadas a presentar estados financieros auditados. Tambien es requerida por bancos, inversionistas y en licitaciones publicas.'],
          ['Que tipos de dictamen pueden emitir?', 'Podemos emitir opinion sin salvedades (limpia), con salvedades, opinion adversa o abstencion de opinion, segun los hallazgos. Nuestro objetivo es trabajar con usted para lograr una opinion limpia.'],
          ['Que diferencia hay entre auditoria contable y fiscal?', 'La auditoria contable evalua la razonabilidad de los estados financieros. La auditoria fiscal se enfoca en el cumplimiento de obligaciones tributarias. Son complementarias y muchas empresas contratan ambas.']
        ]
      },
      related: ['auditoria-fiscal', 'contabilidad-gral', 'asesoria-fin'],
      cta: ['Listo para fortalecer la confianza en sus finanzas?', 'Solicite una propuesta de auditoria personalizada para su empresa. Evaluacion inicial sin costo.']
    },

    'asesoria-fin': {
      name: 'Asesoria Financiera',
      id: 'asesoria-fin',
      price: 8000,
      icon: 'bi-graph-up-arrow',
      badgeIcon: 'bi-graph-up-arrow',
      badgeText: 'Servicio recurrente',
      subtitle: 'Analisis financiero, proyecciones y estrategias de inversion para optimizar la rentabilidad de su negocio.',
      desc: {
        title: 'Decisiones financieras inteligentes para su empresa',
        body: [
          'Nuestro servicio de <strong>Asesoria Financiera</strong> le proporciona las herramientas analiticas y la orientacion experta que necesita para tomar decisiones informadas sobre el futuro de su empresa. Analizamos su situacion financiera actual, identificamos oportunidades de mejora y disenamos estrategias personalizadas para maximizar la rentabilidad y minimizar los riesgos.',
          'Desde la gestion del flujo de caja hasta la evaluacion de proyectos de inversion, nuestro equipo de analistas financieros trabaja de forma continua para que su empresa mantenga una posicion financiera solida. Le acompanamos con indicadores claros, proyecciones realistas y recomendaciones accionables.'
        ]
      },
      benefits: [
        ['bi-bullseye', 'Decisiones informadas', 'Basamos cada recomendacion en datos financieros reales y proyecciones fundamentadas para eliminar la incertidumbre.'],
        ['bi-piggy-bank', 'Optimizacion de costos', 'Identificamos ineficiencias operativas y financieras para reducir gastos sin comprometer la calidad de su negocio.'],
        ['bi-bar-chart-steps', 'Planificacion estrategica', 'Definimos metas financieras claras con indicadores medibles y un plan de accion para alcanzarlas.'],
        ['bi-shield-exclamation', 'Gestion de riesgos', 'Evaluamos y mitigamos los riesgos financieros que podrian afectar la estabilidad de su empresa.'],
        ['bi-graph-up', 'Crecimiento sostenible', 'Disenamos estrategias de financiamiento e inversion que impulsan el crecimiento sin comprometer la liquidez.']
      ],
      process: {
        sub: 'Una metodologia analitica orientada a resultados concretos.',
        steps: [
          ['Diagnostico financiero', 'Analizamos sus estados financieros, indicadores clave, flujo de caja y estructura de costos para entender su situacion actual con precision.'],
          ['Diseno de estrategia', 'Desarrollamos un plan financiero personalizado con objetivos a corto, mediano y largo plazo alineados con las metas de su negocio.'],
          ['Implementacion asistida', 'Le acompanamos en la ejecucion de las estrategias definidas, ajustando el plan segun las condiciones del mercado y los resultados obtenidos.'],
          ['Monitoreo y ajustes', 'Realizamos seguimiento mensual de indicadores financieros clave y ajustamos las estrategias para mantener el rumbo hacia los objetivos.']
        ]
      },
      pricing: {
        badge: 'Integral',
        label: 'Desde',
        amount: 'L 8,000',
        suffix: ' /mes',
        note: 'Precio segun complejidad y tamano de empresa',
        feats: ['Diagnostico financiero completo', 'Analisis de flujo de caja', 'Proyecciones financieras', 'Evaluacion de proyectos de inversion', 'Indicadores de rendimiento (KPIs)', 'Reuniones mensuales de seguimiento', 'Reporte ejecutivo mensual']
      },
      plans: {
        sub: 'Planes adaptados al nivel de acompanamiento financiero que necesita su empresa.',
        tiers: [
          { n: 'Diagnostico', d: 'Evaluacion puntual de su situacion financiera con recomendaciones clave.', p: 'L 12,000', s: '', f: ['Analisis de estados financieros', 'Evaluacion de liquidez y solvencia', 'Analisis de estructura de costos', 'Informe con hallazgos clave', 'Recomendaciones priorizadas'], ft: false, cta: 'Solicitar' },
          { n: 'Integral', d: 'Acompanamiento mensual continuo con analisis, estrategia y seguimiento.', p: 'L 8,000', s: ' /mes', f: ['Todo lo del Diagnostico', 'Proyecciones financieras trimestrales', 'Analisis de flujo de caja mensual', 'Evaluacion de proyectos de inversion', 'Reunion mensual de seguimiento', 'Dashboard de indicadores (KPIs)'], ft: true, cta: 'Comenzar' },
          { n: 'Estrategico', d: 'Asesoria de alto nivel para empresas en crecimiento o reestructuracion.', p: 'A medida', s: '', f: ['Todo lo de Integral', 'Modelacion financiera avanzada', 'Due diligence financiero', 'Estrategia de financiamiento', 'Negociacion con inversionistas', 'Soporte en decisiones de M&A'], ft: false, cta: 'Cotizar' }
        ]
      },
      includes: {
        sub: 'Herramientas y analisis financieros profesionales para impulsar el crecimiento de su empresa.',
        cards: [
          ['bi-speedometer', 'icon-teal', 'Dashboard financiero', 'Panel de indicadores clave actualizado mensualmente con la salud financiera de su empresa.'],
          ['bi-cash-coin', 'icon-crimson', 'Gestion de flujo de caja', 'Proyeccion y monitoreo de entradas y salidas de efectivo para mantener una liquidez saludable.'],
          ['bi-graph-up-arrow', 'icon-brass', 'Proyecciones financieras', 'Modelos de proyeccion a 12, 24 y 36 meses con escenarios optimista, base y conservador.'],
          ['bi-clipboard2-pulse', 'icon-teal', 'Analisis de rentabilidad', 'Evaluacion de la rentabilidad por linea de negocio, producto o sucursal para optimizar recursos.'],
          ['bi-signpost-split', 'icon-crimson', 'Evaluacion de inversiones', 'Analisis de viabilidad financiera de proyectos con calculo de VAN, TIR y periodo de recuperacion.'],
          ['bi-chat-square-text', 'icon-brass', 'Reuniones ejecutivas', 'Sesiones mensuales de revision con su equipo directivo para discutir resultados y ajustar estrategias.']
        ],
        check: ['Diagnostico financiero integral', 'Analisis de ratio de liquidez y solvencia', 'Proyeccion de flujo de caja', 'Presupuesto operativo', 'Analisis de punto de equilibrio', 'Evaluacion de estructura de capital', 'Indicadores de rendimiento (KPIs)', 'Informe ejecutivo mensual', 'Recomendaciones de optimizacion', 'Modelo de proyeccion financiera', 'Evaluacion de riesgo financiero', 'Plan de accion priorizado']
      },
      faq: {
        sub: 'Preguntas frecuentes sobre nuestro servicio de asesoria financiera.',
        items: [
          ['En que se diferencia de la contabilidad general?', 'La contabilidad registra hechos pasados. La asesoria financiera analiza esos datos y los proyecta para tomar decisiones estrategicas sobre el futuro de su empresa.'],
          ['Con que frecuencia recibire informes?', 'En el plan Integral recibira un reporte ejecutivo mensual y un dashboard actualizado de indicadores. Ademas, tenemos una reunion mensual para discutir resultados y ajustar estrategias.'],
          ['Mi empresa es pequena, necesito asesoria financiera?', 'Las empresas pequenas son las que mas se benefician. Decisiones tempranas bien fundamentadas pueden evitar problemas de liquidez, endeudamiento excesivo y oportunidades perdidas de crecimiento.'],
          ['Pueden ayudarme a conseguir financiamiento?', 'Si, evaluamos las opciones de financiamiento disponibles, preparamos la documentacion requerida por bancos e inversionistas y le acompanamos en el proceso de solicitud.'],
          ['Que resultados puedo esperar?', 'Nuestros clientes tipicamente experimentan mejoras en la gestion de flujo de caja, reduccion de costos innecesarios, mayor claridad en la toma de decisiones y un crecimiento mas estructurado y sostenible.']
        ]
      },
      related: ['contabilidad-gral', 'auditoria', 'consultoria-trib'],
      cta: ['Listo para llevar sus finanzas al siguiente nivel?', 'Agende una consulta gratuita y descubra como podemos optimizar la gestion financiera de su empresa.']
    },

    'gestion-sar': {
      name: 'Gestion y Tramites SAR',
      id: 'gestion-sar',
      price: 3500,
      icon: 'bi-bank',
      badgeIcon: 'bi-bank',
      badgeText: 'Servicio por tramite',
      subtitle: 'Representacion profesional ante el SAR para la gestion de todos sus tramites tributarios.',
      desc: {
        title: 'Sus tramites fiscales resueltos sin complicaciones',
        body: [
          'La <strong>Gestion y Tramites SAR</strong> le libera de la complejidad burocratica del Servicio de Administracion de Rentas. Nuestro equipo actua como su representante autorizado para gestionar cualquier tramite ante el SAR: desde la obtencion de su RTN y autorizaciones de facturacion hasta la solicitud de solvencias fiscales y la respuesta a requerimientos oficiales.',
          'Conocemos a fondo los procedimientos, requisitos documentales y tiempos de respuesta del SAR. Esto nos permite anticipar posibles objeciones, preparar expedientes completos desde el primer envio y darle seguimiento hasta obtener la resolucion favorable que su empresa necesita.'
        ]
      },
      benefits: [
        ['bi-person-badge', 'Representacion autorizada', 'Actuamos como su representante legal ante el SAR con poder notariado para realizar cualquier gestion en su nombre.'],
        ['bi-lightning', 'Agilidad en tramites', 'Nuestro conocimiento del proceso interno del SAR nos permite completar tramites en el menor tiempo posible.'],
        ['bi-file-earmark-check', 'Expedientes completos', 'Preparamos su documentacion con todos los requisitos para evitar rechazos y solicitudes de informacion adicional.'],
        ['bi-bell', 'Seguimiento proactivo', 'Monitoreamos el estado de cada tramite y le informamos oportunamente sobre avances y resoluciones obtenidas.'],
        ['bi-award', 'Experiencia comprobada', 'Mas de 15 anos gestionando tramites ante el SAR con un alto indice de resolucion exitosa en primer intento.']
      ],
      process: {
        sub: 'Gestion profesional de principio a fin sin que usted tenga que visitar oficinas.',
        steps: [
          ['Evaluacion del tramite', 'Identificamos el tramite requerido, los requisitos documentales aplicables y los plazos esperados de resolucion.'],
          ['Preparacion del expediente', 'Reunimos y organizamos toda la documentacion necesaria, incluyendo formularios, anexos y documentos de soporte.'],
          ['Presentacion y seguimiento', 'Envíamos el expediente al SAR y realizamos seguimiento constante hasta obtener la resolucion oficial.'],
          ['Entrega de resultados', 'Le entregamos la resolucion, certificado o documento obtenido junto con una copia completa del expediente para sus archivos.']
        ]
      },
      pricing: {
        badge: 'Tramite individual',
        label: 'Desde',
        amount: 'L 3,500',
        suffix: '',
        note: 'El precio varia segun el tipo y complejidad del tramite',
        feats: ['Evaluacion de requisitos', 'Preparacion del expediente completo', 'Presentacion ante el SAR', 'Seguimiento hasta resolucion', 'Entrega de documentacion oficial', 'Copia del expediente completo', 'Asesoria sobre implicaciones fiscales']
      },
      plans: {
        sub: 'Opciones flexibles segun la cantidad de tramites que necesita gestionar.',
        tiers: [
          { n: 'Tramite Individual', d: 'Para gestiones puntuales y unicas ante el SAR.', p: 'L 3,500', s: '', f: ['Un tramite especifico', 'Preparacion del expediente', 'Presentacion y seguimiento', 'Entrega de resolucion', 'Asesoria sobre el tramite'], ft: false, cta: 'Solicitar' },
          { n: 'Paquete PYME', d: 'Para empresas que necesitan gestionar multiples tramites durante el ano.', p: 'L 8,000', s: ' /semestre', f: ['Hasta 4 tramites por semestre', 'Prioridad en la gestion', 'Monitoreo de vencimientos', 'Renovaciones automaticas', 'Soporte via WhatsApp', 'Descuento en tramites adicionales'], ft: true, cta: 'Comenzar' },
          { n: 'Paquete Empresarial', d: 'Para empresas con necesidades frecuentes de tramites y representacion continua.', p: 'A medida', s: '', f: ['Todo lo del Paquete PYME', 'Tramites ilimitados', 'Representacion permanente', 'Gestion de requerimientos', 'Atencion a fiscalizaciones', 'Ejecutivo de cuenta dedicado'], ft: false, cta: 'Cotizar' }
        ]
      },
      includes: {
        sub: 'Gestion integral de cualquier procedimiento ante el Servicio de Administracion de Rentas.',
        cards: [
          ['bi-card-heading', 'icon-teal', 'Obtencion de RTN', 'Registro Tributario Nacional para personas naturales, juridicas o comerciantes individuales.'],
          ['bi-patch-check', 'icon-crimson', 'Solvencia fiscal', 'Solicitud y obtencion de la constancia de solvencia fiscal ante el SAR para licitaciones y contratos.'],
          ['bi-receipt-cutoff', 'icon-brass', 'Autorizacion de facturacion', 'Gestion del Codigo de Autorizacion de Impresion (CAI) para emision de facturas legales.'],
          ['bi-arrow-repeat', 'icon-teal', 'Actualizacion de datos', 'Cambios de direccion, actividad economica, representante legal u otros datos ante el SAR.'],
          ['bi-envelope-exclamation', 'icon-crimson', 'Respuesta a requerimientos', 'Atencion profesional a requerimientos de informacion, citatorios y notificaciones del SAR.'],
          ['bi-file-earmark-plus', 'icon-brass', 'Resoluciones especiales', 'Solicitud de resoluciones, exoneraciones y cualquier gestion administrativa especial.']
        ],
        check: ['Obtencion de RTN (persona natural y juridica)', 'Constancia de solvencia fiscal', 'Autorizacion de facturacion (CAI)', 'Actualizacion de datos del contribuyente', 'Cambio de regimen tributario', 'Respuesta a requerimientos de informacion', 'Solicitud de planes de pago', 'Gestion de exoneraciones', 'Representacion en fiscalizaciones', 'Recursos de reposicion y apelacion']
      },
      faq: {
        sub: 'Preguntas frecuentes sobre la gestion de tramites ante el SAR.',
        items: [
          ['Cuanto tiempo toma obtener un RTN?', 'Para personas naturales, el RTN se puede obtener en 1-3 dias habiles. Para personas juridicas recien constituidas, entre 3-5 dias habiles dependiendo de la carga del SAR.'],
          ['Necesito una solvencia fiscal, cuanto tarda?', 'La constancia de solvencia fiscal se emite generalmente en 3-5 dias habiles si no hay deudas pendientes. Si existen obligaciones pendientes, primero gestionamos la regularizacion.'],
          ['Pueden representarme en una fiscalizacion del SAR?', 'Absolutamente. Preparamos la documentacion requerida, asistimos a las reuniones en su nombre y negociamos con los auditores del SAR para proteger sus intereses.'],
          ['Que hago si recibo un requerimiento de informacion?', 'Contactenos inmediatamente. Analizamos el requerimiento, preparamos la respuesta con la documentacion soporte y la presentamos dentro del plazo otorgado por el SAR.'],
          ['Pueden gestionar tramites en otras ciudades?', 'Si, gestionamos tramites ante cualquier oficina regional del SAR en Honduras. Coordinamos con nuestras redes de contacto para agilizar los procesos fuera de Tegucigalpa y San Pedro Sula.']
        ]
      },
      related: ['dec-mensual', 'isr-anual', 'consultoria-trib'],
      cta: ['Necesita resolver un tramite ante el SAR?', 'Contactenos y le brindamos una evaluacion rapida de su caso. Gestionamos cualquier tramite tributario por usted.']
    },

    'nominas': {
      name: 'Gestion de Nominas',
      id: 'nominas',
      price: 4000,
      icon: 'bi-people',
      badgeIcon: 'bi-people-fill',
      badgeText: 'Servicio recurrente',
      subtitle: 'Calculo de planillas, deducciones legales y elaboracion de recibos de pago para sus colaboradores.',
      desc: {
        title: 'La tranquilidad de una nomina precisa y puntual',
        body: [
          'Nuestro servicio de <strong>Gestion de Nominas</strong> se encarga del calculo completo de la planilla de su empresa: sueldos, horas extra, comisiones, bonificaciones, vacaciones, deducciones de IHSS, RAP, aportaciones patronales al INFOP y retenciones de ISR. Garantizamos que cada colaborador reciba el monto correcto en la fecha acordada.',
          'Ademas del calculo periodico, preparamos los recibos de pago individuales, generamos los reportes de contribuciones patronales y laborales para su presentacion al SAR, y le proporcionamos un resumen ejecutivo del costo laboral total de su empresa. Todo con la confidencialidad y precision que este proceso requiere.'
        ]
      },
      benefits: [
        ['bi-calculator', 'Calculos exactos', 'Cada deduccion, bonificacion y retencion se calcula con precision conforme a la legislacion laboral y tributaria vigente.'],
        ['bi-lock', 'Confidencialidad total', 'La informacion salarial de sus colaboradores se maneja con estrictos protocolos de confidencialidad y seguridad.'],
        ['bi-check-circle', 'Cumplimiento laboral', 'Aseguramos el cumplimiento de las obligaciones patronales con IHSS, RAP, INFOP y las retenciones de ISR correspondientes.'],
        ['bi-calendar-check', 'Puntualidad garantizada', 'Procesamos su nomina con la anticipacion necesaria para que los pagos se realicen en las fechas establecidas.'],
        ['bi-file-earmark-spreadsheet', 'Reportes completos', 'Reciba reportes detallados del costo laboral, contribuciones patronales y tendencias de la planilla para la toma de decisiones.']
      ],
      process: {
        sub: 'Un flujo ordenado que garantiza precision y confidencialidad en cada ciclo de pago.',
        steps: [
          ['Recepcion de novedades', 'Recibimos las novedades del periodo: ingresos, egresos, horas extra, permisos, vacaciones, bonificaciones y cualquier cambio en la planilla.'],
          ['Calculo de la planilla', 'Procesamos los sueldos brutos, aplicamos las deducciones legales (IHSS, RAP, ISR), calculamos aportaciones patronales y determinamos el neto a pagar.'],
          ['Revision y aprobacion', 'Le enviamos un pre-cierre de la planilla para su revision y aprobacion antes de generar los recibos y reportes definitivos.'],
          ['Entrega y presentacion', 'Generamos los recibos de pago individuales, el resumen de la planilla y los reportes de contribuciones listos para su presentacion al SAR.']
        ]
      },
      pricing: {
        badge: 'Hasta 15 empleados',
        label: 'Desde',
        amount: 'L 4,000',
        suffix: ' /mes',
        note: 'Precio varia segun numero de empleados',
        feats: ['Calculo quincenal o mensual', 'Deducciones IHSS y RAP', 'Retenciones de ISR a empleados', 'Aportaciones patronales', 'Recibos de pago individuales', 'Reporte de contribuciones', 'Soporte via WhatsApp']
      },
      plans: {
        sub: 'Planes escalables segun el numero de colaboradores en su empresa.',
        tiers: [
          { n: 'Hasta 10 empleados', d: 'Ideal para micro y pequenas empresas en etapa de crecimiento.', p: 'L 3,000', s: ' /mes', f: ['Calculo de planilla mensual', 'Deducciones IHSS y RAP', 'Retenciones de ISR', 'Recibos de pago en PDF', 'Reporte de contribuciones'], ft: false, cta: 'Comenzar' },
          { n: 'Hasta 50 empleados', d: 'Para PYMES con planillas mas robustas y multiples tipos de compensacion.', p: 'L 6,500', s: ' /mes', f: ['Todo lo del plan anterior', 'Calculo quincenal o mensual', 'Aportaciones INFOP', 'Calculo de decimocuarto y decimotercer mes', 'Calculo de vacaciones y liquidaciones', 'Reporte de costo laboral total'], ft: true, cta: 'Comenzar' },
          { n: 'Mas de 50 empleados', d: 'Para empresas con alto volumen de personal y necesidades especializadas.', p: 'A medida', s: '', f: ['Todo lo del plan anterior', 'Multiples tipos de contrato', 'Nomina por departamentos o sucursales', 'Integracion con su sistema de RRHH', 'Calculo de comisiones variables', 'Soporte prioritario dedicado'], ft: false, cta: 'Cotizar' }
        ]
      },
      includes: {
        sub: 'Gestion completa del ciclo de nomina con todos los calculos y reportes necesarios.',
        cards: [
          ['bi-currency-dollar', 'icon-teal', 'Calculo de sueldos', 'Procesamiento de salarios base, horas extra, comisiones, bonificaciones y cualquier compensacion variable.'],
          ['bi-heart-pulse', 'icon-crimson', 'Seguro social (IHSS)', 'Calculo de las cuotas patronales y laborales del Instituto Hondureno de Seguridad Social.'],
          ['bi-house-heart', 'icon-brass', 'RAP e INFOP', 'Computo de las contribuciones al Regimen de Aportaciones Privadas y al Instituto de Formacion Profesional.'],
          ['bi-percent', 'icon-teal', 'Retenciones de ISR', 'Calculo mensual de la retencion del Impuesto Sobre la Renta a cada empleado segun la tabla progresiva.'],
          ['bi-file-text', 'icon-crimson', 'Recibos de pago', 'Generacion de comprobantes individuales con desglose completo de ingresos y deducciones.'],
          ['bi-pie-chart', 'icon-brass', 'Reportes ejecutivos', 'Resumen del costo laboral total, distribucion por departamento y tendencias de la planilla.']
        ],
        check: ['Calculo de sueldos y salarios', 'Horas extra ordinarias y extraordinarias', 'Comisiones y bonificaciones', 'Vacaciones y permisos', 'Deduccion IHSS patronal y laboral', 'Deduccion RAP', 'Aportacion INFOP', 'Retencion ISR a empleados', 'Decimotercer mes', 'Decimocuarto mes', 'Recibos de pago individuales', 'Reporte de contribuciones para el SAR']
      },
      faq: {
        sub: 'Preguntas frecuentes sobre nuestro servicio de gestion de nominas.',
        items: [
          ['Con que frecuencia procesan la nomina?', 'Segun su preferencia y politica interna: quincenal, catorcenal o mensual. La mayoria de nuestros clientes procesan quincenalmente conforme a la practica comun en Honduras.'],
          ['Como garantizan la confidencialidad?', 'La informacion salarial se maneja con protocolos estrictos de seguridad. Solo personal autorizado tiene acceso a los datos y firmamos acuerdos de confidencialidad con cada cliente.'],
          ['Pueden calcular liquidaciones laborales?', 'Si. Calculamos prestaciones de ley: preaviso, cesantia, vacaciones proporcionales, decimotercer y decimocuarto mes proporcional conforme al Codigo del Trabajo de Honduras.'],
          ['Que necesitan de mi parte cada periodo?', 'Las novedades del periodo: altas y bajas de personal, horas extra, permisos, cambios de salario y cualquier compensacion variable. Le proporcionamos un formato estandar.'],
          ['Se integran con sistemas de recursos humanos?', 'Si, podemos integrarnos con la mayoria de sistemas de RRHH y ERP del mercado. También ofrecemos un formato estandar de carga para facilitar el intercambio de informacion.']
        ]
      },
      related: ['dec-mensual', 'contabilidad-gral', 'consultoria-trib'],
      cta: ['Listo para simplificar su nomina?', 'Solicite una cotizacion personalizada segun el numero de colaboradores de su empresa. Primera consulta sin costo.']
    },

    'consultoria-trib': {
      name: 'Consultoria Tributaria',
      id: 'consultoria-trib',
      price: 6000,
      icon: 'bi-shield-check',
      badgeIcon: 'bi-shield-check',
      badgeText: 'Servicio estrategico',
      subtitle: 'Planificacion fiscal estrategica y optimizacion de la carga impositiva dentro del marco legal.',
      desc: {
        title: 'Estrategia tributaria que protege y potencia su empresa',
        body: [
          'La <strong>Consultoria Tributaria</strong> va mas alla de la simple presentacion de impuestos. Es un servicio estrategico donde analizamos la estructura fiscal de su empresa, evaluamos los riesgos tributarios existentes y disenamos estrategias legales para optimizar su carga impositiva. El objetivo es que pague lo justo, ni mas ni menos, aprovechando todos los beneficios fiscales que la legislacion hondurena le otorga.',
          'Nuestros consultores se mantienen actualizados con cada reforma tributaria, resolucion del SAR y criterio jurisprudencial para ofrecerle un asesoramiento proactivo y preventivo. Le alertamos sobre cambios regulatorios que afecten su negocio y le proponemos acciones anticipadas para mantener su posicion fiscal optimizada.'
        ]
      },
      benefits: [
        ['bi-trophy', 'Optimizacion fiscal legal', 'Reducimos su carga impositiva aprovechando deducciones, exoneraciones y beneficios fiscales dentro del marco legal vigente.'],
        ['bi-shield-exclamation', 'Prevencion de contingencias', 'Identificamos y mitigamos riesgos tributarios antes de que se conviertan en sanciones, multas o litigios costosos.'],
        ['bi-book', 'Actualizacion constante', 'Nuestro equipo monitorea reformas fiscales y resoluciones del SAR para mantener sus estrategias siempre vigentes.'],
        ['bi-briefcase', 'Enfoque empresarial', 'Alineamos la estrategia tributaria con los objetivos de negocio para que las decisiones fiscales impulsen el crecimiento.'],
        ['bi-person-lines-fill', 'Atencion personalizada', 'Cada consulta es atendida por un especialista tributario con experiencia en su sector economico.']
      ],
      process: {
        sub: 'Un enfoque estrategico para convertir la tributacion en una ventaja competitiva.',
        steps: [
          ['Diagnostico tributario', 'Analizamos su situacion fiscal actual: regimen tributario, estructura de operaciones, tratamiento de ingresos y gastos, y cumplimiento de obligaciones.'],
          ['Identificacion de oportunidades', 'Detectamos areas donde se pueden aplicar beneficios fiscales, corregir tratamientos incorrectos y prevenir contingencias futuras.'],
          ['Diseno de estrategia', 'Elaboramos un plan de optimizacion tributaria con acciones concretas, cronograma de implementacion y impacto financiero estimado.'],
          ['Implementacion y monitoreo', 'Le acompanamos en la ejecucion de la estrategia y monitoreamos los resultados para asegurar que los beneficios se materialicen.']
        ]
      },
      pricing: {
        badge: 'Consulta integral',
        label: 'Desde',
        amount: 'L 6,000',
        suffix: '',
        note: 'Precio varia segun la complejidad del caso',
        feats: ['Diagnostico tributario completo', 'Analisis de riesgos fiscales', 'Identificacion de beneficios aplicables', 'Plan de optimizacion fiscal', 'Informe con recomendaciones', 'Consultas de seguimiento', 'Alertas de cambios regulatorios']
      },
      plans: {
        sub: 'Modalidades de consultoría adaptadas a la frecuencia y profundidad que necesita.',
        tiers: [
          { n: 'Consulta Puntual', d: 'Para resolver dudas tributarias especificas o analizar situaciones particulares.', p: 'L 6,000', s: '', f: ['Consulta con especialista tributario', 'Analisis de la situacion planteada', 'Informe escrito con recomendaciones', 'Fundamento legal aplicable', 'Seguimiento por correo electronico'], ft: false, cta: 'Solicitar' },
          { n: 'Plan Trimestral', d: 'Acompanamiento continuo con revisiones periodicas de su situacion fiscal.', p: 'L 15,000', s: ' /trimestre', f: ['Todo lo de Consulta Puntual', 'Revision trimestral de cumplimiento', 'Alertas de cambios regulatorios', 'Consultas ilimitadas por correo', 'Actualizacion de estrategia fiscal', 'Reunion trimestral de seguimiento'], ft: true, cta: 'Comenzar' },
          { n: 'Plan Anual', d: 'Consultoria tributaria integral con planificacion fiscal estrategica continua.', p: 'A medida', s: '', f: ['Todo lo del Plan Trimestral', 'Planificacion fiscal anual', 'Simulacion de escenarios tributarios', 'Atencion a fiscalizaciones del SAR', 'Opiniones tributarias escritas', 'Consultor tributario dedicado'], ft: false, cta: 'Cotizar' }
        ]
      },
      includes: {
        sub: 'Asesoria tributaria de alto nivel para mantener su empresa protegida y optimizada.',
        cards: [
          ['bi-search', 'icon-teal', 'Diagnostico fiscal', 'Evaluacion completa de su situacion tributaria actual identificando riesgos y oportunidades.'],
          ['bi-sliders', 'icon-crimson', 'Optimizacion de carga', 'Estrategias legales para reducir la carga impositiva aprovechando beneficios y deducciones aplicables.'],
          ['bi-exclamation-triangle', 'icon-brass', 'Analisis de riesgos', 'Identificacion y cuantificacion de contingencias tributarias con plan de accion para mitigarlas.'],
          ['bi-newspaper', 'icon-teal', 'Actualizacion normativa', 'Monitoreo continuo de reformas fiscales y resoluciones que afecten a su empresa.'],
          ['bi-file-earmark-ruled', 'icon-crimson', 'Opiniones escritas', 'Documentos formales con fundamento legal que respaldan el tratamiento fiscal aplicado.'],
          ['bi-megaphone', 'icon-brass', 'Representacion ante SAR', 'Asistencia y representacion en procedimientos de fiscalizacion, requerimientos y recursos.']
        ],
        check: ['Diagnostico tributario integral', 'Revision del regimen fiscal aplicable', 'Analisis de tratamiento de ingresos', 'Revision de gastos deducibles', 'Evaluacion de precios de transferencia', 'Analisis de operaciones con partes relacionadas', 'Revision de cumplimiento formal', 'Plan de optimizacion tributaria', 'Cronograma de implementacion', 'Informe de riesgos y contingencias', 'Alertas de reformas fiscales', 'Consultas con especialista tributario']
      },
      faq: {
        sub: 'Preguntas frecuentes sobre nuestro servicio de consultoria tributaria.',
        items: [
          ['En que se diferencia de la declaracion de impuestos?', 'La declaracion de impuestos es un servicio operativo que calcula y presenta sus obligaciones. La consultoria tributaria es estrategica: analiza como estructurar sus operaciones para optimizar la carga fiscal dentro del marco legal.'],
          ['Es legal la planificacion fiscal?', 'Absolutamente. La planificacion fiscal (o economia de opcion) es el derecho del contribuyente a elegir la alternativa legal que resulte en menor carga tributaria. Es diferente a la evasion fiscal, que es ilegal.'],
          ['Cuando debo buscar consultoria tributaria?', 'Idealmente antes de realizar operaciones significativas: expansiones, fusiones, contratos importantes, cambios de estructura o ante cualquier reforma fiscal. Tambien cuando siente que esta pagando mas impuestos de los necesarios.'],
          ['Pueden defenderme ante el SAR?', 'Si. Brindamos representacion en fiscalizaciones, preparamos respuestas a requerimientos de informacion, interponemos recursos administrativos y le acompanamos en todo el proceso hasta la resolucion final.'],
          ['Con que frecuencia debo actualizar mi estrategia fiscal?', 'Recomendamos una revision al menos anual, o cada vez que haya cambios significativos en su empresa o en la legislacion tributaria. Con nuestro Plan Trimestral o Anual, esto se hace de forma automatica.']
        ]
      },
      related: ['isr-anual', 'auditoria-fiscal', 'asesoria-fin'],
      cta: ['Quiere pagar lo justo en impuestos?', 'Agende una consulta estrategica y descubra cuanto puede optimizar su carga tributaria de forma legal.']
    },

    'contabilidad-gral': {
      name: 'Contabilidad General',
      id: 'contabilidad-gral',
      price: 5500,
      icon: 'bi-journal-bookmark',
      badgeIcon: 'bi-journal-bookmark-fill',
      badgeText: 'Servicio recurrente',
      subtitle: 'Registro contable completo con estados financieros mensuales conforme a las NIIF para PYMES.',
      desc: {
        title: 'La columna vertebral financiera de su empresa',
        body: [
          'La <strong>Contabilidad General</strong> es el servicio fundamental para cualquier empresa que busque operar con claridad financiera. Nos encargamos del registro sistematico de todas sus transacciones economicas: compras, ventas, gastos operativos, nomina, prestamos y movimientos bancarios, generando estados financieros confiables que reflejan la verdadera posicion de su negocio.',
          'Trabajamos conforme a las Normas Internacionales de Informacion Financiera (NIIF) para PYMES, asegurando que su contabilidad cumpla con los estandares internacionales. Cada mes recibira su balance general, estado de resultados y otros reportes financieros que le permitiran tomar decisiones informadas sobre el rumbo de su empresa.'
        ]
      },
      benefits: [
        ['bi-journal-text', 'Registros al dia', 'Todas sus transacciones registradas oportunamente para tener una fotografia financiera actualizada de su empresa en todo momento.'],
        ['bi-globe', 'Cumplimiento NIIF', 'Contabilidad preparada conforme a estándares internacionales que le brinda credibilidad ante bancos, auditores e inversionistas.'],
        ['bi-bar-chart-line', 'Informacion para decidir', 'Estados financieros claros y oportunos que le permiten tomar decisiones basadas en datos reales, no suposiciones.'],
        ['bi-shield-check', 'Base para declaraciones', 'Una contabilidad ordenada facilita la preparacion precisa de sus declaraciones de impuestos y reduce riesgos fiscales.'],
        ['bi-arrow-left-right', 'Conciliaciones al dia', 'Conciliaciones bancarias mensuales que aseguran que los registros contables coincidan con sus movimientos reales.']
      ],
      process: {
        sub: 'Un ciclo contable ordenado que garantiza informacion financiera confiable cada mes.',
        steps: [
          ['Recepcion de documentos', 'Recibimos facturas de compra y venta, vouchers bancarios, recibos, contratos y cualquier documento con impacto financiero del periodo.'],
          ['Registro y clasificacion', 'Registramos cada transaccion en el libro diario, clasificamos las cuentas segun el catalogo contable y verificamos la consistencia de los datos.'],
          ['Conciliacion y ajustes', 'Realizamos conciliaciones bancarias, ajustes por depreciacion, amortizacion, provisiones y cualquier asiento contable necesario.'],
          ['Estados financieros', 'Generamos el balance general, estado de resultados, estado de flujo de efectivo y cualquier reporte financiero adicional que requiera.']
        ]
      },
      pricing: {
        badge: 'PYME',
        label: 'Desde',
        amount: 'L 5,500',
        suffix: ' /mes',
        note: 'Precio segun volumen de transacciones mensuales',
        feats: ['Registro contable completo', 'Libro diario y mayor', 'Conciliaciones bancarias', 'Balance general mensual', 'Estado de resultados mensual', 'Balanza de comprobacion', 'Soporte via WhatsApp']
      },
      plans: {
        sub: 'Planes escalables segun el volumen de operaciones de su empresa.',
        tiers: [
          { n: 'Emprendedor', d: 'Para negocios nuevos o pequenos con hasta 50 transacciones mensuales.', p: 'L 3,500', s: ' /mes', f: ['Registro contable mensual', 'Libro diario y mayor', 'Conciliacion bancaria', 'Balance general trimestral', 'Estado de resultados trimestral'], ft: false, cta: 'Comenzar' },
          { n: 'PYME', d: 'Para empresas en crecimiento con hasta 150 transacciones mensuales.', p: 'L 5,500', s: ' /mes', f: ['Todo lo de Emprendedor', 'Estados financieros mensuales', 'Balanza de comprobacion', 'Analisis de cuentas por cobrar y pagar', 'Reportes personalizados', 'Soporte via WhatsApp'], ft: true, cta: 'Comenzar' },
          { n: 'Empresarial', d: 'Para empresas con alto volumen o multiples sucursales.', p: 'A medida', s: '', f: ['Todo lo de PYME', 'Transacciones ilimitadas', 'Contabilidad por centros de costo', 'Consolidacion de sucursales', 'Integracion con su ERP', 'Contador dedicado'], ft: false, cta: 'Cotizar' }
        ]
      },
      includes: {
        sub: 'Un servicio contable completo que cubre todas las necesidades de registro y reporte financiero.',
        cards: [
          ['bi-pencil-square', 'icon-teal', 'Registro de transacciones', 'Captura y clasificacion de cada operacion economica en el libro diario conforme al catalogo contable.'],
          ['bi-bank2', 'icon-crimson', 'Conciliaciones bancarias', 'Verificacion mensual de que los movimientos bancarios coincidan con los registros contables de la empresa.'],
          ['bi-stack', 'icon-brass', 'Libros contables', 'Mantenimiento del libro diario, mayor, inventarios y balances conforme a las normas vigentes.'],
          ['bi-file-earmark-bar-graph', 'icon-teal', 'Estados financieros', 'Balance general, estado de resultados y flujo de efectivo preparados mensualmente con notas explicativas.'],
          ['bi-arrow-down-up', 'icon-crimson', 'Ajustes contables', 'Asientos de depreciación, amortizacion, provisiones, devengados y cualquier ajuste requerido.'],
          ['bi-folder2-open', 'icon-brass', 'Archivo digital', 'Organizacion y resguardo digital de toda la documentacion soporte de la contabilidad.']
        ],
        check: ['Registro de asientos contables diarios', 'Libro diario general', 'Libro mayor por cuenta', 'Balanza de comprobacion', 'Conciliaciones bancarias mensuales', 'Balance general', 'Estado de resultados', 'Estado de flujo de efectivo', 'Ajustes por depreciacion y amortizacion', 'Provisiones contables', 'Reportes de cuentas por cobrar', 'Reportes de cuentas por pagar']
      },
      faq: {
        sub: 'Preguntas frecuentes sobre nuestro servicio de contabilidad general.',
        items: [
          ['Que documentos necesitan cada mes?', 'Facturas de compra y venta, estados de cuenta bancarios, recibos de pago, comprobantes de transferencias, contratos nuevos y cualquier documento con impacto financiero. Podemos recogerlos digital o fisicamente.'],
          ['Hasta que fecha entregan los estados financieros?', 'Los estados financieros del mes se entregan dentro de los primeros 10 dias habiles del mes siguiente, permitiendo tiempo suficiente para recibir toda la documentacion y realizar las conciliaciones.'],
          ['Que software contable utilizan?', 'Trabajamos con los principales softwares contables del mercado y podemos adaptarnos al que ya utilice su empresa. Tambien ofrecemos acceso a nuestra plataforma contable en la nube.'],
          ['Puedo ver mi informacion contable en tiempo real?', 'Si, con nuestros planes PYME y Empresarial tiene acceso a un portal donde puede consultar sus estados financieros, balanzas y reportes en cualquier momento.'],
          ['Al final del ano fiscal, que informacion me entregan?', 'Le entregamos los estados financieros anuales completos, la balanza de comprobacion anual, el cierre fiscal y toda la informacion necesaria para la preparacion de la declaracion anual de ISR.']
        ]
      },
      related: ['dec-mensual', 'nominas', 'asesoria-fin'],
      cta: ['Listo para tener su contabilidad en orden?', 'Solicite una cotizacion personalizada y reciba sus estados financieros puntuales cada mes.']
    },

    'auditoria-fiscal': {
      name: 'Auditoria Fiscal Preventiva',
      id: 'auditoria-fiscal',
      price: 12000,
      icon: 'bi-search-heart',
      badgeIcon: 'bi-shield-fill-check',
      badgeText: 'Servicio preventivo',
      subtitle: 'Revision preventiva de obligaciones fiscales para prepararse ante fiscalizaciones del SAR.',
      desc: {
        title: 'Anticipese a las fiscalizaciones del SAR',
        body: [
          'La <strong>Auditoria Fiscal Preventiva</strong> es una revision exhaustiva de sus obligaciones tributarias disenada para identificar riesgos, corregir inconsistencias y fortalecer su posicion fiscal antes de que el SAR llame a su puerta. Nuestro equipo de especialistas tributarios examina sus declaraciones, registros contables y documentacion soporte para detectar cualquier desviacion que pueda generar sanciones.',
          'A diferencia de una auditoria reactiva, este servicio le permite tomar acciones correctivas de forma voluntaria, lo que en muchos casos reduce significativamente las multas y recargos aplicables. Le proporcionamos un informe detallado con hallazgos, nivel de riesgo y un plan de accion concreto para regularizar cualquier inconsistencia encontrada.'
        ]
      },
      benefits: [
        ['bi-shield-fill-exclamation', 'Prevencion de sanciones', 'Identifique y corrija errores antes de que el SAR los detecte, reduciendo multas y recargos significativamente.'],
        ['bi-binoculars', 'Vision completa', 'Revision integral de todas sus obligaciones tributarias: ISR, ISV, retenciones, contribuciones patronales y obligaciones formales.'],
        ['bi-heart-pulse', 'Diagnostico fiscal', 'Conozca el verdadero estado de salud fiscal de su empresa con un diagnostico claro y cuantificado.'],
        ['bi-tools', 'Plan de correccion', 'Reciba un plan de accion concreto con prioridades, plazos y pasos especificos para regularizar cada hallazgo.'],
        ['bi-emoji-smile', 'Tranquilidad', 'Opere con la certeza de que su empresa esta preparada para responder ante cualquier fiscalizacion del SAR.']
      ],
      process: {
        sub: 'Una revision sistematica que cubre todos los flancos tributarios de su empresa.',
        steps: [
          ['Revision historica', 'Analizamos las declaraciones presentadas de los ultimos 3-5 anos fiscales, comparandolas con los registros contables y la documentacion soporte.'],
          ['Evaluacion de riesgos', 'Identificamos inconsistencias, omisiones, diferencias y cualquier situacion que represente un riesgo ante una fiscalizacion del SAR.'],
          ['Cuantificacion de contingencias', 'Calculamos el impacto financiero de cada hallazgo: impuestos omitidos, multas estimadas y recargos potenciales.'],
          ['Informe y plan de accion', 'Entregamos un informe ejecutivo con todos los hallazgos clasificados por riesgo y un plan de accion detallado para la regularizacion.']
        ]
      },
      pricing: {
        badge: 'Revision integral',
        label: 'Desde',
        amount: 'L 12,000',
        suffix: '',
        note: 'Precio segun anos a revisar y complejidad',
        feats: ['Revision de declaraciones presentadas', 'Comparacion con registros contables', 'Identificacion de inconsistencias', 'Cuantificacion de contingencias', 'Informe ejecutivo de hallazgos', 'Plan de accion priorizado', 'Acompanamiento en regularizacion']
      },
      plans: {
        sub: 'Niveles de revision adaptados a la profundidad y alcance que necesita.',
        tiers: [
          { n: 'Revision Basica', d: 'Revision del ultimo periodo fiscal enfocada en las obligaciones principales.', p: 'L 12,000', s: '', f: ['Revision del ultimo ano fiscal', 'ISR e ISV', 'Retenciones principales', 'Informe de hallazgos', 'Recomendaciones de correccion'], ft: false, cta: 'Solicitar' },
          { n: 'Revision Integral', d: 'Revision de 3 anos fiscales cubriendo todas las obligaciones tributarias.', p: 'L 25,000', s: '', f: ['Todo lo de Revision Basica', 'Ultimos 3 anos fiscales', 'Contribuciones patronales', 'Obligaciones formales', 'Cuantificacion de contingencias', 'Plan de regularizacion detallado'], ft: true, cta: 'Solicitar' },
          { n: 'Blindaje Fiscal', d: 'Revision completa de 5 anos con acompanamiento en la regularizacion.', p: 'A medida', s: '', f: ['Todo lo de Revision Integral', 'Ultimos 5 anos fiscales', 'Precios de transferencia', 'Acompanamiento en declaraciones rectificativas', 'Representacion ante el SAR', 'Monitoreo post-regularizacion'], ft: false, cta: 'Cotizar' }
        ]
      },
      includes: {
        sub: 'Un examen tributario preventivo que cubre todas las areas de riesgo fiscal.',
        cards: [
          ['bi-file-earmark-text', 'icon-teal', 'Revision de ISR', 'Analisis de la declaracion anual del Impuesto Sobre la Renta: ingresos, deducciones, creditos y calculo del impuesto.'],
          ['bi-receipt', 'icon-crimson', 'Revision de ISV', 'Verificacion de las declaraciones mensuales del Impuesto Sobre Ventas contra los registros de facturacion y compras.'],
          ['bi-people-fill', 'icon-brass', 'Revision de retenciones', 'Examen de las retenciones practicadas a empleados y proveedores contra los montos declarados y enterados al SAR.'],
          ['bi-clipboard-data', 'icon-teal', 'Contribuciones patronales', 'Verificacion de los calculos y pagos de IHSS, RAP e INFOP contra la planilla de empleados.'],
          ['bi-file-check', 'icon-crimson', 'Obligaciones formales', 'Revision del cumplimiento de obligaciones formales: facturacion, libros, autorizaciones y registros ante el SAR.'],
          ['bi-flag', 'icon-brass', 'Mapa de riesgos', 'Clasificacion de hallazgos por nivel de riesgo (alto, medio, bajo) con cuantificacion del impacto financiero.']
        ],
        check: ['Revision de declaraciones anuales de ISR', 'Revision de declaraciones mensuales de ISV', 'Verificacion de retenciones ISR empleados', 'Verificacion de retenciones ISR proveedores', 'Revision de contribuciones IHSS/RAP/INFOP', 'Analisis de facturacion y CAI', 'Revision de libros contables oficiales', 'Cuantificacion de impuestos omitidos', 'Calculo de multas y recargos potenciales', 'Mapa de riesgos por area tributaria', 'Plan de regularizacion priorizado', 'Cronograma de acciones correctivas']
      },
      faq: {
        sub: 'Preguntas frecuentes sobre la auditoria fiscal preventiva.',
        items: [
          ['Cuando debo hacer una auditoria fiscal preventiva?', 'Lo ideal es hacerla al menos una vez al ano. Es especialmente recomendable si no la ha hecho nunca, si cambio de contador, si ha crecido significativamente o si tiene operaciones complejas.'],
          ['Si encuentran errores, que pasa?', 'Le proporcionamos un plan de accion para corregir cada hallazgo. En muchos casos, la correccion voluntaria mediante declaraciones rectificativas reduce las multas aplicables. Le acompanamos en todo el proceso.'],
          ['El SAR puede usar esta auditoria en mi contra?', 'No. La auditoria fiscal preventiva es un documento interno y confidencial entre usted y nuestra firma. No se comparte con el SAR ni con terceros.'],
          ['Cuanto tiempo toma el proceso?', 'Depende del alcance. Una revision basica (1 ano) toma 2-3 semanas. Una revision integral (3 anos) entre 4-6 semanas. El blindaje fiscal (5 anos) puede tomar 6-8 semanas.'],
          ['En que se diferencia de la auditoria contable?', 'La auditoria contable evalua la razonabilidad de los estados financieros. La auditoria fiscal preventiva se enfoca especificamente en el cumplimiento de obligaciones tributarias y la preparacion ante fiscalizaciones del SAR.']
        ]
      },
      related: ['consultoria-trib', 'isr-anual', 'auditoria'],
      cta: ['Quiere conocer el estado fiscal real de su empresa?', 'Solicite una auditoria fiscal preventiva y opere con la tranquilidad de estar preparado.']
    }
  };

  function populate() {
    const param = new URLSearchParams(window.location.search).get('s');
    const svc = S[param] || S['dec-mensual'];

    document.title = svc.name + ' \u2014 Solano Y Asociados';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = svc.subtitle + ' Solano Y Asociados, Honduras.';
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = svc.name + ' \u2014 Solano Y Asociados';
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = svc.subtitle;

    const el = id => document.getElementById(id);

    el('svcBreadcrumb').textContent = svc.name;
    el('svcBadge').innerHTML = '<i class="bi ' + svc.badgeIcon + '"></i> ' + svc.badgeText;
    el('svcTitle').textContent = svc.name;
    el('svcSubtitle').textContent = svc.subtitle;

    el('svcDescription').innerHTML =
      '<span class="svc-ledger-line"></span>' +
      '<h2>' + svc.desc.title + '</h2>' +
      svc.desc.body.map(p => '<p>' + p + '</p>').join('');

    el('svcBenefits').innerHTML =
      '<h3 class="svc-benefits-title">Beneficios del servicio</h3>' +
      '<ul class="svc-benefits">' +
      svc.benefits.map(b =>
        '<li><div class="svc-benefit-icon"><i class="bi ' + b[0] + '"></i></div>' +
        '<div class="svc-benefit-content"><h4>' + b[1] + '</h4><p>' + b[2] + '</p></div></li>'
      ).join('') + '</ul>';

    el('svcProcess').innerHTML =
      '<h3 class="svc-process-title">Como funciona?</h3>' +
      '<p class="svc-process-subtitle">' + svc.process.sub + '</p>' +
      '<div class="svc-steps">' +
      svc.process.steps.map((s, i) =>
        '<div class="svc-step"><div class="svc-step-num">0' + (i + 1) + '</div>' +
        '<h4>' + s[0] + '</h4><p>' + s[1] + '</p></div>'
      ).join('') + '</div>';

    const esc = str => str.replace(/'/g, "\\'");
    el('svcPricingCard').innerHTML =
      '<span class="svc-pricing-badge"><i class="bi bi-star-fill me-1"></i> ' + svc.pricing.badge + '</span>' +
      '<p class="svc-pricing-label">' + svc.pricing.label + '</p>' +
      '<div class="svc-pricing-amount">' + svc.pricing.amount + '<span>' + svc.pricing.suffix + '</span></div>' +
      '<p class="svc-pricing-note">' + svc.pricing.note + '</p>' +
      '<hr class="svc-pricing-divider">' +
      '<ul class="svc-pricing-features">' +
      svc.pricing.feats.map(f => '<li><i class="bi bi-check-circle-fill"></i> ' + f + '</li>').join('') + '</ul>' +
      '<button class="btn btn-primary-custom w-100 mb-3" onclick="addToCart({id:\'' + svc.id + '\',name:\'' + esc(svc.name) + '\',price:' + svc.price + '})">' +
      '<i class="bi bi-cart-plus me-2"></i> Contratar servicio</button>' +
      '<a href="contacto.html" class="btn btn-outline-custom w-100"><i class="bi bi-chat-dots me-2"></i> Consulta gratuita</a>' +
      '<div class="text-center mt-3"><small class="svc-pricing-secure"><i class="bi bi-lock me-1"></i> Sin compromisos &middot; Cotizacion personalizada</small></div>';

    el('svcPlans').innerHTML =
      '<div class="container"><div class="text-center mx-auto svc-section-header-wrapper">' +
      '<p class="svc-section-kicker">Planes y precios</p>' +
      '<h2 class="svc-section-title">Elija el plan que se adapte a su necesidad</h2>' +
      '<span class="svc-ledger-line-center"></span>' +
      '<p class="svc-section-subtitle mx-auto">' + svc.plans.sub + '</p></div>' +
      '<div class="row g-4 justify-content-center">' +
      svc.plans.tiers.map(t =>
        '<div class="col-md-6 col-lg-4"><div class="svc-tier-card' + (t.ft ? ' svc-tier-featured' : '') + '">'  +
        (t.ft ? '<span class="svc-tier-popular">Mas popular</span>' : '') +
        '<h3 class="svc-tier-name">' + t.n + '</h3>' +
        '<p class="svc-tier-desc">' + t.d + '</p>' +
        '<div class="svc-tier-price font-mono">' + t.p + '<span>' + t.s + '</span></div>' +
        '<hr class="svc-tier-divider">' +
        '<ul class="svc-tier-features">' + t.f.map(f => '<li><i class="bi bi-check2"></i> ' + f + '</li>').join('') + '</ul>' +
        '<a href="contacto.html" class="btn ' + (t.ft ? 'btn-accent-custom' : 'btn-outline-custom') + ' w-100">' + t.cta + '</a>' +
        '</div></div>'
      ).join('') + '</div></div>';

    el('svcIncludes').innerHTML =
      '<div class="container"><div class="text-center mx-auto svc-section-header-wrapper">' +
      '<p class="svc-section-kicker">Todo incluido</p>' +
      '<h2 class="svc-section-title">Que incluye el servicio?</h2>' +
      '<span class="svc-ledger-line-center"></span>' +
      '<p class="svc-section-subtitle mx-auto">' + svc.includes.sub + '</p></div>' +
      '<div class="row g-4 mt-2">' +
      svc.includes.cards.map(c =>
        '<div class="col-md-6 col-lg-4"><div class="svc-include-card">' +
        '<div class="svc-include-icon ' + c[1] + '"><i class="bi ' + c[0] + '"></i></div>' +
        '<h4>' + c[2] + '</h4><p>' + c[3] + '</p></div></div>'
      ).join('') + '</div>' +
      '<div class="mt-5 svc-checklist-box">' +
      '<h4><i class="bi bi-list-check me-2 svc-checklist-heading-icon"></i> Lista completa de lo incluido</h4>' +
      '<ul class="svc-checklist">' +
      svc.includes.check.map(c => '<li><i class="bi bi-check-circle-fill"></i> ' + c + '</li>').join('') +
      '</ul></div></div>';

    el('svcFaq').innerHTML =
      '<div class="container"><div class="text-center mx-auto svc-section-header-wrapper">' +
      '<p class="svc-section-kicker">Preguntas frecuentes</p>' +
      '<h2 class="svc-section-title">Resolvemos sus dudas</h2>' +
      '<span class="svc-ledger-line-center"></span>' +
      '<p class="svc-section-subtitle mx-auto">' + svc.faq.sub + '</p></div>' +
      '<div class="row justify-content-center"><div class="col-lg-8">' +
      '<div class="accordion" id="faqAccordion">' +
      svc.faq.items.map((item, i) =>
        '<div class="accordion-item"><h2 class="accordion-header">' +
        '<button class="accordion-button' + (i > 0 ? ' collapsed' : '') + '" type="button" data-bs-toggle="collapse" data-bs-target="#faq' + i + '"' + (i === 0 ? ' aria-expanded="true"' : '') + '>' +
        item[0] + '</button></h2>' +
        '<div id="faq' + i + '" class="accordion-collapse collapse' + (i === 0 ? ' show' : '') + '" data-bs-parent="#faqAccordion">' +
        '<div class="accordion-body">' + item[1] + '</div></div></div>'
      ).join('') + '</div></div></div></div>';

    const relSub = 'Complemente este servicio con otras soluciones disenadas para su tranquilidad fiscal y financiera.';
    el('svcRelated').innerHTML =
      '<div class="container"><div class="text-center mx-auto svc-section-header-wrapper">' +
      '<p class="svc-section-kicker">Explore mas</p>' +
      '<h2 class="svc-section-title">Servicios relacionados</h2>' +
      '<span class="svc-ledger-line-center"></span>' +
      '<p class="svc-section-subtitle mx-auto">' + relSub + '</p></div>' +
      '<div class="row g-4">' +
      svc.related.map(rid => {
        const r = S[rid];
        return '<div class="col-md-6 col-lg-4">' +
          '<a href="servicio.html?s=' + r.id + '" class="svc-related-card">' +
          '<div class="svc-related-icon"><i class="bi ' + r.icon + '"></i></div>' +
          '<h4>' + r.name + '</h4><p>' + r.subtitle + '</p>' +
          '<span class="svc-related-link">Ver detalle <i class="bi bi-arrow-right"></i></span></a></div>';
      }).join('') + '</div></div>';

    el('svcCta').innerHTML =
      '<div class="container"><div class="row align-items-center">' +
      '<div class="col-lg-7"><span class="svc-cta-ledger"></span>' +
      '<h2>' + svc.cta[0] + '</h2><p>' + svc.cta[1] + '</p>' +
      '<div class="d-flex gap-3 flex-wrap mt-4">' +
      '<a href="contacto.html" class="btn btn-primary-custom"><i class="bi bi-send me-2"></i> Contactar ahora</a>' +
      '<a href="https://wa.me/50499162219" class="btn btn-outline-custom svc-cta-whatsapp" target="_blank" rel="noopener"><i class="bi bi-whatsapp me-2"></i> WhatsApp</a>' +
      '</div></div>' +
      '<div class="col-lg-5 text-center d-none d-lg-block">' +
      '<div class="svc-cta-card"><i class="bi bi-telephone-outbound svc-cta-phone-icon"></i>' +
      '<p class="phone-label">Llamenos directamente</p>' +
      '<p class="phone-number">+504 9916-2219</p></div></div></div></div>';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', populate);
  } else {
    populate();
  }
})();
