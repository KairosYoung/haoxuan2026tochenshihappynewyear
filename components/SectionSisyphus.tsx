import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Loader2, MousePointer2, Sparkles, 
  CircleDashed, X, Eye, Brain, Sun
} from 'lucide-react';
import confetti from 'canvas-confetti';

// --- Types ---
interface FloatingText {
  id: number;
  x: number;
  y: number;
  text: string;
}

interface ModalContent {
  title: string;
  content: React.ReactNode;
}

// --- Styles ---
const ACCENT_IMG_STYLE = "w-full max-w-[200px] h-auto rounded-lg border border-stone-200 shadow-md object-cover block mx-auto my-3";
const BUTTON_STYLE = "mt-2 inline-flex items-center gap-2 px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-600 text-xs font-bold uppercase tracking-wider rounded-md transition-colors border border-stone-200";

// --- Components ---

const PipelineItem = ({ 
  title, 
  badge, 
  note, 
  quote, 
  children,
  onAction,
  actionLabel = "VIEW DRAFT",
  colorClass = "border-stone-200"
}: { 
  title: string; 
  badge?: string; 
  note?: string; 
  quote?: string;
  children?: React.ReactNode;
  onAction?: () => void;
  actionLabel?: string;
  colorClass?: string;
}) => (
  <div className="relative pl-8 pb-10 last:pb-0 group">
     {/* Timeline Line */}
     <div className="absolute left-0 top-2 bottom-0 w-px bg-stone-200 group-last:bottom-auto group-last:h-2"></div>
     {/* Timeline Dot */}
     <div className={`absolute -left-[5px] top-2.5 w-[11px] h-[11px] rounded-full bg-white border-2 ${colorClass}`}></div>
     
     <div className="space-y-2">
         <h4 className="font-serif font-bold text-lg text-ink leading-snug">{title}</h4>
         
         <div className="flex flex-wrap gap-2 items-center">
             {badge && (
                 <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border bg-stone-50 text-stone-500 uppercase ${colorClass.replace('border-', 'border-opacity-30 border-')}`}>
                     {badge}
                 </span>
             )}
         </div>

         {note && <p className="text-stone-500 text-sm font-sans italic leading-relaxed">{note}</p>}
         
         {quote && (
            <div className="bg-stone-50/50 border-l-2 border-stone-200 pl-4 py-3 my-2">
                <p className="text-stone-600 font-serif italic text-sm leading-relaxed">"{quote}"</p>
            </div>
         )}

         {children}

         {onAction && (
             <button onClick={onAction} className={BUTTON_STYLE}>
                 <Eye size={14} />
                 <span>{actionLabel}</span>
             </button>
         )}
     </div>
  </div>
);

const DetailModal = ({ content, onClose }: { content: ModalContent; onClose: () => void }) => (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm"
        onClick={onClose}
    >
        <motion.div 
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-2xl max-h-[85vh] rounded-xl shadow-2xl flex flex-col overflow-hidden"
        >
            <div className="px-6 py-4 border-b border-stone-100 flex justify-between items-start bg-stone-50/50">
                 <h3 className="text-xl font-serif font-bold text-ink pr-8">{content.title}</h3>
                 <button onClick={onClose} className="p-1 hover:bg-stone-200 rounded-full transition-colors text-stone-400">
                     <X size={20} />
                 </button>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto">
                <div className="font-serif text-stone-700 leading-loose whitespace-pre-wrap text-lg">
                   {content.content}
                </div>
            </div>
        </motion.div>
    </motion.div>
);

const BlessingModal = ({ onClose, onReplay }: { onClose: () => void, onReplay: () => void }) => (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-stone-900/60 backdrop-blur-md"
    >
        <motion.div 
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            className="bg-white/90 w-full max-w-lg rounded-2xl shadow-2xl border border-white/50 p-8 md:p-12 relative text-center"
            style={{ boxShadow: "0 0 50px rgba(212, 175, 55, 0.2)" }}
        >
             <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-stone-100 rounded-full text-stone-400 transition-colors">
                 <X size={20} />
             </button>

             <Sparkles className="w-10 h-10 text-amber-500 mx-auto mb-6 animate-pulse" />
             
             <div className="font-serif text-lg md:text-xl text-stone-800 leading-loose text-justify font-medium tracking-wide">
                <p>
                  "祝最敬爱的陈老师、陈sir、陈格拉底、西西弗陈新年快乐，新的一年从从容容、游刃有余，在做难而有价值的事时的实感与事感中享受更多直觉的瞬间，在已知、未知与无知的知识秩序流转中生产出更多可用知识，继续开心地穿梭于现象与理论、具体与宏大、现实与理想、控制与解放之中，带着已知与无知朝着那个意向性的未知走去、成事，祝吾师常感欣慰、陈师成事。"
                </p>
             </div>

             <div className="mt-10">
                 <button 
                    onClick={onReplay}
                    className="px-6 py-2 bg-stone-800 text-amber-50 rounded-full font-serif text-sm tracking-widest hover:bg-stone-900 hover:scale-105 transition-all shadow-lg"
                 >
                    再放一次烟花 / Replay Fireworks
                 </button>
             </div>
        </motion.div>
    </motion.div>
);

export const SectionSisyphus: React.FC = () => {
  // Clicker State
  const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);
  // Reveal State
  const [isRevealed, setIsRevealed] = useState(false);
  // Modal State
  const [activeModal, setActiveModal] = useState<ModalContent | null>(null);
  
  // Easter Egg States
  const [isSisyphusTransformed, setIsSisyphusTransformed] = useState(false);
  
  // Grand Finale State
  const [showBlessingModal, setShowBlessingModal] = useState(false);

  // Clicker Logic
  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const messages = ["功德+1", "发文+1", "快乐+1", "Paper+1", "Idea+1", "头发+1"];
    const text = messages[Math.floor(Math.random() * messages.length)];
    
    const newText: FloatingText = { id: Date.now(), x, y, text };
    
    setFloatingTexts(prev => [...prev, newText]);
    
    // Cleanup slowly
    setTimeout(() => {
        setFloatingTexts(prev => prev.filter(item => item.id !== newText.id));
    }, 2000);
  };

  // Trigger Grand Fireworks - Updated with Z-Index fix and continuous barrage
  const triggerFireworks = () => {
      const duration = 3000;
      const end = Date.now() + duration;
      const colors = ['#ef4444', '#eab308', '#3b82f6', '#10b981', '#8b5cf6', '#D4AF37', '#ffffff'];

      (function frame() {
        // Left Cannon
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
          zIndex: 9999 // CRITICAL FIX: Ensure visibility over modals
        });
        
        // Right Cannon
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
          zIndex: 9999 // CRITICAL FIX
        });
        
        // Random massive bursts occasionally
        if (Math.random() < 0.1) { // 10% chance per frame for a burst
             confetti({
                 particleCount: 80,
                 spread: 120,
                 origin: { x: Math.random(), y: Math.random() * 0.6 },
                 colors: colors,
                 zIndex: 9999
             });
        }

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
  };

  const handleGrandFinale = () => {
      triggerFireworks();
      // Delay showing the modal slightly to let the fireworks start
      setTimeout(() => setShowBlessingModal(true), 1500);
  };

  const handleReplayFireworks = () => {
      triggerFireworks();
  };

  // Reveal Logic
  const handleReveal = () => {
      setIsRevealed(true);
  };

  return (
    <section className="py-24 relative scroll-mt-24" id="sisyphus">
       
       {/* --- PART A: HEADER & INTRO --- */}
       <div className="max-w-4xl mx-auto mb-16 text-center px-6">
          <div className="inline-flex items-center justify-center p-3 bg-stone-50 rounded-full mb-6 animate-spin-slow">
              <Loader2 size={32} className="text-stone-400" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif text-ink mb-8">西西弗斯的西西弗柿/事</h2>
          
          {/* Easter Egg 1: Sisyphus Transformation */}
          <div className="flex flex-col items-center mb-10">
              <motion.div 
                onClick={() => setIsSisyphusTransformed(!isSisyphusTransformed)}
                className="w-24 h-24 md:w-32 md:h-32 cursor-pointer relative group z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                 <AnimatePresence mode="wait">
                     {!isSisyphusTransformed ? (
                        <motion.div
                            key="stone-container"
                            initial={{ y: 0, opacity: 1 }}
                            exit={{ y: -100, opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="w-full h-full"
                        >
                            <img 
                                src="/xixifushi.png" 
                                alt="Sisyphus" 
                                className="w-full h-full object-cover rounded-full border-4 border-stone-100 shadow-inner grayscale hover:grayscale-0 transition-all duration-500 animate-pulse"
                            />
                        </motion.div>
                     ) : (
                        <motion.div 
                            key="sun"
                            initial={{ opacity: 0, scale: 0.5, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ type: "spring", bounce: 0.4 }}
                            className="w-full h-full rounded-full bg-gradient-to-br from-amber-100 to-orange-200 border-4 border-orange-100 shadow-[0_0_40px_rgba(251,191,36,0.6)] flex items-center justify-center relative overflow-hidden"
                        >
                            <Sun className="text-orange-500 w-12 h-12 md:w-16 md:h-16 animate-[spin_10s_linear_infinite]" />
                        </motion.div>
                     )}
                 </AnimatePresence>
              </motion.div>

              {/* Text Hint Below */}
              <button
                  onClick={() => setIsSisyphusTransformed(!isSisyphusTransformed)}
                  className="mt-3 flex items-center gap-2 text-stone-500 font-serif text-sm hover:text-amber-700 transition-colors animate-bounce"
              >
                  <span className="text-lg">👆</span>
                  <span className="border-b border-transparent hover:border-amber-700">点击帮他一把 / Click to help push</span>
              </button>
          </div>

          <div className="bg-[#FDFBF7] p-6 md:p-8 rounded-xl border border-stone-200 shadow-sm text-left max-w-2xl mx-auto relative">
              <span className="absolute -top-3 left-6 bg-[#FDFBF7] px-2 text-xs font-mono text-stone-400 uppercase tracking-widest border border-stone-100 rounded-sm">Intro</span>
              <div className="font-serif text-stone-700 leading-relaxed text-justify">
                <p className="mb-4">
                  引言：<br/>
                  老师，这可是您说的“列出来催你，别放过我”。是否想到，我真的给你做一个可视化放这儿[狗头]，以免你每次都（无辜地）说“你催我啊”（确实你也太忙太辛苦，我也不敢催），所以我这里也不是催你，我只是“列出来”放这儿，提醒我自己，嗯。
                </p>
                {/* Embedded Meme */}
                <div className="flex justify-center my-4">
                   <img src="/biefangguowo.png" alt="Don't let me go" className="w-24 h-auto rounded-md shadow-md border border-stone-200 transform -rotate-2 hover:rotate-0 transition-transform" />
                </div>
              </div>
          </div>
       </div>

       {/* --- PART B: THE PIPELINE --- */}
       <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-200 relative mb-16">
          <h3 className="font-serif font-bold text-2xl text-ink mb-10 pl-2 border-l-4 border-stone-800">
            西西弗斯也有DDL
          </h3>

          {/* Group 1: Urgent (Red/Orange) */}
          <div className="mb-12">
             <h4 className="flex items-center gap-2 text-orange-600 font-bold uppercase tracking-widest text-xs mb-6">
                <CircleDashed size={14} className="animate-pulse" /> 亟待陈师出手 (Urgent)
             </h4>
             
             <PipelineItem 
               title="1. Sputnik升空已一年有余（2024.11.11）"
               badge="DDL: 20250530"
               note="（参考您之前发我的华师大学报“中国科学教育政策、研究与实践创新发展”，但感觉也不一定合适、可能不足够科学教育hhhh）"
               colorClass="border-orange-400"
               onAction={() => {}} 
               actionLabel="VIEW DRAFT"
             />

             <PipelineItem 
               title="2. 基于农耕文化的STEM（2025.09）"
               colorClass="border-orange-400"
               onAction={() => {}} 
               actionLabel="VIEW DRAFT"
             />

             <PipelineItem 
               title="3. 帮你记得的你的一句话哈哈哈“今天早上我还在想怎么可以做一个全国老师围绕教材的小红书”"
               colorClass="border-orange-400"
               children={
                 <div className="mt-4 relative cursor-pointer select-none group w-full max-w-[200px] mx-auto" onClick={handleImageClick}>
                     {/* UX Hint: Added Badge */}
                     <div className="absolute -top-3 -right-8 z-20 animate-bounce">
                        <span className="bg-amber-100 text-stone-800 border border-stone-200 text-[10px] font-bold px-2 py-1 rounded-full shadow-sm flex items-center gap-1 whitespace-nowrap">
                           <MousePointer2 size={12} /> 点我有惊喜 / Click for Merit
                        </span>
                     </div>

                     <div className="relative overflow-hidden rounded-lg border border-stone-200 w-full shadow-md">
                         <img 
                           src="/buduanchuangzao.png" 
                           alt="Create" 
                           className="w-full h-auto opacity-90 group-hover:scale-105 transition-transform duration-500" 
                         />
                         <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity">
                             <span className="text-white font-bold tracking-widest uppercase text-xs flex items-center gap-1">
                                <MousePointer2 size={12} /> Click
                             </span>
                         </div>
                     </div>
                     
                     {/* Floating Texts */}
                     <AnimatePresence>
                         {floatingTexts.map(ft => (
                             <motion.div
                               key={ft.id}
                               initial={{ opacity: 1, y: 0, scale: 0.8 }}
                               animate={{ opacity: 0, y: -120, scale: 1.5 }}
                               exit={{ opacity: 0 }}
                               transition={{ duration: 1.5, ease: "easeOut" }}
                               className="absolute pointer-events-none text-orange-500 font-bold font-serif text-2xl md:text-3xl z-20 whitespace-nowrap drop-shadow-sm"
                               style={{ left: ft.x - 40, top: ft.y - 40 }}
                             >
                                 {ft.text}
                             </motion.div>
                         ))}
                     </AnimatePresence>
                 </div>
               }
             />
          </div>

          {/* Group 2: Student Polish (Blue) */}
          <div className="mb-12">
             <h4 className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">
                <Loader2 size={14} className="animate-spin-slow" /> 需要我变成可发表的
             </h4>
             
             {/* Image placed at the top of the group */}
             <div className="mb-6">
                 <img src="/kefabiaode.png" alt="Publishable" className={ACCENT_IMG_STYLE} />
             </div>

             <PipelineItem 
               title="1. 《探求多殊：我们在如何谈论科学学科实践——兼论课程改革话语的流变》"
               quote="这篇文章整理得不错，可以更大胆和直接一些，从这些梳理中提出中国的科学教育应该提出什么样的实践观，大胆去建构，把复数变成compound concept"
               colorClass="border-blue-400"
             />

             <PipelineItem 
               title="2. 《“加来道雄”为什么离开了科学》"
               quote="加强和文献的深层对话；抓住科学兴趣这样的经典议题深挖。"
               note="联系写的好奇心的英文小文章，进一步考虑好奇心、创造力等话题。"
               colorClass="border-blue-400"
             />
          </div>

          {/* Group 3: Planning (Green) */}
          <div className="mb-12">
             <h4 className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-widest text-xs mb-6">
                <Sparkles size={14} /> 课题申报 & 小论文 (Planning)
             </h4>
             
             <PipelineItem 
               title="课题： 《人工智能时代的教材本体研究/教材的变与不变——对经典教材与生成式教材的比较研究》"
               colorClass="border-emerald-400"
               onAction={() => setActiveModal({
                   title: "课题详情",
                   content: <>
                       <p>人工智能时代，教材还会一直保持原有的纸本样态吗，教材的结构形态与功能定位会发生颠覆性的变化吗？知识生产秩序、流转方式的变革会对教材的内容（知识的选择与组织方式）、生产（包括编写、审查、出版、发行、修订等）、使用（教材的选择、对教材的用法）带来什么风险与机遇？</p>
                       <p className="mt-4">关注技术、媒介理论；重新理解“知识”（认识论之外），AI时代知识和媒介的关系；教材与教辅的关系</p>
                       <p className="mt-4 font-bold">小论文：</p>
                       <ul className="list-disc pl-5 space-y-2 mt-2">
                           <li>教材本体研究与数智技术的冲击/在人工智能时代重新思考“好教材”——对科学经典教材与生成式教材的比较研究（教材的语言、思维、逻辑结构、图文、超载/时间）</li>
                           <li>学生如何看待（理解与使用）教材</li>
                           <li>PSSC（教材出海问题）\HPP经典教材研究；教材的teacher proof问题</li>
                           <li>教材：课程改革的意向物？课程的拟态？</li>
                       </ul>
                   </>
               })}
               actionLabel="查看课题详情 / View Details"
             />
          </div>

          {/* Group 4: Brainstorming (Purple) */}
          <div className="">
             <h4 className="flex items-center gap-2 text-purple-600 font-bold uppercase tracking-widest text-xs mb-6">
                <Brain size={14} /> 逼自己动笔 (Brainstorming)
             </h4>
             
             <p className="text-stone-500 font-serif italic mb-4 text-sm">"想了一学期，感觉得逼自己动笔了的题们："</p>
             
             <PipelineItem 
                title="1.《“跨学科”作为课程话语的局限性//“融通”课程：一个中国课程话语的构建》"
                colorClass="border-purple-400"
                actionLabel="查看思路"
                onAction={() => setActiveModal({
                    title: "关于“跨学科”与“融通”的思路",
                    content: "（课程与学科的关系；提出融通，基于synthesizing、boundary learning等；或可考虑STEM为例，对STEM的定义、历史和组织方式的反思，尝试把重大议题、为了什么放置到“前景”-真正的中国式STEM，始终考虑的是到底能解决什么全球难题；超越补丁式的跨学科、思考跨课程、whole curriculum等的思路）"
                })}
             />

             <PipelineItem 
                title="2.《如何理解“像科学家一样实践”之“像”》（科学家探究和学生探究的关系）"
                colorClass="border-purple-400"
                actionLabel="查看思路"
                onAction={() => setActiveModal({
                    title: "关于“像科学家一样实践”的思路",
                    content: <>
                        <p>首先，从历史溯源上，这句话溯源到布鲁纳那儿，但其实也只是一个他个人的理论判断，当然或许也和pssc课程改革的理念和实践有关系，缺乏实证研究的国内课程学界基本也只会引用这么一句话；</p>
                        <p className="mt-4">其次，21世纪初美国大量对儿童学习过程和科学课堂互动的研究，在一定程度上为低龄儿童也可以参与科学理论建构、解释推理提供了经验证据，但这些可能还没有为国内所接受（也反映在最新的科技教育政策文本的分段教学里，还是提出低年段只是以“游戏化”教学为主……）。但是这些“像科学家一样实践”的研究可能都还是聚焦于认知、概念建构层面的，对身体、情感以及三者的关系讨论还比较少，以及大量研究主要也分成两派，一类是很零散的小点，一类又变成流程化的评估像不像。</p>
                        <p className="mt-4">最后，自己觉着毕业论文里有两个突破，一个是退回到“事”所伴随的学生和过程视角，形成了一个基于经验证据、更完整的思考“像科学家一样实践”的框架（默会、言语、心灵、情感、时间、物质、话语）；二是，看到“实践”的主体及彼此的关系，即“像科学家实践”这句话实则总是包含科学家、学生、教师/官方剧本的预设三个主体的动态互动，根本上就像薛定谔的猫，不打开这个盒子永远不可能知道在不在、怎么可以“像科学家一样实践”，并不是一个可以提前判断的东西。最后呢，这个问题可能也是回到“实践”本身在阿伦特概念中的“准备性”，“像”作为教育学立场的一种坚持。</p>
                    </>
                })}
             />

             <PipelineItem 
                title="3. 毕业论文"
                colorClass="border-purple-400"
                actionLabel="查看思路"
                onAction={() => setActiveModal({
                    title: "关于毕业论文的思路",
                    content: <>
                        <p>毕业论文之前其实考虑过三个章节，但说实话，自己现在看都觉得好像回答不了so what，不知道为啥，现在感觉“做中学”“学科实践”这样的话题都有点太小、没意思了……</p>
                        <ul className="list-disc pl-5 mt-4 space-y-2">
                            <li>身体之重：为什么要让小学生在“做”中“学”科学（兼论从表征的传递到注意力的教育）</li>
                            <li>身体之限：小学生是如何难以像科学家一样实践的</li>
                            <li>具身不止认知：重新思考教育研究中的“身体”转向</li>
                            <li>Body for what：A Systematic Review of the Role\sense-making of the Body in Science Education Research</li>
                        </ul>
                    </>
                })}
             />

             <PipelineItem 
                title="4. Learn to Quit：重新理解教育中的“有效失败”"
                colorClass="border-purple-400"
                // No modal requested for this one in prompt details
             />

             <PipelineItem 
                title="5. 体育"
                colorClass="border-purple-400"
                // No modal requested for this one in prompt details
             />
          </div>
       </div>

       {/* --- PART C: THE GOAL & RESPONSE --- */}
       <div className="max-w-xl mx-auto text-center relative z-10 mb-24">
           <div className="p-8 bg-stone-800 rounded-2xl shadow-xl text-stone-200 overflow-hidden relative">
               
               {/* 1. Image */}
               <img src="/linghunshitu.png" alt="Goal" className="w-full max-w-[150px] mx-auto rounded-lg mb-6 border border-stone-600 opacity-90 shadow-md" />

               {/* 2. Text */}
               <h3 className="font-serif text-lg md:text-xl mb-8 leading-relaxed px-4">
                  "2026我的目标，和陈师一起署名发表一篇，<br/>您看还有机会吗？"
               </h3>

               {/* 3. Interaction */}
               {!isRevealed ? (
                   <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     onClick={handleReveal}
                     className="px-8 py-3 bg-white text-stone-900 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-stone-100 transition-colors shadow-lg"
                   >
                       查看陈师回复
                   </motion.button>
               ) : (
                   <motion.div
                     initial={{ opacity: 0, scale: 0.8, y: 20 }}
                     animate={{ opacity: 1, scale: 1, y: 0 }}
                     className="relative"
                   >
                       <img 
                         src="/weishiqunuli.png" 
                         alt="Response" 
                         className="w-full max-w-[200px] h-auto rounded-lg mx-auto border-4 border-white shadow-lg transform rotate-2" 
                       />
                   </motion.div>
               )}
           </div>
       </div>

       {/* --- PART D: GRAND FINALE --- */}
       <div className="max-w-4xl mx-auto text-center pb-24 border-t border-stone-200 pt-16">
           <motion.button
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.95 }}
               onClick={handleGrandFinale}
               className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-stone-900 to-stone-800 text-amber-50 rounded-full shadow-xl hover:shadow-2xl transition-all"
           >
               <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity"></span>
               <span className="text-2xl animate-pulse">🎆</span>
               <span className="font-serif text-lg md:text-xl tracking-widest font-bold">
                   开启 2026 祝福 / Ignite 2026
               </span>
           </motion.button>
       </div>

       {/* --- Modals --- */}
       <AnimatePresence>
           {activeModal && (
               <DetailModal content={activeModal} onClose={() => setActiveModal(null)} />
           )}
           {showBlessingModal && (
               <BlessingModal 
                    onClose={() => setShowBlessingModal(false)} 
                    onReplay={handleReplayFireworks} 
               />
           )}
       </AnimatePresence>

    </section>
  );
};