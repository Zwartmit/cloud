import { forwardRef, ButtonHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'profit' | 'admin' | 'super-admin' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  isLoading?: boolean
}

// Componente Button
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, isLoading, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cc-primary disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variants = {
      primary: 'bg-cc-accent hover:bg-blue-600 text-white focus:ring-cc-accent shadow-cc-accent',
      secondary: 'bg-cc-secondary hover:bg-gray-600 text-cc-text border border-cc-border',
      danger: 'bg-cc-danger hover:bg-red-600 text-white focus:ring-cc-danger shadow-cc-danger',
      profit: 'bg-cc-profit hover:bg-green-600 text-white focus:ring-cc-profit shadow-cc-profit',
      admin: 'bg-cc-admin hover:bg-yellow-500 text-cc-primary font-bold focus:ring-cc-admin',
      'super-admin': 'bg-cc-super-admin hover:bg-orange-600 text-white font-bold focus:ring-cc-super-admin',
      outline: 'bg-transparent border-2 border-cc-accent text-cc-accent hover:bg-cc-accent hover:text-white'
    }
    
    const sizes = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-base',
      lg: 'h-12 px-6 text-lg'
    }
    
    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Cargando...
          </>
        ) : (
          children
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
