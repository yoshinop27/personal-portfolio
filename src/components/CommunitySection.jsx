function CommunitySection() {
  return (
    <section id="community" className="section">
      <div className="section-container">
        <h2 className="section-heading">Community</h2>
        <div className="community-intro">
          <p className="text-slate-300">
            Outside of my responsibilities as a Student-Athlete I try to find 
            ways to foster community in the 
            places that I'm at and also give back to the communities that I am a part of.
          </p>
        </div>
        <div className="community-grid-new">
          <div className="glass-card community-card-new hover-card">
            <div className="community-image-wrapper">
              <img src="photos/tour.jpg" alt="Campus Tour Guide" className="community-image" />
            </div>
            <div className="community-content">
              <h3 className="community-title">Campus Tour Guide</h3>
              <p className="text-slate-400">
                As a campus tour guide at Grinnell College, I help prospective students and their families discover 
                their potential forever home. I lead engaging 
                tours that showcase our vibrant campus community, academic excellence, and unique opportunities. 
              </p>
            </div>
          </div>
          <div className="glass-card community-card-new hover-card">
            <div className="community-image-wrapper">
              <img src="photos/loi.jpg" alt="Team Serve" className="community-image" />
            </div>
            <div className="community-content">
              <h3 className="community-title">Team Serve</h3>
              <p className="text-slate-400">
                As a part of my internship, I volunteered with team Serve to 
                give back to the Hawaii community. Two of the projects we did were
                harvesting luau leaves to donate to various food banks and organizing backpacks
                with school supplies for elementary students.
              </p>
            </div>
          </div>
          <div className="glass-card community-card-new hover-card">
            <div className="community-image-wrapper">
              <img src="photos/bcd.jpg" alt="Big City Diner" className="community-image" />
            </div>
            <div className="community-content">
              <h3 className="community-title">Big City Diner</h3>
              <p className="text-slate-400">
                In my role as a server, I have seen firsthand how food has the power to 
                bring people together. Each shift gives me the privilege of helping families 
                celebrate milestones, enriching reunions, welcoming visitors to Hawaii, 
                and connecting with members of my community.
              </p>
            </div>
          </div>
          <div className="glass-card community-card-new hover-card">
            <div className="community-image-wrapper">
              <img src="photos/team.JPG" alt="A-Town Elite" className="community-image" />
            </div>
            <div className="community-content">
              <h3 className="community-title">A-Town Elite</h3>
              <p className="text-slate-400">
                A-Town Elite was a local basketball team I started
                that competed in various leagues, 
                capping off our summer season by participating
                in an international basketball tournament where we finished 3rd! This was a great
                way for our guys to build lifelong friendships, stay active, and learn valuable
                teamwork skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunitySection

