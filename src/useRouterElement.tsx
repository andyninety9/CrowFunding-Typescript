import { useRoutes } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/Dashboard'
import path from './constants/path'
import SignInLayout from './layouts/SignInLayout'
import RegisterLayout from './layouts/RegisterLayout'

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
    },
    {
      path: path.signIn,
      element: <SignInLayout />
    },
    {
      path: path.register,
      element: <RegisterLayout />
    }
  ])
  return routeElements
}
