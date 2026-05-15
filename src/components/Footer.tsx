import { motion } from "motion/react";
import { ArrowRight, Lock, PlayCircle, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-6 pt-12 pb-24 border-t border-white/5 bg-neutral-900/40">
      <div className="max-w-4xl mx-auto space-y-12 text-center">
        <div className="space-y-8">
          <motion.a
            href="https://drive.google.com/drive/folders/1cUv_IWi3R1HkDtJZhcr_-nEneJeuLd4W?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full max-w-sm mx-auto h-16 rounded-2xl bg-gradient-to-r from-neon-blue to-neon-purple text-black font-display font-bold text-lg shadow-neon group flex items-center justify-center gap-3"
          >
            Entrar al Pack ahora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
             <motion.a 
               href="https://drive.google.com/drive/folders/1rMleyHItblEtPP7unEdpDFC_Eq8Qff09?usp=sharing"
               target="_blank"
               rel="noopener noreferrer"
               whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
               whileTap={{ scale: 0.95 }}
               className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl glass border-white/10 hover:border-neon-blue/40 transition-colors group"
             >
               <PlayCircle className="w-6 h-6 text-neon-blue group-hover:text-glow" />
               <span className="text-xs font-bold uppercase tracking-widest text-white/70 group-hover:text-white">Tutoriales</span>
             </motion.a>

             <motion.a 
               href="https://chat.whatsapp.com/EayPS5AeR0ZFLFY8UDGkkd"
               target="_blank"
               rel="noopener noreferrer"
               whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
               whileTap={{ scale: 0.95 }}
               className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl glass border-white/10 hover:border-neon-purple/40 transition-colors group"
             >
               <MessageCircle className="w-6 h-6 text-neon-purple group-hover:text-glow" />
               <span className="text-xs font-bold uppercase tracking-widest text-white/70 group-hover:text-white">WhatsApp</span>
             </motion.a>
          </div>
        </div>

        <div className="pt-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <Lock className="w-4 h-4 text-white/40" />
            <p className="text-xs text-white/60 font-medium italic">
              Este acceso es exclusivo para clientes del Pack Musical.
            </p>
          </div>
          <p className="text-sm text-white/30 max-w-xs mx-auto">
            Guarda esta página para entrar cuando quieras. Tu acceso está vinculado a tu dispositivo.
          </p>
        </div>
      </div>
    </footer>
  );
}
