import { motion } from "motion/react";
import { CheckCircle2, Crown } from "lucide-react";

export function AccessCard() {
  return (
    <div className="px-6 pb-12">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto glass rounded-3xl p-8 relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 p-4 translate-x-2 -translate-y-2">
           <Crown className="w-12 h-12 text-neon-purple/20 rotate-12" />
        </div>
        
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-neon-blue/20 flex items-center justify-center border border-neon-blue/30 shadow-neon">
            <CheckCircle2 className="w-6 h-6 text-neon-blue" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-display font-bold text-white">Acceso privado activado</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Tu clave ha sido validada. Ahora eres parte del círculo exclusivo del Pack Musical con beneficios Premium.
            </p>
          </div>
        </div>
        
        <div className="mt-6 flex items-center gap-2">
          <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-neon-blue to-neon-purple shadow-neon"
            />
          </div>
          <span className="text-[10px] font-bold text-neon-blue uppercase tracking-widest whitespace-nowrap">Status: Verificado</span>
        </div>
      </motion.div>
    </div>
  );
}
