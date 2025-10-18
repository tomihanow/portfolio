"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Tomás Hanow
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-cyan-300 mb-4 font-light">
            Data Engineer & Technical Solutions Engineer
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto text-balance">
            Turning data into scalable insights through automation, cloud pipelines, and intelligent solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:scale-105"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="block animate-bounce">
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
