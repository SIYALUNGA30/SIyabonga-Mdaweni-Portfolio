
import React from 'react';
// FIX: Added .tsx extension to fix module resolution errors.
import { ContactSection } from '../components/ContactSection.tsx';

export const ContactPage: React.FC = () => {
    return <ContactSection />;
};
