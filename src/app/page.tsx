"use client";

import Nav from "@/components/nav";
import FavimakerCard from "@/components/project/favimaker-card";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <main className="h-screen flex flex-col overflow-hidden">
      <ScrollArea className="container h-full">
        <div className="w-full h-full flex flex-col gap-6 pb-10">
          <motion.div
            transition={{ delay: 0 }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full flex flex-col items-center justify-center py-10"
          >
            <h1 className="text-2xl font-semibold">Hi I&apos;m Elliot</h1>
            <h2 className="text-xl font-light">Check out my projects</h2>
          </motion.div>
          <motion.div
            transition={{ delay: 0.2 }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="h-full w-full"
          >
            <FavimakerCard />
          </motion.div>
        </div>
      </ScrollArea>
    </main>
  );
}
