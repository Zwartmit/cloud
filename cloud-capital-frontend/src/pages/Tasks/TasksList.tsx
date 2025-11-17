// import { List, Play } from 'lucide-react'
// import { simulatedTasks } from '@/data/mockData'
// import { Button, Card } from '@/components/ui'
// import { formatUSDT } from '@/data/mockData'

// // Tareas Pendientes para Sub-Admin Review
// export const TasksList = () => {
//   // Filtrar tareas pendientes
//   const pendingTasks = simulatedTasks.filter(task => task.status === 'Pendiente')

//   const handleProcessTask = (taskId: number) => {
//     console.log(`Procesando tarea ${taskId}`)
//     // Aquí iría la lógica de procesamiento de tareas
//   }

//   const getTaskColor = (type: string) => {
//     switch (type) {
//       case 'Liquidación Total':
//         return 'border-cc-danger/30 bg-cc-danger/5'
//       case 'Depósito Manual':
//       case 'Depósito Manual (Usuario)':
//         return 'border-amber-600/30 bg-amber-600/5'
//       case 'Retiro Pendiente':
//         return 'border-red-500/30 bg-red-500/5'
//       default:
//         return 'border-cc-border bg-cc-card'
//     }
//   }

//   const getTaskTypeLabel = (type: string) => {
//     switch (type) {
//       case 'Liquidación Total':
//         return 'LIQUIDACIÓN TOTAL'
//       case 'Depósito Manual':
//         return 'DEPÓSITO MANUAL'
//       case 'Depósito Manual (Usuario)':
//         return 'DEPÓSITO MANUAL'
//       case 'Retiro Pendiente':
//         return 'RETIRO PENDIENTE'
//       default:
//         return type.toUpperCase()
//     }
//   }

//   return (
//     <div className="min-h-screen bg-cc-primary">
//       <div className="p-6">
//         {/* Header */}
//         <div className="flex items-center mb-6">
//           <List className="w-6 h-6 text-cc-danger mr-3" />
//           <h1 className="text-2xl font-bold text-cc-danger">
//             Tareas Pendientes ({pendingTasks.length})
//           </h1>
//           <span className="ml-4 text-sm text-cc-subtext">(Sub-Admin Review)</span>
//         </div>

//         {/* Lista de tareas */}
//         <div className="space-y-4">
//           {pendingTasks.map((task) => (
//             <Card
//               key={task.id}
//               className={`p-6 ${getTaskColor(task.type)}`}
//             >
//               <div className="flex justify-between items-start">
//                 <div className="flex-1">
//                   {/* Header de la tarea */}
//                   <div className="flex items-center gap-3 mb-2">
//                     <span className={`px-3 py-1 text-xs font-medium rounded-full ${
//                       task.type === 'Liquidación Total' 
//                         ? 'bg-cc-danger/20 text-cc-danger'
//                         : task.type.includes('Depósito')
//                         ? 'bg-amber-600/20 text-amber-600'
//                         : 'bg-red-500/20 text-red-500'
//                     }`}>
//                       {getTaskTypeLabel(task.type)}
//                     </span>
//                     <span className="text-cc-subtext text-xs">
//                       ID: {task.id}
//                     </span>
//                   </div>

//                   {/* Monto */}
//                   <div className="text-2xl font-bold text-cc-text mb-2">
//                     ${formatUSDT(task.amountUSD)} USD
//                   </div>

//                   {/* Detalles */}
//                   <div className="text-sm text-cc-subtext space-y-1">
//                     <div>
//                       <span className="font-medium">Usuario:</span> {task.userEmail}
//                     </div>
//                     <div>
//                       <span className="font-medium">Ref:</span> {task.reference}
//                     </div>
//                     <div>
//                       <span className="font-medium">Recibido:</span> {task.date}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Botón de acción */}
//                 <div className="flex flex-col gap-2">
//                   <Button
//                     variant="danger"
//                     size="sm"
//                     onClick={() => handleProcessTask(task.id)}
//                   >
//                     <Play className="w-4 h-4 mr-1" />
//                     Procesar Tarea
//                   </Button>
//                 </div>
//               </div>
//             </Card>
//           ))}

//           {pendingTasks.length === 0 && (
//             <Card className="p-8 text-center">
//               <div className="text-cc-subtext">
//                 No hay tareas pendientes para procesar.
//               </div>
//             </Card>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }
