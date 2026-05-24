import { motion } from "framer-motion";

import FeatureCardLarge from "./FeatureCardLarge";
import FeatureCardSmall from "./FeatureCardSmall";

export default function FeaturesSection() {
  return (
    <section className="relative z-10 py-40 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-[10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-[0%] right-[-10%] h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-4xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="uppercase tracking-[0.35em] text-sm text-cyan-400"
          >
            Features
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-[1.05] mt-8"
            style={{ fontFamily: "Sora" }}
          >
            Built for
            <br />

            <span className="bg-gradient-to-r from-[#9b8cff] via-[#7ea6ff] to-[#70ffd4] bg-clip-text text-transparent">
              learning.
            </span>

            <br />

            Not just coding.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="text-white/50 text-xl leading-relaxed mt-10 max-w-3xl"
          >
            Syntaxa combines AI guidance, visual debugging,
            and interactive engineering workflows into one
            intelligent learning environment.
          </motion.p>

        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-28">

          {/* LEFT SIDE: Error + AI Quiz + Copy Detection + Spacer */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <FeatureCardLarge
              title="AI Error Explanations"
              description="Understand compiler errors with teacher-like AI explanations and guided debugging."
              type="error"
            />

            {/* AI Quiz and Copy Detection below Error Explanations */}
            <div className="flex flex-col lg:flex-row gap-6 mt-8">
              <div className="lg:w-1/2">
                <FeatureCardSmall
                  title="AI Quiz Generator"
                  description="Generate quizzes automatically from code and concepts."
                  type="quiz"
                />
              </div>
              <div className="lg:w-1/2">
                <FeatureCardSmall
                  title="Copy Detection"
                  description="Detect copied code and encourage real understanding."
                  type="copy"
                />
              </div>
            </div>

            {/* Extra section to match right side height */}
            <div className="mt-8">
              <FeatureCardSmall
                title="Learning Insights"
                description="Get progress insights and personalized tips to improve your coding journey."
                type="insights"
              />
            </div>
          </div>

          {/* RIGHT SIDE COLUMN */}
          <div className="lg:col-span-5 flex flex-col gap-6 h-full">

            <FeatureCardSmall
              title="Visual Debugging"
              description="Track variables and execution flow visually."
              type="debug"
            />

            <FeatureCardSmall
              title="Code Complexity"
              description="Analyze code quality and engineering practices."
              type="complexity"
            />

            {/* Pattern Suggestions perfectly aligns with left side's bottom */}
            <div className="flex-1 flex flex-col justify-end">
              <FeatureCardLarge
                title="Pattern Suggestions"
                description="Receive AI-powered architecture and coding improvements."
                type="patterns"
              />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}