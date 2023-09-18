import React, { useRef, useState } from 'react'

function RefHookSample() {

    const [color, setColor] = useState('tomato');

    const h1Ref = useRef<HTMLHeadingElement>(null);

    const change = () => {

        h1Ref.current!.style.color = "blue"

        // setColor('aqua')
        //document.getElementById('title')!.style.color = 'black'
    }

    return (<>
        <h1 ref={h1Ref}>Hello React With Ref</h1>
        <h1 id='title' style={{color:color}}>Hello React</h1>
        <button onClick={change}>Change h1 Color</button>
    </>)
}

export default RefHookSample