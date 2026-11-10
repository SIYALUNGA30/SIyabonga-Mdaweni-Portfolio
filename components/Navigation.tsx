import React, { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { Menu, X } from "./icons/LucideIcons";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'references', label: 'References' },
  ];

  const navigateToPage = (path: string) => {
    window.location.hash = path;
    setIsMenuOpen(false); // Close mobile menu on navigation
  };
  
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setActivePage(hash || 'home');
    };
    handleHashChange(); // Set initial active page
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isActivePage = (page: string) => {
    if (page === 'home' && (activePage === 'home' || activePage === '')) return true;
    return activePage === page;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Profile and Name */}
          <button 
            onClick={() => navigateToPage('home')}
            className="flex items-center gap-3 text-lg font-bold text-navy-900 tracking-tight cursor-pointer hover:text-teal-600 transition-colors"
          >
            <div className="w-9 h-9 rounded-full border border-slate-200 overflow-hidden bg-slate-100 flex-shrink-0">
              <img 
                src="https://image2url.com/images/1757771346808-a2a593b6-03f0-47b4-be9a-df5b41140b16.png" 
                alt="Siyabonga Mdaweni"
                className="w-full h-full object-cover"
              />
            </div>
            <span>Siyabonga Mdaweni</span>
          </button>

          {/* Right side - Navigation and Contact */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                 <button 
                  key={link.id}
                  onClick={() => navigateToPage(link.id)}
                  className={`text-sm px-3 py-1.5 rounded-md font-medium transition-colors ${
                    isActivePage(link.id) 
                      ? 'text-teal-800 bg-teal-50/80 font-semibold' 
                      : 'text-slate-600 hover:text-navy-900 hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            
            {/* Desktop Contact Button */}
            <Button 
              onClick={() => navigateToPage('contact')} 
              className={`hidden md:flex bg-navy-900 hover:bg-navy-800 text-white font-medium text-xs px-4 py-2 transition-colors ${
                isActivePage('contact') ? 'ring-2 ring-teal-500 ring-offset-2' : ''
              }`}
            >
              Get In Touch
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-md md:hidden animate-slideIn">
              <div className="flex flex-col p-4 space-y-1">
                {navLinks.map(link => (
                    <button 
                      key={link.id}
                      onClick={() => navigateToPage(link.id)}
                      className={`text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActivePage(link.id) 
                          ? 'text-teal-800 bg-teal-50 font-semibold' 
                          : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                    </button>
                ))}
                <Button 
                  onClick={() => navigateToPage('contact')} 
                  className="mt-2 w-full bg-navy-900 hover:bg-navy-800 text-white text-sm"
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