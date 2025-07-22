"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, Users, Code, Globe } from "lucide-react"
import Image from "next/image"

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const projects = [
    {
      title: "DutyFree",
      description: "A leave letter generator for my college that directly sends it to the college copy shop. Streamlines the process of applying for leaves with automated document generation.",
      image: "/dutyfree.png",
      tech: ["Web Development", "Automation", "College Project"],
      link: "https://nexus.sjcetpalai.ac.in/projects/dutyfree/",
      github: "https://github.com/abhips2005/dutyfree",
      featured: true,
      year: "2024",
      color: "from-emerald-500 to-cyan-500"
    },
    {
      title: "S N Homes",
      description: "A fully-fledged real estate website built using React. Features property listings, search functionality, and modern responsive design for seamless user experience.",
      image: "/sn_homes.png",
      tech: ["React", "Web Development", "Real Estate"],
      link: "https://www.snhomes.in/",
      github: "https://github.com/abhips2005/S-N-Homes-Website",
      featured: true,
      year: "2025",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Quiz Master Live",
      description: "A live quiz platform with anti-cheating and leaderboard features using React + Supabase. Real-time multiplayer quiz experience with comprehensive admin controls.",
      image: "/quiz_master_live.png",
      tech: ["React", "Supabase", "Real-time", "Anti-cheat"],
      link: "https://quiz-master-live.vercel.app/",
      github: "https://github.com/abhips2005/Quiz-Master",
      featured: true,
      year: "2025",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Summarizer Tool",
      description: "My first full project built with Python and Streamlit. Utilizes AI to generate concise summaries from long text inputs with an intuitive web interface.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Python", "Streamlit", "AI", "NLP"],
      link: null,
      github: null,
      featured: false,
      year: "2024",
      color: "from-orange-500 to-red-500"
    }
  ]

  const openSourceProjects = [
    {
      name: "Permute 2025",
      description: "Flagship event website for Mulearn community",
      link: "https://permute.mulearn.org/",
      icon: <Star className="h-4 w-4" />
    },
    {
      name: "DrugFreeKerala",
      description: "Community initiative website for drug awareness",
      link: "https://drugfreekerala.com/",
      icon: <Users className="h-4 w-4" />
    },
    {
      name: "Mulearn Official Website",
      description: "Main website for the Mulearn organization",
      link: "https://mulearn.org/",
      icon: <Globe className="h-4 w-4" />
    },
    {
      name: "Purple Movement",
      description: "Upcoming community website (In Progress)",
      link: null,
      icon: <Code className="h-4 w-4" />
    }
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative">
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents my passion for creating innovative
            solutions and contributing to the tech community.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="overflow-hidden bg-slate-900/60 backdrop-blur border-gray-800 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 h-full group hover:border-gray-700">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="object-cover w-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="flex items-center space-x-2 flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={`bg-gradient-to-r ${project.color} text-white border-0`}>
                      {project.year}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors duration-300">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-2">
                    {project.github && (
                      <Button variant="ghost" size="sm" asChild className="group/button">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4 group-hover/button:text-blue-400 transition-colors" />
                          <span>Code</span>
                        </a>
                      </Button>
                    )}
                    {project.link && (
                      <Button variant="outline" size="sm" asChild className="group/button">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4 group-hover/button:text-purple-400 transition-colors" />
                          <span>Live Demo</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(project => !project.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
            >
              <Card className="overflow-hidden bg-slate-900/60 backdrop-blur border-gray-800 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 h-full group hover:border-gray-700">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors duration-300">{project.title}</CardTitle>
                    <Badge className={`bg-gradient-to-r ${project.color} text-white border-0 ml-2`}>
                      {project.year}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-gray-600 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-2">
                    {project.github && (
                      <Button variant="ghost" size="sm" asChild className="group/button">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4 group-hover/button:text-blue-400 transition-colors" />
                          <span>Code</span>
                        </a>
                      </Button>
                    )}
                    {project.link && (
                      <Button variant="outline" size="sm" asChild className="group/button">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4 group-hover/button:text-purple-400 transition-colors" />
                          <span>Live Demo</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Open Source Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-white">
            Open Source <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Contributions</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {openSourceProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + 0.1 * index }}
              >
                <Card className="p-4 bg-slate-900/40 backdrop-blur border-gray-800 hover:bg-slate-900/60 transition-all duration-300 group hover:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </h4>
                      <p className="text-sm text-gray-400">{project.description}</p>
                    </div>
                    {project.link && (
                      <Button variant="ghost" size="sm" asChild className="opacity-0 group-hover:opacity-100 transition-all">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {!project.link && (
                      <Badge variant="outline" className="border-orange-500 text-orange-400">
                        In Progress
                      </Badge>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

