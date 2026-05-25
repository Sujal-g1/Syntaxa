import { motion } from "framer-motion";

export default function FeatureCardLarge({
  title,
  description,
  type,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        rotateX: 2,
        rotateY: -2,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        h-full
        p-8
      "
    >

      {/* Animated Gradient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute top-[-120px] right-[-120px]
          h-[260px] w-[260px]
          rounded-full
          bg-purple-500/20
          blur-[120px]
        "
      />

      {/* Noise Overlay */}
      <div className="
        absolute inset-0 opacity-[0.03]
        mix-blend-overlay
      " />

      <div className="relative z-10 h-full flex flex-col justify-between">

        {/* Top */}
        <div>

          <p className="uppercase tracking-[0.3em] text-xs text-cyan-300">
            SYNTAXA FEATURE
          </p>

          <h3
            className="text-4xl font-bold mt-6 leading-tight"
            style={{ fontFamily: "Sora" }}
          >
            {title}
          </h3>

          <p className="text-white/50 leading-8 mt-6 max-w-lg">
            {description}
          </p>

        </div>

        {/* Bottom UI */}
        <div className="
          mt-10
          rounded-3xl
          border border-white/10
          bg-black/30
          p-6
          space-y-5
          relative
          overflow-hidden
        ">

          {/* Moving Shine */}
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute top-0 left-0
              h-full w-[120px]
              bg-white/5
              blur-2xl
              rotate-12
            "
          />

          {type === "error" && (
            <>
              {/* Fake Error */}
              <motion.div
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  bg-red-500/10
                  border border-red-500/20
                  rounded-2xl
                  p-4
                  text-red-300
                  text-sm
                  flex items-center gap-3
                "
              >

                <div className="
                  w-2 h-2 rounded-full bg-red-400
                " />

                TypeError: variable is undefined

              </motion.div>

              {/* AI Explanation */}
              <div className="
                bg-cyan-500/10
                border border-cyan-500/20
                rounded-2xl
                p-4
                text-white/70
                leading-7
                relative
              ">

                Syntaxa explains the issue step-by-step
                and teaches how to debug the problem.

                {/* Blinking Cursor */}
                <motion.span
                  animate={{
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                  className="ml-1 text-cyan-300"
                >
                  |
                </motion.span>

              </div>
            </>
          )}

          {type === "patterns" && (
            <>
              {/* Animated Bars */}
              <div className="space-y-4">

                {[90, 70, 85].map((width, index) => (
                  <div
                    key={index}
                    className="h-3 rounded-full bg-white/5 overflow-hidden"
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

              <div className="
                mt-6
                border border-white/10
                rounded-2xl
                p-4
                text-white/60
                leading-7
              ">
                AI suggests cleaner architecture,
                reusable patterns, and optimized logic.
              </div>
            </>
          )}

        </div>

      </div>

    </motion.div>
  );
}