import Navbar from './components/Navbar'
import Hero from './components/hero'
import HomeCards from './components/HomeCards'
import JobsListing from './components/JobsListing'

const App = () => {
  return (
    <hero>
      <Navbar />
      <Hero title="React jobs" subtitle="Become a react dev" />
      <HomeCards />
      <JobsListing />

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </hero>
  )
}

export default App
