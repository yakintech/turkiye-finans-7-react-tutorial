import React, { useEffect, useState } from 'react'

function EffectSample() {
    
    const [counter, setcounter] = useState(0);
    const [counter2, setcounter2] = useState(0);


    //Aşağıdaki useEffect bloğu SADECE BİR KERE ÇALIŞIR! EĞER DİZİ İÇERİSİ BOŞ İSE!
    useEffect(() => {
        console.log('USE EFFECT - 1!!');
    }, [])


    useEffect(() => {
      
        console.log('USE EFFECT - 2!!');
    
      
    }, [counter2])
    
    
    

    return (<>
        <h1>{counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increase</button>
        <hr />
        <h1>{counter2}</h1>
        <button onClick={() => setcounter2(counter2 + 1)}>Increase - 2</button>
    </>)
}

export default EffectSample