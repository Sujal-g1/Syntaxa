import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function IntroPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen h-screen overflow-hidden bg-[#0B1020] text-white flex items-center justify-center">
      {/* Homepage-like Background START */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Responsive blurred backgrounds */}
        <div className="absolute w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] bg-blue-600/20 blur-[90px] sm:blur-[140px] md:blur-[180px] rounded-full top-[30%] left-[-20%] md:top-[35%] md:left-[-10%]" />
        <div className="absolute w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[500px] md:h-[500px] bg-purple-500/20 blur-[80px] sm:blur-[120px] md:blur-[180px] rounded-full bottom-[-25%] left-[2%] sm:bottom-[-10%] sm:left-[10%] md:left-[20%]" />
        <div className="absolute w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] bg-green-400/10 blur-[100px] sm:blur-[150px] md:blur-[200px] rounded-full top-[10%] right-[-30%] md:top-[20%] md:right-[-15%]" />
        {/* Gradient Shapes */}
        <div className="absolute bottom-0 left-0 w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-blue-500/40 to-transparent rotate-45 blur-lg sm:blur-xl md:blur-2xl" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-tl from-green-300/20 to-transparent rotate-12 blur-xl sm:blur-2xl md:blur-3xl" />
      </div>
      {/* Homepage-like Background END */}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-3 w-full">
        {/* Main Logo */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.95,
            letterSpacing: "0.6em",
            filter: "blur(12px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            letterSpacing: "0.15em",
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="
            text-4xl
            xs:text-5xl
            sm:text-7xl
            md:text-9xl
            font-semibold
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-purple-400
            via-blue-300
            to-green-300
            drop-shadow-[0_0_35px_rgba(124,92,255,0.35)]
            break-all text-center
          "
          style={{ fontFamily: "Sora" }}
        >
          SYNTAXA
        </motion.h1>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-4 sm:mt-5 tracking-[0.3em] sm:tracking-[0.4em] uppercase text-cyan-400 text-xs sm:text-sm text-center"
        >
          AI Powered Learning IDE
        </motion.p>

        {/* Loading Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
          className="mt-8 sm:mt-16 flex items-center gap-2 sm:gap-3"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
            }}
            className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-purple-400"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              delay: 0.2,
            }}
            className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-cyan-400"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              delay: 0.4,
            }}
            className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-white"
          />
        </motion.div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 2,
            delay: 1.8,
          }}
          className="mt-2 sm:mt-5 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.3em] uppercase text-gray-500 text-center"
        >
          Initializing Workspace
        </motion.p>

        {/* Home Button (Appears after 2.3s) */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 2.3,
          }}
          onClick={() => navigate("/home")}
          className="mt-4 sm:mt-8 px-4 py-1.5 sm:px-6 sm:py-2 text-base sm:text-lg uppercase tracking-wider text-white border border-gray-700 rounded hover:border-purple-500 transition-colors duration-300 flex gap-3 sm:gap-5"
        >
          Start Learning
        </motion.button>
      </div>

      {/* (Optional) Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60" />
    </div>
  );
}

export default IntroPage;