import React, { useState } from 'react'
import AddProduct from './AddProduct'
import ProductList from './ProductList'
import { products } from '../data/products'

function ProductPage() {

    const [productList, setproductList] = useState<any[]>(products);
    const [isSort, setisSort] = useState(false)



    const deleteProduct = (id: number) => {
        var filteredProducts = productList.filter(q => q.id != id);
        setproductList([...filteredProducts]);
    }

    const add = (item: any) => {
        item.id = productList.length + 1;

        setproductList([...productList, item])
    }

    const sortByName = () => {
        if (!isSort){
            productList.sort((a: any, b: any) => a.name.localeCompare(b.name));
            setisSort(true)
        }
        else{
            productList.sort((a: any, b: any) => b.name.localeCompare(a.name));
            setisSort(false)
        }

        setproductList([...productList]);
    }

    return (<>
        <AddProduct add={add} />
        <ProductList productList={productList} deleteProduct={deleteProduct} sortByName={sortByName} />
    </>
    )
}

export default ProductPage