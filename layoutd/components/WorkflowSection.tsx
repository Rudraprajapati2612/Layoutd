'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { GitCompare, Code2, ShieldCheck, Copy, Check } from 'lucide-react';

const easeOutQuint: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOutQuint } }
};

function CommandBox({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="mt-4 md:mt-2 w-full max-w-[340px] mx-auto group relative cursor-pointer"
      onClick={handleCopy}
    >
      <div className="absolute -inset-0.5 bg-[#14F195]/0 group-hover:bg-[#14F195]/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative font-mono text-[10px] md:text-xs text-[#14F195] bg-[#050505] border border-[#1A1A1A] group-hover:border-[#333] px-4 py-3 rounded-md w-full text-center transition-colors flex items-center justify-between gap-3">
        <span className="truncate flex-1 text-left md:text-center">{command}</span>
        <button className="text-[#555] group-hover:text-[#a3a3a3] transition-colors shrink-0 outline-none">
          {copied ? <Check size={14} className="text-[#14F195]" /> : <Copy size={14} />}
        </button>
      </div>
    </div>
  );
}

export default function WorkflowSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center mb-24 pt-8 md:pt-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[300px] bg-gradient-to-b from-transparent via-[#9945FF]/[0.03] to-transparent pointer-events-none blur-3xl"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: easeOutQuint }}
        className="text-center w-full mb-16 relative z-10"
      >
        <span className="text-[#9945FF] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Three Commands</span>
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
          From IDL diff to safe migration in seconds.
        </h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative z-10 max-w-5xl mx-auto"
      >
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-[27px] left-[16%] right-[16%] h-px border-t border-dashed border-[#222] z-0"></div>
        <div className="hidden md:block absolute top-[27px] left-[16%] right-[16%] h-[1px] z-0 origin-left">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
            className="w-full h-full bg-gradient-to-r from-transparent via-[#9945FF]/50 to-[#14F195]/30 origin-left"
          />
        </div>

        {/* Step 1 */}
        <motion.div variants={itemVariants} className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full border border-[#222] bg-[#0a0a0a] flex items-center justify-center relative z-10 group hover:border-[#9945FF]/50 hover:shadow-[0_0_20px_rgba(153,69,255,0.2)] transition-all duration-300">
            <GitCompare className="text-[#9945FF] group-hover:scale-110 transition-transform duration-300" size={20} strokeWidth={1.5} />
          </div>
          <p className="text-[#e5e2e1] text-sm md:text-sm font-medium mt-6 mb-4 text-center">
            Compare old and new Anchor IDLs
          </p>
          <CommandBox command="layoutd diff v1.json v2.json" />
        </motion.div>

        {/* Step 2 */}
        <motion.div variants={itemVariants} className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full border border-[#222] bg-[#0a0a0a] flex items-center justify-center relative z-10 group hover:border-[#9945FF]/50 hover:shadow-[0_0_20px_rgba(153,69,255,0.2)] transition-all duration-300">
            <Code2 className="text-[#9945FF] group-hover:scale-110 transition-transform duration-300" size={20} strokeWidth={1.5} />
          </div>
          <p className="text-[#e5e2e1] text-sm md:text-sm font-medium mt-6 mb-4 text-center">
            Auto-generate your .migrate() body
          </p>
          <CommandBox command="layoutd gen v1.json v2.json --out migrate.rs" />
        </motion.div>

        {/* Step 3 */}
        <motion.div variants={itemVariants} className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full border border-[#222] bg-[#0a0a0a] flex items-center justify-center relative z-10 group hover:border-[#9945FF]/50 hover:shadow-[0_0_20px_rgba(153,69,255,0.2)] transition-all duration-300">
            <ShieldCheck className="text-[#9945FF] group-hover:scale-110 transition-transform duration-300" size={20} strokeWidth={1.5} />
          </div>
          <p className="text-[#e5e2e1] text-sm md:text-sm font-medium mt-6 mb-4 text-center">
            SARIF safety report for CI gating
          </p>
          <CommandBox command="layoutd check v1.json v2.json --sarif out.sarif" />
        </motion.div>

      </motion.div>
    </section>
  );
}
