const projects = [
  {
    id: 3,
    title: 'OS Stock Analysis',
    description: 'A high-performance parallel stock forecasting system using CUDA for GPU acceleration. Built as the final project for my Operating Systems class, it leverages parallel computing to perform real-time stock market analysis and predictions, dramatically reducing computation time through GPU parallelization.',
    tech: ['CUDA', 'C++', 'Parallel Computing', 'GPU'],
    links: [
      { url: 'https://github.com/yoshinop27/stock-predictor-213', text: 'Code' }
    ]
  },
  {
    id: 4,
    title: 'DL Stock Predictor',
    description: 'A deep learning model trained to forecast stock price movement from historical market data. Built as a final project, it covers data preprocessing, model training, and evaluation in a Jupyter notebook, with results summarized in an accompanying report.',
    tech: ['Python', 'Deep Learning', 'Jupyter Notebook'],
    links: [
      { url: 'https://github.com/yoshinop27/final', text: 'Code' }
    ]
  },
  {
    id: 5,
    title: 'SoilSense',
    description: 'An AI-powered tool that predicts soil moisture levels to help inform smarter irrigation and farming decisions. Built for an AI challenge, it pairs a Python backend and moisture-prediction model with a React frontend, deployed on Vercel and Railway.',
    tech: ['Python', 'React', 'Machine Learning', 'Vercel', 'Railway'],
    links: [
      { url: 'https://github.com/yoshinop27/ai-challenge-model', text: 'Code' }
    ]
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
