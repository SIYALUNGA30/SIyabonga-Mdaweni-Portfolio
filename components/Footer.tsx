
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container max-w-6xl mx-auto py-6 px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Siyabonga Mdaweni. All Rights Reserved.</p>
        <p className="mt-2 sm:mt-0">Johannesburg, Gauteng</p>
      </div>
    </footer>
  );
};
