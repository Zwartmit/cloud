  import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User, AppView, LoginCredentials } from '@/types'
import { 
  simulatedUsers, 
  authCredentials, 
  ADMIN_EMAIL, 
  DASHBOARD_EMAIL,
  getPendingTasksCount,
  getSuperAdminTasksCount 
} from '@/data/mockData'

interface AuthState {
  // Estado
  user: User | null
  isAuthenticated: boolean
  currentView: AppView
  currentLoggedInUserEmail: string
  
  // Acciones
  setCurrentView: (view: AppView) => void
  login: (credentials: LoginCredentials) => Promise<{ success: boolean; message?: string }>
  logout: () => void
  
  // Funciones auxiliares
  isAdmin: () => boolean
  isSubAdmin: () => boolean
  isSuperAdmin: () => boolean
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      // Estado inicial
      user: null,
      isAuthenticated: false,
      currentView: 'landing',
      currentLoggedInUserEmail: '',
      
      // Cambiar vista
      setCurrentView: (view: AppView) => {
        set({ currentView: view })
      },
      
      // Login
      login: async (credentials: LoginCredentials) => {
        const { email, password } = credentials
        
        // Verificar credenciales (exacto de tu lógica)
        const expectedPassword = authCredentials[email]
        if (!expectedPassword || expectedPassword !== password) {
          return { success: false, message: 'Credenciales incorrectas. Intenta de nuevo.' }
        }
        
        // Obtener usuario
        const user = simulatedUsers[email]
        if (!user) {
          return { success: false, message: 'Usuario no encontrado.' }
        }
        
        // Determinar vista inicial según el rol
        let initialView: AppView = 'dashboard'
        
        // Simplificado: tanto super_admin como sub_admin van al AdminPanel principal
        if (user.role === 'super_admin' || user.role === 'sub_admin') {
          initialView = 'adminPanel'
        }
        
        set({
          user,
          isAuthenticated: true,
          currentLoggedInUserEmail: email,
          currentView: initialView
        })
        
        // Mensajes de bienvenida
        let welcomeMessage = ''
        if (user.role === 'super_admin') {
          welcomeMessage = '¡Bienvenido, Super Administrador! Accediendo al Panel...'
        } else if (user.role === 'sub_admin') {
          welcomeMessage = '¡Bienvenido, Sub Administrador! Accediendo al Panel...'
        } else {
          welcomeMessage = '¡Bienvenido, Zeky! Accediendo al Dashboard...'
        }
        
        return { success: true, message: welcomeMessage }
      },
      
      // Logout
      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          currentLoggedInUserEmail: '',
          currentView: 'landing'
        })
      },
      
      // Funciones auxiliares
      isAdmin: () => {
        const { user } = get()
        return user?.role === 'sub_admin' || user?.role === 'super_admin'
      },
      
      isSubAdmin: () => {
        const { user } = get()
        return user?.role === 'sub_admin'
      },
      
      isSuperAdmin: () => {
        const { user } = get()
        return user?.role === 'super_admin'
      }
    }),
    {
      name: 'cloud-capital-auth',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        currentLoggedInUserEmail: state.currentLoggedInUserEmail,
      }),
    }
  )
)
