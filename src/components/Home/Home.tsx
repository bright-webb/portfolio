import React, { useEffect, useState, useRef } from 'react';
import { 
  Code, Server, Database, MapPin, Calendar, 
  Figma, GitHub, Layers, Cloud, User, Award, 
  MessageCircle, Globe, ArrowRight, Heart,
  Mail, ExternalLink, Send, Copy, Check, Twitter, Linkedin, Smartphone
} from 'react-feather';
import './Home.scss';
import Layout from '../common/Layout/Layout';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  category: string;
}
interface TagColor {
  bg: string;
  color: string;
}

interface Skill {
  name: string;
  level: number;
  icon: any;
}

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('about');
  const [visibleProjects, setVisibleProjects] = useState<number>(4);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [emailCopied, setEmailCopied] = useState<boolean>(false);
  const emailRef = useRef<HTMLDivElement>(null);
  
  
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Cryptocurrency trading platform app",
      description: "A full-stack cryptocurrency trading solution with payment integration and admin dashboard.",
      image: "/images/portfolio/bitroyalty.PNG", 
      tags: ["React", "Laravel", "MySQL", "Typescript", "Quidax"],
      link: "#",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Cryptocurrency Platform & P2P Trading",
      description: "A full-featured cryptocurrency trading platform with an integrated admin dashboard, P2P transaction support, user management, wallet funding, and real-time transaction monitoring.",
      image: "/images/portfolio/fundwallet.PNG",
      tags: ["PHP", "MySQL", "JavaScript", "P2P", "Admin Dashboard"],
      link: "#",
      category: "Fintech"
    },    
    {
      id: 3,
      title: "WebSocket Server",
      description: "A high-performance WebSocket server built in Go, enabling real-time communication between a PHP backend and a TypeScript frontend. Designed to handle event broadcasting, subscriptions, and bidirectional messaging with low latency.",
      image: "/images/portfolio/github.jfif",
      tags: ["Go", "WebSocket", "Real-Time", "Backend"],
      link: "#",
      category: "Backend"
    },
    {
      id: 4,
      title: "BenchStack Team Collaboration Platform",
      description: "A SaaS platform that intelligently connects startups and businesses with remote teams of professionals. BenchStack uses AI to match users based on skills, roles, and project requirements.",
      image: "/images/portfolio/benchstack.PNG",
      tags: ["Laravel", "React", "TypeScript", "Inertia.js", "AI", "SaaS"],
      link: "#",
      category: "SaaS"
    }, 
  ]);

  const socialLinks = [
    { icon: <GitHub size={20} />, url: "https://github.com/bright-webb", name: "GitHub" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/bright-webilor-926604193", name: "LinkedIn" },
    { icon: <Twitter size={20} />, url: "https://twitter.com/bright__webb", name: "Twitter" },
  ];

  const skills: Skill[] = [
    { name: "Go", level: 90, icon: <Code size={18} /> },
    { name: "Laravel", level: 95, icon: <Server size={18} /> },
    { name: "PHP", level: 95, icon: <Code size={18} /> },
    { name: "TypeScript", level: 85, icon: <Code size={18} /> },
    { name: "JavaScript", level: 90, icon: <Code size={18} /> },
    { name: "MySQL", level: 85, icon: <Database size={18} /> },
    { name: "Redis", level: 80, icon: <Database size={18} /> },
    { name: "MongoDB", level: 75, icon: <Database size={18} /> },
    { name: "SCSS", level: 85, icon: <Figma size={18} /> },
    { name: "AWS", level: 70, icon: <Cloud size={18} /> },
    { name: "React", level: 90, icon: <Code size={18} /> },
    { name: "React Native", level: 80, icon: <Smartphone size={18} /> }
  ];
  const personalDetails = {
    name: "Bright Webilor",
    title: "Fullstack Developer",
    bio: `Passionate software developer with 10+ years of experience building scalable, 
          performant web applications. I specialize in creating seamless user experiences 
          with modern frontend frameworks while ensuring robust backend architectures.`,
    facts: [
      { icon: <Globe size={16} />, text: "10+ years coding experience" },
      { icon: <Award size={16} />, text: "12 successful client projects" },
      { icon: <MessageCircle size={16} />, text: "Fluent in 3 languages" },
    ],
    interests: ["Open Source", "AI & ML", "UI Design", "Cloud Architecture"]
  };

  const tagColors: TagColor[] = [
    { bg: "rgba(255, 126, 51, 0.08)", color: "#e05a00" }, 
    { bg: "rgba(60, 212, 88, 0.08)", color: "#27a645" }, 
    { bg: "rgba(64, 120, 255, 0.08)", color: "#2a62d8" },
    { bg: "rgba(232, 78, 191, 0.08)", color: "#c52b97" },
    { bg: "rgba(255, 190, 11, 0.08)", color: "#d19800" },
    { bg: "rgba(124, 58, 237, 0.08)", color: "#6d31c2" }
  ];

  const getRandomTagColor = (): TagColor => {
    return tagColors[Math.floor(Math.random() * tagColors.length)];
  };

  const handleImageError = (projectId: number) => {
    setImageErrors(prev => ({
      ...prev,
      [projectId]: true
    }));
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayEmail = isMobile ? "hey@bright..." : "hey@bright-webilor.com.ng";

  // Copy email to clipboard function
  const copyEmail = () => {
    navigator.clipboard.writeText("hey@bright-webilor.com.ng")
      .then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      })
      .catch(err => {
        console.error("Failed to copy email: ", err);
      });
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    if (emailRef.current) {
      const letters = emailRef.current.querySelectorAll('.email-letter');
      
      letters.forEach((letter, index) => {
        const timeout = setTimeout(() => {
          letter.classList.add('animated');
        }, 80 * index);
        
        return () => clearTimeout(timeout);
      });
    }
  }, []);

  useEffect(() => {
    if (projectsRef.current) {
      const projectCards = projectsRef.current.querySelectorAll('.project-card');
      
      projectCards.forEach((card, index) => {
        const timeout = setTimeout(() => {
          card.classList.add('project-in-view');
        }, 150 * index);
        
        return () => clearTimeout(timeout);
      });
    }
  }, [projects, visibleProjects]); 

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 3);
  };

  const renderAboutContent = () => (
    <div className={`about-me-content ${activeTab === 'about' ? 'active' : ''}`}>
      <div className="about-header">
        <div className="about-avatar">
          <User size={28} className="avatar-icon" />
        </div>
        <div className="about-intro">
          <h3>{personalDetails.name}</h3>
          <p className="about-title">{personalDetails.title}</p>
        </div>
      </div>
      
      <p className="about-bio">{personalDetails.bio}</p>
      <div className="about-interests">
        <h4>Interests</h4>
        <div className="interest-tags">
          {personalDetails.interests.map((interest, index) => {
            const colorStyle = getRandomTagColor();
            return (
              <span 
                className="interest-tag" 
                key={index}
                style={{ 
                  backgroundColor: colorStyle.bg, 
                  color: colorStyle.color 
                }}
              >
                <Heart size={12} className="interest-icon" />
                {interest}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderTechStackContent = () => (
    <div className={`tech-stack-content ${activeTab === 'stack' ? 'active' : ''}`}>
      <h3 className="tech-stack-title">My Technology Toolkit</h3>
      <p className="tech-stack-subtitle">Languages, frameworks, and tools I work with</p>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-header">
              <div className="skill-icon-name">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar-bg">
              <div 
                className="skill-bar-fill" 
                style={{ 
                  width: `${skill.level}%`,
                  background: `linear-gradient(90deg, ${tagColors[index % tagColors.length].color} 0%, ${tagColors[(index + 2) % tagColors.length].color} 100%)`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Layout>
        <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="animate-on-scroll">
              Hi, I'm <span className="name">Bright Webilor!</span>
            </h1>
            <div className="profession-wrapper animate-on-scroll">
              <h2 className="profession">
                <span className="text-muted">I'm a</span> <span className="highlight">Fullstack Developer</span>
              </h2>
              <div className="status-badge">
                <span className="status-dot"></span>
                Open to work
              </div>
            </div>
            
            <p className="intro animate-on-scroll">
              Feel free to explore my portfolio and reach out
              <br />—I'd love to connect!
            </p>
            
            <div className="cta-buttons animate-on-scroll">
              <a href="#contact" className="primary-button">
                Say Hello
              </a>
              <a href="#projects" className="secondary-button">
                See my work
              </a>
            </div>
          </div>
        </div>

        <div className="experience-cards animate-on-scroll">
          <div className="timeline-card">
            <h3 className="card-title">My Experience</h3>
            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-date">
                  <Calendar size={14} className="icon" /> 2024 - Present
                </span>
                <h4>Web Developer at Luzoma Microsystems</h4>
                <span className="badge">Full-time</span>
              </div>
              <div className="timeline-item">
                <span className="timeline-date">
                  <Calendar size={14} className="icon" /> 2021 - 2023
                </span>
                <h4>Software Engineer at Fowgate</h4>
                <span className="badge">Full-time</span>
              </div>
              <div className="timeline-item">
                <span className="timeline-date">
                  <Calendar size={14} className="icon" /> 2019 - 2021
                </span>
                <h4>Software Engineer at Xao&Xig</h4>
                <span className="badge">Full-time</span>
              </div>
              <div className="timeline-item">
                <span className="timeline-date">
                  <Calendar size={14} className="icon" /> 2017 - 2019
                </span>
                <h4>Web Developer at Dexterity ICT Center</h4>
                <span className="badge">Full-time</span>
              </div>
            </div>
          </div>
              
          <div className="card-group">
            <div className="info-card about-stack-card">
              <div className="card-tabs">
                <button 
                  className={`tab-button ${activeTab === 'about' ? 'active' : ''}`}
                  onClick={() => setActiveTab('about')}
                >
                  About Me
                </button>
                <button 
                  className={`tab-button ${activeTab === 'stack' ? 'active' : ''}`}
                  onClick={() => setActiveTab('stack')}
                >
                  My Stack
                </button>
              </div>
              
              <div className="tab-content">
                {activeTab === 'about' ? renderAboutContent() : renderTechStackContent()}
              </div>
            </div>
          </div>
        </div> 

        <div className="stack-section animate-on-scroll">
          <h3>Tech stack</h3>
          <div className="tech-slider">
            <div className="slider-track slider-track-1">
              {[
                { src: "/images/React.webp", alt: "React" },
                { src: "/images/html5.png", alt: "HTML 5" },
                { src: "/images/css.png", alt: "CSS 3" },
                { src: "/images/javascript.png", alt: "JavaScript" },
                { src: "/images/typescript.png", alt: "TypeScript" },
                { src: "/images/php.png", alt: "PHP" },
                { src: "/images/laravel.png", alt: "Laravel" }
              ].map((item, index) => (
                <div className="item" key={`track1-${index}`}>
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentNode as HTMLElement;
                      if (parent && !parent.querySelector('svg')) {
                        const iconDiv = document.createElement('div');
                        iconDiv.className = 'tech-icon-fallback';
                        iconDiv.innerHTML = `<div>${item.alt}</div>`;
                        parent.appendChild(iconDiv);
                      }
                    }}
                  />
                </div>
              ))}
              {[
                { src: "/images/React.webp", alt: "React" },
                { src: "/images/html5.png", alt: "HTML 5" },
                { src: "/images/css.png", alt: "CSS 3" },
                { src: "/images/javascript.png", alt: "JavaScript" },
                { src: "/images/typescript.png", alt: "TypeScript" },
                { src: "/images/php.png", alt: "PHP" },
                { src: "/images/laravel.png", alt: "Laravel" }
              ].map((item, index) => (
                <div className="item" key={`track1-repeat-${index}`}>
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentNode as HTMLElement;
                      if (parent && !parent.querySelector('svg')) {
                        const iconDiv = document.createElement('div');
                        iconDiv.className = 'tech-icon-fallback';
                        iconDiv.innerHTML = `<div>${item.alt}</div>`;
                        parent.appendChild(iconDiv);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
            
            <div className="slider-track slider-track-2">
              {[
                { src: "/images/go.png", alt: "Go" },
                { src: "/images/mysql.png", alt: "MySQL" },
                { src: "/images/nodejs.png", alt: "NodeJS" },
                { src: "/images/redis.png", alt: "Redis" },
                { src: "/images/aws.png", alt: "AWS" },
                { src: "/images/gcp.png", alt: "GCP" },
                { src: "/images/sass.png", alt: "Sass" }
              ].map((item, index) => (
                <div className="item" key={`track2-${index}`}>
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentNode as HTMLElement;
                      if (parent && !parent.querySelector('svg')) {
                        const iconDiv = document.createElement('div');
                        iconDiv.className = 'tech-icon-fallback';
                        iconDiv.innerHTML = `<div>${item.alt}</div>`;
                        parent.appendChild(iconDiv);
                      }
                    }}
                  />
                </div>
              ))}

              {[
                { src: "/images/go.png", alt: "Go" },
                { src: "/images/mysql.png", alt: "MySQL" },
                { src: "/images/nodejs.png", alt: "NodeJS" },
                { src: "/images/redis.png", alt: "Redis" },
                { src: "/images/aws.png", alt: "AWS" },
                { src: "/images/gcp.png", alt: "GCP" },
                { src: "/images/sass.png", alt: "Sass" }
              ].map((item, index) => (
                <div className="item" key={`track2-repeat-${index}`}>
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentNode as HTMLElement;
                      if (parent && !parent.querySelector('svg')) {
                        const iconDiv = document.createElement('div');
                        iconDiv.className = 'tech-icon-fallback';
                        iconDiv.innerHTML = `<div>${item.alt}</div>`;
                        parent.appendChild(iconDiv);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
          
        <div className="location-section animate-on-scroll">
          <div className="map-preview">
            <MapPin size={24} className="map-icon" />
          </div>
          <div className="location-info">
            <h3>How I Work</h3>
            <p>Based in Port Harcourt, Rivers State, Nigeria. Available for remote work worldwide and on-site collaboration in the Bay Area.</p>
          </div>
        </div>

        <div className="projects-section animate-on-scroll" id="projects">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-line"></div>
            <p className="section-subtitle">Recent work I've completed for clients and personal projects</p>
          </div>
          
          <div className="projects-container" ref={projectsRef}>
            {projects.slice(0, visibleProjects).map((project, index) => (
              <div 
                className="project-card" 
                key={project.id}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="project-image-container">
                  {imageErrors[project.id] ? (
                    <div className="project-image-placeholder">
                      <Layers size={32} className="project-placeholder-icon" />
                      <p className="placeholder-text">{project.title}</p>
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      onError={() => handleImageError(project.id)}
                    />
                  )}
                  <div className="project-category-badge">
                    {project.category}
                  </div>
                  <div className="project-overlay">
                  <Link to={`/project/${project.id}`} className="view-project-btn">
                  View Project
                </Link>
                  </div>
                </div>
                <div className="project-content-area">
                  <h3 className="project-title">{project.title}</h3>
                  
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech-tags">
                    {project.tags.map((tag, index) => {
                      const colorStyle = getRandomTagColor();
                      return (
                        <span 
                          className="tech-tag" 
                          key={index}
                          style={{ 
                            backgroundColor: colorStyle.bg, 
                            color: colorStyle.color 
                          }}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  <Link to={`/project/${project.id}`} className="project-link">
                    View Details <ArrowRight size={16} className="icon" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {visibleProjects < projects.length && (
            <div className="projects-cta">
              <button className="load-more-button" onClick={loadMoreProjects}>
                Load More Projects <GitHub size={16} className="icon" />
              </button>
            </div>
          )}
        </div>

    
        <div className="contact-section animate-on-scroll" id="contact">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <div className="section-line"></div>
            <p className="section-subtitle">Have a project in mind? Let's discuss how we can work together</p>
          </div>

          <div className="contact-content">
            <div className="animated-email-container">
              <div className="email-wrapper" ref={emailRef}>
                <div className="email-icon">
                  <Mail size={28} />
                </div>
                <div className="email-text">
                  {displayEmail.split('').map((letter, index) => (
                    <span key={index} className="email-letter">{letter}</span>
                  ))}
                </div>

                <button 
                  className="copy-email-btn" 
                  onClick={copyEmail}
                  aria-label="Copy email address"
                >
                  {emailCopied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
              <div className="email-hover-animation"></div>
            </div>

            <div className="contact-social-links">
              {socialLinks.map((link, index) => (
                <a 
                  href={link.url} 
                  className="social-link" 
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${link.name}`}
                >
                  {link.icon}
                  <span className="social-name">{link.name}</span>
                  <ExternalLink size={14} className="external-icon" />
                </a>
              ))}
            </div>

            <div className="contact-cta">
              <a href="mailto:hey@bright-webilor.com.ng" className="contact-button">
                <Send size={18} className="icon" />
                Send me a message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  );
};

export default Hero;