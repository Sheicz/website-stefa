/*
|--------------------------------------------------------------------------
| DATOS DE PAGO Y CONTACTO  ✏️
|--------------------------------------------------------------------------
| Edita solo este bloque. Los textos de cada página están directamente en
| su archivo .html (por ejemplo, index.html o sobre-mi.html).
|--------------------------------------------------------------------------
*/
var CONFIG = {
  correo: 'stefachav@gmail.com',
  whatsapp: '', // EDITAR: código de país + número, sin espacios ni "+", ej. '51987654321'

  // Pago con Plin o transferencia (hoy)
  pago: {
    plin: 'EDITAR número de Plin',
    banco: 'EDITAR Banco',
    cuenta: 'EDITAR número de cuenta',
    cci: 'EDITAR CCI',
    titular: 'EDITAR Nombre del titular',
    qr: 'assets/img/marca/qr-pago.png', // sube aquí la imagen de tu QR de Plin
  },

  // Precio de cada curso o servicio que se paga en la web.
  // precio vacío '' = el botón abre WhatsApp/correo para consultar.
  // linkPago = cuando tengas pasarela (Mercado Pago, Culqi, Izipay, Hotmart...)
  //            pega aquí el link y el botón irá directo a pagar.
  productos: {
    'python-ml': { nombre: 'Curso Python y Machine Learning', precio: '', linkPago: '' },
    'python-101': { nombre: 'Curso Python 101', precio: '', linkPago: '' },
    'python-asincrono': { nombre: 'Python asíncrono (mini clases grabadas)', precio: '', linkPago: '' },
    'asesoria': { nombre: 'Asesoría profesional', precio: '', linkPago: '' },
  },
};

/*
|--------------------------------------------------------------------------
| No necesitas tocar nada debajo de esta línea
|--------------------------------------------------------------------------
*/
(function () {
  'use strict';

  function esc(v) {
    return String(v == null ? '' : v)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Abre WhatsApp si hay número; si no, el correo.
  function contactar(mensaje) {
    if (CONFIG.whatsapp) {
      window.open('https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(mensaje), '_blank', 'noopener');
    } else {
      window.location.href = 'mailto:' + CONFIG.correo + '?subject=' + encodeURIComponent('Consulta desde la web') + '&body=' + encodeURIComponent(mensaje);
    }
  }

  // Precios en las páginas: <span data-precio="python-ml"></span>
  document.querySelectorAll('[data-precio]').forEach(function (el) {
    var p = CONFIG.productos[el.getAttribute('data-precio')];
    if (p) el.textContent = p.precio ? 'S/ ' + p.precio : 'Consultar';
  });

  // Correo en las páginas: <a data-correo></a>
  document.querySelectorAll('[data-correo]').forEach(function (el) {
    el.textContent = CONFIG.correo;
    if (el.tagName === 'A') el.href = 'mailto:' + CONFIG.correo;
  });

  // Ventana de pago con Plin o transferencia
  var modal = document.getElementById('m-pago');
  function abrirPago(p) {
    document.getElementById('m-pago-body').innerHTML =
      '<h4 class="cs_font_25 cs_primary_color cs_normal text-uppercase">' + esc(p.nombre) + '</h4>' +
      '<div class="cs_font_40 cs_focus_color cs_medium">S/ ' + esc(p.precio) + '</div>' +
      '<div class="cs_height_20"></div>' +
      '<div class="m_qr"><img src="' + esc(CONFIG.pago.qr) + '" alt="QR de Plin" onerror="this.parentNode.classList.add(\'is-empty\');this.remove()"></div>' +
      '<div class="cs_height_20"></div>' +
      '<p class="cs_font_18 cs_primary_color mb-0">Plin: <strong>' + esc(CONFIG.pago.plin) + '</strong></p>' +
      '<p class="cs_font_16 cs_primary_color mb-0">Transferencia ' + esc(CONFIG.pago.banco) + ': <strong>' + esc(CONFIG.pago.cuenta) + '</strong></p>' +
      '<p class="cs_font_16 cs_primary_color mb-0">CCI: ' + esc(CONFIG.pago.cci) + '</p>' +
      '<p class="cs_font_16 cs_opacity_07">' + esc(CONFIG.pago.titular) + '</p>' +
      '<p class="cs_font_16">Realiza el pago y envíame la constancia. Te confirmo y te genero el acceso.</p>' +
      '<button type="button" class="cs_btn cs_style_1 cs_focus_2 border-0" data-constancia><span>Enviar constancia</span></button>';
    modal.setAttribute('data-producto', p.nombre + ' (S/ ' + p.precio + ')');
    modal.classList.add('is-open');
  }

  document.addEventListener('click', function (e) {
    // Botones de compra: <a data-comprar="python-ml">
    var btn = e.target.closest('[data-comprar]');
    if (btn) {
      e.preventDefault();
      var p = CONFIG.productos[btn.getAttribute('data-comprar')];
      if (!p) return;
      if (p.linkPago) return window.open(p.linkPago, '_blank', 'noopener');
      if (p.precio) return abrirPago(p);
      return contactar('Hola Stefany, quiero información sobre ' + p.nombre + '.');
    }
    // Botones de consulta: <a data-consultar="Talleres para empresas">
    var c = e.target.closest('[data-consultar]');
    if (c) {
      e.preventDefault();
      return contactar('Hola Stefany, quiero información sobre ' + c.getAttribute('data-consultar') + '.');
    }
    if (e.target.closest('[data-constancia]')) {
      return contactar('Hola Stefany, ya hice el pago de ' + modal.getAttribute('data-producto') + '. Te envío la constancia.');
    }
    if (e.target.closest('[data-cerrar]')) modal.classList.remove('is-open');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal) modal.classList.remove('is-open');
  });

  // Formulario de contacto: arma el mensaje y lo envía por WhatsApp o correo
  document.querySelectorAll('form[data-contacto]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form);
      contactar(
        'Hola Stefany, soy ' + (d.get('nombre') || '') + ' ' + (d.get('apellido') || '') + '.\n' +
          'Correo: ' + (d.get('correo') || '') + '\nTeléfono: ' + (d.get('telefono') || '') + '\n\n' + (d.get('mensaje') || '')
      );
    });
  });
})();
