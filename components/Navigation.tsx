import React, { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { Menu, X } from "./icons/LucideIcons";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'references', label: 'References' },
  ];

  const navigateToPage = (path: string) => {
    setIsMenuOpen(false);

    if (path === 'home') {
      if (window.location.hash.includes('case-study')) {
        window.location.hash = 'home';
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('home');
      }
      return;
    }

    if (window.location.hash.includes('case-study')) {
      window.location.hash = path;
    } else {
      window.location.hash = path;
      setActiveSection(path);
      const target = document.getElementById(path);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // ScrollSpy: Real-time detection of which section is currently on screen
  useEffect(() => {
    const handleScroll = () => {
      // If currently viewing a dedicated case study page, highlight projects
      if (window.location.hash.includes('case-study')) {
        setActiveSection('projects');
        return;
      }

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // 1. Bottom of page edge case: activate contact for Get In Touch button
      if (windowHeight + scrollY >= docHeight - 120) {
        setActiveSection('contact');
        return;
      }

      // 2. Near top of page: activate home / hero
      if (scrollY < 140) {
        setActiveSection('home');
        return;
      }

      // 3. Section threshold detection
      const sections = ['about', 'skills', 'projects', 'references', 'contact'];
      let current = 'home';

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // When the section top reaches within 180px of top of viewport (below navbar)
          if (rect.top <= 180) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    // Run on initial mount
    handleScroll();

    // Listen to scroll and hash changes
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleScroll);
    };
  }, []);

  const isLinkActive = (id: string) => {
    if (id === 'projects' && window.location.hash.includes('case-study')) {
      return true;
    }
    return activeSection === id;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-2.5">
        <div className="flex items-center justify-between">
          
          {/* Left side - Profile and Name */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigateToPage('home')}
              className="flex items-center gap-3 text-base sm:text-lg font-bold text-navy-900 tracking-tight cursor-pointer hover:text-teal-700 transition-colors"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200 overflow-hidden bg-slate-100 flex-shrink-0">
                <img 
                  src="https://image2url.com/images/1757771346808-a2a593b6-03f0-47b4-be9a-df5b41140b16.png" 
                  alt="Siyabonga Mdaweni"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-extrabold text-navy-900">Siyabonga Mdaweni</span>
            </button>
          </div>

          {/* Right side - Navigation Links and Contact Button */}
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
            
            {/* Desktop Navigation Links (About, Skills, Projects, References) */}
            <div className="hidden md:flex items-center gap-1.5 p-1 bg-slate-100/60 rounded-xl border border-slate-200/60">
              {navLinks.map(link => {
                const active = isLinkActive(link.id);
                return (
                  <button 
                    key={link.id}
                    onClick={() => navigateToPage(link.id)}
                    className={`relative text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                      active 
                        ? 'text-teal-900 bg-white font-bold shadow-xs border border-teal-300/80 ring-1 ring-teal-400/30' 
                        : 'text-slate-600 hover:text-navy-900 hover:bg-white/60'
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && (
                      <span className="absolute -bottom-1 left-2.5 right-2.5 h-0.5 bg-teal-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
            
            {/* Dedicated Primary CTA Action: Get In Touch */}
            <Button 
              onClick={() => navigateToPage('contact')} 
              className={`hidden md:inline-flex text-xs font-bold px-4 py-2 rounded-lg transition-all duration-200 ${
                activeSection === 'contact' 
                  ? 'bg-teal-600 hover:bg-teal-700 text-white ring-2 ring-teal-400 ring-offset-2 shadow-sm' 
                  : 'bg-navy-900 hover:bg-navy-800 text-white shadow-2xs'
              }`}
            >
              Get In Touch
            </Button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg md:hidden animate-slideIn">
              <div className="flex flex-col p-4 space-y-1.5">
                {navLinks.map(link => {
                  const active = isLinkActive(link.id);
                  return (
                    <button 
                      key={link.id}
                      onClick={() => navigateToPage(link.id)}
                      className={`text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between ${
                        active 
                          ? 'text-teal-900 bg-teal-50 border border-teal-300/80 font-bold shadow-2xs' 
                          : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      {active && (
                        <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                      )}
                    </button>
                  );
                })}
                <Button 
                  onClick={() => navigateToPage('contact')} 
                  className={`mt-2 w-full text-xs font-bold ${
                    activeSection === 'contact'
                      ? 'bg-teal-600 hover:bg-teal-700 text-white ring-2 ring-teal-400'
                      : 'bg-navy-900 hover:bg-navy-800 text-white'
                  }`}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          )}

        </div>
      </div>
    </nav>
  );
}