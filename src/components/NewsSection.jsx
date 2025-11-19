function NewsSection() {
  return (
    <section id="news" className="section">
      <div className="section-container">
        <h2 className="section-heading">Recent News</h2>
        <div className="news-cards-container">
          <div className="glass-card news-card hover-card">
            <div className="news-content">
              <div className="news-image-wrapper">
                <img src="photos/tigerhacks.jpeg" alt="TigerHacks Hackathon" className="news-image" />
              </div>
              <div className="news-text">
                <div className="news-date">November 2025</div>
                <h3 className="news-title">TigerHacks Hackathon Winner</h3>
                <p className="text-slate-300">
                  Won "Best Use of Auth0" at TigerHacks. Created an app to help baseball players train their swings using AI. 
                  We used computer vision, AI models, embedded systems and more to develop this app, with Auth0 to secure user requests.
                </p>
                <a href="https://www.linkedin.com/posts/preston-yoshino27_github-joshoberbaseballtrainer-activity-7393444739003392000-BPSw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEkxMPUBkmu7Wn7KH6FBsqUIrzpYctVNP1s" target="_blank" rel="noopener noreferrer" className="news-link">
                  <i className="fab fa-linkedin"></i> Read more on LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="glass-card news-card hover-card">
            <div className="news-content">
              <div className="news-image-wrapper">
                <img src="photos/ncaa.jpeg" alt="NCAA Student Immersion Program" className="news-image" />
              </div>
              <div className="news-text">
                <div className="news-date">November 2025</div>
                <h3 className="news-title">NCAA Student Immersion Program Invitation</h3>
                <p className="text-slate-300">
                  I am honored to have been invited by the NCAA to participate in their Student Immersion Program 
                  being held in Washington, D.C. I am one of 40 student-athletes selected from across the country 
                  to learn more about the inner workings of the NCAA.
                </p>
                <a href="https://www.ncaa.org/sports/2016/9/20/division-iii-student-immersion-program.aspx" target="_blank" rel="noopener noreferrer" className="news-link">
                  <i className="fas fa-external-link-alt"></i> Learn more about the program
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSection

