import { Button } from "@mui/material";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS
// import '../styles/home.css'; // Importa los estilos CSS

interface HomeProps {
  isDarkMode: boolean; // Define el tipo aquí
}

const Home: React.FC<HomeProps> = () => {
  // Inicializa AOS
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // const imageSrc = isDarkMode
  //   ? "imagenes/500x500 Dark-Transparent.png"
  //   : "imagenes/500x500 Light-Transparent.png";
  return (
    <>
      <section className="hero align-items-stretch">
        <div className="hero-principal m-auto w-full justify-center">
          <div className="flex flex-col sm:flex-row">
            <div
              className="flex w-full sm:w-1/3 h-1/4 sm:h-auto justify-center align-items-center"
              data-aos="fade-right"
            >
              <div className="bg-dots">
                <div className="shadow-2xl max-w-xs z-10 rounded-md mt-8">
                  <img
                    src="imagenes/profile.jpg"
                    alt="Karel Hernández"
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>

            <div
              className="flex flex-col sm:w-1/3 h-3/4 sm:h-auto justify-content-end align-items-start m-3 mr-12"
              data-aos="fade-up"
            >
              <h1 className="white-text text-5xl font-bold">
                Hello, I am Karel Hernández
              </h1>
              <h2 className="white-text">
                I am a passionate developer with a strong foundation in web, app
                and game development, backend systems, and blockchain
                technology.
              </h2>
              <div className="my-3 h-8 flex flex-row">
                <a
                  className="libutton"
                  href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=karel95"
                  target="_blank"
                >
                  Follow me on LinkedIn
                </a>
                <Button
                  variant="contained"
                  href="mailto:karelhernandez2207@gmail.com"
                  className="btn cta-button"
                >
                  Contact me
                </Button>
                <a
                  className="gibutton"
                  href="https://github.com/Karel95"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="hero-inferior flex items-center justify-center h-screen"
          data-aos="fade-up"
        >
          <img
            className="hero-inferior-imagen img-fluid"
            src="imagenes/hero-inferior.svg"
            alt="Monitor, laptop y logos de HTML, CSS, JavaScript y React."
          />
        </div>
      </section>

      {/* Sobre mi */}
      <section id="sobre-mi" className="sobre-mi">
        <div className="contenedor" data-aos="fade-up">
          <h2 className="seccion-titulo">About Me</h2>
          <p className="seccion-texto">
            I am a passionate Web Developer with a strong foundation in frontend
            technologies. With over 2 years of experience in creating dynamic,
            responsive, and user-friendly websites, I have developed a keen eye
            for detail and a commitment to delivering high-quality solutions. My
            expertise lies in HTML, CSS, JavaScript, and modern frameworks like
            React and Node.js, allowing me to build seamless, interactive web
            applications.
          </p>
        </div>
      </section>

      {/* ai-thon */}
      <div className="m-auto max-w-6xl p-12">
        <div className="flex flex-col md:flex-row">
          <div
            className="md:w-1/2 max-w-md flex flex-col justify-center"
            data-aos="fade-up-right"
          >
            <div className="md:text-5xl text-2xl uppercase font-black">
              Suriname Offline Education Web
            </div>
            <div className="text-xl mt-10">
              3rd Place in AI Datasur Hackathon - EduWeb: An engaging
              educational platform making learning interactive and accessible.
              Build by Akshay Merhai and Karel Hernandez.
            </div>
            <div className="my-5 h-16">
              <Button
                variant="contained"
                className="btn cta-button"
                component="a"
                href="https://eduweb-suriname.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                EduWeb
              </Button>
            </div>
          </div>
          <div
            className="flex md:justify-end w-full md:w-1/2 -mt-5"
            data-aos="fade-up-left"
          >
            <div className="bg-dots">
              <div className="shadow-2xl max-w-md z-10 rounded-md mt-6 ml-4">
                <div className="proyecto">
                  <img src="imagenes/proyecto5.png" alt="EduWeb" />
                  <div className="overlay">
                    <p>EduWeb</p>
                    <div className="iconos-contenedor">
                      <a
                        href="https://github.com/Karel95/offline-education-web"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-github"></i>
                      </a>
                      <a
                        href="https://eduweb-suriname.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-laptop"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-2xl bg-white">
                  <img alt="AI-thon" className="" src="imagenes/ai-thon.jpg" />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experiencia */}
      <section id="experiencia" className="experiencia seccion-clara">
        <div className="container text-center">
          <div className="row">
            <div className="columna col-12 col-md-4" data-aos="flip-left">
              <i className="bi bi-laptop"></i>
              <p className="experiencia-titulo">Frontend</p>
              <h6>Creator of digital experiences</h6>
              <p>
                I design and develop websites that not only stand out but
                inspire.
              </p>
              <div className="badges-contenedor">
                <span className="badge text-bg-primary">HTML</span>
                <span className="badge text-bg-primary">CSS</span>
                <span className="badge text-bg-primary">JavaScript</span>
                <span className="badge text-bg-primary">React</span>
                <span className="badge text-bg-primary">NextJS</span>
                <span className="badge text-bg-primary">Tailwind</span>
                <span className="badge text-bg-primary">Bootstrap</span>
              </div>
            </div>
            <div className="columna col-12 col-md-4" data-aos="flip-up">
              <i className="bi bi-laptop"></i>
              <p className="experiencia-titulo">Backend</p>
              <h6>Innovation within your reach</h6>
              <p>I turn your vision into a flawless digital experience.</p>
              <div className="badges-contenedor">
                <span className="badge text-bg-primary">Node.js</span>
                <span className="badge text-bg-primary">Express.js</span>
                <span className="badge text-bg-primary">Python</span>
                <span className="badge text-bg-primary">Django</span>
              </div>
            </div>
            <div className="columna col-12 col-md-4" data-aos="flip-right">
              <i className="bi bi-laptop"></i>
              <p className="experiencia-titulo">Database</p>
              <h6>Projects with purpose</h6>
              <p>
                Every piece of code holds meaning: solving problems and
                improving experiences.
              </p>
              <div className="badges-contenedor">
                <span className="badge text-bg-primary">MongoDB</span>
                <span className="badge text-bg-primary">PostgreSQL</span>
                <span className="badge text-bg-primary">MySQL</span>
              </div>
            </div>
            <div className="columna col-12 col-md-4" data-aos="flip-left">
              <i className="bi bi-laptop"></i>
              <p className="experiencia-titulo">Version Control</p>
              <h6>The art of coding</h6>
              <p>
                I don't just develop apps, I craft elegant and efficient
                solutions.
              </p>
              <div className="badges-contenedor">
                <span className="badge text-bg-primary">Git</span>
                <span className="badge text-bg-primary">GitHub</span>
              </div>
            </div>
            <div className="columna col-12 col-md-4" data-aos="flip-up">
              <i className="bi bi-laptop"></i>
              <p className="experiencia-titulo">DevOps</p>
              <h6>Building the future, one project at a time</h6>
              <p>
                I create digital solutions that shape tomorrow's experiences.
              </p>
              <div className="badges-contenedor">
                <span className="badge text-bg-primary">Docker</span>
                <span className="badge text-bg-primary">Netlify</span>
                <span className="badge text-bg-primary">Vercel</span>
              </div>
            </div>
            <div className="columna col-12 col-md-4" data-aos="flip-right">
              <i className="bi bi-laptop"></i>
              <p className="experiencia-titulo">Other</p>
              <h6>Innovative by nature, precise by design</h6>
              <p>
                I merge creativity and technical expertise to deliver
                exceptional results.
              </p>
              <div className="badges-contenedor">
                <span className="badge text-bg-primary">Responsive Design</span>
                <span className="badge text-bg-primary">
                  Browser Compatibility
                </span>
                <span className="badge text-bg-primary">
                  SEO Best Practices
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
