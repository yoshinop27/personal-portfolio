import StackedCardCarousel from './StackedCardCarousel'

const designs = [
  {
    id: 1,
    image: 'photos/rematch.JPG',
    title: 'Baseball Graphics'
  },
  {
    id: 2,
    image: 'photos/defend-aiea.PNG',
    title: 'Defend Aiea'
  },
  {
    id: 3,
    image: 'photos/cancun.PNG',
    title: 'Travel Graphics'
  }
]

function DesignSection() {
  return (
    <section id="design" className="section">
      <div className="section-container">
        <h2 className="section-heading">Graphic Design</h2>
        <div className="design-intro">
          <p className="text-slate-300">
            In college I recently discovered my passion for art, specifically graphic
            design. On the Grinnell College baseball team I serve as a social media manager
            and graphic design lead, where I am responsible for creating 
            weekly content to upload to our social media accounts. I primarily 
            use Adobe Photoshop and Canva to create graphics while also leveraging 
            various AI tools.
          </p>
        </div>
        <StackedCardCarousel items={designs} cardType="design" />
      </div>
    </section>
  )
}

export default DesignSection
