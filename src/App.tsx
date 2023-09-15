import { Link, Route, Routes } from "react-router-dom"
import About from "./routeSample/About"
import Blog from "./routeSample/Blog"
import Contact from "./routeSample/Contact"
import CustomerDetail from "./routeSample/CustomerDetail"
import Customers from "./routeSample/Customers"
import Home from "./routeSample/Home"
import NotFound from "./routeSample/NotFound"
import SupplierPage from "./apiOperations/SupplierPage"
import StorageSample from "./storage/StorageSample"
import MUIIntro from "./mui/MUIIntro"



function App() {

  return (<>
      <ul style={{display:'flex', justifyContent:'space-between'}}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/customers'>Customers</Link></li>
        <li><Link to='/suppliers'>Suppliers</Link></li>
        <li><Link to='/storagesample'>Storage Sample</Link></li>
        <li><Link to='/muiintro'>MUI Intro</Link></li>


      </ul>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/suppliers" element={<SupplierPage/>} />
        <Route path="/customers" element={<Customers/>}/>
        <Route path="/customers/:id" element={<CustomerDetail/>} />
        <Route path="/storagesample" element={<StorageSample/>} />
        <Route path="/muiintro" element={<MUIIntro/>} />


        <Route path="*" element={<NotFound/>} />

      </Routes>

      <h3>Footer</h3>
  </>)
}

export default App