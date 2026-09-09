# Nerdybles Links

Landing page moderna y responsive creada para **Nerdybles**, diseñada para centralizar sus redes sociales, tienda online y canales de contacto en una experiencia visual inspirada en la cultura pop.

El proyecto reemplaza la versión anterior basada en HTML/CSS por una interfaz construida con **React, Vite y Tailwind CSS**, incorporando una estética neon con animaciones y efectos visuales.

## ✨ Características

- 🎨 Diseño oscuro con estética **neon / sci-fi**
- 📱 Interfaz responsive para dispositivos móviles y escritorio
- 🔗 Acceso directo a las principales redes sociales de Nerdybles
- 🛍️ Acceso directo a la tienda online
- 💬 Canales de contacto mediante WhatsApp y Telegram
- ✉️ Contacto por correo electrónico
- ✨ Animaciones y efectos de iluminación
- 🌌 Fondo decorativo con órbitas, partículas y elementos luminosos
- 🖱️ Estados interactivos para mouse y teclado
- ♿ Consideración de `prefers-reduced-motion`
- 🔤 Tipografía Fredoka
- 🖼️ Logo y favicon personalizados

## 🌐 Redes y enlaces

La página centraliza actualmente:

- Instagram
- Facebook
- TikTok
- X
- YouTube
- Threads
- Tienda Nerdybles
- WhatsApp
- Telegram
- Correo electrónico

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| React 19 | Construcción de la interfaz |
| Vite 7 | Desarrollo y build |
| Tailwind CSS 4 | Utilidades y estilos |
| JavaScript / JSX | Lógica y componentes |
| TypeScript | Verificación durante el proceso de build |
| React Icons | Iconos de redes sociales |
| Lucide React | Iconos de interfaz |
| Google Fonts | Tipografía Fredoka |
| GitHub Actions | Integración y despliegue |

## 📁 Estructura

```text
links/
├── .github/
│   └── workflows/
│       ├── build.yml
│       └── static.yml
├── public/
│   └── assets/
│       ├── nerdbot-favicon.ico
│       └── nerdbot-logo.jpg
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.js
└── LICENSE
```

## 🚀 Instalación

### Requisitos

- Node.js 22 o superior
- npm

### Clonar el repositorio

```bash
git clone https://github.com/GomezDJasson/links.git
cd links
```

### Instalar dependencias

```bash
npm install
```

### Iniciar el servidor de desarrollo

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local para acceder al proyecto.

## 📦 Build de producción

Para generar la versión optimizada para producción:

```bash
npm run build
```

Para previsualizar el resultado:

```bash
npm run preview
```

## 🚀 Deploy

El proyecto utiliza **GitHub Actions** para automatizar el proceso de build y despliegue en GitHub Pages.

Los cambios realizados en la rama `redesign/react-neon` ejecutan automáticamente el workflow de despliegue, que realiza:

```text
Checkout
   ↓
Instalación de dependencias
   ↓
Build
   ↓
Generación del artifact
   ↓
GitHub Pages
```

También existe un workflow independiente que comprueba que el proyecto pueda compilar correctamente en pushes y pull requests.

## 🌍 Demo

**[Visitar Nerdybles Links](https://gomezdjasson.github.io/links/)**

## 🎯 Objetivo del proyecto

El objetivo es proporcionar a Nerdybles una página de enlaces propia, rápida y visualmente diferenciada de las soluciones genéricas tipo Linktree.

El diseño busca combinar:

- Cultura pop
- Coleccionismo
- Estética tecnológica
- Identidad visual de Nerdybles
- Accesibilidad
- Experiencia responsive

## 👨‍💻 Autor

Diseñado y desarrollado por **Gomez D. Jasson**.

- GitHub: [@GomezDJasson](https://github.com/GomezDJasson)
- Portfolio: [gomezdjasson.github.io/portafolio](https://gomezdjasson.github.io/portafolio/)

---

© 2026 Nerdybles. Todos los derechos reservados.
