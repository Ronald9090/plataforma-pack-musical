import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Smartphone, Download, Info, CheckCircle2 } from "lucide-react";

export function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isIframe, setIsIframe] = useState(false);

  useEffect(() => {
    setIsIframe(window.self !== window.top);

    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setDeferredPrompt(null);
    } else if (isIframe) {
      window.open(window.location.href, '_blank');
    }
  };

  return (
    <section id="install-section" className="px-6 py-12 relative z-50">
      <div className="max-w-xl mx-auto">
        <motion.div 
          initial={{ opacity: 1, y: 0 }}
          className="glass rounded-3xl p-8 border-neon-blue/40 bg-black/80 relative overflow-hidden shadow-[0_0_30px_rgba(0,242,254,0.1)]"
        >
          <div className="relative z-10 space-y-6 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-neon-blue/20 flex items-center justify-center border border-neon-blue/30 shadow-neon">
                <Smartphone className="w-6 h-6 text-neon-blue" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">Instalar Pack Musical</h3>
            </div>
            
            <p className="text-white/80 text-sm leading-relaxed">
              Toca el botón de abajo para instalar la aplicación premium directamente en tu pantalla de inicio.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleInstallClick}
              className="w-full h-16 rounded-2xl bg-white text-black font-display font-bold text-lg shadow-[0_10px_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-3 transition-transform"
            >
              <Download className="w-5 h-5" />
              {isIframe ? "🚀 Abrir para instalar" : "📲 INSTALAR AHORA"}
            </motion.button>

            <div className="flex items-center gap-2 text-[10px] text-neon-blue font-bold uppercase tracking-[0.2em] justify-center">
              <CheckCircle2 className="w-3 h-3" />
              Versión Premium 2026
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/20 blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}
