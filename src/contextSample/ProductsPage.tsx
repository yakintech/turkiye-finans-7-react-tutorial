import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { FavoritesContext, FavoritesContextType } from './FavoritesContext';

function ProductsPage() {

    const [products, setproducts] = useState([]);

    const { favorites, setfavorites } = useContext(FavoritesContext) as FavoritesContextType;

    useEffect(() => {
        loadProducts();
    }, [])


    const favOperation = (item: any) => {
        //fav control
        var favProduct = favorites.find(q => q.id == item.id)

        if (!favProduct) {
            setfavorites([...favorites, item.row])
        }
        else {
            var filteredFavorites = favorites.filter(q => q.id != item.id);
            setfavorites([...filteredFavorites]);
        }

    }


    const favButtonText = (id: number) => {
        var favProduct = favorites.find(q => q.id == id);

        if (favProduct)
            return  "Remove to fav"
        else
            return "Add to fav"


    }

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 200
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 200
        },
        {
            field: 'unitPrice',
            headerName: 'Unit Price',
            width: 200
        },
        {
            field: 'Fav',
            headerName: 'Fav',
            width: 200,
            renderCell: (item: any) => <Button onClick={() => favOperation(item)} color='primary' 
            variant='contained'>
                {favButtonText(item.id)}
                </Button>
        }
    ]


    const loadProducts = () => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data);
            })
    }


    return (<>
        <DataGrid
            rows={products}
            columns={columns}
        />
    </>)
}

export default ProductsPage