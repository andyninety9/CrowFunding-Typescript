import { useRoutes } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/Dashboard'
import path from './constants/path'

export default function useRouterElement() {
  const routeElements = useRoutes([
    {
      path: path.home,
      index: true,
      element: (
        <DashboardLayout>
          <Dashboard />
        </DashboardLayout>
      )
    }
  ])
  return routeElements
}
