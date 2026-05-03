import { useState, useEffect } from 'react'
import { FaMoon, FaSun, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { NavbarProps } from '../types'
const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? darkMode 
          ? 'bg-gray-800/90 backdrop-blur-md py-2 shadow-lg' 
          : 'bg-white/90 backdrop-blur-md py-2 shadow-lg'
        : 'py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* <a href="#" className="text-2xl font-bold font-family-sans text-black dark:text-white">Sujitha.dev</a> */}
        <a href="#" className="text-3xl font-extrabold tracking-tight">
  <span className="text-black dark:text-white">Suji</span>
  <span className="text-blue-500">tha</span>
</a>
        <div className="hidden md:flex space-x-8">
          <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
          <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>
          
          <div className="hidden md:flex space-x-4 ml-4">
            <a href="https://github.com/Sujithakarikalan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/sujitha-karikalan/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:sujikarikalan28@gmail.com" className="hover:text-blue-500 transition-colors">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar