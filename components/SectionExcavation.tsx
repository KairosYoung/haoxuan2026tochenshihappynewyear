import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Brain, Hash, Feather, Clock, Heart, Eye, 
  Pickaxe, ExternalLink, X, Construction, Library, Cpu
} from 'lucide-react';

// --- Types & States ---

type CardStatus = 'wip' | 'ready' | 'link';

interface IdeaItem {
  id: string;
  title: string;
  preview: React.ReactNode;
  fullContent?: React.ReactNode; // Presence of this triggers 'ready' state
  link?: string; // Presence of this triggers 'link' state
  colSpan?: string; // Tailwind class for grid layout
  rowSpan?: string; // Tailwind class for grid layout
  themeClass?: string; // Optional color overrides
}

// --- Data Configuration ---

// 1. Book List Data Structure
const BOOK_CATEGORIES = [
  { category: "人类学", names: "Ingold, Latour, Mol" },
  { category: "社会学", names: "Abbott, Lamont, Bourdieu, Paul-Michel Foucault, Bernstein, Émile Durkheim, Maximilian Weber" },
  { category: "哲学", names: "Arendt, Habermas, Edmund Husserl, Maurice Merleau-Ponty, Paul Ricour, Dan Zahavi, Gilles Deleuze, Michael Polanyi, Martha C. Nussbaum, Michael Oakeshott, Nietzsche" },
  { category: "经济学", names: "Hayek, Mises" },
  { category: "教育学", names: "Ray McDermott, David Labaree, Biesta, Pinar, Young, Bruner, Howard Gardener, Roth, Spencer, Goodson" },
  { category: "科学哲学", names: "Kuhn, Toulmin, Hacking, Andrew Pickering" }
];

// 2. Topic Cards
const IDEA_ITEMS: IdeaItem[] = [
  // 1.1 Core Card (Large)
  {
    id: '1.1',
    title: '1.1 知识-学科-课程-教材-教学-社会秩序/制度',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2',
    preview: (
      <div className="space-y-4 pt-2 overflow-y-auto max-h-[400px] pr-2 scrollbar-thin scrollbar-thumb-stone-200">
        {/* Group 1 */}
        <div>
           <h4 className="font-bold text-stone-700 text-sm mb-1 flex items-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
             定义；边界关系
           </h4>
           <ul className="pl-5 text-xs text-stone-500 space-y-1 list-disc marker:text-stone-300 font-sans leading-relaxed">
             <li>课程是什么</li>
             <li>课程与学科的关系</li>
             <li>课程自身的目标是什么</li>
             <li>课程与教学的关系</li>
             <li>教材是课程的拟态？教材是一种课程改革的意向物吗？</li>
           </ul>
        </div>
        
        {/* Group 2 */}
        <div>
           <h4 className="font-bold text-stone-700 text-sm mb-1 flex items-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
             意向性 intentionality
           </h4>
           <p className="pl-5 text-xs text-stone-500 font-sans">
             (外在意图、对未来的期望/意图用何种形式放入课程中)
           </p>
        </div>

        {/* Group 3 */}
        <div>
           <h4 className="font-bold text-stone-700 text-sm mb-1 flex items-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
             Tacit knowledge、直觉；无知ignorance；知识管理
           </h4>
        </div>

        {/* Group 4 */}
        <div>
           <h4 className="font-bold text-stone-700 text-sm mb-1 flex items-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
             知识 knowledge
           </h4>
           <p className="pl-5 text-xs text-stone-500 leading-relaxed font-sans">
             (知识的可用性、可传递性）、知道knowing（动词、过程）、思考（合作学习）、思维/心灵/意识、判断、实践/行动/决策
           </p>
        </div>

        {/* Group 5 */}
        <div>
           <h4 className="font-bold text-stone-700 text-sm mb-1 flex items-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
             知识与媒介、技术（教材）
           </h4>
        </div>

        {/* Group 6 */}
        <div>
           <h4 className="font-bold text-stone-700 text-sm mb-1 flex items-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
             Synthesizing；wicked problem（突破跨学科）；边界boundary learning
           </h4>
        </div>

        {/* Group 7 */}
        <div>
           <h4 className="font-bold text-stone-700 text-sm mb-1 flex items-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
             心流 flow
           </h4>
        </div>

        {/* Group 8 */}
        <div>
           <h4 className="font-bold text-stone-700 text-sm mb-1 flex items-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
             课程改革
           </h4>
           <p className="pl-5 text-xs text-stone-500 font-sans">
             (发生、动力；人、物-意向性-教材、事)
           </p>
        </div>
      </div>
    ),
  },
  // 1.2
  {
    id: '1.2',
    title: '1.2 评价改革',
    preview: (
        <div className="flex flex-col justify-between h-full min-h-[80px]">
            <p className="text-stone-600 font-serif text-lg">科举、考试、反馈</p>
            <div className="mt-4 h-1 w-12 bg-stone-100 rounded-full"></div>
        </div>
    )
  },
  // 1.3
  {
    id: '1.3',
    title: '1.3 事、任务、事感、实感、实践感（feel of rules）',
    preview: (
        <div className="flex items-start gap-2 mt-2">
            <Hash size={18} className="text-stone-300 shrink-0 mt-1" />
        </div>
    )
  },
  // 1.4
  {
    id: '1.4',
    title: '1.4 身体、实践、不确定性',
    preview: (
      <div className="relative h-24">
         <Brain size={48} className="text-stone-100 absolute bottom-0 right-0" />
      </div>
    )
  },
  // 1.5
  {
    id: '1.5',
    title: '1.5 时间；时空装置/架构',
    preview: (
        <div className="relative h-24">
            <Clock size={48} className="text-stone-100 absolute bottom-0 right-0" />
            <div className="w-full h-1 bg-gradient-to-r from-stone-200 to-transparent mt-8 absolute bottom-4"></div>
        </div>
    )
  },
  // 1.6
  {
    id: '1.6',
    title: '1.6 想象、图像、记忆、遗忘',
    preview: (
        <div className="flex items-center gap-2 mt-4">
            <Eye size={18} className="text-stone-300" />
            <p className="text-stone-600 font-serif text-base">希望和失望——过去和未来</p>
        </div>
    )
  },
  // 1.7
  {
    id: '1.7',
    title: '1.7 情感',
    preview: (
        <div className="flex items-start gap-2 mt-2">
            <Heart size={18} className="text-stone-300 mt-1 shrink-0" />
            <p className="text-stone-600 font-serif text-base leading-relaxed">
            直言、真诚、责任、关怀、脆弱、共情、世界；惊奇、好奇、关怀wonder curiosity care
            </p>
        </div>
    )
  },
  // AI Era Card
  {
    id: 'ai-era',
    title: '总体性的“人工智能”时代',
    themeClass: 'bg-gradient-to-br from-white to-indigo-50/50 border-indigo-100 hover:border-indigo-200',
    preview: (
        <div className="relative h-24 flex flex-col justify-end">
            <div className="absolute top-0 right-0 text-indigo-100">
                <Cpu size={48} strokeWidth={1} />
            </div>
            <p className="text-indigo-900/60 font-serif text-sm relative z-10 font-medium">
               The Era of Artificial Intelligence
            </p>
            <div className="w-8 h-1 bg-indigo-200 mt-2"></div>
        </div>
    )
  }
];

// --- Components ---

const CardStatusBadge: React.FC<{ status: CardStatus }> = ({ status }) => {
    if (status === 'wip') return (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-1 bg-stone-100 rounded-full border border-stone-200/50 shadow-sm opacity-60 group-hover:opacity-100 transition-opacity z-20">
            <Pickaxe size={12} className="text-stone-400" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">Digging</span>
        </div>
    );
    if (status === 'ready') return (
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full border border-stone-200 shadow-sm text-stone-400 group-hover:text-ink group-hover:border-stone-400 transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300 z-20">
            <span className="text-xs font-serif italic">Read More</span>
            <BookOpen size={14} />
        </div>
    );
    return (
        <div className="absolute top-4 right-4 z-20">
            <ExternalLink size={16} className="text-stone-400" />
        </div>
    );
};

const IdeaCard: React.FC<{ item: IdeaItem; onClick: (item: IdeaItem) => void; isHeaderHidden?: boolean }> = ({ item, onClick, isHeaderHidden = false }) => {
    let status: CardStatus = 'wip';
    if (item.link) status = 'link';
    else if (item.fullContent) status = 'ready';

    const isWip = status === 'wip';
    const baseClasses = "relative p-6 rounded-xl transition-all duration-300 group cursor-pointer h-full flex flex-col";
    const wipClasses = "bg-white border-2 border-dashed border-stone-200 hover:border-stone-300";
    const readyClasses = "bg-white border border-stone-200 shadow-sm hover:shadow-lg hover:-translate-y-1";
    
    const finalClasses = item.themeClass 
        ? `${baseClasses} ${item.themeClass} ${isWip ? 'border-dashed border-2 border-indigo-200' : 'shadow-sm hover:shadow-md'}`
        : `${baseClasses} ${isWip ? wipClasses : readyClasses}`;

    return (
        <motion.div 
            className={`${item.colSpan || ''} ${item.rowSpan || ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => onClick(item)}
        >
            <div className="h-full">
                <div className={finalClasses}>
                    <div className="relative z-10 flex-1">
                        {!isHeaderHidden && (
                            <h3 className={`font-serif font-bold text-lg mb-3 ${item.themeClass?.includes('bg-stone-900') ? 'text-white' : 'text-ink'}`}>
                                {item.title}
                            </h3>
                        )}
                        {item.preview}
                    </div>
                    <CardStatusBadge status={status} />
                </div>
            </div>
        </motion.div>
    );
};

const WipModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none"
    >
        <div className="absolute inset-0 bg-stone-900/10 backdrop-blur-[2px] pointer-events-auto" onClick={onClose}></div>
        
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-stone-200 flex flex-col items-center text-center max-w-sm w-full pointer-events-auto relative">
             <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-4 text-stone-500">
                 <Construction size={24} />
             </div>
             <h4 className="font-serif font-bold text-xl text-ink mb-2">Thinking in progress...</h4>
             <p className="text-stone-500 font-serif">挖掘、加载中。<br/><span className="text-xs font-mono uppercase mt-2 block opacity-70">Idea initialized, processing...</span></p>
             <button onClick={onClose} className="mt-6 p-2 rounded-full hover:bg-stone-100 transition-colors absolute top-2 right-2">
                 <X size={16} className="text-stone-400" />
             </button>
        </div>
    </motion.div>
);

const DetailModal: React.FC<{ item: IdeaItem; onClose: () => void }> = ({ item, onClose }) => (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-stone-900/70 backdrop-blur-sm"
        onClick={onClose}
    >
        <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col relative"
        >
            <div className="px-8 py-6 border-b border-stone-100 flex justify-between items-center bg-white shrink-0">
                 <h3 className="text-2xl font-serif font-bold text-ink">{item.title}</h3>
                 <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-500">
                     <X size={24} />
                 </button>
            </div>
            <div className="p-8 md:p-12 overflow-y-auto">
                <div className="prose prose-stone prose-lg font-serif">
                   {item.fullContent}
                </div>
            </div>
        </motion.div>
    </motion.div>
);

export const SectionExcavation: React.FC = () => {
  const [activeItem, setActiveItem] = useState<IdeaItem | null>(null);
  const [showWipToast, setShowWipToast] = useState(false);

  const handleCardClick = (item: IdeaItem) => {
      if (item.link) {
          window.open(item.link, '_blank');
      } else if (item.fullContent) {
          setActiveItem(item);
      } else {
          setShowWipToast(true);
      }
  };

  return (
    <section className="py-24 relative scroll-mt-24" id="ideas">
       {/* 1. Main Page Header */}
       <div className="max-w-6xl mx-auto mb-10 px-6">
         <div className="flex flex-wrap items-baseline gap-4 mb-4">
             <h2 className="text-3xl md:text-5xl font-serif text-ink">
               Idea Notebook – Index
               <span className="block md:inline md:ml-4 text-lg md:text-2xl text-stone-400 font-normal">
                 （争取春节完成！）
               </span>
             </h2>
             <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-500 border border-stone-200 text-xs font-mono uppercase tracking-widest animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                Status: Dynamic Updating / 未完待续...
             </span>
         </div>
         
         <p className="text-stone-500 font-serif italic mt-4 flex items-start md:items-center gap-2 leading-relaxed">
           <Feather size={18} className="shrink-0 mt-1 md:mt-0" />
           借鉴自Andrew Abbott用来记录自己的想法是如何发展的笔记本，“我总有一个关于我各种思考的、连续的、按主题索引的记录”。
         </p>
       </div>

       <div className="max-w-6xl mx-auto px-6 space-y-12">
         
         {/* --- ELEMENT A: THE MANIFESTO --- */}
         <div className="bg-[#FDFBF7] border border-stone-100 shadow-md p-2 md:p-6 rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D6D3D1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            <div className="bg-white/50 p-6 md:p-8 rounded-lg border border-stone-200/50 shadow-sm backdrop-blur-sm max-w-4xl mx-auto relative z-10">
                <h3 className="text-2xl font-serif font-bold text-ink mb-6 text-center">引言</h3>
                <p className="font-serif text-stone-700 leading-loose text-justify text-lg space-y-4">
                    一些印象中这大半年思考、触及过的部分话题，蜻蜓点水，但也都是一些想继续阅读和感兴趣的点。借用挖洞的隐喻，最终想要挖深，口子要开大。但现在的状态或许是在到处凿一个小洞，但是到底哪里深下去，这样分散、随处凿的洞到底如何勾连起来、成为一个为挖深而开的口，还是很大的问题，是必须要去回顾、整理、synthesizing的了。
                    <br/><br/>
                    开始感到恐惧我在遗忘种种，发觉太多想法的瞬间与发展难以想起、变得断裂，图像变得模糊，以至于我无从继续发展、想象。这种恐惧促使我，希望用书写留下更多外在印记，将自己的思想是如何发展起来的去记录下来。但这不等于事无巨细、数据的冗余。遗忘实则是重要的，遗忘和记忆都在提示我们什么到底什么是刻骨铭心，什么是总会想起的。在此意义上，书记和记忆的更大意义是探究与创造。
                    <br/><br/>
                    另外，记住、意识到了我总是在遗忘，也是重要的。因为会遗忘，记住才有意义。遗忘，也让人宽恕，让人有希望。遗忘让回顾变得有意义，在回顾中识认（recognize）、分类、找到秩序、发现枝蔓。
                </p>
                <div className="mt-8 pt-8 border-t border-stone-200 text-center">
                    <p className="font-serif italic text-stone-500 font-medium">
                        “这应该是一个不断翻阅、重复识认、展现意向性的笔记本，而不是一个用来卸载、存放想法的仓库。”
                    </p>
                </div>
            </div>
         </div>

         {/* --- ELEMENT B: TOPICS --- */}
         <div>
             <div className="w-full py-4 mb-4 border-b border-stone-200">
                <h3 className="text-2xl font-serif font-bold text-ink">1 主题索引</h3>
                <p className="text-stone-400 font-serif italic mt-2">「在广泛的探索、漫游中，找到那个始终萦绕、抓住自己的问题」</p>
             </div>
             
             {/* Grid Layout */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
                 {IDEA_ITEMS.map((item) => (
                     <IdeaCard key={item.id} item={item} onClick={handleCardClick} />
                 ))}
             </div>
         </div>

         {/* --- ELEMENT C: BOOKS (STATIC LIST) --- */}
         <div>
             <div className="w-full py-4 mb-6 border-b border-stone-200">
                <h3 className="text-2xl font-serif font-bold text-ink">2 人名和书名索引</h3>
             </div>
             
             {/* Static Full-Width Card - No Click Interaction */}
             <div className="bg-stone-50 border border-stone-200 rounded-xl p-8 md:p-10 shadow-sm">
                <div className="flex items-center gap-3 text-stone-400 mb-8">
                    <Library size={24} />
                    <span className="text-sm font-mono uppercase tracking-widest">Reading List</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                   {/* Left Column: Quote */}
                   <div className="md:col-span-2 mb-4">
                      <p className="font-serif text-xl text-stone-600 italic leading-relaxed border-l-4 border-stone-300 pl-6">
                        「读博期间要读great works，读classic literature」<br/>
                        「值得记住的人的书，才值得读（最近这么觉得）」
                      </p>
                   </div>

                   {/* List Categories */}
                   {BOOK_CATEGORIES.map((cat, idx) => (
                      <div key={idx} className="space-y-2">
                         <h4 className="font-bold text-stone-800 text-sm uppercase tracking-wider flex items-center gap-2 border-b border-stone-200 pb-2 mb-3">
                            <span className="w-1.5 h-1.5 bg-stone-400 rounded-full"></span>
                            {cat.category}
                         </h4>
                         <p className="font-serif text-stone-600 leading-loose">
                            {cat.names}
                         </p>
                      </div>
                   ))}
                </div>
             </div>
         </div>

         {/* --- ELEMENT D: FOOTER NOTE --- */}
         <div className="text-center mt-12 pb-8">
            <p className="font-serif text-stone-400 italic text-sm md:text-base tracking-wide">
               "期待陈老师与我分享更多好玩的概念、理论、经典文献、学术动力之八卦，去大胆建构，去慢慢“拱”！"
            </p>
         </div>

       </div>

       {/* --- Modals --- */}
       <AnimatePresence>
           {showWipToast && <WipModal onClose={() => setShowWipToast(false)} />}
           {activeItem && <DetailModal item={activeItem} onClose={() => setActiveItem(null)} />}
       </AnimatePresence>

    </section>
  );
};
