import React from "react";
import { Navigation } from "./Navigation";
import { Toaster } from "./Toaster";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const navigateToPage = (path: string) => {
    window.location.hash = path;
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="animate-fadeIn pt-16">
        {children}
      </main>
      
      <footer className="bg-primary/90 backdrop-blur-sm text-primary-foreground py-6 border-t border-white/20">
        <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="animate-slideIn">
              <p>&copy; 2025 Siyabonga Mdaweni. All rights reserved.</p>
              <p className="text-sm opacity-75">
                IT Support • Available for Opportunities
              </p>
            </div>
            <div className="flex gap-4 text-sm animate-slideIn">
              <button 
                onClick={() => navigateToPage('education')}
                className="hover:underline transition-all hover:scale-105"
              >
                Education
              </button>
              <button 
                onClick={() => navigateToPage('experience')}
                className="hover:underline transition-all hover:scale-105"
              >
                Experience
              </button>
              <button 
                onClick={() => navigateToPage('references')}
                className="hover:underline transition-all hover:scale-105"
              >
                References
              </button>
            </div>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  );
}
