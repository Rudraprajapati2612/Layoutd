'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const COMMAND = "layoutd diff ./src/state.rs";

export default function AnimatedTerminal() {
  const [charIndex, setCharIndex] = useState(0);
  const [outputOneVis, setOutputOneVis] = useState(false);
  const [outputTwoVis, setOutputTwoVis] = useState(false);
  const [outputThreeVis, setOutputThreeVis] = useState(false);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    let isMounted = true;
    const wait = (ms: number) => new Promise(res => setTimeout(res, ms));

    const run = async () => {
      while (isMounted) {
        setCharIndex(0);
        setOutputOneVis(false);
        setOutputTwoVis(false);
        setOutputThreeVis(false);

        await wait(500);
        if (!isMounted) break;

        for (let i = 1; i <= COMMAND.length; i++) {
          while (isHoveredRef.current && isMounted) await wait(100);
          if (!isMounted) break;
          setCharIndex(i);
          await wait(20);
        }
        if (!isMounted) break;

        while (isHoveredRef.current && isMounted) await wait(100);
        await wait(200);
        if (!isMounted) break;

        setOutputOneVis(true);
        while (isHoveredRef.current && isMounted) await wait(100);
        await wait(200);
        if (!isMounted) break;

        setOutputTwoVis(true);
        while (isHoveredRef.current && isMounted) await wait(100);
        await wait(200);
        if (!isMounted) break;

        setOutputThreeVis(true);

        let waitTime = 2000;
        while (waitTime > 0 && isMounted) {
          while (isHoveredRef.current && isMounted) await wait(100);
          await wait(100);
          waitTime -= 100;
        }
      }
    };

    run();
    return () => { isMounted = false; };
  }, []);

  const outputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } }
  };

  return (
    <motion.div
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-3xl bg-[#0a0a0a] rounded-lg p-1 border border-[#1A1A1A] mb-12 md:mb-16 relative overflow-hidden group"
      style={{ boxShadow: '0 0 40px rgba(153, 69, 255, 0.05), 0 0 40px rgba(20, 241, 149, 0.05)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#9945FF]/0 to-[#14F195]/0 group-hover:from-[#9945FF]/5 group-hover:to-[#14F195]/5 transition-colors duration-500 pointer-events-none"></div>
      <div className="text-[10px] sm:text-xs md:text-sm border border-transparent group-hover:border-white/5 transition-colors duration-500 leading-relaxed text-[#e5e2e1] bg-[#050505] rounded-md p-4 sm:p-6 font-mono min-h-[180px] sm:min-h-[220px] md:min-h-[200px] flex flex-col relative z-10 w-full overflow-hidden">
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#333] group-hover:bg-[#444] transition-colors duration-500"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#333] group-hover:bg-[#444] transition-colors duration-500"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#333] group-hover:bg-[#444] transition-colors duration-500"></div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-1 sm:gap-2 text-[10px] sm:text-xs md:text-sm">
          <span className="text-[#14F195] sm:mr-3 whitespace-nowrap">~/solana-project <span className="text-[#a3a3a3]">$</span></span>
          <div className="inline-flex items-center text-left whitespace-pre-wrap break-all sm:break-normal">
            <span className="text-white tracking-wide">
              {COMMAND.slice(0, charIndex)}
            </span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              className="inline-block text-white ml-0.5"
            >
              |
            </motion.span>
          </div>
        </div>

        <div className="mt-3 sm:mt-4 flex flex-col gap-1 sm:gap-1.5 flex-1 min-h-[100px] text-[10px] sm:text-xs md:text-sm text-left">
          <AnimatePresence>
            {outputOneVis && (
              <motion.div key="output1" variants={outputVariants} initial="hidden" animate="visible" className="flex items-start">
                <span className="text-yellow-500 mr-2 flex-shrink-0">[WARN]</span>
                <span className="text-[#e5e2e1]">Field `balance` changed from u64 to u128.</span>
              </motion.div>
            )}
            {outputTwoVis && (
              <motion.div key="output2" variants={outputVariants} initial="hidden" animate="visible" className="flex items-start">
                <span className="text-yellow-500 mr-2 flex-shrink-0">[WARN]</span>
                <span className="text-[#e5e2e1]">Struct size increased by 8 bytes.</span>
              </motion.div>
            )}
            {outputThreeVis && (
              <motion.div key="output3" variants={outputVariants} initial="hidden" animate="visible" className="flex items-start mt-1 whitespace-nowrap md:whitespace-normal overflow-hidden flex-wrap max-w-full">
                <span className="text-[#9945FF] mr-2 font-bold flex-shrink-0">==&gt;</span>
                <span className="text-white w-full overflow-hidden text-ellipsis whitespace-nowrap md:whitespace-normal">Generating migration script: <span className="text-[#14F195]">migrate_v1_to_v2.rs</span></span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
