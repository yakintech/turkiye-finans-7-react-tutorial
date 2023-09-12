import React, { useState } from 'react'

function AddProduct(props: any) {

    const { add } = props;
    const [name, setname] = useState('');
    const [unitPrice, setunitPrice] = useState('');
    const [unitsInStock, setunitsInStock] = useState('');


    return (<>
        <div>
            <label htmlFor="">Name: </label>
            <input type='text' onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Unit Price: </label>
            <input type='text' onChange={(e) => setunitPrice(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Stock: </label>
            <input type='text' onChange={(e) => setunitsInStock(e.target.value)} />
        </div>
        <div>
            <button onClick={() => add({name,unitPrice,unitsInStock})}>Add</button>
        </div>
    </>
    )
}

export default AddProduct