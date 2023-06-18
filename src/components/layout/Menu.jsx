import { Link } from "react-router-dom"

const HomeLink = () => <Link className="listMenu grey-text text-lighten-4" to="/">Home</Link>
const AboutLink = () => <Link className="listMenu grey-text text-lighten-4" to="about">About</Link>
const MyMusic = () => <Link className="listMenu grey-text text-lighten-4" to="myMusic">My Music</Link>
const Resume = () => <Link className="listMenu grey-text text-lighten-4" to="resume">Resume</Link>

export { HomeLink, AboutLink ,MyMusic,Resume}