import './Skills.css';

const skillGroups = [
  {
    number: '01',
    title: 'FRONTEND',
    skills: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    number: '02',
    title: 'BACKEND',
    skills: ['Python', 'FastAPI', 'REST APIs', 'Node.js'],
  },
  {
    number: '03',
    title: 'DATABASE',
    skills: ['PostgreSQL', 'SQL', 'SQLAlchemy'],
  },
  {
    number: '04',
    title: 'TOOLS',
    skills: ['Git', 'GitHub', 'Docker', 'Linux'],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">

        {/* ========================================
            HEADER
        ======================================== */}

        <div className="skills__header">

          <p className="skills__eyebrow">
            04 / SKILLS
          </p>

          <h2 className="skills__title">
            Technologies I work with.
          </h2>

        </div>


        {/* ========================================
            SKILL CARDS
        ======================================== */}

        <div className="skills__grid">

          {skillGroups.map((group) => (
            <article
              className="skills__card"
              key={group.number}
            >

              <span className="skills__number">
                {group.number}
              </span>

              <h3 className="skills__category">
                {group.title}
              </h3>

              <div className="skills__list">

                {group.skills.map((skill) => (
                  <span
                    className="skills__item"
                    key={skill}
                  >
                    <span className="skills__dash">
                      —
                    </span>

                    {skill}
                  </span>
                ))}

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;