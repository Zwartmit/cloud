// import { Eye, Shield } from 'lucide-react'
// import { simulatedTasks } from '@/data/mockData'
// import { Button, Card } from '@/components/ui'
// import { formatUSDT } from '@/data/mockData'

// // Depósitos Pre-Aprobados para Super Admin
// export const SuperAdminTasks = () => {
//   // Filtrar tareas pre-aprobadas (las que tienen status Completada y son depósitos)
//   const preApprovedTasks = simulatedTasks.filter(task => 
//     task.status === 'Completada' && 
//     (task.type === 'Depósito Manual' || task.type === 'Depósito Manual (Usuario)')
//   ).slice(0, 2) // Solo mostrar 2 para coincidir con la imagen

//   const handleReviewAndApprove = (taskId: number) => {
//     console.log(`Revisando y aprobando tarea ${taskId}`)
//     // Aquí iría la lógica de aprobación final
//   }

//   return (
//     <div className="min-h-screen bg-cc-primary">
//       <div className="p-6">
//         {/* Header */}
//         <div className="flex items-center mb-6">
//           <Shield className="w-6 h-6 text-amber-600 mr-3" />
//           <h1 className="text-2xl font-bold text-amber-600">
//             Depósitos Pre-Aprobados ({preApprovedTasks.length})
//           </h1>
//           <span className="ml-4 text-sm text-cc-subtext">(Aprobación Final)</span>
//         </div>

//         {/* Lista de depósitos pre-aprobados */}
//         <div className="space-y-4">
//           {preApprovedTasks.map((task) => (
//             <Card
//               key={task.id}
//               className="p-6 bg-cc-card border border-amber-600/30"
//             >
//               <div className="flex justify-between items-start">
//                 <div className="flex-1">
//                   {/* Header de la tarea */}
//                   <div className="flex items-center gap-3 mb-2">
//                     <span className="px-3 py-1 bg-amber-600/20 text-amber-600 text-xs font-medium rounded-full">
//                       DEPÓSITO MANUAL [FINAL REVIEW]
//                     </span>
//                     <span className="text-cc-subtext text-xs">
//                       ID: {task.id}
//                     </span>
//                   </div>

//                   {/* Monto */}
//                   <div className="text-2xl font-bold text-cc-text mb-2">
//                     {formatUSDT(task.amountUSD)} USD
//                   </div>

//                   {/* Detalles del usuario */}
//                   <div className="text-sm text-cc-subtext space-y-1">
//                     <div>
//                       <span className="font-medium">Usuario:</span> {task.userEmail}
//                     </div>
//                     <div>
//                       <span className="font-medium">Ref:</span> TxID: 0x3c40...
//                     </div>
//                     <div>
//                       <span className="font-medium">Aprobado por:</span> Sub Admin One
//                     </div>
//                     <div>
//                       <span className="font-medium">Pre-aprobado el:</span> 2025-11-04 15:00
//                     </div>
//                   </div>
//                 </div>

//                 {/* Botón de acción */}
//                 <div className="flex flex-col gap-2">
//                   <Button
//                     variant="primary"
//                     size="sm"
//                     className="bg-amber-600 hover:bg-amber-700 text-white"
//                     onClick={() => handleReviewAndApprove(task.id)}
//                   >
//                     <Eye className="w-4 h-4 mr-1" />
//                     Revisar y Aprobar
//                   </Button>
//                 </div>
//               </div>
//             </Card>
//           ))}

//           {preApprovedTasks.length === 0 && (
//             <Card className="p-8 text-center">
//               <div className="text-cc-subtext">
//                 No hay depósitos pre-aprobados pendientes de revisión final.
//               </div>
//             </Card>
//           )}
//         </div>

//         {/* Footer */}
//         <div className="mt-8 text-center text-xs text-cc-subtext">
//           Cloud Capital Super Admin Center © 25
//         </div>
//       </div>
//     </div>
//   )
// }
