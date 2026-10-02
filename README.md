# Web de marca personal · Stefachav

Web de Estefa hecha con la plantilla **Grace**, con el mismo diseño y todas sus páginas adaptadas al español con su contenido.

## Páginas

| Página | Archivo | Basada en la página de la plantilla |
| --- | --- | --- |
| Inicio | `index.html` | `plantilla-inicio.html` (inicio original) |
| Sobre mí | `sobre-mi.html` | `about.html` |
| Talleres para empresas | `talleres-empresas.html` | `service-details-v1.html` |
| Asesorías profesionales | `asesorias-profesionales.html` | `service-details-v1.html` |
| Ponencias y speaker | `ponencias.html` | `service-details-v1.html` |
| Colaboraciones e influencer | `colaboraciones.html` | `service-details-v1.html` |
| Cursos | `cursos.html` | `project.html` |
| Curso Python y Machine Learning | `curso-python-machine-learning.html` | `project-details.html` |
| Curso Python 101 | `curso-python-101.html` | `project-details.html` |
| Curso Python asíncrono | `curso-python-asincrono.html` | `project-details.html` |
| Precios | `precios.html` | `pricing.html` |
| Contacto | `contacto.html` | `contact.html` |

Las páginas originales de la plantilla en inglés (`about.html`, `blog.html`, `home-v2.html`, etc.) siguen en el repo como referencia, pero ya no aparecen en el menú. Puedes borrarlas cuando quieras.

## Cómo editar

- **Textos:** abre la página en GitHub → lápiz ✏️ → busca el texto (Ctrl+F) → cámbialo → **Commit changes**. Busca `EDITAR` para ver lo que falta completar (años y cargos de tu trayectoria, testimonios, usuario de TikTok).
- **Precios, Yape, correo y WhatsApp:** están todos al inicio de [`assets/js/sitio.js`](assets/js/sitio.js). Ahí pones el precio de cada curso y de la asesoría; si un precio está vacío, el botón dice "Consultar" y abre WhatsApp (o el correo si no hay WhatsApp).
- **Fotos:** reemplaza las imágenes de ejemplo de la plantilla subiendo tu archivo **con el mismo nombre**:

| Qué | Archivo |
| --- | --- |
| Tu foto principal (inicio y sobre mí) | `assets/img/hero/h2.png` |
| Fotos de servicios en la lista del inicio | `assets/img/services/hsv_1.jpg` … `hsv_5.jpg` |
| Fotos dentro de cada servicio | `assets/img/services/sv2.jpg` … `sv5.jpg` |
| Cursos (slider del inicio) | `assets/img/portfolio/pt4.jpg`, `pt3.jpg`, `pt1.jpg` |
| Cursos (página de cursos) | `assets/img/portfolio/pt10.jpg`, `pt11.jpg`, `pt12.jpg` |
| Foto principal de cada curso | `assets/img/portfolio/pt17.jpg` |
| Fotos de clases | `assets/img/portfolio/pt18.jpg` |
| Cursos en "Sobre mí" | `assets/img/award/a1.jpg`, `a2.jpg`, `a3.jpg` |
| Galería de talleres y charlas | `assets/img/gallery/g1.jpg`, `g2.jpg`, `g3.jpg` |
| QR de Yape | `assets/img/marca/yape-qr.png` |

- **Logos de empresas:** en `index.html` (sección "MI TRAYECTORIA") cada empresa está como texto (`<span class="m_brand_text">BCP</span>`). Cuando tengas el logo en blanco, súbelo y cambia ese texto por `<img src="assets/img/brands/bcp.png" alt="BCP">`.
- **Redes sociales:** en el pie de cada página, los íconos de TikTok, LinkedIn e Instagram tienen `href="#"`: cambia `#` por el link de tu perfil.

## Pagos

- **Hoy (Yape):** los botones "Inscribirme" y "Reservar" abren una ventana con tu QR, tu número y el monto; luego te envían la constancia por WhatsApp.
- **Después (pasarela):** en `assets/js/sitio.js`, pega el link de pago en `linkPago` (Mercado Pago, Culqi, Izipay, Hotmart, etc.) y el botón irá directo a pagar.

## Publicar

1. Entra a [vercel.com](https://vercel.com) (o [netlify.com](https://netlify.com)) con tu cuenta de GitHub.
2. **Add New → Project** → elige `website-stefa` → **Deploy** (es HTML estático, no hay que configurar nada).
3. Te da un link `….vercel.app`; luego puedes conectar tu dominio en *Settings → Domains*.

Cada cambio que guardes en GitHub se publica solo.

## Archivos agregados a la plantilla

- `assets/js/sitio.js`: precios, Yape, correo/WhatsApp, ventana de pago y formularios.
- `assets/css/marca.css`: logo en texto, empresas en texto y ventana de pago. `assets/css/style.css` no se tocó.
