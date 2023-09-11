import React from 'react'

function User({ name, surname }: any) {

    // var { name, surname } = props;

    return (<>
        <h1>Name: {name}</h1>
        <h1>Surname: {surname}</h1>

    </>
    )
}

export default User