import React, { useState, useEffect } from 'react';
import { HomePage } from '../pages/HomePage';
import { CaseStudyPage } from '../pages/CaseStudyPage';

export function Router() {
  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace(/^#\/?/, '');
      setCurrentHash(rawHash);

      // If it's a section on the main page (about, skills, projects, references, contact, hero)
      const sectionId = rawHash.split('?')[0];
      if (['about', 'skills', 'projects', 'references', 'contact', 'hero', 'overview', 'cybersecurity-coursework', 'ai-coursework'].includes(sectionId)) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else if (!rawHash.startsWith('case-study')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Check for case study route: case-study/:id
  if (currentHash.startsWith('case-study/')) {
    const projectId = currentHash.replace('case-study/', '');
    return (
      <div key={`case-study-${projectId}`} className="animate-fadeIn w-full">
        <CaseStudyPage projectId={projectId} />
      </div>
    );
  }

  // Single main page with short sections: About, Skills, Projects, References, Contact
  return (
    <div key="single-main-page" className="animate-fadeIn w-full">
      <HomePage />
    </div>
  );
}
