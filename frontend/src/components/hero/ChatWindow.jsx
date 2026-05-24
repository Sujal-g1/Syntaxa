import { motion } from "framer-motion";

export default function ChatWindow() {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="absolute left-0 bottom-0 w-[420px] bg-[#0b1120]/95 border border-white/10 rounded-2xl shadow-[0_0_60px_rgba(59,130,246,0.25)] overflow-hidden backdrop-blur-xl"
    >

      {/* Header */}
      <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">

        <p className="text-sm text-white/70">
          SYNTAXA AI CHAT
        </p>

        <div className="flex gap-1">

          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />

          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />

          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />

        </div>

      </div>

      {/* Messages */}
      <div className="p-5 space-y-5">

        {/* User */}
        <div>

          <p className="text-xs text-white/40 mb-2">
            USER
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white/80">
            Explain why this function fails.
          </div>

        </div>

        {/* AI */}
        <div>

          <p className="text-xs text-blue-300 mb-2">
            SYNTAXA AI
          </p>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-sm text-white/70 leading-7">

            The issue occurs because the variable
            is accessed before initialization.

            <br />
            <br />

            Try checking whether the value exists
            before looping through it.

          </div>

        </div>

        {/* Input */}
        <div className="border border-white/10 rounded-xl px-4 py-3 bg-black/30 text-white/40 text-sm">
          Ask anything...
        </div>

      </div>

    </motion.div>
  );
}