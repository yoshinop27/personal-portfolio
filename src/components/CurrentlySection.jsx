const activities = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'John Deere',
    description: 'Developing web apps on an agile team to provide solutions to internal customers using TypeScript, React, Next.js, and SQL with a focus on test-driven development.'
  },
  {
    id: 2,
    title: 'Research Assistant',
    company: 'University of Iowa',
    description: 'Researching the efficacy of GRPO algorithms in the context of reinforcement learning in the AI training process. Supervised by Professor Muchao Ye.'
  },
  {
    id: 3,
    title: 'Baseball Season',
    company: 'Grinnell College Baseball',
    description: 'Heading into my 3rd year season as a middle infielder for the Grinnell College Baseball team, participating in the midwest conference.'
  }
]

function CurrentlySection() {
  return (
    <section id="currently" className="section">
      <div className="section-container">
        <h2 className="section-heading">Currently</h2>
        <div className="entry-list">
          {activities.map((activity) => (
            <div key={activity.id}>
              <div className="entry-meta">{activity.company}</div>
              <h3 className="entry-title">{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CurrentlySection
