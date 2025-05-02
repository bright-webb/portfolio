import React, { useState, useEffect } from 'react';
import './Layout.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleDownloadResume = () => {
    setIsDownloading(true);
    
    setTimeout(() => {
     
      const resumeUrl = '/resume.pdf';
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'BrightWebilor-Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => {
        setIsDownloading(false);
      }, 1000); 
    }, 600);
  };

  return (
    <div className="site-wrapper">
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <a href="/" className="logo">
              <div className="logo-shape"></div>
              <span>BW</span>
            </a>

            <button 
              className={`resume-button ${isDownloading ? 'downloading' : ''}`}
              onClick={handleDownloadResume}
              aria-label="Download Resume"
              disabled={isDownloading}
            >
              <span className="button-text">
                {isDownloading ? 'Downloading...' : 'Resume'}
              </span>
              <span className="button-icon">
                {isDownloading ? (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="loading-icon">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="40" strokeDashoffset="0"></circle>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M9 13L12 16L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 20H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )}
              </span>
            </button>
          </div>
        </div>
      </header>

      <main className="site-main">
        {children}
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="logo-shape"></div>
              <span>BW</span>
            </div>
            <p>&copy; {new Date().getFullYear()} Bright Webilor. All rights reserved.</p>
            <div className="social-links">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;