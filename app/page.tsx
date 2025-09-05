"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Shield,
  Code,
  Palette,
  MessageCircle,
  Mail,
  QrCode,
  ExternalLink,
  Terminal,
  Zap,
  Lock,
  Eye,
  Cpu,
  Database,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  TrendingUp,
  Menu,
  X,
  Settings,
  ChevronLeft,
  ChevronRight,
  User,
} from "lucide-react"

export default function EncryptedJockeyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })
  const [activeService, setActiveService] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Service Inquiry: ${formData.service}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    window.location.href = `mailto:rnbdmn311@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleStartProject = () => {
    window.open(
      "https://wa.me/6287797937519?text=Hi, I'm interested in starting a new project with ENCRYPTED JOCKEY",
      "_blank",
    )
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const services = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "Crafting intuitive and visually stunning user experiences that drive engagement and conversions",
      features: ["User Research & Analysis", "Wireframing & Prototyping", "Design Systems", "Usability Testing"],
      price: "Starting from IDR 150.000",
      timeline: "Depending on request",
      details: {
        process: ["Discovery & Research", "Information Architecture", "Visual Design", "Prototyping & Testing"],
        tools: ["Figma", "Adobe Creative Suite", "Principle", "InVision"],
        deliverables: ["Complete Design System", "Interactive Prototypes", "Style Guide", "Developer Handoff"],
      },
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description: "Building scalable, high-performance web applications with modern technologies and best practices",
      features: ["Full-Stack Development", "API Integration", "Database Design", "Performance Optimization"],
      price: "Starting from IDR 299.000",
      timeline: "Depending on request",
      details: {
        process: ["Architecture Planning", "Frontend Development", "Backend Integration", "Testing & Deployment"],
        tools: ["React/Next.js", "Node.js", "TypeScript", "PostgreSQL"],
        deliverables: ["Production-Ready Application", "Admin Dashboard", "API Documentation", "Deployment Setup"],
      },
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Penetration Testing",
      description:
        "Comprehensive security assessments to identify vulnerabilities and strengthen your digital infrastructure",
      features: ["Vulnerability Assessment", "Network Security", "Web Application Testing", "Compliance Auditing"],
      price: "Starting from IDR 499.000",
      timeline: "Depending on request",
      details: {
        process: ["Reconnaissance", "Vulnerability Analysis", "Exploitation Testing", "Reporting & Remediation"],
        tools: ["Kali Linux", "Burp Suite", "Nessus", "Metasploit"],
        deliverables: ["Detailed Security Report", "Risk Assessment", "Remediation Roadmap", "Executive Summary"],
      },
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Consultant IT",
      description:
        "Strategic IT consulting to optimize your technology infrastructure and drive digital transformation",
      features: ["Technology Strategy", "System Architecture", "Digital Transformation", "IT Process Optimization"],
      price: "Starting from IDR 50.000",
      timeline: "Depending on request",
      details: {
        process: ["Current State Analysis", "Strategy Development", "Implementation Planning", "Monitoring & Support"],
        tools: ["Enterprise Architecture", "Cloud Platforms", "DevOps Tools", "Analytics Platforms"],
        deliverables: ["IT Strategy Document", "Implementation Roadmap", "Best Practices Guide", "Ongoing Support"],
      },
    },
  ]

  const teamMembers = [
    {
      name: "Reno Budiman",
      role: "CyberSecurity + IT Consultant & Web Developer",
      image: "/professional-cybersecurity-consultant.jpg",
      status: "active",
      portfolioUrl: "https://renobmn.vercel.app/", 
    },
    {
      name: "Ghifari Ezra",
      role: "Fullstack Developer",
      image: "/professional-fullstack-developer.jpg",
      status: "active",
      portfolioUrl: "https://portfolio-ghifari-ezra.com", 
    },
    {
      name: "Muhammad Hilmi",
      role: "Fullstack Developer + UI/UX",
      image: "/professional-ui-ux-developer.jpg",
      status: "active",
      portfolioUrl: "https://portfolio-muhammad-hilmi.com", 
    },
    {
      name: "Team Member",
      role: "Coming Soon!",
      image: "/coming-soon-placeholder.jpg",
      status: "coming-soon",
    },
    {
      name: "Team Member",
      role: "Coming Soon!",
      image: "/coming-soon-placeholder.jpg",
      status: "coming-soon",
    },
  ]

  const portfolioItems = [
    {
      title: "FinTech Dashboard",
      category: "Web Development",
      tech: "React, Node.js, PostgreSQL",
      image: "/modern-ecommerce-dashboard.png",
      description: "Complete financial management platform with real-time analytics",
    },
    {
      title: "Enterprise Security Audit",
      category: "Penetration Testing",
      tech: "Security Assessment",
      image: "/cybersecurity-dashboard.png",
      description: "Comprehensive security evaluation for Fortune 500 company",
    },
    {
      title: "SaaS Platform Design",
      category: "UI/UX Design",
      tech: "Figma, Design System",
      image: "/modern-saas-dashboard.png",
      description: "Complete design system and user experience for B2B platform",
    },
    {
      title: "Mobile Banking App",
      category: "UI/UX Design",
      tech: "Mobile Design",
      image: "/mobile-app-interface.png",
      description: "Intuitive mobile banking experience with advanced security features",
    },
  ]

  const testimonials = [
    {
      name: "Ezra Ardian",
      role: "Mahasiswa",
      content:
        "Pembuatan yang cepat, bisa kita full request dengan harga pelajar. Mantap",
      rating: 5,
    },
    {
      name: "Andra Geovani",
      role: "Mahasiswa",
      content: "Pentest nya cepat, dan laporan nya sangat komplit",
      rating: 5,
    },
    {
      name: "Adriana Joesphine",
      role: "Owner Restoran",
      content: "Pembuatan website nya sangat cepat dan fituristik mulai dari design dan pemilihan warna",
      rating: 5,
    },
    {
      name: "David",
      role: "Siswa",
      content: "Konsultasi disini bener bener bikin pandangan terbuka, makasih ya min",
      rating: 5,
    },
    {
      name: "Lisa",
      role: "Mahasiswi",
      content: "Mantap UI/UX nya, ngebantu banget buat bikin project kuliah saya",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-background/95 backdrop-blur-xl border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary flex items-center gap-2">
              <Terminal className="w-8 h-8 text-accent" />
              ENCRYPTED JOCKEY
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {["Services", "Portfolio", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.toLowerCase())
                  }}
                >
                  {item}
                </a>
              ))}
              <Button
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => scrollToSection("contact")}
              >
                Get Started
              </Button>
            </div>

            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-4 pt-4">
                {["Services", "Portfolio", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      setMobileMenuOpen(false)
                      scrollToSection(item.toLowerCase())
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/100 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              Professional Freelance Services
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">ENCRYPTED JOCKEY</h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Delivering exceptional <span className="text-accent font-semibold">UI/UX Design</span>,
              <span className="text-accent font-semibold"> Web Development</span>, and
              <span className="text-accent font-semibold"> Penetration Testing</span> services
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground group"
                onClick={handleStartProject}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-accent/10 bg-transparent"
                onClick={() => scrollToSection("portfolio")}
              >
                <Eye className="w-5 h-5 mr-2" />
                View Portfolio
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border">
              {[
                { number: "50+", label: "Projects Delivered", icon: <CheckCircle className="w-5 h-5" /> },
                { number: "98%", label: "Client Satisfaction", icon: <Star className="w-5 h-5" /> },
                { number: "24/7", label: "Support Available", icon: <Users className="w-5 h-5" /> },
                { number: "1.5+", label: "Years Experience", icon: <Award className="w-5 h-5" /> },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center gap-2 text-accent mb-2">
                    {stat.icon}
                    <span className="text-3xl font-bold text-foreground">{stat.number}</span>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 bg-card/50 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <CardTitle className="text-2xl font-bold group-hover:text-accent transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-border">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-muted-foreground">Starting Price</span>
                          <span className="font-bold text-accent">{service.price}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Timeline</span>
                          <span className="font-medium">{service.timeline}</span>
                        </div>
                      </div>

                      <div className="text-accent text-sm font-medium group-hover:translate-x-2 transition-transform flex items-center gap-1">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl bg-background border-border">
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-bold flex items-center gap-3">
                      <div className="text-accent">{service.icon}</div>
                      {service.title}
                    </DialogTitle>
                    <DialogDescription className="text-lg text-muted-foreground">
                      {service.description}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid md:grid-cols-3 gap-8 mt-8">
                    <div>
                      <h4 className="font-bold text-accent mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        Process
                      </h4>
                      <ul className="space-y-3">
                        {service.details.process.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-accent/20 text-accent rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </div>
                            <span className="text-sm">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-accent mb-4 flex items-center gap-2">
                        <Cpu className="w-5 h-5" />
                        Tools & Tech
                      </h4>
                      <ul className="space-y-2">
                        {service.details.tools.map((tool, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-accent mb-4 flex items-center gap-2">
                        <Database className="w-5 h-5" />
                        Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {service.details.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <div className="text-2xl font-bold text-accent mb-1">{service.price}</div>
                        <div className="text-sm text-muted-foreground">Timeline: {service.timeline}</div>
                      </div>
                      <Button
                        className="bg-accent hover:bg-accent/90 text-accent-foreground"
                        onClick={() =>
                          window.open(
                            "https://wa.me/6287797937519?text=Hi, I'm interested in " + service.title,
                            "_blank",
                          )
                        }
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">View Our Team Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet our talented team of professionals and explore their expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className={`group border-border transition-all duration-300 hover:shadow-lg ${
                  member.status === "active"
                    ? "hover:border-accent/50 hover:shadow-accent/10"
                    : "opacity-60 hover:opacity-80"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium text-accent">
                        {member.status === "active" ? "Available" : "Coming Soon"}
                      </span>
                    </div>
                    {member.status === "active" && (
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{member.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{member.role}</p>
                  {member.status === "active" ? (
                    <Button
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group"
                      onClick={() => window.open(member.portfolioUrl, "_blank")}
                    >
                      <User className="w-4 h-4 mr-2" />
                      View Profile
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  ) : (
                    <Button disabled className="w-full bg-transparent" variant="outline">
                      <User className="w-4 h-4 mr-2" />
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:border-accent hover:text-accent group bg-transparent"
              onClick={() =>
                window.open("https://wa.me/6287797937519?text=Hi, I'd like to discuss working with your team", "_blank")
              }
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Our Team
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground">What our clients say about working with us</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="border-border bg-card/50 backdrop-blur-sm max-w-2xl mx-auto">
                      <CardContent className="p-8 text-center">
                        <div className="flex items-center justify-center gap-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                          ))}
                        </div>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                          "{testimonial.content}"
                        </p>
                        <div>
                          <div className="font-semibold text-lg">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="sm"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background/80 backdrop-blur-sm border-border hover:border-accent hover:text-accent"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background/80 backdrop-blur-sm border-border hover:border-accent hover:text-accent"
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-accent" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">Ready to start your project? Let's discuss your needs</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Mail className="w-6 h-6 text-accent" />
                  Send Message
                </CardTitle>
                <CardDescription className="text-base">
                  Fill out the form and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background border-border focus:border-accent"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>
                  <Input
                    placeholder="Service Needed"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                    className="bg-background border-border focus:border-accent"
                  />
                  <Textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-background border-border focus:border-accent min-h-[120px]"
                  />
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Message
                    (Mail Under Maintanance)
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="border-border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MessageCircle className="w-6 h-6 text-accent" />
                    Direct Chat
                  </CardTitle>
                  <CardDescription className="text-base">
                    Chat with us directly on WhatsApp for instant communication
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-2xl font-bold text-accent">Click button below for order!</div>
                    <p className="text-muted-foreground">Available 24/7 for project discussions</p>
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => window.open("https://wa.me/6287797937519", "_blank")}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Fast response time (< 2 hours)",
                      "Transparent pricing & timeline",
                      "Regular project updates",
                      "Post-launch support included",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="payment" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Payment Options</h2>
            <p className="text-xl text-muted-foreground">Secure and flexible payment methods</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <QrCode className="w-6 h-6 text-accent" />
                  QR Code Payment
                </CardTitle>
                <CardDescription className="text-base">
                  Scan the QR code below for quick and secure payment
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-white p-6 rounded-xl inline-block mb-6 shadow-lg">
                  <img src="/QRcode.jpg" alt="Payment QR Code" className="w-48 h-48 mx-auto" />
                </div>
                <p className="text-sm text-muted-foreground">Supports all major digital wallets and banking apps</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Lock className="w-6 h-6 text-accent" />
                  Manual Payment
                </CardTitle>
                <CardDescription className="text-base">
                  Prefer manual payment? Contact us directly for payment details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Get personalized payment instructions and discuss flexible payment terms
                  </p>
                  <Button
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    onClick={() =>
                      window.open(
                        "https://wa.me/6287797937519?text=Hi, I need payment details for my project",
                        "_blank",
                      )
                    }
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Get Payment Details
                  </Button>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-accent">Available Payment Methods:</h4>
                  <ul className="space-y-2">
                    {[
                      "Bank Transfer (Local & International)",
                      "Digital Wallets (GoPay, OVO, DANA)",
                      "Cryptocurrency (BTC, ETH, USDT)",
                      "Flexible Installment Plans",
                    ].map((method, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        {method}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Terminal className="w-6 h-6 text-accent" />
                ENCRYPTED JOCKEY
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Professional freelance services delivering exceptional results in UI/UX Design, Web Development, and
                Penetration Testing.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("https://wa.me/6287797937519", "_blank")}
                  className="border-border hover:border-accent hover:text-accent"
                >
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => (window.location.href = "mailto:rnbdmn311@gmail.com")}
                  className="border-border hover:border-accent hover:text-accent"
                >
                  Email
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#services" className="hover:text-accent transition-colors">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-accent transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-accent transition-colors">
                    Penetration Testing
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-accent transition-colors">
                    Consultant IT
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+62 877-9793-7519</li>
                <li>rnbdmn311@gmail.com</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              | Professional Freelance Services
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
