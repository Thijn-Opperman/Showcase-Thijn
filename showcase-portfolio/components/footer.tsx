"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/thijnopperman",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/thijnopperman",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:thijnopperman@example.com",
    },
  ]

  return (
    <footer id="contact" className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Let's work together
            </h2>
            <p className="text-lg text-background/80">
              Have a project in mind? I'd love to hear from you.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 transition-colors flex items-center justify-center"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>

          <div className="pt-8 border-t border-background/20">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Thijn Opperman. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
