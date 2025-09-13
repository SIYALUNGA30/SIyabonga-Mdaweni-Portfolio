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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-lg">
      <div className="w-full mx-auto px-2 sm:px-4 py-3">
        <div className="flex items-center justify-between animate-slideIn-fast">
          {/* Left side - Profile and Name */}
          <button 
            onClick={() => navigateToPage('home')}
            className="flex items-center gap-3 text-xl font-medium cursor-pointer hover:text-primary transition-colors duration-200"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-full border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://image2url.com/images/1757771346808-a2a593b6-03f0-47b4-be9a-df5b41140b16.png" 
                  alt="Siyabonga Mdaweni"
                  className="w-full h-full object-cover"
                />
            </div>
            Siyabonga Mdaweni
          </button>

          {/* Right side - Navigation and Contact */}
          <div className="flex items-center gap-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              {navLinks.map(link => (
                 <button 
                  key={link.id}
                  onClick={() => navigateToPage(link.id)}
                  className={`text-sm px-3 py-2 rounded-md border border-transparent transition-all ${
                    isActivePage(link.id) 
                      ? 'text-primary bg-primary/10 border-primary/20' 
                      : 'text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            
            {/* Desktop Contact Button */}
            <Button 
              onClick={() => navigateToPage('contact')} 
              className={`hidden md:flex hover:scale-105 transition-all duration-200 ${
                isActivePage('contact')
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-primary/90 hover:border-primary'
              }`}
            >
              Get In Touch
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-primary/10 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border shadow-lg md:hidden">
              <div className="flex flex-col p-4 space-y-2">
                {navLinks.map(link => (
                    <button 
                      key={link.id}
                      onClick={() => navigateToPage(link.id)}
                      className={`text-left px-3 py-2 rounded-md transition-all ${
                        isActivePage(link.id) 
                          ? 'text-primary bg-primary/10' 
                          : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      {link.label}
                    </button>
                ))}
                <Button 
                  onClick={() => navigateToPage('contact')} 
                  className={`mt-2 ${
                    isActivePage('contact')
                      ? 'bg-primary text-primary-foreground'
                      : ''
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
