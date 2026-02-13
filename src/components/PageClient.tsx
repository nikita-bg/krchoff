"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Gallery from "@/components/Gallery";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { BlogPost } from "@/lib/blog";

export default function PageClient({ posts }: { posts: BlogPost[] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Navbar />
      <main>
        <Hero />
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="h-px w-full bg-border" />
        </div>
        <About />
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="h-px w-full bg-border" />
        </div>
        <Work />
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="h-px w-full bg-border" />
        </div>
        <Gallery />
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="h-px w-full bg-border" />
        </div>
        <Blog posts={posts} />
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="h-px w-full bg-border" />
        </div>
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}
