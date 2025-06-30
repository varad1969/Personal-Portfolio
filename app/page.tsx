"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Mail,
  Linkedin,
  GraduationCap,
  Code,
  User,
  FolderOpen,
  MessageCircle,
  ChevronDown,
  Star,
} from "lucide-react"
import { useTheme } from "next-themes"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { name: "Java", level: "Primary Skill", icon: "☕", color: "from-orange-400 to-red-500" },
    { name: "C", level: "Intermediate", icon: "🔧", color: "from-blue-400 to-blue-600" },
    { name: "C++", level: "Intermediate", icon: "⚡", color: "from-purple-400 to-purple-600" },
    { name: "HTML", level: "Proficient", icon: "🌐", color: "from-orange-400 to-orange-600" },
    { name: "CSS", level: "Proficient", icon: "🎨", color: "from-blue-400 to-cyan-500" },
    { name: "JavaScript", level: "Intermediate", icon: "📜", color: "from-yellow-400 to-yellow-600" },
    { name: "MySQL", level: "Intermediate", icon: "🗄️", color: "from-blue-500 to-blue-700" },
  ]

  const projects = [
    {
      title: "Restaurant Management System",
      description:
        "A comprehensive web-based system for managing restaurant operations including order management, menu display, and customer service with interactive user interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      icon: "🍽️",
      gradient: "from-orange-400 via-red-500 to-pink-500",
    },
    {
      title: "Printing Agency Website",
      description:
        "A dynamic web application for a printing agency featuring service showcase, quote requests, customer management, and database integration.",
      technologies: ["HTML", "CSS", "Java", "MySQL"],
      icon: "🖨️",
      gradient: "from-blue-400 via-purple-500 to-purple-600",
    },
  ]

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        ></div>
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-xl border-b border-white/10 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Varad Naik
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {[
                { id: "home", label: "Home", icon: User },
                { id: "about", label: "About", icon: GraduationCap },
                { id: "skills", label: "Skills", icon: Code },
                { id: "projects", label: "Projects", icon: FolderOpen },
                { id: "contact", label: "Contact", icon: MessageCircle },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`group flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:rotate-180"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-purple-400" />
                )}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-white/10 transition-all duration-300 hover:scale-110"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 transition-transform duration-300 rotate-180" />
                ) : (
                  <Menu className="w-5 h-5 transition-transform duration-300" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
        >
          <div className="bg-black/30 backdrop-blur-xl border-t border-white/10">
            <div className="px-4 py-4 space-y-2">
              {[
                { id: "home", label: "Home", icon: User },
                { id: "about", label: "About", icon: GraduationCap },
                { id: "skills", label: "Skills", icon: Code },
                { id: "projects", label: "Projects", icon: FolderOpen },
                { id: "contact", label: "Contact", icon: MessageCircle },
              ].map(({ id, label, icon: Icon }, index) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="animate-slide-down">
                <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-gradient-x">
                    Varad Naik
                  </span>
                </h1>
              </div>
              <div className="animate-slide-up">
                <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Java Developer passionate about <span className="text-purple-400 font-semibold">Web Development</span>{" "}
                  and <span className="text-pink-400 font-semibold">Problem Solving</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40"
              >
                <FolderOpen className="w-5 h-5 mr-2" />
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>

            <div className="animate-bounce mt-12">
              <ChevronDown
                className="w-8 h-8 mx-auto text-purple-400 cursor-pointer hover:text-pink-400 transition-colors duration-300"
                onClick={() => scrollToSection("about")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I am passionate about creating efficient solutions and continuously learning new technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-right">
              <p className="text-lg leading-relaxed text-gray-300">
                I am currently pursuing my degree at{" "}
                <span className="text-purple-400 font-semibold">Sanjay Ghodawat University</span>, where I'm developing
                my skills in software development and computer science.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                My interests span across <span className="text-pink-400 font-semibold">Web Development</span>,{" "}
                <span className="text-purple-400 font-semibold">Java Development</span>, and{" "}
                <span className="text-cyan-400 font-semibold">Problem Solving</span>. I enjoy tackling complex
                challenges and building solutions that make a difference.
              </p>
            </div>

            <div className="animate-slide-left">
              <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-white">
                    <GraduationCap className="w-6 h-6 text-purple-400" />
                    <span>Education</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                      Sanjay Ghodawat University
                    </h4>
                    <p className="text-sm text-gray-400">Currently Pursuing Degree</p>
                  </div>
                  <div className="group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                      Willingdon College, Sangli
                    </h4>
                    <p className="text-sm text-gray-400">12th Grade - 66%</p>
                  </div>
                  <div className="group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                      Patwardhan Highschool, Sangli
                    </h4>
                    <p className="text-sm text-gray-400">10th Grade - 91.20%</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Technologies and programming languages I work with
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="group bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-110 hover:rotate-2 hover:shadow-2xl cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300 group-hover:animate-bounce">
                    {skill.icon}
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {skill.name}
                  </CardTitle>
                  <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {skill.level}
                  </CardDescription>
                </CardHeader>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-500`}
                ></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Some of the projects I've worked on</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-700 transform hover:scale-105 hover:-rotate-1 hover:shadow-2xl cursor-pointer overflow-hidden relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                ></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                      {project.icon}
                    </div>
                    <CardTitle className="text-2xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">
                      {project.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                {/* Animated stars */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Star className="w-5 h-5 text-yellow-400 animate-pulse" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>

          <div className="flex justify-center items-center space-x-12">
            {[
              {
                icon: Github,
                href: "https://github.com/varad1969",
                label: "GitHub",
                color: "hover:text-gray-400",
                bgColor: "hover:bg-gray-400/10",
              },
              {
                icon: Linkedin,
                href: "http://www.linkedin.com/in/varadnaikofficial",
                label: "LinkedIn",
                color: "hover:text-blue-400",
                bgColor: "hover:bg-blue-400/10",
              },
              {
                icon: Mail,
                href: "mailto:naikvarad049@gmail.com",
                label: "Email",
                color: "hover:text-red-400",
                bgColor: "hover:bg-red-400/10",
              },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group p-6 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 ${contact.bgColor} transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 hover:shadow-2xl cursor-pointer`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <contact.icon
                  className={`w-8 h-8 text-gray-300 ${contact.color} transition-all duration-300 group-hover:animate-pulse`}
                />
                <span className="sr-only">{contact.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-xl py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 animate-fade-in">
            © 2024 Varad Naik. Built with <span className="text-purple-400">Next.js</span> and{" "}
            <span className="text-pink-400">Tailwind CSS</span>.
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-down {
          animation: slide-down 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.2s both;
        }
        
        .animate-slide-right {
          animation: slide-right 1s ease-out 0.3s both;
        }
        
        .animate-slide-left {
          animation: slide-left 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.4s both;
        }
      `}</style>
    </div>
  )
}
