"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Automated ETL Pipeline",
    description:
      "Built a scalable ETL pipeline using Python and BigQuery to process millions of records daily, reducing manual data processing time by 90%.",
    tags: ["Python", "BigQuery", "Cloud Functions", "ETL"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Real-time Analytics Dashboard",
    description:
      "Developed a React-based dashboard with real-time data visualization, integrating GA4 and custom tracking for comprehensive business insights.",
    tags: ["React", "Next.js", "GA4", "Data Visualization"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Cloud Data Warehouse",
    description:
      "Architected and implemented a cloud-native data warehouse on GCP, optimizing query performance and reducing costs by 40%.",
    tags: ["BigQuery", "GCP", "SQL", "Data Modeling"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Marketing Automation Platform",
    description:
      "Created an automated marketing data pipeline integrating Adobe Launch, GTM, and custom APIs to streamline campaign tracking and reporting.",
    tags: ["Adobe Launch", "GTM", "Apps Script", "Automation"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Data Quality Framework",
    description:
      "Designed and deployed a comprehensive data quality monitoring system with automated alerts and validation rules for critical data pipelines.",
    tags: ["Python", "Cloud Functions", "Monitoring", "Data Quality"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Serverless API Gateway",
    description:
      "Built a serverless API gateway using Cloud Functions to handle data ingestion from multiple sources with automatic scaling and error handling.",
    tags: ["Cloud Functions", "API", "Serverless", "Node.js"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(0,255,255,0.2)] transition-all duration-300 group flex flex-col"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}
                />
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-3 text-balance">{project.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed flex-1 text-balance">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-cyan-500/10 text-cyan-300 rounded border border-cyan-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
