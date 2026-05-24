export default function CodeWindow() {
    return (
      <div className="absolute right-0 top-0 w-[95%] h-[420px] bg-[#0a0f1c]/95 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">
  
        {/* Topbar */}
        <div className="h-14 border-b border-white/10 flex items-center px-5 gap-2">
  
          <div className="w-3 h-3 rounded-full bg-red-400" />
  
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
  
          <div className="w-3 h-3 rounded-full bg-green-400" />
  
        </div>
  
        {/* Fake Code */}
        <div className="p-6 font-mono text-sm text-white/70 leading-8">
  
          <p className="text-blue-400">
            import <span className="text-white">datetime</span>
          </p>
  
          <p className="mt-6 text-purple-400">
            def{" "}
  
            <span className="text-green-300">
              parse_expenses
            </span>
  
            ():
          </p>
  
          <p className="ml-8 text-white/50">
            expenses = []
          </p>
  
          <p className="ml-8 text-white/50">
            for line in lines:
          </p>
  
          <p className="ml-16 text-white/50">
            date, value = line.split()
          </p>
  
          <p className="ml-16 text-white/50">
            expenses.append(data)
          </p>
  
          {/* AI Suggestion */}
          <div className="mt-8 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
  
            <p className="text-blue-300">
              AI Suggestion:
            </p>
  
            <p className="text-white/60 mt-2">
              Added unit tests for parsing edge cases
              and invalid values.
            </p>
  
          </div>
  
        </div>
  
      </div>
    );
  }