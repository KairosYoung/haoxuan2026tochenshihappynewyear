import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Quote, Sticker as StickerIcon, RotateCw } from 'lucide-react';

// --- Flip Card Component ---
interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
  frontColorClass?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontContent, backContent, className = "", frontColorClass = "bg-white" }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`relative group perspective-1000 cursor-pointer h-[360px] w-full ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative transition-all duration-500"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front */}
        <div 
          className={`absolute inset-0 w-full h-full rounded-2xl shadow-sm border border-stone-200 overflow-hidden ${frontColorClass} p-8 flex flex-col items-center justify-center text-center`}
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          {frontContent}
          
          {/* UX Hint: Flip Indicator */}
          <div className="absolute bottom-4 right-4 flex items-center gap-1.5 text-stone-400/60 font-sans">
             <RotateCw size={12} />
             <span className="text-[10px] uppercase tracking-widest font-bold">Flip / 翻转</span>
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 w-full h-full rounded-2xl shadow-inner border border-stone-200 bg-white p-8 flex flex-col items-center justify-center text-center overflow-hidden"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden', 
            transform: 'rotateY(180deg)' 
          }}
        >
          <div className="overflow-y-auto w-full h-full flex flex-col items-center justify-center scrollbar-hide">
             {backContent}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Sticker Component ---
const Sticker = ({ src, alt, rotate = 0 }: { src: string, alt: string, rotate?: number }) => (
  <motion.div 
    className="relative cursor-pointer flex items-center justify-center p-2"
    initial={{ rotate: rotate }}
    whileHover={{ 
      scale: 1.1, 
      rotate: 0,   
      zIndex: 10 
    }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <div className="bg-white p-2 md:p-3 shadow-lg border border-stone-100 rounded-xl transform transition-transform hover:shadow-2xl w-full">
      {/* 🔴 修改：放开了最大高度限制，让图片尽可能撑满容器 */}
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-auto object-contain rounded-md" 
      />
    </div>
  </motion.div>
);

export const SectionQuotes: React.FC = () => {
  return (
    <section className="py-24 relative scroll-mt-24" id="quotes">
      
      {/* 1. Header */}
      <div className="max-w-6xl mx-auto mb-16 px-6 text-center">
         <h2 className="text-3xl md:text-5xl font-serif text-ink mb-4 flex flex-wrap items-center justify-center gap-3">
           <Quote size={28} className="text-stone-400 rotate-180 hidden md:block" />
           Great Words & Classic Meme & Best Wishes
           <span className="text-lg md:text-xl text-stone-500 font-sans font-normal self-end mb-1 ml-2">(Chen, 2025)</span>
         </h2>
         <p className="text-stone-400 font-sans text-sm md:text-base tracking-wide flex items-center justify-center gap-2">
            <Sparkles size={14} />
            Flip to reveal the inner monologue
            <Sparkles size={14} />
         </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-20">
        
        {/* 2. Top Row: Flip Cards (Grid of 3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <FlipCard 
            frontColorClass="bg-stone-50"
            frontContent={
              <>
                 <div className="absolute top-4 right-4 text-stone-300"><Sparkles size={24} /></div>
                 <h3 className="text-2xl font-serif font-bold text-ink leading-tight">
                   “论文有AI，有思想了它会一键生成，我才不担心你”
                 </h3>
              </>
            }
            backContent={
              <p className="font-serif text-stone-600 text-base leading-loose text-justify">
                "说实话，你国庆前跟我这么说的时候，我心想“陈老师又在跟我说什么暴论”，但十一月底玩了AI第一作者，其实我当时也就是想着你这句话，我想就是要只给AI我的一些思想，让TA一键生成看看，结果是我想我再也不会说AI没有创造力，想来，我所剩无几的或许也真的只有一些判断力，甚至只是一些意向性（在一顿乱用中感受这个概念），又或是一些基于意向性的模糊的、人类中心的所谓判断力来？AI似乎也更加允许我们只有“模糊”的意向性，而非清晰、前要的先掌握某些确定的知识、技能，而是只要我们“想做出那个”（这就是意向性？），AI或许就可以帮助我们；我也时常想，如果不是您，我估计是不会这样还算认真地去关注、尝试、参与到这个AI时代中去的，毕竟我都有点想不起2025年的哪一次对话我们没有提到AI了。"
              </p>
            }
          />

          {/* Card 2 */}
          <FlipCard 
            frontColorClass="bg-[#FFFBEB]"
            frontContent={
              <>
                 <h3 className="text-3xl font-serif text-stone-800 italic leading-relaxed">
                   “我守候你的自由”
                 </h3>
              </>
            }
            backContent={
              <div className="flex flex-col h-full justify-between py-2">
                <p className="font-serif text-stone-600 text-base leading-relaxed text-justify mb-4">
                  "莫名有一种年代感，但看到时也还是挺感动的呢，哈哈既搞笑又感动。虽然，我想，自由总也是有代价的。但像您说的，能自由的时候，先自由着也好，自由不了了，自然也就自由不了了，比如“半年放养”即将结束，即将进入“半年催命”。争取还是多干正事。"
                </p>
                <div className="flex justify-center mt-auto">
                    <img 
                      src="/zhengshiwaishi.png" 
                      alt="Typo Meme" 
                      className="w-full max-w-[200px] object-contain rounded-md border border-stone-200 shadow-sm"
                    />
                </div>
              </div>
            }
          />

          {/* Card 3 */}
          <FlipCard 
            frontColorClass="bg-[#FEF2F2]"
            frontContent={
              <>
                 <h3 className="text-xl font-serif text-stone-800 leading-normal mb-4">
                   “早点睡……<br/>你好好研究养养头发……<br/>你要早点睡，养养生，养养头发，讲话慢一点”
                 </h3>
              </>
            }
            backContent={
              <div className="space-y-4">
                <p className="font-serif text-stone-600 text-lg leading-loose text-justify">
                  "一时之间不知道是要好好研究，还是研究一下怎么养头发，但好好研究又怎么养头发呢bushi。"
                </p>
                <div className="w-12 h-1 bg-stone-200 mx-auto"></div>
                <p className="font-serif text-stone-500 text-base italic">
                  “吴飞：只剩下学术的生活是危险的”。
                </p>
              </div>
            }
          />
        </div>

        {/* 3. Bottom Area: Sticker Wall (Redesigned) */}
        {/* 🔴 修改：去掉了 overflow-hidden，这样顶部的标签就不会被切掉了 */}
        <div className="relative w-full bg-stone-100/50 rounded-3xl border border-stone-200 shadow-inner p-6 md:p-12">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 rounded-3xl overflow-hidden" style={{ backgroundImage: 'radial-gradient(#78716c 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            {/* Label */}
            <div className="absolute top-0 left-0 right-0 flex justify-center -mt-5 z-20">
               <div className="bg-white px-6 py-2.5 rounded-full shadow-md border border-stone-200 flex items-center gap-2 text-stone-600">
                  <StickerIcon size={18} />
                  <span className="text-sm font-bold uppercase tracking-widest">Meme Collection / 表情包大赏</span>
               </div>
            </div>

            {/* 🔴 关键修改：改为 2 列布局 (grid-cols-2)，图片会变得非常大！ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-8">
                
                <Sticker 
                  src="/jingdianbaoqingbao.png" 
                  alt="Classic Meme" 
                  rotate={-2}
                />
                
                <Sticker 
                  src="/jiaolv.png" 
                  alt="Anxiety" 
                  rotate={1}
                />

                <Sticker 
                  src="/biefangguowo.png" 
                  alt="Don't let me go" 
                  rotate={-1}
                />

                <Sticker 
                  src="/cuiming.png" 
                  alt="Urging" 
                  rotate={2}
                />

                <Sticker 
                  src="/zijigongjiziji.png" 
                  alt="Self Attack" 
                  rotate={-3}
                />

                <Sticker 
                  src="/zaofengzhiren.png" 
                  alt="Wind Creator" 
                  rotate={1}
                />

                 {/* 如果最后一张是单数，让它在中间显示 (col-span-full) */}
                 <div className="md:col-span-2 flex justify-center">
                    <div className="w-full md:w-1/2">
                        <Sticker 
                          src="/weishi
