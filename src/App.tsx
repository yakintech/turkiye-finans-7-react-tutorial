import React from 'react'
import Login from './loginOperations/Login'
import Orders from './loginOperations/Orders'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (<>

    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/orders' element={<Orders/>} />
    </Routes>
  </>
  )
}

export default App