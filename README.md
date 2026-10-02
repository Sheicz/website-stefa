# Web de marca personal · Stefachav

Página de una sola pantalla (inicio, sobre mí, trayectoria, servicios, cursos, preguntas y contacto) hecha sobre la plantilla **Grace**.

## Cómo editar (lo único que necesitas saber)

**Todos los textos, precios, datos de contacto y de pago están en un solo archivo:**
[`assets/js/contenido.js`](assets/js/contenido.js)

Desde GitHub: abre el archivo → ícono del lápiz ✏️ → cambia el texto entre comillas → **Commit changes**. Si la web está conectada a Vercel o Netlify, se actualiza sola en 1 minuto.

Busca la palabra `EDITAR`: marca los datos que faltan completar (nombre, número de WhatsApp, Yape, precios, nombres de cursos, empresas).

### Imágenes

Sube tus archivos a `assets/img/marca/` con estos nombres (o cambia el nombre en `contenido.js`):

| Qué | Archivo |
| --- | --- |
| Logo | `assets/img/marca/logo.png` |
| Foto de portada (vertical) | `assets/img/marca/foto-portada.jpg` |
| Foto de "Sobre mí" (cuadrada) | `assets/img/marca/foto-sobre-mi.jpg` |
| QR de Yape | `assets/img/marca/yape-qr.png` |
| Logos de empresas | `assets/img/marca/logos/empresa-1.png`, `cliente-1.png`, … |
| Portadas de cursos (16:9) | `assets/img/marca/cursos/curso-1.jpg`, … |

Mientras una imagen no exista, la web muestra un recuadro con la ruta donde subirla (y los logos muestran el nombre de la empresa en texto).

Para subir desde GitHub: entra a la carpeta → **Add file → Upload files**.

### Colores y tipografía

Están al inicio de [`assets/css/marca.css`](assets/css/marca.css) (variables `--m-rosa`, `--m-celeste`, `--m-acento`, `--m-oscuro`).

## Pagos

- **Hoy (Yape):** los botones *Reservar / Inscribirme / Comprar* abren una ventana con el QR, el número y el monto; la persona yapea y te envía la constancia por WhatsApp con un mensaje ya escrito.
- **Después (pasarela):** en `contenido.js` cambia `pagos.proveedor` a `'pasarela'` y pon el `linkPago` de cada curso o servicio (Mercado Pago, Culqi, Izipay, Hotmart, etc.). Los que tengan link irán directo a la pasarela; los demás siguen con Yape.

## Publicar (la forma más rápida)

1. Entra a [vercel.com](https://vercel.com) (o [netlify.com](https://netlify.com)) con tu cuenta de GitHub.
2. **Add New → Project** → elige `website-stefa` → **Deploy** (no hay que configurar nada, es HTML estático).
3. Te da un link `….vercel.app`. Luego puedes conectar tu dominio propio en *Settings → Domains*.

Cada cambio que guardes en GitHub se publica solo.

## Ver en tu computadora

Abre `index.html` con doble clic, o para una vista más fiel: `python3 -m http.server` y entra a `http://localhost:8000`.

## Archivos

- `index.html` — estructura de la página (no hace falta tocarlo).
- `assets/js/contenido.js` — **todo el contenido**.
- `assets/js/render.js` — arma la página a partir del contenido.
- `assets/css/marca.css` — estilos de la marca encima de la plantilla.
- `plantilla-inicio.html` y las demás páginas `.html` — páginas originales de la plantilla, como referencia. Se pueden borrar cuando ya no las necesites.
