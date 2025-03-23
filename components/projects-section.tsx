"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents my passion for creating innovative
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1 lg:col-span-3"
          >
            <Card className="overflow-hidden bg-slate-900/60 backdrop-blur border-gray-800 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 h-full group">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=800"
                  alt="Project JASA"
                  width={800}
                  height={450}
                  className="object-cover w-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-500/30 text-blue-200">AI</span>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-purple-500/30 text-purple-200">
                      PDF Tools
                    </span>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Project JASA - AI PDF Tool</CardTitle>
                <CardDescription className="text-gray-400">2024 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Project JASA is an AI-enabled PDF tool that enables users to upload their PDF documents or even
                  pictures containing text and ask any questions related to that document or image. The tool will
                  respond back with the help of AI.
                </p>
                <p className="mt-2 text-gray-300">
                  This project is in collaboration with Abhijith P and Sreehari Pramod.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <Button variant="ghost" size="sm" className="group/button">
                  <Github className="mr-2 h-4 w-4 group-hover/button:text-blue-400 transition-colors" />
                  <span>Repository</span>
                </Button>
                <Button variant="outline" size="sm" className="group/button">
                  <ExternalLink className="mr-2 h-4 w-4 group-hover/button:text-purple-400 transition-colors" />
                  <span>Live Demo</span>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

