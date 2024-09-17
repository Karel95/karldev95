import './carousel.css'; // Importa los estilos CSS

const Carousel = () => {
  return (
    <>
      <section
        id="carousel col-12"
        className="carousel-section carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div id="carouselExampleCaptions" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./imagenes/proyecto5.png"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5></h5>
                <p>
                  Nuestra pasión por la barbería nos lleva a brindarte lo mejor en cortes y estilo.<br/> 
                  Nos preocupamos por cada detalle para que salgas siempre con tu mejor versión.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./imagenes/proyecto6.png"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5></h5>
                <p>
                  Profesionalismo, calidad y estilo. Trabajamos para resaltar tu mejor imagen.<br/> 
                  ¡Reserva tu cita hoy mismo y déjanos cuidar de tu estilo!
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./imagenes/proyecto7.png"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5></h5>
                <p>
                  Cortar el cabello no es solo una rutina, es un arte.<br/> 
                  ¡Reserva tu experiencia personalizada con nosotros!
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./imagenes/proyecto8.png"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5></h5>
                <p>
                  Relájate, disfruta, y déjanos encargarnos de que luzcas increíble.<br/> 
                  ¡Una experiencia de barbería como ninguna otra!
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./imagenes/proyecto9.png"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5></h5>
                <p>
                  Relájate, disfruta, y déjanos encargarnos de que luzcas increíble.<br/> 
                  ¡Una experiencia de barbería como ninguna otra!
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./imagenes/proyecto10.png"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5></h5>
                <p>
                  Porque mereces más que un simple corte, ven y vive una experiencia premium.<br/> 
                  ¡Reserva tu cita hoy mismo y déjanos cuidar de tu estilo!
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  )
}

export default Carousel