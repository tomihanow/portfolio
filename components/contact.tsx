"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>

          <div className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,255,255,0.1)]">
            <p className="text-lg text-gray-300 text-center mb-8 text-balance">
              I'm always interested in hearing about new opportunities, collaborations, or just chatting about data
              engineering and tech. Feel free to reach out!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="mailto:tomihanow@gmail.com"
                className="flex items-center justify-center gap-3 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/tomashanow"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>

            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/tomashanow"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="mailto:tomihanow@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Send className="w-5 h-5" />
                <span>tomihanow@gmail.com</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
