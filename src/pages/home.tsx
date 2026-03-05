import { Button } from "@mui/material";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

interface HomeProps {
  isDarkMode: boolean;
}

const Home: React.FC<HomeProps> = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1200, easing: 'ease-out-cubic', once: true });
  }, []);

  return (
    <>
      <section className="hero align-items-stretch">
        <div className="hero-principal m-auto w-full justify-center">
          <div className="flex flex-col sm:flex-row">
            <div
              className="flex w-full sm:w-1/3 h-1/4 sm:h-auto justify-center align-items-center"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="bg-dots">
                <div className="shadow-2xl max-w-xs z-10 rounded-md mt-8">
                  <img
                    src="images/profile.jpg"
                    alt="Karel Hernández"
                    className="rounded-md"
                    style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                  />
                </div>
              </div>
            </div>

            <div
              className="flex flex-col sm:w-1/3 h-3/4 sm:h-auto justify-content-end align-items-start m-3 mr-12"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p style={{
                fontFamily: "var(--font-display)",
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '0.75rem'
              }}>
                Software Developer
              </p>
              <h1 className="white-text text-5xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                Hello, I am Karel Hernández
              </h1>
              <h2 className="white-text">
                I am a passionate developer with a strong foundation in web, app
                and game development, backend systems, and blockchain
                technology.
              </h2>
              <div className="my-3 h-auto flex flex-wrap gap-3 items-center" data-aos="fade-up" data-aos-delay="600">
                <a
                  className="libutton"
                  href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=karel95"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow on LinkedIn
                </a>
                <Button
                  variant="contained"
                  href="mailto:karelhernandez2207@gmail.com"
                  className="btn cta-button"
                  sx={{
                    borderRadius: 0,
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    fontSize: '0.8rem',
                    padding: '0.7em 1.6em',
                  }}
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
          data-aos-delay="300"
        >
          <img
            className="hero-inferior-imagen img-fluid"
            src="images/hero-inferior.svg"
            alt="Monitor, laptop y logos de HTML, CSS, JavaScript y React."
          />
        </div>
      </section>

      {/* About */}
      <section id="sobre-mi" className="sobre-mi">
        <div className="contenedor" data-aos="fade-up" data-aos-delay="100">
          <h2 className="seccion-titulo">About Me</h2>
          <p className="seccion-texto">
            I am a passionate Web Developer with a strong foundation in frontend
            technologies. With many years of experience in creating dynamic,
            responsive, and user-friendly websites, I have developed a keen eye
            for detail and a commitment to delivering high-quality solutions. My
            expertise lies in HTML, CSS, JavaScript, and modern frameworks like
            React and Node.js, allowing me to build seamless, interactive web
            applications.
          </p>
        </div>
      </section>

      {/* Featured Project */}
      <div className="m-auto max-w-6xl p-12">
        <div className="flex flex-col md:flex-row">
          <div
            className="md:w-1/2 max-w-md flex flex-col justify-center"
            data-aos="fade-up-right"
          >
            <p style={{
              fontFamily: "var(--font-display)",
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '0.5rem'
            }}>
              Featured Project
            </p>
            <div style={{ fontFamily: 'var(--font-display)' }} className="md:text-5xl text-2xl uppercase font-black">
              Suriname Offline Education Web
            </div>
            <div className="text-xl mt-10" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              3rd Place in AI Datasur Hackathon — EduWeb: An engaging
              educational platform making learning interactive and accessible.
              Built by Akshay Merhai and Karel Hernandez.
            </div>
            <div className="my-5 h-16">
              <Button
                variant="contained"
                className="btn cta-button"
                component="a"
                href="https://eduweb-suriname.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderRadius: 0,
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  fontSize: '0.8rem',
                  padding: '0.7em 1.6em',
                }}
              >
                View EduWeb →
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
                  <img src="images/eduweb.png" alt="EduWeb" />
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
                  <img alt="AI-thon" className="" src="images/ai-thon.jpg" />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <section id="experiencia" className="experiencia seccion-clara">
        <div className="container text-center">
          <h2 className="seccion-titulo" style={{ textAlign: 'center', marginBottom: '2rem' }} data-aos="fade-up">
            Skills & Expertise
          </h2>
          <div className="row">
            <div className="columna col-12 col-md-4" data-aos="fade-up" data-aos-delay="100">
              <i className="bi bi-code-slash"></i>
              <p className="experiencia-titulo">Frontend</p>
              <h6 style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>
                Creator of digital experiences
              </h6>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                I design and develop websites that not only stand out but
                inspire.
              </p>
              <div className="badges-contenedor">
                <span className="badge">HTML</span>
                <span className="badge">CSS</span>
                <span className="badge">JavaScript</span>
                <span className="badge">React</span>
                <span className="badge">NextJS</span>
                <span className="badge">Tailwind</span>
                <span className="badge">Bootstrap</span>
              </div>
            </div>
            <div className="columna col-12 col-md-4" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-server"></i>
              <p className="experiencia-titulo">Backend</p>
              <h6 style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>
                Innovation within your reach
              </h6>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                I turn your vision into a flawless digital experience.
              </p>
              <div className="badges-contenedor">
                <span className="badge">Node.js</span>
                <span className="badge">Express.js</span>
                <span className="badge">Python</span>
                <span className="badge">Django</span>
              </div>
            </div>
            <div className="columna col-12 col-md-4" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-database"></i>
              <p className="experiencia-titulo">Database</p>
              <h6 style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>
                Projects with purpose
              </h6>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Every piece of code holds meaning: solving problems and
                improving experiences.
              </p>
              <div className="badges-contenedor">
                <span className="badge">MongoDB</span>
                <span className="badge">PostgreSQL</span>
                <span className="badge">MySQL</span>
              </div>
            </div>
            <div className="columna col-12 col-md-4" data-aos="fade-up" data-aos-delay="100">
              <i className="bi bi-git"></i>
              <p className="experiencia-titulo">Version Control</p>
              <h6 style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>
                The art of coding
              </h6>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                I don't just develop apps, I craft elegant and efficient
                solutions.
              </p>
              <div className="badges-contenedor">
                <span className="badge">Git</span>
                <span className="badge">GitHub</span>
              </div>
            </div>
            <div className="columna col-12 col-md-4" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-cloud-arrow-up"></i>
              <p className="experiencia-titulo">DevOps</p>
              <h6 style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>
                Building the future, one project at a time
              </h6>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                I create digital solutions that shape tomorrow's experiences.
              </p>
              <div className="badges-contenedor">
                <span className="badge">Docker</span>
                <span className="badge">Netlify</span>
                <span className="badge">Vercel</span>
              </div>
            </div>
            <div className="columna col-12 col-md-4" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-puzzle"></i>
              <p className="experiencia-titulo">Other</p>
              <h6 style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>
                Innovative by nature, precise by design
              </h6>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                I merge creativity and technical expertise to deliver
                exceptional results.
              </p>
              <div className="badges-contenedor">
                <span className="badge">Responsive Design</span>
                <span className="badge">Browser Compatibility</span>
                <span className="badge">SEO Best Practices</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
