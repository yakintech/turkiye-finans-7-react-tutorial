import React, { useState } from 'react'

function StateSample3() {

    const [color, setcolor] = useState('tomato');

    const change = () => {
     
        var colors = ['orange', "black", "white", "tomato", "yellow", "green", "blue", "brown", "aqua", "pink"];

        var randomColorIndex = Math.floor(Math.random() * colors.length);

       setcolor(colors[randomColorIndex]);
        
    }

    return (<>
        <button onClick={change} style={{ width: 200, height: 200, backgroundColor: color }}>Change Color</button>

    </>
    )
}

export default StateSample3