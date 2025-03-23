"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Github, Linkedin, ExternalLink } from "lucide-react"
import Link from "next/link"
import { ParticleCanvas } from "./particle-canvas"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleCanvas />

      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl"></div>
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
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">Full Stack Developer</h2>
              <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                Crafting seamless digital experiences with elegant front-end interfaces and robust back-end solutions.
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
                className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
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
                className="border-gray-700 hover:bg-gray-800/50 transition-all duration-300"
              >
                <Link href="#projects">
                  <span>View My Work</span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 flex justify-center space-x-4"
            >
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800/50 transition-all">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800/50 transition-all">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://abhijiths.online" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800/50 transition-all">
                  <ExternalLink className="h-5 w-5" />
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
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800/50 transition-all">
              <ChevronDown className="h-6 w-6" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

