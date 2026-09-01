import { useEffect, useState } from 'react';
import './Hero.css';

const projects = [
  {
    name: 'MovieMind',
    description:
      'An intelligent movie discovery platform with personalized discovery, rich movie information and dynamically generated movie tickets.',
    stack: [
      'React',
      'MySQL',
      'FastAPI',
      'TMDB API',
      'Wikipedia API',
    ],
    status: 'In Development',
  },

  {
    name: 'SmartRail',
    description:
      'A smart railway reservation platform designed to simplify train discovery, reservation and passenger journey management.',
    stack: [
      'React',
      'MySQL',
      'FastAPI',
    ],
    status: 'In Development',
  },

  {
    name: 'AIS Shutdown Detection',
    description:
      'A deep learning system designed to detect intentional AIS shutdowns using self-supervised learning techniques.',
    stack: [
      'Deep Learning',
      'Django',
      'HTML',
      'CSS',
      'JavaScript',
      'XAMPP Server',
    ],
    status: 'Research Project',
  },
];


function Hero() {
  const [activeProject, setActiveProject] = useState(0);
  const [isPaused, setIsPaused] = useState(false);


  /* ========================================
     AUTOMATIC CAROUSEL
  ======================================== */

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = setInterval(() => {
      setActiveProject((current) => (
        (current + 1) % projects.length
      ));
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);


  return (
    <section className="hero" id="home">

      <div className="container hero__inner">

        {/* ========================================
            LEFT CONTENT
        ======================================== */}

        <div className="hero__content">

          <p className="hero__eyebrow">
            HELLO, I'M
          </p>


          <h1 className="hero__title">
            Python Developer
            <br />
            & Full-Stack Engineer
          </h1>


          <p className="hero__description">
            I build clean, efficient and user-focused
            applications with Python, React and
            modern technologies.
          </p>


          <div className="hero__actions">

            {/* View My Work */}

            <a
              href="#projects"
              className="hero__primary-button"
            >
              View My Work
              <span>→</span>
            </a>


            {/* Contact */}

            <a
              href="#contact"
              className="hero__secondary-button"
            >
              Contact Me
              <span>→</span>
            </a>

          </div>

        </div>


        {/* ========================================
            RIGHT PROJECT CAROUSEL
        ======================================== */}

        <div
          className="hero__project-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          <div className="hero__carousel-window">

            <div
              className="hero__carousel-track"
              style={{
                transform: `translateX(-${activeProject * 100}%)`,
              }}
            >

              {projects.map((project) => (

                <article
                  className="hero__project-card"
                  key={project.name}
                >

                  {/* ========================================
                      CARD HEADER
                  ======================================== */}

                  <div className="hero__project-top">

                    <span className="hero__project-label">
                      CURRENTLY BUILDING
                    </span>

                  </div>

                  {/* ========================================
                      PROJECT TITLE
                  ======================================== */}

                  <h2 className="hero__project-title">
                    {project.name}
                  </h2>


                  {/* ========================================
                      DESCRIPTION
                  ======================================== */}

                  <p className="hero__project-description">
                    {project.description}
                  </p>


                  {/* ========================================
                      DIVIDER
                  ======================================== */}

                  <div className="hero__project-divider" />


                  {/* ========================================
                      TECHNOLOGIES
                  ======================================== */}

                  <div className="hero__project-stack">

                    {project.stack.map((technology) => (

                      <span key={technology}>
                        {technology}
                      </span>

                    ))}

                  </div>


                  {/* ========================================
                      STATUS
                  ======================================== */}

                  <div className="hero__project-status">

                    <span className="hero__status-dot" />

                    <span>
                      {project.status}
                    </span>

                  </div>


                  {/* ========================================
                      EXPLORE PROJECT
                  ======================================== */}

                  <a
                    href="#projects"
                    className="hero__project-link"
                  >
                    Explore Project
                    <span>→</span>
                  </a>

                </article>

              ))}

            </div>

          </div>


          {/* ========================================
              CAROUSEL INDICATORS
          ======================================== */}

          <div className="hero__carousel-controls">

            {projects.map((project, index) => (

              <button
                key={project.name}
                type="button"
                className={`hero__carousel-dot ${
                  activeProject === index
                    ? 'hero__carousel-dot--active'
                    : ''
                }`}
                onClick={() => setActiveProject(index)}
                aria-label={`Show ${project.name}`}
              />

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;