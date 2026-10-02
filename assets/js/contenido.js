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
  logoBlanco: 'assets/img/marca/logo-blanco.png', // versión para el pie (fondo morado)
  descripcionSEO:
    'Talleres para empresas, asesorías 1:1, ponencias y cursos de consumo masivo y retail.',

  /* ---------- Contacto ---------- */
  contacto: {
    whatsapp: '51900000000', // EDITAR: código de país + número, sin espacios ni "+"
    mensajeWhatsapp: 'Hola Stefa, vi tu web y quiero información sobre ',
    correo: 'hola@tucorreo.com', // EDITAR
    usuario: '@EDITAR', // tu usuario de redes
    ubicacion: 'Lima, Perú', // EDITAR
    redes: [
      // Borra las que no uses. Iconos: linkedin-in, instagram, tiktok, youtube, facebook-f
      { icono: 'linkedin-in', url: 'https://www.linkedin.com/in/EDITAR' },
      { icono: 'instagram', url: 'https://www.instagram.com/EDITAR' },
      { icono: 'tiktok', url: 'https://www.tiktok.com/@EDITAR' },
    ],
  },

  /* ---------- Pagos ----------
   | Hoy: Yape. Al hacer clic en un plan o curso con precio se abre una
   | ventana con tu QR, número y monto, y luego te envían la constancia
   | por WhatsApp.
   | Mañana (pasarela): cambia proveedor a 'pasarela' y pon en cada plan o
   | curso su "linkPago" (Mercado Pago, Culqi, Izipay, Hotmart, etc.).
   | Los que no tengan link seguirán usando Yape.
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
    saludo: '¡Hola, soy Stefa!',
    texto:
      'Especialista en consumo masivo y retail con más de 5 años de experiencia. Te ayudo con talleres, asesorías y cursos para crecer en el sector.',
    foto: 'assets/img/marca/foto-portada.png', // tu foto (ideal PNG sin fondo, vertical)
    botonFoto: '¡Hablemos!', // círculo rosado sobre tu foto (abre WhatsApp)
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
    titulo: 'Conóceme más',
    texto:
      'EDITAR: Soy especialista en consumo masivo y retail con más de 5 años de experiencia en empresas líderes. Hoy comparto lo que aprendí en la cancha con empresas, estudiantes y profesionales.',
  },

  /* ---------- Servicios ----------
   | Aparecen en la lista "Mis servicios" y como tarjetas de precio.
   | precio: déjalo '' para mostrar "Cotizar" (abre WhatsApp en vez de Yape).
   */
  servicios: {
    titulo: 'Mis servicios',
    intro: 'Experiencia real de consumo masivo y retail para tu equipo, tu evento o tu carrera.',
    lista: [
      {
        id: 'talleres',
        titulo: 'Talleres para empresas',
        imagen: 'assets/img/marca/servicios/talleres.jpg',
        precio: '',
        incluye: [
          'Capacitación in-company en consumo masivo y retail',
          'Contenido adaptado a tu empresa',
          'Gratis para universidades y grupos de estudio',
        ],
      },
      {
        id: 'asesorias',
        titulo: 'Asesorías 1:1',
        imagen: 'assets/img/marca/servicios/asesorias.jpg',
        precio: '000', // EDITAR monto (solo el número)
        incluye: [
          'Para estudiantes',
          'Para profesionales que quieren cambiar de rumbo',
          'Plan de acción concreto',
        ],
        linkPago: '',
      },
      {
        id: 'ponencias',
        titulo: 'Ponencias y speaker',
        imagen: 'assets/img/marca/servicios/ponencias.jpg',
        precio: '',
        incluye: ['Charlas para eventos y universidades', 'Presencial o virtual', 'Tema adaptado a tu público'],
      },
      {
        id: 'colaboraciones',
        titulo: 'Colaboraciones e influencer',
        imagen: 'assets/img/marca/servicios/colaboraciones.jpg',
        precio: '',
        incluye: ['Contenido para redes', 'Alianzas con marcas', 'Propuestas a medida'],
      },
    ],
    tituloPlanes: 'Trabajemos juntos',
    subtituloPlanes: 'Haz clic en una tarjeta para reservar o cotizar.',
  },

  /* ---------- Logos (sección de clientes de la plantilla) ----------
   | Sube los logos a assets/img/marca/logos/ (PNG o SVG en blanco, se ven
   | sobre fondo morado). Si el logo no existe todavía, se muestra el nombre.
   | Fila 1: empresas donde trabajaste. Fila 2: empresas que confiaron en ti.
   */
  logos: {
    titulo: 'MI TRAYECTORIA',
    fila1: [
      { nombre: 'Empresa 1', logo: 'assets/img/marca/logos/empresa-1.png' },
      { nombre: 'Empresa 2', logo: 'assets/img/marca/logos/empresa-2.png' },
      { nombre: 'Empresa 3', logo: 'assets/img/marca/logos/empresa-3.png' },
      { nombre: 'Empresa 4', logo: 'assets/img/marca/logos/empresa-4.png' },
    ],
    fila2: [
      { nombre: 'Cliente 1', logo: 'assets/img/marca/logos/cliente-1.png' },
      { nombre: 'Universidad 1', logo: 'assets/img/marca/logos/universidad-1.png' },
      { nombre: 'Cliente 2', logo: 'assets/img/marca/logos/cliente-2.png' },
      { nombre: 'Universidad 2', logo: 'assets/img/marca/logos/universidad-2.png' },
    ],
  },

  /* ---------- Cursos (slider de proyectos de la plantilla) ----------
   | etiqueta: 'En curso' o 'Grabado'. Al hacer clic se paga con Yape
   | (o con la pasarela si tiene linkPago).
   */
  cursos: {
    cinta: 'MIS CURSOS',
    lista: [
      {
        titulo: 'EDITAR: Curso 1',
        etiqueta: 'En curso',
        texto: 'EDITAR: de qué trata el curso y qué vas a aprender.',
        imagen: 'assets/img/marca/cursos/curso-1.jpg',
        precio: '000',
        linkPago: '',
      },
      {
        titulo: 'EDITAR: Curso 2',
        etiqueta: 'En curso',
        texto: 'EDITAR: de qué trata el curso y qué vas a aprender.',
        imagen: 'assets/img/marca/cursos/curso-2.jpg',
        precio: '000',
        linkPago: '',
      },
      {
        titulo: 'EDITAR: Grabación de curso anterior',
        etiqueta: 'Grabado · asíncrono',
        texto: 'Todas las clases grabadas y materiales, para verlas a tu ritmo.',
        imagen: 'assets/img/marca/cursos/grabacion-1.jpg',
        precio: '000',
        linkPago: '',
      },
    ],
  },

  /* ---------- Especialidades (sección "valores" de la plantilla) ---------- */
  especialidades: {
    cinta: 'CONSUMO MASIVO · RETAIL',
    titulo: 'Mi expertise',
    lista: [
      { titulo: 'CONSUMO MASIVO', texto: 'EDITAR: qué haces o qué sabes en consumo masivo.' },
      { titulo: 'RETAIL', texto: 'EDITAR: qué haces o qué sabes en retail.' },
      { titulo: 'FORMACIÓN', texto: 'Talleres, asesorías y cursos con casos reales del sector.' },
    ],
  },

  /* ---------- Testimonios (deja la lista vacía [] para ocultarlos) ---------- */
  testimonios: [
    { texto: 'EDITAR: Lo que dijo alguien de tu taller o asesoría.', autor: 'Nombre, Empresa' },
    { texto: 'EDITAR: Otro testimonio corto y concreto.', autor: 'Nombre, Universidad' },
  ],

  /* ---------- Cierre ---------- */
  cierre: {
    titulo: '¿Tienes un proyecto en mente?',
    texto: '¡Conversemos!',
    boton: 'Escríbeme',
  },

  /* ---------- Preguntas frecuentes ---------- */
  preguntas: [
    {
      pregunta: '¿Los talleres para universidades tienen costo?',
      respuesta: 'No. Los talleres para universidades y grupos de estudio son gratuitos. Escríbeme por WhatsApp para coordinar la fecha.',
    },
    {
      pregunta: '¿Cómo pago un curso o una asesoría?',
      respuesta: 'Por ahora con Yape: haz clic en el curso o la asesoría, yapea el monto y envíame la constancia por WhatsApp. Te confirmo y te envío el acceso.',
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
};
