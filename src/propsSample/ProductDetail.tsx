import React from 'react'

function ProductDetail(props: any) {



    return (<>
        <h1>Detail Component</h1>
        <h1>Name: {props.name}</h1>
        <h1>Price: {props.unitPrice}</h1>
        <h1>Stock: {props.unitsInStock}</h1>
        <ul>
            {
                props.points.map((item:any) => <li>{item}</li>)
            }
        </ul>
    </>)
}

export default ProductDetail