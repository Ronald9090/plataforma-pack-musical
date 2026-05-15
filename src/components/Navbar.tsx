import { motion } from "motion/react";
import { Music2, ShieldCheck } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass bg-black/20"
    >
      <div className="flex items-center gap-2">
        <div className="p-1.5 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple shadow-neon">
          <Music2 className="w-5 h-5 text-black" />
        </div>
        <span className="font-display font-bold tracking-tight text-lg">Pack Musical</span>
      </div>
      <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/10">
        <ShieldCheck className="w-4 h-4 text-neon-blue" />
        <span className="text-xs font-medium text-neon-blue uppercase tracking-wider">Área privada</span>
      </div>
    </motion.nav>
  );
}
