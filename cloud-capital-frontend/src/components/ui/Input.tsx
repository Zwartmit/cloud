import { forwardRef, InputHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'error'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

// Componente Input
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', type, leftIcon, rightIcon, ...props }, ref) => {
    const baseStyles = 'flex h-10 w-full rounded-lg border px-3 py-2 text-sm transition-all duration-200 placeholder:text-cc-subtext focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cc-primary disabled:cursor-not-allowed disabled:opacity-50'
    
    const variants = {
      default: 'bg-cc-secondary border-cc-border text-cc-text focus:border-cc-accent focus:ring-cc-accent',
      error: 'bg-cc-secondary border-cc-danger text-cc-text focus:border-cc-danger focus:ring-cc-danger'
    }

    if (leftIcon || rightIcon) {
      return (
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cc-subtext">
              {leftIcon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              baseStyles,
              variants[variant],
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              className
            )}
            ref={ref}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cc-subtext">
              {rightIcon}
            </div>
          )}
        </div>
      )
    }

    return (
      <input
        type={type}
        className={cn(baseStyles, variants[variant], className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export { Input }
