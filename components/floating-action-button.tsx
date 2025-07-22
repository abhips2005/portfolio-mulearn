"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, Github, Mail, ChevronUp, Phone } from "lucide-react"
import Link from "next/link"

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    {
      icon: <Mail className="h-4 w-4" />,
      label: "Email",
      href: "mailto:abhips1108@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Github className="h-4 w-4" />,
      label: "GitHub",
      href: "https://github.com/abhips2005",
      color: "from-gray-700 to-gray-800"
    },
    {
      icon: <Phone className="h-4 w-4" />,
      label: "Call",
      href: "tel:+917306289673",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <ChevronUp className="h-4 w-4" />,
      label: "Top",
      href: "#",
      color: "from-purple-500 to-purple-600"
    }
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {actions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, y: 20, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: 20, x: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={action.href} target={action.href.startsWith('http') ? '_blank' : undefined}>
                  <Button
                    size="sm"
                    className={`bg-gradient-to-r ${action.color} hover:shadow-lg transition-all duration-300 shadow-xl backdrop-blur text-white border-0`}
                  >
                    {action.icon}
                    <span className="ml-2 text-xs">{action.label}</span>
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-full h-12 w-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300 border-0 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          <MessageCircle className="h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  )
}
