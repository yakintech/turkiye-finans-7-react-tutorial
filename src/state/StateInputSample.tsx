import React, { useState } from 'react'

function StateInputSample() {

    const [number, setnumber] = useState("");
    const [result, setresult] = useState(0);

    
    const add = () => {
        setresult(result + Number(number));
    }

    return (<>
    <div>
        <label>Number: </label>
        <input type='text' onChange={(e) => setnumber(e.target.value)} />

    </div>
        <button onClick={add}>Add</button>
        <hr></hr>
        <h1>Result: {result}</h1>
    </>)
}

export default StateInputSample