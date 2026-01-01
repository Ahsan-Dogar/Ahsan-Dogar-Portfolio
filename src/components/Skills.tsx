import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SkillBadge3D from './SkillBadge3D'

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', color: '#61DAFB' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Next.js', color: '#000000' },
      { name: 'Tailwind', color: '#06B6D4' },
    ],
  },
  {
    category: '3D & Animation',
    skills: [
      { name: 'Three.js', color: '#000000' },
      { name: 'Framer Motion', color: '#FF0055' },
      { name: 'WebGL', color: '#990000' },
      { name: 'GSAP', color: '#88CE02' },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', color: '#F05032' },
      { name: 'Vite', color: '#646CFF' },
      { name: 'Figma', color: '#F24E1E' },
      { name: 'Redux', color: '#764ABC' },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto">
            Hover over the skills to see them rotate in 3D
          </p>

          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <h3 className="text-2xl font-bold text-accent-cyan mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                    >
                      <SkillBadge3D skill={skill} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
