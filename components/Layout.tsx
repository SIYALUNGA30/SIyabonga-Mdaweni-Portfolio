import React from "react";
import { Navigation } from "./Navigation";
import { Toaster } from "./Toaster";

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const navigateToPage = (path: string) => {
    window.location.hash = path;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-navy-900">
      <Navigation />
      <main className="pt-16 flex-grow">
        {children}
      </main>
      
      <footer className="bg-navy-950 text-slate-300 py-10 border-t border-navy-900 mt-auto">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left space-y-1">
              <p className="text-sm font-semibold text-white">
                Siyabonga Mdaweni · Portfolio
              </p>
              <p className="text-xs text-slate-400">
                Cybersecurity &amp; IT Support Specialist · AI/ML Practitioner
              </p>
              <p className="text-xs text-slate-500 pt-1">
                &copy; {new Date().getFullYear()} Siyabonga Mdaweni. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-xs text-slate-400">
              <button 
                onClick={() => navigateToPage('about')}
                className="hover:text-teal-400 hover:underline transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => navigateToPage('projects')}
                className="hover:text-teal-400 hover:underline transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => navigateToPage('skills')}
                className="hover:text-teal-400 hover:underline transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => navigateToPage('education')}
                className="hover:text-teal-400 hover:underline transition-colors"
              >
                Education
              </button>
              <button 
                onClick={() => navigateToPage('experience')}
                className="hover:text-teal-400 hover:underline transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => navigateToPage('references')}
                className="hover:text-teal-400 hover:underline transition-colors"
              >
                References
              </button>
              <button 
                onClick={() => navigateToPage('contact')}
                className="hover:text-teal-400 hover:underline transition-colors text-teal-400 font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  );
}