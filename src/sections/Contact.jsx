import './Contact.css';

function Contact() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">

        {/* ========================================
            SECTION LABEL
        ======================================== */}

        <p className="contact__eyebrow">
          06 / CONTACT
        </p>


        {/* ========================================
            MAIN CONTENT
        ======================================== */}

        <div className="contact__content">

          <div className="contact__heading">
            <h2 className="contact__title">
              Have an idea?
              <br />
              <span>Let's build it.</span>
            </h2>
          </div>


          <div className="contact__details">

            <p className="contact__description">
              I'm always open to interesting projects,
              opportunities and conversations about
              building something meaningful.
            </p>


            {/* Email */}
            <a
              href="mailto:your.email@example.com"
              className="contact__email"
            >
              vijaykishoresunkara@gmail.com
              <span>↗</span>
            </a>


            {/* Social Links */}
            <div className="contact__links">

              <a
                href="https://github.com/Vijaykishore59"
                className="contact__link"
              >
                GitHub
                <span>↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/vijaykishoresunkara/"
                className="contact__link"
              >
                LinkedIn
                <span>↗</span>
              </a>

              <a
                href="https://drive.google.com/file/d/10Yk4tI11DillHntjlm15Ra0LQN6t7yRn/view?usp=sharing"
                className="contact__link"
              >
                Resume
                <span>↗</span>
              </a>

            </div>

          </div>

        </div>


        {/* ========================================
            FOOTER
        ======================================== */}

        <div className="contact__footer">

          <span>
            © 2026
          </span>

          <span>
            BUILT WITH REACT
          </span>

          <button
            type="button"
            className="contact__back-top"
            onClick={handleBackToTop}
          >
            BACK TO TOP ↑
          </button>

        </div>

      </div>
    </section>
  );
}

export default Contact;