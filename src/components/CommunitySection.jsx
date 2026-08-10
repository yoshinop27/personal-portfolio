const activities = [
  {
    id: 1,
    title: 'Campus Tour Guide',
    description: "As a campus tour guide at Grinnell College, I help prospective students and their families discover their potential forever home. I lead engaging tours that showcase our vibrant campus community, academic excellence, and unique opportunities."
  },
  {
    id: 2,
    title: 'Team Serve',
    description: 'As a part of my internship, I volunteered with Team Serve to give back to the Hawaii community. Two of the projects we did were harvesting luau leaves to donate to various food banks and organizing backpacks with school supplies for elementary students.'
  },
  {
    id: 3,
    title: 'Big City Diner',
    description: 'In my role as a server, I have seen firsthand how food has the power to bring people together. Each shift gives me the privilege of helping families celebrate milestones, enriching reunions, welcoming visitors to Hawaii, and connecting with members of my community.'
  },
  {
    id: 4,
    title: 'A-Town Elite',
    description: "A-Town Elite was a local basketball team I started that competed in various leagues, capping off our summer season by participating in an international basketball tournament where we finished 3rd! This was a great way for our guys to build lifelong friendships, stay active, and learn valuable teamwork skills."
  }
]

function CommunitySection() {
  return (
    <section id="community" className="section">
      <div className="section-container">
        <h2 className="section-heading">Community</h2>
        <p className="section-intro">
          Outside of my responsibilities as a student-athlete I try to find
          ways to foster community in the places that I'm at and also give
          back to the communities that I am a part of.
        </p>
        <div className="entry-list">
          {activities.map((activity) => (
            <div key={activity.id}>
              <h3 className="entry-title">{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommunitySection
