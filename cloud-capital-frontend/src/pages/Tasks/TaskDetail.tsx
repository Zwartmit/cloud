import { Card, Button } from '@/components/ui'

// Placeholder de TaskDetail - luego migraremos renderTaskDetail completo
export const TaskDetail = () => {
  return (
    <div className="min-h-screen p-6">
      <Card className="p-8 text-center">
        <h1 className="text-2xl font-bold text-cc-text mb-4">
          Detalle de Tarea - En construcción
        </h1>
        <p className="text-cc-subtext mb-6">
          Aquí verás el detalle completo de depósitos, retiros y liquidaciones.
        </p>
        <Button variant="secondary">Próximamente</Button>
      </Card>
    </div>
  )
}
