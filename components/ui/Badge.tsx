import React from 'react';

// FIX: Changed from interface to type alias with intersection to fix a type inference issue.
// This ensures `className` and other HTML attributes are correctly included in BadgeProps.
type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'default' | 'secondary' | 'outline';
};

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  const variantClasses = {
    default: "border-transparent bg-primary text-primary-foreground",
    secondary: "border-transparent bg-secondary text-secondary-foreground",
    outline: "text-foreground",
  };
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props} />
  );
}
