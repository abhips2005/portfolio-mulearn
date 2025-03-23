"use client"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"
import { ThemeProvider } from "@/components/theme-provider"
import { MouseCursor } from "@/components/mouse-cursor"
import Navbar from "@/components/navbar"

export default function HomePage() {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <div className="bg-gradient-to-b from-black to-slate-950 min-h-screen text-white overflow-hidden">
        <MouseCursor />
        <Navbar />
        <main className="container mx-auto px-4">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <footer className="py-6 text-center text-sm text-gray-400 border-t border-gray-800 mt-20">
          <p>© {new Date().getFullYear()} Abhijith S. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  )
}

