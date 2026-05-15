import { motion } from "motion/react";

const steps = [
  { step: "Paso 1", title: "Abre el Pack Musical", desc: "Explora las carpetas y archivos incluidos." },
  { step: "Paso 2", title: "Mira los tutoriales", desc: "Aprende a integrar todo en tu flujo de trabajo." },
  { step: "Paso 3", title: "Únete al grupo", desc: "Sé el primero en recibir novedades y soporte." },
];

export function HowTo() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-display font-bold tracking-tight">Cómo usar tu acceso</h2>
          <p className="text-white/40 text-sm">Sigue estos pasos para maximizar tu inversión.</p>
        </div>
        
        <div className="space-y-6">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative glass rounded-3xl p-6 flex flex-col md:flex-row md:items-center gap-6 group"
            >
              <div className="text-4xl md:text-5xl font-display font-black text-white/5 absolute right-6 md:static group-hover:text-neon-blue/20 transition-colors">
                0{i + 1}
              </div>
              <div className="space-y-1 flex-1">
                <span className="text-[10px] font-bold text-neon-blue uppercase tracking-[0.2em]">{item.step}</span>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-white/50">{item.desc}</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-neon-blue/50 transition-colors">
                 <div className="w-2 h-2 rounded-full bg-neon-blue animate-ping" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
