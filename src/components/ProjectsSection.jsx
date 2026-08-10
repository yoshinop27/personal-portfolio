const projects = [
  {
    id: 1,
    title: 'Baseball Trainer',
    description: 'An AI-powered baseball swing analysis platform that uses computer vision to analyze player swings and provide detailed biomechanical feedback. The system processes video frames through OpenRouter for advanced analysis, then leverages Google Gemini to generate personalized coaching recommendations. With ElevenLabs integration, players receive feedback through a personalized voiceover coach. The app also integrates Blast Motion sensors to capture real-time swing data including bat speed, exit velocity, and launch angle, rendering live results directly in the application.',
    tech: ['TypeScript', 'Python', 'Next.js', 'React', 'Flask', 'MediaPipe', 'YOLOv8', 'MongoDB', 'Auth0'],
    links: [
      { url: 'https://github.com/Joshober/BaseballTrainer', text: 'Code' },
      { url: 'https://www.youtube.com/watch?si=WKC8uiCeAcxs5NuP&v=BW7HCys3e5g&feature=youtu.be', text: 'Demo' }
    ]
  },
  {
    id: 2,
    title: 'Digital Fridge',
    description: 'A smart inventory management application designed to make it easier to manage food inventory and make healthier dietary choices. The app uses Claude AI and AWS Bedrock to provide intelligent meal recommendations based on available ingredients and nutritional goals. With AWS cloud storage integration, users can seamlessly track their inventory, receive personalized meal suggestions, and maintain better control over their food consumption and health.',
    tech: ['React', 'AWS', 'Claude AI', 'Bedrock'],
    links: [
      { url: 'https://github.com/yoshinop27/Dubhacks-2025', text: 'Code' },
      { url: 'https://vimeo.com/1128650588?fl=pl&fe=sh', text: 'Demo' }
    ]
  },
  {
    id: 3,
    title: 'CUDA Stock Forecasting',
    description: 'A high-performance parallel stock forecasting system using CUDA for GPU acceleration. This final project for my Operating Systems class leverages parallel computing to perform real-time stock market analysis and predictions, dramatically reducing computation time through GPU parallelization.',
    tech: ['CUDA', 'C++', 'Parallel Computing', 'GPU'],
    links: []
  }
]

function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="section-container">
        <h2 className="section-heading">Projects</h2>
        <div className="entry-list">
          {projects.map((project) => (
            <div key={project.id}>
              <h3 className="entry-title">{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list">{project.tech.join(', ')}</div>
              {project.links.length > 0 && (
                <div className="entry-links">
                  {project.links.map((link) => (
                    <a key={link.text} href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
