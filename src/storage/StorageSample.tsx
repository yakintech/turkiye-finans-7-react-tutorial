import React, { useState } from 'react'
import { User } from '../models/User';

function StorageSample() {

    const [name, setName] = useState('');
    const [surname, setsurname] = useState('');



    const save = () => {

        let newUser: User = {
            name: name,
            surname: surname
        }
        //JSON.stringify javascript objesini json a çevirir.
        localStorage.setItem('user', JSON.stringify(newUser));

    }

    return (<>
        <div>
            <label htmlFor="">Name:</label>
            <input type='text' onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Surname:</label>
            <input type='text' onChange={(e) => setsurname(e.target.value)} />
        </div>
        <button onClick={save}>Save Storage</button>
    </>)
}

export default StorageSample

