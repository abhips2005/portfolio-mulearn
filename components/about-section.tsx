"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Globe, Server } from "lucide-react"
import StatsSection from "./stats-section"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <Card className="p-6 bg-slate-900/60 backdrop-blur border-gray-800 overflow-hidden relative">
              <CardContent className="p-0">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a second-year B.Tech Computer Science student with a keen passion for technology. A self-learner, my love for tech began during upper primary and high school. I chose Computer Science as my stream in higher secondary and have continued my journey into B.Tech.
                </p>
                <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                  Over time, I've learned various programming languages including HTML, CSS, JavaScript, Python, C, and C++. Currently, I am diving deeper into building projects using React frameworks. I enjoy building projects during my free time and am always exploring new technologies and tools — including AI — to enhance my development workflow.
                </p>
                <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                  I believe that <span className="text-blue-400 font-semibold">networking is the key</span> in tech growth. I attend most community events and tech meetups to stay connected and updated.
                </p>
              </CardContent>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-500/10 rounded-full filter blur-2xl"></div>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 mt-8 md:mt-0">
            {[
              {
                icon: <Code className="h-8 w-8 text-blue-400" />,
                title: "Front-End Development",
                description: "Creating responsive and interactive user interfaces with React, HTML, CSS, and JavaScript.",
                color: "from-blue-500 to-blue-300",
              },
              {
                icon: <Server className="h-8 w-8 text-purple-400" />,
                title: "Back-End Development",
                description: "Building robust server-side applications with Python, and exploring modern frameworks.",
                color: "from-purple-500 to-purple-300",
              },
              {
                icon: <Globe className="h-8 w-8 text-cyan-400" />,
                title: "Community Leadership",
                description: "Leading tech initiatives, mentoring students, and contributing to open-source projects.",
                color: "from-cyan-500 to-cyan-300",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <Card className="overflow-hidden bg-slate-900/60 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} bg-opacity-20`}>{item.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <StatsSection />
      </div>
    </section>
  )
}

