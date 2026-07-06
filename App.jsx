import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  Globe2,
  Mail,
  Phone,
  Play,
  UserRound,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import profileCutout from './assets/lorraine-photo4-cutout.png';
import growthOne from './assets/growth-1.png';
import growthTwo from './assets/growth-2.png';
import aiExplore from './assets/ai-explore.png';
import lifeSystem from './assets/life-system.png';
import ecommerceOne from './assets/ecommerce-1.png';
import ecommerceTwo from './assets/ecommerce-2.png';
import ecommerceThree from './assets/ecommerce-3.png';
import ecommerceFour from './assets/ecommerce-4.png';
import xiaohongshuImage from './assets/xiaohongshu.jpg';
import quietVideo from './assets/quiet-video.mp4';

const lastUpdated = '2026-07-05';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'MachinePulse', href: '#machinepulse' },
  { label: 'Portfolio', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

const skillItems = [
  '剪映',
  'Navicat+SQL',
  '可画',
  'Chat GPT',
  'Codex',
  'Gemini',
  '扣子',
  '秀米（推文制作）',
  '飞书（多维表格+文档）',
  'Excel（数据透视表+多类函数）',
  'PPT（美化）',
  'Claude（暂未被封号版）',
];

const simpleSkills = skillItems.filter((item) => !item.includes('（'));
const detailSkills = skillItems.filter((item) => item.includes('（'));

const personalityWords = [
  '自驱力',
  '自学SQL、python、AI',
  '抗压能力',
  '论期末周与健身日程平衡',
  '老大我们期末周一天只睡4个小时真的没事吗',
  '经常性睡眠驱动型人才',
  'ISTJ',
  '坚决贯彻个人计划制',
];

const pulseModules = [
  {
    number: '01',
    title: '产品品牌',
    summary: '',
    body: [
      '或许可以将“AI是生活方式的延伸”融入品牌塑造，将“年轻化”、“陪伴化”刻进品牌打造？',
      '将“proactive”标签作为先进、年轻潮流的一员，融入进品牌打造。',
    ],
    tags: ['生活方式', '探索', '陪伴', '分享'],
  },
  {
    number: '02',
    title: '团队品牌',
    summary: '',
    body: [
      '生命力、先锋潮流、年轻化或许可能是团队成员叙事的一大优势。',
      '比如是让MachinePulse吸引适应自己品牌的AI人才，而不是让MachinePulse吸引所有人。',
    ],
    tags: ['团队文化', 'Founder Story', 'Ownership', '全球化'],
  },
  {
    number: '03',
    title: '行业叙事',
    summary: '',
    body: [
      '或许告诉普通人、外行人MachinePulse的行业视角，和在行业内输出MachinePulse的AI报告同样重要。',
      '或许我们可以试试让普通人也参与MachinePulse的品牌效应打造？',
    ],
    tags: ['AI普及', '行业洞察', '信任', '长期价值'],
  },
];

const growthImages = [
  { src: growthOne, alt: '高途实习完成事项截图' },
  { src: growthTwo, alt: '高途实习复盘截图' },
];

const writingLinks = [
  {
    title: '青春脚步进社区 冬日暖阳慰橙衣',
    url: 'https://m.life.china.com/2026-02/11/content_542434.html',
    tone: '中华网生活',
  },
  {
    title: '墨韵承古 让千年文脉在实践中焕发新生机',
    url: 'http://www.jicengwang.cn/news/2025-08-11/286313.html',
    tone: '基层网',
  },
  {
    title: '江苏大学“墨韵团队”开展暑期社会实践活动',
    url: 'https://hqtime.huanqiu.com/share/article/4Nxa0ikRpWv',
    tone: '环球时报',
  },
  {
    title: '江苏大学“墨韵团队”开展暑期社会实践活动',
    url: 'https://lx.huanqiu.com/article/4Nxa0ikRpWv',
    tone: '环球网留学',
  },
];

const selfDriveItems = [
  {
    label: '自主对电商的探索',
    title: '从数据源到异常分析',
    text: '主动寻找公开数据源，练习电商指标拆解、异动判断与图表表达。',
    images: [
      { src: ecommerceOne, alt: 'GMV异动分析框架' },
      { src: ecommerceTwo, alt: '商品数据分析' },
      { src: ecommerceThree, alt: '流量转化数据分析' },
      { src: ecommerceFour, alt: '用户画像分析' },
    ],
  },
  {
    label: '自主对AI的探索',
    title: '把 AI 变成工作流',
    text: '围绕求职、内容、数据分析等场景，探索 Claude、GPT、Gemini、Deepseek 与扣子 workflow。',
    images: [{ src: aiExplore, alt: '对求职数据分析系统的探索' }],
  },
  {
    label: '如何高效安排自己的生活',
    title: '用系统记录成长',
    text: '用飞书沉淀学习、项目、复盘和生活节奏，让长期目标变成可以执行的日常。',
    images: [{ src: lifeSystem, alt: '用飞书记录个人成长' }],
  },
  {
    label: '小红书探索',
    title: '从内容尝试到浏览反馈',
    text: '把平台内容作为小型实验场，观察选题、封面、表达方式与浏览反馈之间的关系。',
    images: [{ src: xiaohongshuImage, alt: '个人小红书创作' }],
  },
];

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activePreview, setActivePreview] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [activeJourney, setActiveJourney] = useState(0);

  const openPreview = (image) => {
    setActivePreview(image);
    setZoom(1);
  };

  const closePreview = () => {
    setActivePreview(null);
    setZoom(1);
  };

  const stepSlide = (direction) => {
    setActiveSlide((current) => (
      current + direction + growthImages.length
    ) % growthImages.length);
  };

  const currentGrowthImage = growthImages[activeSlide % growthImages.length];

  return (
    <main className="site-shell">
      <section className="home-hero" id="home" aria-label="My Portfolio">
        <header className="portfolio-nav">
          <a className="logo-mark" href="#home" aria-label="Lorraine home">
            <Code2 size={28} aria-hidden="true" />
            <strong>Lorraine<span>Portfolio</span></strong>
          </a>
          <nav aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="updated">
            <span>最近更新</span>
            <time dateTime={lastUpdated}>{lastUpdated}</time>
          </div>
        </header>

        <div className="home-layout content-width">
          <div className="home-copy">
            <p className="hero-hello">Hi there!</p>
            <h1>My Portfolio</h1>
            <h2>AI Growth Operator</h2>
            <p className="hero-name">龙珮瑶 | Lorraine</p>
            <p className="hero-statement">
              以AI为生产力，以增长运营为方法，把用户洞察、内容表达和转化链路组成清晰、温暖、可持续的品牌体验。
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#work">
                View My Work
                <ChevronRight size={18} aria-hidden="true" />
              </a>
              <a className="secondary-button" href="#contact">
                Contact Me
                <Mail size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <a className="hero-next" href="#machinepulse" aria-label="Go to MachinePulse">
            <ChevronRight size={30} aria-hidden="true" />
          </a>

          <div className="portrait-shape" aria-label="Lorraine portrait">
            <div className="signature">Lorraine</div>
            <img src={profileCutout} alt="Lorraine portrait" draggable="false" />
            <div className="round-icon globe">
              <Globe2 size={30} aria-hidden="true" />
            </div>
            <div className="available-badge">
              <i />
              <span>Available for<br />AI Growth</span>
            </div>
            <div className="mini-orbit orbit-one" />
            <div className="mini-orbit orbit-two" />
          </div>
        </div>

        <div className="hero-overview content-width">
          <article>
            <UserRound size={24} aria-hidden="true" />
            <h3>About Me</h3>
            <p>一场关于文科生如何积极适应AI时代的journey</p>
            <a href="#machinepulse">Read Journey <ChevronRight size={16} aria-hidden="true" /></a>
          </article>
          <article>
            <Code2 size={24} aria-hidden="true" />
            <h3>Skills</h3>
            <div className="skill-cloud">
              <div className="skill-group">
                {simpleSkills.map((item) => (
                  <span className="tool-simple" key={item}>{item}</span>
                ))}
              </div>
              <div className="skill-group">
                {detailSkills.map((item) => (
                  <span className="tool-detail" key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
          <article>
            <UserRound size={24} aria-hidden="true" />
            <h3>Flexible personality</h3>
            <div className="personality-cloud">
              {personalityWords.map((item) => (
                <span
                  className={[
                    ['自驱力', '抗压能力', 'ISTJ'].includes(item) ? 'is-dark' : '',
                    item.length > 6 ? 'is-long' : 'is-short',
                  ].filter(Boolean).join(' ')}
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="machine-section" id="machinepulse">
        <div className="machine-hero content-width">
          <p className="eyebrow">Presentation</p>
          <h2>我理解的 MachinePulse</h2>
          <p className="machine-lead">
            在了解MachinePulse与Karpo之后，我尝试从产品、团队与行业三个层面，思考一个AI品牌如何真正建立长期价值。
            <br />
            仅为浅薄看法，如有幸，请指正。
          </p>
        </div>

        <div className="pulse-story content-width">
          {pulseModules.map((module) => (
            <article className="pulse-module" key={module.number}>
              <div className="pulse-number">{module.number}</div>
              <div className="pulse-copy">
                <h3>{module.title}</h3>
                {module.summary ? <strong>{module.summary}</strong> : null}
                {module.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <div className="tag-row">
                  {module.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="content-width">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Selected Work</p>
              <h2>作品 / 案例</h2>
            </div>
          </div>

          <div className="portfolio-grid">
            <article className="portfolio-card growth-card">
              <div className="card-topline">
                <span>01</span>
                <h3>用户增长运营项目</h3>
              </div>
              <div className="carousel" onContextMenu={(event) => event.preventDefault()}>
                <button type="button" onClick={() => stepSlide(-1)} aria-label="上一张">
                  <ChevronLeft size={22} aria-hidden="true" />
                </button>
                <img
                  src={currentGrowthImage.src}
                  alt={currentGrowthImage.alt}
                  draggable="false"
                  onClick={() => openPreview(currentGrowthImage)}
                />
                <button type="button" onClick={() => stepSlide(1)} aria-label="下一张">
                  <ChevronRight size={22} aria-hidden="true" />
                </button>
              </div>
              <div className="slide-dots">
                {growthImages.map((image, index) => (
                  <button
                    className={index === activeSlide % growthImages.length ? 'active' : ''}
                    key={image.alt}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`查看第 ${index + 1} 张`}
                  />
                ))}
              </div>
            </article>

            <article className="portfolio-card writing-card">
              <div className="card-topline">
                <span>02</span>
                <h3>语言审美</h3>
              </div>
              <div className="site-preview-grid">
                {writingLinks.map((link) => (
                  <a key={link.title} href={link.url} target={link.url.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    <span>{link.tone}</span>
                    <strong>{link.title}</strong>
                    <div className="browser-lines">
                      <i />
                      <i />
                      <i />
                    </div>
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </article>

            <article className="portfolio-card self-card">
              <div className="card-topline">
                <span>03</span>
                <h3>自驱力与成绩</h3>
              </div>
              <div className="journey-buttons">
                {selfDriveItems.map((item, index) => (
                  <button
                    className={activeJourney === index ? 'active' : ''}
                    key={item.label}
                    type="button"
                    onClick={() => setActiveJourney(index)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="journey-panel">
                <div className="journey-gallery">
                  {selfDriveItems[activeJourney].images.map((image) => (
                    <img
                      src={image.src}
                      alt={image.alt}
                      draggable="false"
                      key={image.alt}
                      onClick={() => openPreview(image)}
                    />
                  ))}
                </div>
                <div>
                  <h4>{selfDriveItems[activeJourney].title}</h4>
                  <p>{selfDriveItems[activeJourney].text}</p>
                </div>
              </div>
            </article>

            <article className="portfolio-card video-card">
              <div className="card-topline">
                <span>04</span>
                <h3>宁静风格</h3>
              </div>
              <div className="video-frame">
                <video src={quietVideo} controls preload="metadata" controlsList="nodownload" />
                <div className="video-label">
                  <Play size={18} fill="currentColor" aria-hidden="true" />
                  <span>Quiet visual rhythm</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section contact-section content-width" id="contact">
        <div className="contact-card">
          <h2>联系方式</h2>
          <div className="contact-list">
            <a href="tel:19732575573">
              <Phone size={20} aria-hidden="true" />
              19732575573
            </a>
            <a href="mailto:19732575573@163.com">
              <Mail size={20} aria-hidden="true" />
              19732575573@163.com
            </a>
          </div>
        </div>
      </section>

      {activePreview !== null ? (
        <div className="image-modal" role="dialog" aria-modal="true" onContextMenu={(event) => event.preventDefault()}>
          <div className="modal-tools">
            <button type="button" onClick={() => setZoom((value) => Math.max(0.7, value - 0.2))} aria-label="缩小">
              <ZoomOut size={20} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => setZoom((value) => Math.min(2.4, value + 0.2))} aria-label="放大">
              <ZoomIn size={20} aria-hidden="true" />
            </button>
            <button type="button" onClick={closePreview} aria-label="关闭">
              <X size={20} aria-hidden="true" />
            </button>
          </div>
          <img
            src={activePreview.src}
            alt={activePreview.alt}
            draggable="false"
            style={{ transform: `scale(${zoom})` }}
          />
        </div>
      ) : null}
    </main>
  );
}

export default App;
