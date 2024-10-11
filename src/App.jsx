import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/about" element={<h1>My App</h1>} />)
)

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
