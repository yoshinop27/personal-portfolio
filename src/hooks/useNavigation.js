import { useEffect } from 'react'

export function useNavigation() {
  useEffect(() => {
    // Wait for header to load
    const initNavigation = () => {
      const headerPlace = document.getElementById('header-place')
      if (!headerPlace || !headerPlace.innerHTML) {
        setTimeout(initNavigation, 100)
        return
      }

      // Initialize hamburger menu
      const hamburger = document.getElementById('hamburger')
      const navMenu = document.getElementById('nav-menu')

      if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
          hamburger.classList.toggle('active')
          navMenu.classList.toggle('active')
        })

        // Close menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav-link')
        navLinks.forEach(link => {
          link.addEventListener('click', function() {
            hamburger.classList.remove('active')
            navMenu.classList.remove('active')
          })
        })
      }

      // Update navigation for single page navigation
      updateNavigationForIndex()
    }

    const updateNavigationForIndex = () => {
      const navLinks = document.querySelectorAll('.nav-link')

      navLinks.forEach(link => {
        const href = link.getAttribute('href')
        if (href === 'index.html' || href === '#about') {
          link.setAttribute('href', '#about')
          link.addEventListener('click', function(e) {
            e.preventDefault()
            navigateToSection('about')
          })
        } else if (href === 'projects.html') {
          link.setAttribute('href', '#projects')
          link.addEventListener('click', function(e) {
            e.preventDefault()
            navigateToSection('projects')
          })
        } else if (href === 'graphic-design.html') {
          link.setAttribute('href', '#design')
          link.addEventListener('click', function(e) {
            e.preventDefault()
            navigateToSection('design')
          })
        } else if (href === 'community.html') {
          link.setAttribute('href', '#community')
          link.addEventListener('click', function(e) {
            e.preventDefault()
            navigateToSection('community')
          })
        } else if (href === '#currently') {
          link.addEventListener('click', function(e) {
            e.preventDefault()
            navigateToSection('currently')
          })
        }
      })

      // Add "What I'm Up To" link if it doesn't exist
      const navMenu = document.getElementById('nav-menu')
      if (navMenu && !document.querySelector('.nav-link[href="#currently"]')) {
        const currentlyLink = document.createElement('a')
        currentlyLink.href = '#currently'
        currentlyLink.className = 'nav-link'
        currentlyLink.textContent = "What I'm Up To"
        currentlyLink.addEventListener('click', function(e) {
          e.preventDefault()
          navigateToSection('currently')
        })

        const aboutLink = Array.from(navLinks).find(link => link.getAttribute('href') === '#about')
        if (aboutLink && aboutLink.nextSibling) {
          navMenu.insertBefore(currentlyLink, aboutLink.nextSibling)
        } else if (aboutLink) {
          navMenu.appendChild(currentlyLink)
        }
      }
    }

    const navigateToSection = (sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        const headerHeight = 60
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }

    // Active section detection on scroll
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

    // Initial active section
    updateActiveSection()

    // Update on scroll
    let scrollTimeout
    window.addEventListener('scroll', function() {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout)
      }
      scrollTimeout = window.requestAnimationFrame(updateActiveSection)
    })

    // Initialize navigation after a short delay
    setTimeout(initNavigation, 200)
  }, [])
}

