import './About.css';

const principles = [
  {
    number: '01',
    title: 'BUILD',
    description:
      'Turn ideas into practical products with clean, maintainable code.',
  },
  {
    number: '02',
    title: 'LEARN',
    description:
      'Keep exploring new technologies and understand how things work underneath.',
  },
  {
    number: '03',
    title: 'IMPROVE',
    description:
      'Refine every project through better architecture, performance and user experience.',
  },
];

const interests = [
  {
    title: 'Building products',
    description: 'that people actually use.',
  },
  {
    title: 'Designing systems',
    description: 'that stay clean as they grow.',
  },
  {
    title: 'Solving problems',
    description: 'with thoughtful engineering.',
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        {/* Section Label */}
        <p className="about__eyebrow">
          03 / ABOUT
        </p>


        {/* Main Introduction */}
        <div className="about__intro">

          <h2 className="about__title">
            I build software that
            <br />
            <span>solves real problems.</span>
          </h2>

          <div className="about__description">
            <p>
              I'm a developer interested in building thoughtful
              digital products across frontend, backend and data.
            </p>

            <p>
              I enjoy taking an idea from the first concept to
              a working product — focusing on clean architecture,
              useful interactions and a simple experience.
            </p>
          </div>

        </div>


        {/* Divider */}
        <div className="about__divider" />


        {/* Principles */}
        <div className="about__principles">

          {principles.map((principle) => (
            <article
              className="about__principle"
              key={principle.number}
            >

              <span className="about__principle-number">
                {principle.number}
              </span>

              <h3 className="about__principle-title">
                {principle.title}
              </h3>

              <p className="about__principle-description">
                {principle.description}
              </p>

            </article>
          ))}

        </div>


        {/* Interests */}
        <div className="about__interests">

          <div className="about__interests-heading">
            <span>WHAT I'M MOST INTERESTED IN</span>
          </div>

          <div className="about__interests-grid">

            {interests.map((interest, index) => (
              <article
                className="about__interest"
                key={interest.title}
              >

                <span className="about__interest-number">
                  0{index + 1}
                </span>

                <h3 className="about__interest-title">
                  {interest.title}
                </h3>

                <p className="about__interest-description">
                  {interest.description}
                </p>

              </article>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;