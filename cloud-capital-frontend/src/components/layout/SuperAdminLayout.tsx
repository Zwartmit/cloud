import { Settings, List, Shield, LogOut } from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import { getPendingTasksCount, getSuperAdminTasksCount } from '@/data/mockData'
import { Button } from '@/components/ui'

interface SuperAdminLayoutProps {
  children: React.ReactNode
  activePanel: 'admin' | 'tasks' | 'deposits'
  onPanelChange: (panel: 'admin' | 'tasks' | 'deposits') => void
}

export const SuperAdminLayout = ({ children, activePanel, onPanelChange }: SuperAdminLayoutProps) => {
  const { logout } = useAuthStore()
  
  const pendingCount = getPendingTasksCount()
  const preApprovedCount = getSuperAdminTasksCount()

  return (
    <div className="min-h-screen flex bg-cc-primary">
      {/* Sidebar */}
      <aside className="w-16 bg-cc-secondary border-r border-cc-border flex flex-col items-center py-4">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-8 h-8 bg-cc-accent rounded-lg flex items-center justify-center">
            <span className="text-sm font-bold text-white">CC</span>
          </div>
        </div>

        {/* Navigation Icons */}
        <nav className="flex flex-col space-y-4 flex-1">
          {/* Panel de Administración */}
          <Button
            variant="secondary"
            size="sm"
            className={`w-10 h-10 p-0 relative ${activePanel === 'admin' ? 'bg-cc-accent text-white' : 'bg-transparent'}`}
            onClick={() => onPanelChange('admin')}
            title="Panel de Administración (Gestión de saldo)"
          >
            <Settings className="w-4 h-4" />
          </Button>

          {/* Tareas Pendientes */}
          <Button
            variant="secondary"
            size="sm"
            className={`w-10 h-10 p-0 relative ${activePanel === 'tasks' ? 'bg-cc-danger text-white' : 'bg-transparent'}`}
            onClick={() => onPanelChange('tasks')}
            title="Tareas Pendientes"
          >
            <List className="w-4 h-4" />
            {pendingCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-cc-danger text-white text-xs rounded-full flex items-center justify-center">
                {pendingCount}
              </span>
            )}
          </Button>

          {/* Depósitos Pre-Aprobados */}
          <Button
            variant="secondary"
            size="sm"
            className={`w-10 h-10 p-0 relative ${activePanel === 'deposits' ? 'bg-amber-600 text-white' : 'bg-transparent'}`}
            onClick={() => onPanelChange('deposits')}
            title="Depósitos Pre-Aprobados"
          >
            <Shield className="w-4 h-4" />
            {preApprovedCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-600 text-white text-xs rounded-full flex items-center justify-center">
                {preApprovedCount}
              </span>
            )}
          </Button>
        </nav>

        {/* Logout */}
        <Button
          variant="secondary"
          size="sm"
          className="w-10 h-10 p-0 bg-transparent hover:bg-cc-danger/20"
          onClick={() => logout()}
          title="Cerrar sesión"
        >
          <LogOut className="w-4 h-4" />
        </Button>
      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 overflow-hidden">
        {children}
      </main>
    </div>
  )
}
