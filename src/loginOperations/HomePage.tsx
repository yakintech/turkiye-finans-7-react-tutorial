import React, { useContext } from 'react'
import { LoginContext, LoginContextType } from './LoginContext'

function HomePage() {

  const {setisLogin} =useContext(LoginContext) as LoginContextType
  
  const signOut = () => {
    localStorage.setItem('token','')
    setisLogin(false);
  }

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  )
}

export default HomePage