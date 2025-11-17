import { Card, Button } from '@/components/ui'

// Placeholder de InvestmentClassesPage - luego migraremos renderInvestmentClasses completo
export const InvestmentClassesPage = () => {
  return (
    <div className="min-h-screen p-6">
      <Card className="p-8 text-center">
        <h1 className="text-2xl font-bold text-cc-text mb-4">
          Clases de Inversión - En construcción
        </h1>
        <p className="text-cc-subtext mb-6">
          Aquí verás todas las clases de inversión (cloud y mining) con sus detalles.
        </p>
        <Button variant="secondary">Próximamente</Button>
      </Card>
    </div>
  )
}
