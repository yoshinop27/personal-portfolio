import { useNavigation } from './hooks/useNavigation'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutSection from './components/AboutSection'
import NewsSection from './components/NewsSection'
import CurrentlySection from './components/CurrentlySection'
import ProjectsSection from './components/ProjectsSection'
import CommunitySection from './components/CommunitySection'

function App() {
  useNavigation()

  return (
    <>
      <Header />
      <div className="content-wrapper">
        <AboutSection />
        <NewsSection />
        <CurrentlySection />
        <ProjectsSection />
        <CommunitySection />
      </div>
      <Footer />
    </>
  )
}

export default App

