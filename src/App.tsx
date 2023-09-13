import { Link, Route, Routes } from "react-router-dom"
import About from "./routes/About"
import Blog from "./routes/Blog"
import Contact from "./routes/Contact"
import Home from "./routes/Home"
import NotFound from "./routes/NotFound"



function App() {

  return (<>
      <ul style={{display:'flex', justifyContent:'space-between'}}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

      <h3>Footer</h3>
  </>)
}

export default App