import React, { useState } from 'react'
import { products } from '../data/products'

function StateFavSample() {

    const [productList, setproductList] = useState(products);
    const [favProducts, setfavProducts] = useState<any[]>([]);

    const addToFav = (item: any) => {
        //eğer bu ürün favorilerde varsa koy yoksa işlem yapma

        //ürün var mı find metodu ile kontrol ediyorum ( ID ye göre)

        var product = favProducts.find((q: any) => q.id == item.id);

        if (!product)
            setfavProducts([...favProducts, item])
    }

    const removeToFav = (item: any) => {
        var filteredFavProducts = favProducts.filter((q: any) => q.id != item.id);

        setfavProducts([...filteredFavProducts])
    }

    return (<>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>


            <ul>
                <h1>Products</h1>
                {
                    productList.map((item) => {
                        return <li style={{ cursor: 'pointer' }} onClick={() => addToFav(item)}>{item.name}</li>
                    })
                }
            </ul>
            <ul>
                <h1>Favorites</h1>
                <h1>Length: {favProducts.length}</h1>
                <button onClick={() => setfavProducts([])}>Empty Favorites</button>
                {
                    favProducts.map((item: any) => {
                        return <li style={{ cursor: 'pointer' }} onClick={() => removeToFav(item)}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    </>)
}

export default StateFavSample