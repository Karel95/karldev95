import './footer.css'; // Importa los estilos CSS


const Footer = () => {
  return (
    <>
      <section id="contacto" className="contacto seccion-oscura">
        <div className="container">
          <div className="container text-center rectangulo d-flex justify-content-evenly">
            <div className="row">
              <div className="col-12 col-md-4 seccion-titulo">
                Lets talk!
              </div>
              <div className="col-12 col-md-4 descripcion">
                I am always open to discussing new opportunities, collaborations, or freelance projects. Contact me to start your development project, and I'll turn your vision into reality.
              </div>
              <div className="col-12 col-md-4">
                <a href="mailto:karelh2207@gmail.com">
                  <button type="button">  
                    Contact
                    <i className="bi bi-envelope-check-fill"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="seccion-oscura d-flex flex-column align-items-center justify-content-center"> 
        <img className="footer-logo rounded-circle" src="imagenes/profile-photo.jpg" alt="Logo del portafolio" />
        <p className="footer-texto text-center">I learn and create every day.<br/>Let's build a project together.<br/>Feel free to reach out to me at...</p>
        <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
          <a href="https://github.com/Karel95" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/karel95/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="mailto:karelh2207@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
        <div className="derechos-de-autor">Created by Karel Hernández (2024) &#169;</div>
      </footer>
    </>
  )
}

export default Footer