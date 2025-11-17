import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'main-balance' | 'landing' | 'small'
  borderColor?: 'accent' | 'profit' | 'danger' | 'admin' | 'current'
  children: React.ReactNode
}

// Componente Card
const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', borderColor, children, ...props }, ref) => {
    const baseStyles = 'rounded-xl transition-all duration-200 ease-in-out'
    
    const variants = {
      default: 'card', // Usa la clase CSS definida en index.css
      'main-balance': 'main-balance-card', // Balance principal del dashboard
      landing: 'landing-card', // Cards de la landing page
      small: 'card card-small' // Cards pequeñas que no tienen transform en hover
    }
    
    const borderColors = {
      accent: 'border-cc-accent',
      profit: 'border-cc-profit',
      danger: 'border-cc-danger',
      admin: 'border-cc-admin',
      current: 'class-current' // Para la clase de inversión actual
    }
    
    return (
      <div
        className={cn(
          baseStyles,
          variants[variant],
          borderColor && borderColors[borderColor],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

// Subcomponentes para estructura consistente
const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6 pb-4', className)}
      {...props}
    />
  )
)
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-tight text-cc-text', className)}
      {...props}
    >
      {children}
    </h3>
  )
)
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-cc-subtext', className)}
      {...props}
    />
  )
)
CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn('p-6 pt-0', className)} 
      {...props} 
    />
  )
)
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  )
)
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
