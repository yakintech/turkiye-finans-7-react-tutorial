import React, { useState } from 'react'
import AddProduct from './AddProduct'
import ProductList from './ProductList'
import { products } from '../data/products'

function ProductPage() {

    const [productList, setproductList] = useState<any[]>(products)

    const deleteProduct = (id: number) => {
        var filteredProducts = productList.filter(q => q.id != id);
        setproductList([...filteredProducts]);
    }

    const add = (item:any) => {
        item.id = productList.length + 1;

        setproductList([...productList, item])
    } 

    return (<>
        <AddProduct add={add} />
        <ProductList productList={productList} deleteProduct={deleteProduct} />
    </>
    )
}

export default ProductPage