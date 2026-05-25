import { motion } from "framer-motion";

export default function FeatureCardSmall({
  title,
  description,
  type,
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        p-6
        min-h-[240px]
      "
    >

      {/* Gradient */}
      <div className="
        absolute inset-0
        bg-gradient-to-br
        from-purple-500/10
        to-cyan-500/10
        opacity-60
      " />

      <div className="relative z-10 h-full flex flex-col justify-between">

        <div>

          <p className="uppercase tracking-[0.25em] text-[10px] text-cyan-300">
            FEATURE
          </p>

          <h3
            className="text-2xl font-semibold mt-5 leading-tight"
            style={{ fontFamily: "Sora" }}
          >
            {title}
          </h3>

          <p className="text-white/50 leading-7 mt-4">
            {description}
          </p>

        </div>

        {/* Mini Preview */}
        <div className="
          mt-8
          rounded-2xl
          border border-white/10
          bg-black/20
          p-4
        ">

<div className="flex gap-2 mb-4">

<motion.div
  animate={{
    opacity: [0.3, 1, 0.3],
  }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
  }}
  className="w-2 h-2 rounded-full bg-green-400"
/>

<motion.div
  animate={{
    opacity: [0.3, 1, 0.3],
  }}
  transition={{
    duration: 1.5,
    delay: 0.3,
    repeat: Infinity,
  }}
  className="w-2 h-2 rounded-full bg-cyan-400"
/>

<motion.div
  animate={{
    opacity: [0.3, 1, 0.3],
  }}
  transition={{
    duration: 1.5,
    delay: 0.6,
    repeat: Infinity,
  }}
  className="w-2 h-2 rounded-full bg-purple-400"
/>

</div>

          {type === "debug" && (
            <div className="space-y-3">

              <div className="flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-green-400" />

                <div className="h-2 rounded-full bg-green-400/30 w-full" />

              </div>

              <div className="flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-yellow-400" />

                <div className="h-2 rounded-full bg-yellow-400/30 w-[70%]" />

              </div>

              <div className="flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-red-400" />

                <div className="h-2 rounded-full bg-red-400/30 w-[40%]" />

              </div>

            </div>
          )}

          {type === "complexity" && (
            <div className="space-y-4">

              <div>
                <div className="flex justify-between text-xs text-white/40 mb-2">
                  <span>Complexity</span>
                  <span>72%</span>
                </div>

                <div className="h-2 rounded-full bg-white/10 overflow-hidden">

                  <div className="
                    h-full
                    bg-gradient-to-r
                    from-purple-500
                    to-cyan-500
                    w-[72%]
                  " />

                </div>
              </div>

              <div className="text-xs text-white/40">
                AI recommends simplifying nested logic.
              </div>

            </div>
          )}

          {type === "quiz" && (
            <div className="space-y-3 text-sm">

              <div className="text-white/70">
                What causes infinite recursion?
              </div>

              <div className="
                rounded-xl
                bg-white/5
                p-3
                text-white/40
              ">
                Missing base condition
              </div>

            </div>
          )}

          {type === "copy" && (
            <div className="space-y-4">

              <div className="
                rounded-xl
                border border-red-500/20
                bg-red-500/10
                p-3
                text-red-300
                text-sm
              ">
                84% similarity detected
              </div>

              <div className="text-xs text-white/40">
                Encouraging original problem solving.
              </div>

            </div>
          )}

        </div>

      </div>

    </motion.div>
  );
}