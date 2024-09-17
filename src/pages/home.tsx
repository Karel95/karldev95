import { Button } from '@mui/material';
// import '../styles/home.css'; // Importa los estilos CSS


const Home = () => {
  return (
    <>
      <section className="hero align-items-stretch">
        <div className="hero-principal d-flex flex-column justify-content-center align-items-center">
          <img className="hero-imagen-desarrollador rounded-circle" src="imagenes/profile-photo.jpg" alt="Foto de Karel Hernández" />
          <h1>Hello, I am Karel Hernández</h1>
          <h2>Web Developer | Frontend Specialist.</h2>
          <Button variant='contained' href="mailto:karelh2207@gmail.com" className="btn cta-button">Contact me</Button>
        </div>
        <div className="hero-inferior">
          <img className="hero-inferior-imagen img-fluid" src="imagenes/hero-inferior.svg" alt="Monitor, laptop y logos de HTML, CSS, JavaScript y React." />
        </div>
      </section>

      {/* Sobre mi */}
      <section id="sobre-mi" className="sobre-mi">
        <div className="contenedor">
          <h2 className="seccion-titulo">About Me</h2>
          <p className="seccion-texto">I am a passionate Web Developer with a strong foundation in frontend technologies. With over 2 years of experience in creating dynamic, responsive, and user-friendly websites, I have developed a keen eye for detail and a commitment to delivering high-quality solutions. My expertise lies in HTML, CSS, JavaScript, and modern frameworks like React and Node.js, allowing me to build seamless, interactive web applications.</p>
        </div>
      </section>

      {/* Experiencia */}
      <section id="experiencia" className="experiencia seccion-clara">
        <div className="container text-center">
          <div className="row">
            <div className="columna col-12 col-md-4">
              <i className="bi bi-laptop"></i>
              <p className="experiencia-titulo">Frontend</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet, odio eget fringilla scelerisque, sem purus fringilla mauris, nec ultricies nisl nisl sit amet dolor. </p>
              <div className="badges-contenedor">
                <span className="badge text-bg-primary">HTML</span>
                <span className="badge text-bg-primary">CSS</span>
                <span className="badge text-bg-primary">JavaScript</span>
                <span className="badge text-bg-primary">React</span>
                <span className="badge text-bg-primary">Bootstrap</span>
              </div>
            </div>
            <div className="columna col-12 col-md-4">
              <i className="bi bi-laptop"></i>
              <p className="experiencia-titulo">Backend</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet, odio eget fringilla scelerisque, sem purus fringilla mauris, nec ultricies nisl nisl sit amet dolor. </p>
              <div className="badges-contenedor">
                <span className="badge text-bg-primary">Node.js</span>
                <span className="badge text-bg-primary">Express.js</span>
                <span className="badge text-bg-primary">RESTful APIs</span>
              </div>
            </div>
            <div className="columna col-12 col-md-4">
              <i className="bi bi-laptop"></i>
              <p className="experiencia-titulo">Database</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet, odio eget fringilla scelerisque, sem purus fringilla mauris, nec ultricies nisl nisl sit amet dolor. </p>
              <div className="badges-contenedor">
                <span className="badge text-bg-primary">MongoDB</span>
                <span className="badge text-bg-primary">PostgreSQL</span>
                <span className="badge text-bg-primary">MySQL</span>
              </div>
            </div>
            <div className="columna col-12 col-md-4">
              <i className="bi bi-laptop"></i>
              <p className="experiencia-titulo">Version Control</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet, odio eget fringilla scelerisque, sem purus fringilla mauris, nec ultricies nisl nisl sit amet dolor. </p>
              <div className="badges-contenedor">
                <span className="badge text-bg-primary">Git</span>
                <span className="badge text-bg-primary">GitHub</span>
              </div>
            </div>
            <div className="columna col-12 col-md-4">
              <i className="bi bi-laptop"></i>
              <p className="experiencia-titulo">DevOps</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet, odio eget fringilla scelerisque, sem purus fringilla mauris, nec ultricies nisl nisl sit amet dolor. </p>
              <div className="badges-contenedor">
                <span className="badge text-bg-primary">Docker</span>
                <span className="badge text-bg-primary">Netlify</span>
                <span className="badge text-bg-primary">Vercel</span>
              </div>
            </div>
            <div className="columna col-12 col-md-4">
              <i className="bi bi-laptop"></i>
              <p className="experiencia-titulo">Other</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet, odio eget fringilla scelerisque, sem purus fringilla mauris, nec ultricies nisl nisl sit amet dolor. </p>
              <div className="badges-contenedor">
                <span className="badge text-bg-primary">Responsive Design</span>
                <span className="badge text-bg-primary">Browser Compatibility</span>
                <span className="badge text-bg-primary">SEO Best Practices</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home