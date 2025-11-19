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
  useNavigation()

  return (
    <>
      <div className="background-container">
        <div className="background-image-wrapper">
          <div className="background-image"></div>
          <div className="background-overlay"></div>
        </div>
        <div className="background-accent"></div>
        <div className="background-line top-line"></div>
        <div className="background-line bottom-line"></div>
      </div>

      <div className="content-wrapper">
        <Header />
        <AboutSection />
        <NewsSection />
        <CurrentlySection />
        <ProjectsSection />
        <DesignSection />
        <CommunitySection />
        <Footer />
      </div>
    </>
  )
}

export default App

