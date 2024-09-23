import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobsListing from './components/JobsListing'
import ViewAllJobs from './components/ViewAllJobs'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero title="React jobs" subtitle="Become a react dev" />
      <HomeCards />
      <JobsListing />
      <ViewAllJobs />
    </>
  )
}

export default App
