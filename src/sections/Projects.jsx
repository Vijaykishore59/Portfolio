import './Projects.css';

const projects = [
  {
    id: '01',
    title: 'MovieMind',
    description:
      'An intelligent movie discovery platform that helps people find movies they will actually enjoy, with rich movie information, personalized discovery and dynamically generated movie tickets.',
    role: 'Full-Stack Development',
    stack: [
      'React',
      'MySQL',
      'FastAPI',
      'TMDB API',
      'Wikipedia API',
    ],
    type: 'Featured Project',
    github: '#',
  },

  {
    id: '02',
    title: 'SmartRail',
    description:
      'A smart railway reservation platform designed to simplify train discovery, reservation and passenger journey management through a clean and practical digital experience.',
    role: 'Full-Stack Development',
    stack: [
      'React',
      'MySQL',
      'FastAPI',
    ],
    type: 'Railway Reservation Platform',
    github: '#',
  },

  {
    id: '03',
    title: 'AIS Shutdown Detection',
    description:
      'A machine learning system designed to detect intentional AIS shutdowns using deep learning techniques and a web-based application for analysis and detection.',
    role: 'Machine Learning',
    stack: [
      'Deep Learning',
      'Django',
      'HTML',
      'CSS',
      'JavaScript',
      'XAMPP Server',
    ],
    type: 'ML Research Project',
    github: '#',
  },
];


function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="container">

        {/* ========================================
            SECTION HEADING
        ======================================== */}

        <div className="projects__heading">

          <div>

            <p className="projects__eyebrow">
              02 / SELECTED WORK
            </p>

            <h2 className="projects__title">
              Things I've built
              <br />
              with intention.
            </h2>

          </div>


          <p className="projects__intro">
            A selection of projects where engineering,
            problem-solving and thoughtful design come
            together.
          </p>

        </div>


        {/* ========================================
            FEATURED PROJECT — MOVIEMIND
        ======================================== */}

        <article className="project-featured">

          {/* ========================================
              PROJECT INFORMATION
          ======================================== */}

          <div className="project-featured__content">

            <div className="project-featured__label">
              {projects[0].type}
            </div>


            <h3 className="project-featured__title">
              {projects[0].title}
            </h3>


            <p className="project-featured__description">
              {projects[0].description}
            </p>


            {/* ========================================
                PROJECT META
            ======================================== */}

            <div className="project-featured__meta">

              {/* Role */}

              <div className="project-meta">

                <span className="project-meta__label">
                  ROLE
                </span>

                <span className="project-meta__value">
                  {projects[0].role}
                </span>

              </div>


              {/* Stack */}

              <div className="project-meta">

                <span className="project-meta__label">
                  STACK
                </span>

                <div className="project-meta__stack">

                  {projects[0].stack.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

            </div>


            {/* ========================================
                GITHUB
            ======================================== */}

            <div className="project-featured__actions">

              <a
                href={projects[0].github}
                className="project-github-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <span>↗</span>
              </a>

            </div>

          </div>


          {/* ========================================
              MOVIEMIND TICKET
          ======================================== */}

          <div className="project-featured__visual">

            <div className="project-ticket">

              <img
                src="/images/moviemind-ticket.png"
                alt="MovieMind generated movie ticket"
                className="project-ticket__image"
              />

            </div>

          </div>

        </article>


        {/* ========================================
            OTHER PROJECTS
        ======================================== */}

        <div className="projects__grid">

          {projects.slice(1).map((project) => (

            <article
              className="project-small"
              key={project.id}
            >

              {/* ========================================
                  PROJECT HEADER
              ======================================== */}

              <div className="project-small__top">

                <span>
                  {project.id}
                </span>

                <span>
                  {project.type}
                </span>

              </div>


              {/* ========================================
                  PROJECT TITLE
              ======================================== */}

              <h3 className="project-small__title">
                {project.title}
              </h3>


              {/* ========================================
                  PROJECT DESCRIPTION
              ======================================== */}

              <p className="project-small__description">
                {project.description}
              </p>


              {/* ========================================
                  PROJECT STACK
              ======================================== */}

              <div className="project-small__stack">

                {project.stack.map((technology) => (

                  <span key={technology}>
                    {technology}
                  </span>

                ))}

              </div>


              {/* ========================================
                  GITHUB
              ======================================== */}

              <div className="project-small__actions">

                <a
                  href={project.github}
                  className="project-github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <span>↗</span>
                </a>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;