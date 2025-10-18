"use client"

import { motion } from "framer-motion"
import { Database, Cloud, Code2, Workflow, BarChart3, Boxes } from "lucide-react"

const skillCategories = [
  {
    title: "Data Engineering",
    icon: Database,
    skills: ["Python", "SQL", "BigQuery", "ETL Pipelines", "Data Modeling"],
    color: "cyan",
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: ["Google Cloud Platform", "Cloud Functions", "Cloud Storage", "Firebase", "Serverless"],
    color: "blue",
  },
  {
    title: "Web Development",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    color: "cyan",
  },
  {
    title: "Analytics & Tracking",
    icon: BarChart3,
    skills: ["Google Analytics 4", "Google Tag Manager", "Adobe Launch", "Apps Script"],
    color: "blue",
  },
  {
    title: "Automation",
    icon: Workflow,
    skills: ["Workflow Automation", "API Integration", "Data Orchestration", "CI/CD"],
    color: "cyan",
  },
  {
    title: "Tools & Platforms",
    icon: Boxes,
    skills: ["Git", "Docker", "Airflow", "dbt", "Looker"],
    color: "blue",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-2 rounded-lg bg-${category.color}-500/10 group-hover:bg-${category.color}-500/20 transition-colors`}
                    >
                      <Icon className={`w-6 h-6 text-${category.color}-400`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
