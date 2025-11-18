import { useState } from 'react'
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import { Button, Card, FormField } from '@/components/ui'

// Login Page
export const LoginPage = () => {
  const { setCurrentView, login } = useAuthStore()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    general: ''
  })

  // Manejar cambios en los inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '', general: '' }))
    }
  }

  // Validar formulario
  const validateForm = () => {
    const newErrors = { email: '', password: '', general: '' }
    let isValid = true

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Formato de email inválido'
      isValid = false
    }

    if (!formData.password.trim()) {
      newErrors.password = 'La contraseña es requerida'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  // Manejar login
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsLoading(true)
    setErrors({ email: '', password: '', general: '' })

    try {
      const result = await login(formData)
      
      if (!result.success) {
        setErrors(prev => ({ ...prev, general: result.message || 'Error de autenticación' }))
      }
      // Si es exitoso, el useAuthStore se encarga de la navegación automáticamente
    } catch (error) {
      setErrors(prev => ({ ...prev, general: 'Error de conexión. Intenta de nuevo.' }))
    } finally {
      setIsLoading(false)
    }
  }

  // Botón para completar automáticamente
  const fillDemo = (email: string, password: string) => {
    setFormData({ email, password })
    setErrors({ email: '', password: '', general: '' })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setCurrentView('landing')}
          className="mb-6 text-cc-subtext hover:text-cc-text"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al inicio
        </Button>

        <Card className="p-8">
          <div className="text-center mb-8">
            <div className="text-2xl font-bold text-cc-text mb-2">
              <span className="text-cc-accent">Cloud</span>Capital
            </div>
            <p className="text-cc-subtext">Accede a tu cuenta de inversión</p>
          </div>

          {errors.general && (
            <div className="mb-6 p-4 rounded-lg bg-cc-danger/10 border border-cc-danger text-cc-danger text-sm">
              {errors.general}
            </div>
          )}

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <FormField
              label="Correo electrónico"
              name="email"
              required
              error={errors.email}
              inputProps={{
                type: 'email',
                placeholder: 'tu@email.com',
                value: formData.email,
                onChange: handleInputChange,
                leftIcon: <Mail className="w-4 h-4" />,
                autoComplete: 'email'
              }}
            />

            {/* Contraseña */}
            <FormField
              label="Contraseña"
              name="password"
              required
              error={errors.password}
              inputProps={{
                type: showPassword ? 'text' : 'password',
                placeholder: '••••••••',
                value: formData.password,
                onChange: handleInputChange,
                leftIcon: <Lock className="w-4 h-4" />,
                rightIcon: (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="hover:text-cc-text transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                ),
                autoComplete: 'current-password'
              }}
            />

            {/* Botón de login */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              isLoading={isLoading}
              disabled={isLoading}
            >
              {isLoading ? 'Verificando...' : 'Acceder'}
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-cc-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-cc-card text-cc-subtext">Cuentas de demo</span>
            </div>
          </div>

          {/* Botones demo */}
          <div className="space-y-3">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="w-full text-left justify-start"
              onClick={() => fillDemo('admin@cloudcapital.com', 'admin123')}
            >
              <div className="flex items-center w-full">
                <div className="w-3 h-3 rounded-full bg-cc-super-admin mr-3" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-cc-text">Super Admin</div>
                  <div className="text-xs text-cc-subtext">admin@cloudcapital.com</div>
                </div>
              </div>
            </Button>

            <Button
              type="button"
              variant="outline"
              size="sm"
              className="w-full text-left justify-start"
              onClick={() => fillDemo('subadmin@cc.com', 'subadmin123')}
            >
              <div className="flex items-center w-full">
                <div className="w-3 h-3 rounded-full bg-cc-admin mr-3" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-cc-text">Sub Admin</div>
                  <div className="text-xs text-cc-subtext">subadmin@cc.com</div>
                </div>
              </div>
            </Button>

            <Button
              type="button"
              variant="outline"
              size="sm"
              className="w-full text-left justify-start"
              onClick={() => fillDemo('andres@gmail.com', 'Andres')}
            >
              <div className="flex items-center w-full">
                <div className="w-3 h-3 rounded-full bg-cc-accent mr-3" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-cc-text">Usuario Demo</div>
                  <div className="text-xs text-cc-subtext">andres@gmail.com</div>
                </div>
              </div>
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-cc-subtext">
            <p>¿Problemas para acceder?</p>
            <button className="text-cc-accent hover:underline mt-1">
              Contactar soporte
            </button>
          </div>
        </Card>
      </div>
    </div>
  )
}
