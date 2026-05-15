import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Smartphone, Download, AlertCircle } from "lucide-react";

export function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isReady, setIsReady] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone) {
      setIsStandalone(true);
    }

    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsReady(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Some browsers might not fire beforeinstallprompt but still allow install via browser menu
    // but the user wants the button to only work with the native prompt.
    // We'll wait a bit to see if the event fires.
    const timeout = setTimeout(() => {
      if (!deferredPrompt) {
        // We set to ready but without prompt to show the "Not available" state if it never fires
        // and we aren't already standalone.
      }
    }, 2000);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
      clearTimeout(timeout);
    };
  }, [deferredPrompt]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setDeferredPrompt(null);
        setIsReady(false);
      }
    }
  };

  // Do not show anything if already installed
  if (isStandalone) return null;

  return (
    <section className="px-6 py-12">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="glass rounded-3xl p-8 border-neon-blue/20 bg-gradient-to-br from-neutral-900 to-black relative overflow-hidden">
          <div className="relative z-10 space-y-4 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-neon-blue/20 flex items-center justify-center border border-neon-blue/30 shadow-neon">
                <Smartphone className="w-5 h-5 text-neon-blue" />
              </div>
              <h3 className="text-xl font-display font-bold">Instalación Premium</h3>
            </div>
            
            <p className="text-white/60 text-sm leading-relaxed">
              Instala esta plataforma en tu celular para acceder al Pack Musical, tutoriales y actualizaciones más rápido.
            </p>

            {deferredPrompt ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleInstallClick}
                className="w-full h-14 rounded-2xl bg-white text-black font-display font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-all hover:bg-neutral-200"
              >
                <Download className="w-4 h-4" />
                📲 Instalar app en mi celular
              </motion.button>
            ) : (
              <div className="flex items-center justify-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10">
                <AlertCircle className="w-4 h-4 text-white/40" />
                <span className="text-xs text-white/40 font-medium">Instalación no disponible en este navegador</span>
              </div>
            )}
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
        </div>
      </div>
    </section>
  );
}
