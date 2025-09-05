import './App.css'
import Education from './components/education/education'
import Experience from './components/exp/exp'
import Landing from './components/landing/landing'
import Projects from './components/projects/projects'
import Stack from './components/stack/stack'
import Contact from './components/contact/contact'
import Research from './components/research/research'
import Footer from './components/footer/footer'
import LiveDate from './components/date/date'

function App() {


  return (
    <div className='mt-[0vw]'>
      <LiveDate />
      <Landing />
      <Contact />
      <Education />
      <Projects />
      <Stack />
      <Experience />
      <Research />
      <Footer />
    </div>
  )
}

export default App
