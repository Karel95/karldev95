import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

interface HomeProps {
  isDarkMode: boolean;
}

const Footer: React.FC<HomeProps> = ({isDarkMode}) => {
  React.useEffect(() => {
    Aos.init({ duration: 1200, easing: 'ease-out-cubic', once: true });
  }, []);

  const imageSrc = isDarkMode
  ? "images/500x500 Dark-Transparent.png"
  : "images/500x500 Light-Transparent.png";

  return (
    <>
      <section id="contacto" className="contacto seccion-oscura">
        <div className="container" data-aos="fade-up">
          <div className="container text-center rectangulo d-flex justify-content-evenly" style={{ padding: '2.5rem 1.5rem' }}>
            <div className="row">
              <div className="col-12 col-md-4 seccion-titulo">
                Let's talk!
              </div>
              <div className="col-12 col-md-4 descripcion">
                I am always open to discussing new opportunities, collaborations, or freelance projects. Contact me to start your development project, and I'll turn your vision into reality.
              </div>
              <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
                <a href="mailto:karelhernandez2207@gmail.com">
                  <button type="button">  
                    Contact
                    <i className="bi bi-envelope-check-fill ml-1"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="seccion-oscura d-flex flex-column align-items-center justify-content-center"> 
        <img className="footer-logo" src={imageSrc} alt="Logo del portafolio" data-aos="scale-in" />
        <p className="footer-texto text-center">I learn and create every day.<br/>Let's build a project together.<br/>Feel free to reach out to me at...</p>
        <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
          <a href="https://github.com/Karel95" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/karel95/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="mailto:karelhernandez2207@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
        <div className="derechos-de-autor">Created by Karel Hernández (2025) &#169;</div>
      </footer>
    </>
  )
}

export default Footer