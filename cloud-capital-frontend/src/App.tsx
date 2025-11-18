import { useAuthStore } from '@/stores/authStore'
import { AnimatedBackground } from '@/components/layout/AnimatedBackground'
import { LandingPage } from '@/pages/Landing/LandingPage'
import { LoginPage } from '@/pages/Auth/LoginPage'
import { Dashboard } from '@/pages/Dashboard/Dashboard'
import { AdminPanel } from '@/pages/Admin/AdminPanel'
import { SuperAdminDashboard } from '@/pages/Admin/SuperAdminDashboard'
import { TasksList } from '@/pages/Tasks/TasksList'
import { TaskDetail } from '@/pages/Tasks/TaskDetail'
import { InvestmentClassesPage } from '@/pages/InvestmentClasses/InvestmentClassesPage'

function App() {
  const { isAuthenticated, currentView, user } = useAuthStore()


  // Determinar qué componente renderizar según el estado (mejorado para mejor navegación)
  const renderCurrentView = () => {
    // Si no está autenticado, mostrar landing o login
    if (!isAuthenticated) {
      if (currentView === 'login') {
        return <LoginPage />
      }
      return <LandingPage />
    }

    // Usuario autenticado - revisar si intenta ir a landing (significa logout)
    if (currentView === 'landing') {
      // Si está autenticado pero la vista es landing, hacer logout automáticamente
      // Esto evita estados inconsistentes
      setTimeout(() => {
        // Pequeño delay para evitar bucles de render
        useAuthStore.getState().logout()
      }, 0)
      return <LandingPage />
    }

    // Usuario autenticado - mostrar vistas según rol
    if (user?.role === 'super_admin') {
      // Super Admin: dashboard completo con 3 paneles
      return <SuperAdminDashboard />
    } else if (user?.role === 'sub_admin') {
      // Sub Admin: panel administrativo simple
      switch (currentView) {
        case 'taskDetail':
          return <TaskDetail />
        case 'tasksPanel':
          return <TasksList />
        default:
          return <AdminPanel />
      }
    } else {
      // Usuario regular
      switch (currentView) {
        case 'investmentClasses':
          return <InvestmentClassesPage />
        default:
          return <Dashboard />
      }
    }
  }

  return (
    <div className="min-h-screen font-inter">
      {/* Canvas de fondo animado (exacto de tu plantilla) */}
      <AnimatedBackground />
      
      {/* Contenedor principal de la aplicación */}
      <div className="relative z-10">
        {/* Renderizar vista actual */}
        {renderCurrentView()}
      </div>
    </div>
  )
}

export default App
