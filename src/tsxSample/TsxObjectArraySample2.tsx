import React from 'react'
import { products } from '../data/products'

function TsxObjectArraySample2() {


    return (<>
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Unit Price</td>
                    <td>Stock</td>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((item: any) => {

                        var stockColor = "";

                        if(item.unitsInStock == 0){
                            stockColor = 'tomato';
                        }

                        return <tr style={{backgroundColor:stockColor}}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice.toFixed(2)}</td>
                            <td>{item.unitsInStock}</td>

                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default TsxObjectArraySample2