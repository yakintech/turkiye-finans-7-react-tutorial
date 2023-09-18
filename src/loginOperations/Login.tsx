import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContext, LoginContextType } from './LoginContext';

function Login() {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [loading, setloading] = useState(false)

    const { setisLogin } = useContext(LoginContext) as LoginContextType

    const login = () => {

        setloading(true)
        axios.post('http://localhost:3001/token', { email, password })
            .then(res => {
                localStorage.setItem('token', res.data?.token)
                setloading(false)

                setisLogin(true)

            })
            .catch(err => {
                alert("EMail or password wrong!");
                setloading(false)


            })
    }

    return (<>
        {
            loading == true ? <h1>loading...</h1> : <>
                <div>
                    <label htmlFor="">EMail: </label>
                    <input type='text' onChange={(e) => setemail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Password: </label>
                    <input type='password' onChange={(e) => setpassword(e.target.value)} />
                </div>
                <div>
                    <button onClick={login}>Login</button>
                </div>
            </>
        }

    </>)
}

export default Login