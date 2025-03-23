"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Progress } from "@/components/ui/progress"

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const skills = [
    { name: "Python", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "C++", level: 90, color: "from-purple-500 to-pink-500" },
    { name: "HTML", level: 95, color: "from-orange-500 to-red-500" },
    { name: "CSS", level: 95, color: "from-blue-400 to-indigo-500" },
    { name: "SQL", level: 95, color: "from-cyan-500 to-blue-500" },
    { name: "Git", level: 95, color: "from-red-500 to-orange-500" },
    { name: "JavaScript", level: 75, color: "from-yellow-400 to-amber-500" },
    { name: "PHP", level: 75, color: "from-purple-400 to-indigo-500" },
    { name: "C", level: 75, color: "from-blue-500 to-sky-500" },
  ]

  const languages = [
    { name: "Malayalam", level: "Mother tongue", proficiency: 100, color: "from-green-500 to-emerald-500" },
    { name: "English", level: "Expert", proficiency: 95, color: "from-blue-500 to-cyan-500" },
    { name: "Hindi", level: "Intermediate", proficiency: 70, color: "from-orange-500 to-amber-500" },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 translate-x-1/3 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-semibold mb-6 text-center md:text-left"
            >
              Technical Skills
            </motion.h3>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <Progress value={isInView ? skill.level : 0} className="h-2 bg-gray-800" />
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color} -mt-2`}
                    style={{ width: `${isInView ? skill.level : 0}%`, transition: "width 1s ease-in-out" }}
                  ></div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-semibold mb-6 text-center md:text-left"
            >
              Languages
            </motion.h3>
            <div className="space-y-5">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-300">{language.name}</span>
                    <span className="text-gray-400">{language.level}</span>
                  </div>
                  <Progress value={isInView ? language.proficiency : 0} className="h-2 bg-gray-800" />
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${language.color} -mt-2`}
                    style={{ width: `${isInView ? language.proficiency : 0}%`, transition: "width 1s ease-in-out" }}
                  ></div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 p-6 bg-slate-900/60 backdrop-blur border border-gray-800 rounded-lg"
            >
              <h4 className="text-xl font-semibold mb-4">Additional Skills</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Problem Solving",
                  "Team Collaboration",
                  "Responsive Design",
                  "Database Management",
                  "Version Control",
                  "UI/UX Design",
                ].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

