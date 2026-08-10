function Header() {
  const handleNavClick = (sectionId) => {
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
        <nav className="nav-menu">
          <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('about') }}>About</a>
          <a href="#news" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('news') }}>News</a>
          <a href="#currently" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('currently') }}>Currently</a>
          <a href="#projects" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('projects') }}>Projects</a>
          <a href="#community" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('community') }}>Community</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
