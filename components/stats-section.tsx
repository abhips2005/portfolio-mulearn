"use client"
import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Users, Trophy, Coffee } from "lucide-react"

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 })
  
  const stats = [
    {
      icon: <Code className="h-8 w-8 text-blue-400" />,
      value: 5,
      label: "Projects Completed",
      suffix: "+",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="h-8 w-8 text-green-400" />,
      value: 650,
      label: "Community Connections",
      suffix: "+",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Trophy className="h-8 w-8 text-yellow-400" />,
      value: 5,
      label: "Leadership Roles",
      suffix: "+",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: <Coffee className="h-8 w-8 text-orange-400" />,
      value: 100,
      label: "Cups of Coffee",
      suffix: "+",
      color: "from-orange-500 to-red-500"
    }
  ]

  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        let startTime: number
        const duration = 2000
        
        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / duration, 1)
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4)
          const currentValue = Math.floor(easeOutQuart * stat.value)
          
          setCounters(prev => {
            const newCounters = [...prev]
            newCounters[index] = currentValue
            return newCounters
          })
          
          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }
        
        // Add delay for staggered animation
        setTimeout(() => {
          requestAnimationFrame(animate)
        }, index * 200)
      })
    }
  }, [isInView])

  return (
    <section ref={sectionRef} className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center bg-slate-900/60 backdrop-blur border-gray-800 hover:border-gray-700 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {counters[index]}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
