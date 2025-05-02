import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, GitHub, ExternalLink, Calendar, 
  Code, Server, Database, Figma, Cloud, Layers,
  ChevronRight, User, MessageSquare, Clock, Heart, Share2
} from 'react-feather';
import './ProjectDetail.scss';
import Layout from '../common/Layout/Layout';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  tags: string[];
  link?: string;
  githubLink?: string;
  category: string;
  client?: string;
  date: string;
  duration: string;
  role: string;
  team?: string[];
  features: string[];
  technologies: string[];
  challenges: string[];
  solutions: string[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
  nextProject?: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cryptocurrency trading platform app",
    description: "A full-stack cryptocurrency trading solution with payment integration and admin dashboard.",
    fullDescription: "A comprehensive cryptocurrency trading platform that enables users to buy, sell, and exchange various cryptocurrencies. The platform includes secure wallet management, real-time price tracking, and seamless payment integration. The admin dashboard provides powerful tools for monitoring transactions, managing users, and analyzing platform performance.",
    image: "/images/portfolio/bitroyalty.PNG",
    gallery: [
      "/images/portfolio/bitroyalty.PNG",
      "/images/portfolio/bitroyalty/bitroyalty2.PNG",
      "/images/portfolio/bitroyalty/bitroyalty3.PNG",
      "/images/portfolio/bitroyalty/bitroyalty4.PNG",
      "/images/portfolio/bitroyalty/bitroyalty5.PNG",
      "/images/portfolio/bitroyalty/bitroyalty6.PNG",
      "/images/portfolio/bitroyalty/bitroyalty7.PNG",
    ],
    tags: ["React", "Laravel", "MySQL", "Typescript", "Quidax"],
    link: "https://bitroyalty.com.ng/app",
    category: "Full Stack",
    client: "BitRoyalty.",
    date: "October 2024",
    duration: "6 months",
    role: "Full-stack Developer",
    features: [
      "Secure user authentication and authorization",
      "Real-time cryptocurrency price tracking",
      "Multiple wallet management",
      "Transaction history and analytics",
      "Admin dashboard with comprehensive reporting",
      "KYC Verification process",
      "Real time notifications"
    ],
    technologies: [
      "React", "Laravel", "MySQL", "TypeScript", "Redis", "AWS", "Docker"
    ],
    challenges: [
      "Ensuring secure transactions and wallet management",
      "Implementing real-time price updates with minimal latency",
      "Handling high-volume transactions during peak periods",
      "Designing an intuitive interface for complex trading flows"
    ],
    solutions: [
      "Implemented robust encryption and secure wallet architecture",
      "Used WebSockets for real-time data with Redis for caching",
      "Designed scalable infrastructure with load balancing on AWS",
      "Created guided workflows with contextual help for new users"
    ],
    nextProject: 2
  },
  {
    id: 2,
    title: "Cryptocurrency Platform & P2P Trading",
    description: "A full-featured cryptocurrency trading platform with an integrated admin dashboard, P2P transaction support, user management, multiple wallet managements and funding.",
    fullDescription: "This platform revolutionizes peer-to-peer cryptocurrency trading with a focus on security and user experience. The system facilitates direct transactions between users while providing escrow services to ensure safe trades. The comprehensive admin dashboard gives operators full visibility of all platform activities and robust tools for user management and dispute resolution.",
    image: "/images/portfolio/fundwallet.PNG",
    gallery: [
      "/images/portfolio/fundwallet.PNG",
      "/images/portfolio/fundwallet/fundwallet2.PNG",
      "/images/portfolio/fundwallet/fundwallet3.PNG",
      "/images/portfolio/fundwallet/fundwallet4.PNG",
      "/images/portfolio/fundwallet/fundwallet5.PNG",
      "/images/portfolio/fundwallet/fundwallet6.PNG",
      "/images/portfolio/fundwallet/fundwallet7.PNG",
    ],
    tags: ["PHP", "MySQL", "JavaScript", "P2P", "Admin Dashboard"],
    link: "https://fundwallet.net",
    category: "Fintech",
    client: "FundWallet",
    date: "November 2024",
    duration: "5 months",
    role: "Full-stack Developer",
    features: [
      "P2P trading platform with escrow services",
      "Multi-currency wallet system",
      "KYC verification process",
      "Dispute resolution system",
      "Real-time transaction notifications",
      "Comprehensive admin dashboard"
    ],
    technologies: [
      "PHP", "MySQL", "JavaScript", "jQuery", "Bootstrap", "Redis", "AWS"
    ],
    challenges: [
      "Building a trustworthy escrow system for P2P trades",
      "Ensuring compliance with various international regulations",
      "Designing an intuitive interface for complex trading flows",
      "Managing the performance of a high-traffic database"
    ],
    solutions: [
      "Implemented a multi-signature escrow system with time-locks",
      "Developed a configurable compliance module adaptable to various jurisdictions",
      "Created guided workflows with contextual help for new users",
      "Optimized database with indexing and query optimizations"
    ],
    nextProject: 3
  },
  {
    id: 3,
    title: "Cherryio WebSocket Server",
    description: "A high-performance WebSocket server built in Go, enabling real-time communication between a PHP backend and a TypeScript frontend. Designed to handle event broadcasting, subscriptions, and bidirectional messaging with low latency.",
    fullDescription: "Cherryio is a custom-built WebSocket server that acts as the real-time core infrastructure for several of my applications. Developed in Go for optimal concurrency and efficiency, it handles thousands of simultaneous connections with minimal resource consumption. Cherryio supports robust pub/sub models, real-time broadcasting, direct messaging, and request response patterns. Designed with horizontal scalability in mind, it includes JWT-based authentication, Redis backed message persistence, and reconnection strategies for offline clients.  Tt's a battle-tested backbone for event-driven applications.",
    image: "/images/portfolio/github.jfif",
    gallery: [
      "/images/portfolio/github.jfif",
    ],
    tags: ["Go", "WebSocket", "Real-Time", "Backend"],
    githubLink: "https://github.com/bright-webb/cherryio",
    category: "Backend",
    client: "Internal Project / Infrastructure Layer",
    date: "August 2022",
    duration: "3 months",
    role: "Backend Developer",
    features: [
      "Low-latency message delivery",
      "Scalable architecture supporting thousands of concurrent connections",
      "Authentication and authorization middleware",
      "Different messaging patterns (pub/sub, broadcasting, direct messaging)",
      "Automatic reconnection and message queuing",
      "Comprehensive monitoring and logging"
    ],
    technologies: [
      "Go", "WebSockets", "Redis", "Docker", "Kubernetes", "Prometheus", "Grafana"
    ],
    challenges: [
      "Achieving sub-millisecond message delivery at scale",
      "Handling reconnection scenarios without message loss",
      "Managing authentication across multiple applications",
      "Implementing an efficient channel subscription model"
    ],
    solutions: [
      "Used Go goroutines and channels for efficient message processing",
      "Implemented a message queue with Redis for clients that go offline",
      "Developed a JWT-based authentication system with role-based permissions",
      "Created an optimized subscription manager with O(1) lookup time"
    ],
    nextProject: 4
  },
  {
    id: 4,
    title: "Ballocs Team Collaboration Platform",
    description: "A decentralized hub for projects and collaboration.",
    fullDescription: "Ballocs, which was formally Cohub serves as a centralized platform where individuals and businesses can come together to collaborate on projects, build diverse teams, and harness the power of collective expertise. Whether you're a seasoned professional or a budding entrprenuer, Cohub offers a level playin field where ideas can thrive and potential realized",
    image: "/images/portfolio/benchstack.PNG",
    gallery: [
      "/images/portfolio/ballocs.PNG",
      "/images/portfolio/ballocs/dashboard.jpg",
      "/images/portfolio/ballocs/1729091422781.jfif",
      "/images/portfolio/ballocs/mobile-mockup.png",
    ],
    tags: ["Laravel", "React", "TypeScript", "SaaS", "Cherryio"],
    githubLink: "https://github.com/Bevynile/cohub_frontend",
    category: "SaaS",
    date: "January 2024",
    duration: "1 year",
    role: "Full-stack Developer",
    features: [
      "Cross platform access",
      "Time tracking",
      "Real time messaging and comments",
      "Project management and task delegation tools",
      "Decentralized user permissions and role management"
    ],
    technologies: [
      "Laravel", "React", "TypeScript", "Joy UI", "MySQL", "Redis", "Cherryio", "AWS", "Docker"
    ],
    challenges: [
      "Integrating project management, messaging, and automation into a cohesive UX without feature bloat",
      "Creating a unified experience across project management tools",
      "Building a fair and transparent rating system",
      "Ensuring data security and privacy compliance"
    ],
    solutions: [
      "Built a unified design system and modular architecture to ensure UX consistency across all collaboration tools",
      "Implemented a consistent design system and unified API layer",
      "Created a multi-factor rating system with review moderation",
      "Deployed full-stack end-to-end encryption, role-based access controls, and AWS-hosted secure environments with GDPR-compliant policies"
    ],
    nextProject: 1
  }
];

const getIconForTech = (tech: string) => {
  const techMap: Record<string, any> = {
    "React": <Code size={16} />,
    "Laravel": <Server size={16} />,
    "PHP": <Code size={16} />,
    "MySQL": <Database size={16} />,
    "TypeScript": <Code size={16} />,
    "JavaScript": <Code size={16} />,
    "Go": <Code size={16} />,
    "Redis": <Database size={16} />,
    "AWS": <Cloud size={16} />,
    "Docker": <Cloud size={16} />,
    "Figma": <Figma size={16} />
  };
  
  return techMap[tech] || <Code size={16} />;
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [activeImage, setActiveImage] = useState(0);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  const headerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('[data-animate], [data-stagger]');
    
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8;
      
      if (isVisible) {
        el.classList.add('animate-in');
      }
    });
  };

  // Initial check
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
  
  return () => {
    window.removeEventListener('scroll', animateOnScroll);
  };
}, []);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    
    setTimeout(() => {
      const projectData = projects.find(p => p.id === Number(id));
      if (projectData) {
        setProject(projectData);
        setLikeCount(Math.floor(Math.random() * 120) + 30);
      }
      setLoading(false);
      setTimeout(() => {
        setAnimationComplete(true);
      }, 300);
    }, 800);
  }, [id]);
  
  useEffect(() => {
    if (!loading && project) {
      const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
      
      const elements = [
        headerRef.current,
        galleryRef.current,
        contentRef.current,
        techRef.current
      ];
      
      elements.forEach(el => {
        if (el) observer.observe(el);
      });
      
      return () => {
        elements.forEach(el => {
          if (el) observer.unobserve(el);
        });
      };
    }
  }, [loading, project]);
  
  const handleNextImage = () => {
    if (!project) return;
    setActiveImage((prev) => (prev + 1) % project.gallery.length);
  };
  
  const handlePrevImage = () => {
    if (!project) return;
    setActiveImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };
  
  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };
  
  const goToNextProject = () => {
    if (project && project.nextProject) {
      navigate(`/project/${project.nextProject}`);
    }
  };
  
  if (loading) {
    return (
      <div className="project-detail-loader">
        <div className="loader">
          <div className="loader-circle"></div>
          <div className="loader-text">Loading project...</div>
        </div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="project-not-found">
        <Layers size={48} />
        <h2>Project Not Found</h2>
        <p>The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="back-button">
          <ArrowLeft size={18} /> Back to Portfolio
        </Link>
      </div>
    );
  }
  
  return (
   <Layout>
     <div className={`project-detail-page ${animationComplete ? 'loaded' : ''}`}>
      <div className="navigation-header">
        <Link to="/" className="back-button">
          <ArrowLeft size={18} /> Back to Portfolio
        </Link>
        
        <div className="project-actions">
          <button 
            className={`like-button ${liked ? 'liked' : ''}`} 
            onClick={handleLike}
            aria-label={liked ? "Unlike this project" : "Like this project"}
          >
            <Heart size={18} />
            <span className="like-count">{likeCount}</span>
          </button>
          
          <button className="share-button" aria-label="Share this project">
            <Share2 size={18} />
          </button>
        </div>
      </div>
      
      <div className="project-detail-container">
        <div className="project-header" data-animate ref={headerRef}>
          <div className="project-category-badge">{project.category}</div>
          <h1 className="project-title">{project.title}</h1>
          <p className="project-description">{project.description}</p>
          
          <div className="project-meta">
            <div className="meta-item">
              <Calendar size={18} />
              <span>{project.date}</span>
            </div>
            <div className="meta-item">
              <Clock size={18} />
              <span>{project.duration}</span>
            </div>
            <div className="meta-item">
              <User size={18} />
              <span>{project.role}</span>
            </div>
            {project.client && (
              <div className="meta-item">
                <MessageSquare size={18} />
                <span>{project.client}</span>
              </div>
            )}
          </div>
          
          <div className="project-tags">
            {project.tags.map((tag, index) => (
              <span className="project-tag" key={index}>
                {tag}
              </span>
            ))}
          </div>
          
          <div className="project-links">
            {project.link && (
              <a 
                href={project.link} 
                className="project-link live-link"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink size={18} /> View Live Project
              </a>
            )}
            
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                className="project-link github-link"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GitHub size={18} /> View Source Code
              </a>
            )}
          </div>
        </div>
        
        <div className="project-gallery" ref={galleryRef}>
          <div className="gallery-container">
            {project.gallery.map((image, index) => (
              <div 
                key={index} 
                className={`gallery-image ${activeImage === index ? 'active' : ''}`}
                style={{ transform: `translateX(${(index - activeImage) * 100}%)` }}
              >
                <img 
                  src={image} 
                  alt={`${project.title} - Screenshot ${index + 1}`} 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentNode as HTMLElement;
                    if (parent) {
                      const placeholderDiv = document.createElement('div');
                      placeholderDiv.className = 'image-placeholder';
                      placeholderDiv.innerHTML = `
                        <Layers size={32} />
                        <span>Image Unavailable</span>
                      `;
                      parent.appendChild(placeholderDiv);
                    }
                  }}
                />
              </div>
            ))}
          </div>
          
          <div className="gallery-nav">
            <button className="gallery-nav-button prev" onClick={handlePrevImage}>
              <ChevronRight size={24} />
            </button>
            <div className="gallery-indicators">
              {project.gallery.map((_, index) => (
                <button 
                  key={index} 
                  className={`indicator ${activeImage === index ? 'active' : ''}`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
            <button className="gallery-nav-button next" onClick={handleNextImage}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div className="project-content-tabs">
          <button 
            className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab-button ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Features
          </button>
          <button 
            className={`tab-button ${activeTab === 'challenges' ? 'active' : ''}`}
            onClick={() => setActiveTab('challenges')}
          >
            Challenges & Solutions
          </button>
          {project.team && project.team.length > 0 && (
            <button 
              className={`tab-button ${activeTab === 'team' ? 'active' : ''}`}
              onClick={() => setActiveTab('team')}
            >
              Team
            </button>
          )}
        </div>
        
        <div className="project-content" ref={contentRef}>
          <div className={`content-section overview ${activeTab === 'overview' ? 'active' : ''}`}>
            <h2 className="content-title">Project Overview</h2>
            <p className="full-description">{project.fullDescription}</p>
          </div>
          
          <div className={`content-section features ${activeTab === 'features' ? 'active' : ''}`}>
            <h2 className="content-title">Key Features</h2>
            <ul className="features-list" data-stagger>
              {project.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <div className="feature-marker"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={`content-section challenges ${activeTab === 'challenges' ? 'active' : ''}`}>
            <h2 className="content-title">Challenges & Solutions</h2>
            
            <div className="challenges-solutions">
              <div className="challenges-column">
                <h3>Challenges</h3>
                <ul className="challenge-list">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="challenge-item">
                      <div className="item-marker"></div>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="solutions-column">
                <h3>Solutions</h3>
                <ul className="solution-list">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="solution-item">
                      <div className="item-marker"></div>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {project.team && project.team.length > 0 && (
            <div className={`content-section team ${activeTab === 'team' ? 'active' : ''}`}>
              <h2 className="content-title">Project Team</h2>
              <ul className="team-list">
                {project.team.map((member, index) => (
                  <li key={index} className="team-item">
                    <div className="team-member-avatar">
                      <User size={18} />
                    </div>
                    <span>{member}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="project-technologies" ref={techRef}>
          <h2 className="tech-title">Technologies Used</h2>
          <div className="tech-list">
            {project.technologies.map((tech, index) => (
              <div key={index} className="tech-item">
                <div className="tech-icon">
                  {getIconForTech(tech)}
                </div>
                <span className="tech-name">{tech}</span>
              </div>
            ))}
          </div>
        </div>
        
        {project.testimonial && (
          <div className="project-testimonial">
            <div className="testimonial-content">
              <div className="testimonial-quote">
                <MessageSquare size={24} className="quote-icon" />
                <p className="quote-text">{project.testimonial.text}</p>
              </div>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  <User size={24} />
                </div>
                <div className="author-info">
                  <h4 className="author-name">{project.testimonial.author}</h4>
                  <p className="author-position">{project.testimonial.position}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="next-project-section">
          <h3 className="next-project-title">Continue Exploring</h3>
          <button className="next-project-button" onClick={goToNextProject}>
            Next Project <ArrowLeft size={18} className="next-icon" />
          </button>
        </div>
      </div>
    </div>
  </Layout>
  );
};

export default ProjectDetail;