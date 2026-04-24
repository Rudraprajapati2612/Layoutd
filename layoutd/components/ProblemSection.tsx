'use client';

import { motion } from 'motion/react';

const easeOutQuint: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ProblemSection() {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 relative">
      {/* Left Column: Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: easeOutQuint }}
        className="lg:col-span-5 flex flex-col h-full w-full max-w-[480px]"
      >
        <div className="flex flex-col relative w-full pt-2">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-5 leading-tight text-white">
            Manual migrations are a liability.
          </h2>
          <p className="text-[#8c8c8c] text-sm md:text-sm font-mono mb-8 leading-[1.8]">
            Over 40% of critical Solana vulnerabilities stem from incorrect account serialization during upgrades. Padding errors, type truncations, and uninitialized bytes silently corrupt state.
          </p>

          <div className="bg-[#0a0a0a] border border-[#1A1A1A] p-8 md:p-10 rounded-xl relative overflow-hidden group hover:border-[#333] transition-all duration-500 shadow-[0_0_15px_rgba(153,69,255,0.02)] hover:shadow-[0_0_30px_rgba(153,69,255,0.08)]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#9945FF]/5 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none group-hover:bg-[#9945FF]/10 transition-colors duration-700 ease-out"></div>
            <p className="solana-gradient text-[5.5rem] leading-none font-bold tracking-tighter mb-4 transform group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(153,69,255,0.3)] transition-all duration-700 ease-out origin-left inline-block">
              40%
            </p>
            <p className="text-[10px] text-[#737373] uppercase tracking-widest font-mono">
              Of audit findings relate to account layouts
            </p>
          </div>
          
          {/* Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-6 h-px bg-gradient-to-r from-transparent to-[#333]"></div>
        </div>
      </motion.div>

      {/* Right Column: Visual Code Diff */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: easeOutQuint }}
        className="lg:col-span-7 flex flex-col bg-[#0a0a0a] border border-[#1A1A1A] rounded-xl overflow-hidden hover:border-[#333] hover:shadow-[0_0_30px_rgba(20,241,149,0.05)] transition-all duration-500 group"
      >
        <div className="flex items-center px-4 py-3 border-b border-[#1A1A1A] bg-[#050505]">
          <div className="flex space-x-1.5 mr-4">
            <div className="w-2.5 h-2.5 rounded-full bg-[#333] group-hover:bg-[#ff5f56] transition-colors duration-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#333] group-hover:bg-[#ffbd2e] transition-colors duration-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#333] group-hover:bg-[#27c93f] transition-colors duration-300"></div>
          </div>
          <span className="text-[10px] text-[#737373] font-mono tracking-widest uppercase">State Change Detected</span>
        </div>
        
        <div className="p-6 md:p-8 flex flex-col font-mono text-xs md:text-sm text-[#a3a3a3] leading-[1.7] relative">
          
          {/* V1 Block */}
          <div className="flex flex-col mb-2 relative">
             <div className="absolute -left-2 md:-left-4 top-0 bottom-0 w-px bg-transparent"></div>
             <div className="text-[#555] text-[10px] uppercase tracking-widest mb-3 font-bold flex items-center gap-2">
                <span className="w-4 h-px bg-[#333]"></span> V1 <span className="flex-1 h-px bg-[#1A1A1A]"></span>
             </div>
             <pre className="overflow-x-auto pl-2 md:pl-4">
<code className="text-[#14F195]">#[account]</code><br/>
<span className="text-white">pub struct UserState {'{'}</span><br/>
    pub nonce: u8,<br/>
    pub balance: u64,<br/>
<span className="text-white">{'}'}</span>
             </pre>
          </div>

          {/* V2 Block */}
          <div className="flex flex-col mt-4 relative">
             <div className="text-[#555] text-[10px] uppercase tracking-widest mb-3 font-bold flex items-center gap-2">
                <span className="w-4 h-px bg-[#333]"></span> V2 <span className="flex-1 h-px bg-[#1A1A1A]"></span>
             </div>
             <pre className="overflow-x-auto relative pl-2 md:pl-4">
<code className="text-[#14F195]">#[account]</code><br/>
<span className="text-white">pub struct UserState {'{'}</span><br/>
    pub nonce: u8,<br/>
    <motion.div 
      initial={{ backgroundColor: "rgba(127, 29, 29, 0)", borderLeftColor: "rgba(239, 68, 68, 0)" }}
      whileInView={{ backgroundColor: "rgba(127, 29, 29, 0.15)", borderLeftColor: "rgba(239, 68, 68, 1)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="border-l-2 border-transparent -ml-2 md:-ml-4 pl-2 md:pl-4 py-1.5 my-1 text-[#e5e2e1] group-hover:bg-red-950/30 transition-colors duration-300 relative flex flex-col sm:flex-row sm:items-center justify-between w-[calc(100%+0.5rem)] md:w-[calc(100%+1rem)] pr-2 md:pr-4"
    >
       <span className="text-red-400">pub is_active: bool,</span>
       <motion.span 
         initial={{ opacity: 0, scale: 0.9 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ delay: 1.1, duration: 0.4, type: "spring" }}
         className="text-[9px] text-red-400 uppercase tracking-widest font-bold border border-red-500/20 px-2 py-0.5 rounded bg-red-950/40 mt-1 sm:mt-0 self-start sm:self-auto shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.2)]"
       >
         Layout Shift
       </motion.span>
    </motion.div>
    pub balance: u64,<br/>
<span className="text-white">{'}'}</span>
             </pre>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
