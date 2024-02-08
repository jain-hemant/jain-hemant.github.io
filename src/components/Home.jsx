import { About } from "./about/About"
import { Contact } from "./contact/Contact"
import { Navbar } from "./navbar/Navbar"
import { Skill } from "./skill/Skill"
export default function Home() {

    return <>
        <Navbar />
        <About />
        <Contact />
        <Skill />
    </>
}