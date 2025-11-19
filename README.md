# 📰 Buscador de Noticias Internacionales  
Aplicación web desarrollada en React.js que permite consultar noticias recientes según la categoría seleccionada usando NewsAPI/GNews.

---

## 📸 Vista Principal de la Aplicación
*(Sube tu captura al repositorio y renómbrala: `screenshot-main.png`.)*

![Captura Principal](./screenshot-main.png)

---

## 📋 Descripción del Proyecto  
Este proyecto permite seleccionar una categoría de noticias y obtener resultados actualizados mediante una petición manual a una API pública.  
El objetivo es demostrar el uso de **React + useState**, manejo de eventos y renderizado dinámico **sin usar useEffect**, como lo exige el proyecto académico.

---

## 🎯 Objetivo Académico  
- Manejo de estados con `useState`.  
- Solicitudes a API por evento (click en botón).  
- No se utiliza `useEffect`.  
- Uso de Bootstrap 5 para estructura y diseño.  
- Manejo de errores y estados de carga.  
- Renderizado condicional de mensajes e interfaz.  
- Manejo de imágenes con fallback cuando fallan.

---

## ✨ Características  
- Menú desplegable con categorías: Tecnología, Deportes, Salud, Entretenimiento, Ciencia, Negocios.  
- Búsqueda manual al hacer clic en **“Buscar Noticias”**.  
- Tarjetas de noticias con:
  - Imagen
  - Título
  - Fuente
  - Descripción
  - Enlace al artículo original  
- Indicador visual de carga mientras se consulta la API.  
- Mensajes cuando no hay resultados o ocurre un error.  
- Diseño moderno, limpio y responsivo gracias a Bootstrap 5 y estilos personalizados.

---

## 🛠️ Tecnologías Utilizadas  
- **React.js**  
- **Vite**  
- **Bootstrap 5**  
- **JavaScript (ES6+)**  
- **NewsAPI / GNews**  
- **CSS personalizado**

---

## 📡 API Utilizada  

La aplicación usa **NewsAPI** (https://newsapi.org).  

Si deseas usar tu propia API key:

1. Crear un archivo `.env` en la raíz del proyecto.  
2. Añadir la variable:

```env
VITE_NEWS_API_KEY=TU_API_KEY_AQUI

Si no se crea .env, la aplicación usa una API key por defecto incluida en el código para pruebas.

🚀 Cómo Ejecutar el Proyecto
🔧 Requisitos

Node.js 16 o superior

npm (gestor de paquetes)
git clone https://github.com/luisgperezv/buscador-noticias-react.git
cd buscador-noticias-react
npm install
npm run dev

El proyecto se ejecutará normalmente en:
👉 http://localhost:5173

📁 Estructura del Proyecto
buscador-noticias-react/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md

🐛 Manejo de Errores Implementado

La aplicación contempla:

Errores de conexión con la API.

Respuestas sin artículos (0 noticias).

Imágenes que no cargan o vienen nulas.

Datos incompletos o faltantes en la respuesta.

Mensajes informativos al usuario cuando algo falla.

👥 Autores

Proyecto desarrollado por:

Luis Pérez
Carlos Peña
Fabián Bedoya
Hugo Lugo

Proyecto académico del curso Programación 5 - React.

📄 Licencia

Proyecto creado para fines educativos.
