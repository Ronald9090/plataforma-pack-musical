import { motion } from "motion/react";
import { Zap, Layout, Smartphone, Video, Send } from "lucide-react";

const benefits = [
  { icon: Zap, title: "Acceso inmediato", desc: "Todo el contenido disponible al instante." },
  { icon: Layout, title: "Material organizado", desc: "Encuentra lo que necesitas por categorías." },
  { icon: Smartphone, title: "Compatible con celular", desc: "Una experiencia fluida en cualquier móvil." },
  { icon: Video, title: "Tutoriales incluidos", desc: "Videos paso a paso para dominar tu pack." },
  { icon: Send, title: "Actualizaciones", desc: "Novedades directas por WhatsApp." },
];

export function Benefits() {
  return (
    <section className="px-6 py-20 bg-gradient-to-b from-black to-neutral-900/50">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-display font-bold tracking-tight">Beneficios de tu Acceso</h2>
          <div className="w-12 h-1 bg-neon-blue mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-neon-blue/30 transition-all hover:bg-neutral-900/60"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:bg-neon-blue group-hover:text-black shadow-neon">
                <benefit.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-1">{benefit.title}</h3>
              <p className="text-sm text-white/40">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
