import React from 'react';
import { HeroSection } from '../components/HeroSection.tsx';
import { OverviewSection } from '../components/OverviewSection.tsx';

export const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <OverviewSection />
        </>
    );
};