/*
|--------------------------------------------------------------------------
| Arma la página a partir de assets/js/contenido.js usando el HTML de la
| plantilla Grace. No necesitas tocar este archivo para cambiar textos,
| precios o imágenes.
|--------------------------------------------------------------------------
*/
(function () {
  'use strict';

  var S = window.SITIO;
  if (!S) return;

  /* ---------- Utilidades ---------- */
  function esc(v) {
    return String(v == null ? '' : v)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  function $(id) {
    return document.getElementById(id);
  }
  function fill(id, html) {
    var el = $(id);
    if (el) el.innerHTML = html;
  }
  function whatsapp(tema) {
    var texto = S.contacto.mensajeWhatsapp + (tema || '');
    return 'https://wa.me/' + S.contacto.whatsapp + '?text=' + encodeURIComponent(texto);
  }
  function precio(monto) {
    return S.pagos.moneda + ' ' + monto;
  }
  // Botón de la plantilla (cs_btn cs_style_1). estilo: cs_focus_1 (morado), cs_focus_2 (rosa), cs_border_btn
  function boton(texto, href, estilo, externo) {
    return (
      '<a class="cs_btn cs_style_1 ' + estilo + '" href="' + esc(href) + '"' +
      (externo ? ' target="_blank" rel="noopener"' : '') + '><span>' + esc(texto) + '</span></a>'
    );
  }
  // Imagen que, si todavía no existe, muestra un recuadro con la ruta a subir.
  function foto(src, alt, clase) {
    return (
      '<div class="m_foto ' + (clase || '') + '" data-falta="Sube: ' + esc(src) + '">' +
      '<img src="' + esc(src) + '" alt="' + esc(alt) + '" data-falta="caja">' +
      '</div>'
    );
  }

  // Si una imagen todavía no fue subida: los logos muestran su nombre en texto
  // y las fotos un recuadro con la ruta donde hay que subirlas.
  document.addEventListener(
    'error',
    function (e) {
      var img = e.target;
      if (!img || img.tagName !== 'IMG' || !img.hasAttribute('data-falta')) return;
      var modo = img.getAttribute('data-falta');
      if (modo === 'caja') {
        img.parentNode.classList.add('is-empty');
        img.remove();
      } else {
        var span = document.createElement('span');
        span.className = modo;
        span.textContent = img.alt;
        img.replaceWith(span);
      }
    },
    true
  );

  /* ---------- SEO básico ---------- */
  document.title = S.marca + ' | ' + S.portada.titulo;
  var meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', S.descripcionSEO);

  /* ---------- Logo ---------- */
  fill('m-logo', '<img src="' + esc(S.logo) + '" alt="' + esc(S.marca) + '" data-falta="m_logo_text">');
  fill('m-logo-footer', '<img src="' + esc(S.logo) + '" alt="' + esc(S.marca) + '" data-falta="m_logo_text">');

  /* ---------- Menú ---------- */
  var subMenu = S.servicios.lista
    .map(function (s) {
      return (
        '<li><a href="#servicio-' + esc(s.id) + '"><strong>' + esc(s.titulo) + '</strong>' +
        '<small>' + esc(s.resumen) + '</small></a></li>'
      );
    })
    .join('');
  fill(
    'm-menu',
    '<li><a href="#inicio">Inicio</a></li>' +
      '<li><a href="#sobre-mi">Sobre mí</a></li>' +
      '<li class="menu-item-has-children m_menu_servicios"><a href="#servicios">Servicios</a><ul>' + subMenu + '</ul></li>' +
      '<li><a href="#cursos">Cursos</a></li>' +
      '<li><a href="#preguntas">Preguntas</a></li>' +
      '<li><a href="#contacto">Contacto</a></li>'
  );

  /* ---------- Portada (Hero de la plantilla) ---------- */
  var P = S.portada;
  fill(
    'm-portada',
    '<h1 class="cs_hero_title cs_font_90 cs_focus_color_2 cs_medium text-uppercase">' + esc(P.saludo) + '</h1>' +
      '<h4 class="cs_hero_text cs_primary_color cs_font_25 cs_normal text-uppercase">' + esc(P.titulo) + '. ' + esc(P.texto) + '</h4>'
  );
  fill(
    'm-portada-foto',
    foto(P.foto, S.nombre, 'm_foto_hero position-relative') +
      '<a href="' + whatsapp('') + '" target="_blank" rel="noopener" class="cs_btn cs_center position-absolute">' + esc(P.botonFoto) + '</a>'
  );
  // Cifras: dos grupos de dos, como en la plantilla
  function cifra(c) {
    return (
      '<div class="cs_funfact cs_style_1"><div class="cs_funfact_info">' +
      '<h3 class="cs_funfact_title cs_white_color cs_font_40 cs_medium"><span><span class="odometer" data-count-to="' + esc(c.numero) + '"></span>' + esc(c.sufijo) + '</span></h3>' +
      '<p class="cs_funfact_text cs_font_18 cs_white_color">' + esc(c.texto) + '</p>' +
      '</div></div>'
    );
  }
  var mitad = Math.ceil(P.cifras.length / 2);
  fill(
    'm-cifras',
    '<div class="cs_funfact_wrap d-flex">' + P.cifras.slice(0, mitad).map(cifra).join('') + '</div>' +
      '<div class="cs_funfact_wrap d-flex">' + P.cifras.slice(mitad).map(cifra).join('') + '</div>'
  );

  /* ---------- Sobre mí ---------- */
  var A = S.sobreMi;
  fill(
    'm-sobre-mi',
    '<div class="row">' +
      '<div class="col-xxl-4 col-xl-5">' +
      '<h2 class="cs_about_title cs_font_70 cs_white_color cs_normal text-uppercase">' + esc(A.titulo) + '</h2>' +
      foto(A.foto, S.nombre, 'm_foto_about') +
      '</div>' +
      '<div class="col-xxl-8 col-xl-7">' +
      A.texto.map(function (t) { return '<p class="cs_about_text cs_font_25 cs_white_color text-uppercase cs_opacity_07 cs_line_top_1">' + esc(t) + '</p>'; }).join('') +
      '<div class="m_chips">' + A.especialidades.map(function (e) { return '<span class="m_chip">' + esc(e) + '</span>'; }).join('') + '</div>' +
      '</div></div>'
  );

  /* ---------- Pagos: Yape hoy, pasarela mañana ---------- */
  var productos = []; // se llena con cada cosa que se puede pagar
  function botonPago(item, textoBoton) {
    if (S.pagos.proveedor === 'pasarela' && item.linkPago) {
      return boton(textoBoton, item.linkPago, 'cs_focus_1 w-100 justify-content-center', true);
    }
    productos.push(item);
    return (
      '<button type="button" class="cs_btn cs_style_1 cs_focus_1 w-100 justify-content-center border-0" data-pagar="' +
      (productos.length - 1) + '"><span>' + esc(textoBoton) + '</span></button>'
    );
  }

  /* ---------- Servicios: lista "Mis servicios" de la plantilla ---------- */
  var V = S.servicios;
  fill('m-servicios-intro', '<p class="cs_primary_color cs_font_18 cs_opacity_07 mb-0">' + esc(V.texto) + '</p><div class="cs_height_lg_20"></div>');
  fill('m-servicios-titulo', esc(V.titulo).toUpperCase());
  fill(
    'm-servicios-lista',
    V.lista
      .map(function (s) {
        return (
          '<a href="#servicio-' + esc(s.id) + '" class="cs_service cs_style_1">' +
          '<div><h4 class="cs_service_title cs_primary_color cs_font_25 mb-0 cs_normal">' + esc(s.titulo) + '</h4>' +
          '<p class="m_service_sub mb-0">' + esc(s.resumen) + '</p></div>' +
          '<div class="cs_service_icon cs_font_25"><i class="fa-solid fa-arrow-right"></i></div>' +
          '</a>'
        );
      })
      .join('')
  );

  /* ---------- Servicios: tarjetas de planes ---------- */
  fill(
    'm-servicios-head',
    '<p class="m_kicker text-center">' + esc(V.etiquetaPlanes) + '</p>' +
      '<h2 class="cs_font_70 cs_primary_color cs_normal text-uppercase text-center">' + esc(V.tituloPlanes) + '</h2>' +
      '<div class="cs_height_50 cs_height_lg_30"></div>'
  );
  fill(
    'm-servicios',
    V.lista
      .map(function (s, i) {
        var accion = s.precio
          ? botonPago({ titulo: s.titulo, precio: s.precio, linkPago: s.linkPago }, s.boton)
          : boton(s.boton, whatsapp(s.titulo.toLowerCase() + '.'), 'cs_border_btn w-100 justify-content-center', true);
        var fondo = i % 2 ? 'cs_focus_bg_3' : 'cs_focus_bg_2';
        return (
          '<div class="col-xl-3 col-md-6" id="servicio-' + esc(s.id) + '">' +
          '<article class="m_card' + (s.destacado ? ' m_card_featured' : '') + '">' +
          (s.destacado ? '<span class="m_badge">Más popular</span>' : '') +
          '<div class="m_card_icon ' + fondo + '"><i class="fa-solid fa-' + esc(s.icono) + '"></i></div>' +
          '<p class="m_kicker">' + esc(s.categoria) + '</p>' +
          '<h3 class="m_card_title">' + esc(s.titulo) + '</h3>' +
          '<p class="m_card_duration">' + esc(s.duracion) + '</p>' +
          (s.precio ? '<p class="m_card_price">' + esc(precio(s.precio)) + '</p>' : '') +
          '<p class="m_card_text">' + esc(s.texto) + '</p>' +
          '<ul class="m_check">' + s.incluye.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
          '<div class="m_card_bottom">' + accion +
          (s.nota ? '<a class="m_card_note" href="' + whatsapp('un taller gratuito para mi universidad o grupo de estudio.') + '" target="_blank" rel="noopener">' + esc(s.nota) + '</a>' : '') +
          '</div></article></div>'
        );
      })
      .join('')
  );

  /* ---------- Logos (sección "My clients" de la plantilla) ---------- */
  function filaLogos(empresas, direccion) {
    var items = empresas
      .map(function (e) {
        return '<div class="cs_brand cs_style_1 m_brand"><img src="' + esc(e.logo) + '" alt="' + esc(e.nombre) + '" data-falta="m_brand_text"></div>';
      })
      .join('');
    // Se repite el bloque para que el movimiento sea continuo.
    var bloque = '<div class="cs_moving_content ' + direccion + '">' + items + items + '</div>';
    return '<div class="cs_moving_container_wrap cs_style_1"><div class="cs_moving_container_in">' + bloque + bloque + '</div></div>';
  }
  fill(
    'm-logos',
    '<div class="cs_height_135 cs_height_lg_70"></div>' +
      '<div class="container"><h2 class="cs_white_color cs_font_70 cs_normal mb-0 text-uppercase">' + esc(S.trayectoria.titulo) + '</h2><div class="cs_height_70 cs_height_lg_40"></div></div>' +
      filaLogos(S.trayectoria.empresas, 'cs_slide_right') +
      '<div class="container"><div class="cs_height_70 cs_height_lg_40"></div><h3 class="cs_white_color cs_font_40 cs_normal mb-0 text-uppercase">' + esc(S.clientes.titulo) + '</h3><div class="cs_height_50 cs_height_lg_30"></div></div>' +
      filaLogos(S.clientes.empresas, 'cs_slide_left') +
      '<div class="container text-center"><div class="cs_height_80 cs_height_lg_50"></div>' +
      '<h3 class="cs_white_color cs_font_40 cs_medium">' + esc(S.clientes.pregunta) + '</h3>' +
      '<div class="m_btns justify-content-center">' +
      boton(S.clientes.boton, whatsapp('agendar una llamada de 30 min para mi empresa.'), 'cs_focus_2', true) +
      '<a class="cs_text_btn_2 cs_white_color cs_font_18" href="' + whatsapp('') + '" target="_blank" rel="noopener"><span class="cs_text_btn_text">O escríbeme por WhatsApp</span></a>' +
      '</div></div>' +
      '<div class="cs_height_150 cs_height_lg_70"></div>'
  );

  /* ---------- Cursos ---------- */
  var C = S.cursos;
  var cinta = '';
  for (var k = 0; k < 4; k++) {
    cinta += '<div class="d-flex align-items-center"><i class="fa-solid fa-asterisk m_cinta_star"></i><h3 class="cs_focus_color cs_font_40 cs_medium mb-0">' + esc(C.cinta) + '</h3></div>';
  }
  fill('m-cursos-cinta', '<div class="cs_moving_container_in"><div class="cs_moving_content cs_slide_left">' + cinta + '</div><div class="cs_moving_content cs_slide_left">' + cinta + '</div></div>');
  fill(
    'm-cursos-head',
    '<div class="row align-items-end"><div class="col-lg-6"><h2 class="cs_font_70 cs_primary_color cs_normal text-uppercase mb-0">' + esc(C.titulo) + '</h2></div>' +
      '<div class="col-lg-6"><p class="cs_primary_color cs_font_18 cs_opacity_07 mb-0">' + esc(C.texto) + '</p></div></div>' +
      '<div class="cs_height_60 cs_height_lg_40"></div>'
  );
  fill(
    'm-cursos',
    C.lista
      .map(function (c) {
        return (
          '<div class="col-lg-4 col-md-6"><article class="m_course">' +
          foto(c.imagen, c.titulo, 'm_foto_course') +
          '<div class="m_course_body">' +
          '<span class="m_tag ' + (c.tipo === 'vivo' ? 'cs_focus_bg_2' : 'cs_focus_bg_3') + '">' + (c.tipo === 'vivo' ? 'En curso' : 'Grabado · asíncrono') + '</span>' +
          '<h3 class="m_card_title text-uppercase">' + esc(c.titulo) + '</h3>' +
          '<p class="m_card_text">' + esc(c.texto) + '</p>' +
          '<p class="m_card_duration">' + esc(c.detalle) + '</p>' +
          '<div class="m_course_foot"><span class="m_card_price">' + esc(precio(c.precio)) + '</span>' +
          botonPago(c, c.boton) + '</div>' +
          '</div></article></div>'
        );
      })
      .join('')
  );

  /* ---------- Cómo pagar ---------- */
  fill(
    'm-pasos',
    S.comoPagar
      .map(function (p, i) {
        return '<div class="m_step"><span class="m_step_num">' + (i + 1) + '</span><h4>' + esc(p.titulo) + '</h4><p>' + esc(p.texto) + '</p></div>';
      })
      .join('')
  );

  /* ---------- Testimonios (slider de la plantilla) ---------- */
  if (S.testimonios && S.testimonios.length) {
    fill(
      'm-testimonios',
      S.testimonios
        .map(function (t) {
          return (
            '<div class="slick_slide_in"><div class="cs_testimonial cs_style_1">' +
            '<p class="cs_testimonial_text cs_font_40 cs_primary_color cs_medium">“' + esc(t.texto) + '”</p>' +
            '<div class="cs_testimonial_author cs_font_25 cs_primary_color position-relative text-uppercase">' + esc(t.autor) + '</div>' +
            '</div></div>'
          );
        })
        .join('')
    );
  } else {
    var sec = $('testimonios');
    if (sec) sec.remove();
  }

  /* ---------- Preguntas frecuentes (acordeón de la plantilla) ---------- */
  fill(
    'm-preguntas',
    S.preguntas
      .map(function (q, i) {
        return (
          '<div class="cs_accordian' + (i === 0 ? ' active' : '') + '"><div class="container">' +
          '<div class="cs_accordian_head"><h4 class="cs_accordian_title cs_font_25 cs_white_color cs_normal mb-0">' + esc(q.pregunta) + '</h4><span class="cs_accordian_toggle"></span></div>' +
          '<div class="cs_accordian_body"><p class="mb-0 cs_white_color cs_font_18">' + esc(q.respuesta) + '</p></div>' +
          '</div></div>'
        );
      })
      .join('')
  );

  /* ---------- Cierre (CTA de la plantilla) y pie ---------- */
  fill(
    'm-cierre',
    '<h2 class="cs_cta_title cs_normal text-uppercase cs_white_color cs_font_70">' + esc(S.cierre.titulo) + '</h2>' +
      '<h3 class="cs_cta_subtitle cs_medium cs_white_color cs_font_40">' + esc(S.cierre.texto) + '</h3>' +
      boton(S.cierre.boton, whatsapp(''), 'cs_focus_2', true)
  );
  fill(
    'm-redes',
    S.contacto.redes
      .map(function (r) {
        return '<a class="cs_center cs_font_18" href="' + esc(r.url) + '" target="_blank" rel="noopener" aria-label="' + esc(r.icono) + '"><i class="fa-brands fa-' + esc(r.icono) + '"></i></a>';
      })
      .join('')
  );
  fill(
    'm-contacto-footer',
    '<li class="cs_font_18">' + esc(S.nombre) + '</li>' +
      '<li class="cs_font_18"><a href="' + whatsapp('') + '" target="_blank" rel="noopener">WhatsApp</a></li>' +
      '<li class="cs_font_18"><a href="mailto:' + esc(S.contacto.correo) + '">' + esc(S.contacto.correo) + '</a></li>'
  );
  fill(
    'm-links-footer',
    S.servicios.lista
      .map(function (s) {
        return '<li><a class="cs_font_18 cs_text_btn_2" href="#servicio-' + esc(s.id) + '"><span class="cs_text_btn_text">' + esc(s.titulo) + '</span></a></li>';
      })
      .join('') +
      '<li><a class="cs_font_18 cs_text_btn_2" href="#cursos"><span class="cs_text_btn_text">Cursos</span></a></li>'
  );
  fill('m-copy', '© ' + new Date().getFullYear() + ' ' + esc(S.marca) + '. Todos los derechos reservados.');
  var wa = $('m-whatsapp-float');
  if (wa) wa.setAttribute('href', whatsapp(''));

  /* ---------- Ventana de pago con Yape ---------- */
  var modal = $('m-pago');
  var Y = S.pagos.yape;
  function abrirPago(item) {
    fill(
      'm-pago-body',
      '<p class="m_kicker">Pagar con Yape</p>' +
        '<h3 class="m_card_title text-uppercase">' + esc(item.titulo) + '</h3>' +
        '<p class="m_pago_monto">' + esc(precio(item.precio)) + '</p>' +
        foto(Y.qr, 'QR de Yape', 'm_foto_qr') +
        '<p class="m_pago_num">Yape: <strong>' + esc(Y.numero) + '</strong><br><small>' + esc(Y.titular) + '</small></p>' +
        '<ol class="m_pago_pasos"><li>Yapea el monto exacto.</li><li>Toma captura de la constancia.</li><li>Envíamela por WhatsApp con el botón de abajo.</li></ol>' +
        boton(
          'Enviar constancia',
          whatsapp('"' + item.titulo + '". Ya hice mi Yape de ' + precio(item.precio) + ', te envío la constancia.'),
          'cs_focus_2 w-100 justify-content-center',
          true
        )
    );
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
  }
  function cerrarPago() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
  }
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-pagar]');
    if (btn) return abrirPago(productos[+btn.getAttribute('data-pagar')]);
    if (e.target.closest('[data-cerrar]')) cerrarPago();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') cerrarPago();
  });
})();
