/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AccessCard } from "./components/AccessCard";
import { Benefits } from "./components/Benefits";
import { HowTo } from "./components/HowTo";
import { InstallPWA } from "./components/InstallPWA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-neon-blue/30 overflow-x-hidden">
      {/* Background radial effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-blue/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-neon-purple/5 blur-[120px] rounded-full" />
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <AccessCard />
        <InstallPWA />
        <Benefits />
        <HowTo />
      </main>

      <Footer />
    </div>
  );
}

