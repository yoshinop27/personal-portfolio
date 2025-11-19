import { useState } from 'react'

function StackedCardCarousel({ items, cardType = 'activity' }) {
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

  return (
    <div className="stacked-carousel-wrapper">
      <button 
        className="carousel-arrow carousel-arrow-left" 
        onClick={goToPrev}
        disabled={currentIndex === 0}
        aria-label="Previous card">
        <i className="fas fa-chevron-left"></i>
      </button>
      
      <div 
        className="stacked-cards-container"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {items.map((item, index) => {
          const position = index - currentIndex
          const isActive = index === currentIndex
          const isBehind = position < 0
          const isAhead = position > 0
          const zIndex = items.length - Math.abs(position)
          
          // Calculate transform for stacked effect with smooth transitions
          let translateX = 0
          let translateY = 0
          let scale = 1
          
          if (isBehind) {
            // Cards behind (to the left) - stack behind
            translateX = position * 15
            translateY = Math.abs(position) * 20
            scale = 1 - Math.abs(position) * 0.08
          } else if (isAhead) {
            // Cards ahead (to the right) - stack in front but offset
            translateX = position * 15
            translateY = -Math.abs(position) * 10
            scale = 1 - Math.abs(position) * 0.08
          }
          
          return (
            <div
              key={item.id}
              className={`stacked-card glass-card ${cardType}-card hover-card ${isActive ? 'active' : ''}`}
              style={{
                zIndex: zIndex,
                transform: isActive 
                  ? 'translateX(0) translateY(0) scale(1)' 
                  : `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                opacity: isActive ? 1 : Math.max(0.3, 0.8 - Math.abs(position) * 0.15),
                cursor: isActive ? 'default' : 'pointer',
                pointerEvents: isActive ? 'auto' : 'none',
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease, z-index 0.6s ease'
              }}
              onClick={() => !isActive && setCurrentIndex(index)}
            >
              {cardType === 'activity' && (
                <>
                  <div className="activity-image-wrapper">
                    <img src={item.image} alt={item.title} className="activity-image" />
                  </div>
                  <div className="activity-content">
                    <h3 className="activity-title">{item.title}</h3>
                    <p className="activity-company">{item.company}</p>
                    <p className="text-slate-400">{item.description}</p>
                  </div>
                </>
              )}
              
              {cardType === 'project' && (
                <>
                  <div className="project-image-wrapper">
                    <img src={item.image} alt={item.title} className="project-image" />
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{item.title}</h3>
                    <p className="text-slate-400 project-description">{item.description}</p>
                    {item.tech && (
                      <div className="project-tech">
                        {item.tech.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    )}
                    {item.links && (
                      <div className="project-links">
                        {item.links.map((link, idx) => (
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
                  <img src={item.image} alt={item.title || 'Design'} className="design-image-full" />
                </div>
              )}
            </div>
          )
        })}
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
