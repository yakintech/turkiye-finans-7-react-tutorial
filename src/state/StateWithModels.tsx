import React, { useState } from 'react'

function StateWithModels() {

    var usersTestData: User[] = [
        {
            name: 'Çağatay',
            surname: 'Yıldız'
        },
        {
            name: 'Ali',
            surname: 'Yılmaz'
        },
    ]
    const [users, setusers] = useState<User[]>(usersTestData);

    return (<>
        {
            users.map((item: User) => <h1>{item.name}</h1>)
        }
    </>
    )
}

export default StateWithModels


interface User {
    name?: string
    surname?: string
}

