
import React from 'react';
// FIX: Added .tsx extension to fix module resolution errors.
import { AboutSection } from '../components/AboutSection.tsx';

export const AboutPage: React.FC = () => {
    return <AboutSection />;
};
