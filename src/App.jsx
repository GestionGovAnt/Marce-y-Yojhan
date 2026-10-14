import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { brand, team } from './data/team'

export default function App() {
  useEffect(() => {
    document.title = brand.name

    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', brand.description)

    const socialTitle = document.querySelector('meta[property="og:title"]')
    if (socialTitle) socialTitle.setAttribute('content', brand.name)

    const socialDescription = document.querySelector('meta[property="og:description"]')
    if (socialDescription) socialDescription.setAttribute('content', brand.description)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        {team.some(profile => profile.projects.length) && <Projects />}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
