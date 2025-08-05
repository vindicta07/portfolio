"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Mail, Github, Linkedin } from "lucide-react"
import teamraw from "../public/TEAM_RAW_LOGO.png"
import leetcode from "../public/icons8-leetcode-96.png"
import emblem from "../public/Emblem.png"
import freshness from "../public/freshness.jpg"
import adobeLogo from "../public/Adobe_Logo.png"
import flipkartLogo from "../public/Flipkart_Logo.png"
import synthMusic from "../public/SynthMusic.jpg"
import browserAIAgents from "../public/Browser_AI_Agents.svg"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <motion.div initial={{ y: -70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="max-w-screen-xl mx-auto px-4 py-8">
          <motion.div
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Hero />
          </motion.div>
          <motion.div
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <IdeasSection />
          </motion.div>
          <motion.div
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

function Header() {
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"])
  const backdropFilter = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(3px)"])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center h-24"
      style={{ backgroundColor, backdropFilter }}
    >
      <motion.nav
        className="flex items-center gap-6 px-6 py-2 bg-white/40 backdrop-blur-sm rounded-full shadow-sm"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.a href="/" className="text-gray-800 px-3 py-1.5 rounded-full" whileHover={{ scale: 1.1 }}>
          Work
        </motion.a>

        <motion.a href="/" className="text-gray-500 px-3 py-1.5 rounded-full" whileHover={{ scale: 1.1 }}>
          Blog
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/vindicta07/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 px-3 py-1.5 rounded-full"
          whileHover={{ scale: 1.5 }}
        >
          <Linkedin className="w-4 h-4" />
        </motion.a>

        <div className="flex items-center gap-4">
          <motion.a
            href="https://github.com/vindicta07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 p-1.5 rounded-full"
            whileHover={{ scale: 1.5 }}
          >
            <Github className="w-4 h-4" />
          </motion.a>

          <motion.a
            href="https://leetcode.com/u/vindicta_07/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 p-1.5 rounded-full"
            whileHover={{ scale: 1.5 }}
          >
            <Image src={leetcode} alt="LeetCode" width={16} height={16} />
          </motion.a>

          <motion.a
            href="mailto:yashpradeeppathak@gmail.com"
            className="text-gray-500 p-1.5 rounded-full"
            whileHover={{ scale: 1.5 }}
          >
            <Mail className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.nav>
    </motion.header>
  )
}

function Hero() {
  return (
    <section className="pt-24 max-w-3xl mx-auto text-center mb-32">
      <p className="text-lg text-gray-800 mb-8 leading-relaxed">
        <b>Yash Pathak</b>, a Mumbai-based Technologist who is passionate about
        crafting intuitive interfaces that
        bridge emerging technologies and the human experience.
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
          Experience: 
          <Image
            src={teamraw}
            alt="TEAM RAW"
            width={60}
            height={30}
            className="rgb"
          />
          <b>PROJECT DEVELOPER,</b>
          <b className ="text-gray-800">TEAM RAW (2023-2026)</b>
        </div>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
          Education: 
          <Image
            src={emblem}
            alt="St. Francis Institute of Technology"
            width={40}
            height={20}
            className="rgb"
          />
          <b>B.TECH Electronics and Telecommunication Engineering,</b>
          <b className="text-gray-800">St. Francis Institute of Technology</b>
        </div>
      </div>

      <motion.a
        href="/YASH_PATHAK_RESUME.pdf" 
        target="_blank"
        rel="noopener noreferrer"
        download="Yash_Pathak_Resume.pdf"
        className="inline-block px-8 py-3 text-sm font-medium text-gray bg-gradient-to-r from-black-500 via-white-500 to-black-500 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        RESUME
      </motion.a>
    </section>
  )
}

function IdeasSection() {
  const ideas = [
    {
      title: "PDF Intelligence Engine - Adobe India Hackathon 2025",
      description: "Advanced document processing system with persona-driven intelligence for intelligent PDF analysis and manipulation using AI/ML techniques.",
      image: adobeLogo,
      githubLink: "https://github.com/vindicta07/adobe-hackathon-pdf-engine"
    },
    {
      title: "FlipCheck - Flipkart Grid 6.0 Hackathon",
      description: "A AI-powered freshness detection system for real-time detection of expired products in retail stores.",
      image: flipkartLogo,
      githubLink: "https://github.com/DeepRock-Dev/FlipCheck"
    },
    {
      title: "AGV - Autonomous Ground Vehicle",
      description: "Autonomous Ground Vehicle with advanced navigation system, featuring intelligent path planning and obstacle avoidance capabilities.",
      image: "https://github.com/vindicta07/AGV/blob/main/files/image3.png?raw=true",
      githubLink: "https://github.com/vindicta07/AGV"
    },
    {
      title: "SynthMusic - GestureCap",
      description: "Innovative system that converts human movements and gestures into music, bridging the gap between physical motion and audio creation.",
      image: synthMusic,
      githubLink: "https://github.com/vindicta07/SynthMusic"
    },
    {
      title: "Browser AI Agents",
      description: "A browser extension that allows users to create and manage AI agents for various tasks, enhancing productivity and automation.",
      image: browserAIAgents,
      githubLink: "https://github.com/vindicta07/travel-concierge-agent",
    },
    {
      title: "Lunar Rover - ISRO IROC 2024",
      description: "A AI-driven Lunar Rover, focusing on autonomous navigation and machine vision equipped with 5-DOF Robotic Arm for Robust Mobility and Object Manipulation.",
      image: "/public/images/next.svg",
    },
  ]

  return (
    <section className="mb-32">
      <h2 className="text-lg font-medium mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ideas.map((idea, index) => (
          <div key={idea.title} className="group">
            <a href={idea.githubLink} target="_blank" rel="noopener noreferrer" className="cursor-pointer block mb-2">
              <div className="relative aspect-video mb-3 rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={idea.image || "/placeholder.svg"}
                  alt={idea.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
                />
              </div>
            </a>
            <h3 className="text-base font-medium text-gray-800 mb-1">{idea.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{idea.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
