"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="py-20 text-center"
    >
      <h1 className="text-6xl font-bold mb-6">Work Photography in</h1>
      <p className="text-xl max-w-2xl mx-auto mb-8">
        <b>Yash Pathak</b>, a Mumbai-based Technologist who is passionate about
        crafting intuitive interfaces that
        bridge emerging technologies and the human experience.
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl font-semibold"
      >
      </motion.div>
    </motion.section>
  )
}
