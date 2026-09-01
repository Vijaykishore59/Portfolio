import './Experience.css';

const internships = [
  {
    number: '01',
    year: '2026',
    title: 'POWER BI INTERN',
    category: 'Data Visualization & Business Intelligence',
    description:
      'Worked with data visualization, dashboards and analytical reporting.',
  },
  {
    number: '02',
    year: '2025',
    title: 'UI / UX DESIGNER INTERN',
    category: 'Interface & User Experience Design',
    description:
      'Focused on interface design, user experience and creating clean digital experiences.',
  },
  {
    number: '03',
    year: '2024',
    title: 'SDE INTERN',
    category: 'Software Development',
    description:
      'Gained practical experience in software development and building applications.',
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

              <div className="experience__top">

                <span className="experience__number">
                  {internship.number}
                </span>

                <span className="experience__year">
                  {internship.year}
                </span>

              </div>


              <div className="experience__content">

                <h3 className="experience__role">
                  {internship.title}
                </h3>

                <p className="experience__category">
                  {internship.category}
                </p>

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

        <div className="experience__transition">

          <span className="experience__line" />

          <span className="experience__transition-text">
            LET'S CONNECT
          </span>

          <span className="experience__arrow">
            ↓
          </span>

        </div>

      </div>
    </section>
  );
}

export default Experience;