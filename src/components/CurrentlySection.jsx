import { useState } from 'react'
import StackedCardCarousel from './StackedCardCarousel'

const activities = [
  {
    id: 1,
    image: 'photos/johndeere.jpg',
    title: 'Software Engineer',
    company: 'John Deere',
    description: 'Creating web apps to provide solutions to internal customers using TypeScript, React, Next.js, SQL with a focus on test-driven development'
  },
  {
    id: 2,
    image: 'photos/iowa.png',
    title: 'Research Assistant',
    company: 'University of Iowa',
    description: 'Researching GRPO algorithm in the context of reinforcement learning in the AI training process'
  },
  {
    id: 3,
    image: 'photos/baseball.jpg',
    title: 'Varsity Athlete',
    company: 'Grinnell College Baseball',
    description: '3rd year middle infielder competing at the collegiate level'
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

