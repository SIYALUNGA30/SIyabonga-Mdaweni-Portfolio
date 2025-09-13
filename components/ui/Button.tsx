import React from 'react';

// FIX: Added 'size' to ButtonProps to allow for different button sizes.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, children, ...props }, ref) => {
    // FIX: Removed unused and incorrect 'Comp' variable declaration that caused a TypeScript error.
    // The logic to handle 'asChild' is correctly implemented below.

    const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variantClasses = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    };
    
    // FIX: Added size-specific classes to apply correct padding and height.
    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
    };
    
    const combinedClassName = [
      baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    if (asChild && React.isValidElement(children)) {
      // FIX: Cast `children.props` to access the `className` property safely, which resolves a TypeScript error.
      // This allows passing `className` and other props to the child component, which is
      // necessary for the `asChild` prop to work correctly. The button's styles are
      // merged with the child's existing classes.
      return React.cloneElement(children as React.ReactElement<any>, {
        ...props,
        className: [combinedClassName, (children.props as { className?: string }).className]
          .filter(Boolean)
          .join(" "),
        ref,
      });
    }

    return (
      <button className={combinedClassName} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
