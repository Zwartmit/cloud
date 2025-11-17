import { forwardRef, SelectHTMLAttributes } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/utils/cn'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  variant?: 'default' | 'error'
  options?: { value: string; label: string }[]
  placeholder?: string
}

// Componente Select
const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant = 'default', options = [], placeholder, children, ...props }, ref) => {
    const baseStyles = 'flex h-10 w-full rounded-lg border px-3 py-2 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cc-primary disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer'
    
    const variants = {
      default: 'bg-cc-secondary border-cc-border text-cc-text focus:border-cc-accent focus:ring-cc-accent',
      error: 'bg-cc-secondary border-cc-danger text-cc-text focus:border-cc-danger focus:ring-cc-danger'
    }

    return (
      <div className="relative">
        <select
          className={cn(baseStyles, variants[variant], className)}
          ref={ref}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          {children}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-cc-subtext pointer-events-none" />
      </div>
    )
  }
)

Select.displayName = 'Select'

export { Select }
