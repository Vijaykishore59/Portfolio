import './ProjectsPage.css';

const projects = [
  {
    number: '01',
    title: 'MovieMind',
    category: 'AI MOVIE DISCOVERY PLATFORM',
    description:
      'A movie discovery platform designed to help users find films through intelligent recommendations, rich movie information and a cinematic browsing experience.',
    role: 'Full-Stack Development',
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'PostgreSQL',
    ],
    image: '/images/moviemind-ticket.png',
  },

  {
    number: '02',
    title: 'Project Two',
    category: 'WEB APPLICATION',
    description:
      'A practical web application built around a real-world problem, with a focus on simplicity, usability and clean engineering.',
    role: 'Full-Stack Development',
    technologies: [
      'React',
      'JavaScript',
      'Node.js',
    ],
    image: '/images/project-two.png',
  },

  {
    number: '03',
    title: 'Project Three',
    category: 'SOFTWARE PROJECT',
    description:
      'A software project focused on automation, efficient workflows and building a reliable technical foundation.',
    role: 'Backend Development',
    technologies: [
      'Python',
      'APIs',
      'SQL',
    ],
    image: '/images/project-three.png',
  },
];

function ProjectsPage() {
  return (
    <main className="projects-page">

      {/* ========================================
          PAGE HEADER
      ======================================== */}

      <section className="projects-page__hero">
        <div className="container">

          <a
            href="/"
            className="projects-page__back"
          >
            ← Back to home
          </a>

          <p className="projects-page__eyebrow">
            SELECTED WORK
          </p>

          <h1 className="projects-page__title">
            Things I've built
            <br />
            <span>with intention.</span>
          </h1>

          <p className="projects-page__intro">
            A collection of projects exploring product
            development, frontend experiences, backend
            systems and data.
          </p>

        </div>
      </section>


      {/* ========================================
          PROJECTS
      ======================================== */}

      <section className="projects-page__list">
        <div className="container">

          {projects.map((project, index) => (
            <article
              className={`projects-page__project ${
                index % 2 !== 0
                  ? 'projects-page__project--reverse'
                  : ''
              }`}
              key={project.number}
            >

              {/* Project Image */}
              <div className="projects-page__visual">

                <div className="projects-page__image-wrapper">

                  <img
                    src={project.image}
                    alt={`${project.title} project`}
                    className="projects-page__image"
                  />

                </div>

              </div>


              {/* Project Information */}
              <div className="projects-page__content">

                <div className="projects-page__top">

                  <span className="projects-page__number">
                    {project.number}
                  </span>

                  <span className="projects-page__category">
                    {project.category}
                  </span>

                </div>


                <h2 className="projects-page__project-title">
                  {project.title}
                </h2>


                <p className="projects-page__description">
                  {project.description}
                </p>


                <div className="projects-page__meta">

                  <div className="projects-page__meta-group">

                    <span className="projects-page__meta-label">
                      ROLE
                    </span>

                    <span className="projects-page__meta-value">
                      {project.role}
                    </span>

                  </div>


                  <div className="projects-page__meta-group">

                    <span className="projects-page__meta-label">
                      TECHNOLOGIES
                    </span>

                    <div className="projects-page__technologies">

                      {project.technologies.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>


                <a
                  href="#"
                  className="projects-page__link"
                >
                  View Case Study
                  <span>→</span>
                </a>

              </div>

            </article>
          ))}

        </div>
      </section>

    </main>
  );
}

export default ProjectsPage;