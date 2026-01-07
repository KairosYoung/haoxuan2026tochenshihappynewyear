import React, { useState } from 'react';
import { GanttItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Lock, Unlock } from 'lucide-react';

// This is the placeholder for the specific "Horse" image you mentioned.
// Please replace this URL with your specific image link if needed.
const HORSE_IMAGE_URL = "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1000&auto=format&fit=crop";

const schedule: GanttItem[] = [
  { task: 'Lit Review', startMonth: 1, durationMonths: 2 },
  { task: 'Data Collection', startMonth: 3, durationMonths: 3 },
  { task: 'Paper 1 Submission', startMonth: 7, durationMonths: 1 },
  { task: 'Thesis Proposal', startMonth: 9, durationMonths: 2 },
  { task: 'Paper 2 Draft', startMonth: 11, durationMonths: 2 },
];

export const SectionPact: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    setIsUnlocked(true);
    
    // Configuration for the confetti
    const duration = 3000;
    const end = Date.now() + duration;
    // Academic/Earth tone colors + Gold for celebration
    const colors = ['#A8A29E', '#2D2A26', '#E7E5E4', '#D4AF37']; 

    // Frame function for the animation loop
    const frame = () => {
      // Launch particles from the left edge
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
        zIndex: 9999, // Ensure it's on top of everything
        disableForReducedMotion: true // Respect user preferences
      });
      
      // Launch particles from the right edge
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
        zIndex: 9999, // Ensure it's on top of everything
        disableForReducedMotion: true
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    // Execute the animation
    frame();
  };

  return (
    <section className="pb-20 min-h-[400px]">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">The 2026 Commitment</h2>
        <AnimatePresence mode="wait">
          {!isUnlocked ? (
            <motion.p
              key="locked-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-pencil font-light italic"
            >
              "Some promises are kept under lock and key..."
            </motion.p>
          ) : (
            <motion.p
              key="unlocked-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-pencil font-light italic"
            >
              "Promises made in code are harder to break."
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {!isUnlocked ? (
        <div className="flex justify-center py-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleUnlock}
            className="flex items-center gap-3 px-8 py-4 bg-stone-800 text-stone-50 rounded-full shadow-lg hover:bg-stone-700 transition-colors group z-20 relative"
          >
            <Lock size={20} className="group-hover:hidden" />
            <Unlock size={20} className="hidden group-hover:block" />
            <span className="font-serif tracking-wide">Unlock 2026</span>
          </motion.button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white border border-stone-200 shadow-sm max-w-4xl mx-auto overflow-hidden"
        >
          <div className="p-8">
            <h3 className="text-center font-serif text-2xl text-ink mb-12 tracking-wide">Research Timeline</h3>
            
            {/* Simple Gantt Chart Visualization */}
            <div className="space-y-6 mb-12">
              <div className="flex border-b border-stone-200 pb-2">
                <div className="w-1/4 text-xs font-mono text-stone-400 uppercase">Task</div>
                <div className="w-3/4 flex justify-between px-2">
                  {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map(m => (
                    <span key={m} className="text-xs font-mono text-stone-400 uppercase">{m}</span>
                  ))}
                </div>
              </div>
              
              {schedule.map((item, idx) => (
                <div key={idx} className="flex items-center group">
                  <div className="w-1/4 text-sm font-serif text-ink">{item.task}</div>
                  <div className="w-3/4 relative h-6 bg-stone-50 rounded-sm overflow-hidden">
                    {/* Grid lines */}
                    <div className="absolute inset-0 grid grid-cols-12 gap-0 pointer-events-none">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="border-r border-stone-100 h-full"></div>
                      ))}
                    </div>
                    
                    {/* Bar */}
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(item.durationMonths / 12) * 100}%` }}
                      transition={{ duration: 1, delay: idx * 0.2 }}
                      className="absolute h-full bg-stone-400/30 border-l-2 border-stone-500 group-hover:bg-stone-400/50 transition-colors"
                      style={{ left: `${((item.startMonth - 1) / 12) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Easter Egg Image */}
            <div className="flex flex-col items-center mt-12">
              <div className="relative p-2 bg-white border border-stone-200 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-500 cursor-pointer group">
                <div className="w-64 h-64 bg-stone-100 overflow-hidden relative flex items-center justify-center">
                  
                  {/* The Specific Horse Image */}
                  <img 
                    src={HORSE_IMAGE_URL} 
                    alt="Don't let me off the hook" 
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-700 opacity-90 sepia-[0.2]"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-4 left-0 right-0 text-center text-white font-serif italic text-lg shadow-black drop-shadow-md">
                    "Don't let me off the hook."
                    <span className="block text-xs font-sans not-italic mt-1 opacity-80 text-stone-200">(别放过我)</span>
                  </div>
                </div>
                {/* Visual indicator that this is a "photo" */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-stone-200/50 rotate-2"></div>
              </div>
              <p className="mt-6 text-xs font-mono text-stone-400 uppercase tracking-widest">Signed, Haoxuan 淏璇</p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};