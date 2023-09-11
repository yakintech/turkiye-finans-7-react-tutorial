import React from 'react'

function Style1() {

    var h1Style = {
        color:'aqua'
    }

    return (<>

        <h1 style={{ color: 'tomato', backgroundColor:'black' }}>Çağatay Yıldız</h1>
        <h1 style={h1Style}>Türkiye Finans</h1>
    </>)
}

export default Style1