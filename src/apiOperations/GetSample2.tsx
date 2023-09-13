import axios from 'axios'
import React, { useEffect, useState } from 'react'

function GetSample2() {


    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        loadData();
    }, [])

    const loadData = () => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data)
                setloading(false);
            })
    }


    const deleteProduct = (id: any) => {
        //axios ile delete request atacağım

        var result = window.confirm("Want to delete?");
        if (result) {
            axios.delete('https://northwind.vercel.app/api/products/' + id)
                .then(res => {
                    loadData();
                })
                .catch(err => {
                    console.log('err', err);
                })
        }




    }


    return (<>
        {
            loading ? <h1>loading...</h1> : <table className='w3-table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products && products.map((item: any) => {
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.unitPrice}</td>
                                <td>{item.unitsInStock}</td>
                                <button onClick={() => deleteProduct(item.id)}>Delete</button>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        }

    </>
    )
}

export default GetSample2