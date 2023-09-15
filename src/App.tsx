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
import MUIGridSample from "./mui/MUIGridSample"
import DataGridSample from "./mui/DataGridSample"
import OrderDetail from "./mui/OrderDetail"
import Counter1 from "./contextSample/Counter1"
import Counter2 from "./contextSample/Counter2"
import { useContext } from "react"
import { CounterContext, CounterContextType } from "./contextSample/CounterContext"
import ProductsPage from "./contextSample/ProductsPage"
import Favorites from "./contextSample/Favorites"
import { FavoritesContext, FavoritesContextType } from "./contextSample/FavoritesContext"





function App() {

  const { counter } = useContext(CounterContext) as CounterContextType;
  const { favorites } =  useContext(FavoritesContext) as FavoritesContextType

  return (<>
    <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
      <li><Link to='/'>Home <span style={{color:'tomato'}}>({counter})</span></Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      {/* <li><Link to='/customers'>Customers</Link></li>
      <li><Link to='/suppliers'>Suppliers</Link></li>
      <li><Link to='/storagesample'>Storage Sample</Link></li>
      <li><Link to='/muiintro'>MUI Intro</Link></li>
      <li><Link to='/muigrid'>Grid Sample</Link></li>
      <li><Link to='/datagrid'>Data Grid</Link></li>
      <li><Link to='/counter1'>Counter - 1</Link></li>
      <li><Link to='/counter2'>Counter - 2</Link></li> */}
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/favorites'>Favorites <span style={{color:'tomato'}}>({favorites.length})</span></Link></li>






    </ul>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/suppliers" element={<SupplierPage />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/customers/:id" element={<CustomerDetail />} />
      <Route path="/storagesample" element={<StorageSample />} />
      <Route path="/muiintro" element={<MUIIntro />} />
      <Route path="/muigrid" element={<MUIGridSample />} />
      <Route path="/datagrid" element={<DataGridSample />} />
      <Route path="/orders/:id" element={<OrderDetail />} />
      <Route path="/counter1" element={<Counter1 />} />
      <Route path="/counter2" element={<Counter2 />} />
      <Route path="/products" element={<ProductsPage/>} />
      <Route path="/favorites" element={<Favorites/>} />

      <Route path="*" element={<NotFound />} />

    </Routes>

    <h3>Footer</h3>
  </>)
}

export default App