import Sky from './components/sky'
import Navigation from "./components/navigation"
import Herosection from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import "./index.css"
import MoonMessage from './components/moon'
import Footer from './components/footer'
export default function App() {
    return (
        <div>
            <Navigation />
            <div style={{ fontFamily: "PTMono,monospace" }}>
                <Sky />
                <Herosection />
                <About />
                <Skills />
                <MoonMessage />
                <Projects />
                <Footer />
            </div>
        </div>
    )
}
