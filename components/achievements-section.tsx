"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Target, Briefcase, Award, Calendar } from "lucide-react"

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const achievements = [
    {
      icon: <Award className="h-6 w-6 text-pink-400" />,
      title: "IEEE Web Dev Team Member",
      description: "Active member of the Web Dev Team at IEEE SJCET Palai Campus Chapter",
      date: "2025-Present",
      category: "Community",
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: <Users className="h-6 w-6 text-orange-400" />,
      title: "Co Lead - Mulearn SJCET Campus Chapter",
      description: "Leading and coordinating community initiatives, events, and student engagement at SJCET Palai Campus Chapter",
      date: "2025-Present",
      category: "Leadership",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: <Briefcase className="h-6 w-6 text-indigo-400" />,
      title: "Operations Team Member - UiPath Academic Alliance",
      description: "Contributing to operations and academic initiatives at UiPath Academic Alliance, SJCET Palai",
      date: "2025-Present",
      category: "Operations",
      color: "from-indigo-400 to-purple-500"
    },
    {
      icon: <Trophy className="h-6 w-6 text-yellow-400" />,
      title: "3rd Prize - Web Dev Hackathon",
      description: "Won third place in Web Development Hackathon at Saintgits College, Kottayam",
      date: "2025",
      category: "Competition",
      color: "from-yellow-400 to-amber-500"
    },
    {
      icon: <Users className="h-6 w-6 text-blue-400" />,
      title: "Developer - Permute 2025",
      description: "One of the key developers behind the Permute 2025 flagship event of Mulearn",
      date: "2025",
      category: "Leadership",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Briefcase className="h-6 w-6 text-purple-400" />,
      title: "Internship Mentor",
      description: "Mentored a group of 10 students working on solving real world problems",
      date: "2025",
      category: "Mentoring",
      color: "from-purple-400 to-violet-500"
    },
    {
      icon: <Calendar className="h-6 w-6 text-green-400" />,
      title: "Student Coordinator - Asthra 2025",
      description: "One of the student coordinators of Asthra 2025 - Tech fest of SJCET, Palai",
      date: "2025",
      category: "Leadership",
      color: "from-green-400 to-emerald-500"
    }
  ]

  const communityEngagement = [
    {
      title: "Community Events & Meetups",
      description: "Actively attend most community events and tech meetups to stay connected and updated with the latest trends."
    },
    {
      title: "Hackathons & Open Source Sprints",
      description: "Constantly looking out for hackathons, events, and open-source sprints to contribute and learn."
    },
    {
      title: "Technology Exploration",
      description: "Always exploring new technologies and tools, including AI, to enhance development workflow and stay ahead."
    }
  ]

  const careerGoals = [
    {
      title: "Short-term Goals",
      description: "Keep building unique, impactful projects and contribute actively to open-source communities.",
      icon: <Target className="h-5 w-5 text-blue-400" />
    },
    {
      title: "Long-term Vision",
      description: "Work at an MNC and eventually launch my own tech startup to make a meaningful impact.",
      icon: <Briefcase className="h-5 w-5 text-purple-400" />
    }
  ]

  return (
    <section id="achievements" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 translate-x-1/3 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Achievements & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Leadership</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            My journey in tech leadership, community engagement, and achievements that shaped my growth.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full bg-slate-900/60 backdrop-blur border-gray-800 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 group hover:border-gray-700">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${achievement.color} bg-opacity-20`}>
                      {achievement.icon}
                    </div>
                    <Badge variant="outline" className="border-gray-600 text-gray-300 text-xs">
                      {achievement.date}
                    </Badge>
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">
                    {achievement.title}
                  </CardTitle>
                  <Badge className={`bg-gradient-to-r ${achievement.color} text-white border-0 w-fit text-xs`}>
                    {achievement.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Community Engagement & Career Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Community Engagement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="h-full bg-slate-900/60 backdrop-blur border-gray-800 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2 text-white">
                  <Users className="h-6 w-6 text-blue-400" />
                  <span>Community Engagement</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {communityEngagement.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + 0.1 * index }}
                    className="p-4 bg-slate-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
                  >
                    <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Career Goals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="h-full bg-slate-900/60 backdrop-blur border-gray-800 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2 text-white">
                  <Target className="h-6 w-6 text-purple-400" />
                  <span>Career Vision</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {careerGoals.map((goal, index) => (
                  <motion.div
                    key={goal.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + 0.1 * index }}
                    className="p-4 bg-slate-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="mt-1">{goal.icon}</div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">{goal.title}</h4>
                        <p className="text-gray-400 text-sm">{goal.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Kerala Tech Ecosystem Insight */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="p-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-700/50 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                  <div className="relative z-10">
                    <h4 className="font-semibold text-blue-300 mb-3 flex items-center">
                      <span className="text-2xl mr-2">"</span>
                      Kerala Tech Ecosystem Vision
                    </h4>
                    <p className="text-gray-300 text-sm italic leading-relaxed">
                      Kerala has a vibrant and growing tech community that is often underestimated. With a high literacy rate and strong educational foundation, the state produces technically skilled graduates every year. I believe with the right collaboration between students, professionals, institutions, and government, Kerala can become one of India's top startup and innovation hubs in the coming decade.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-blue-400 font-medium">— Abhijith S.</span>
                      <div className="flex space-x-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div key={i} className="w-1 h-1 bg-blue-400 rounded-full"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
