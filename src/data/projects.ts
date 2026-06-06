import adobeLogo from "@/assets/ADOBE_LOGO.png";
import flipkartLogo from "@/assets/Flipkart_Logo.png";
import agvImage from "@/assets/AGV.png";
import synthMusicImage from "@/assets/SynthMusic.jpg";
import autivusImage from "@/assets/AUTIVUS.png";
import bmsImage from "@/assets/main_page.png";
import bmsReport from "@/assets/G3_BMS_RPT.pdf";

export interface Project {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
  longDescription: string;
  projectUrl?: string;
  repoUrl?: string;
  reportUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "bms",
    title: "BMS",
    imageUrl: bmsImage,
    imageAlt: "BMS Dashboard",
    description: "Full-stack real-time battery monitoring platform with MQTT integration, Next.js 14 frontend, and Django REST API backend.",
    longDescription: "A full-stack real-time battery monitoring platform with MQTT integration, Next.js 14 frontend, and Django REST API backend. Monitor battery stations, track health metrics, receive alerts, and analyze historical data with a clean light/dark theme.",
    projectUrl: "https://vindicta07.github.io/bms/",
    reportUrl: bmsReport
  },
  {
    id: "autivus-ai",
    title: "AUTIVUS.AI",
    imageUrl: autivusImage,
    imageAlt: "AUTIVUS.AI Dashboard",
    description: "Orchestrate multi-agent AI workflows to automate software development. Watch agents collaborate, write code, and deliver.",
    longDescription: "An AI orchestration platform designed to automate end-to-end software development workflows using multi-agent systems. Autivus coordinates specialized agents to plan tasks, write code, run tests, and deploy production-ready applications through collaborative AI workflows.",
    projectUrl: "https://vindicta07.github.io/autivus/"
  },
  {
    id: "pdf-intelligence-engine",
    title: "PDF Intelligence Engine",
    imageUrl: adobeLogo,
    imageAlt: "PDF Intelligence Engine Logo",
    description: "Adobe India Hackathon 2025. Advanced document processing system with persona-driven intelligence for PDF analysis and manipulation.",
    longDescription: "An advanced document processing system built for the Adobe India Hackathon 2025. Features persona-driven intelligence, allowing users to analyze, extract, and manipulate PDF documents using state-of-the-art AI/ML techniques. Highly optimized pipeline for intelligent document understanding.",
    repoUrl: "https://github.com/vindicta07/adobe-hackathon-pdf-engine"
  },
  {
    id: "flipcheck",
    title: "FlipCheck",
    imageUrl: flipkartLogo,
    imageAlt: "FlipCheck Logo",
    description: "Flipkart Grid 6.0 Hackathon. An AI-powered freshness detection system for real-time detection of expired products in retail stores.",
    longDescription: "Developed for the Flipkart Grid 6.0 Hackathon, FlipCheck is an AI-powered quality and freshness detection system. It monitors retail shelves in real-time to identify expired, damaged, or fresh produce, helping automate inventory control and quality assurance in modern retail stores.",
    repoUrl: "https://github.com/DeepRock-Dev/FlipCheck"
  },
  {
    id: "agv",
    title: "AGV - Autonomous Ground Vehicle",
    imageUrl: agvImage,
    imageAlt: "Autonomous Ground Vehicle Showcase",
    description: "Autonomous Ground Vehicle with advanced navigation system, featuring intelligent path planning and obstacle avoidance.",
    longDescription: "An Autonomous Ground Vehicle (AGV) platform integrated with an advanced navigation stack. It utilizes intelligent path planning algorithms and obstacle avoidance protocols to traverse complex environments dynamically and safely, bridging the gap between software algorithms and hardware execution.",
    repoUrl: "https://github.com/vindicta07/AGV"
  },
  {
    id: "synthmusic",
    title: "SynthMusic - GestureCap",
    imageUrl: synthMusicImage,
    imageAlt: "SynthMusic Showcase",
    description: "Innovative system that converts human movements and gestures into music, bridging physical motion and audio creation.",
    longDescription: "An interactive sensor and camera-based system that captures human physical gestures and movements in real-time, translating them into dynamic electronic music. By bridging physical motion and audio synthesis, it creates a brand new immersive performance interface for musicians and creators.",
    repoUrl: "https://github.com/vindicta07/SynthMusic"
  }
];
