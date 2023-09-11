import React from 'react'

function TsxEventSample() {

    const hello = () => {
        alert('Hello REACTJS!!');
    }

    const merhaba = () => {
        alert("Merhaba REACTJS!!");
    }

    const calc = (a: number, b: number) => {
        alert(a * b);
    }



    return (<>
        <button onClick={hello}>Hello Reactjs</button>
        <button onClick={() => merhaba()}>Merhaba Reactjs</button>
        <button onClick={() => calc(10, 5)}>Calc</button>
        
    </>
    )
}

export default TsxEventSample