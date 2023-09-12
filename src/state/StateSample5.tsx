import React, { useState } from 'react'

function StateSample5() {

    const [width, setwidth] = useState(200);
    const [height, setheight] = useState(200);

    const change = () => {
        var randomX = Math.floor(Math.random() * 900);
        var randomY = Math.floor(Math.random() * 900);

        setwidth(randomX);
        setheight(randomY);


    }

  return (<>
    
    <button onClick={change}>Change Size</button>
    <div style={{width:width, height:height, borderStyle:'solid', backgroundColor:'aqua'}}>

    </div>
  </>
  )
}

export default StateSample5