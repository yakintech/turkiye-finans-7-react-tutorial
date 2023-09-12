import React, { useState } from 'react'

function StateIntro() {

    console.log('Component rendered!!');
    
    //number benim state üzerindeki değişkenim
    //setNumber benim değişkenimi değiştirecek fonksiyon
    //0 ise değişkenimin default değeri
    const [number, setNumber] = useState(0);

    const increase = () => {
        setNumber(number + 1)
    }

    return (<>
        <h1>{number}</h1>
        <button onClick={increase}>Increase</button>
    </>
    )
}

export default StateIntro

