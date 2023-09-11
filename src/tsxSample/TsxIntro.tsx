import React from 'react'

function TsxIntro() {

    var name = "Çağatay Yıldız"
    var number = 18;

    var product = {
        name: "IPhone",
        price:2000
    }

    var cities = ["İstanbul", "Ankara", "İzmir"];

    return (<>
        <h1>{name}</h1>
        <h1>{number}</h1>
        <h1>{product.price}</h1>
        <h1>Length: {cities.length}</h1>
    </>
    )
}

export default TsxIntro