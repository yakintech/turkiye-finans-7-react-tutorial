import React, { useState } from 'react'
import ChildComp from './ChildComp'

function ParentComp() {

    console.log('Hello Parent Comp!');
    

    const [counter, setcounter] = useState(0)

    return (<>
        <h1>Parent Comp</h1>
        <h1>{counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increase</button>
        <hr />
        <ChildComp />
    </>)
}

export default ParentComp