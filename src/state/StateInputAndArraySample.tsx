import React, { useState } from 'react'

function StateInputAndArraySample() {

    const [name, setname] = useState<string>('');
    const [surname, setsurname] = useState<string>('');

    const [users, setusers] = useState<any[]>([]);


    const add = () => {

        if (name != "" && surname != "") {
            const newUser = {
                id: users.length + 1,
                name,
                surname
            }

            setusers([...users, newUser]);
        }

    }

    const deleteUser = (id: number) => {

        var filteredUser = users.filter(q => q.id != id);
        setusers([...filteredUser])

    }


    return (<>
        <div>
            <label htmlFor="">Name: </label>
            <input type='text' onChange={(e) => setname(e.target.value)} />
        </div>

        <div>
            <label htmlFor="">Surname: </label>
            <input type='text' onChange={(e) => setsurname(e.target.value)} />
        </div>

        <div>
            <button onClick={add}>Add</button>
        </div>
        <div>
            <h1>Length: {users.length}</h1>
            <table className='w3-table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Surname</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map((item: any) => {
                            return <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.surname}</td>
                                <td><button className='w3-button w3-red' onClick={() => deleteUser(item.id)}>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </>)
}

export default StateInputAndArraySample