import './Experience.css';

const internships = [
  {
    number: '01',
    year: '2026',
    title: 'POWER BI INTERN',
    category: 'Data Visualization & Business Intelligence',
    company: 'CSC India',
    description:
      'Worked on data visualization and business intelligence using Power BI, creating interactive dashboards, reports and meaningful visual insights from structured data.',
  },

  {
    number: '02',
    year: '2025',
    title: 'UI / UX DESIGNER INTERN',
    category: 'Interface & User Experience Design',
    company: 'CSC India',
    description:
      'Worked on user interface and experience design, focusing on clean layouts, usability, visual consistency and creating intuitive digital experiences for users.',
  },

  {
    number: '03',
    year: '2024',
    title: 'SDE INTERN',
    category: 'Software Development',
    company: 'Bluestock Fintech',
    description:
      'Gained practical software development experience by working on application development, implementing features and understanding real-world development workflows.',
  },
];


function Experience() {
  return (
    <section className="experience" id="experience">

      <div className="container">

        {/* ========================================
            HEADER
        ======================================== */}

        <div className="experience__header">

          <p className="experience__eyebrow">
            05 / EXPERIENCE
          </p>

          <h2 className="experience__title">
            Where I've gained
            <br />
            <span>practical experience.</span>
          </h2>

        </div>


        {/* ========================================
            INTERNSHIP CARDS
        ======================================== */}

        <div className="experience__grid">

          {internships.map((internship) => (

            <article
              className="experience__card"
              key={internship.number}
            >

              {/* ========================================
                  CARD TOP
              ======================================== */}

              <div className="experience__top">

                <span className="experience__number">
                  {internship.number}
                </span>

                <span className="experience__year">
                  {internship.year}
                </span>

              </div>


              {/* ========================================
                  CARD CONTENT
              ======================================== */}

              <div className="experience__content">

                <h3 className="experience__role">
                  {internship.title}
                </h3>


                <p className="experience__category">
                  {internship.category}
                </p>


                {/* Company */}

                <p className="experience__company">
                  {internship.company}
                </p>


                {/* Description */}

                <p className="experience__description">
                  {internship.description}
                </p>

              </div>

            </article>

          ))}

        </div>


        {/* ========================================
            BOTTOM TRANSITION
        ======================================== */}

        <a
          href="#contact"
          className="experience__transition"
          aria-label="Go to contact section"
        >

          <span className="experience__line" />

          <span className="experience__transition-text">
            LET'S CONNECT
          </span>

          <span className="experience__arrow">
            ↓
          </span>

        </a>

      </div>

    </section>
  );
}


export default Experience;