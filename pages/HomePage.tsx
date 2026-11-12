import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ReferencesSection } from '../components/ReferencesSection';
import { ContactSection } from '../components/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ReferencesSection />
      <ContactSection />
    </div>
  );
};