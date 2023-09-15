import { Button } from '@mui/material';
import { DataGrid, nlNL, trTR } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';

function DataGridSample() {

    const [orders, setorders] = useState([]);


    const navigate = useNavigate();

    useEffect(() => {

        loadData();

    }, [])


    const loadData = () => {
        axios.get('https://northwind.vercel.app/api/orders')
            .then(res => {
                setorders(res.data);
            })
    }


    const removeOrder = (item: any) => {

        axios.delete('https://northwind.vercel.app/api/orders/' + item.id)
            .then(res => {
                loadData();
            })
    }


    const goDetail = (item: any) => {

        navigate('/orders/' + item.id)
    }

    var columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 200
        },
        {
            field: 'shipName',
            headerName: 'Ship Name',
            width: 200
        },
        {
            field: 'shipVia',
            headerName: 'Ship Via',
            width: 200
        },
        {
            field: 'freight',
            headerName: 'Freight',
            width: 200
        },
        {
            field: 'detail',
            headerName: 'Detail',
            width: 200,
            renderCell: (item: any) => <Button onClick={() => goDetail(item)} color='primary' variant='contained'>Go Detail</Button>
        },
        {
            field: 'delete',
            headerName: 'Delete',
            width: 200,
            renderCell: (item: any) => <Button onClick={() => removeOrder(item)} color='error' variant='contained'>Delete</Button>
        }
    ]

    return (<>

        <DataGrid
            localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
            rows={orders}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: { pageSize: 10, page: 0 },
                },
            }}
        />

    </>
    )
}

export default DataGridSample