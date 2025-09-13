import React, { useState, useEffect } from 'react';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { SkillsPage } from '../pages/SkillsPage';
import { EducationPage } from '../pages/EducationPage';
import { ExperiencePage } from '../pages/ExperiencePage';
import { ReferencesPage } from '../pages/ReferencesPage';
import { ContactPage } from '../pages/ContactPage';

export function Router() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentPage(hash || 'home');
      window.scrollTo(0, 0);
    };

    // Set initial page
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'skills':
        return <SkillsPage />;
      case 'education':
        return <EducationPage />;
      case 'experience':
        return <ExperiencePage />;
      case 'references':
        return <ReferencesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return renderPage();
}
