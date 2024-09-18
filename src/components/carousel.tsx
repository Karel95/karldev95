// import '../styles/carousel.css'; // Importa los estilos CSS

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
                <h5>Turning ideas into solutions</h5>
                <p>
                  I take your projects from concept to reality with innovation and accuracy.
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
                <h5>Creativity in action</h5>
                <p>
                  Every line of code is an opportunity to create something unique and functional.
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
                <h5>Committed to excellence</h5>
                <p>
                  My goal is to deliver results that exceed expectations, every time.
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
                <h5>Your vision, my mission</h5>
                <p>
                  I develop digital solutions that reflect your essence.
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
                <h5>Passion for detail</h5>
                <p>
                  Every project is a piece crafted with accuracy and professionalism.
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
                <h5>Pushing boundaries</h5>
                <p>
                  Innovation drives my work, always aiming to go beyond.
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