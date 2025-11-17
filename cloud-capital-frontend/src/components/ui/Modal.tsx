import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/utils/cn'
import { Button } from './Button'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

// Componente Modal
export const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'md',
  className 
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  // Cerrar modal con ESC
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Evitar scroll del body
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Cerrar modal clickeando fuera
  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === modalRef.current) {
      onClose()
    }
  }

  if (!isOpen) return null

  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl'
  }

  return (
    <div
      ref={modalRef}
      className="modal fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div
        className={cn(
          'relative w-full rounded-xl bg-cc-card border border-cc-border shadow-cc-card-hover',
          sizes[size],
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header del modal */}
        {title && (
          <div className="flex items-center justify-between p-6 pb-4 border-b border-cc-border">
            <h2 className="text-xl font-semibold text-cc-text">{title}</h2>
            <Button
              variant="secondary"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0 hover:bg-cc-danger"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Sin título, mostrar solo botón de cerrar en la esquina */}
        {!title && (
          <div className="absolute top-4 right-4 z-10">
            <Button
              variant="secondary"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0 hover:bg-cc-danger"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Contenido del modal */}
        <div className={cn('p-6', title && 'pt-4')}>
          {children}
        </div>
      </div>
    </div>
  )
}

// Componentes auxiliares para estructura del modal
export const ModalHeader = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode
  className?: string 
}) => (
  <div className={cn('mb-4', className)}>
    {children}
  </div>
)

export const ModalTitle = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode
  className?: string 
}) => (
  <h3 className={cn('text-lg font-semibold text-cc-text mb-2', className)}>
    {children}
  </h3>
)

export const ModalDescription = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode
  className?: string 
}) => (
  <p className={cn('text-cc-subtext text-sm', className)}>
    {children}
  </p>
)

export const ModalFooter = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode
  className?: string 
}) => (
  <div className={cn('flex justify-end space-x-3 mt-6 pt-4 border-t border-cc-border', className)}>
    {children}
  </div>
)
