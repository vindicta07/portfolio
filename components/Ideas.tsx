"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const ideas = [
  { name: "FlipCheck - Flipkart Grid 6.0 Hackathon", image: "/placeholder.svg?height=100&width=100" },
  { name: "Browser AI Agents", image: "/placeholder.svg?height=100&width=100" },
  { name: "Lunar Rover - ISRO IROC 2024", image: "/placeholder.svg?height=100&width=100" },
]

export default function Ideas() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="py-20"
    >
      <h2 className="text-3xl font-bold mb-8">Ideas</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {ideas.map((idea, index) => (
          <motion.div
            key={idea.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <Image
              src={idea.image || "/placeholder.svg"}
              alt={idea.name}
              width={100}
              height={100}
              className="mx-auto mb-2 rounded-lg"
            />
            <p className="text-sm">{idea.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
