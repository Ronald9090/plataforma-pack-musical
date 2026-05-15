import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Smartphone, Download, X, Info } from "lucide-react";

export function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showManualMessage, setShowManualMessage] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setDeferredPrompt(null);
        setIsVisible(false);
      }
    } else {
      setShowManualMessage(true);
    }
  };

  return (
    <section className="px-6 py-12">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="glass rounded-3xl p-8 border-neon-blue/20 bg-gradient-to-br from-neutral-900 to-black relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-neon-blue/20 flex items-center justify-center border border-neon-blue/30 shadow-neon">
                <Smartphone className="w-5 h-5 text-neon-blue" />
              </div>
              <h3 className="text-xl font-display font-bold">Instalación Premium</h3>
            </div>
            
            <p className="text-white/60 text-sm leading-relaxed">
              Instala esta plataforma en tu celular para acceder al Pack Musical, tutoriales y actualizaciones más rápido. Funciona como una app nativa, sin ocupar espacio adicional.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleInstallClick}
              className="w-full h-14 rounded-2xl bg-white text-black font-display font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-all hover:bg-neutral-200"
            >
              <Download className="w-4 h-4" />
              📲 Instalar app en mi celular
            </motion.button>

            <AnimatePresence>
              {showManualMessage && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="pt-4 border-t border-white/5"
                >
                  <div className="flex gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <Info className="w-5 h-5 text-neon-blue flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-white/50 leading-relaxed">
                      Tu navegador no permite instalar directamente. 
                      <span className="text-white font-medium block mt-1">Toca los 3 puntos y selecciona "Agregar a pantalla de inicio".</span>
                    </p>
                    <button 
                      onClick={() => setShowManualMessage(false)}
                      className="text-white/30 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
      </div>
    </section>
  );
}
