import React, { useState, useEffect } from "react";
import { Navigation } from "./Navigation";
import { Toaster } from "./Toaster";

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  const navigateToPage = (path: string) => {
    window.location.hash = path;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="animate-fadeIn pt-16 flex-grow">
        {children}
      </main>
      
      <footer className="bg-primary/10 py-6 border-t border-border">
        <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="animate-slideIn text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Siyabonga Mdaweni. All rights reserved.</p>
              <p className="text-sm text-muted-foreground">
                IT Support | Aspiring AI/ML Engineer • Available for Opportunities
              </p>
              <div className="mt-4">
                <p className="font-mono text-sm">{currentDateTime.toLocaleDateString()}</p>
                <p className="font-mono text-xs text-muted-foreground">{currentDateTime.toLocaleTimeString()}</p>
              </div>
            </div>
            <div className="animate-slideIn flex items-center">
              <div className="flex gap-4 text-sm">
                <button 
                  onClick={() => navigateToPage('education')}
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                >
                  Education
                </button>
                <button 
                  onClick={() => navigateToPage('experience')}
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                >
                  Experience
                </button>
                <button 
                  onClick={() => navigateToPage('references')}
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                >
                  References
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  );
}