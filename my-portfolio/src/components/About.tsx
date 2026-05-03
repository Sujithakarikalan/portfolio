import { motion } from 'framer-motion'
import { FaCode, FaServer, FaMobileAlt, FaLaptopCode, FaDatabase } from 'react-icons/fa'
import { Skill } from '../types';

import.meta.env.BASE_URL


const skills: Skill[] = [
  { 
    name: 'Frontend', 
    icon: <FaCode />, 
    description: 'HTML, CSS, JavaScript, React.js' 
  },

  {
    name: 'Backend', 
    icon: <FaServer />,
    description: 'Node.js, Express.js, Python, Flask' 
  },

  { 
    name: 'Programming', 
    icon: <FaLaptopCode />,
    description: 'Python, JavaScript, C,Java' 
  },

  { 
    name: 'Tools & Database', 
    icon: <FaDatabase />,
    description: 'MongoDB, MySQL, Git, GitHub' 
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
  I'm a passionate Computer Science student and developer focused on building modern web applications, solving real-world problems, and continuously expanding my skills in full stack development and emerging technologies.
</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            
             <div className="w-full max-w-sm mx-auto h-[500px] rounded-lg overflow-hidden">
  {/* <img
    src="/portfolio/images/your-photo.jpeg"
    alt="Sujitha"
    className="w-full h-full object-cover"
    style={{ objectPosition: "center top" }}
  /> */}
  <img
  src={`${import.meta.env.BASE_URL}images/your-photo.jpeg`}
  alt="Sujitha"
  className="w-full h-full object-cover"
/>
</div>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">My Skills</h3>
            <div className="space-y-6">
              {skills.map((skill: Skill, index: number) => (
                <div key={index} className="flex items-start">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-500 dark:text-blue-400 mr-4">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{skill.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About