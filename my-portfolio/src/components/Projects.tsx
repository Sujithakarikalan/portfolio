import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { Project } from '../types'
const projects: Project[] = [
  {
    id: 1,
    title: 'Goal Tracker',
    description: 'A productivity-focused web application designed to help users manage daily tasks, set goals, track progress, prioritize work, and stay organized through an intuitive interface.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Task Management', 'Productivity'],
    image: '/src/images/goal-tracker-project.png',
    github: 'https://github.com/Sujithakarikalan/goal-tracker',
    demo: 'https://sujithakarikalan.github.io/goal-tracker/',
  },
  {
  id: 2,
  title: 'Email Threat Analyzer',
  description: 'A machine learning-based security application that analyzes emails to detect phishing attempts, spam, and potential cyber threats, helping users identify malicious content and improve email safety.',
  tags: ['Python', 'Machine Learning', 'Flask'],
  image: '/src/images/email-threat-analyzer.png',
  github: 'https://github.com/Sujithakarikalan/email-threat-analyzer',
  demo: 'https://email-threat-analyzer.vercel.app/',
},
  // Add more projects as needed
  {
  id: 3,
  title: 'Weather App',
  description:
    'A responsive weather application that provides real-time weather updates, temperature details, and location-based forecasts through an intuitive and user-friendly interface.',
  tags: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
  image: '/src/images/weather-app.png',
  github: 'https://github.com/Sujithakarikalan/weather-app',
  demo: 'https://sujithakarikalan.github.io/weather-app/',
},
]
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      
<div className="h-48 overflow-hidden rounded-t-xl">
  <img
  src={project.image}
  alt={project.title}
  className="w-full h-full object-cover"
/>
</div>
<div className="p-6">
  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
  
  <p className="text-gray-600 dark:text-gray-300 mb-4">
    {project.description}
  </p>

  <div className="flex flex-wrap gap-2 mb-4">
    {project.tags.map((tag) => (
      <span
        key={tag}
        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm rounded-full"
      >
        {tag}
      </span>
    ))}
  </div>

  <div className="flex space-x-4">
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
    >
      <FiGithub className="mr-1" /> Code
    </a>

    {project.demo && (
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
      >
        <FiExternalLink className="mr-1" /> Live Demo
      </a>
    )}
  </div>
</div>


    </motion.div>
  )
}

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects