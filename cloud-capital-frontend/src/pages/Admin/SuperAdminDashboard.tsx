import { useState } from 'react'
import { SuperAdminLayout } from '@/components/layout/SuperAdminLayout'
import { AdminPanel } from './AdminPanel'
import { TasksList } from '@/pages/Tasks/TasksList'
import { SuperAdminTasks } from '@/pages/Tasks/SuperAdminTasks'

export const SuperAdminDashboard = () => {
  const [activePanel, setActivePanel] = useState<'admin' | 'tasks' | 'deposits'>('admin')

  const renderActivePanel = () => {
    switch (activePanel) {
      case 'admin':
        return <AdminPanel />
      case 'tasks':
        return <TasksList />
      case 'deposits':
        return <SuperAdminTasks />
      default:
        return <AdminPanel />
    }
  }

  return (
    <SuperAdminLayout activePanel={activePanel} onPanelChange={setActivePanel}>
      {renderActivePanel()}
    </SuperAdminLayout>
  )
}
