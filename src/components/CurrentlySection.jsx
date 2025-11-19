import StackedCardCarousel from './StackedCardCarousel'

const activities = [
  {
    id: 1,
    image: 'photos/johndeere.jpg',
    title: 'Software Engineer',
    company: 'John Deere',
    description: 'Developing web apps on an agile team to provide solutions to internal customers using TypeScript, React, Next.js, and SQL with a focus on test-driven development'
  },
  {
    id: 2,
    image: 'photos/iowa.png',
    title: 'Research Assistant',
    company: 'University of Iowa',
    description: 'Researching the efficacy of GRPO algorithms in the context of reinforcement learning in the AI training process. Supervised by Professor Muchao Ye.'
  },
  {
    id: 3,
    image: 'photos/baseball.jpg',
    title: 'Baseball Season',
    company: 'Grinnell College Baseball',
    description: 'Heading into my 3rd year season as a middle infielder for the Grinnell College Baseball team, participating in the midwest conference.'
  }
]

function CurrentlySection() {
  return (
    <section id="currently" className="section">
      <div className="section-container">
        <h2 className="section-heading">What I'm Up To Currently</h2>
        <StackedCardCarousel items={activities} />
      </div>
    </section>
  )
}

export default CurrentlySection

