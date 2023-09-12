import React, { useState } from 'react'

function StateArraySample() {

    const [cities, setcities] = useState(['İstanbul', 'İzmir', 'Ankara']);

    return (<>
        <button onClick={() => setcities([])}>Empty</button>
        <h1>Length: {cities.length}</h1>
        <ul>
            {
                cities.map((item: any) => <li>{item}</li>)
            }
        </ul>
    </>
    )
}

export default StateArraySample