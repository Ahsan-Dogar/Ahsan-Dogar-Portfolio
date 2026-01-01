import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, GraduationCap } from 'lucide-react'

const experiences = [
  {
    type: 'work',
    title: 'Senior Front-End Developer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: 'Leading the development of modern web applications with React, TypeScript, and Three.js. Implementing 3D visualizations and interactive features.',
    skills: ['React', 'TypeScript', 'Three.js', 'Next.js'],
  },
  {
    type: 'work',
    title: 'Front-End Developer',
    company: 'Digital Agency',
    period: '2020 - 2022',
    description: 'Built responsive websites and web applications for various clients. Focused on performance optimization and user experience.',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    type: 'education',
    title: 'Computer Science Degree',
    company: 'University',
    period: '2016 - 2020',
    description: 'Bachelor of Science in Computer Science with focus on web technologies and software engineering.',
    skills: ['Algorithms', 'Data Structures', 'Web Development', 'Software Engineering'],
  },
  {
    type: 'work',
    title: 'Junior Web Developer',
    company: 'Startup',
    period: '2019 - 2020',
    description: 'Developed and maintained company website and internal tools. Collaborated with designers to implement pixel-perfect UIs.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
]

function ExperienceItem({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const isLeft = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex gap-8 items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
        <motion.div
          className="bg-secondary rounded-lg p-6 hover:bg-secondary/80 transition-colors"
          whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)' }}
        >
          <div className="flex items-center gap-2 mb-2" style={{ justifyContent: isLeft ? 'flex-end' : 'flex-start' }}>
            {experience.type === 'work' ? (
              <Briefcase className="text-accent-cyan" size={20} />
            ) : (
              <GraduationCap className="text-accent-purple" size={20} />
            )}
            <span className="text-text-secondary text-sm">{experience.period}</span>
          </div>
          <h3 className="text-xl font-bold text-text-primary mb-1">{experience.title}</h3>
          <p className="text-accent-cyan font-semibold mb-3">{experience.company}</p>
          <p className="text-text-secondary mb-4">{experience.description}</p>
          <div className="flex flex-wrap gap-2" style={{ justifyContent: isLeft ? 'flex-end' : 'flex-start' }}>
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs bg-accent-purple/20 text-accent-purple rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative">
        <motion.div
          className="w-4 h-4 bg-accent-cyan rounded-full"
          whileInView={{ scale: [0, 1.5, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        />
        <motion.div
          className="absolute top-4 left-1/2 w-0.5 h-32 bg-accent-cyan/30 -translate-x-1/2"
          initial={{ height: 0 }}
          whileInView={{ height: index === experiences.length - 1 ? 0 : 128 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        />
      </div>

      <div className="flex-1" />
    </motion.div>
  )
}

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>

          <div className="space-y-0">
            {experiences.map((experience, index) => (
              <ExperienceItem key={index} experience={experience} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
