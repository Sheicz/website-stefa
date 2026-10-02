/*
|--------------------------------------------------------------------------
| Arma la página a partir de assets/js/contenido.js
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
  var logoHtml =
    '<img src="' + esc(S.logo) + '" alt="' + esc(S.marca) + '" data-falta="m_logo_text">';
  fill('m-logo', logoHtml);
  fill('m-logo-footer', logoHtml);

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
      '<li class="m_menu_cta"><a href="' + whatsapp('') + '" target="_blank" rel="noopener">Contacto</a></li>'
  );

  /* ---------- Portada ---------- */
  var P = S.portada;
  fill(
    'm-portada',
    '<div class="row align-items-center">' +
      '<div class="col-lg-6">' +
      '<p class="m_kicker">' + esc(P.saludo) + '</p>' +
      '<h1 class="m_hero_title">' + esc(P.titulo) + '</h1>' +
      '<p class="m_hero_text">' + esc(P.texto) + '</p>' +
      '<div class="m_btns">' +
      '<a class="m_btn m_btn_grad" href="' + esc(P.botonPrincipal.link) + '">' + esc(P.botonPrincipal.texto) + '</a>' +
      '<a class="m_btn m_btn_line" href="' + esc(P.botonSecundario.link) + '">' + esc(P.botonSecundario.texto) + '</a>' +
      '</div></div>' +
      '<div class="col-lg-6"><div class="m_hero_photo">' + foto(P.foto, S.nombre, 'm_foto_hero') + '</div></div>' +
      '</div>'
  );
  fill(
    'm-cifras',
    P.cifras
      .map(function (c) {
        return (
          '<div class="m_cifra"><div class="m_cifra_num"><span class="odometer" data-count-to="' + esc(c.numero) + '">0</span>' + esc(c.sufijo) + '</div>' +
          '<div class="m_cifra_txt">' + esc(c.texto) + '</div></div>'
        );
      })
      .join('')
  );

  /* ---------- Sobre mí ---------- */
  var A = S.sobreMi;
  fill(
    'm-sobre-mi',
    '<div class="row align-items-center">' +
      '<div class="col-lg-5">' + foto(A.foto, S.nombre, 'm_foto_about') + '</div>' +
      '<div class="col-lg-7">' +
      '<h2 class="m_section_title m_white">' + esc(A.titulo) + '</h2>' +
      A.texto.map(function (t) { return '<p class="m_about_text">' + esc(t) + '</p>'; }).join('') +
      '<div class="m_chips">' + A.especialidades.map(function (e) { return '<span class="m_chip">' + esc(e) + '</span>'; }).join('') + '</div>' +
      '</div></div>'
  );

  /* ---------- Logos (fila que se desliza, como en la plantilla) ---------- */
  function filaLogos(empresas, direccion) {
    var items = empresas
      .map(function (e) {
        return (
          '<div class="cs_brand cs_style_1 m_brand">' +
          '<img src="' + esc(e.logo) + '" alt="' + esc(e.nombre) + '" data-falta="m_brand_text">' +
          '</div>'
        );
      })
      .join('');
    // Se repite el bloque para que el movimiento sea continuo.
    var bloque = '<div class="cs_moving_content ' + direccion + '">' + items + items + '</div>';
    return '<div class="cs_moving_container_wrap cs_style_1"><div class="cs_moving_container_in">' + bloque + bloque + '</div></div>';
  }
  fill(
    'm-logos',
    '<p class="m_logos_title">' + esc(S.trayectoria.titulo) + '</p>' +
      filaLogos(S.trayectoria.empresas, 'cs_slide_right') +
      '<p class="m_logos_title">' + esc(S.clientes.titulo) + '</p>' +
      filaLogos(S.clientes.empresas, 'cs_slide_left') +
      '<div class="container text-center"><h3 class="m_logos_question">' + esc(S.clientes.pregunta) + '</h3>' +
      '<div class="m_btns justify-content-center">' +
      '<a class="m_btn m_btn_grad" href="' + whatsapp('agendar una llamada de 30 min para mi empresa.') + '" target="_blank" rel="noopener">' + esc(S.clientes.boton) + '</a>' +
      '<a class="m_text_link" href="' + whatsapp('') + '" target="_blank" rel="noopener">O escríbeme por WhatsApp</a>' +
      '</div></div>'
  );

  /* ---------- Pagos: Yape hoy, pasarela mañana ---------- */
  var productos = []; // se llena con cada cosa que se puede pagar
  function botonPago(item, textoBoton) {
    var usarPasarela = S.pagos.proveedor === 'pasarela' && item.linkPago;
    if (usarPasarela) {
      return '<a class="m_btn m_btn_grad w-100" href="' + esc(item.linkPago) + '" target="_blank" rel="noopener">' + esc(textoBoton) + '</a>';
    }
    productos.push(item);
    return '<button type="button" class="m_btn m_btn_grad w-100" data-pagar="' + (productos.length - 1) + '">' + esc(textoBoton) + '</button>';
  }

  /* ---------- Servicios (tarjetas tipo "Corporativo") ---------- */
  var V = S.servicios;
  fill(
    'm-servicios-head',
    '<p class="m_kicker text-center">' + esc(V.etiqueta) + '</p>' +
      '<h2 class="m_section_title text-center">' + esc(V.titulo) + '</h2>' +
      '<p class="m_section_text text-center">' + esc(V.texto) + '</p>'
  );
  fill(
    'm-servicios',
    V.lista
      .map(function (s) {
        var boton = s.precio
          ? botonPago({ titulo: s.titulo, precio: s.precio, linkPago: s.linkPago }, s.boton)
          : '<a class="m_btn m_btn_line w-100" href="' + whatsapp(s.titulo.toLowerCase() + '.') + '" target="_blank" rel="noopener">' + esc(s.boton) + '</a>';
        return (
          '<div class="col-xl-3 col-md-6" id="servicio-' + esc(s.id) + '">' +
          '<article class="m_card' + (s.destacado ? ' m_card_featured' : '') + '">' +
          (s.destacado ? '<span class="m_badge">Más popular</span>' : '') +
          '<div class="m_card_icon"><i class="fa-solid fa-' + esc(s.icono) + '"></i></div>' +
          '<p class="m_card_kicker">' + esc(s.categoria) + '</p>' +
          '<h3 class="m_card_title">' + esc(s.titulo) + '</h3>' +
          '<p class="m_card_duration">' + esc(s.duracion) + '</p>' +
          (s.precio ? '<p class="m_card_price">' + esc(precio(s.precio)) + '</p>' : '') +
          '<p class="m_card_text">' + esc(s.texto) + '</p>' +
          '<ul class="m_check">' + s.incluye.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>' +
          '<div class="m_card_bottom">' + boton +
          (s.nota ? '<a class="m_card_note" href="' + whatsapp('un taller gratuito para mi universidad o grupo de estudio.') + '" target="_blank" rel="noopener">' + esc(s.nota) + '</a>' : '') +
          '</div></article></div>'
        );
      })
      .join('')
  );

  /* ---------- Cursos ---------- */
  var C = S.cursos;
  fill(
    'm-cursos-head',
    '<p class="m_kicker text-center">' + esc(C.etiqueta) + '</p>' +
      '<h2 class="m_section_title text-center">' + esc(C.titulo) + '</h2>' +
      '<p class="m_section_text text-center">' + esc(C.texto) + '</p>'
  );
  fill(
    'm-cursos',
    C.lista
      .map(function (c) {
        return (
          '<div class="col-lg-4 col-md-6"><article class="m_course">' +
          foto(c.imagen, c.titulo, 'm_foto_course') +
          '<div class="m_course_body">' +
          '<span class="m_tag ' + (c.tipo === 'vivo' ? 'm_tag_live' : '') + '">' + (c.tipo === 'vivo' ? 'En curso' : 'Grabado · asíncrono') + '</span>' +
          '<h3 class="m_card_title">' + esc(c.titulo) + '</h3>' +
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

  /* ---------- Testimonios ---------- */
  if (S.testimonios && S.testimonios.length) {
    fill(
      'm-testimonios',
      S.testimonios
        .map(function (t) {
          return '<div class="col-md-6"><figure class="m_quote"><blockquote>“' + esc(t.texto) + '”</blockquote><figcaption>' + esc(t.autor) + '</figcaption></figure></div>';
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

  /* ---------- Cierre y pie ---------- */
  fill(
    'm-cierre',
    '<h2 class="m_section_title m_white">' + esc(S.cierre.titulo) + '</h2>' +
      '<p class="m_section_text m_white">' + esc(S.cierre.texto) + '</p>' +
      '<a class="m_btn m_btn_white" href="' + whatsapp('') + '" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> ' + esc(S.cierre.boton) + '</a>'
  );
  var redes = S.contacto.redes
    .map(function (r) {
      return '<a class="cs_center cs_font_18" href="' + esc(r.url) + '" target="_blank" rel="noopener" aria-label="' + esc(r.icono) + '"><i class="fa-brands fa-' + esc(r.icono) + '"></i></a>';
    })
    .join('');
  fill('m-redes', redes);
  fill(
    'm-contacto-footer',
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
        '<h3 class="m_card_title">' + esc(item.titulo) + '</h3>' +
        '<p class="m_pago_monto">' + esc(precio(item.precio)) + '</p>' +
        foto(Y.qr, 'QR de Yape', 'm_foto_qr') +
        '<p class="m_pago_num">Yape: <strong>' + esc(Y.numero) + '</strong><br><small>' + esc(Y.titular) + '</small></p>' +
        '<ol class="m_pago_pasos"><li>Yapea el monto exacto.</li><li>Toma captura de la constancia.</li><li>Envíamela por WhatsApp con el botón de abajo.</li></ol>' +
        '<a class="m_btn m_btn_grad w-100" target="_blank" rel="noopener" href="' +
        whatsapp('"' + item.titulo + '". Ya hice mi Yape de ' + precio(item.precio) + ', te envío la constancia.') +
        '"><i class="fa-brands fa-whatsapp"></i> Enviar constancia</a>'
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
