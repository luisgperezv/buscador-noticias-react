# 📰 Buscador de Noticias Internacionales

Aplicación web desarrollada en React.js que permite consultar y mostrar las noticias más recientes de diferentes categorías utilizando una API pública de noticias.

## 📋 Descripción del Proyecto

Esta aplicación permite a los usuarios seleccionar una categoría de noticias desde un menú desplegable y, al presionar un botón, consulta la API y muestra las noticias más recientes de esa categoría. Cada noticia muestra su título, fuente/autor, imagen destacada (si está disponible) y un enlace al artículo original.

## 🎯 Objetivo

Poner en práctica el manejo de eventos y estados en React mediante el consumo de una API pública, **sin emplear el hook useEffect**. El proyecto evidencia la capacidad para controlar la interacción del usuario y representar información dinámica proveniente de fuentes externas.

## ✨ Características

- ✅ Selección de categorías de noticias (Tecnología, Deportes, Salud, Entretenimiento, Ciencia, Negocios)
- ✅ Búsqueda de noticias mediante botón (sin useEffect)
- ✅ Visualización de noticias con:
  - Título
  - Fuente o autor
  - Imagen destacada
  - Enlace al artículo original
- ✅ Manejo de errores y mensajes informativos
- ✅ Indicador de carga mientras se obtienen los datos
- ✅ Diseño responsive y visualmente atractivo con Bootstrap 5
- ✅ Uso exclusivo de `useState` para manejo de estados

## 🛠️ Tecnologías Utilizadas

- **React.js** - Biblioteca de JavaScript para construir interfaces de usuario
- **Bootstrap 5** - Framework CSS para diseño responsive
- **Vite** - Herramienta de construcción y desarrollo
- **GNews API** / **NewsAPI** - APIs públicas de noticias

## 📡 API Utilizada

La aplicación utiliza **NewsAPI** (https://newsapi.org) como fuente principal de noticias. NewsAPI proporciona acceso a noticias de más de 80,000 fuentes en todo el mundo.

### Configuración de la API Key

La aplicación está configurada con una API key de NewsAPI. Si necesitas usar tu propia API key:

1. Visita [NewsAPI.org](https://newsapi.org/)
2. Regístrate para obtener una API key gratuita (100 solicitudes por día)
3. Crea un archivo `.env` en la raíz del proyecto:
   ```
   VITE_NEWS_API_KEY=tu_api_key_aqui
   ```

Si no creas el archivo `.env`, la aplicación usará la API key por defecto configurada en el código.

### Categorías Disponibles

- **Tecnología** (`technology`)
- **Deportes** (`sports`)
- **Salud** (`health`)
- **Entretenimiento** (`entertainment`)
- **Ciencia** (`science`)
- **Negocios** (`business`)

### Nota sobre CORS

NewsAPI tiene restricciones de CORS cuando se llama directamente desde el navegador. La aplicación está configurada con un proxy en Vite para evitar estos problemas durante el desarrollo. En producción, se recomienda usar un backend propio o configurar CORS adecuadamente.

## 🚀 Pasos para Ejecutar la Aplicación

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd mi-app
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura tu API Key (opcional):
   - La aplicación ya está configurada con una API key de NewsAPI
   - Si deseas usar tu propia API key, crea un archivo `.env` en la raíz:
     ```
     VITE_NEWS_API_KEY=tu_api_key_aqui
     ```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

5. Abre tu navegador en la URL que aparece en la terminal (generalmente `http://localhost:5173`)

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## 📁 Estructura del Proyecto

```
mi-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos del componente
│   ├── index.css        # Estilos globales
│   └── main.jsx         # Punto de entrada
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Características de Diseño

- Diseño moderno y atractivo con gradientes
- Animaciones suaves en las tarjetas de noticias
- Diseño completamente responsive
- Indicadores visuales de carga
- Manejo elegante de errores

## ⚙️ Requisitos Técnicos Cumplidos

- ✅ React.js con componentes funcionales
- ✅ Uso exclusivo de `useState` para manejo de estados
- ✅ Solicitudes a la API con `fetch()` dentro de función activada por evento
- ✅ Bootstrap 5 para estructura y estilos
- ✅ Sin uso de `useEffect` (requisito del proyecto)

## 📸 Capturas de Pantalla

*Nota: Agregar capturas de pantalla o un video corto que muestre la interacción del usuario y los resultados obtenidos.*

## 🐛 Manejo de Errores

La aplicación incluye manejo de errores para:
- Errores de conexión con la API
- Respuestas vacías de la API
- Imágenes no disponibles o con errores de carga
- Errores de red
- Validación de datos recibidos

Cuando ocurre un error, se muestra un mensaje informativo al usuario indicando el problema.

## 📝 Notas Importantes

- La aplicación está configurada con una API key de NewsAPI y funciona directamente
- Para uso en producción, se recomienda usar tu propia API key de NewsAPI (gratuita)
- El código está diseñado para funcionar sin `useEffect` como se requiere en el proyecto
- Las imágenes pueden no aparecer si NewsAPI no las proporciona o si hay problemas de CORS
- El código incluye logs de depuración en la consola para diagnosticar problemas con las imágenes

## 👤 Autor

Desarrollado como proyecto académico para demostrar el manejo de eventos y estados en React.

## 📄 Licencia

Este proyecto es de código abierto y está disponible para fines educativos.

---

**Desarrollado con ❤️ usando React.js y Bootstrap 5**
