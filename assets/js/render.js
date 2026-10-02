/*
|--------------------------------------------------------------------------
| Arma la página a partir de assets/js/contenido.js usando el mismo HTML
| de la plantilla Grace (plantilla-inicio.html y pricing.html).
| No necesitas tocar este archivo para cambiar textos, precios o imágenes.
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
  // Imagen que, si todavía no existe, muestra un recuadro con la ruta a subir.
  function foto(src, alt, clase, claseImg) {
    return (
      '<div class="m_foto ' + (clase || '') + '" data-falta="Sube: ' + esc(src) + '">' +
      '<img class="' + (claseImg || '') + '" src="' + esc(src) + '" alt="' + esc(alt) + '" data-falta="caja">' +
      '</div>'
    );
  }

  // Si una imagen todavía no fue subida: los logos muestran su nombre en texto,
  // las fotos un recuadro con la ruta donde subirlas y las miniaturas se ocultan.
  document.addEventListener(
    'error',
    function (e) {
      var img = e.target;
      if (!img || img.tagName !== 'IMG' || !img.hasAttribute('data-falta')) return;
      var modo = img.getAttribute('data-falta');
      if (modo === 'caja') {
        img.parentNode.classList.add('is-empty');
        img.remove();
      } else if (modo === 'ocultar') {
        img.parentNode.remove();
      } else {
        var span = document.createElement('span');
        span.className = modo;
        span.textContent = img.alt;
        img.replaceWith(span);
      }
    },
    true
  );

  /* ---------- Cobro: Yape hoy, pasarela mañana ----------
   | Devuelve los atributos para que un elemento abra el pago al hacer clic.
   */
  var productos = [];
  function accionCompra(item) {
    if (!item.precio) return 'data-wa="' + esc(whatsapp(item.titulo.toLowerCase() + '.')) + '"';
    if (S.pagos.proveedor === 'pasarela' && item.linkPago) return 'data-wa="' + esc(item.linkPago) + '"';
    productos.push(item);
    return 'data-pagar="' + (productos.length - 1) + '"';
  }

  /* ---------- SEO básico ---------- */
  document.title = S.marca + ' | ' + S.nombre;
  var meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', S.descripcionSEO);

  /* ---------- Logo ---------- */
  fill('m-logo', '<img src="' + esc(S.logo) + '" alt="' + esc(S.marca) + '" data-falta="m_logo_text">');
  fill('m-logo-footer', '<img src="' + esc(S.logoBlanco) + '" alt="' + esc(S.marca) + '" data-falta="m_logo_text">');

  /* ---------- Menú ---------- */
  fill(
    'm-menu',
    '<li class="active"><a href="#inicio">Inicio</a></li>' +
      '<li><a href="#sobre-mi">Sobre mí</a></li>' +
      '<li class="menu-item-has-children"><a href="#servicios">Servicios</a><ul>' +
      S.servicios.lista.map(function (s) { return '<li><a href="#planes">' + esc(s.titulo) + '</a></li>'; }).join('') +
      '</ul></li>' +
      '<li><a href="#cursos">Cursos</a></li>' +
      '<li><a href="#preguntas">Preguntas</a></li>' +
      '<li><a href="#contacto">Contacto</a></li>'
  );

  /* ---------- Portada ---------- */
  var P = S.portada;
  fill(
    'm-portada',
    '<h1 class="cs_hero_title cs_font_90 cs_focus_color_2 cs_medium text-uppercase">' + esc(P.saludo) + '</h1>' +
      '<h4 class="cs_hero_text cs_primary_color cs_font_25 cs_normal text-uppercase">' + esc(P.texto) + '</h4>'
  );
  fill(
    'm-portada-foto',
    foto(P.foto, S.nombre, 'm_foto_hero', 'cs_imagebox_image position-relative w-100') +
      '<a href="' + whatsapp('') + '" target="_blank" rel="noopener" class="cs_btn cs_center position-absolute">' + esc(P.botonFoto) + '</a>' +
      '<img class="cs_imagebox_shape_1 cs_sprin_animation position-absolute" src="assets/img/shapes/star_shape_6.svg" alt="">' +
      '<img class="cs_imagebox_shape_2 cs_sprin_animation position-absolute" src="assets/img/shapes/star_shape_5.svg" alt="">'
  );
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
  fill(
    'm-sobre-mi',
    '<div class="row"><div class="col-xxl-4 col-xl-5">' +
      '<h2 class="cs_about_title cs_font_70 cs_white_color cs_normal mb-0 text-uppercase">' + esc(S.sobreMi.titulo) + '</h2>' +
      '</div><div class="col-xxl-8 col-xl-7">' +
      '<p class="cs_about_text cs_font_25 cs_white_color text-uppercase cs_opacity_07 cs_line_top_1 mb-0">' + esc(S.sobreMi.texto) + '</p>' +
      '</div></div>'
  );

  /* ---------- Mis servicios (lista de la plantilla) ---------- */
  var V = S.servicios;
  fill('m-servicios-intro', esc(V.intro));
  fill('m-servicios-titulo', esc(V.titulo).toUpperCase());
  fill(
    'm-servicios',
    V.lista
      .map(function (s) {
        return (
          '<a href="#planes" class="cs_service cs_style_1 cs_parallax_mousemove_scene">' +
          '<h4 class="cs_service_title cs_primary_color cs_font_25 mb-0 cs_normal">' + esc(s.titulo) + '</h4>' +
          '<div class="cs_service_thumbnail cs_parallax_mousemove_follow"><img class="h-100 w-100" src="' + esc(s.imagen) + '" alt="' + esc(s.titulo) + '" data-falta="ocultar"></div>' +
          '<div class="cs_service_icon"><img src="assets/img/icons/arrow.svg" alt="arrow"></div>' +
          '</a>'
        );
      })
      .join('')
  );

  /* ---------- Planes (tarjetas de pricing.html) ---------- */
  fill(
    'm-planes-titulo',
    '<h2 class="cs_hero_title text-center cs_font_70 cs_focus_color_2 cs_medium text-uppercase">' + esc(V.tituloPlanes) + '</h2>' +
      '<h3 class="cs_hero_subtitle text-center cs_font_25 cs_primary_color cs_normal">' + esc(V.subtituloPlanes) + '</h3>'
  );
  fill(
    'm-planes',
    V.lista
      .map(function (s, i) {
        var fondo = i === 0 || i === 3 ? 'cs_focus_bg_2' : 'cs_focus_bg_3';
        return (
          '<div id="servicio-' + esc(s.id) + '" ' + accionCompra(s) + ' class="cs_price cs_style_1 cs_type_1 ' + fondo + ' cs_focus_bg cs_white_color_hover text-center cs_radius_20 cs_transition_4 m_clic">' +
          '<div class="cs_price_top position-relative">' +
          '<h4 class="cs_price_title text-uppercase cs_normal cs_font_25">' + esc(s.titulo) + '</h4>' +
          '<div class="cs_price_wrap m-auto cs_secondary_bg cs_font_40 cs_primary_color cs_medium cs_center"><div>' + (s.precio ? esc(precio(s.precio)) : 'Cotizar') + '</div></div>' +
          '<span class="cs_btn cs_style_3 position-absolute">' +
          '<img src="assets/img/icons/arrow_sm_down_light.svg" alt="arrow-icon"><img src="assets/img/icons/arrow_sm_down_light.svg" alt="arrow-icon">' +
          '</span></div>' +
          '<ul class="cs_price_list cs_primary_color cs_font_18 cs_mp_0">' + s.incluye.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
          '</div>'
        );
      })
      .join('')
  );

  /* ---------- Logos (sección de clientes de la plantilla) ---------- */
  function filaLogos(empresas, direccion) {
    var items = empresas
      .map(function (e) {
        return '<div class="cs_brand cs_style_1"><img src="' + esc(e.logo) + '" alt="' + esc(e.nombre) + '" data-falta="m_brand_text"></div>';
      })
      .join('');
    var bloque = '<div class="cs_moving_content ' + direccion + '">' + items + items + '</div>';
    return '<div class="cs_moving_container_wrap cs_style_1"><div class="cs_moving_container_in">' + bloque + bloque + '</div></div>';
  }
  fill('m-logos-titulo', esc(S.logos.titulo));
  fill(
    'm-logos',
    filaLogos(S.logos.fila1, 'cs_slide_right') + '<div class="cs_height_70 cs_height_lg_0"></div>' + filaLogos(S.logos.fila2, 'cs_slide_left')
  );

  /* ---------- Cintas en movimiento ---------- */
  function cinta(texto) {
    var item = '<div class="d-flex align-items-center"><img class="cs_sprin_animation cs_sprin_animation_10" src="assets/img/shapes/star_shape_4.svg" alt=""><h3 class="cs_focus_color cs_font_40 cs_medium mb-0">' + esc(texto) + '</h3></div>';
    var bloque = '<div class="cs_moving_content cs_slide_left">' + item + item + item + '</div>';
    return '<div class="cs_moving_container_in">' + bloque + bloque + '</div>';
  }
  fill('m-cursos-cinta', cinta(S.cursos.cinta));
  fill('m-cinta-2', cinta(S.especialidades.cinta));
  fill('m-cinta-3', cinta(S.especialidades.cinta));

  /* ---------- Cursos (slider de proyectos de la plantilla) ---------- */
  fill(
    'm-cursos',
    S.cursos.lista
      .map(function (c) {
        var accion = accionCompra(c);
        return (
          '<div class="slick_slide_in"><div class="cs_portfolio cs_style_1 cs_transition_4">' +
          '<a class="cs_portfolio_thumbnail d-block position-relative cs_zoom m_clic" ' + accion + '>' +
          foto(c.imagen, c.titulo, 'm_foto_curso', 'w-100 cs_zoom_in') +
          '<p class="cs_portfolio_desc cs_transition_4 cs_font_18 cs_white_color cs_focus_bg position-absolute bottom-0 cs_normal w-100 mb-0">' + esc(c.texto) + '</p>' +
          '</a>' +
          '<div class="cs_portfolio_info">' +
          '<h3 class="cs_portfolio_title cs_font_25 cs_primary_color text-uppercase cs_normal"><a class="m_clic" ' + accion + '>' + esc(c.titulo) + '</a></h3>' +
          '<p class="cs_portfolio_subtitle cs_font_18 mb-0 cs_primary_color cs_opacity_07">' + esc(c.etiqueta) + ' · ' + esc(precio(c.precio)) + '</p>' +
          '</div></div></div>'
        );
      })
      .join('')
  );

  /* ---------- Especialidades (acordeón de valores de la plantilla) ---------- */
  fill('m-expertise-titulo', esc(S.especialidades.titulo));
  fill(
    'm-expertise',
    S.especialidades.lista
      .map(function (v, i, arr) {
        return (
          '<div class="cs_accordian' + (i === arr.length - 1 ? ' active' : '') + '">' +
          '<div class="cs_accordian_head d-flex justify-content-between align-items-center">' +
          '<h2 class="cs_accordian_title cs_white_color cs_font_70 cs_normal mb-0">' + esc(v.titulo) + '</h2>' +
          '<span class="cs_btn cs_style_3 cs_flex_none cs_center"><img src="assets/img/icons/arrow_sm_down_light.svg" alt="arrow-icon"><img src="assets/img/icons/arrow_sm_down_light.svg" alt="arrow-icon"></span>' +
          '</div>' +
          '<div class="cs_accordian_body"><div class="d-flex justify-content-end"><p class="cs_white_color text-uppercase cs_font_25 mb-0">' + esc(v.texto) + '</p></div></div>' +
          '</div>'
        );
      })
      .join('')
  );

  /* ---------- Testimonios ---------- */
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

  /* ---------- Cierre ---------- */
  fill(
    'm-cierre',
    '<h2 class="cs_cta_title cs_normal text-uppercase cs_white_color cs_font_70">' + esc(S.cierre.titulo) + '</h2>' +
      '<h3 class="cs_cta_subtitle cs_medium cs_white_color cs_font_40">' + esc(S.cierre.texto) + '</h3>' +
      '<a class="cs_btn cs_style_1 cs_focus_2" href="' + whatsapp('') + '" target="_blank" rel="noopener"><span>' + esc(S.cierre.boton) + '</span></a>'
  );

  /* ---------- Preguntas frecuentes ---------- */
  fill(
    'm-preguntas',
    S.preguntas
      .map(function (q, i) {
        return (
          '<div class="cs_accordian' + (i === 1 ? ' active' : '') + '"><div class="container">' +
          '<div class="cs_accordian_head"><h4 class="cs_accordian_title cs_font_25 cs_white_color cs_normal mb-0">' + esc(q.pregunta) + '</h4><span class="cs_accordian_toggle"></span></div>' +
          '<div class="cs_accordian_body"><p class="mb-0 cs_white_color cs_font_18">' + esc(q.respuesta) + '</p></div>' +
          '</div></div>'
        );
      })
      .join('')
  );

  /* ---------- Pie ---------- */
  var K = S.contacto;
  fill(
    'm-links-footer',
    [['#sobre-mi', 'Sobre mí'], ['#servicios', 'Servicios'], ['#planes', 'Planes'], ['#cursos', 'Cursos'], ['#preguntas', 'Preguntas']]
      .map(function (l) {
        return '<li><a class="cs_font_18 cs_text_btn_2" href="' + l[0] + '"><span class="cs_text_btn_text">' + l[1] + '</span></a></li>';
      })
      .join('')
  );
  fill('m-ubicacion', esc(K.ubicacion));
  fill(
    'm-contacto-footer',
    '<li class="cs_font_18">' + esc(S.nombre) + '</li>' +
      '<li class="cs_font_18"><a href="mailto:' + esc(K.correo) + '">' + esc(K.correo) + '</a></li>' +
      '<li class="cs_font_18"><a href="' + whatsapp('') + '" target="_blank" rel="noopener">WhatsApp</a></li>' +
      '<li class="cs_font_18">' + esc(K.usuario) + '</li>'
  );
  fill(
    'm-redes',
    K.redes
      .map(function (r) {
        return '<a class="cs_center cs_font_18" href="' + esc(r.url) + '" target="_blank" rel="noopener" aria-label="' + esc(r.icono) + '"><i class="fa-brands fa-' + esc(r.icono) + '"></i></a>';
      })
      .join('')
  );

  /* ---------- Ventana de pago con Yape ---------- */
  var modal = $('m-pago');
  var Y = S.pagos.yape;
  function abrirPago(item) {
    fill(
      'm-pago-body',
      '<h4 class="cs_font_25 cs_primary_color cs_normal text-uppercase">' + esc(item.titulo) + '</h4>' +
        '<div class="cs_font_40 cs_focus_color cs_medium">' + esc(precio(item.precio)) + '</div>' +
        '<div class="cs_height_20"></div>' +
        foto(Y.qr, 'QR de Yape', 'm_foto_qr') +
        '<div class="cs_height_20"></div>' +
        '<p class="cs_font_18 cs_primary_color mb-0">Yape: <strong>' + esc(Y.numero) + '</strong></p>' +
        '<p class="cs_font_16 cs_opacity_07">' + esc(Y.titular) + '</p>' +
        '<p class="cs_font_16">Yapea el monto y envíame la captura por WhatsApp. Te confirmo y te envío el acceso.</p>' +
        '<a class="cs_btn cs_style_1 cs_focus_2" target="_blank" rel="noopener" href="' +
        esc(whatsapp('"' + item.titulo + '". Ya hice mi Yape de ' + precio(item.precio) + ', te envío la constancia.')) +
        '"><span>Enviar constancia</span></a>'
    );
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
  }
  function cerrarPago() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
  }
  document.addEventListener('click', function (e) {
    var pagar = e.target.closest('[data-pagar]');
    if (pagar) {
      e.preventDefault();
      return abrirPago(productos[+pagar.getAttribute('data-pagar')]);
    }
    var wa = e.target.closest('[data-wa]');
    if (wa) {
      e.preventDefault();
      return window.open(wa.getAttribute('data-wa'), '_blank', 'noopener');
    }
    if (e.target.closest('[data-cerrar]')) cerrarPago();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') cerrarPago();
  });
})();
