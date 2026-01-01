import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-lg overflow-hidden">
                  <motion.div
                    className="w-full h-full flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-8xl">👨‍💻</div>
                  </motion.div>
                </div>
                <motion.div
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-cyan rounded-full opacity-20 blur-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-text-primary">
                Hi, I'm a Front-End Developer
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                I'm passionate about creating beautiful, interactive, and user-friendly web experiences. 
                With expertise in modern web technologies, I specialize in building responsive applications 
                with stunning 3D animations and smooth interactions.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                My focus is on writing clean, maintainable code while pushing the boundaries of what's 
                possible on the web. I love experimenting with Three.js, WebGL, and modern animation 
                libraries to create immersive digital experiences.
              </p>

              <div className="flex gap-4 pt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-lg hover:bg-accent-cyan/20 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="text-accent-cyan" size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
