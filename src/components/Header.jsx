import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 60
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <header>
      <div id="top-bar">
        <h1 onClick={() => handleNavClick('about')}>Preston Yoshino</h1>
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('about') }}>About</a>
          <a href="#currently" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('currently') }}>What I'm Up To</a>
          <a href="#projects" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('projects') }}>Projects</a>
          <a href="#design" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('design') }}>Graphic Design</a>
          <a href="#community" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('community') }}>Community</a>
        </nav>
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header

