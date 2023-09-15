import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { DataGrid, nlNL, trTR } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';

function DataGridSample() {

    const [orders, setorders] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [id, setid] = useState(0)


    const deleteOk = () => {
        setOpen(false);

        axios.delete('https://northwind.vercel.app/api/orders/' + id)
            .then(res => {
                loadData();
            })
    };

    const deleteCancel = () => {
        setOpen(false);
    };

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

        setOpen(true)
        setid(item.id)

    }


    const total = Math.random() * 9999


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
        },
        // {
        //     field: 'total',
        //     headerName: 'Total',
        //     width: 200,
        //     renderCell: (item: any) => console.log(item)
        // }
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


        <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Silme İşlemi
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Silmek istediğinize Emin misiniz?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={deleteCancel}>İptal</Button>
                <Button onClick={deleteOk} autoFocus>
                    Evet
                </Button>
            </DialogActions>
        </Dialog>

    </>
    )
}

export default DataGridSample