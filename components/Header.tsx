"use client"

import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      className="py-6"
    >
      <nav className="container mx-auto flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <h1 className="text-2xl font-bold">Yash Pathak</h1>
        </motion.div>
        <motion.ul className="flex space-x-4">
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="#work"
                  className = "px-3 py-1 rounded-md hover:shadow-xl transition-shadow duration-200"
              >Work</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="#about">About</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="#contact">Contact</a>
          </motion.li>
        </motion.ul>
      </nav>
    </motion.header>
  )
}
