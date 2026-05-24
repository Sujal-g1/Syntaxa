export default function BackgroundGlow() {
    return (
      <div className="absolute inset-0 overflow-hidden">
  
        <div className="absolute w-[700px] h-[700px] bg-blue-600/20 blur-[180px] rounded-full top-[35%] left-[-10%]" />
  
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full bottom-[-10%] left-[20%]" />
  
        <div className="absolute w-[700px] h-[700px] bg-green-400/10 blur-[200px] rounded-full top-[20%] right-[-15%]" />
  
        {/* Gradient Shapes */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/40 to-transparent rotate-45 blur-2xl" />
  
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-green-300/20 to-transparent rotate-12 blur-3xl" />
  
      </div>
    );
  }