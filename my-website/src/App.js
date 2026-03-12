import React, { useMemo, useState } from 'react';
import './App.css';

import langChainImage from './assets/langchain.png';
import myCatImage from './assets/mycat.jpg';
import summerImage from './assets/summer.jpg';

const profile = {
  name: 'Cheese Qi',
  title: 'Software Engineer · AI & Cloud Builder',
  intro:
    'I love turning ideas into real products, with a focus on AI applications, cloud-native architecture, and thoughtful user experiences. This site is where I document selected projects, open-source work, and personal interests.',
  interests: ['AI Product', 'Cloud Native', 'Full-stack', 'Open Source'],
};

const experiences = [
  {
    title: 'E-commerce Platform · Part-time Engineer',
    summary: 'Contributed to a deal-focused e-commerce platform that helps users discover high-value products every day.',
    points: [
      'Supported a community of 500,000+ users sharing and browsing discounts.',
      'Improved recommendation and content presentation to strengthen product discovery.',
      'Shipped iterative product features that improved retention and conversion.',
    ],
    link: { label: 'LordOfSavings', href: 'https://www.lordofsavings.com/' },
    tag: 'Product Engineering',
  },
  {
    title: 'Alibaba Container Registry Integration',
    summary: 'Implemented image on-demand loading and acceleration for large-scale Kubernetes clusters.',
    points: [
      'Built remote on-demand image pulling with Kubernetes API + DADI.',
      'Applied transfer and compression optimizations to reduce cold-start wait time.',
      'Improved image distribution stability for very large cluster environments.',
    ],
    link: {
      label: 'Enable image acceleration',
      href: 'https://www.alibabacloud.com/help/en/acr/user-guide/load-resources-of-a-container-image-on-demand#section-87k-i16-i5g',
    },
    tag: 'Cloud Native',
  },
  {
    title: 'Hackathon Game · Be The Detective',
    summary: 'Created a first-person detective game powered by OpenAI APIs for dynamic storytelling.',
    points: [
      'Storylines adapt in real time based on player actions.',
      'Designed mobile-first interactions for exploration and deduction on the go.',
      'Each playthrough presents different case outcomes for strong replay value.',
    ],
    link: { label: 'YouTube Demo', href: 'https://www.youtube.com/watch?v=JEBriG7Auyw' },
    tag: 'AI + Creativity',
  },
  {
    title: 'AI / ML No-code Platform',
    summary: 'Built an industry-focused no-code AI/ML platform for training and deployment.',
    points: [
      'Developed a React frontend with a Flask + AWS S3 backend stack.',
      'Deployed model endpoints on AWS SageMaker for application integration.',
      'Lowered the barrier for AI workflows with scalable infrastructure.',
    ],
    tag: 'Platform Engineering',
  },
];

const openSource = [
  {
    name: 'LangChain',
    description:
      'LangChain helps developers combine LLMs with tools, knowledge sources, and workflows to build scalable production AI applications.',
    highlights: [
      'Context-aware architecture that connects documents, databases, APIs, and agent logic.',
      'A clear path from prototype to production with a mature ecosystem.',
      'Well-suited for complex reasoning, RAG, and multi-step workflows.',
    ],
    href: 'https://www.langchain.com/',
    image: langChainImage,
  },
];

const tabs = [
  { key: 'about', label: 'About' },
  { key: 'experience', label: 'Experience' },
  { key: 'open-source', label: 'Open Source' },
];

const cats = [
  {
    name: 'Zhazong',
    image: myCatImage,
    alt: 'Zhazong the cat relaxing',
    note: 'My senior code reviewer—calm, fluffy, and surprisingly strict about quality.',
  },
  {
    name: 'Summer',
    image: summerImage,
    alt: 'Summer the cat resting',
    note: 'Raised together with my girlfriend, Summer is our daily dose of joy and cozy vibes.',
  },
];

function App() {
  const [activeTab, setActiveTab] = useState('about');

  const sectionContent = useMemo(() => {
    if (activeTab === 'about') {
      return (
        <section className="panel-grid" aria-label="about section">
          <article className="card large-card">
            <h2>About Me</h2>
            <p>{profile.intro}</p>
            <div className="chip-row">
              {profile.interests.map((interest) => (
                <span key={interest} className="chip">
                  {interest}
                </span>
              ))}
            </div>
          </article>
          <article className="card image-card">
            <h3>Life Snapshot</h3>
            <div className="cat-gallery" aria-label="my cats">
              {cats.map((cat) => (
                <figure key={cat.name} className="cat-card">
                  <img src={cat.image} alt={cat.alt} className="cat-image" />
                  <figcaption>
                    <span className="cat-name">{cat.name}</span>
                    <p>{cat.note}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </article>
        </section>
      );
    }

    if (activeTab === 'experience') {
      return (
        <section className="timeline" aria-label="experience section">
          {experiences.map((item) => (
            <article key={item.title} className="card timeline-item">
              <div className="timeline-header">
                <h3>{item.title}</h3>
                <span className="badge">{item.tag}</span>
              </div>
              <p>{item.summary}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {item.link && (
                <a href={item.link.href} target="_blank" rel="noopener noreferrer" className="text-link">
                  {item.link.label}
                </a>
              )}
            </article>
          ))}
        </section>
      );
    }

    return (
      <section className="panel-grid" aria-label="open source section">
        {openSource.map((item) => (
          <article key={item.name} className="card large-card">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <ul>
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-link">
              Visit {item.name}
            </a>
            <img src={item.image} alt="LangChain" className="langchain-image" />
          </article>
        ))}
      </section>
    );
  }, [activeTab]);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <p className="sidebar-label">Workspace</p>
        <h1>{profile.name}</h1>
        <p className="sidebar-title">{profile.title}</p>
        <nav className="tab-list" aria-label="Main navigation">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.key}
              className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="content-area">
        <header className="topbar">
          <div>
            <p className="eyebrow">Personal Blog</p>
            <h2>Projects · Interests · Notes</h2>
          </div>
          <a href="https://github.com/cheeseQI" target="_blank" rel="noopener noreferrer" className="text-link">
            GitHub ↗
          </a>
        </header>

        <div className="content-wrapper">{sectionContent}</div>
      </main>
    </div>
  );
}

export default App;
