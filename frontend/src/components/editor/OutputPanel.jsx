export default function OutputPanel({
    output,
  }) {
    return (
      <div className="
        h-[180px]
        border-t border-white/10
        bg-black
        p-5
        overflow-auto
        font-mono
        text-sm
      ">
  
        <p className="text-green-400 whitespace-pre-wrap">
          {output || "Run code to see output"}
        </p>
  
      </div>
    );
  }