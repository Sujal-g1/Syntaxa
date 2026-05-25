import { motion } from "framer-motion";

export default function IdePreviewSection() {
  return (
    <section className="relative z-10 py-40 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-[20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="absolute bottom-[10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[160px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-4xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="uppercase tracking-[0.35em] text-sm text-cyan-400"
          >
            IDE EXPERIENCE
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-[1.05] mt-8"
            style={{ fontFamily: "Sora" }}
          >
            An IDE that
            <br />

            <span className="bg-gradient-to-r from-[#9b8cff] via-[#7ea6ff] to-[#70ffd4] bg-clip-text text-transparent">
              teaches.
            </span>

            <br />

            Not just executes.
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
            Syntaxa combines intelligent debugging,
            visual execution flow, and AI-guided learning
            into one immersive engineering workspace.
          </motion.p>

        </div>

        {/* IDE WINDOW */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
            mt-28
            relative
            rounded-[40px]
            border border-white/10
            bg-[#070b14]/90
            backdrop-blur-2xl
            overflow-hidden
            shadow-[0_0_100px_rgba(0,0,0,0.5)]
          "
        >

          {/* Top Bar */}
          <div className="
            h-16
            border-b border-white/10
            flex items-center justify-between
            px-6
            bg-white/[0.02]
          ">

            {/* Left */}
            <div className="flex items-center gap-3">

              <div className="w-3 h-3 rounded-full bg-red-400" />

              <div className="w-3 h-3 rounded-full bg-yellow-400" />

              <div className="w-3 h-3 rounded-full bg-green-400" />

            </div>

            {/* Center */}
            <div className="
              text-sm text-white/40
              border border-white/10
              rounded-xl
              px-4 py-2
              bg-black/20
            ">
              main.py
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">

              <div className="
                px-3 py-1 rounded-lg
                bg-cyan-500/10
                border border-cyan-500/20
                text-cyan-300 text-xs
              ">
                AI ACTIVE
              </div>

            </div>

          </div>

          {/* Main Workspace */}
          <div className="grid lg:grid-cols-12 min-h-[700px]">

            {/* Sidebar */}
            <div className="
              lg:col-span-1
              border-r border-white/10
              bg-white/[0.02]
              p-4
              flex flex-col items-center gap-5
            ">

              {[1,2,3,4,5].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{
                    scale: 1.1,
                  }}
                  className="
                    w-12 h-12 rounded-2xl
                    bg-white/5
                    border border-white/10
                  "
                />
              ))}

            </div>

            {/* Code Editor */}
            <div className="
              lg:col-span-7
              border-r border-white/10
              p-8
              relative
              overflow-hidden
            ">

              {/* Fake Cursor Glow */}
              <motion.div
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                  absolute top-[30%] left-[40%]
                  h-[300px] w-[300px]
                  rounded-full
                  bg-cyan-500/10
                  blur-[120px]
                "
              />

              {/* Line Numbers */}
              <div className="flex">

                <div className="
                  pr-6
                  text-white/20
                  text-sm
                  leading-9
                  select-none
                ">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <div key={i}>
                      {i + 1}
                    </div>
                  ))}
                </div>

                {/* Code */}
                <div className="
                  font-mono
                  text-sm
                  leading-9
                  text-white/80
                  flex-1
                ">

                  <div>
                    <span className="text-purple-400">
                      def
                    </span>{" "}

                    <span className="text-cyan-300">
                      calculate_total
                    </span>

                    (items):
                  </div>

                  <div className="ml-8 text-white/50">
                    total = 0
                  </div>

                  <div className="ml-8 text-white/50">
                    for item in items:
                  </div>

                  <div className="ml-16 text-white/50">
                    total += item.price
                  </div>

                  <div className="ml-8 text-white/50">
                    return total
                  </div>

                  {/* Error Box */}
                  <motion.div
                    animate={{
                      borderColor: [
                        "rgba(239,68,68,0.2)",
                        "rgba(239,68,68,0.6)",
                        "rgba(239,68,68,0.2)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="
                      mt-8
                      rounded-2xl
                      border
                      bg-red-500/10
                      p-5
                      text-red-300
                    "
                  >
                    Warning:
                    Possible undefined variable access.
                  </motion.div>

                </div>

              </div>

            </div>

            {/* AI PANEL */}
            <div className="
              lg:col-span-4
              p-6
              flex flex-col
              gap-6
              bg-white/[0.02]
            ">

              {/* AI CHAT */}
              <div className="
                rounded-3xl
                border border-white/10
                bg-black/20
                p-5
              ">

                <div className="flex items-center justify-between mb-5">

                  <p className="text-sm text-cyan-300">
                    SYNTAXA AI
                  </p>

                  <motion.div
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                    className="
                      w-2 h-2 rounded-full
                      bg-green-400
                    "
                  />

                </div>

                <div className="space-y-5">

                  <div className="
                    rounded-2xl
                    bg-white/5
                    p-4
                    text-white/60
                    text-sm
                  ">
                    Why does this loop fail?
                  </div>

                  <div className="
                    rounded-2xl
                    bg-cyan-500/10
                    border border-cyan-500/20
                    p-4
                    text-white/70
                    text-sm
                    leading-7
                  ">
                    The variable may become undefined
                    when the array is empty.

                    <br />
                    <br />

                    Let's debug this step-by-step.
                  </div>

                </div>

              </div>

              {/* VISUAL DEBUG */}
              <div className="
                rounded-3xl
                border border-white/10
                bg-black/20
                p-5
              ">

                <p className="text-sm text-purple-300 mb-5">
                  EXECUTION FLOW
                </p>

                <div className="space-y-4">

                  {[100, 75, 40].map((width, index) => (
                    <div
                      key={index}
                      className="
                        h-3 rounded-full
                        bg-white/5
                        overflow-hidden
                      "
                    >

                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: `${width}%`,
                        }}
                        transition={{
                          duration: 1,
                          delay: index * 0.2,
                        }}
                        className="
                          h-full
                          rounded-full
                          bg-gradient-to-r
                          from-purple-500
                          to-cyan-500
                        "
                      />

                    </div>
                  ))}

                </div>

              </div>

              {/* TERMINAL */}
              <div className="
                flex-1
                rounded-3xl
                border border-white/10
                bg-black/40
                p-5
                font-mono
                text-sm
                text-green-400
              ">

                <div>
                  $ python main.py
                </div>

                <div className="mt-3 text-white/40">
                  Running debugger...
                </div>

                <motion.div
                  animate={{
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                  className="mt-3"
                >
                  _
                </motion.div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}