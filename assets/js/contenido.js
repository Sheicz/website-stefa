/*
|--------------------------------------------------------------------------
| CONTENIDO DE LA WEB  ✏️  (este es el ÚNICO archivo que necesitas editar)
|--------------------------------------------------------------------------
| - Cambia los textos entre comillas "..." y guarda.
| - Para agregar un elemento a una lista, copia un bloque { ... }, pégalo
|   debajo (separado por una coma) y cambia sus textos.
| - Las imágenes van en assets/img/marca/ . Sube tu archivo con el mismo
|   nombre que aparece aquí, o cambia el nombre aquí. Si una imagen no
|   existe todavía, la web muestra un recuadro o el nombre en su lugar.
| - Lo que dice "EDITAR" es un dato que falta confirmar.
|--------------------------------------------------------------------------
*/
window.SITIO = {
  /* ---------- Datos generales ---------- */
  marca: 'Stefachav',
  nombre: 'Stefa', // EDITAR: tu nombre como quieres que aparezca
  logo: 'assets/img/marca/logo.png', // si no existe, se muestra el texto de "marca"
  descripcionSEO:
    'Talleres para empresas, asesorías 1:1, ponencias y cursos de consumo masivo y retail.',

  /* ---------- Contacto ---------- */
  contacto: {
    whatsapp: '51900000000', // EDITAR: código de país + número, sin espacios ni "+"
    mensajeWhatsapp: 'Hola Stefa, vi tu web y quiero información sobre ',
    correo: 'hola@tucorreo.com', // EDITAR
    redes: [
      // Borra las que no uses. Iconos: linkedin-in, instagram, tiktok, youtube, facebook-f
      { icono: 'linkedin-in', url: 'https://www.linkedin.com/in/EDITAR' },
      { icono: 'instagram', url: 'https://www.instagram.com/EDITAR' },
      { icono: 'tiktok', url: 'https://www.tiktok.com/@EDITAR' },
    ],
  },

  /* ---------- Pagos ----------
   | Hoy: Yape. El botón "Pagar" abre una ventana con tu QR, número y monto,
   | y luego envía la constancia por WhatsApp.
   | Mañana (pasarela): cambia proveedor a 'pasarela' y pon en cada curso
   | o servicio su "linkPago" (el link de Mercado Pago, Culqi, Izipay,
   | Hotmart, etc.). Los que no tengan link seguirán usando Yape.
   */
  pagos: {
    proveedor: 'yape', // 'yape' o 'pasarela'
    moneda: 'S/',
    yape: {
      numero: '900 000 000', // EDITAR
      titular: 'EDITAR Nombre del titular',
      qr: 'assets/img/marca/yape-qr.png', // sube aquí la imagen de tu QR de Yape
    },
  },

  /* ---------- Portada ---------- */
  portada: {
    saludo: 'Hola, soy Stefa',
    titulo: 'Te ayudo a crecer en consumo masivo y retail',
    texto:
      'Más de 5 años en el mundo laboral, trabajando en consumo masivo y retail. Hoy comparto lo que aprendí con empresas, estudiantes y profesionales a través de talleres, asesorías y cursos.',
    foto: 'assets/img/marca/foto-portada.jpg', // tu foto (ideal vertical, fondo limpio)
    botonPrincipal: { texto: 'Ver servicios', link: '#servicios' },
    botonSecundario: { texto: 'Ver cursos', link: '#cursos' },
    cifras: [
      // EDITAR los números que no correspondan
      { numero: 5, sufijo: '+', texto: 'Años de experiencia' },
      { numero: 10, sufijo: '+', texto: 'Empresas' },
      { numero: 500, sufijo: '+', texto: 'Personas capacitadas' },
      { numero: 2, sufijo: '', texto: 'Cursos activos' },
    ],
  },

  /* ---------- Sobre mí ---------- */
  sobreMi: {
    titulo: 'Conóceme',
    texto: [
      'EDITAR: Cuéntale a la gente quién eres en 2 o 3 frases. Por ejemplo: soy especialista en consumo masivo y retail con más de 5 años de experiencia en empresas líderes.',
      'He trabajado en áreas como trade marketing, categorías y ventas (EDITAR), y hoy ayudo a equipos y personas a tomar mejores decisiones con lo que aprendí en la cancha.',
    ],
    foto: 'assets/img/marca/foto-sobre-mi.jpg',
    especialidades: ['Consumo masivo', 'Retail', 'EDITAR especialidad', 'EDITAR especialidad'],
  },

  /* ---------- Trayectoria (logos) ----------
   | Sube los logos a assets/img/marca/logos/ (PNG o SVG, fondo transparente).
   | Si el logo no existe todavía, se muestra el nombre de la empresa.
   */
  trayectoria: {
    titulo: 'Mi trayectoria incluye',
    empresas: [
      { nombre: 'Empresa 1', logo: 'assets/img/marca/logos/empresa-1.png' },
      { nombre: 'Empresa 2', logo: 'assets/img/marca/logos/empresa-2.png' },
      { nombre: 'Empresa 3', logo: 'assets/img/marca/logos/empresa-3.png' },
      { nombre: 'Empresa 4', logo: 'assets/img/marca/logos/empresa-4.png' },
      { nombre: 'Empresa 5', logo: 'assets/img/marca/logos/empresa-5.png' },
    ],
  },
  clientes: {
    titulo: 'Empresas e instituciones que confiaron en mí',
    empresas: [
      { nombre: 'Cliente 1', logo: 'assets/img/marca/logos/cliente-1.png' },
      { nombre: 'Universidad 1', logo: 'assets/img/marca/logos/universidad-1.png' },
      { nombre: 'Cliente 2', logo: 'assets/img/marca/logos/cliente-2.png' },
      { nombre: 'Cliente 3', logo: 'assets/img/marca/logos/cliente-3.png' },
      { nombre: 'Universidad 2', logo: 'assets/img/marca/logos/universidad-2.png' },
    ],
    pregunta: '¿Tu empresa es la siguiente?',
    boton: 'Agendar una llamada de 30 min',
  },

  /* ---------- Servicios ----------
   | Aparecen en el menú "Servicios" (título + descripción corta) y como tarjetas.
   | icono: nombre de Font Awesome (https://fontawesome.com/search?ic=free)
   | precio: déjalo '' para mostrar "Cotizar" en vez de un monto.
   | destacado: true pone la etiqueta "Más popular".
   */
  servicios: {
    etiqueta: 'Para empresas y personas',
    titulo: 'Servicios',
    texto:
      'Llevo la experiencia real de consumo masivo y retail a tu equipo, tu evento o tu carrera.',
    lista: [
      {
        id: 'talleres',
        icono: 'chalkboard-user',
        categoria: 'Empresas',
        titulo: 'Talleres para empresas',
        resumen: 'Capacitación in-company en consumo masivo y retail',
        duracion: '2 a 4 horas (EDITAR)',
        texto: 'Talleres prácticos para equipos comerciales, de marketing y de tienda, con casos reales del sector.',
        incluye: ['Contenido adaptado a tu empresa', 'Casos y ejercicios reales', 'Material de apoyo incluido'],
        precio: '',
        boton: 'Cotizar',
        destacado: true,
        nota: '¿Eres universidad o grupo de estudio? Para ustedes el taller es gratuito.',
      },
      {
        id: 'asesorias',
        icono: 'user-group',
        categoria: 'Personas',
        titulo: 'Asesorías 1:1',
        resumen: 'Para estudiantes y profesionales que quieren cambiar de rumbo',
        duracion: '60 minutos por videollamada (EDITAR)',
        texto: 'Una sesión personalizada para ordenar tu siguiente paso: entrar al sector, cambiar de área o reinventarte.',
        incluye: ['Diagnóstico de tu perfil', 'Plan de acción concreto', 'Recomendaciones de CV y LinkedIn'],
        precio: '000', // EDITAR monto (solo el número)
        boton: 'Reservar',
        destacado: false,
      },
      {
        id: 'ponencias',
        icono: 'microphone',
        categoria: 'Eventos',
        titulo: 'Ponencias y speaker',
        resumen: 'Charlas y conferencias para eventos y universidades',
        duracion: '30 a 90 minutos',
        texto: 'Charlas inspiradoras y aterrizadas sobre consumo masivo, retail y desarrollo profesional.',
        incluye: ['Presencial o virtual', 'Tema adaptado a tu público', 'Espacio de preguntas'],
        precio: '',
        boton: 'Cotizar',
        destacado: false,
      },
      {
        id: 'colaboraciones',
        icono: 'handshake',
        categoria: 'Marcas',
        titulo: 'Colaboraciones e influencer',
        resumen: 'Contenido y alianzas con marcas',
        duracion: 'Según campaña',
        texto: 'Alianzas con marcas del mundo del consumo masivo y retail para crear contenido con propósito.',
        incluye: ['Contenido para redes', 'Activaciones y eventos', 'Propuestas a medida'],
        precio: '',
        boton: 'Escríbeme',
        destacado: false,
      },
    ],
  },

  /* ---------- Cursos ----------
   | tipo: 'vivo' (curso que estás dictando) o 'grabado' (asíncrono / grabación)
   | Si el curso tiene "linkPago" y pagos.proveedor = 'pasarela', el botón
   | lleva directo a la pasarela.
   */
  cursos: {
    etiqueta: 'Aprende a tu ritmo',
    titulo: 'Cursos',
    texto: 'Dos cursos en marcha, y grabaciones de ediciones anteriores para que aprendas cuando quieras.',
    lista: [
      {
        tipo: 'vivo',
        titulo: 'EDITAR: Curso 1',
        texto: 'EDITAR: de qué trata el curso y qué vas a aprender.',
        detalle: 'Inicio: EDITAR · 4 sesiones en vivo',
        imagen: 'assets/img/marca/cursos/curso-1.jpg',
        precio: '000',
        boton: 'Inscribirme',
        linkPago: '',
      },
      {
        tipo: 'vivo',
        titulo: 'EDITAR: Curso 2',
        texto: 'EDITAR: de qué trata el curso y qué vas a aprender.',
        detalle: 'Inicio: EDITAR · 4 sesiones en vivo',
        imagen: 'assets/img/marca/cursos/curso-2.jpg',
        precio: '000',
        boton: 'Inscribirme',
        linkPago: '',
      },
      {
        tipo: 'grabado',
        titulo: 'EDITAR: Grabación de curso anterior',
        texto: 'Accede a todas las clases grabadas y materiales.',
        detalle: 'Acceso inmediato · a tu ritmo',
        imagen: 'assets/img/marca/cursos/grabacion-1.jpg',
        precio: '000',
        boton: 'Comprar',
        linkPago: '',
      },
    ],
  },

  /* ---------- Cómo pagar ---------- */
  comoPagar: [
    { titulo: 'Elige', texto: 'Escoge el curso o la asesoría.' },
    { titulo: 'Yapea', texto: 'Escanea el QR o yapea al número indicado.' },
    { titulo: 'Envía tu constancia', texto: 'Mándame la captura por WhatsApp.' },
    { titulo: '¡Listo!', texto: 'Te confirmo y te envío el acceso.' },
  ],

  /* ---------- Testimonios (opcional: deja la lista vacía [] para ocultarlos) ---------- */
  testimonios: [
    { texto: 'EDITAR: Lo que dijo alguien de tu taller o asesoría.', autor: 'Nombre, Empresa' },
    { texto: 'EDITAR: Otro testimonio corto y concreto.', autor: 'Nombre, Universidad' },
  ],

  /* ---------- Preguntas frecuentes ---------- */
  preguntas: [
    {
      pregunta: '¿Los talleres para universidades tienen costo?',
      respuesta: 'No. Los talleres para universidades y grupos de estudio son gratuitos. Escríbeme por WhatsApp para coordinar la fecha.',
    },
    {
      pregunta: '¿Cómo pago un curso o una asesoría?',
      respuesta: 'Por ahora con Yape: haz clic en el botón del curso o asesoría, yapea el monto y envíame la constancia por WhatsApp. Te confirmo y te envío el acceso.',
    },
    {
      pregunta: '¿Las asesorías son virtuales?',
      respuesta: 'Sí, son por videollamada. EDITAR si también ofreces presenciales.',
    },
    {
      pregunta: '¿Puedo ver los cursos si no llegué a las clases en vivo?',
      respuesta: 'Sí, tengo grabaciones de cursos anteriores que puedes comprar y ver a tu ritmo.',
    },
  ],

  /* ---------- Cierre ---------- */
  cierre: {
    titulo: '¿Conversamos?',
    texto: 'Cuéntame qué necesitas y te respondo por WhatsApp.',
    boton: 'Escríbeme por WhatsApp',
  },
};
