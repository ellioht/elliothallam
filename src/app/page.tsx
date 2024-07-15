"use client";

import { BackgroundBeams } from "@/components/aceternity/background-beams";
import Nav from "@/components/nav";
import ProjectCard from "@/components/project-card";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="h-screen flex flex-col overflow-auto">
      <Nav />
      <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 z-[20]">
        <motion.div transition={{ delay: 0 }} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="h-full w-full">
          <ProjectCard />
        </motion.div>
        <motion.div transition={{ delay: 0.2 }} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="h-full w-full">
          <ProjectCard />
        </motion.div>
        <motion.div transition={{ delay: 0.4 }} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="h-full w-full">
          <ProjectCard />
        </motion.div>
        <motion.div transition={{ delay: 0.6 }} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="h-full w-full">
          <ProjectCard />
        </motion.div>
      </div>
      <BackgroundBeams />
    </main>
  );
}
