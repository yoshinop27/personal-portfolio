import { useState } from 'react'

function StackedCardCarousel({ items = [], cardType = 'activity' }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const goToNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  if (!items.length) {
    return null
  }

  const currentItem = items[currentIndex]

  return (
    <div className="carousel-wrapper">
      <button 
        className="carousel-arrow carousel-arrow-left" 
        onClick={goToPrev}
        disabled={currentIndex === 0}
        aria-label="Previous card">
        <i className="fas fa-chevron-left"></i>
      </button>
      
      <div 
        className="carousel-card-container"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className={`carousel-card glass-card ${cardType}-card hover-card`}>
          {cardType === 'activity' && (
            <>
              <div className="activity-image-wrapper">
                <img src={currentItem.image} alt={currentItem.title} className="activity-image" />
              </div>
              <div className="activity-content">
                <h3 className="activity-title">{currentItem.title}</h3>
                <p className="activity-company">{currentItem.company}</p>
                <p className="text-slate-400">{currentItem.description}</p>
              </div>
            </>
          )}
          
          {cardType === 'project' && (
            <>
              <div className="project-image-wrapper">
                <img src={currentItem.image} alt={currentItem.title} className="project-image" />
              </div>
              <div className="project-content">
                <h3 className="project-title">{currentItem.title}</h3>
                <p className="text-slate-400 project-description">{currentItem.description}</p>
                {currentItem.tech && (
                  <div className="project-tech">
                    {currentItem.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                )}
                {currentItem.links && (
                  <div className="project-links">
                    {currentItem.links.map((link, idx) => (
                      <a 
                        key={idx}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={link.comingSoon ? "project-link coming-soon" : "project-link"}
                      >
                        <i className={link.icon}></i> {link.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}

          {cardType === 'design' && (
            <div className="design-image-wrapper-full">
              <img src={currentItem.image} alt={currentItem.title || 'Design'} className="design-image-full" />
            </div>
          )}
        </div>
      </div>

      <button 
        className="carousel-arrow carousel-arrow-right" 
        onClick={goToNext}
        disabled={currentIndex === items.length - 1}
        aria-label="Next card">
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  )
}

export default StackedCardCarousel
