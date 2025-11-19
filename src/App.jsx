import { useState } from "react";
import "./App.css";

function App() {
  // Estados para manejar la aplicación
  const [categoria, setCategoria] = useState("technology");
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  const [mensajeVacio, setMensajeVacio] = useState(false);

  // Categorías disponibles
  const categorias = [
    { value: "technology", label: "Tecnología" },
    { value: "sports", label: "Deportes" },
    { value: "health", label: "Salud" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "science", label: "Ciencia" },
    { value: "business", label: "Negocios" },
  ];

  // Función para obtener noticias de ejemplo según la categoría
  const obtenerNoticiasEjemplo = (cat) => {
    const noticiasPorCategoria = {
      technology: [
        {
          title: "Avances Revolucionarios en Inteligencia Artificial",
          source: { name: "TechNews Internacional" },
          urlToImage:
            "https://via.placeholder.com/400x250/667eea/ffffff?text=Tecnología",
          url: "https://example.com/noticia-tech-1",
          description:
            "Los últimos avances en IA están transformando la industria tecnológica con modelos más eficientes y precisos.",
        },
        {
          title: "Nueva Generación de Procesadores Cuánticos",
          source: { name: "Quantum Computing Today" },
          urlToImage:
            "https://via.placeholder.com/400x250/764ba2/ffffff?text=Computación",
          url: "https://example.com/noticia-tech-2",
          description:
            "Empresas líderes anuncian procesadores cuánticos con capacidades sin precedentes.",
        },
        {
          title: "El Futuro de la Realidad Virtual",
          source: { name: "VR World" },
          urlToImage:
            "https://via.placeholder.com/400x250/667eea/ffffff?text=Realidad+Virtual",
          url: "https://example.com/noticia-tech-3",
          description:
            "La realidad virtual se integra cada vez más en nuestra vida cotidiana con aplicaciones innovadoras.",
        },
      ],
      sports: [
        {
          title: "Campeonato Mundial de Fútbol 2024",
          source: { name: "Sports Daily" },
          urlToImage:
            "https://via.placeholder.com/400x250/28a745/ffffff?text=Deportes",
          url: "https://example.com/noticia-sports-1",
          description:
            "El campeonato mundial de fútbol promete ser uno de los más emocionantes de la historia.",
        },
        {
          title: "Nuevo Récord Olímpico en Atletismo",
          source: { name: "Olympic News" },
          urlToImage:
            "https://via.placeholder.com/400x250/28a745/ffffff?text=Atletismo",
          url: "https://example.com/noticia-sports-2",
          description:
            "Un atleta establece un nuevo récord mundial en los 100 metros planos.",
        },
        {
          title: "Torneo de Tenis Internacional",
          source: { name: "Tennis Pro" },
          urlToImage:
            "https://via.placeholder.com/400x250/28a745/ffffff?text=Tenis",
          url: "https://example.com/noticia-sports-3",
          description:
            "Los mejores tenistas del mundo se reúnen para el torneo más importante del año.",
        },
      ],
      health: [
        {
          title: "Descubrimiento Médico Importante",
          source: { name: "Health Today" },
          urlToImage:
            "https://via.placeholder.com/400x250/dc3545/ffffff?text=Salud",
          url: "https://example.com/noticia-health-1",
          description:
            "Investigadores descubren un nuevo tratamiento prometedor para enfermedades crónicas.",
        },
        {
          title: "Avances en Medicina Preventiva",
          source: { name: "Medical Journal" },
          urlToImage:
            "https://via.placeholder.com/400x250/dc3545/ffffff?text=Medicina",
          url: "https://example.com/noticia-health-2",
          description:
            "Nuevas técnicas de medicina preventiva mejoran la calidad de vida de millones de personas.",
        },
        {
          title: "Bienestar Mental y Tecnología",
          source: { name: "Wellness Weekly" },
          urlToImage:
            "https://via.placeholder.com/400x250/dc3545/ffffff?text=Bienestar",
          url: "https://example.com/noticia-health-3",
          description:
            "Aplicaciones tecnológicas ayudan a mejorar la salud mental de forma accesible.",
        },
      ],
      entertainment: [
        {
          title: "Estreno de la Película del Año",
          source: { name: "Entertainment Weekly" },
          urlToImage:
            "https://via.placeholder.com/400x250/ffc107/000000?text=Cine",
          url: "https://example.com/noticia-ent-1",
          description:
            "La película más esperada del año finalmente llega a los cines con gran éxito de taquilla.",
        },
        {
          title: "Festival de Música Internacional",
          source: { name: "Music World" },
          urlToImage:
            "https://via.placeholder.com/400x250/ffc107/000000?text=Música",
          url: "https://example.com/noticia-ent-2",
          description:
            "Los mejores artistas del mundo se reúnen en el festival de música más grande del año.",
        },
        {
          title: "Nueva Serie de Streaming",
          source: { name: "Streaming News" },
          urlToImage:
            "https://via.placeholder.com/400x250/ffc107/000000?text=Series",
          url: "https://example.com/noticia-ent-3",
          description:
            "Una nueva serie de streaming rompe récords de audiencia en su primera semana.",
        },
      ],
      science: [
        {
          title: "Descubrimiento Científico Revolucionario",
          source: { name: "Science Daily" },
          urlToImage:
            "https://via.placeholder.com/400x250/17a2b8/ffffff?text=Ciencia",
          url: "https://example.com/noticia-science-1",
          description:
            "Científicos hacen un descubrimiento que podría cambiar nuestra comprensión del universo.",
        },
        {
          title: "Exploración Espacial: Nuevos Hallazgos",
          source: { name: "Space News" },
          urlToImage:
            "https://via.placeholder.com/400x250/17a2b8/ffffff?text=Espacio",
          url: "https://example.com/noticia-science-2",
          description:
            "Misiones espaciales revelan información fascinante sobre otros planetas del sistema solar.",
        },
        {
          title: "Investigación en Energía Renovable",
          source: { name: "Energy Research" },
          urlToImage:
            "https://via.placeholder.com/400x250/17a2b8/ffffff?text=Energía",
          url: "https://example.com/noticia-science-3",
          description:
            "Nuevos avances en energía renovable prometen un futuro más sostenible.",
        },
      ],
      business: [
        {
          title: "Tendencias en el Mercado Global",
          source: { name: "Business Today" },
          urlToImage:
            "https://via.placeholder.com/400x250/6c757d/ffffff?text=Negocios",
          url: "https://example.com/noticia-business-1",
          description:
            "Analistas revelan las tendencias que definirán el mercado global en los próximos meses.",
        },
        {
          title: "Innovación en Startups Tecnológicas",
          source: { name: "Startup News" },
          urlToImage:
            "https://via.placeholder.com/400x250/6c757d/ffffff?text=Startups",
          url: "https://example.com/noticia-business-2",
          description:
            "Las startups tecnológicas continúan innovando y transformando industrias tradicionales.",
        },
        {
          title: "Economía Sostenible y Responsable",
          source: { name: "Sustainable Business" },
          urlToImage:
            "https://via.placeholder.com/400x250/6c757d/ffffff?text=Sostenibilidad",
          url: "https://example.com/noticia-business-3",
          description:
            "Empresas adoptan modelos de negocio más sostenibles y socialmente responsables.",
        },
      ],
    };
    return noticiasPorCategoria[cat] || noticiasPorCategoria.technology;
  };

  // Función para buscar noticias (activada por el botón, sin useEffect)
  // Esta función se ejecuta cuando el usuario hace clic en el botón "Buscar Noticias"
  const buscarNoticias = async () => {
    // Limpiar el estado de error anterior si existe
    setError(null);
    // Limpiar el mensaje de "no hay noticias" si existe
    setMensajeVacio(false);
    // Limpiar el array de noticias anterior
    setNoticias([]);
    // Activar el indicador de carga para mostrar que se está buscando
    setCargando(true);

    // Bloque try-catch para manejar errores de la petición a la API
    try {
      // Obtener la API key de NewsAPI desde las variables de entorno
      // Si no existe en .env, usar la API key por defecto proporcionada
      const apiKey =
        import.meta.env.VITE_NEWS_API_KEY || "6b92d96744c241d4b1e762156cdd1820";

      // Mapeo de las categorías de la aplicación a términos de búsqueda de NewsAPI
      // Cada categoría tiene un término específico que NewsAPI entiende
      const categoriaMap = {
        technology: "technology", // Tecnología
        sports: "sports", // Deportes
        health: "health", // Salud
        entertainment: "entertainment", // Entretenimiento
        science: "science", // Ciencia
        business: "business", // Negocios
      };

      // Obtener el término de búsqueda correspondiente a la categoría seleccionada
      // Si la categoría no está en el mapa, usar la categoría directamente
      const searchTerm = categoriaMap[categoria] || categoria;

      // NewsAPI requiere una fecha "from" en el formato YYYY-MM-DD
      // Calculamos la fecha de hace 7 días para obtener noticias recientes
      const fecha = new Date(); // Crear objeto Date con la fecha actual
      fecha.setDate(fecha.getDate() - 7); // Restar 7 días a la fecha actual
      const fechaFormateada = fecha.toISOString().split("T")[0]; // Convertir a formato YYYY-MM-DD

      // Construir la URL completa para la petición a NewsAPI
      // Usamos el proxy de Vite (/api/newsapi) para evitar problemas de CORS
      // Parámetros de la URL:
      // - q: término de búsqueda (categoría)
      // - from: fecha desde la cual buscar noticias
      // - sortBy: ordenar por fecha de publicación
      // - language: idioma de las noticias (es = español)
      // - pageSize: número máximo de noticias a devolver
      // - apiKey: clave de API para autenticación
      const newsApiUrl = `/api/newsapi/v2/everything?q=${searchTerm}&from=${fechaFormateada}&sortBy=publishedAt&language=es&pageSize=10&apiKey=${apiKey}`;

      // Realizar la petición HTTP a NewsAPI usando fetch
      // fetch es una función nativa de JavaScript para hacer peticiones HTTP
      // await espera a que la petición se complete antes de continuar
      const response = await fetch(newsApiUrl);

      // Verificar si la respuesta HTTP fue exitosa (código 200-299)
      // Si no es exitosa, lanzar un error
      if (!response.ok) {
        // Intentar obtener el mensaje de error del cuerpo de la respuesta
        // Si no se puede parsear el JSON, usar un objeto vacío
        const errorData = await response.json().catch(() => ({}));
        // Lanzar un error con el mensaje de la API o un mensaje genérico
        throw new Error(errorData.message || `Error HTTP: ${response.status}`);
      }

      // Si la respuesta fue exitosa, convertir el cuerpo de la respuesta a JSON
      // await espera a que se complete la conversión
      const data = await response.json();

      if (data.status === "ok" && data.articles && data.articles.length > 0) {
        // Formatear las noticias para que coincidan con la estructura esperada
        const noticiasFormateadas = data.articles.map((article) => {
          // Validar y limpiar la URL de la imagen
          // NewsAPI puede devolver null, undefined, o cadenas vacías para urlToImage
          let imagenUrl = article.urlToImage;

          // Si la URL de imagen es null, undefined, o cadena vacía, establecerla como null
          if (!imagenUrl || imagenUrl.trim() === "" || imagenUrl === "null") {
            imagenUrl = null;
          }

          return {
            title: article.title,
            description: article.description,
            url: article.url,
            urlToImage: imagenUrl, // Usar la URL validada
            source: { name: article.source?.name || "Fuente desconocida" },
            author: article.author,
            publishedAt: article.publishedAt,
          };
        });

        setNoticias(noticiasFormateadas);
        setMensajeVacio(false);
        setError(null);
      } else if (data.status === "error") {
        throw new Error(data.message || "Error en la API de noticias");
      } else {
        setMensajeVacio(true);
        setNoticias([]);
      }
    } catch (err) {
      setError(
        `Error al conectar con NewsAPI: ${err.message}. Verifica tu conexión a internet.`
      );
      setMensajeVacio(true);
      setNoticias([]);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <header className="text-center mb-5">
            <div className="mb-3">
              <span className="display-1 text-light">📰</span>
            </div>
            <h1 className="fw-bold text-light">
              Buscador de Noticias Internacionales
            </h1>
            <p className="lead text-light-50">
              Descubre noticias recientes de diferentes categorías
            </p>
          </header>

          {/* Sección de búsqueda */}
          <div className="card shadow-lg mb-5 border-0 rounded-4">
            <div className="card-body p-4">
              <div className="row g-4 align-items-center">
                {/* Selección de Categoría */}
                <div className="col-md-6 d-grid">
                  <select
                    id="categoriaSelect"
                    className="form-select form-select-lg rounded-3 text-center"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    aria-label="Selecciona una categoría"
                  >
                    {categorias.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Botón de Buscar */}
                <div className="col-md-6 d-grid">
                  <button
                    className="btn btn-primary btn-lg rounded-3 py-3 fw-bold"
                    onClick={buscarNoticias}
                    disabled={cargando}
                  >
                    {cargando ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Buscando...
                      </>
                    ) : (
                      "🔍 Buscar Noticias"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mensaje de error */}
          {error && (
            <div
              className="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <strong>⚠️ Aviso:</strong> {error}
              <button
                type="button"
                className="btn-close"
                onClick={() => setError(null)}
                aria-label="Cerrar"
              ></button>
            </div>
          )}

          {/* Mensaje cuando no hay noticias */}
          {mensajeVacio && !cargando && (
            <div className="alert alert-info text-center" role="alert">
              <h5 className="alert-heading">📭 No se encontraron noticias</h5>
              <p className="mb-0">
                No hay noticias disponibles para la categoría seleccionada en
                este momento. Intenta con otra categoría.
              </p>
            </div>
          )}

          {/* Indicador de carga */}
          {cargando && (
            <div className="text-center my-5">
              <div
                className="spinner-border text-primary"
                role="status"
                style={{ width: "3rem", height: "3rem" }}
              >
                <span className="visually-hidden">Cargando...</span>
              </div>
              <p className="mt-3 text-muted">Cargando noticias...</p>
            </div>
          )}

          {/* Grid de noticias */}
          {!cargando && noticias.length > 0 && (
            <div className="row g-4">
              {/* Mapear cada noticia para crear una tarjeta */}
              {noticias.map((noticia, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div
                    className="card h-100 shadow-lg border-0 rounded-4"
                    style={{
                      overflow: "hidden",
                      background: "white",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    }}
                  >
                    {/* Contenedor para la imagen con altura fija */}
                    <div
                      style={{
                        position: "relative",
                        height: "200px",
                        overflow: "hidden",
                      }}
                    >
                      {/* Verificar si la noticia tiene una URL de imagen válida */}
                      {noticia.urlToImage &&
                      noticia.urlToImage !== null &&
                      noticia.urlToImage.trim() !== "" ? (
                        <img
                          src={noticia.urlToImage}
                          className="card-img-top"
                          alt={noticia.title || "Imagen de noticia"}
                          style={{
                            height: "200px",
                            width: "100%",
                            objectFit: "cover",
                            display: "block",
                            position: "relative",
                            zIndex: 2,
                          }}
                          onError={(e) => {
                            // Este evento se dispara si la imagen falla al cargar
                            // Puede ser por problemas de CORS, URL inválida, o servidor inaccesible
                            // Ocultar la imagen que falló
                            e.target.style.display = "none";

                            // Buscar el elemento placeholder que está después de la imagen en el DOM
                            const placeholder = e.target.nextElementSibling;

                            // Si existe el placeholder, mostrarlo
                            if (placeholder) {
                              placeholder.style.display = "flex";
                              placeholder.style.zIndex = 1;
                            }
                          }}
                          onLoad={(e) => {
                            // Este evento se dispara cuando la imagen se carga correctamente
                            // Asegurarse de que la imagen sea visible
                            e.target.style.display = "block";

                            // Buscar el placeholder que está después de la imagen en el DOM
                            const placeholder = e.target.nextElementSibling;

                            // Si existe el placeholder, ocultarlo ya que la imagen se cargó correctamente
                            if (placeholder) {
                              placeholder.style.display = "none";
                            }
                          }}
                        />
                      ) : // Si no hay URL de imagen, no renderizar el elemento img
                      null}
                      {/* Placeholder que se muestra cuando no hay imagen o cuando falla la carga */}
                      <div
                        className="d-flex align-items-center justify-content-center bg-light"
                        style={{
                          height: "200px",
                          width: "100%",
                          // Si hay URL de imagen, posicionar el placeholder de forma absoluta (detrás de la imagen)
                          // Si no hay URL, usar posición relativa (visible)
                          position:
                            noticia.urlToImage &&
                            noticia.urlToImage !== null &&
                            noticia.urlToImage.trim() !== ""
                              ? "absolute"
                              : "relative",
                          top:
                            noticia.urlToImage &&
                            noticia.urlToImage !== null &&
                            noticia.urlToImage.trim() !== ""
                              ? "0"
                              : "auto",
                          left:
                            noticia.urlToImage &&
                            noticia.urlToImage !== null &&
                            noticia.urlToImage.trim() !== ""
                              ? "0"
                              : "auto",
                          // Si hay URL de imagen, ocultar el placeholder inicialmente (se mostrará si la imagen falla)
                          // Si no hay URL, mostrar el placeholder directamente
                          display:
                            noticia.urlToImage &&
                            noticia.urlToImage !== null &&
                            noticia.urlToImage.trim() !== ""
                              ? "none"
                              : "flex",
                          zIndex: 1,
                        }}
                      >
                        {/* Contenedor del icono y texto del placeholder */}
                        <div className="text-center text-muted">
                          {/* Icono SVG de imagen (de Bootstrap Icons) */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            fill="currentColor"
                            className="bi bi-image"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                          </svg>
                          {/* Texto que indica que no hay imagen */}
                          <p className="mt-2 mb-0 small">Sin imagen</p>
                        </div>
                      </div>
                    </div>
                    <div className="card-body d-flex flex-column p-4">

                      <h5 className="card-title fw-bold">
                        {noticia.title || "Sin título"}
                      </h5>
                      <p className="text-muted small mb-2">
                        <strong>Fuente:</strong>{" "}
                        {noticia.source?.name ||
                          noticia.author ||
                          "Desconocida"}
                      </p>
                      {noticia.description && (
                        <p className="card-text flex-grow-1">
                          {noticia.description}
                        </p>
                      )}
                      {noticia.url && (
                        <a
                          href={noticia.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-primary mt-auto"
                        >
                          Leer artículo completo →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-5 py-4 text-muted">
        <p className="mb-0">
          <small>
            Aplicación desarrollada con React.js | API: GNews / NewsAPI
          </small>
        </p>
      </footer>
    </div>
  );
}

export default App;
