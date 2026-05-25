import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import CodeWindow from "./CodeWindow";
import ChatWindow from "./ChatWindow";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {

 const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-6 pt-20 lg:pt-28">

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="inline-flex items-center gap-2 border border-[#7f5cff]/40 bg-[#7f5cff]/10 px-5 py-2 rounded-full text-sm text-[#b9a8ff]"
      >
        Introducing Syntaxa AI
      </motion.div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-10 items-center mt-10">

        {/* LEFT CONTENT */}
        <div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-[-3px]"
          >
            Learn coding
            <br />
            through
            <br />

            <span className="bg-gradient-to-r from-[#9b8cff] via-[#7ea6ff] to-[#70ffd4] bg-clip-text text-transparent">
              understanding
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white/60 text-lg leading-relaxed mt-8 max-w-xl"
          >
            Syntaxa helps students understand errors,
            debug confidently, and build real programming
            skills with AI-guided learning.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center gap-5 mt-10"
          >

            <button
              onClick={() => navigate("/workspace")}
              className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-[1.02] transition"
            >
              Start Learning
            </button>
       

            <button className="flex items-center gap-2 text-white/80 hover:text-white">
              Learn more <ArrowRight size={16} />
            </button>

          </motion.div>

        </div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative h-[600px]"
        >

          <CodeWindow />

          <ChatWindow />

        </motion.div>

      </div>

    </section>
  );
}