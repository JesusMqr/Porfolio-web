
import { Navbar } from "./components/sections/Navbar"
import { Hero } from "./components/sections/Hero"
import { Projects } from "./components/sections/Projects"
import { Experience } from "./components/sections/Experience"
import { Education } from "./components/sections/Education"

const App = () => {
  return (
    <>
    <header>
        <Navbar />
      </header>
      <main className="">
        <Hero />
        <Projects />
        <Experience />
        <Education />
      </main>
      <footer>
      </footer>
    </>
      

  )
}

export default App
