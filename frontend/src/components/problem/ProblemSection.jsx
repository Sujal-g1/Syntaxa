import { motion } from "framer-motion";
import { useState } from "react";
import {
  Brain,
  Bug,
  AlertTriangle,
  Copy,
} from "lucide-react";

export default function ProblemSection() {

    const [activeCard, setActiveCard] = useState(null);

    const problems = [
      {
        title: "Copy-Paste Learning",
        description:
          "Students rely on copied solutions without understanding logic.",
        icon: <Copy size={28} />,
        color: "from-pink-500/20 to-purple-500/20",
        border: "hover:border-pink-500/30",
      },

      {
        title: "Debugging Fear",
        description:
          "Errors become frustrating because debugging is rarely taught properly.",
        icon: <Bug size={28} />,
        color: "from-blue-500/20 to-cyan-500/20",
        border: "hover:border-cyan-500/30",
      },

      {
        title: "AI Dependency",
        description:
          "Modern AI tools solve problems instantly but don't teach reasoning.",
        icon: <Brain size={28} />,
        color: "from-purple-500/20 to-indigo-500/20",
        border: "hover:border-purple-500/30",
      },

      {
        title: "Weak Fundamentals",
        description:
          "Students memorize syntax instead of engineering thinking.",
        icon: <AlertTriangle size={28} />,
        // Corrected green gradient to match the vividness/saturation of the others.
        // tailwind's emerald is a little muted; lime is brighter but too yellow,
        // green-400 and teal-400 work better in the current palette:
        color: "from-green-400/20 to-teal-400/20",
        border: "hover:border-green-400/30",
      },
    ];

  return (
    <section className="relative z-10 py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute left-[-30vw] sm:left-[-10%] top-[20%] h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] rounded-full bg-purple-500/10 blur-[100px] sm:blur-[120px] md:blur-[140px]" />
      <div className="absolute right-[-30vw] sm:right-[-10%] bottom-[10%] h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] rounded-full bg-cyan-500/10 blur-[100px] sm:blur-[120px] md:blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6">
        {/* Top Heading */}
        <div className="max-w-xl sm:max-w-2xl md:max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="uppercase tracking-[0.35em] text-xs xs:text-sm text-cyan-400"
          >
            Why Syntaxa Exists
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.13] md:leading-[1.05] mt-5 sm:mt-8"
            style={{ fontFamily: "Sora" }}
          >
            Students are learning
            <br />
            <span className="bg-gradient-to-r from-[#9b8cff] via-[#7ea6ff] to-[#70ffd4] bg-clip-text text-transparent">
              how to copy.
            </span>
            <br />
            Not how to think.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="text-white/50 text-base xs:text-lg sm:text-xl leading-relaxed mt-6 sm:mt-10 max-w-md sm:max-w-3xl"
          >
            Most coding platforms focus on syntax and quick
            answers. Syntaxa focuses on debugging, reasoning,
            and building real engineering confidence.
          </motion.p>
        </div>

        {/* Interactive Layout */}
        <div className="flex flex-col lg:flex-row gap-8 mt-14 sm:mt-20 md:mt-28 items-stretch">
          {/* LEFT BIG CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`
              w-full
              lg:w-5/12
              flex flex-col
              justify-between
              relative
              rounded-[24px] md:rounded-[32px]
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-2xl
              overflow-hidden
              min-h-[400px] xs:min-h-[500px] sm:min-h-[550px] md:min-h-[650px]
              p-5 xs:p-7 sm:p-8 md:p-10
            `}
          >
            {/* Inner Glow */}
            <div className="absolute top-[-60px] right-[-60px] md:top-[-100px] md:right-[-100px] h-[150px] w-[150px] md:h-[250px] md:w-[250px] rounded-full bg-purple-500/20 blur-[70px] md:blur-[120px]" />

            <div className="relative z-10 flex-1 flex flex-col justify-between">
              <div>
                <div className="
                  w-12 h-12 sm:w-16 sm:h-16 rounded-2xl
                  flex items-center justify-center
                  bg-gradient-to-br from-purple-500/20 to-cyan-500/20
                  text-purple-300
                ">
                  <Brain size={28} className="sm:hidden" />
                  <Brain size={34} className="hidden sm:block" />
                </div>

                <h3
                  className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mt-6 md:mt-10 leading-tight"
                  style={{ fontFamily: "Sora" }}
                >
                  AI should guide
                  <br />
                  students.
                </h3>

                <p className="text-white/50 leading-7 xs:leading-8 text-base xs:text-lg mt-5 xs:mt-7 md:mt-8">
                  Instead of instantly generating solutions,
                  Syntaxa teaches debugging, logic building,
                  and engineering thinking step-by-step.
                </p>
              </div>
              {/* Fake AI Chat */}
              <div className="
                mt-9 xs:mt-12 md:mt-14
                rounded-2xl md:rounded-3xl
                border border-white/10
                bg-black/30
                p-4 xs:p-6
                space-y-4 xs:space-y-5
              ">
                <div>
                  <p className="text-xs text-white/30 mb-2">
                    USER
                  </p>
                  <div className="bg-white/5 rounded-2xl p-3 xs:p-4 text-white/70 text-sm xs:text-base">
                    Why does this loop fail?
                  </div>
                </div>

                <div>
                  <p className="text-xs text-cyan-300 mb-2">
                    SYNTAXA AI
                  </p>
                  <div className="
                    bg-cyan-500/10
                    border border-cyan-500/20
                    rounded-2xl
                    p-3 xs:p-4
                    text-white/70
                    leading-7
                    text-sm xs:text-base
                  ">
                    The variable is accessed before it exists.
                    Let's debug it step-by-step together.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SECTION */}
          <div
            className="w-full lg:w-7/12 relative min-h-[400px] xs:min-h-[500px] sm:min-h-[550px] md:min-h-[650px] flex flex-col"
            onMouseLeave={() => setActiveCard(null)}
          >

            {/* DEFAULT GRID */}
            {activeCard === null ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 h-full">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    layout
                    whileHover={{
                      y: -8,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    onMouseEnter={() =>
                      setActiveCard(index)
                    }
                    className={`
                      group
                      relative
                      overflow-hidden
                      rounded-[18px] md:rounded-[28px]
                      border border-white/10
                      bg-white/[0.03]
                      backdrop-blur-xl
                      p-5 xs:p-6 sm:p-8
                      cursor-pointer
                      transition-all
                      h-full
                      ${problem.border}
                    `}
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                  >
                    {/* Hover Glow */}
                    <div className={`
                      absolute inset-0 opacity-0 group-hover:opacity-100
                      transition-opacity duration-500
                      bg-gradient-to-br ${problem.color}
                    `} />

                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        {/* Icon */}
                        <div className="
                          w-10 h-10 sm:w-14 sm:h-14 rounded-2xl
                          flex items-center justify-center
                          bg-white/5
                          text-white
                          mb-5 sm:mb-8
                        ">
                          {problem.icon}
                        </div>

                        {/* Title */}
                        <h3
                          className="text-lg sm:text-2xl font-semibold leading-tight"
                          style={{ fontFamily: "Sora" }}
                        >
                          {problem.title}
                        </h3>

                        {/* Description */}
                        <p className="text-white/50 leading-6 sm:leading-7 mt-3 sm:mt-5 text-base">
                          {problem.description}
                        </p>
                      </div>
                      <div className="
                        text-4xl sm:text-[70px]
                        font-bold
                        text-white/5
                        self-end
                        mt-6 sm:mt-0
                      ">
                        0{index + 1}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              /* EXPANDED MODE */
              <div className="flex flex-col md:flex-row gap-4 h-full min-h-[400px] xs:min-h-[500px] sm:min-h-[550px] md:min-h-[650px]">
                {/* EXPANDED CARD */}
                <motion.div
                  layout
                  initial={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className={`
                    w-full md:flex-[8]
                    relative
                    overflow-hidden
                    rounded-[22px] md:rounded-[32px]
                    border border-white/10
                    bg-white/[0.03]
                    backdrop-blur-2xl
                    p-5 xs:p-6 md:p-10
                    flex flex-col justify-between
                  `}
                  style={{ minHeight: "400px" }}
                >
                  {/* Gradient */}
                  <div className={`
                    absolute inset-0
                    bg-gradient-to-br
                    ${problems[activeCard].color}
                  `} />

                  <div className="
                    relative z-10
                    h-full
                    flex flex-col
                    justify-between
                  ">

                    <div>
                      {/* Icon */}
                      <div className="
                        w-12 h-12 sm:w-16 sm:h-16 rounded-2xl
                        flex items-center justify-center
                        bg-white/10
                        text-white
                      ">
                        {problems[activeCard].icon}
                      </div>

                      {/* Title */}
                      <h3
                        className="text-2xl sm:text-3xl md:text-5xl font-bold mt-6 md:mt-10"
                        style={{ fontFamily: "Sora" }}
                      >
                        {problems[activeCard].title}
                      </h3>

                      {/* Content */}
                      <p className="text-white/70 text-base sm:text-lg md:leading-9 mt-6 sm:mt-10 max-w-lg">
                        {problems[activeCard].description}
                        <br />
                        <br />
                        Syntaxa helps students understand
                        the reasoning behind programming
                        instead of blindly following solutions.
                      </p>
                    </div>

                    {/* Bottom Box */}
                    <div className="
                      border border-white/10
                      rounded-xl md:rounded-2xl
                      bg-black/20
                      p-4 md:p-6
                      mt-6 md:mt-10
                    ">

                      <p className="text-cyan-300 text-xs md:text-sm mb-2 md:mb-3">
                        SYNTAXA INSIGHT
                      </p>

                      <p className="text-white/60 leading-6 md:leading-7 text-sm sm:text-base">
                        Learn debugging, engineering thinking,
                        and problem solving through AI-guided
                        learning.
                      </p>

                    </div>
                  </div>
                </motion.div>

                {/* SMALL VERTICAL CARDS */}
                <div className="flex flex-row md:flex-col gap-4 md:flex-[1.1] w-full md:w-auto min-h-[100px] xs:min-h-[120px] md:min-h-[650px] mt-4 md:mt-0">
                  {problems.map((problem, index) => {
                    if (index === activeCard) return null;
                    return (
                      <motion.div
                        key={index}
                        layout
                        whileHover={{
                          x: 4,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        onMouseEnter={() =>
                          setActiveCard(index)
                        }
                        className="
                          flex-1
                          relative
                          overflow-hidden
                          rounded-[15px] md:rounded-[22px]
                          border border-white/10
                          bg-white/[0.03]
                          backdrop-blur-xl
                          p-3 xs:p-4
                          cursor-pointer
                          min-h-[80px] xs:min-h-[100px] md:min-h-[120px]
                          flex flex-col justify-between
                        "
                      >
                        {/* Mini Gradient */}
                        <div className={`
                          absolute inset-0
                          bg-gradient-to-br ${problem.color}
                          opacity-40
                        `} />

                        <div className="
                          relative z-10
                          h-full
                          flex flex-col
                          justify-between
                        ">
                          <div className="
                            w-8 h-8 sm:w-10 sm:h-10 rounded-xl
                            flex items-center justify-center
                            bg-white/10
                            text-white
                          ">
                            {problem.icon}
                          </div>

                          <div>
                            <h4
                              className="text-xs sm:text-sm font-semibold"
                              style={{ fontFamily: "Sora" }}
                            >
                              {problem.title}
                            </h4>
                            <p className="text-white/40 text-[10px] sm:text-xs mt-1 sm:mt-2 leading-4 sm:leading-5">
                              {problem.description.slice(0, 40)}...
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}