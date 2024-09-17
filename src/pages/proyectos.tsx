import Carousel from '../components/carousel';
import '../styles/proyectos.css'; // Importa los estilos CSS


const Proyectos = () => {
  return (
    <>
      <Carousel />
      <section id="proyectos" className="proyectos-recientes seccion-clara d-flex flex-column">
        <h2 className="seccion-titulo">My Recent Proyects</h2>
        <h3 className="seccion-descripcion">These are some proyects that I recently created...</h3>
        {/* Galeria de Proyectos */}
        <div className="container text-center proyectos-contenedor">
          <div className="row">
            {/* Proyecto 1 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="proyecto">
                <img src="imagenes/proyecto1.jpg" alt="Game Gallery" />
                <div className="overlay">
                  <p>Game Gallery</p>
                  <div className="iconos-contenedor">
                    <a href="https://github.com/Karel95/gamegallery/" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="https://gamegallery.wuaze.com/" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-laptop"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Proyecto 2 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="proyecto">
                <img src="imagenes/proyecto2.jpg" alt="Company Page" />
                <div className="overlay">
                  <p>Company Page</p>
                  <div className="iconos-contenedor">
                    <a href="https://github.com/Karel95/company-page/" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="https://companypagetest.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-laptop"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Proyecto 3 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="proyecto">
                <img src="imagenes/proyecto3.jpg" alt="Smart Property Solutions" />
                <div className="overlay">
                  <p>Smart Property Solutions</p>
                  <div className="iconos-contenedor">
                    <a href="https://github.com/Karel95/smart-property-solutions" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="https://smart-property-solutions.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-laptop"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Proyecto 4 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="proyecto">
                <img src="imagenes/proyecto4.png" alt="Yoel Barbershop" />
                <div className="overlay">
                  <p>Yoel Barbershop</p>
                  <div className="iconos-contenedor">
                    <a href="https://github.com/Karel95/yoel-barbershop" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="https://yoel-barbershop.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-laptop"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Proyecto 5 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="proyecto">
                <img src="imagenes/proyecto5.png" alt="Proyecto 1" />
                <div className="overlay">
                  <p>Proyecto 5</p>
                  <div className="iconos-contenedor">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="https://karel95.github.io/" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-laptop"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Proyecto 6 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="proyecto">
                <img src="imagenes/proyecto6.png" alt="Proyecto 1" />
                <div className="overlay">
                  <p>Proyecto 6</p>
                  <div className="iconos-contenedor">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="https://karel95.github.io/" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-laptop"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="https://github.com/Karel95?tab=repositories" target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn btn-info">
            More Proyects...
            <i className="bi bi-arrow-right-circle-fill"></i>
          </button>
        </a>
      </section>
    </>
  )
}

export default Proyectos