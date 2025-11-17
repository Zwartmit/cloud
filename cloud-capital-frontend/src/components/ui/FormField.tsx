import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import { Label } from './Label'
import { Input, InputProps } from './Input'
import { Select, SelectProps } from './Select'

export interface FormFieldProps {
  label: string
  name: string
  required?: boolean
  error?: string
  className?: string
  type?: 'input' | 'select'
  inputProps?: InputProps
  selectProps?: SelectProps
  children?: React.ReactNode
}

// Componente FormField que combina Label + Input/Select + Error
const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  ({ 
    label, 
    name, 
    required, 
    error, 
    className,
    type = 'input',
    inputProps,
    selectProps,
    children,
    ...props 
  }, ref) => {
    const hasError = !!error

    return (
      <div ref={ref} className={cn('space-y-2', className)} {...props}>
        <Label htmlFor={name} required={required}>
          {label}
        </Label>
        
        {type === 'input' && (
          <Input
            id={name}
            name={name}
            variant={hasError ? 'error' : 'default'}
            {...inputProps}
          />
        )}
        
        {type === 'select' && (
          <Select
            id={name}
            name={name}
            variant={hasError ? 'error' : 'default'}
            {...selectProps}
          >
            {children}
          </Select>
        )}
        
        {error && (
          <p className="text-sm text-cc-danger font-medium">
            {error}
          </p>
        )}
      </div>
    )
  }
)

FormField.displayName = 'FormField'

export { FormField }
