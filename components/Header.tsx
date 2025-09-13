
import React from 'react';
import { Github, Linkedin } from './icons/LucideIcons';
import { Navigation } from './Navigation';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-6xl items-center px-4">
        <div className="mr-4 flex">
          <a href="#" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Siyabonga Mdaweni</span>
          </a>
          {/* FIX: Replaced inline navigation with the Navigation component. */}
          <Navigation />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <a href="https://github.com/SIYALUNGA30" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-accent rounded-full">
            <Github className="h-5 w-5 text-foreground/60" />
          </a>
          <a href="https://linkedin.com/in/siyabonga-mdaweni-25a0b71ab" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-accent rounded-full">
            <Linkedin className="h-5 w-5 text-foreground/60" />
          </a>
        </div>
      </div>
    </header>
  );
};
