import { Play } from "lucide-react";

import { languages } from "../../constants/languages";

export default function Toolbar({
  language,
  setLanguage,
}) {
  return (
    <div className="
      h-14
      border-b border-white/10
      bg-[#070b14]
      flex items-center justify-between
      px-5
    ">

      {/* LEFT */}
      <div className="flex items-center gap-4">

        <h1 className="
          text-lg font-semibold
        ">
          Syntaxa
        </h1>

        {/* Language Select */}
        <select
          value={language}
          onChange={(e) =>
            setLanguage(e.target.value)
          }
          className="
            bg-[#0d1322]
            border border-white/10
            rounded-lg
            px-3 py-2
            text-sm
            outline-none
          "
        >

          {languages.map((lang) => (
            <option
              key={lang.value}
              value={lang.value}
            >
              {lang.name}
            </option>
          ))}

        </select>

      </div>

      {/* RIGHT */}
      <button className="
        flex items-center gap-2
        px-4 py-2
        rounded-lg
        bg-cyan-500
        hover:bg-cyan-400
        transition-all
      ">

        <Play size={16} />

        Run

      </button>

    </div>
  );
}