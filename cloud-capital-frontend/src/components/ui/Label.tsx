import { forwardRef, LabelHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean
}

// Componente Label
const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, required, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        'text-sm font-medium text-cc-text leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className
      )}
      {...props}
    >
      {children}
      {required && <span className="text-cc-danger ml-1">*</span>}
    </label>
  )
)

Label.displayName = 'Label'

export { Label }
