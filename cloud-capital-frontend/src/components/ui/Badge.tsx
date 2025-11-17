import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'danger' | 'super-admin' | 'profit' | 'admin' | 'gold-premium'
  children: React.ReactNode
}

// Componente Badge
const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-bold leading-none text-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cc-primary'
    
    const variants = {
      default: 'bg-cc-secondary text-cc-text border border-cc-border rounded-full px-2 py-1 text-xs',
      danger: 'task-count-badge', // Usa la clase CSS de index.css
      'super-admin': 'task-count-badge super-task-count-badge', // Combinación de clases
      profit: 'bg-cc-profit text-white rounded-full px-2 py-1 text-xs',
      admin: 'bg-cc-admin text-cc-primary rounded-full px-2 py-1 text-xs',
      'gold-premium': 'gold-premium-badge' // Usa la clase CSS de index.css
    }
    
    return (
      <div
        className={cn(baseStyles, variants[variant], className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Badge.displayName = 'Badge'

export { Badge }
