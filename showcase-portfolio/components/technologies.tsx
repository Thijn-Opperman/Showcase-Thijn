"use client"

import { motion } from "framer-motion"

const technologies = [
  { name: "Next.js", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Figma", icon: "🎨" },
  { name: "VS Code", icon: "💻" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Git", icon: "📦" },
  { name: "Node.js", icon: "🟢" },
]

export function Technologies() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-12"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-background transition-colors"
            >
              <span className="text-4xl">{tech.icon}</span>
              <span className="text-sm font-medium text-foreground/70">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
