function AboutSection() {
  return (
    <section id="about" className="section hero-section">
      <div className="section-container">
        <div className="hero-content">
          {/* Hero Video */}
          <div className="hero-video-wrapper">
            <div className="hero-video-glow"></div>
            <div className="hero-video-container">
              <video 
                src="photos/main.MOV" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="hero-video"
                poster="photos/main.jpg">
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Welcome Text */}
          <div className="hero-text-wrapper">
            <div className="hero-text-content">
              <h1 className="hero-title">Hello, I'm Preston Yoshino</h1>
              <p className="hero-subtitle">
                <b>Aloha!</b> My name is Preston Yoshino and I'm from Aiea, Hawaii.
                I'm currently a third-year student at Grinnell College
                double majoring in computer science and mathematics with a minor in statistics.
              </p>
              <p className="hero-description">
                Aside from my formal studies, I am passionate about the intersection of software engineering and artificial intelligence.
                I am also a middle infielder for Grinnell College baseball team.
              </p>
              <p className="hero-description">
                After I finish my studies, I hope to pursue AI research, software engineering, or quant roles.
              </p>
              <p className="hero-description">
                During my free time I enjoy going to the beach, playing basketball, and working 
                as a server at a diner in my hometown.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

