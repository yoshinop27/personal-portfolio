import { useState, useEffect } from 'react'
import { useNavigation } from './hooks/useNavigation'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutSection from './components/AboutSection'
import NewsSection from './components/NewsSection'
import CurrentlySection from './components/CurrentlySection'
import ProjectsSection from './components/ProjectsSection'
import DesignSection from './components/DesignSection'
import CommunitySection from './components/CommunitySection'

function App() {
  const [headerContent, setHeaderContent] = useState('')
  const [footerContent, setFooterContent] = useState('')
  useNavigation()

  useEffect(() => {
    // Load header
    fetch('header.html')
      .then(response => response.text())
      .then(data => setHeaderContent(data))
      .catch(err => console.error('Error loading header:', err))

    // Load footer
    fetch('footer.html')
      .then(response => response.text())
      .then(data => setFooterContent(data))
      .catch(err => console.error('Error loading footer:', err))
  }, [])

  useEffect(() => {
    // Update header and footer DOM after content loads
    const headerPlace = document.getElementById('header-place')
    const footerPlace = document.getElementById('footer-place')
    
    if (headerContent && headerPlace) {
      headerPlace.innerHTML = headerContent
    }
    
    if (footerContent && footerPlace) {
      footerPlace.innerHTML = footerContent
    }
  }, [headerContent, footerContent])

  return (
    <>
      {/* Animated Background */}
      <div className="background-container">
        <div className="background-image-wrapper">
          <div className="background-image"></div>
          <div className="background-overlay"></div>
        </div>
        <div className="background-accent"></div>
        <div className="background-line top-line"></div>
        <div className="background-line bottom-line"></div>
      </div>

      {/* Content */}
      <div className="content-wrapper">
        <AboutSection />
        <NewsSection />
        <CurrentlySection />
        <ProjectsSection />
        <DesignSection />
        <CommunitySection />
      </div>
    </>
  )
}

export default App

