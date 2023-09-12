import React, { useState } from 'react'
import { products } from '../data/products'

function StateObjectArraySample3() {

    const [productList, setproductList] = useState(products);

    const deleteProduct = (id: number) => {

        //filter fonksiyonu ile ben o id ye sahip OLMAYAN ÜRÜNLERİ BANA VER DİYORUM
        var filteredProducts = productList.filter(x => x.id != id);
        setproductList([...filteredProducts])
    }

    //hesaplama kodlarını bu şekilde yazmanın bir riski var bunu göreceğiz!
    var avgUnitPrice = 0;
    var totalPrice = 0;
    productList.forEach(item => {
        totalPrice = item.unitPrice + totalPrice
    })

    avgUnitPrice = totalPrice / productList.length;

    return (<>
        <h1>Avg Unit Price: {avgUnitPrice.toFixed(2)}</h1>
        <h1>Length: {productList.length}</h1>
        <table className='w3-table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    productList.map((item: any) => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice.toFixed(2)}</td>
                            <td><button onClick={() => deleteProduct(item.id)} className='w3-button w3-red'>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>)
}

export default StateObjectArraySample3