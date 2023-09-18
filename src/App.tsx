import React, { useContext } from 'react'
import Login from './loginOperations/Login'
import Orders from './loginOperations/Orders'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './loginOperations/HomePage'
import { LoginContext, LoginContextType } from './loginOperations/LoginContext'
import EffectSample from './apiOperations/EffectSample'


function App() {

  const { isLogin, setisLogin, loading } = useContext(LoginContext) as LoginContextType


  const loginControl = () => {

    if (isLogin) {
      return <>
        <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/orders'>Orders</Link></li>
        </ul>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>

        <p>Footer</p>
      </>
    }

    else {
      return <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    }
  }


  return <EffectSample/>
  return (<>

    {
      loading ? <h1>loading...</h1> : loginControl()
    }

  </>
  )
}

export default App