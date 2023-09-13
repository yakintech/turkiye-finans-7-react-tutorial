import React from 'react'
import { User } from '../models/User';

function Home() {

  var userData = localStorage.getItem('user');

  var user: User = {
    name: '',
    surname: ''
  }

  if (userData != null) {
    user  = JSON.parse(userData!);
  }


  return (<>
    <h1>{user.name}</h1>
    <h1>{user.surname}</h1>
  </>
  )
}

export default Home