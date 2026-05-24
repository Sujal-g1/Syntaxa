import { motion } from "framer-motion";
import {
  Brain,
  Bug,
  AlertTriangle,
  Copy,
} from "lucide-react";

export default function LandingPage() {
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
      color: "from-green-500/20 to-emerald-500/20",
      border: "hover:border-green-500/30",
    },
  ];

  return (
    <section className="relative z-10 py-40 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute left-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="absolute right-[-10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Heading */}
        <div className="max-w-4xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="uppercase tracking-[0.35em] text-sm text-cyan-400"
          >
            Why Syntaxa Exists
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-[1.05] mt-8"
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
            className="text-white/50 text-xl leading-relaxed mt-10 max-w-3xl"
          >
            Most coding platforms focus on syntax and quick
            answers. Syntaxa focuses on debugging, reasoning,
            and building real engineering confidence.
          </motion.p>

        </div>

        {/* Interactive Layout */}
        <div className="grid lg:grid-cols-12 gap-8 mt-28">

          {/* LEFT BIG CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              lg:col-span-5
              relative
              rounded-[32px]
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-2xl
              overflow-hidden
              min-h-[500px]
              p-10
            "
          >

            {/* Glow */}
            <div className="absolute top-[-100px] right-[-100px] h-[250px] w-[250px] rounded-full bg-purple-500/20 blur-[120px]" />

            <div className="relative z-10">

              <div className="
                w-16 h-16 rounded-2xl
                flex items-center justify-center
                bg-gradient-to-br from-purple-500/20 to-cyan-500/20
                text-purple-300
              ">
                <Brain size={34} />
              </div>

              <h3
                className="text-4xl font-bold mt-10 leading-tight"
                style={{ fontFamily: "Sora" }}
              >
                AI should guide
                <br />
                students.
              </h3>

              <p className="text-white/50 leading-8 text-lg mt-8">
                Instead of instantly generating solutions,
                Syntaxa teaches debugging, logic building,
                and engineering thinking step-by-step.
              </p>

              {/* Fake AI Chat */}
              <div className="
                mt-14
                rounded-3xl
                border border-white/10
                bg-black/30
                p-6
                space-y-5
              ">

                <div>
                  <p className="text-xs text-white/30 mb-2">
                    USER
                  </p>

                  <div className="bg-white/5 rounded-2xl p-4 text-white/70">
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
                    p-4
                    text-white/70
                    leading-7
                  ">
                    The variable is accessed before it exists.
                    Let's debug it step-by-step together.
                  </div>
                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT GRID */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">

            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                  transition-all
                  ${problem.border}
                `}
              >

                {/* Hover Glow */}
                <div className={`
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                  bg-gradient-to-br ${problem.color}
                `} />

                <div className="relative z-10">

                  {/* Icon */}
                  <div className="
                    w-14 h-14 rounded-2xl
                    flex items-center justify-center
                    bg-white/5
                    text-white
                    mb-8
                  ">
                    {problem.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-semibold leading-tight"
                    style={{ fontFamily: "Sora" }}
                  >
                    {problem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/50 leading-7 mt-5">
                    {problem.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}