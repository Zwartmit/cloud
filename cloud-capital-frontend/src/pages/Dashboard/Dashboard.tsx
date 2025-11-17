import { LogOut } from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import { Card, Button } from '@/components/ui'

// Dashboard placeholder
export const Dashboard = () => {
  const { logout, user } = useAuthStore()

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header temporal con logout */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-cc-text">Dashboard</h1>
            <p className="text-cc-subtext">Bienvenido, {user?.name}</p>
          </div>
          <Button 
            variant="secondary" 
            size="sm"
            onClick={() => logout()}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Cerrar sesión
          </Button>
        </div>

        {/* <Card className="p-8 text-center">
          <h2 className="text-xl font-semibold text-cc-text mb-4">
            🚧 Dashboard del Usuario 
          </h2>
          <p className="text-cc-subtext mb-6">
            Esta página se migrará próximamente con todas las funciones de tu plantilla:
            <br />
            • Balance principal y métricas<br />
            • Feed de actividad simulada<br />
            • Modales de depósito, retiro y reinversión<br />
            • Tabla de transacciones<br />
          </p>
          <Button 
            variant="primary"
            onClick={() => logout()}
          >
            Volver al inicio
          </Button>
        </Card> */}
      </div>
    </div>
  )
}
