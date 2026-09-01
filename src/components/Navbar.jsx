import './Navbar.css';

const navItems = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">

        {/* Brand */}
        <a
          href="#home"
          className="navbar__brand"
          aria-label="Go to homepage"
        >
          Vijay Kishore
          <span className="navbar__brand-dot" />
        </a>


        {/* Navigation */}
        <nav
          className="navbar__nav"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="navbar__link"
            >
              {item.label}
            </a>
          ))}
        </nav>


        {/* Resume */}
        <a
          href="https://drive.google.com/file/d/10Yk4tI11DillHntjlm15Ra0LQN6t7yRn/view?usp=sharing"
          className="navbar__resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Resume</span>
          <span className="navbar__resume-arrow">
            ↓
          </span>
        </a>

      </div>
    </header>
  );
}

export default Navbar;