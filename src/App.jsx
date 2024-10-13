import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayouts from './Layouts/MainLayouts'
import JobPage from './pages/JobPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <HomePage />, //whaever element is here goes to the outlet as per the path
      },
      {
        path: '/jobs',
        element: <JobPage />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App

//1:34:20
