"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Github, Linkedin, MessageCircle, Download } from "lucide-react"
import Link from "next/link"
import { ParticleCanvas } from "./particle-canvas"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  
  const roles = [
    "B.Tech Computer Science Student",
    "React Developer",
    "Python Enthusiast", 
    "Open Source Contributor",
    "Community Builder",
    "Tech Innovator"
  ]

  useEffect(() => {
    setIsLoaded(true)
    
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleCanvas />

      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
              animate={{
                backgroundPosition: ["0% center", "100% center"],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{
                backgroundSize: "300% 100%",
              }}
            >
              Abhijith S
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6"
            >
              <motion.h2 
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-semibold text-gray-300 h-12 flex items-center justify-center"
              >
                {roles[currentRole]}
              </motion.h2>
              <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                Passionate about building innovative solutions with React, Python, and modern web technologies. Always exploring new tools and AI to enhance development workflows.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <Button
                size="lg"
                className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                asChild
              >
                <Link href="#contact">
                  <span className="relative z-10">Get in Touch</span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-gray-400 text-gray-200 bg-gray-900/40 backdrop-blur-sm hover:bg-gray-800/80 hover:border-gray-300 hover:text-white transition-all duration-300"
              >
                <Link href="#projects">
                  <span>View My Work</span>
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-gray-400 text-gray-200 bg-gray-900/40 backdrop-blur-sm hover:bg-gray-800/80 hover:border-gray-300 hover:text-white transition-all duration-300 group"
              >
                <a href="/resume.pdf" download className="flex items-center space-x-2">
                  <Download className="h-4 w-4 group-hover:animate-bounce" />
                  <span>Resume</span>
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 flex justify-center space-x-4"
            >
              <Link href="https://github.com/abhips2005" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full text-gray-300 hover:text-white hover:bg-gray-800/70 transition-all hover:scale-110 border border-gray-700 hover:border-gray-500">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/abhips1108" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full text-gray-300 hover:text-white hover:bg-gray-800/70 transition-all hover:scale-110 border border-gray-700 hover:border-gray-500">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="http://wa.me/917306289673" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full text-gray-300 hover:text-white hover:bg-gray-800/70 transition-all hover:scale-110 border border-gray-700 hover:border-gray-500">
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <Link href="#about">
            <Button variant="ghost" size="icon" className="rounded-full text-gray-300 hover:text-white hover:bg-gray-800/70 transition-all border border-gray-700 hover:border-gray-500">
              <ChevronDown className="h-6 w-6" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

