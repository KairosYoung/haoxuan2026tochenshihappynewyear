import React from 'react';
import { TimelineEvent } from '../types';
import { FileText, Presentation, Code, Terminal, Eye, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

// Specific Image Style Classes
const imgPortrait = "w-full max-w-[240px] h-auto rounded-lg shadow-md object-cover border border-stone-200 block mx-auto my-6";
const imgLandscape = "w-full max-w-[280px] h-auto rounded-lg shadow-md object-cover border border-stone-200 block mx-auto my-6";
const imgBanner = "w-full max-w-[280px] h-auto rounded-lg shadow-md object-cover border border-stone-200 block mx-auto my-6"; 
const imgSmallIcon = "w-full max-w-[300px] h-auto rounded-lg shadow-md border border-stone-200 block mx-auto my-4";

// Helper to parse markdown-style bolding
const parseBold = (text: string) => {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="font-bold text-stone-900">{part.slice(2, -2)}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
};

// Updated Timeline Data
const timelineData: TimelineEvent[] = [
  {
    id: '2024',
    year: '2024',
    date: '2024.1.1',
    title: '“长篇大论的祝福” (Word)',
    iconType: 'text',
    description: (
      <div className="space-y-4 font-sans text-stone-600 leading-loose">
        <p>
          {parseBold('那时怀着极其忐忑的心情，给还不算熟悉（只是在课堂上“压榨”我）的陈老师发了长篇大论的祝福。翻看回顾一下，发现原来那时候我就在跟您瞎写着“教辅 vs. 教材”，而2025年底您正好给我发来了一句“可以想想教辅是一种什么教材”。那时触动我的“事”也从2024延续到了2026，从当时的“兴奋上头”到了如今的“随时把玩”。当时在开头写到的“课程政治社会学”，也终于即将迎来从我研一到博一的重开了。这些事、这些意义，都在重新归来着、到来着，都在不变中变化着。')}
        </p>
        <p>
            {parseBold('借机吐槽一句，翻看聊天记录，发现过去的两年你都跟我说“节后再约着一起讨论吧”，但你每次都🐦了我（缺乏反馈，和我发送新年小作文越来越晚，有一定的意向因果）。')}
        </p>
        <img 
          src="/20240101chen.png" 
          alt="20240101chen.png" 
          className={imgPortrait}
        />
      </div>
    ),
    // 这段话会显示在引用块里
    details: "最后的最后，再次感谢您过去一年里有意无意之间对我的启发、给我的力量，衷心地祝福您福暖四季、顺遂安康，继续做更多批判又真实、浪漫又需要、中国又世界、满怀真诚和力量的理论与实证研究！—— 淏璇 二〇二四·元旦",
    pdfLink: '/2024blessing.pdf' 
  },
  {
    id: '2025',
    year: '2025',
    date: '2025.1.6',
    title: '“给陈老师的抽象祝福” (PPT)',
    iconType: 'ppt',
    description: (
      <div className="space-y-6 font-sans text-stone-600 leading-loose">
        <p>
          {parseBold('去年因为赶制毕业论文，迟了一周才交上一份帅气的PPT年度汇报与祝福，您说“终于等到你的了，又换形式了啊”（可以说是很有感情地敷衍我了bushi）。今年，您倒是又可以回复一模一样的话，因为我1.1肯定无法发送，以及我又换形式了（这句话证明，我绝对不是1.4被你质问了才赶工的）。')}
        </p>
        
        <img 
          src="/20250106chen.png" 
          alt="20250106chen.png" 
          className={imgPortrait}
        />

        <p>
          {parseBold('回看去年的小作文，才发现原来大多数事、思考都是过去的延续、仍未完成，事情在时间/时间在事情中持存、绵延着。2025年，我仍在您的包容、放养中继续着wandering/messing about，继续努力思考宏大，在思考中炼就些“变熟悉为陌生”的理论直觉与勇气。')}
        </p>

        <img 
          src="/20250106change.png" 
          alt="20250106change.png" 
          className={imgLandscape}
        />

        <p>
          {parseBold('**多出来的、不一样的**，或许是在跟您那些“宏大”“组织”“秩序”“社会”“政治”的碰撞中，在您给我的拥有“事感”和“实感”的机会与经历中，才真正感到了、面对了“从敢于、想要到真正思考宏大”“直面理论问题、提出新概念”的困难，比如怎么论证出“融通”、回答课程与学科的关系、建构出中国的科学教育的实践观、想清楚到底什么是“好”教材、教材的知识秩序、技术媒介与知识的关系……困难似乎也在于过往更多仍是在拿着数据就总能分析、思考、提出点什么，而现在如何在boundary中synthesizing、建构出类型、概念、秩序，应该说，难度好像的确升级了，也提醒我还是得努力先**悬置一些对理论的沉迷，要回到现象、现实中、设计出好玩的数据去发现、融通理论，而不是先行、彻底缠绕在理论、概念之中，要思考现实为什么就是达不到的悖论、制度的约束。**')}
        </p>
        <p>
          {parseBold('尤其是和过去的那个我自己之间的矛盾、困扰，突然发觉自己好像把握不了、不确定到底什么才是重要的、有价值的问题了，感到过往习惯的只是去呈现、揭示、暴露出问题不足够了，感受到只去做规范性、价值性思考的无力，但到底如何真的带来改变，找到一套切实可行、能说服人、推动改变的替代方案是如此难以做到，在无意义和做不到之间，**我似乎有些陷入了不知道到底什么值得做、到底选择做什么的想法上的不断跳跃与行动上的停滞。当下，或也只得希望、将这些犯错、自我怀疑、止步不前视作宝贵、值得的必经。**')}
        </p>

        <img 
          src="/20240926.png" 
          alt="20240926.png" 
          className={imgLandscape}
        />
      </div>
    ),
    // 这段话会显示在引用块里
    details: "THANKS FOR THE MULTI-LIGHTEN-ING 要缓慢而坚定地更新，要在范式、知识技术的增长中保有澄明与自由，要成其所是——淏璇 二〇二五·元旦",
    pdfLink: '/2025blessing.pdf',
  },
  {
    id: '2026',
    year: '2026',
    date: '2026.1.4',
    title: '我没有不写新年小/大作文，只是在元旦放了自己一马(vibe-coding "媒介即信息")',
    iconType: 'code',
    description: (
      <div className="space-y-8 font-sans text-stone-600 leading-loose">
        <p>
          {parseBold('在小作文的第三年，我才“终于”拥有了西西弗斯正式编制身份，你也得以旗帜鲜明的质问我怎么不写小作文了。顺便一说，今年的我正坐在你曾经的办公室给你写着小作文，与AI（勉强可以给TA一个第二作者）一起向敬爱的陈师发送这份年度回顾、致谢、push与祝福。')}
        </p>
        
        <img 
          src="/20260104.png" 
          alt="20260104.png" 
          className={imgBanner}
        />

        <p>
          {parseBold('实话实说，如果不是你质问我，我的确是想拖延（偷梁换柱为）到“春节”，想来这半年确实有些越来越学会“放自己一马”， 放多了，人的确就懒了。发现不遵守ddl也不会如何后，就容易彻底开摆。如你所言，人嘛，没点规训、不得不干是不行的。所以，新的一年，虽然是马年，我还是不能“放自己一马”，送上这份AI加持下的新形式的新年“小”作文，祝福先上马：')}
        </p>

        {/* Blessing Block 1 */}
        <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
            <p className="text-stone-800 font-serif leading-relaxed">
                {parseBold('**祝我最敬爱的陈师，2026年，“事急人不急”地完成各项DDL，最好再多一些从从容容、游刃有余，写出那些已在盘旋许久、按耐不住的洞见（怎么感觉确实是有点久没看过你崭新的精彩论文了呢，让我趁机“质问”你一句“怎么不给大家写大论文了”），在实感与事感中享受更多直觉的瞬间，在已知、未知与无知的知识秩序流转中生产出更多可用知识。**')}
            </p>
            <img 
                src="/xinsixiang.png" 
                alt="New Thoughts" 
                className={imgSmallIcon}
            />
        </div>

        {/* Blessing Block 2 */}
        <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
            <p className="text-stone-800 font-serif leading-relaxed">
                {parseBold('**再祝陈师（不像祝福，像给你上难度），多带我一起干“难而有价值的事”，多与我分享种种tacit mind，多批评我，偶尔与我华山论剑，少忘记回我和“敷衍”我（狗头），虽然我知道我是真的挺难搞的哈哈哈哈，但还是祝我继续“不时扔给你我写的，让你觉得没有被行政淹没”。**')}
            </p>
            <img 
                src="/beixingzhengyanmo.png" 
                alt="Not Drowned by Admin" 
                className={imgSmallIcon}
            />
        </div>

        {/* Blessing Block 3 */}
        <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
            <p className="text-stone-800 font-serif leading-relaxed">
                {parseBold('**最重要的还是祝您身心健康，也早日让本网球教练履职（本学期打上一次的现实感目标终究还是不够现实）；祝您继续开心地穿梭于现象与理论、具体与宏大、现实与理想、控制与解放之中，带着已知与无知朝着那个意向性的未知走去、成事，祝荃荃、葡萄（也加上我自己吧，蹭一个；不加您，是觉得您也算实现了吧，虽然你时常说“太难了”，虽然你也的确很辛苦，但我觉得你大多数时候应该还是开心、享受、乐在其中地“战斗”着）终能学会“开心地玩，能开心、觉得很有意义的让自己自食其力地过完这一生”。**')}
            </p>
            <img 
                src="/wulunruheyaolaiyichang.png" 
                alt="Have a Match" 
                className={imgSmallIcon}
            />
        </div>
      </div>
    ),
  }
];

export const SectionTimeline: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'text': return <FileText size={18} className="text-stone-400" />;
      case 'ppt': return <Presentation size={18} className="text-stone-400" />;
      case 'code': return <Terminal size={18} className="text-stone-400" />;
      default: return <FileText size={18} className="text-stone-400" />;
    }
  };

  return (
    <section className="relative scroll-mt-20" id="timeline">
      
      {/* 1. Structural Heading */}
      <div className="max-w-4xl mx-auto mb-10 pl-2">
         <h2 className="text-3xl md:text-4xl font-serif text-ink mb-2">
            The Evolution of Blessings: <span className="italic text-stone-500">medium & identity</span>
         </h2>
         <div className="h-1 w-24 bg-stone-300 mt-4"></div>
      </div>

      {/* 2. Intro Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-24"
      >
        <div className="bg-white p-8 md:p-12 shadow-md border border-stone-100 rounded-xl relative">
          <div className="font-serif font-bold text-2xl text-ink mb-6 text-center border-b border-stone-200 pb-4">
             引言
          </div>
          <p className="text-stone-400 italic text-sm font-sans tracking-wide mb-8 text-center">
            “（晕，好长的intro，vibe coding的时候憋了半天只有300字，打开word、回到舒适区后直接覆水难收了）：”
          </p>
          <div className="font-serif text-lg text-stone-700 leading-loose space-y-6 text-justify">
             {/* ... Intro text content ... */}
             <p>{parseBold('从2024到2026，用了从word、ppt的媒介到轻松vibe coding出一个网页的方式完成元旦祝福，仿佛也是从工业时代走到了智能时代。8月我还说我只会在写党会感想时使用AI，教师节时，我还在给你兴奋展示我（小小）辛苦搭建出（不甚满意的）个人网站，而几个月后，完成一个让我基本满意的网页已是如此轻松（最终发现要完成这么多内容也不是那么轻松），还体验完成了一篇AI为第一作者的论文。技术的迭代进步无从抵抗。')}</p>
             <p>{parseBold('想来，2022年11月20日，我刚研究生入学两个月，ChatGPT发布；2023春，我印象中《课程政治社会学》的课上还很少直接讨论AI，总之，AI还没有在我对这门课、对您的记忆中留下太深刻的“印记”。2023年冬，教材论坛的主旨报告里，您在问**数智时代（The Digital-AI Eta）什么知识最有价值，“知其然不知其所以然造其然”的AI如何挑战传统的知识秩序，如何理解已知、未知、无知，我们对教材的“象”限制在了哪里**。或许这也是在问“记忆”（图像）如何限制了我们的“想象”，但“想象”又如何不彻底“遗忘”过去，我们如何在记忆与遗忘中发明历史、制造希望。而到如今，我们在过去一年的一切讨论，我对您本人的“记忆”与“图像”几乎再也离不开AI。**这的确不仅是关于AI的技术，而就是作为AI的 “时代” **。')}</p>
             <p>{parseBold('那么，有什么变了，什么不变。不变的是，如今的我好像是莫名又回到了两年前您提出的这几个“有价值”的问题的思考中。变的是，现在的我比当时我似乎更“听得见”“听得懂”这些问题了，这些过去重新在场了。或许我也多了一点点本事去能思考这些了，但更重要的也许还是，对想要回应这些问题的“意向性”更清晰地在浮现和被外在化了。也发现，2025年底的最后两天我才在读哈耶克，才读到了两年前听您说到的“ignorance”，过程中脑中开始不断浮现、回想这学期您跟我说，您始终在想的还是“一个社会是如何组织的、可能的、得以维持的”。是啊，个人如何在“无知”的情形下进行其行动并应对这种“无知”， **社会秩序是如何诞生与维持于“知”“未知”“无知”的知识秩序中的呢？**')}</p>
             <p>{parseBold('技术、媒介之外，这个开启于偶然但难以克制的长篇大论的元旦小作文活动，也见证、促成了身份、关系的变迁：我从2024元旦的忐忑、不熟，到2025元旦的决定就要跟陈老师读博，到2026元旦的“先放我一马”。而你也从“谢谢你的长篇大论！”到“终于等到你的了”到** “你今年不给我写新年小作文了” **。')}</p>
             <p>{parseBold('事实上，正如我们之前聊到的那样，AI或已经不仅是媒介，TA也在搅乱我小作文生产的秩序：**首先**，我几乎是想着要来借机测试体验一下vibe coding才一下子在1.1日早晨从床上弹射了起来，急切来办公室打开电脑，而如果我想着我是要打开word，写上几千字，我估计我就又先睡过去了（发自内心想给你写小作文，但as we all know，开始写作总是困难的）。**其次**，从vibe coding出一个互动网页的想法，直接影响了我写什么、如何写，比如vibe coding让我觉得做一个年度回顾、做一个照片墙、排序一下我一堆光挖不填的坑、设定一个可实时更新、随时check的2026DDL是完全可行的；而这段引言的长篇大论和最终得以完成真正的实质内容文本，完全是因为我选择在1.4重新回到了word中流畅的写作，前面始终在vibe coding的对话框里实在是让我无法“长篇大论”。当然，这可能完全只是因为我被word装配的久了。**最后**，我想如果不是vibe coding的技术可及性，这篇小作文会让你等的更久，因为word、pdf的静态属性会让我对后面的“idea notebook-index”和“西西弗斯的西西弗柿/事”部分更加审慎，我1.1号无法完成，**实则也是因为idea notebook-index部分太多东西我还没整理好、想好，担心遗忘漏掉了什么而一经发送就无可改变，但如果是网页的形式，我就可以在后台修改了，智能时代教材的风险或许也就是这样的“印记”不再如化石、档案那样静态稳固而是实时、动态、可修改的了**，虽然也是可以设置data history的。在面对“你今年不给我写新年小作文了”的愧疚下，在这样的技术加持下，我想先抛出来这个未完成、但可以在接下来一年里再不断更新、调整的作品，也不失为一个好主意、好尝试。**从word到vibe coding一个网页的技术媒介变化下，我给你写作文这件小事的知识生产秩序也已经在悄然改变，我似乎可以不再为发给你就不可更改的电子文档所限了。**')}</p>
             <p>{parseBold('AI真的来了，我也“终于”正式跟陈老师读博了，但小作文仍会到，小作文也仍然只能因为我书写出的内容而真正存在。返回的形式、媒介也许会变，**但我一如既往的长篇大论、时不时轰炸着您，我们仍会在、仍是在新年之际回到过去，在遗忘中努力记忆，让过去重新在场，在过去、现在的在场中想象未来。**')}</p>
          </div>
        </div>
      </motion.div>

      {/* Dashed Timeline Container */}
      <div className="relative border-l-2 border-dashed border-stone-300 ml-4 md:ml-8 space-y-20 pb-4">
        {timelineData.map((event, index) => {
          const isCurrentYear = event.year === '2026';
          
          return (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Dot */}
              <div className={`
                absolute -left-[9px] top-1.5 w-[18px] h-[18px] rounded-full bg-paper 
                border transition-all duration-500 flex items-center justify-center z-10
                ${isCurrentYear 
                  ? 'border-stone-800 scale-125 shadow-[0_0_15px_rgba(45,42,38,0.3)]' 
                  : 'border-stone-400 group-hover:border-stone-600 group-hover:bg-stone-100'}
              `}>
                <div className={`
                  w-2 h-2 rounded-full transition-colors duration-500
                  ${isCurrentYear ? 'bg-stone-800 animate-pulse' : 'bg-stone-500'}
                `}></div>
              </div>

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-3 mb-6">
                 <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-stone-500 font-medium whitespace-nowrap">{event.date}</span>
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-stone-100">
                      {getIcon(event.iconType)}
                    </div>
                 </div>
                 <h3 className={`text-xl md:text-2xl font-serif font-bold tracking-wide leading-tight ${isCurrentYear ? 'text-stone-900 drop-shadow-sm' : 'text-ink'}`}>
                    {event.title}
                 </h3>
              </div>

              {/* Description */}
              <div className="text-pencil font-sans text-base md:text-lg leading-loose text-justify max-w-3xl mb-4">
                {event.description}
              </div>

              {/* 🔴 修复：在这里添加了 Quote 引用块，把 details 的内容展示出来 */}
              {event.details && (
                <div className="max-w-3xl mt-6 mb-6 p-6 bg-stone-50 rounded-lg border-l-4 border-stone-300 relative">
                  <Quote className="absolute top-4 left-2 text-stone-200 w-8 h-8 -z-1" />
                  <p className="font-serif text-stone-700 italic text-lg leading-relaxed relative z-10">
                    {event.details}
                  </p>
                </div>
              )}

              {/* 2024 PDF Link */}
              {event.year === '2024' && (
                <div className="mt-2">
                  <a 
                    href={event.pdfLink || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 border border-stone-300 text-sm text-stone-600 hover:text-stone-900 hover:border-stone-500 hover:bg-white transition-all rounded-full font-serif bg-transparent no-underline"
                  >
                    <FileText size={16} />
                    Review Full PDF
                  </a>
                </div>
              )}

              {/* 2025 PDF Link */}
              {event.year === '2025' && (
                <div className="mt-2">
                  <a 
                    href={event.pdfLink || '#'} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 border border-stone-300 text-sm text-stone-600 hover:text-stone-900 hover:border-stone-500 hover:bg-white transition-all rounded-full font-serif bg-transparent no-underline"
                  >
                    <FileText size={16} />
                    Review Full PDF (Slides)
                  </a>
                </div>
              )}

              {/* 2026 Status Badge */}
              {isCurrentYear && (
                <motion.div 
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 bg-stone-50 text-stone-600 text-xs font-mono uppercase tracking-widest rounded-full border border-stone-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  DEPLOYING: STATUS ACTIVE（unfinished 大作文）
                </motion.div>
              )}

            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
