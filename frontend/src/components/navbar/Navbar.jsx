export default function Navbar() {
    return (
      <header className="relative z-50 border-b border-white/10">
  
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
  
          {/* Left */}
          <div className="flex items-center gap-10">
  
            <div className="flex items-center gap-3">
              <span className="font-semibold text-lg">
                Syntaxa
              </span>
            </div>
  
          </div>
  
          {/* Right */}
          <div className="flex items-center gap-10">
  
            <button className="text-sm text-white/80 hover:text-white">
              Sign in
            </button>
  
            <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-white/90 transition">
              Sign up
            </button>
  
          </div>
  
        </div>
  
      </header>
    );
  }