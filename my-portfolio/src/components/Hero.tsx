import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa'
import { HiOutlineChevronDown } from 'react-icons/hi'

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-blue-500">Sujitha</span>
          </h1>
          <h2 className="text-2xl md:text-2xl font-semibold mb-6">
             Developer | Builder | Tech Enthusiast
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
           Building modern web applications and innovative digital solutions with clean, scalable code.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border-2 border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
            >
              View My Work
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Sujithakarikalan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/sujitha-karikalan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            {/* <a
              href="/resume.pdf"
              download
              className="text-2xl text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              aria-label="Download Resume"
            >
              <FaFileDownload />
            </a> */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="animate-bounce">
            <HiOutlineChevronDown size={32} className="text-gray-500" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero