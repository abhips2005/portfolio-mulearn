"use client"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import AchievementsSection from "@/components/achievements-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"
import { ThemeProvider } from "@/components/theme-provider"
import { MouseCursor } from "@/components/mouse-cursor"
import Navbar from "@/components/navbar"
import FloatingActionButton from "@/components/floating-action-button"
import ScrollProgress from "@/components/scroll-progress"
import LoadingScreen from "@/components/loading-screen"

export default function HomePage() {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <LoadingScreen />
      <div className="bg-gradient-to-b from-black to-slate-950 min-h-screen text-white overflow-hidden">
        <ScrollProgress />
        <MouseCursor />
        <Navbar />
        <FloatingActionButton />
        <main className="container mx-auto px-4">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <AchievementsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <footer className="relative py-12 mt-20 border-t border-gray-800 bg-slate-950/80 backdrop-blur">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-pink-900/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Abhijith S.
                </h3>
                <p className="text-gray-400 text-sm">
                  B.Tech Computer Science Student passionate about building innovative solutions and contributing to the tech community.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                <div className="space-y-2">
                  {['About', 'Projects', 'Skills', 'Achievements', 'Contact'].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Connect</h4>
                <div className="space-y-2">
                  <a
                    href="https://github.com/abhips2005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href="mailto:abhips1108@gmail.com"
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Email
                  </a>
                  <a
                    href="https://abhijiths.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Portfolio
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-sm text-gray-400">
                  © {new Date().getFullYear()} Abhijith S. All rights reserved.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-gray-500">Built with</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-blue-400">React</span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-purple-400">Next.js</span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-cyan-400">Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

