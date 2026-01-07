import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Disc, Play, Pause, X } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
        // Automatically expand the card when user starts playing
        setIsExpanded(true);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="/music/today.mp3" loop />

      {/* Floating Player */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
      >
        {/* Expanded Lyrics Card */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="mb-4 w-72 md:w-80 bg-white/90 backdrop-blur-md border border-stone-200 p-6 rounded-xl shadow-2xl origin-bottom-right"
            >
              <div className="flex justify-between items-start mb-4 border-b border-stone-100 pb-2">
                <div>
                  <h3 className="font-serif text-lg font-bold text-ink">今天只做一件事</h3>
                  <p className="text-xs text-stone-500 uppercase tracking-widest font-mono">Eason Chan</p>
                </div>
                <button 
                  onClick={() => setIsExpanded(false)}
                  className="p-1 hover:bg-stone-100 rounded-full transition-colors text-stone-400"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="space-y-4">
                <p className="font-serif text-stone-800 leading-loose text-sm">
                  “發覺這世界 永遠太少空間<br/>
                  永遠太少深刻<br/>
                  因此花一天 支配一切時間<br/>
                  思索一切道理<br/>
                  改變一切習慣”
                </p>
                
                <div className="p-3 bg-stone-50/50 rounded-lg border border-stone-100/50">
                  <p className="font-serif text-stone-500 text-xs italic leading-relaxed">
                    這世界越來越快，「消失太快，捉得到太少……有各樣劫災和充滿意外」，但仍想「慢慢地邁向聽朝，靜靜地懷念昨日」，偶爾實現「今天只做一件事」。
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Collapsed Player / Control Bar */}
        <motion.div
          layout
          className="flex items-center gap-3 pl-2 pr-4 py-2 bg-white/80 backdrop-blur-md border border-white/40 shadow-lg hover:shadow-xl rounded-full transition-all hover:bg-white"
        >
          {/* Main Play/Pause Button (Vinyl Style) */}
          <button
            onClick={togglePlay}
            className="relative w-10 h-10 flex items-center justify-center bg-stone-900 rounded-full text-white overflow-hidden shadow-inner border border-stone-700 hover:scale-105 transition-transform active:scale-95 group"
            title={isPlaying ? "Pause" : "Play"}
          >
             <Disc 
               size={20} 
               className={`text-stone-400 opacity-80 transition-all duration-700 ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : 'group-hover:rotate-12'}`} 
               strokeWidth={1.5}
             />
             
             {/* Center dot for vinyl look */}
             <div className="absolute w-2.5 h-2.5 bg-stone-800 rounded-full border border-stone-600 shadow-sm z-10"></div>

             {/* Play/Pause Icon Overlay */}
             <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity z-20">
               {isPlaying ? (
                 <Pause size={12} fill="white" />
               ) : (
                 <Play size={12} fill="white" className="ml-0.5" />
               )}
             </div>
          </button>

          {/* Text Info - Clicking toggles expansion without playing */}
          <div 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex flex-col mr-1 cursor-pointer select-none"
          >
             <span className="font-serif text-sm font-bold text-ink whitespace-nowrap">今天只做一件事</span>
             <span className="text-[10px] text-stone-500 font-mono tracking-wide">EASON CHAN</span>
          </div>
        </motion.div>

      </motion.div>
    </>
  );
};