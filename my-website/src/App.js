import React, { useMemo, useState } from 'react';
import './App.css';

import myCatImage from './assets/mycat.jpg';
import summerImage from './assets/summer.jpg';

const profile = {
  name: 'Cheese Qi',
  title: 'Software Engineer · AI & Cloud Builder',
  intro:
    'I love turning ideas into real products, with a focus on AI applications, cloud-native architecture, and thoughtful user experiences. This site is where I document selected projects and personal interests.',
  interests: ['AI Product', 'Cloud Native', 'Full-stack'],
};

const experiences = [
  {
    title: 'TikTok Shop Promotion Landing Page',
    summary: 'Owned high-traffic promotion experiences and scalable commerce services for TikTok Shop US and UK.',
    points: [
      'Delivered Activity and Voucher Landing pages serving 25M+ daily PVs, using gRPC services to optimize promotion logic, checkout flows, and free-shipping attainment.',
      'Grew the page’s GMV contribution from 0.3% to a 3.64% peak while improving AOV by 2.3%.',
    ],
    tag: 'Commerce Infrastructure',
  },
  {
    title: 'E-commerce Platform',
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
    title: 'AI / ML No-code Platform',
    summary: 'Built an industry-focused no-code AI/ML platform for training and deployment.',
    points: [
      'Developed a React frontend with a Flask + AWS S3 backend stack.',
      'Deployed model endpoints on AWS SageMaker for application integration.',
      'Lowered the barrier for AI workflows with scalable infrastructure.',
    ],
    link: { label: 'ZW ML Platform', href: 'https://www.zw-ml.com/' },
    tag: 'Platform Engineering',
  },
  {
    title: 'AI / Alibaba Cloud Registry Integration',
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
];

const tabs = [
  { key: 'about', label: 'About' },
  { key: 'experience', label: 'Experience' },
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
            <p className="card-index">01 / PROFILE</p>
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
            <p className="card-index">02 / OFF HOURS</p>
            <h3>Life Snapshot</h3>
            <div className="cat-gallery" aria-label="my cats">
              {cats.map((cat) => (
                <figure key={cat.name} className={`cat-card cat-card--${cat.name.toLowerCase()}`}>
                  <img src={cat.image} alt={cat.alt} className="cat-image" />
                  <figcaption>
                    <span className="cat-name">{cat.name}</span>
                    <span className="cat-status">SUBJECT / VERIFIED</span>
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
          {experiences.map((item, index) => (
            <article key={item.title} className="card timeline-item">
              <p className="card-index">LOG / {String(index + 1).padStart(2, '0')}</p>
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

    return null;
  }, [activeTab]);

  return (
    <div className="app-shell">
      <div className="data-stream" aria-hidden="true">
        <span>SYS.2077 // NEURAL LINK ACTIVE // NIGHT CITY RELAY // BUILDING TOMORROW_</span>
      </div>
      <aside className="sidebar">
        <div className="identity">
          <p className="sidebar-label">Night Shift / Portfolio</p>
          <h1 data-text={profile.name}>{profile.name}</h1>
          <p className="sidebar-title">{profile.title}</p>
        </div>
        <nav className="tab-list" aria-label="Main navigation">
          {tabs.map((tab, index) => (
            <button
              type="button"
              key={tab.key}
              className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <span>0{index + 1}</span>
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="signal" aria-label="system status online">
          <span className="signal-dot" />
          <span>Signal online</span>
          <span className="signal-code">HKG / 02:17</span>
        </div>
      </aside>

      <main className="content-area">
        <div className="hud-corners" aria-hidden="true" />
        <header className="topbar">
          <div>
            <p className="eyebrow">Channel 07 / Personal Archive</p>
            <h2>Projects <i /> Interests <i /> Notes</h2>
          </div>
          <a href="https://github.com/cheeseQI" target="_blank" rel="noopener noreferrer" className="text-link">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </header>

        <div className="content-wrapper">{sectionContent}</div>
      </main>
    </div>
  );
}

export default App;
