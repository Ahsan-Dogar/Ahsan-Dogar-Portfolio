import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import ThreeBackground from './ThreeBackground'

export default function Hero() {
  const handleScroll = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ThreeBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-cyan bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Front-End Developer
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Creating stunning web experiences with modern technologies and 3D animations
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-3 bg-accent-cyan text-background font-semibold rounded-lg hover:bg-accent-cyan/90 transition-all duration-300 shadow-lg hover:shadow-accent-cyan/50"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(6, 182, 212, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-3 bg-transparent border-2 border-accent-purple text-accent-purple font-semibold rounded-lg hover:bg-accent-purple hover:text-background transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.button
          onClick={handleScroll}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.2 }}
        >
          <ArrowDown className="text-accent-cyan" size={32} />
        </motion.button>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}
