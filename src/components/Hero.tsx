import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[80vh] flex flex-col items-center justify-center">
      {/* Background Neon Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-lg">
        <div className="absolute top-[-10%] left-[-20%] w-[140%] h-[120%] bg-[radial-gradient(circle_at_50%_40%,rgba(0,242,254,0.15)_0%,transparent_50%)] blur-3xl" />
        <div className="absolute bottom-[20%] right-[-30%] w-72 h-72 bg-neon-purple/20 blur-[100px] rounded-full" />
        <div className="absolute top-[30%] left-[-30%] w-72 h-72 bg-neon-pink/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter leading-[1.1]">
            Tu Experiencia <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-glow">
              Musical Premium
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto font-medium">
            Accede a la colección más exclusiva de beats, tutoriales y recursos para productores de élite.
          </p>
        </motion.div>

        {/* Premium Image Presentation */}
        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          className="relative mt-8 md:mt-16 mx-auto w-full max-w-[600px] group"
          style={{ perspective: "1000px" }}
        >
          <motion.div 
            whileHover={{ rotateY: 5, rotateX: 2, scale: 1.02 }}
            className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,242,254,0.15)] bg-neutral-900"
          >
            <img 
              src="https://drive.google.com/thumbnail?id=1RHMPvvPjGL8uY-F37mjv5U9eSVzCEiW9&sz=w1200" 
              alt="Pack Musical 2026"
              className="w-full h-auto object-cover display-block"
              referrerPolicy="no-referrer"
            />
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none group-hover:via-white/10 transition-all duration-700" />
            
            {/* Neon Accent Border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-neon-blue/20 pointer-events-none group-hover:border-neon-blue/40 transition-colors" />
          </motion.div>

          {/* Background Glows for the image */}
          <div className="absolute -inset-4 bg-neon-blue/20 blur-[60px] -z-10 opacity-50 transition-opacity group-hover:opacity-100" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(0,242,254,0.1)_0%,transparent_70%)] -z-20" />
        </motion.div>
      </div>
    </section>
  );
}
