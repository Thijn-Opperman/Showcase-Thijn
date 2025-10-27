"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "#1a3a2f" }}
    >
      {/* Navigation Bar */}
      <nav className="w-full px-8 py-6 border-b border-white/10 backdrop-blur-sm bg-[#1a3a2f]/80">
        <div className="container mx-auto flex justify-end gap-8">
          <a href="#home" className="text-white/90 hover:text-primary transition-colors font-medium">
            Home
          </a>
          <a href="#about" className="text-white/90 hover:text-primary transition-colors font-medium">
            About me
          </a>
          <a href="#services" className="text-white/90 hover:text-primary transition-colors font-medium">
            Projects
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 relative flex items-center">
        {/* Left side - Text and Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 px-8 lg:pl-16 py-20 z-10"
        >
          <h2 className="text-5xl font-bold mb-8 text-white">
            Front-End Developer
          </h2>

          <p className="text-white/80 text-lg mb-8 max-w-md">
            Passionate about creating beautiful, user-friendly web experiences
            through innovative design and clean code.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-medium rounded-lg transition-all hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "#1a3a2f", border: "2px solid #4ecb71" }}
            >
              Contact me
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 font-medium rounded-lg transition-all hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "#4ecb71", color: "#1a3a2f" }}
            >
              Go to my projects
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* Right side - Image with Overlay Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 relative h-screen flex items-center justify-center"
        >
          {/* Overlay Text - Behind the person */}
          <div
            className="absolute text-[120px] lg:text-[180px] font-bold z-0 select-none"
            style={{
              color: "#4ecb71",
              opacity: 0.6,
              textShadow: "0 0 30px rgba(78, 203, 113, 0.5)",
              transform: "rotate(-5deg)",
              left: "20%",
              top: "30%",
            }}
          >
            THIJN
          </div>
          <div
            className="absolute text-[120px] lg:text-[180px] font-bold z-0 select-none"
            style={{
              color: "#4ecb71",
              opacity: 0.6,
              textShadow: "0 0 30px rgba(78, 203, 113, 0.5)",
              transform: "rotate(-5deg)",
              left: "25%",
              top: "50%",
            }}
          >
            OPPERMAN
          </div>

          {/* Profile Image */}
          <div className="relative z-20 w-full max-w-md lg:max-w-lg">
            <Image
              src="/profile.png"
              alt="Thijn Opperman"
              width={600}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Logo and Branding - Bottom Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 right-8 flex items-center gap-3 z-30"
      >
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
          <span className="text-2xl font-bold" style={{ color: "#1a3a2f" }}>
            T
          </span>
        </div>
        <a
          href="https://github.com/thijnopperman"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors"
        >
          <Github className="h-5 w-5" />
          <span className="text-sm">Thijn-Opperman</span>
        </a>
      </motion.div>

      {/* Subtle green glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </section>
  )
}
