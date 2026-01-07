import React from 'react';
import { SectionTimeline } from './components/SectionTimeline';
import { SectionMemories } from './components/SectionMemories';
import { SectionQuotes } from './components/SectionQuotes';
import { SectionExcavation } from './components/SectionExcavation';
import { SectionSisyphus } from './components/SectionSisyphus';
import { MusicPlayer } from './components/MusicPlayer';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-stone-200 selection:text-stone-900 relative overflow-hidden">
      
      {/* Background Music Player */}
      <MusicPlayer />

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center p-8 text-center border-b border-stone-200/50 z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl relative flex flex-col items-center"
        >
          {/* To CHEN-Shi */}
          <span className="font-serif italic text-xl md:text-2xl text-stone-500 mb-10 block tracking-wide">
            To CHEN-Shi 陈师
          </span>
          
          {/* Titles */}
          <div className="space-y-6 mb-10">
            <h1 className="text-3xl md:text-6xl font-serif font-light text-ink leading-tight">
              La mémoire & l'oubli <span className="block sm:inline text-2xl md:text-5xl text-stone-600 font-normal mt-2 sm:mt-0 sm:ml-4">记忆与遗忘</span>
            </h1>
            <h1 className="text-3xl md:text-6xl font-serif font-light text-ink leading-tight">
              Eikōn & L'imagination <span className="block sm:inline text-2xl md:text-5xl text-stone-600 font-normal mt-2 sm:mt-0 sm:ml-4">图像与想象</span>
            </h1>
            <h1 className="text-3xl md:text-6xl font-serif font-light text-ink leading-tight">
              Le présent du passé <span className="block sm:inline text-2xl md:text-5xl text-stone-600 font-normal mt-2 sm:mt-0 sm:ml-4">让过去重新在场</span>
            </h1>
          </div>

          <div className="w-24 h-1 bg-stone-800 mx-auto mb-10"></div>
          
          {/* Quote */}
          <p className="text-lg md:text-2xl text-pencil font-serif italic mb-12 max-w-3xl mx-auto leading-loose px-4">
            「At the very same moment when the whole world is at our fingertips, it also seems completely out of our hands」
          </p>
          
          {/* Signature */}
          <div className="mt-4">
             <p className="text-base md:text-lg font-serif text-ink tracking-widest uppercase opacity-80 border-t border-stone-300 pt-6 px-10 inline-block">
                HAPPY NEW YEAR From Haoxuan淏璇
             </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 animate-bounce text-pencil"
        >
          <ArrowDown size={24} strokeWidth={1} />
        </motion.div>
      </header>

      <main className="max-w-5xl mx-auto px-6 md:px-12 py-24 space-y-40 relative z-10">
        <SectionTimeline />
        <SectionMemories />
        <SectionQuotes />
        <SectionExcavation />
        <SectionSisyphus />
      </main>

      <footer className="py-12 text-center text-stone-400 text-sm border-t border-stone-200 mt-24 relative z-10 flex flex-col items-center gap-4">
        <p className="font-serif italic">Created with Code & Gratitude. Jan 1, 2026.</p>
      </footer>
    </div>
  );
};

export default App;