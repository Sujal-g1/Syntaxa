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
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        min-h-[420px]
        p-8
      "
    >

      {/* Gradient Glow */}
      <div className="
        absolute top-[-120px] right-[-120px]
        h-[260px] w-[260px]
        rounded-full
        bg-purple-500/20
        blur-[120px]
      " />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">

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

        {/* Preview UI */}
        <div className="
          mt-10
          rounded-3xl
          border border-white/10
          bg-black/30
          p-6
          space-y-5
        ">

          {type === "error" && (
            <>
              <div className="
                bg-red-500/10
                border border-red-500/20
                rounded-2xl
                p-4
                text-red-300
                text-sm
              ">
                TypeError: variable is undefined
              </div>

              <div className="
                bg-cyan-500/10
                border border-cyan-500/20
                rounded-2xl
                p-4
                text-white/70
                leading-7
              ">
                Syntaxa explains the issue step-by-step
                and teaches how to debug the problem.
              </div>
            </>
          )}

          {type === "patterns" && (
            <>
              <div className="space-y-3">

                <div className="
                  h-4 rounded-full
                  bg-purple-500/20
                  w-[90%]
                " />

                <div className="
                  h-4 rounded-full
                  bg-cyan-500/20
                  w-[70%]
                " />

                <div className="
                  h-4 rounded-full
                  bg-green-500/20
                  w-[85%]
                " />

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