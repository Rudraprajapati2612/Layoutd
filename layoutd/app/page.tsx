'use client';

import { motion } from 'motion/react';
import { Hammer, Search, Gauge, Terminal } from 'lucide-react';
import Link from 'next/link';
import AnimatedTerminal from '@/components/AnimatedTerminal';
import ProblemSection from '@/components/ProblemSection';
import WorkflowSection from '@/components/WorkflowSection';

const easeOutQuint: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center overflow-x-hidden font-sans">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-6 md:px-10 py-5 bg-[#080808]/80 backdrop-blur-md z-50 border-b border-[#1A1A1A]">
        <Link href="/" className="text-xl font-bold tracking-tight text-white font-sans hover:scale-105 active:scale-95 transition-transform duration-300">
          Layoutd
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          <Link href="#" className="flex items-center text-xs font-mono text-[#9945FF] hover:scale-105 active:scale-95 transition-transform duration-300">
            Docs
          </Link>
          <Link href="#" className="text-xs font-mono text-[#737373] hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 pl-4">CLI</Link>
          <Link href="#" className="text-xs font-mono text-[#737373] hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 pl-4">GitHub</Link>
          <Link href="#" className="text-xs font-mono text-[#737373] hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 pl-4">Benchmarks</Link>
        </div>
        <div>
          <Link 
            href="#" 
            className="px-6 py-2 border border-[#333] text-white text-xs font-mono rounded hover:bg-white/5 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 shadow-[0_0_0_rgba(153,69,255,0)] hover:shadow-[0_0_15px_rgba(153,69,255,0.15)] inline-block"
          >
            Install CLI
          </Link>
        </div>
      </nav>

      <main className="w-full max-w-5xl px-6 mt-32 md:mt-40 flex flex-col gap-24 md:gap-32 pb-24 font-sans">
        
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center pt-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOutQuint }}
            className="text-center w-full mb-12 md:mb-16"
          >
            <h1 className="font-bold text-5xl md:text-[5.5rem] text-white mb-6 tracking-tight leading-[1]">
              Stop Writing Migration <br/> Code by <span className="solana-gradient">Hand.</span>
            </h1>
            <p className="text-[#a3a3a3] text-sm md:text-sm max-w-2xl mx-auto mb-10 leading-relaxed font-mono">
              A zero-config Rust CLI tool for generating deterministic, gas-optimized Solana <br className="hidden md:block" /> account migrations. Catch layout changes before they hit mainnet.
            </p>
          </motion.div>

          {/* Animated Terminal */}
          <AnimatedTerminal />

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: easeOutQuint }}
            className="flex gap-4 mb-16 justify-center flex-wrap font-mono"
          >
            <Link href="#" className="px-6 py-3 border border-[#333] text-white text-xs rounded hover:bg-white/5 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300 shadow-[0_0_0_rgba(153,69,255,0)] hover:shadow-[0_0_20px_rgba(20,241,149,0.1)] inline-block">
              Read the Docs
            </Link>
            <Link href="#" className="px-6 py-3 bg-white text-black text-xs font-bold rounded hover:bg-[#e5e2e1] hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(153,69,255,0.2)] inline-block">
              View on GitHub
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: easeOutQuint }}
            className="flex gap-3 text-[10px] text-[#737373] flex-wrap justify-center font-mono uppercase"
          >
            <span className="px-3 py-1 bg-[#111] border border-[#222] rounded hover:border-[#444] transition-colors cursor-default">Apache-2.0</span>
            <span className="px-3 py-1 bg-[#111] border border-[#222] rounded hover:border-[#444] transition-colors cursor-default">Rust</span>
            <span className="px-3 py-1 bg-[#111] border border-[#222] rounded hover:border-[#444] transition-colors cursor-default">Anchor v1.0</span>
            <span className="px-3 py-1 bg-[#111] border border-[#222] rounded hover:border-[#444] transition-colors cursor-default">SARIF 2.1.0</span>
          </motion.div>
        </section>

        {/* Problem Section */}
        <ProblemSection />

        <WorkflowSection />

        {/* Premium Features Section */}
        <section className="w-full flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: easeOutQuint }}
            className="text-center max-w-3xl mb-12 md:mb-16 mt-12"
          >
            <div className="text-[10px] solana-gradient uppercase tracking-widest font-mono mb-4">The missing piece</div>
            <h2 className="font-bold text-3xl md:text-4xl text-white mb-6 tracking-tight">Migration Infrastructure, Not Scripts.</h2>
            <p className="text-[#a3a3a3] max-w-xl mx-auto leading-relaxed text-sm font-mono">
              A zero-config Rust CLI that generates deterministic, safe Solana account migrations and prevents runtime failures.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16"
          >
            {[
              { icon: Hammer, title: "Deterministic Migrations", desc: "Generate predictable and reproducible migration scripts automatically.", color: "text-[#14F195]" },
              { icon: Search, title: "Layout Diff Engine", desc: "Detect struct-level changes instantly and prevent unsafe upgrades.", color: "text-[#9945FF]" },
              { icon: Gauge, title: "Gas Optimized", desc: "Efficient migration generation that minimizes compute costs.", color: "text-[#14F195]" },
              { icon: Terminal, title: "Native Rust CLI", desc: "Runs locally with no dependencies, fully integrated with Solana + Anchor.", color: "text-[#9945FF]" }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 1, ease: easeOutQuint } }
                }}
                className="bg-[#0a0a0a] rounded-xl p-8 border border-[#1A1A1A] hover:border-[#333] transition-all duration-300 flex flex-col hover:scale-[1.02] hover:-translate-y-1 block"
              >
                <feature.icon className={`mb-6 ${feature.color}`} size={24} strokeWidth={1.5} />
                <h3 className="font-bold text-white text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed font-mono mt-1">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CLI Preview Block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: easeOutQuint }}
            className="w-full max-w-3xl bg-[#0a0a0a] rounded-xl p-6 md:p-8 border border-[#333] shadow-[0_0_15px_rgba(153,69,255,0.05)] mx-auto relative overflow-hidden hover:shadow-[0_0_30px_rgba(153,69,255,0.1)] transition-shadow duration-700"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#9945FF]/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#222]"></div>
              <div className="w-3 h-3 rounded-full bg-[#222]"></div>
              <div className="w-3 h-3 rounded-full bg-[#222]"></div>
            </div>
            <div className="text-xs md:text-sm leading-relaxed font-mono text-white">
              <div className="mb-2"><span className="text-[#737373] mr-2">$</span>layoutd diff ./src/state.rs</div>
              <div className="text-[#14F195] mb-2">[INFO] Detecting layout changes...</div>
              <div className="text-[#a3a3a3] mb-4">[WARN] Field 'balance' changed from u64 to u128</div>
              <div className="text-[#a3a3a3]"><span className="text-[#9945FF] mr-2">[✓]</span>Migration script generated: <span className="text-white">migrate_v1_to_v2.rs</span></div>
            </div>
          </motion.div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-[#1A1A1A] mt-8 bg-[#0a0a0a]">
        <div className="text-[10px] font-mono text-[#737373] uppercase tracking-widest">
            © 2024 LAYOUTD. Built for the Rust ecosystem.
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[10px] font-mono text-[#14F195] uppercase tracking-widest font-bold">
          <Link href="#" className="hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 inline-block">Documentation</Link>
          <Link href="#" className="hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 inline-block">Changelog</Link>
          <Link href="#" className="hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 inline-block">Solana Status</Link>
          <Link href="#" className="hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 inline-block">Privacy</Link>
        </div>
      </footer>
    </div>
  );
}
