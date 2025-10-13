import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './auth/Login'
import MainLayout from './MainLayout'
import Signup from './auth/Signup'

function App() {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/signup',
      element: <Signup/>
    }
  ])

  return (
    <main>
      <RouterProvider router={appRouter}>

      </RouterProvider>
    </main>
    
  )
}

export default App
