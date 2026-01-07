import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Image as ImageIcon } from 'lucide-react';

// --- Types ---
interface MemoryItem {
  id: string;
  coverImage: string;
  title: string;
  renderContent: () => React.ReactNode;
}

// --- Styles ---
// UPDATED: Strict max-width for modal content images to act as spot illustrations
const modalImgStyle = "w-full max-w-[280px] mx-auto h-auto rounded-lg shadow-md border border-stone-200 my-8 object-cover block";
const textStyle = "font-serif text-lg text-stone-700 leading-loose whitespace-pre-wrap text-justify mb-6";
const quoteStyle = "bg-stone-50 p-6 rounded-lg border-l-4 border-stone-300 my-6 italic text-stone-600 font-serif leading-relaxed";

// Helper to parse markdown-style bolding
const parseBold = (text: string) => {
  if (!text) return null;
  // Split by double asterisks
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      // Remove the asterisks and wrap in strong
      return <strong key={index} className="font-bold text-stone-900">{part.slice(2, -2)}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
};

// --- Data ---
const MEMORIES: MemoryItem[] = [
  {
    id: 'phd',
    title: '1. 申博记忆',
    coverImage: '/phd offer.JPG', 
    renderContent: () => (
      <>
        <p className={textStyle}>
            {parseBold('“说真的，你为什么要留在16楼？你说了对科学教育的研究兴趣，那陈老师又不做科学教育，你为啥要跟陈老师读？你之前跟肖老师，但陈老师都做的很宏大的……”（如今我确实也感受到了关注宏大、这种转换的困难，但我还是乐在其中，总是在困难中才会有成长、突破、改变的机会，哈哈可以玩梗了“要做难而有价值的事”），我的确没想到申博面试问这个，被问得猝不及防，也的确难以回答，毕竟要真从头、举例子的讲下来，我应该能讲几个小时吧。但放在这里，是因为我每每想起都还是有些后悔于，我没直接说坦诚的说一句**“就是想跟陈老师读，仅此而已”**。')}
        </p>
        <img src="/hard.png" alt="hard" className={modalImgStyle} />
        
        <p className={textStyle}>
            {parseBold('“你到底想做什么方向，到底有什么你觉得非做不可的研究？读博士了是要做出学术贡献的！”这样的叩问，我仍难以回答，从二月到十二月，我能想出的答案大概也只是如此。虽然肖老师说我这段简直是“桂冠级中二”，但这里每个词我其实都写得挺认真的，至少是这个阶段的我对自己真挚的认识与概括。')}
        </p>
        <img src="/research interest.png" alt="research interest" className={modalImgStyle} />

        <p className={textStyle}>
            {parseBold('突然想起，暑假前好像还问过我“分享会咋讲的，没有小作文给我看啦？”（：感觉你对我给你写小作文比写什么论文感兴趣多了），不知道你为啥好奇，或许是因为我当时写的标题是《非走不可的弯路》？这是张爱玲的一篇小文章（谁发给我的，你可以猜一下哈哈哈），以此为标题，我大概是想提醒自己重要的是「（那条路走不得）但是我喜欢，而且我不怕……在人生的路上，有一条路每一个人非走不可，那就是年轻时候的弯路。不摔跟头，不碰壁，不碰个头破血流，怎能炼出钢筋铁骨，怎能长大呢？」由此呢，我给大家分享了多重"弯”义：读不读博、在哪儿读博、跟谁读博。当时讲了估计也起码三四十分钟哈哈哈，所以我实难再现。但说几条吧，')}
            <br /><br />
            {parseBold('第一是，我说我觉得读博最大的成本是放弃其他生活的可能、更容易幸福的其他路，我说“如果读博让你幸福就读咯”，其实我也是想到您当时跟我说过的一句话，你说**“最终也看你自己想做什么，什么让你舒服和觉得每天都有成就感”**，然后我说“但也希望你能是有所贡献、有所见地，你的读博、我们所受的教育都有公益而不应只是私利。”')}
            <br /><br />
            {parseBold('第二是，我讲了些许我为什么选择跟您读，这里只说一条整体上的自我判断，即**“感受到自己的成长，格外听得进去她的话，有跟她做事的欲望”，现在看来，这也许也是一种意向性？**我不知道我到底要做什么，但我就是觉得我想要往这里走，这是我当下最欲求、不想放弃的。还谈论了关于选择、负责、相信自己的感受等等吧。')}
        </p>
        <img src="/feizoubukedewanlu.png" alt="feizoubukedewanlu" className={modalImgStyle} />
        
        <p className={textStyle}>
            {parseBold('嗯，总体上，还是这句**“共同学习，一起进步”**最不错！')}
        </p>
        <img src="/learning together.png" alt="learning together" className={modalImgStyle} />
      </>
    )
  },
  {
    id: 'disease',
    title: '2. 从研究病房学校到自己住进了病房',
    coverImage: '/disease.JPG',
    renderContent: () => (
      <>
        <img src="/disease.JPG" alt="disease" className={modalImgStyle} />
        <p className={textStyle}>
            {parseBold('这一年，的确是未曾想到的“不幸”，但人就是随时都可能生病甚至是离开吧。所以，也只能开始奉行，对未来的真正慷慨，是把一切献给现在。没有“未来”的“概率”一直存在。')}
            <br /><br />
            {parseBold('但想来，又似乎幸运地没有因为这件不幸而“耽误”任何事，毕业了，博读了，手术做了，治疗也做了，最近复查结果也都不错。借此机会，也特别感谢您，没有因为我突然的疾病而不让我做什么，表现出什么对我身体的“过度”担忧，如我所希望的那样，还是把我当正常人一样，it means a lot。')}
            <br /><br />
            {parseBold('回想起，在刚刚得知病情，以及我直觉到结果可能不是太好的时候（在手术前，所有医生、家人都觉得是恶性的几率极低，但我自己好像的确早就感觉到了，不得不相信自己对自己的“直觉”哈哈），我的朋友安慰我说，他之前知道自己身体出问题的时候，其实很释怀，因为他那一刻觉得终于可以挣脱出“正常”的、正在进行中的这一切了，她无比期待可以借生病换一个活法，我说，但我好像不是这样的感觉，因为我现在（当时）所在的这条路、这个方向就是我想要的，一切都在往我想要去的地方去，继续做教育研究、跟陈老师读博。所以，即使这一年，一事无成，没什么增量，但能“平稳渡过”，也算已经很好很好了吧，总也算是，**轻舟已过几重山**。')}
        </p>
      </>
    )
  },
  {
    id: 'grad',
    title: '3. “等着下次再给你拨了”',
    coverImage: '/graduation.png',
    renderContent: () => (
      <>
        <img src="/graduation.png" alt="graduation" className={modalImgStyle} />
        
        <div className={quoteStyle}>
            <p>
            「“我的心略大于宇宙”是把世界看成一个鱼缸，各种事件、各种不确定、各种颠覆、各种情绪放在里面；而你是观鱼者，你的心可以包容下一切。这就是一种自如感，一种引领者需要的运筹帷幄感，一种面对不确定性的处变不惊感……亲爱的同学们，教育之路，从来不是坦途。它交织着过去与未来、理想与现实、传承与创新、个体与系统的张力。但正因如此，它才如此深邃而充满召唤。」
            </p>
            <p className="text-right mt-2 text-sm">— 陈老师，2025毕业典礼</p>
        </div>

        <p className={textStyle}>
            不过呢，实话实说，那场毕业典礼我更印象深刻的还是柯老师说的话，这学期也总还是时常回想起：
        </p>

        <div className={quoteStyle}>
            <p>
            「我做人忠诚正直，对帮助过我的人我心存感激……像我这样的人，唯一可以拿出来交换的最大本钱就是忠诚与勤奋。如果不是出身富贵家庭，忠诚和勤奋是你们成就事业的唯一机会，我深有体会。
            <br/><br/>
            如果你想比别人多做点，做得好一点，那必然是木秀于林，风必摧之。这个法则我改变不了，我想，唯一可以改变的就是自己，提升自己的抗击打能力。不信邪不怕苦。
            <br/><br/>
            要做未来教育的引领者，必然要担任更大的责任，付出更大的努力，承受更大的压力。这是作为引领者必然的。」
            </p>
            <p className="text-right mt-2 text-sm">— 柯老师，2025毕业典礼</p>
        </div>
      </>
    )
  },
  {
    id: 'field',
    title: '4. 从书斋到田野',
    coverImage: '/shenzhen.jpg',
    renderContent: () => (
      <>
        <img src="/shenzhen.jpg" alt="shenzhen" className={modalImgStyle} />
        
        <p className={textStyle}>
            {parseBold('上半年参加教育大模型那边的项目后，我讲述我的失望甚至是一些愤怒后，您跟我说的这句话挺让我印象深刻的，您说**“也是让你理解，知道不会总是都按照你理想的状态走的”**。想来，上一个跟我说过类似的话人是本科时唐小为老师，她跟我说“其实只是是想让你们有机会，真的感受一下教学实验……去学校里看看到底怎么回事……是有意思的想法，但是要尝试出来有效的路径，是要有慢功夫的。你们去乡村学校做了尝试，应该理解得到，他们的问题不是那么简单”。很多时候，就是需要参加项目、躬身入局中有兴奋、有沮丧、有失败的“实感、事感”来提示自己吧，也更是一种不可替代的embodied capital。')}
        </p>
        <p className={textStyle}>
            {parseBold('百小的经历也可以说是“刻骨铭心”了，我想，既源自当时在场时高强度的对话、对许许多多话题的关联思考（尤其是对那些我以前没啥机会接触的话题有了一些基本认识与个人观点，比如领导力、校长、教师发展/教研、课表、分层教学）、两万字的总结也说明这无疑是足够深刻的印记；更是因为发觉离开百小后的这三个月，我仍然反复不断地想起，**百小似乎已然成为了我未来思考任何学校、教育的一项基本配置、参考系**。也会记得，您对我的提醒，无论是**“保持悬置”，还是“不能只是用书斋、理想的认识去比对，而要知道事情是做出来的”**……您一个月后，看完我对宋小的观察笔记后，总结的也的确极其精准，“做教育是比课程更大，更深入性的东西……百小强在校长的课程能力，抓突出增长点的能力，但可能在浸润的教育感中他也无能为力，这个要养出来的”。想来，这样一所是课程能力的确很强的学校，一所没那么多概念说法、但离教育本身更近的学校，正好为我构造出了两个极好的参照系、对照点，似乎也可以帮我更好地考虑教育与课程、知识与人的存在的关系了。也由此给了我“开学第一课”：')}
        </p>
        
        <div className={quoteStyle}>
            <p>「你们这个年龄的成长任务就是把对世界的非黑即白的判断调整为在底线之外的各层灰度的理解。」</p>
        </div>
        
        <img src="/huidu.png" alt="huidu" className={modalImgStyle} />

        <div className={quoteStyle}>
            <p>「你们从小到大会更习惯于看黑或者白。那么现在呢，要学会看灰色。还有彩色啊，就是怎么说呢，就是没有分别心的去看到很多的东西。」</p>
        </div>

        <p className={textStyle}>
            {parseBold('其实每次都有写汇报，但回头想来到底还记得什么，现在回去看我写了啥的感受就是，“我竟然想过这个、写过这个？”科技馆让我对“科创”“领导力”“桌游”“做实事”“制度”产生一些想法外，作为一次“实习”，确实让我意识到我真的需要学术工作、属于“我”的写作，以保证我的主体性，我需要是“我”在写，需要有“我“可以坚持的，而不是不知道为什么写、按照莫名其妙的要求写。我发觉，我还是太需要一个“我”被承认了。说来，也有些**惭愧**，至今也没能真正推进跟科技馆合作更进一步的研究。')}
        </p>
        <p className={textStyle}>
            {parseBold('Agent School呢，目前看来，至少比EduLLM时感觉有趣、有可能性、能沟通许多。那天抓着您说了很久，后来想想，我的那些想法确实也挺幼稚、过于理想主义的（以及有些产品、实用取向了，我也反思到自己要么有点着迷于纯理论问题，要么就是想做出点实际的东西了），但您也总还是很耐心的听我一顿输出，总是坦诚的告诉我您也没完全想好，分享给我您目前的看法，**这总是让我可以窥见一些从你的视角、位置出发在关心什么、是如何思考的**（想来，相比于tacit knowledge，thinking、perspective、position或许更容易是tacit的？有时也只有把这些explicit了，才可能理解某些knowledge？）的以及一些我未曾掌握的“信息”（说起来，去宋小时我印象很深刻的一个瞬间其实是，您问了空调的电费，李校说你是真懂……）。**想来，我们的对话时常没有答案甚至没有什么预设好的清晰目的，但也因此始终在回响，在琢磨着、感受着**。')}
        </p>
        <p className={textStyle}>
            {parseBold('另外，也在这里浅浅忏悔一下，我有时想我是不是有点像个话多的高需求小孩了，占用了您过多精力（但我真的也已经很努力少打扰您了哈哈哈，您确实“太忙+难了”），也容易“随意”“没足够想好”“没沉淀够”就分享给您一些想法了，有时候，时/事隔一段看看就会觉得自己很幼稚（但您每次鼓励我反馈，让我发，夸我几句，努力或多或少的“反馈”我，就让我继续如此，好了伤疤忘了疼了）接下来的几年希望自己还是该心沉为上，厚积薄发。')}
        </p>
        <img src="/suishifa.png" alt="suishifa" className={modalImgStyle} />
      </>
    )
  },
  {
    id: 'dialogue',
    title: '5. （一小部分）受用的对话',
    coverImage: '/alashan.png',
    renderContent: () => (
      <>
        <p className={textStyle}>
            {parseBold('发现无图可配，只能来一张一边听你们聊天一边摸鱼的我，拍下的一起听讲（但时常要被你赶走）的阿拉善了。')}
        </p>
        <img src="/alashan.png" alt="alashan" className={modalImgStyle} />

        <p className={textStyle}>
            {parseBold('课程论坛后和师姐们去您家里闲聊，虽然当时我玩笑说感觉还离我很远，但一方面确实如您所说“快得很”；另一方面，这场对话实则让我印象极其深刻的，既因为您既悲惨又兴致勃勃地讲述了那一阵的辛苦与忙碌（是啊，这不外交事件都处理上了怎么不算人生独一遭的际遇呢），也是因为我感到**这样的边缘性参与，最终不是获得什么explicit的答案，很多时候也不能完全理解和感同身受，却的确有了许多模糊的意向性，无论是学术概念上的、视角上的还是那些处事/世之道，突然在想，或许想要走向tacit knowledge/knowing，要借由的正是他人、分立的personal knowledge在对话、复多性所带来的意向性**（无知对社会秩序的维持，也是借由某种个人知识、文化进化中的意向性）？或许是在想，从tacit knowledge的身体根源出发，这一定不是一个可以单纯用语言去传递、分享经验完成的事，最终一定要借由个体的身体、行动，这或许脱不开的就是意向性。这种意向性也不一定总是“想”做什么，可能也包括识别、承认自己或许“不想”做什么、不趋向什么。')}
        </p>
        <p className={textStyle}>
            {parseBold('在木工坊那场突然降临的关于脆弱性的对话（嗯，主要是您的激情输出哈哈哈），对于提示自己去悬置，反思自己潜在的倾向，让我突然发觉自己多少在不知不觉中有些被外在、听起来好玩、新颖去迷惑了，是意义重大的。第一，虽然我感觉您跟我讲的多少有点“社会达尔文主义”哈哈哈哈，但可能在书斋尤其是我这样一个没什么压力的状态下呆久了，的确会有点忘记“优胜劣汰”的人类历史，忽视中国独特的国情、国家竞争的现实、社会的组织性需要（又或者说那样一个“理想”的社会，又会带来什么样的“后果”呢），我还不确定是不是就该如此，但的确也有些被说服，尤其是开始反思自己视角上的确还是有所固执和不由自主地偏向了伦理学、人类学；我也在想，这是不是“基础教育”和“高等教育”的区别，前者似乎总有一个伦理学视阈要回应，后者则最初就是组织学、社会学、政治学作为学科基础？（做高教的朋友跟我说其实也一直有讨论高教作为独立于教育学的专业？我开玩笑说，那我开始更关注后面的视角了，是不是也算换专业了hhhh）我就在想，那我近一年似乎的确是在面对一个从伦理学到政治学的视角转换？我也想起，去年申博的时候我突然发觉我本科觉得自己不太感兴趣德育和政治，结果读完研究生，我感觉教育学其实很需要从伦理学和政治哲学/社会学去思考，但现在有些感觉基础教育和高教似乎在这二者上是有一些割裂的？现在，我似乎感受到了仅仅是发出弱者声音的无力，也慢慢尝试从更宏大的国家、战略角度思考，**但的确也因此感受到一种矛盾，好像还是怕自己回彻底回不到、忘记对人的关怀了。到底什么才是对的、有价值的事，好像我也判断不了，好像也只能有一个“我”在过去这些经历后对自己觉得“想做的”自己看来或许/相信是“对的”的事的意向性？重要的可能还是从真实世界出发，而不是仅仅从空的理论观念去转。**')}
        </p>
        <p className={textStyle}>
            {parseBold('第二，您对中西方理论概念的把握、足够宽广的视阈（比如脆弱性和融合教育和西方这些概念的社会基础、根源是什么；哈哈还有激发出人的“贪欲”的必要）都是我看到这个题目时没太能想到的，很“受用”。')}
        </p>
        <p className={textStyle}>
            {parseBold('第三，想来，我其实当时光听ppt也没太听懂、但也没仔细想，只是单纯觉得噢那这个我没太了解过，好像是独特的视角，像您说的可能就是激发一种大家都想被呵护的共鸣吧。但的确是难以回答now what、so what的。您跟我一顿输出后，我在想关键的的确不该是脆弱性本身是什么、人都有脆弱性，而是最后能不能回答教育、课程到底能如何回应人的脆弱性（或者本质上是义务/强制教育制度的问题，以至于脆弱性没有位置，从制度而非概念本身的角度去理解或许也能更根源，包括对脆弱性的提出又如何回应优胜劣汰的制度现实），尤其是**如何让每个人必然的、内在的脆弱性成为、作为力量**，个体脆弱性如何可能指向集体、社会秩序存在的必要甚至是可能（或者是如何教人理解、面对自身的脆弱性）？比如诗经的兴观群怨、鲁迅探索的文艺教育是如何借助脆弱性唤醒人对社会的思考、力量，如何在直面、承认人的脆弱性后还能实现社会秩序的创造与维持。')}
        </p>
        <p className={textStyle}>
            {parseBold('我想起，24年6月哈佛的毕业典礼演讲上，诺贝尔和平奖得主Maria Ressa恰好也在讲“be vulnerable”，而她讲的恰好是表现出脆弱如何可能创造关系的纽带、恢复信任与寻找的能力（虽然，我也还没完全想清楚这到底是如何实现的，脆弱和真诚、敞开的关系又是什么？），但她提脆弱的出发点恰恰是关系、秩序而非只是个体的人性，很有意思的也是这条视频的评论中也有不少人在质疑vulnerable是否应该翻译为脆弱（评论里出现了示弱、恻隐之心、敞开心扉、展现柔弱的一面、放平心态的刚柔并济……）。')}
        </p>
        <div className={quoteStyle}>
            <p className="not-italic">
            「You‘ve accomplished a lot to be here today, you might think being vulnerable is weak, and it is hard to trust. But, in every relationship, in every negotiation, in order to move forward and accomplish anything meaningful, someone lowers their shield first, brings down their ego, the defense mechanism then others follow, .... let that person be you. Because when you are vulnerable, you create the strongest bonds, you restore trust and the ability to find, creative solutions to intractable problems, you become resilient, and enable the most inspiring possibilities.」
            </p>
        </div>
        <p className={textStyle}>
            {parseBold('感谢这些对话（以及，感觉以后应该请你讲党课了），**总是在跟您那些“宏大”“组织”“秩序”“社会”“政治”的碰撞中，我好像才能在书斋中开始真正想起国家、制度、社会的存在，反思自己又在不经意间划向了哪里、想法中顽固不愿改变的是什么，提醒我保持悬置，记得问自己到底能不能回答so what，now what。总之，借此感谢您在又一年里带给我了这些拥有实感、事感的际遇，持续让我看见如何在回应真实世界展现研究者个体的理论直觉、对中西方概念的把握与勾连、思想的洞见与脉络。**')}
        </p>
      </>
    )
  },
  {
    id: 'wood',
    title: '6. 温莎椅一把',
    coverImage: '/wenshayi.png',
    renderContent: () => (
      <>
        <img src="/wenshayi.png" alt="wenshayi" className={modalImgStyle} />
        
        <p className={textStyle}>
          {parseBold('无所事事时，我最有作为；孤身一人时，我最不寂寞。')}
        </p>
        
        <p className={textStyle}>
          {parseBold('为什么做木工：想在这个世界上“创造”出一些实实在在的事物；手工活让我进入心流；一直喜欢木头这种质料和各种手工艺、工匠活。在其中，切身感受自己作品的质变瞬间。而这就是创造力的源泉，是时间的杰作。')}
        </p>
        
        <p className={textStyle}>
          {parseBold('理解这事“不缓慢也不简单”，理解这种属于“过去”的速度与复杂性“在过去，是抓住瞬间，而不是争分夺秒；在过去，复杂性在于注意力和反应的深度和敏锐度，而不是冗杂的信息及其整合的规则。”')}
        </p>
        
        <p className={textStyle}>
          {parseBold('开始思考人如何才能进入“心流”（flow），教育/课程设定的目标是否应该是心流、专注而非知识、能力这样的内容层面，去抓人的状态、给人一种体验，或许是更重要的。')}
        </p>
        
        <p className={textStyle}>
          {parseBold('开始确信，木工这样的具身活动，无法依赖任何AI“加速”，最终一定是自己“手上”“身体”上的变化。是在一次次返工、犯错、重来、不可挽回的具身中才开始感受到弧度的过渡、用车刀时对的声音、削出来对的木屑、木纹的顺逆、用手握持车刀去进入木头的角度、速度、力量究竟意味着什么。')}
        </p>
        
        <p className={textStyle}>
          {parseBold('最重要的或许还是让我发现，偶尔享受这样的private joy，进行making和fabrication后，我还是那么想要回到那个复杂、困难、要和人打交道的世界中，working for something bigger than myself。')}
        </p>
        
        <p className={textStyle}>
          {parseBold('更多的学习心得，在零散、冗长的木工上工记录中，就不放上来了，重要的还是在此感谢您的支持，不得不说，这话还怪感人的。虽然这椅子也终是“为你为做/作/坐”了哈哈（/狗头/），但是我的荣幸，祝愿我能多去你办公室坐几次，多坐在上面接受几次你的拷问。')}
        </p>

        <img src="/jushendenengli.png" alt="jushendenengli" className={modalImgStyle} />
      </>
    )
  }
];

export const SectionMemories: React.FC = () => {
  const [selectedMemory, setSelectedMemory] = useState<MemoryItem | null>(null);

  return (
    <section className="min-h-screen py-24 relative scroll-mt-20" id="memories">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 pl-4 border-l-4 border-stone-800">
          <h2 className="text-3xl md:text-5xl font-serif text-ink mb-2">2025- Events & Moments & Images</h2>
          <p className="text-stone-400 font-sans tracking-wide">
             Fragments of time, crystallized.
          </p>
        </div>

        {/* --- INTRODUCTION BLOCK --- */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-stone-200 mb-16 relative overflow-hidden">
             {/* Decorative Background */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-stone-50 rounded-bl-full z-0 opacity-50"></div>
             
             <div className="relative z-10 space-y-8">
                 <h3 className="text-2xl font-serif font-bold text-ink border-b border-stone-100 pb-4 inline-block">引言</h3>
                 
                 <div className="font-serif text-lg text-stone-700 leading-loose text-justify space-y-6">
                    <p>
                        {parseBold('2025年是毕业与申博，结束毕业论文与寻找新的方向，从硕士生到博士生的转换；生病手术与学习科研生活、身体与思考的交织。这样的转换与交织，让我回想起2025只能将其概括为：**很快又很慢 很糟又很好 不幸又幸运**。')}
                    </p>
                    <p>
                        {parseBold('想来，在学术的一事无成之外=不学无术中（我是想，不学无术总也比不学“有术”好），这学期倒是很好地实现了两件一直想做事。一是，去学了一直想学的**木工**（也算完成我在教师节跟你汇报的四年规划里的一件事了）。二是，建立一些**实感**，在教育现实中挑战、动摇自己有的那些假设、理论、理想，去感受面对一个具体的人、独特的孩子时的希望、失望、困惑、挫败、成就感，提醒我记得知识、思维之外那些也需要被放置到前景的东西。本来一直都有些想做家教试试（但确实要遇到合适的、不和自己日常安排矛盾的也挺难的），接触作为孩子、学生的“人”，误打误撞，也算在少荃这实现了，的确如您所说，“这不，你的实感就来了”，确实也没想到，新年给你的第一篇小作文竟就是为此而作。')}
                    </p>
                    
                    {/* Intro Image 1 - Resize to small */}
                    <img src="/20250910.png" alt="20250910" className="w-full max-w-[280px] mx-auto rounded-lg shadow-md border border-stone-100 my-6 object-cover" />

                    <p>
                        {parseBold('**虽说没什么成果，但这一年，总归还是在思考，思考我在做什么、我要做什么。这一路上还是触碰了许许多多好玩的主题，特别是在跟您的交流中，您分享给我的那些概念、您在思考的、您的位置上视野中看到的**。是啊，在这样的打开、发散、自由中，我总归是在成长的。希望2026继续打开，也在打开中慢慢看到收束、关联、synthesizing，在不得不的DLL时刻再做出关于我的intentionality的决策就是。而想来，兜兜转转中，我发觉博士第一学期倒是也绕回到了“教材”上：从2023年年底对教材、教辅、学生教材使用的思考，2024年10月对老教材的“发现”、防自学问题、教材作为何种“底线”的关切，因为pssc课程改革而关注到的一系列经典教材、不同取向的教材，到这学期开学和快结束时都在琢磨经典教材和生成式教材的比较，想要想明白到底什么是“好教材”，关联到对媒介、技术、知识的认识，到教材与课程、教学的关系……或许，虽然学术上还一事无成，但我至少发现和确信的是，“教材”倒也是一个一直萦绕着我的东西了。**这样的重逢、萦绕、recognize总还是美妙的、好玩的。**')}
                    </p>
                    
                    <p>
                        {parseBold('也有在具身地进到各种现场中先去看看，在其中感受着、体验着，去跟人、跟这个世界打交道。**在此特别致谢您给我的各种宝贵机会**，让我得以在EduLLM、科技馆、百小、宋小、Agentschool中具身的在场、躬身入局、接触更多元的视角、从书斋到田野、从理想到现实，对我而言，真的是至关重要，无比珍惜的。')}
                    </p>

                    {/* Intro Image 2 - Resize to small */}
                    <img src="/xiexiedaoshi.png" alt="Thank you Mentor" className="w-full max-w-[280px] mx-auto rounded-lg shadow-md border border-stone-100 my-6 object-cover" />
                 </div>
             </div>
        </div>

        {/* --- GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MEMORIES.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedMemory(memory)}
              className="group cursor-pointer bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden relative bg-stone-100">
                <img 
                  src={memory.coverImage} 
                  alt={memory.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors" />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1">
                   Open <ArrowRight size={12} />
                </div>
              </div>
              
              {/* Content Info */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-ink group-hover:text-stone-600 transition-colors line-clamp-2">
                  {memory.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {selectedMemory && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-sm"
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-paper w-full max-w-4xl max-h-[90vh] rounded-xl shadow-2xl flex flex-col overflow-hidden relative"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedMemory(null)}
                className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white rounded-full transition-colors z-20 backdrop-blur-sm"
              >
                <X size={24} className="text-stone-500" />
              </button>

              {/* Modal Header */}
              <div className="px-8 py-6 border-b border-stone-200 bg-white shrink-0">
                  <div className="flex items-center gap-2 text-stone-400 mb-2">
                      <ImageIcon size={16} />
                      <span className="text-xs font-mono uppercase tracking-widest">Memory Record</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-ink">{selectedMemory.title}</h2>
              </div>

              {/* Modal Body */}
              <div className="p-8 md:p-12 overflow-y-auto bg-stone-50/30">
                 {selectedMemory.renderContent()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};