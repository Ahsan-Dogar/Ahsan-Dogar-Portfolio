import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with 3D product previews, cart functionality, and secure checkout.',
    image: '🛍️',
    tags: ['React', 'Three.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: '3D Portfolio Website',
    description: 'An interactive portfolio with immersive 3D elements and smooth animations throughout.',
    image: '🎨',
    tags: ['React', 'Three.js', 'Framer Motion', 'TypeScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather application with beautiful UI and animated weather effects.',
    image: '🌤️',
    tags: ['React', 'API', 'Tailwind', 'Chart.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and drag-and-drop functionality.',
    image: '✅',
    tags: ['React', 'Firebase', 'Redux', 'DnD'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'AI Chat Interface',
    description: 'Modern chat interface with AI integration and smooth message animations.',
    image: '💬',
    tags: ['React', 'OpenAI', 'WebSocket', 'Tailwind'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Music Player',
    description: 'Beautiful music player with visualizations and playlist management.',
    image: '🎵',
    tags: ['React', 'Web Audio API', 'Canvas', 'CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative h-96"
      style={{ perspective: '1000px' }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="absolute w-full h-full bg-secondary rounded-lg p-6 flex flex-col items-center justify-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-8xl mb-4">{project.image}</div>
          <h3 className="text-2xl font-bold text-text-primary mb-2">{project.title}</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-accent-cyan/20 text-accent-cyan rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          className="absolute w-full h-full bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-lg p-6 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">{project.title}</h3>
            <p className="text-text-secondary mb-4">{project.description}</p>
          </div>
          <div className="flex gap-4">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg hover:bg-accent-cyan/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              Code
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-accent-cyan text-background rounded-lg hover:bg-accent-cyan/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
              Demo
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto">
            Hover over the cards to see more details
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
