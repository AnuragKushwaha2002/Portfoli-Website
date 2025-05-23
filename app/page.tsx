// page.tsx
"use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

// Dynamically import LampDemo with SSR disabled
const LampDemo = dynamic(() => import("@/components/ui/lamp").then(mod => mod.LampDemo), { ssr: false });

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <LampDemo />
      </div>
    </main>
  );
};

export default Home;
