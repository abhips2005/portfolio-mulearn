"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, BookOpen } from "lucide-react"

export default function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const education = [
    {
      title: "B.Tech Computer Science",
      institution: "St. Joseph's College of Engineering and Technology, Palai",
      duration: "2024 - Present",
      description:
        "Currently pursuing four year B.Tech Computer Science engineering which definitely enables me to learn new skills and enhance my existing skills.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Higher Secondary Education",
      institution: "St. Augustine's H.S.S. Karimkunnam",
      duration: "2022 - 2024",
      description: "Studied Plus Two (Computer Science Stream) from SAHSS, Karimkunnam.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="education" ref={sectionRef} className="py-24 relative">
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative space-y-8">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800"></div>

            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className={`relative ${index % 2 === 0 ? "md:ml-auto md:mr-10" : "md:mr-auto md:ml-10"} md:w-[calc(50%-40px)] z-10`}
              >
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center bg-slate-900 border-4 border-gray-800">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color}`}></div>
                </div>

                <Card className="overflow-hidden bg-slate-900/60 backdrop-blur border-gray-800 hover:shadow-lg hover:shadow-blue-900/10 transition-all duration-300">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-xl font-bold">
                      <div
                        className={`w-8 h-8 rounded-lg mr-2 flex items-center justify-center bg-gradient-to-r ${item.color}`}
                      >
                        {item.icon}
                      </div>
                      {item.title}
                    </CardTitle>
                    <p className="text-sm text-gray-400 mt-1">{item.duration}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 font-medium">{item.institution}</p>
                    <p className="mt-2 text-gray-400 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

