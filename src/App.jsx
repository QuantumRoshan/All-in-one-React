import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App

// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import HomeCards from './components/HomeCards'
// import JobsListing from './components/JobsListing'
// import ViewAllJobs from './components/ViewAllJobs'

{
  /* <>
<Navbar />
<Hero title="React jobs" subtitle="Become a react dev" />
<HomeCards />
<JobsListing />
<ViewAllJobs />
</> */
}

//1:22:48
