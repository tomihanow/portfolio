"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-cyan-500/20">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-4">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-cyan-400 fill-cyan-400 animate-pulse" />
            <span>by Tomás Hanow</span>
          </div>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Tomás Hanow. All rights reserved.</p>
          <p className="text-xs text-gray-600 mt-2">Powered by Next.js, Tailwind CSS, and Framer Motion</p>
        </motion.div>
      </div>

      {/* Animated wave effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 animate-pulse" />
    </footer>
  )
}
