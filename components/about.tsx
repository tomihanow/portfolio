"use client"

import { motion } from "framer-motion"
import { MapPin, Languages, Dumbbell, Gamepad2 } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">About Me</span>
          </h2>

          <div className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)] transition-all duration-500">
            <p className="text-lg text-gray-300 leading-relaxed mb-8 text-balance">
              I'm a Data Engineer and Technical Solutions Engineer at{" "}
              <span className="text-cyan-400 font-semibold">Monks</span> with over 5 years of experience building
              scalable data pipelines, automating workflows, and creating intelligent solutions. I specialize in
              transforming complex data challenges into elegant, automated systems that drive business value.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-medium">Buenos Aires, Argentina</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Languages className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Languages</p>
                  <p className="text-white font-medium">Spanish (Native), English (Fluent)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Dumbbell className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Fitness</p>
                  <p className="text-white font-medium">Gym & Powerlifting Enthusiast</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Gamepad2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Gaming</p>
                  <p className="text-white font-medium">Dota 2, Resident Evil</p>
                </div>
              </div>
            </div>

            <p className="text-gray-400 mt-8 text-balance">
              When I'm not building data pipelines or optimizing cloud infrastructure, you'll find me at the gym pushing
              my limits in powerlifting, or strategizing in Dota 2. I believe in bringing the same dedication and
              problem-solving mindset to both code and life.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
