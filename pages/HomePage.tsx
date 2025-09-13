
import React from 'react';
// FIX: Added .tsx extension to fix module resolution errors.
import { HeroSection } from '../components/HeroSection.tsx';

export const HomePage: React.FC = () => {
    return <HeroSection />;
};
