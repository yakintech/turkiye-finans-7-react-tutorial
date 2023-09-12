import React, { useState } from 'react'

function StateArraySample2() {

    const [numbers, setnumbers] = useState([-2, 5, 11, 20]);

    const addRandom = () => {
        //Öncelikle random bir sayı generate ettim
        var randomNumber = Math.floor(Math.random() * 9999999);

        //State e bu random number eklemem gerek

        setnumbers([...numbers, randomNumber])
    }

    return (<>
        <h1>Length: {numbers.length}</h1>
        <ul>
            {
                numbers.map((item: any) => <li>{item}</li>)
            }
        </ul>
        <button onClick={addRandom}>Add Random Number</button>
    </>)
}

export default StateArraySample2