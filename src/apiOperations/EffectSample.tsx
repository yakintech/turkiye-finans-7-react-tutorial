import React, { useEffect, useState } from 'react'

function EffectSample() {

    console.log('component rendered!');
    
    const [counter, setcounter] = useState(0);

    //Aşağıdaki useEffect bloğu SADECE BİR KERE ÇALIŞIR!
    useEffect(() => {
        console.log('USE EFFECT!!');
        
    }, [])
    
    

    return (<>
        <h1>{counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increase</button>
    </>)
}

export default EffectSample