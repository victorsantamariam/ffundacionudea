import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  FileText,
  Handshake,
  Camera,
  Mail,
  Menu,
  Network,
  Quote,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'

const impactAreas = [
  { number: '01', title: 'Impulsamos ideas', text: 'Convertimos proyectos de estudiantes y egresados en soluciones que transforman la vida de las personas.', icon: Sparkles },
  { number: '02', title: 'Conectamos capacidades', text: 'Acercamos a la empresa, la academia y el talento para resolver los retos del presente.', icon: Network },
  { number: '03', title: 'Medimos el impacto', text: 'Cada aporte se convierte en oportunidades, conocimiento aplicado y desarrollo para nuestra región.', icon: Target },
]

const projects = [
  { tag: 'Tecnología', title: 'Proyectos que nacen en la Facultad y llegan más lejos', text: 'Apoya prototipos, investigaciones y emprendimientos de alto potencial.', accent: 'project-card--blue' },
  { tag: 'Talento', title: 'Más oportunidades para quienes están construyendo el futuro', text: 'Tu empresa puede abrir caminos para nuevas generaciones de ingenieros.', accent: 'project-card--yellow' },
]

export default function Page() {
  return (
    <main>
      <div className="announcement"><span>Fundación Facultad de Ingeniería UdeA</span><span className="announcement__dot" /><span>Una comunidad que transforma</span></div>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Fundación Facultad de Ingeniería UdeA, inicio">
          <span className="brand-mark">F<span>+</span></span>
          <span><strong>Fundación</strong><small>Facultad de Ingeniería · UdeA</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#nosotros">Nosotros</a><a href="#impacto">Nuestro impacto</a><a href="#proyectos">Proyectos</a><a href="#contacto">Contacto</a>
        </nav>
        <a className="button button--small button--dark" href="#donar">Quiero aportar <ArrowRight size={16} /></a>
        <button className="mobile-menu" aria-label="Abrir menú"><Menu size={22} /></button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero__image" />
        <div className="hero__overlay" />
        <div className="container hero__content">
          <p className="eyebrow eyebrow--light"><span /> Ingeniería con propósito</p>
          <h1>El futuro se<br /><em>construye juntos.</em></h1>
          <p className="hero__lead">Somos el puente entre quienes tienen una visión y quienes quieren hacerla realidad.</p>
          <div className="hero__actions"><a className="button button--yellow" href="#donar">Haz parte del cambio <ArrowRight size={17} /></a><a className="text-link text-link--light" href="#nosotros">Conoce la Fundación <ChevronRight size={17} /></a></div>
        </div>
        <div className="hero__scroll"><span>Desliza para explorar</span><div /></div>
      </section>

      <section className="intro section" id="nosotros">
        <div className="container intro__grid"><div><p className="eyebrow"><span /> Quiénes somos</p><h2>Donde las buenas ideas encuentran <em>un impulso real.</em></h2></div><div className="intro__copy"><p>La Fundación Facultad de Ingeniería es un fondo que conecta empresas comprometidas con proyectos de estudiantes y egresados de la Universidad de Antioquia.</p><p>Creemos en una ingeniería que responde a los desafíos de nuestro entorno y en el poder de unir conocimiento, talento y propósito.</p><a className="text-link" href="#impacto">Conoce cómo lo hacemos <ChevronRight size={17} /></a></div></div>
      </section>

      <section className="impact section section--cream" id="impacto"><div className="container"><div className="section-heading"><div><p className="eyebrow"><span /> Nuestro propósito</p><h2>Transformamos aportes en <em>posibilidades.</em></h2></div><p>Tu contribución fortalece una red que ya está haciendo la diferencia.</p></div><div className="impact-grid">{impactAreas.map(({ number, title, text, icon: Icon }) => <article className="impact-card" key={number}><span className="impact-card__number">{number}</span><Icon className="impact-card__icon" size={30} strokeWidth={1.5} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="projects section" id="proyectos"><div className="container"><div className="section-heading section-heading--projects"><div><p className="eyebrow"><span /> Elige involucrarte</p><h2>Tu empresa puede ser parte de <em>algo grande.</em></h2></div><a className="text-link" href="#donar">Ver todos los proyectos <ChevronRight size={17} /></a></div><div className="projects-grid">{projects.map((project) => <article className={`project-card ${project.accent}`} key={project.title}><div className="project-card__content"><span className="pill">{project.tag}</span><h3>{project.title}</h3><p>{project.text}</p><a href="#donar" className="circle-link" aria-label={`Conocer más sobre ${project.title}`}><ArrowRight size={18} /></a></div></article>)}</div></div></section>

      <section className="quote-section"><div className="container quote-grid"><Quote size={42} className="quote-mark" /><blockquote>"Cuando una empresa decide aportar, no solo está financiando un proyecto: está creyendo en el talento que puede cambiarlo todo."</blockquote><div className="quote-person"><span className="avatar">AF</span><span><strong>Alianza Fundación</strong><small>Facultad de Ingeniería · UdeA</small></span></div></div></section>

      <section className="donate section" id="donar"><div className="container donate__inner"><div><p className="eyebrow eyebrow--light"><span /> Hazlo posible</p><h2>Una decisión de hoy puede cambiar el <em>mañana.</em></h2><p>Conoce las formas de aportar y encuentra la que mejor se conecta con tu empresa.</p></div><div className="donate__actions"><a className="button button--yellow" href="#contacto">Quiero ser aliado <Handshake size={17} /></a><a className="button button--outline-light" href="#contacto">Conocer opciones <ArrowRight size={17} /></a></div></div></section>

      <section className="contact section" id="contacto"><div className="container contact-grid"><div><p className="eyebrow"><span /> Hablemos</p><h2>Las grandes alianzas empiezan con una <em>conversación.</em></h2><p className="contact__lead">¿Tienes una propuesta, una inquietud o quieres hacer parte? Estamos para escucharte.</p><div className="contact__details"><a href="mailto:fundacioningenieria@udea.edu.co"><Mail size={18} /> fundacioningenieria@udea.edu.co</a><a href="https://instagram.com/fundacion_ingenieriaudea"><Camera size={18} /> @fundacion_ingenieriaudea</a></div></div><form className="contact-form"><label>Nombre o empresa<input type="text" placeholder="Escribe tu nombre" /></label><label>Correo electrónico<input type="email" placeholder="tu@empresa.com" /></label><label>¿Cómo podemos ayudarte?<select defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Quiero hacer una donación</option><option>Quiero ser aliado empresarial</option><option>Tengo una PQRS</option></select></label><button className="button button--dark" type="button">Enviar mensaje <Send size={16} /></button></form></div></section>

      <footer className="footer"><div className="container footer__top"><a className="brand brand--footer" href="#inicio"><span className="brand-mark">F<span>+</span></span><span><strong>Fundación</strong><small>Facultad de Ingeniería · UdeA</small></span></a><div className="footer__links"><a href="#nosotros">Nosotros</a><a href="#proyectos">Proyectos</a><a href="#contacto">Contacto</a><a href="#pqrs">PQRS</a></div><a className="footer__instagram" href="https://instagram.com/fundacion_ingenieriaudea"><Camera size={17} /> Instagram</a></div><div className="container footer__bottom"><span>© 2026 Fundación Facultad de Ingeniería UdeA</span><span>Una iniciativa para transformar desde la ingeniería.</span></div></footer>
    </main>
  )
}

void [CheckCircle2, CircleDollarSign, FileText, ShieldCheck, Users, ChevronDown]

// La navegación y los formularios quedan preparados para conectar el portal, PQRS,
// pagos y CRM en las siguientes entregas del proyecto.

enum FutureModules { PQRS = 'PQRS', Afiliacion = 'Afiliación', CRM = 'CRM' }
void FutureModules
