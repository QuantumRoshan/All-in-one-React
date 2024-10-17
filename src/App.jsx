import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayouts from './Layouts/MainLayouts'
import JobPage from './pages/JobPage'
import NotFound from './pages/NotFound'
import SingleJob from './pages/SingleJob'
import jobLoader from './components/jobLoader'
import AddJobPage from './pages/AddJobPage'

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
      {
        path: '/jobs/:id',
        element: <SingleJob />,
        loader: jobLoader,
      },
      {
        path: '/add-job',
        element: <AddJobPage />,
      },
      {
        path: '*', // Wildcard path for not found pages
        element: <NotFound />, // Render NotFound component when no other routes match
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App

//2:25:00
