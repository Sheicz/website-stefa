# Web de marca personal · Stefa

Web de Stefany hecha con la plantilla **Grace**, con el mismo diseño y todas sus páginas adaptadas al español con su contenido.

## Páginas

| Página | Archivo | Basada en la página de la plantilla |
| --- | --- | --- |
| Inicio | `index.html` | `plantilla-inicio.html` (inicio original) |
| Sobre mí | `sobre-mi.html` | `about.html` |
| Talleres para empresas | `talleres-empresas.html` | `service-details-v1.html` |
| Asesorías profesionales | `asesorias-profesionales.html` | `service-details-v1.html` |
| Ponencias & Charlas | `ponencias.html` | `service-details-v1.html` |
| Colaboraciones & Marcas | `colaboraciones.html` | `service-details-v1.html` |
| Cursos | `cursos.html` | `project.html` |
| Curso Python y Machine Learning | `curso-python-machine-learning.html` | `project-details.html` |
| Curso Python 101 | `curso-python-101.html` | `project-details.html` |
| Curso Python asíncrono | `curso-python-asincrono.html` | `project-details.html` |
| Contacto | `contacto.html` | `contact.html` |

Las páginas originales de la plantilla en inglés (`about.html`, `blog.html`, `home-v2.html`, etc.) siguen en el repo como referencia, pero ya no aparecen en el menú. Puedes borrarlas cuando quieras.

## Cómo editar

- **Textos:** abre la página en GitHub → lápiz ✏️ → busca el texto (Ctrl+F) → cámbialo → **Commit changes**. Busca `EDITAR` para ver lo que falta completar (años y cargos de tu trayectoria y testimonios).
- **Precios, datos de pago, correo y WhatsApp:** están todos al inicio de [`assets/js/sitio.js`](assets/js/sitio.js). Ahí pones el precio de cada curso y de la asesoría; si un precio está vacío, el botón dice "Consultar" y abre WhatsApp (o el correo si no hay WhatsApp).
- **Fotos:** todas las fotos de la web están en [`assets/img/estefa/`](assets/img/estefa/). Hoy son imágenes grises de ejemplo; reemplázalas subiendo tu foto **con el mismo nombre**:

| Archivo | Dónde sale | Tamaño sugerido |
| --- | --- | --- |
| `foto-principal.png` | Tu foto en el inicio y en sobre mí (PNG sin fondo) | 600 × 640 |
| `servicio-talleres.jpg` | Lista de servicios del inicio | 1000 × 620 |
| `servicio-asesorias.jpg` | Lista de servicios del inicio | 1000 × 620 |
| `servicio-ponencias.jpg` | Lista de servicios del inicio | 1000 × 620 |
| `servicio-colaboraciones.jpg` | Lista de servicios del inicio | 1000 × 620 |
| `servicio-cursos.jpg` | Lista de servicios del inicio | 1000 × 620 |
| `servicio-detalle-1.jpg` … `-4.jpg` | Las 4 tarjetas dentro de cada página de servicio | 1000 × 640 |
| `curso-python-ml.jpg` | Portada del curso Python y Machine Learning (inicio, cursos, sobre mí y su página) | 800 × 900 |
| `curso-python-101.jpg` | Portada del curso Python 101 | 800 × 900 |
| `curso-python-asincrono.jpg` | Portada del curso Python asíncrono | 800 × 900 |
| `clase-1.jpg` … `clase-3.jpg` | "Así son mis clases" en las páginas de cursos | 1000 × 680 |
| `evento-1.jpg` … `evento-3.jpg` | "Momentos en mis talleres y charlas" en sobre mí | 480 × 550 |

  El QR de Plin va en `assets/img/marca/qr-pago.png`.

- **Logos de empresas:** en `index.html` (sección "MI TRAYECTORIA") cada empresa está como texto (`<span class="m_brand_text">BCP</span>`). Cuando tengas el logo en blanco, súbelo y cambia ese texto por `<img src="assets/img/brands/bcp.png" alt="BCP">`.
- **Redes sociales:** en el pie de cada página, TikTok ya apunta a @Stefachav; los íconos de LinkedIn e Instagram tienen `href="#"`: cambia `#` por el link de tu perfil.

## Pagos

- **Hoy (Plin o transferencia):** los botones "Inscribirme" y "Reservar" abren una ventana con tu QR de Plin, tu número, tu cuenta y el monto; luego te envían la constancia por WhatsApp.
- **Después (pasarela):** en `assets/js/sitio.js`, pega el link de pago en `linkPago` (Mercado Pago, Culqi, Izipay, Hotmart, etc.) y el botón irá directo a pagar.

## Publicar

1. Entra a [vercel.com](https://vercel.com) (o [netlify.com](https://netlify.com)) con tu cuenta de GitHub.
2. **Add New → Project** → elige `website-stefa` → **Deploy** (es HTML estático, no hay que configurar nada).
3. Te da un link `….vercel.app`; luego puedes conectar tu dominio en *Settings → Domains*.

Cada cambio que guardes en GitHub se publica solo.

## Archivos agregados a la plantilla

- `assets/js/sitio.js`: precios, datos de pago, correo/WhatsApp, ventana de pago y formularios.
- `assets/css/marca.css`: logo en texto, empresas en texto y ventana de pago. `assets/css/style.css` no se tocó.
