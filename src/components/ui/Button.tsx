import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  asChild = false,
  className,
  children,
  ...props
}) => {
  const baseClasses = "transition-all duration-200 ease-in-out font-medium disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variantClasses = {
    primary: "bg-snackhouse-primary text-white hover:bg-snackhouse-primary/90 focus-visible:ring-snackhouse-primary/50",
    secondary: "bg-snackhouse-secondary text-white hover:bg-snackhouse-secondary/90 focus-visible:ring-snackhouse-secondary/50",
    outline: "border border-snackhouse-primary bg-transparent text-snackhouse-primary hover:bg-snackhouse-primary/10 hover:text-snackhouse-primary/90 focus-visible:ring-snackhouse-primary/50",
    ghost: "bg-transparent text-snackhouse-primary hover:bg-snackhouse-primary/10 hover:text-snackhouse-primary/90 focus-visible:ring-snackhouse-primary/50"
  };

  const sizeClasses = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4",
    lg: "h-11 px-5 text-lg"
  };

  const Component = asChild ? React.Fragment : 'button';

  return (
    <Component
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} rounded-lg ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;