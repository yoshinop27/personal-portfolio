import { useEffect } from 'react'

export function useNavigation() {
  useEffect(() => {
    let activeSection = 'about'

    const updateActiveSection = () => {
      const sections = ['about', 'news', 'currently', 'projects', 'design', 'community']
      const scrollPosition = window.scrollY + window.innerHeight / 2
      const headerHeight = 60

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          const sectionTop = offsetTop - headerHeight
          const sectionBottom = sectionTop + offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            if (activeSection !== sectionId) {
              activeSection = sectionId
              updateActiveNavLink(sectionId)
            }
            break
          }
        }
      }
    }

    const updateActiveNavLink = (sectionId) => {
      const navLinks = document.querySelectorAll('.nav-link')
      navLinks.forEach(link => {
        link.classList.remove('active')
        const href = link.getAttribute('href')
        if (href === `#${sectionId}`) {
          link.classList.add('active')
        }
      })
    }

    updateActiveSection()

    let scrollTimeout
    const handleScroll = () => {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout)
      }
      scrollTimeout = window.requestAnimationFrame(updateActiveSection)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}

